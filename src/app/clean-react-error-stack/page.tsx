import Link from "next/link";
import GuideFooter from "../components/GuideFooter";
import { getPageSeo, siteUrl } from "../seo";

const seo = getPageSeo("/clean-react-error-stack");

export const metadata = {
  title: seo.title,
  description: seo.description,
  alternates: {
    canonical: `${siteUrl}${seo.path}`,
  },
};

export default function CleanReactErrorStackPage() {
  return (
    <main className="min-h-screen px-4 py-8 text-stone-100 sm:px-6 lg:px-8">
      <article className="mx-auto max-w-4xl rounded-[32px] border border-white/10 bg-stone-950/80 p-8">
        <Link href="/" className="text-sm text-emerald-300 hover:text-emerald-200">
          Back to ContextClean
        </Link>

        <p className="mt-8 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300/80">
          React Guide
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white">
          How to clean React error stacks so AI can focus on your component instead of framework noise
        </h1>

        <div className="mt-6 space-y-5 text-sm leading-7 text-stone-300">
          <p>
            React and Next.js errors often arrive as a mixture of component stacks,
            hydration warnings, console messages, bundler output, and internal frames.
            The app-level problem might be simple, but the surrounding context makes it
            look larger and harder to reason about than it really is.
          </p>
          <p>
            For AI debugging, the most important lines are usually the first visible
            error message, the component name, the project file path, and the line that
            points back to your code. The rest is often helpful only after the first
            diagnosis has already been made.
          </p>
        </div>

        <section className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <h2 className="text-lg font-semibold text-white">Rendering errors</h2>
            <p className="mt-2 text-sm leading-6 text-stone-300">
              Preserve the component name, prop shape problem, and the file where the
              render failed.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <h2 className="text-lg font-semibold text-white">Hydration errors</h2>
            <p className="mt-2 text-sm leading-6 text-stone-300">
              Keep the first hydration warning and the component path that likely caused
              the server and client output to diverge.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <h2 className="text-lg font-semibold text-white">Hook issues</h2>
            <p className="mt-2 text-sm leading-6 text-stone-300">
              Keep the hook name, invalid call message, and the nearest application file
              involved in the stack.
            </p>
          </div>
        </section>

        <section className="mt-10 rounded-[28px] border border-white/10 bg-black/25 p-6">
          <h2 className="text-2xl font-semibold text-white">Example</h2>
          <pre className="mt-4 overflow-x-auto rounded-2xl border border-white/10 bg-black/45 p-4 text-sm leading-6 text-stone-300">
{`Error: Hydration failed because the initial UI does not match.
Header (src/components/Header.tsx:15:3)
Route: /dashboard`}
          </pre>
          <p className="mt-4 text-sm leading-7 text-stone-300">
            This is enough for an AI tool to reason about server-client divergence,
            unstable rendering, or conditional output without being distracted by the
            full framework stack.
          </p>
        </section>

        <section className="mt-10 rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
          <h2 className="text-2xl font-semibold text-white">
            Why React logs are easy to over-expand
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-7 text-stone-300">
            <p>
              Modern React apps sit behind the browser console, the bundler, the route
              layer, and often a framework runtime. That means a single prop or render
              mismatch can produce a stack that looks much more complex than the bug.
            </p>
            <p>
              A cleaner prompt does not hide important context. It removes the parts
              that are least likely to change the diagnosis on the first pass, so the
              component-level issue becomes visible immediately.
            </p>
          </div>
        </section>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/"
            className="rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-stone-950 hover:bg-emerald-300"
          >
            Open React Error Cleaner
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
