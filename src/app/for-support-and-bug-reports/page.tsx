import Link from "next/link";
import { getPageSeo, siteUrl } from "../seo";

const seo = getPageSeo("/for-support-and-bug-reports");

export const metadata = {
  title: seo.title,
  description: seo.description,
  alternates: {
    canonical: `${siteUrl}${seo.path}`,
  },
};

const triageSteps = [
  {
    title: "Reduce the raw log",
    body:
      "Remove repeated stack frames, setup messages, progress output, and unrelated warnings before forwarding the report.",
  },
  {
    title: "Preserve the useful facts",
    body:
      "Keep the user impact, environment, route, command, timestamp, and exact error message whenever they are known.",
  },
  {
    title: "Review for sensitive data",
    body:
      "Look for tokens, emails, internal hostnames, customer IDs, request payloads, and screenshots before sharing externally.",
  },
  {
    title: "Escalate with a question",
    body:
      "Ask engineering or an AI assistant for a specific next check instead of forwarding a vague wall of text.",
  },
];

const escalationQuestions = [
  "Is this caused by user input, deployment state, dependency behavior, or a code regression?",
  "Which service, route, component, or job should engineering inspect first?",
  "What information is missing before the bug can be reproduced?",
  "Can the cleaned log be shared safely, or does more redaction need to happen?",
];

export default function ForSupportAndBugReportsPage() {
  return (
    <main className="min-h-screen px-4 py-8 text-stone-100 sm:px-6 lg:px-8">
      <article className="mx-auto max-w-6xl rounded-[32px] border border-white/10 bg-stone-950/80 p-8">
        <Link href="/" className="text-sm text-emerald-300 hover:text-emerald-200">
          Back to ContextClean
        </Link>

        <p className="mt-8 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300/80">
          Support
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white">
          ContextClean for support teams and bug reports that include long logs
        </h1>

        <div className="mt-6 space-y-5 text-sm leading-7 text-stone-300">
          <p>
            Support teams and small product teams often receive logs that are too long
            to review quickly and too sensitive to forward without inspection. A cleaner
            summary helps support triage the issue before escalating it to engineering
            or asking an AI tool for a first-pass diagnosis.
          </p>
          <p>
            The important workflow is simple: reduce the log, review for sensitive
            values, preserve the error and context, then escalate a smaller version.
          </p>
        </div>

        <section className="mt-8 grid gap-4 md:grid-cols-2">
          {triageSteps.map((step) => (
            <div
              key={step.title}
              className="rounded-[26px] border border-white/10 bg-white/[0.03] p-6"
            >
              <h2 className="text-xl font-semibold text-white">{step.title}</h2>
              <p className="mt-3 text-sm leading-7 text-stone-300">{step.body}</p>
            </div>
          ))}
        </section>

        <section className="mt-8 rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
          <h2 className="text-2xl font-semibold text-white">Bug report summary format</h2>
          <pre className="mt-4 overflow-x-auto rounded-2xl border border-white/10 bg-black/45 p-4 text-sm leading-6 text-stone-300">
{`User impact: checkout failed after clicking Submit
Environment: production web app
Relevant error: TypeError: Cannot read properties of undefined
Relevant file or service: checkout-api
Sensitive values: removed before sharing`}
          </pre>
        </section>

        <section className="mt-8 rounded-[28px] border border-amber-400/15 bg-amber-300/8 p-6">
          <h2 className="text-2xl font-semibold text-white">
            Useful escalation questions
          </h2>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {escalationQuestions.map((question) => (
              <p
                key={question}
                className="rounded-2xl border border-white/10 bg-black/20 p-4 text-sm leading-6 text-stone-300"
              >
                {question}
              </p>
            ))}
          </div>
        </section>
      </article>
    </main>
  );
}
