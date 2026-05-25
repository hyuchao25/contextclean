import Link from "next/link";
import { getPageSeo, siteUrl } from "../seo";

const seo = getPageSeo("/what-makes-a-high-signal-error-report");

export const metadata = {
  title: seo.title,
  description: seo.description,
  alternates: {
    canonical: `${siteUrl}${seo.path}`,
  },
};

export default function WhatMakesAHighSignalErrorReportPage() {
  return (
    <main className="min-h-screen px-4 py-8 text-stone-100 sm:px-6 lg:px-8">
      <article className="mx-auto max-w-4xl rounded-[32px] border border-white/10 bg-stone-950/80 p-8">
        <Link href="/" className="text-sm text-emerald-300 hover:text-emerald-200">
          Back to ContextClean
        </Link>

        <p className="mt-8 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300/80">
          Reporting
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white">
          What makes a high-signal error report for AI tools, issue trackers, and teammate handoffs
        </h1>

        <div className="mt-6 space-y-5 text-sm leading-7 text-stone-300">
          <p>
            A high-signal error report is useful even before an AI model reads it. It
            helps another developer understand what failed, why it matters, and where to
            start looking. The same qualities also improve AI debugging results because
            the prompt becomes narrower and more explicit.
          </p>
        </div>

        <section className="mt-8 space-y-4">
          {[
            "State the failing command, route, or test.",
            "Include the first meaningful error message instead of the entire transcript.",
            "Name the relevant file, module, component, or service.",
            "Add the expected behavior and one sentence about what changed recently.",
            "Redact or replace secrets and private data before sharing.",
          ].map((item) => (
            <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-sm leading-6 text-stone-300">
              {item}
            </div>
          ))}
        </section>

        <p className="mt-10 text-sm leading-7 text-stone-400">
          Last reviewed: May 25, 2026. Maintained as part of the ContextClean resource library.
        </p>
      </article>
    </main>
  );
}
