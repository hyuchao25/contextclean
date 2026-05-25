import Link from "next/link";
import { getPageSeo, siteUrl } from "../seo";

const seo = getPageSeo("/ai-debugging-glossary");

export const metadata = {
  title: seo.title,
  description: seo.description,
  alternates: {
    canonical: `${siteUrl}${seo.path}`,
  },
};

const glossary = [
  ["High-signal context", "The smallest useful set of details that still explains the bug accurately."],
  ["Low-signal context", "Text that adds volume without improving the first-pass diagnosis, such as repeated frames or install output."],
  ["Root cause candidate", "The first line or condition that most plausibly explains why the failure happened."],
  ["Prompt hygiene", "The practice of shaping an AI prompt so it is concise, safe, and focused on one task."],
  ["Failure summary", "A short human-readable description of the failing command, error, and expected behavior."],
  ["Redaction", "Replacing sensitive values with placeholders before sharing logs with other people or systems."],
];

export default function AIDebuggingGlossaryPage() {
  return (
    <main className="min-h-screen px-4 py-8 text-stone-100 sm:px-6 lg:px-8">
      <article className="mx-auto max-w-4xl rounded-[32px] border border-white/10 bg-stone-950/80 p-8">
        <Link href="/" className="text-sm text-emerald-300 hover:text-emerald-200">
          Back to ContextClean
        </Link>

        <p className="mt-8 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300/80">
          Glossary
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white">
          An AI debugging glossary for logs, prompts, redaction, and root-cause analysis
        </h1>

        <p className="mt-6 text-sm leading-7 text-stone-300">
          This glossary collects the terms that appear across the ContextClean guides.
          It exists to make the site easier to navigate for developers who want a clear
          language for discussing prompt quality, log hygiene, and debugging workflows.
        </p>

        <div className="mt-8 space-y-4">
          {glossary.map(([term, definition]) => (
            <section
              key={term}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
            >
              <h2 className="text-xl font-semibold text-white">{term}</h2>
              <p className="mt-2 text-sm leading-6 text-stone-300">{definition}</p>
            </section>
          ))}
        </div>

        <p className="mt-10 text-sm leading-7 text-stone-400">
          Last reviewed: May 25, 2026. Maintained as part of the ContextClean resource library.
        </p>
      </article>
    </main>
  );
}
