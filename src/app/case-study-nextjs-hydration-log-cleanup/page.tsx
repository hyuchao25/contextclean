import Link from "next/link";
import { getPageSeo, siteUrl } from "../seo";

const seo = getPageSeo("/case-study-nextjs-hydration-log-cleanup");

export const metadata = {
  title: seo.title,
  description: seo.description,
  alternates: {
    canonical: `${siteUrl}${seo.path}`,
  },
};

export default function CaseStudyNextJSHydrationLogCleanupPage() {
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
          Case study: reducing a noisy Next.js hydration error into a usable AI debugging prompt
        </h1>

        <div className="mt-6 space-y-5 text-sm leading-7 text-stone-300">
          <p>
            This example starts with a typical hydration error: a framework-heavy log,
            a vague message, and a long component stack. A developer who pastes the raw
            version into an AI assistant often gets an answer that repeats generic
            hydration advice without identifying the likely unstable value or component.
          </p>
          <p>
            The more useful approach is to keep the hydration message, the application
            component, the project file path, and one sentence describing the recent
            change. In a real review workflow, that reduction usually makes the prompt
            far easier to reason about.
          </p>
        </div>

        <section className="mt-8 rounded-[28px] border border-white/10 bg-black/25 p-6">
          <h2 className="text-2xl font-semibold text-white">Reduced prompt example</h2>
          <pre className="mt-4 overflow-x-auto rounded-2xl border border-white/10 bg-black/45 p-4 text-sm leading-6 text-stone-300">
{`Please debug this hydration error.
Component: Header
File: src/components/Header.tsx:15
Recent change: I render a welcome message from localStorage
Error: Hydration failed because the initial UI does not match.`}
          </pre>
        </section>

        <section className="mt-10 rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
          <h2 className="text-2xl font-semibold text-white">Related reading</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/debug-hydration-errors-step-by-step" className="rounded-full border border-white/10 px-4 py-2 text-sm text-stone-300 hover:text-white">
              Debug Hydration Errors Step by Step
            </Link>
            <Link href="/clean-react-error-stack" className="rounded-full border border-white/10 px-4 py-2 text-sm text-stone-300 hover:text-white">
              Clean React Error Stacks
            </Link>
            <Link href="/clean-nextjs-build-error" className="rounded-full border border-white/10 px-4 py-2 text-sm text-stone-300 hover:text-white">
              Clean Next.js Build Errors
            </Link>
          </div>
        </section>

        <p className="mt-10 text-sm leading-7 text-stone-400">
          Last reviewed: May 25, 2026. Maintained as part of the ContextClean resource library.
        </p>
      </article>
    </main>
  );
}
