import Link from "next/link";
import { getPageSeo, siteUrl } from "../seo";

const seo = getPageSeo("/case-study-typescript-noise-reduction");

export const metadata = {
  title: seo.title,
  description: seo.description,
  alternates: {
    canonical: `${siteUrl}${seo.path}`,
  },
};

export default function CaseStudyTypeScriptNoiseReductionPage() {
  return (
    <main className="min-h-screen px-4 py-8 text-stone-100 sm:px-6 lg:px-8">
      <article className="mx-auto max-w-4xl rounded-[32px] border border-white/10 bg-stone-950/80 p-8">
        <Link href="/" className="text-sm text-emerald-300 hover:text-emerald-200">
          Back to ContextClean
        </Link>

        <p className="mt-8 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300/80">
          Case Study
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white">
          Case study: reducing a noisy TypeScript compiler message without losing the real mismatch
        </h1>

        <div className="mt-6 space-y-5 text-sm leading-7 text-stone-300">
          <p>
            TypeScript errors often grow until the actual mismatch is hidden behind a
            wall of inferred types and repeated references. A smaller prompt works
            better when it preserves the file path, line number, error code, expected
            type, and received type while dropping the rest of the duplicate compiler
            output.
          </p>
          <p>
            The lesson from this kind of example is that prompt compression should serve
            diagnosis, not aesthetics. The shorter version is useful because it exposes
            the mismatch faster, not because it looks cleaner.
          </p>
        </div>
      </article>
    </main>
  );
}
