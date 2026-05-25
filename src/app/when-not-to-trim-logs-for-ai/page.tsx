import Link from "next/link";
import { getPageSeo, siteUrl } from "../seo";

const seo = getPageSeo("/when-not-to-trim-logs-for-ai");

export const metadata = {
  title: seo.title,
  description: seo.description,
  alternates: {
    canonical: `${siteUrl}${seo.path}`,
  },
};

export default function WhenNotToTrimLogsForAIPage() {
  return (
    <main className="min-h-screen px-4 py-8 text-stone-100 sm:px-6 lg:px-8">
      <article className="mx-auto max-w-4xl rounded-[32px] border border-white/10 bg-stone-950/80 p-8">
        <Link href="/" className="text-sm text-emerald-300 hover:text-emerald-200">
          Back to ContextClean
        </Link>

        <p className="mt-8 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300/80">
          Boundaries
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white">
          When you should not trim logs too aggressively before asking AI for help
        </h1>

        <div className="mt-6 space-y-5 text-sm leading-7 text-stone-300">
          <p>
            Shorter prompts are usually better, but not always. Some failures depend on
            the surrounding context: package version conflicts, transitive dependency
            problems, environment-specific behavior, serializer chains, or integration
            boundaries where the wrapper is part of the cause.
          </p>
          <p>
            The right goal is not maximum compression. The right goal is minimum useful
            context. If trimming removes the lines that change the diagnosis, the prompt
            becomes neat but less accurate.
          </p>
        </div>

        <section className="mt-8 rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
          <h2 className="text-2xl font-semibold text-white">Good reasons to keep more context</h2>
          <ul className="mt-4 list-disc space-y-3 pl-6 text-sm leading-7 text-stone-300">
            <li>The failure clearly comes from dependency resolution or version skew.</li>
            <li>The bug only appears in CI, Docker, or production-like environments.</li>
            <li>The surrounding library frames identify the actual misconfiguration.</li>
            <li>The error message alone is too generic to distinguish the cause.</li>
          </ul>
        </section>

        <p className="mt-10 text-sm leading-7 text-stone-400">
          Last reviewed: May 25, 2026. Maintained as part of the ContextClean resource library.
        </p>
      </article>
    </main>
  );
}
