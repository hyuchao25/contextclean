import type { Metadata } from "next";
import { getPageSeo, siteUrl } from "../seo";

const seo = getPageSeo("/ai-debugging-checklist");

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  alternates: { canonical: `${siteUrl}${seo.path}` },
};

const checklist = [
  {
    title: "Define the failure boundary",
    body: "Write down the command, route, test, build step, or user action that failed. A log without the triggering action is difficult to interpret.",
    check: "Could another developer reproduce the same action?",
  },
  {
    title: "Find the first cause candidate",
    body: "Start at the first explicit compiler error, exception, failed assertion, missing module, or non-zero command. Later failures may only be consequences.",
    check: "Did you preserve the earliest meaningful failure rather than only the final summary?",
  },
  {
    title: "Preserve location and causality",
    body: "Keep the application file, line number, component, job, Docker instruction, and every distinct caused-by exception that connects the symptom to code.",
    check: "Can the reader identify where the failure entered application code?",
  },
  {
    title: "Remove only defensible noise",
    body: "Reduce exact duplicates, successful setup narration, transfer progress, cache messages, and unrelated warnings. Do not delete context merely because it is long.",
    check: "Can you explain why every removed category is irrelevant to this diagnosis?",
  },
  {
    title: "Add the missing human context",
    body: "State the expected behavior, environment, recent change, and checks already completed. These facts rarely appear in the stack trace.",
    check: "Does the request explain what changed and what should have happened?",
  },
  {
    title: "Perform a privacy review",
    body: "Search for credentials, cookies, customer identifiers, private hosts, signed URLs, payloads, and confidential code. Replace values with meaningful placeholders.",
    check: "Would publishing this exact excerpt in a public issue be acceptable?",
  },
  {
    title: "Request one outcome",
    body: "Ask for the likely root cause, next diagnostic step, smallest safe fix, or reproduction plan. Avoid asking for all of them at once.",
    check: "Can the answer be evaluated against one clear task?",
  },
];

export default function AIDebuggingChecklistPage() {
  return (
    <main className="px-4 py-12 text-stone-100 sm:px-6 lg:px-8">
      <article className="mx-auto max-w-5xl">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300">
          Diagnostic checklist
        </p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-white">
          A seven-step review before asking AI to debug an error
        </h1>
        <p className="mt-6 max-w-4xl text-lg leading-8 text-stone-300">
          The useful middle ground is not simply &quot;paste less.&quot; It is a
          repeatable review that preserves causal evidence, adds facts missing from
          the log, and removes only context you can justify removing.
        </p>

        <div className="mt-10 space-y-4">
          {checklist.map((item, index) => (
            <section key={item.title} className="grid gap-4 rounded-[26px] border border-white/10 bg-stone-950/70 p-6 md:grid-cols-[80px_1fr]">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-emerald-300/20 bg-emerald-300/10 font-mono text-lg text-emerald-200">
                {index + 1}
              </div>
              <div>
                <h2 className="text-xl font-semibold text-white">{item.title}</h2>
                <p className="mt-3 text-sm leading-7 text-stone-300">{item.body}</p>
                <p className="mt-4 rounded-xl border border-white/10 bg-black/20 p-3 text-sm leading-6 text-stone-400">
                  Verification: {item.check}
                </p>
              </div>
            </section>
          ))}
        </div>

        <section className="mt-10 rounded-[28px] border border-amber-300/15 bg-amber-300/[0.05] p-7">
          <h2 className="text-2xl font-semibold text-white">
            Stop and collect more evidence when
          </h2>
          <ul className="mt-5 list-disc space-y-3 pl-6 text-sm leading-7 text-stone-300">
            <li>The failure cannot be reproduced consistently.</li>
            <li>The cleaned excerpt no longer contains a source location or causal exception.</li>
            <li>The answer depends on versions, environment variables, generated files, or request data not included in the report.</li>
            <li>The proposed fix involves a broad dependency upgrade, security change, or data migration without supporting evidence.</li>
          </ul>
        </section>
      </article>
    </main>
  );
}
