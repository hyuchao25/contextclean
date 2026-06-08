export type AiNewsItem = {
  id: string;
  title: string;
  url: string;
  summary: string;
  source: string;
  sourceUrl: string;
  publishedAt: string;
  topics: string[];
  score: number;
};

type NewsSource = {
  name: string;
  feedUrl: string;
  siteUrl: string;
};

const sources: NewsSource[] = [
  {
    name: "OpenAI",
    feedUrl: "https://openai.com/news/rss.xml",
    siteUrl: "https://openai.com/news/",
  },
  {
    name: "Google AI",
    feedUrl: "https://blog.google/technology/ai/rss/",
    siteUrl: "https://blog.google/technology/ai/",
  },
  {
    name: "Hugging Face",
    feedUrl: "https://huggingface.co/blog/feed.xml",
    siteUrl: "https://huggingface.co/blog",
  },
  {
    name: "GitHub AI & ML",
    feedUrl: "https://github.blog/ai-and-ml/feed/",
    siteUrl: "https://github.blog/ai-and-ml/",
  },
  {
    name: "Microsoft Research",
    feedUrl: "https://www.microsoft.com/en-us/research/feed/",
    siteUrl: "https://www.microsoft.com/en-us/research/",
  },
];

const topicRules = [
  { topic: "Models", pattern: /\b(model|reasoning|multimodal|language model|llm)\b/i },
  { topic: "Agents", pattern: /\b(agent|agentic|computer use|tool use)\b/i },
  { topic: "Coding", pattern: /\b(code|coding|developer|github|software)\b/i },
  { topic: "Research", pattern: /\b(research|paper|benchmark|evaluation)\b/i },
  { topic: "Safety", pattern: /\b(safety|security|alignment|responsible ai|risk)\b/i },
  { topic: "Open source", pattern: /\b(open source|weights|hugging face|dataset)\b/i },
];

const relevanceTerms =
  /\b(launch|release|introduc|new model|agent|coding|developer|reasoning|benchmark|safety|open source)\b/i;

function decodeEntities(value: string) {
  const entities: Record<string, string> = {
    amp: "&",
    apos: "'",
    gt: ">",
    hellip: "…",
    ldquo: "“",
    lsquo: "‘",
    lt: "<",
    mdash: "—",
    nbsp: " ",
    ndash: "–",
    quot: '"',
    rdquo: "”",
    rsquo: "’",
  };

  return value
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/&#(\d+);/g, (_, code: string) =>
      String.fromCodePoint(Number.parseInt(code, 10)),
    )
    .replace(/&#x([0-9a-f]+);/gi, (_, code: string) =>
      String.fromCodePoint(Number.parseInt(code, 16)),
    )
    .replace(/&([a-z]+);/gi, (match, name: string) => entities[name] ?? match);
}

function plainText(value: string) {
  return decodeEntities(
    value
      .replace(/<script[\s\S]*?<\/script>/gi, " ")
      .replace(/<style[\s\S]*?<\/style>/gi, " ")
      .replace(/<[^>]+>/g, " "),
  )
    .replace(/\s+/g, " ")
    .trim();
}

function readTag(block: string, names: string[]) {
  for (const name of names) {
    const match = block.match(
      new RegExp(`<${name}(?:\\s[^>]*)?>([\\s\\S]*?)<\\/${name}>`, "i"),
    );
    if (match?.[1]) return match[1];
  }
  return "";
}

function validArticleUrl(value: string, source: NewsSource) {
  const cleaned = plainText(value);

  try {
    const url = new URL(cleaned);
    const sourceHost = new URL(source.siteUrl).hostname.replace(/^www\./, "");
    const articleHost = url.hostname.replace(/^www\./, "");
    return articleHost === sourceHost || articleHost.endsWith(`.${sourceHost}`)
      ? url.toString()
      : "";
  } catch {
    return "";
  }
}

function getTopics(title: string, summary: string) {
  const text = `${title} ${summary}`;
  const topics = topicRules
    .filter((rule) => rule.pattern.test(text))
    .map((rule) => rule.topic);
  return topics.length > 0 ? topics.slice(0, 3) : ["AI"];
}

function scoreItem(publishedAt: string, title: string) {
  const ageHours = Math.max(
    0,
    (Date.now() - new Date(publishedAt).getTime()) / 3_600_000,
  );
  const freshness = Math.max(0, 100 - ageHours / 6);
  return Math.round(freshness + (relevanceTerms.test(title) ? 12 : 0));
}

function parseFeed(xml: string, source: NewsSource) {
  const blocks = xml.match(/<item(?:\s[^>]*)?>[\s\S]*?<\/item>/gi) ?? [];

  return blocks.slice(0, 20).flatMap((block): AiNewsItem[] => {
    const title = plainText(readTag(block, ["title"]));
    const url = validArticleUrl(readTag(block, ["link"]), source);
    const dateValue = plainText(readTag(block, ["pubDate", "published", "dc:date"]));
    const date = new Date(dateValue);
    const rawSummary = readTag(block, [
      "description",
      "content:encoded",
      "summary",
    ]);
    const summary = plainText(rawSummary).slice(0, 260);

    if (!title || !url || Number.isNaN(date.getTime())) return [];

    return [
      {
        id: `${source.name}:${url}`,
        title,
        url,
        summary: summary || `Read the official announcement from ${source.name}.`,
        source: source.name,
        sourceUrl: source.siteUrl,
        publishedAt: date.toISOString(),
        topics: getTopics(title, summary),
        score: scoreItem(date.toISOString(), title),
      },
    ];
  });
}

async function fetchSource(source: NewsSource) {
  try {
    const response = await fetch(source.feedUrl, {
      headers: {
        Accept: "application/atom+xml, application/rss+xml, application/xml, text/xml",
        "User-Agent": "ContextClean-News-Radar/1.0",
      },
      next: { revalidate: 21_600 },
      signal: AbortSignal.timeout(8_000),
    });

    if (!response.ok) return [];
    return parseFeed(await response.text(), source);
  } catch {
    return [];
  }
}

export async function getAiNews(limit = 30) {
  const results = (await Promise.all(sources.map(fetchSource))).flat();
  const unique = new Map<string, AiNewsItem>();

  for (const item of results) {
    const key = item.url.replace(/\/$/, "");
    if (!unique.has(key)) unique.set(key, item);
  }

  const ranked = [...unique.values()].sort(
    (a, b) =>
      b.score - a.score ||
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
  const perSourceLimit = Math.max(1, Math.ceil(limit / sources.length));
  const sourceCounts = new Map<string, number>();
  const selected: AiNewsItem[] = [];
  const deferred: AiNewsItem[] = [];

  for (const item of ranked) {
    const count = sourceCounts.get(item.source) ?? 0;
    if (count >= perSourceLimit) {
      deferred.push(item);
      continue;
    }

    selected.push(item);
    sourceCounts.set(item.source, count + 1);
    if (selected.length === limit) return selected;
  }

  for (const item of deferred) {
    selected.push(item);
    if (selected.length === limit) break;
  }

  return selected;
}

export const aiNewsSources = sources.map(({ name, siteUrl }) => ({
  name,
  siteUrl,
}));
