import Link from "next/link";
import { getPageSeo, siteUrl } from "../seo";

const seo = getPageSeo("/compare-raw-vs-cleaned-logs");

export const metadata = {
  title: seo.title,
  description: seo.description,
  alternates: {
    canonical: `${siteUrl}${seo.path}`,
  },
};

export default function CompareRawVsCleanedLogsPage() {
  return (
    <main className="min-h-screen px-4 py-8 text-stone-100 sm:px-6 lg:px-8">
      <article className="mx-auto max-w-5xl rounded-[32px] border border-white/10 bg-stone-950/80 p-8">
        <Link href="/" className="text-sm text-emerald-300 hover:text-emerald-200">
          Back to ContextClean
        </Link>

        <p className="mt-8 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300/80">
          Comparison
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white">
          Compare raw logs and cleaned logs to see what changes in an AI debugging workflow
        </h1>

        <p className="mt-6 text-sm leading-7 text-stone-300">
          This page is intentionally visual and comparative. It shows the difference
          between “paste everything” and “paste the useful part first.” The value of
          log cleanup is easier to understand when the change is visible side by side.
        </p>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <section className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
            <h2 className="text-2xl font-semibold text-white">Raw prompt behavior</h2>
            <p className="mt-4 text-sm leading-7 text-stone-300">
              Large prompts increase the chance that the model will talk about
              dependency noise, setup chatter, or downstream symptoms before it reaches
              the actual failure.
            </p>
          </section>
          <section className="rounded-[28px] border border-emerald-400/15 bg-emerald-300/8 p-6">
            <h2 className="text-2xl font-semibold text-white">Cleaned prompt behavior</h2>
            <p className="mt-4 text-sm leading-7 text-stone-300">
              Smaller prompts tend to make the failing file, command, and error visible
              earlier, which often leads to a more direct first answer.
            </p>
          </section>
        </div>

        <p className="mt-10 text-sm leading-7 text-stone-400">
          Last reviewed: May 25, 2026. Maintained as part of the ContextClean resource library.
        </p>
      </article>
    </main>
  );
}
