import Link from "next/link";
import { TeamHandoffVisual } from "../components/VisualShowcase";
import { getPageSeo, siteUrl } from "../seo";

const seo = getPageSeo("/for-engineering-teams");

export const metadata = {
  title: seo.title,
  description: seo.description,
  alternates: {
    canonical: `${siteUrl}${seo.path}`,
  },
};

const teamWorkflows = [
  {
    title: "Pull request debugging",
    body:
      "Replace a full terminal dump with the failing command, relevant file, cleaned error, and one sentence about the expected behavior.",
  },
  {
    title: "CI failure review",
    body:
      "Summarize the failed job and step before asking a teammate or AI assistant to inspect the likely cause.",
  },
  {
    title: "Incident follow-up",
    body:
      "Keep the trace, service name, route, and timestamp context while removing repeated framework noise from the report.",
  },
  {
    title: "Async teammate handoff",
    body:
      "Share smaller context that can be scanned quickly by someone who was not present when the failure happened.",
  },
];

const handoffChecklist = [
  "What command, route, test, or job failed?",
  "What changed shortly before the failure appeared?",
  "Which cleaned error line appears most actionable?",
  "Which sensitive values were removed before sharing?",
  "What decision do you want from the reviewer or AI assistant?",
];

export default function ForEngineeringTeamsPage() {
  return (
    <main className="min-h-screen px-4 py-8 text-stone-100 sm:px-6 lg:px-8">
      <article className="mx-auto max-w-6xl rounded-[32px] border border-white/10 bg-stone-950/80 p-8">
        <Link href="/" className="text-sm text-emerald-300 hover:text-emerald-200">
          Back to ContextClean
        </Link>

        <p className="mt-8 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300/80">
          Teams
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white">
          ContextClean for engineering teams that share logs in PRs, issues, and AI debugging threads
        </h1>

        <div className="mt-6 space-y-5 text-sm leading-7 text-stone-300">
          <p>
            Engineering teams often waste review time because bug reports and CI
            failures arrive as raw terminal output. The useful error is present, but it
            is buried under setup logs, repeated stack frames, package manager output,
            and unrelated warnings.
          </p>
          <p>
            ContextClean gives teams a lightweight cleanup step before logs enter a
            pull request, issue, Slack thread, support escalation, or AI prompt.
          </p>
        </div>

        <section className="mt-8">
          <TeamHandoffVisual />
        </section>

        <section className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            ["Cleaner PR comments", "Paste smaller failure summaries instead of full build transcripts."],
            ["Faster handoffs", "Give teammates the failing command, file, and error without the surrounding noise."],
            ["Better AI prompts", "Send focused debugging context to ChatGPT, Claude, Cursor, or Codex."],
          ].map(([title, body]) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <h2 className="text-lg font-semibold text-white">{title}</h2>
              <p className="mt-2 text-sm leading-6 text-stone-300">{body}</p>
            </div>
          ))}
        </section>

        <section className="mt-10 grid gap-4 md:grid-cols-2">
          {teamWorkflows.map((workflow) => (
            <div
              key={workflow.title}
              className="rounded-[26px] border border-white/10 bg-white/[0.03] p-6"
            >
              <h2 className="text-xl font-semibold text-white">{workflow.title}</h2>
              <p className="mt-3 text-sm leading-7 text-stone-300">
                {workflow.body}
              </p>
            </div>
          ))}
        </section>

        <section className="mt-10 rounded-[28px] border border-emerald-400/15 bg-emerald-300/8 p-6">
          <h2 className="text-2xl font-semibold text-white">
            Team handoff checklist
          </h2>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {handoffChecklist.map((item) => (
              <p
                key={item}
                className="rounded-2xl border border-white/10 bg-black/20 p-4 text-sm leading-6 text-stone-300"
              >
                {item}
              </p>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-[28px] border border-white/10 bg-black/20 p-6">
          <h2 className="text-2xl font-semibold text-white">
            Example internal handoff
          </h2>
          <pre className="mt-4 overflow-x-auto rounded-2xl border border-white/10 bg-black/45 p-4 text-sm leading-6 text-stone-300">
{`Context: CI started failing after upgrading a package.
Command: npm run build
Relevant file: src/app/layout.tsx
Cleaned error: TypeError: Cannot read properties of undefined
What changed: analytics import moved into the root layout
Question: Is this a client/server boundary issue or a missing guard?`}
          </pre>
        </section>
      </article>
    </main>
  );
}
