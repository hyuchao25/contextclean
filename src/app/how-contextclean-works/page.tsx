import Link from "next/link";
import { getPageSeo, siteUrl } from "../seo";

const seo = getPageSeo("/how-contextclean-works");

export const metadata = {
  title: seo.title,
  description: seo.description,
  alternates: {
    canonical: `${siteUrl}${seo.path}`,
  },
};

export default function HowContextCleanWorksPage() {
  return (
    <main className="min-h-screen px-4 py-8 text-stone-100 sm:px-6 lg:px-8">
      <article className="mx-auto max-w-4xl rounded-[32px] border border-white/10 bg-stone-950/80 p-8">
        <Link href="/" className="text-sm text-emerald-300 hover:text-emerald-200">
          Back to ContextClean
        </Link>

        <p className="mt-8 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300/80">
          Methodology
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white">
          How ContextClean works and what kinds of log cleanup it is designed to do well
        </h1>

        <div className="mt-6 space-y-5 text-sm leading-7 text-stone-300">
          <p>
            ContextClean is built around a narrow idea: many debugging logs contain a
            mixture of diagnosis and narration. Diagnosis is the part that helps a
            developer or an AI assistant identify the failure. Narration is the part
            that explains what the environment was doing around the failure, even when
            that detail does not change the first-pass diagnosis.
          </p>
          <p>
            The tool tries to preserve likely diagnosis lines and reduce likely
            narration lines. In practice that means keeping explicit error names, common
            failure keywords, file paths, and line references while filtering patterns
            such as dependency internals, package manager chatter, cache messages, and
            repeated runtime frames.
          </p>
        </div>

        <section className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <h2 className="text-lg font-semibold text-white">Signal detection</h2>
            <p className="mt-2 text-sm leading-6 text-stone-300">
              The cleaner prioritizes lines that look like the root failure or directly
              support the failure, such as exception names and line references.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <h2 className="text-lg font-semibold text-white">Noise reduction</h2>
            <p className="mt-2 text-sm leading-6 text-stone-300">
              It reduces patterns that commonly bloat logs without helping a first-pass
              explanation, such as repeated framework frames and install output.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <h2 className="text-lg font-semibold text-white">Human review</h2>
            <p className="mt-2 text-sm leading-6 text-stone-300">
              The output is meant to be reviewed by the developer, not treated as an
              authoritative transformation that is always safe to forward automatically.
            </p>
          </div>
        </section>

        <section className="mt-10 rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
          <h2 className="text-2xl font-semibold text-white">Where the approach works best</h2>
          <div className="mt-4 space-y-4 text-sm leading-7 text-stone-300">
            <p>
              ContextClean is most useful when the failure is already present in the
              visible log but surrounded by too much low-signal text. That includes CI
              jobs, Docker builds, Next.js build errors, runtime stack traces,
              TypeScript diagnostics, and Python tracebacks with long library frames.
            </p>
            <p>
              It is less effective when the hidden cause depends on rich dependency
              context, environment-specific metadata, or a larger chain of wrapper calls
              that actually matters to the diagnosis. In those cases, developers should
              keep more of the log or reintroduce context after the first answer.
            </p>
          </div>
        </section>

        <p className="mt-10 text-sm leading-7 text-stone-400">
          Last reviewed: May 25, 2026. Maintained as part of the ContextClean resource library.
        </p>
      </article>
    </main>
  );
}
