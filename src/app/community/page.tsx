import type { Metadata } from "next";
import Link from "next/link";
import CommunityForm from "../components/CommunityForm";
import { siteUrl } from "../seo";

export const revalidate = 300;

export const metadata: Metadata = {
  title: "AI Debugging Community Discussions - ContextClean",
  description:
    "Ask developers about AI debugging prompts, log cleanup, error context, and safer ways to share technical problems.",
  alternates: { canonical: `${siteUrl}/community` },
};

type GitHubIssue = {
  number: number;
  title: string;
  html_url: string;
  created_at: string;
  comments: number;
  user: { login: string };
  pull_request?: unknown;
};

async function getDiscussions() {
  try {
    const response = await fetch(
      "https://api.github.com/repos/hyuchao25/contextclean/issues?state=open&per_page=30",
      {
        headers: {
          Accept: "application/vnd.github+json",
          "User-Agent": "ContextClean-Community",
        },
        next: { revalidate: 300 },
      }
    );

    if (!response.ok) return [];

    const issues = (await response.json()) as GitHubIssue[];
    return issues
      .filter((issue) => !issue.pull_request && issue.title.startsWith("[Community]"))
      .slice(0, 12);
  } catch {
    return [];
  }
}

export default async function CommunityPage() {
  const discussions = await getDiscussions();

  return (
    <main className="px-4 py-12 text-stone-100 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <section>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300">
              Community
            </p>
            <h1 className="mt-4 text-5xl font-semibold tracking-tight text-white">
              Discuss the difficult parts of debugging with AI
            </h1>
            <p className="mt-6 text-lg leading-8 text-stone-300">
              Ask about prompts that misread an error, context that should not be
              removed, redaction decisions, or ways to make an engineering handoff
              easier to understand.
            </p>

            <div className="mt-8 space-y-4">
              {[
                ["Be specific", "Include the tool, error category, and what the AI answer got wrong."],
                ["Share the reasoning", "Explain which lines you kept or removed and why."],
                ["Protect private data", "Use a reduced example instead of a production log whenever possible."],
                ["Keep it useful", "Questions should help other developers learn from the discussion."],
              ].map(([title, body]) => (
                <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <h2 className="font-semibold text-white">{title}</h2>
                  <p className="mt-2 text-sm leading-6 text-stone-300">{body}</p>
                </div>
              ))}
            </div>
          </section>

          <CommunityForm />
        </div>

        <section className="mt-14">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-300">
                Recent discussions
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-white">
                Public questions from developers
              </h2>
            </div>
            <Link
              href="https://github.com/hyuchao25/contextclean/issues"
              className="text-sm font-semibold text-emerald-300 hover:text-emerald-200"
            >
              View all on GitHub
            </Link>
          </div>

          {discussions.length > 0 ? (
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {discussions.map((issue) => (
                <Link
                  key={issue.number}
                  href={issue.html_url}
                  className="rounded-[26px] border border-white/10 bg-white/[0.03] p-6 transition hover:border-emerald-300/30"
                >
                  <p className="text-xs text-stone-500">
                    #{issue.number} by {issue.user.login} · {issue.comments} replies
                  </p>
                  <h3 className="mt-3 text-lg font-semibold text-white">
                    {issue.title.replace(/^\[Community\]\s*/, "")}
                  </h3>
                  <p className="mt-4 text-xs text-stone-500">
                    Opened {new Date(issue.created_at).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </p>
                </Link>
              ))}
            </div>
          ) : (
            <div className="mt-6 rounded-[26px] border border-dashed border-white/15 bg-white/[0.02] p-8 text-center">
              <p className="font-semibold text-white">No public discussions yet</p>
              <p className="mt-2 text-sm text-stone-400">
                Start the first focused discussion using the form above.
              </p>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
