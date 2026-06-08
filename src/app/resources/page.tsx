import type { Metadata } from "next";
import Link from "next/link";
import { getPageSeo, siteUrl } from "../seo";

const seo = getPageSeo("/resources");

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  alternates: { canonical: `${siteUrl}${seo.path}` },
};

const collections = [
  {
    title: "Start here",
    description: "Understand the workflow before trimming a production log.",
    links: [
      ["/how-contextclean-works", "How ContextClean works", "What the cleaner removes, preserves, and cannot decide for you."],
      ["/ai-debugging-checklist", "AI debugging checklist", "A short checklist for context, safety, and prompt quality."],
      ["/before-after-log-examples", "Before-and-after examples", "See realistic transformations and the reasoning behind each one."],
      ["/field-notes", "AI coding field notes", "Failure patterns, counter-prompts, polls, jokes, and an answer smell detector."],
      ["/prompt-clinic", "Prompt clinic", "Score a debugging request and practice evidence-driven scenarios."],
      ["/ai-news", "AI news radar", "Track fresh model, research, coding, open-source, and safety updates from official publishers."],
    ],
  },
  {
    title: "Safety",
    description: "Review logs for private data before they leave your environment.",
    links: [
      ["/remove-secrets-from-logs-before-sharing", "Remove secrets from logs", "Common credential formats, redaction steps, and manual checks."],
      ["/safe-log-sharing-for-ai", "Safe log sharing", "Decide what can be shared with a teammate or third-party AI service."],
      ["/privacy", "ContextClean privacy policy", "How the site, analytics, and browser-based cleaner handle data."],
    ],
  },
  {
    title: "Framework guides",
    description: "Keep the diagnostic details that matter for a specific toolchain.",
    links: [
      ["/clean-nodejs-error-log", "Node.js errors", "Module resolution, runtime stacks, and package-manager noise."],
      ["/clean-python-traceback-for-ai", "Python tracebacks", "Preserve exception chaining and application frames."],
      ["/clean-react-error-stack", "React error stacks", "Component failures, hydration warnings, and framework frames."],
      ["/clean-nextjs-build-error", "Next.js build errors", "Compiler output, route failures, and build-time context."],
      ["/clean-typescript-error-for-ai", "TypeScript diagnostics", "Keep the expected type, received type, and source location."],
      ["/clean-docker-build-log", "Docker build logs", "Reduce layer progress while preserving the failed instruction."],
    ],
  },
  {
    title: "Team workflows",
    description: "Prepare a report that another person can understand asynchronously.",
    links: [
      ["/clean-ci-error-log", "CI failure summaries", "Capture the job, step, command, exit code, and useful output."],
      ["/for-engineering-teams", "Engineering handoffs", "Use a consistent structure in PRs, issues, and debugging threads."],
      ["/for-support-and-bug-reports", "Support escalation", "Turn a customer log into a safer engineering report."],
      ["/ai-debugging-workflow-templates", "Prompt templates", "Reusable structures for build, runtime, CI, and support cases."],
      ["/community", "Community discussions", "Ask other developers about difficult AI debugging and context decisions."],
    ],
  },
];

export default function ResourcesPage() {
  return (
    <main className="px-4 py-12 text-stone-100 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300">
            Resource library
          </p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-white">
            Practical guides for cleaner and safer debugging context
          </h1>
          <p className="mt-6 text-lg leading-8 text-stone-300">
            These guides explain the decisions a text filter cannot make: which
            frames matter, what information is missing, when a log is unsafe to
            share, and how to turn cleaned output into a useful debugging request.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {collections.map((collection) => (
            <section key={collection.title} className="rounded-[30px] border border-white/10 bg-stone-950/70 p-7">
              <h2 className="text-2xl font-semibold text-white">{collection.title}</h2>
              <p className="mt-3 text-sm leading-6 text-stone-400">{collection.description}</p>
              <div className="mt-6 space-y-3">
                {collection.links.map(([href, title, body]) => (
                  <Link
                    key={href}
                    href={href}
                    className="block rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-emerald-300/30 hover:bg-emerald-300/[0.04]"
                  >
                    <h3 className="font-semibold text-white">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-stone-300">{body}</p>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>

        <section className="mt-10 rounded-[30px] border border-amber-300/15 bg-amber-300/[0.06] p-7">
          <h2 className="text-2xl font-semibold text-white">A useful debugging report has four parts</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-4">
            {[
              ["1", "Failure", "The exact command, route, job, or action that failed."],
              ["2", "Context", "Expected behavior, environment, and the recent change."],
              ["3", "Evidence", "A reviewed error excerpt with sensitive data removed."],
              ["4", "Question", "The root cause, next check, or minimal fix you need."],
            ].map(([number, title, body]) => (
              <div key={number} className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="font-mono text-sm text-amber-200">{number}</p>
                <h3 className="mt-3 font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-stone-300">{body}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
