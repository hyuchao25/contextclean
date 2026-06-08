import type { Metadata } from "next";
import { AiNewsFeed, NewsMethodLink } from "../components/AiNewsFeed";
import { aiNewsSources, getAiNews } from "../lib/ai-news";
import { siteUrl } from "../seo";

export const revalidate = 21_600;

export const metadata: Metadata = {
  title: "AI News Radar - Official Model, Research and Developer Updates",
  description:
    "A frequently refreshed AI news feed built from official OpenAI, Google AI, Hugging Face, GitHub, and Microsoft Research sources.",
  alternates: { canonical: `${siteUrl}/ai-news` },
};

export default async function AiNewsPage() {
  const news = await getAiNews(24);
  const latestUpdate = news[0]?.publishedAt;

  return (
    <main className="px-4 py-12 text-stone-100 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <section className="grid gap-8 border-b border-white/10 pb-12 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-4xl">
            <p className="font-mono text-xs tracking-[0.22em] text-emerald-300">
              LIVE SIGNAL / OFFICIAL SOURCES
            </p>
            <h1 className="mt-5 text-5xl font-semibold tracking-[-0.04em] text-white sm:text-6xl">
              AI news without the recycled rumor layer.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-300">
              ContextClean monitors official AI company, research, open-source, and
              developer feeds. Each card links to the original publisher. We do not
              reproduce full articles or invent engagement numbers.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm text-stone-400">
            <p className="font-mono text-xs text-stone-500">FEED STATUS</p>
            <p className="mt-2 font-semibold text-white">
              {news.length > 0 ? `${news.length} current signals` : "Refresh pending"}
            </p>
            {latestUpdate ? (
              <p className="mt-1 text-xs">
                Newest source item:{" "}
                {new Intl.DateTimeFormat("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                }).format(new Date(latestUpdate))}
              </p>
            ) : null}
          </div>
        </section>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm text-stone-400">
            Refreshed up to every six hours. Source publication dates are shown.
          </p>
          <NewsMethodLink />
        </div>

        <section className="mt-8" aria-label="Latest AI news">
          <AiNewsFeed items={news} interactive />
        </section>

        <section
          id="method"
          className="mt-14 grid gap-8 rounded-[30px] border border-white/10 bg-stone-950/75 p-7 lg:grid-cols-2 sm:p-9"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-300">
              Ranking method
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-white">
              “Hot” means fresh and relevant, not secretly popular.
            </h2>
            <p className="mt-4 text-sm leading-7 text-stone-300">
              Items are ranked by recency with a small relevance boost for model
              releases, agents, coding tools, benchmarks, safety, and open-source
              work. RSS feeds do not expose reliable cross-site view counts, so the
              radar does not claim to measure universal popularity.
            </p>
            <p className="mt-4 text-sm leading-7 text-stone-300">
              Titles, short feed summaries, dates, and destination URLs come from the
              publishers. ContextClean removes markup, validates destination domains,
              deduplicates URLs, and links readers back to the original article.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300">
              Monitored publishers
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {aiNewsSources.map((source) => (
                <a
                  key={source.name}
                  href={source.siteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm font-semibold text-white hover:border-emerald-300/25"
                >
                  {source.name} ↗
                </a>
              ))}
            </div>
            <p className="mt-5 text-xs leading-6 text-stone-500">
              Inclusion is editorial, not an endorsement. A source outage only removes
              that feed from the current refresh; it does not import stories from
              unverified mirrors.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
