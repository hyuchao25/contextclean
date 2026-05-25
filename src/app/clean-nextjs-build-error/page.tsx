import Link from "next/link";
import GuideFooter from "../components/GuideFooter";
import { getPageSeo, siteUrl } from "../seo";

const seo = getPageSeo("/clean-nextjs-build-error");

export const metadata = {
  title: seo.title,
  description: seo.description,
  alternates: {
    canonical: `${siteUrl}${seo.path}`,
  },
};

export default function CleanNextJSBuildErrorPage() {
  return (
    <main className="min-h-screen px-4 py-8 text-stone-100 sm:px-6 lg:px-8">
      <article className="mx-auto max-w-4xl rounded-[32px] border border-white/10 bg-stone-950/80 p-8">
        <Link href="/" className="text-sm text-emerald-300 hover:text-emerald-200">
          Back to ContextClean
        </Link>

        <p className="mt-8 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300/80">
          Next.js Guide
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white">
          How to clean Next.js build errors so AI can focus on the actual failing file
        </h1>

        <div className="mt-6 space-y-5 text-sm leading-7 text-stone-300">
          <p>
            Next.js build output is dense by default. A single failure can include
            route compilation, bundler diagnostics, generated file paths, app router
            traces, dependency internals, and repeated follow-on messages after the
            original error has already been printed.
          </p>
          <p>
            If you send all of that to an AI tool without trimming it, the model may
            respond to the outer symptoms instead of the inner cause. The fastest way
            to improve the prompt is to isolate the first real error and the exact file
            location involved.
          </p>
        </div>

        <section className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <h2 className="text-lg font-semibold text-white">Keep</h2>
            <p className="mt-2 text-sm leading-6 text-stone-300">
              The failing import, the route or segment, the exact file path, and the
              line number if the output gives one.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <h2 className="text-lg font-semibold text-white">Reduce</h2>
            <p className="mt-2 text-sm leading-6 text-stone-300">
              Repeated `.next` output, bundler chatter, and duplicate frames from
              framework internals.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <h2 className="text-lg font-semibold text-white">Add</h2>
            <p className="mt-2 text-sm leading-6 text-stone-300">
              One sentence about what changed, such as a new import, config update, or
              route refactor.
            </p>
          </div>
        </section>

        <section className="mt-10 rounded-[28px] border border-white/10 bg-black/25 p-6">
          <h2 className="text-2xl font-semibold text-white">Example</h2>
          <pre className="mt-4 overflow-x-auto rounded-2xl border border-white/10 bg-black/45 p-4 text-sm leading-6 text-stone-300">
{`Build error occurred
Module not found: Can't resolve './globals.css'
./src/app/layout.tsx (2:1)
Command: next build`}
          </pre>
          <p className="mt-4 text-sm leading-7 text-stone-300">
            This is enough to ask for a targeted answer. The model can now reason about
            import paths, file locations, and app layout structure without being buried
            under dozens of unrelated build lines.
          </p>
        </section>

        <section className="mt-10 rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
          <h2 className="text-2xl font-semibold text-white">
            Why Next.js logs are unusually easy to over-share
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-7 text-stone-300">
            <p>
              Next.js sits on top of React, the app router, server components, the
              bundler, and the surrounding Node.js toolchain. That means a single
              missing file or type mismatch can create several layers of noise before
              the terminal settles on the final failure summary.
            </p>
            <p>
              Developers often paste the whole thing because it feels safer. In reality,
              the better approach is to keep the first real error and then add only the
              extra lines that change the diagnosis. That is exactly the kind of first
              pass ContextClean is designed to support.
            </p>
          </div>
        </section>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/"
            className="rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-stone-950 hover:bg-emerald-300"
          >
            Open Next.js Build Error Cleaner
          </Link>
          <Link
            href="/how-to-read-build-errors-before-asking-ai"
            className="rounded-full border border-white/12 px-6 py-3 text-sm font-semibold text-white hover:bg-white/[0.05]"
          >
            Read the build error workflow guide
          </Link>
        </div>

        <GuideFooter />
      </article>
    </main>
  );
}
