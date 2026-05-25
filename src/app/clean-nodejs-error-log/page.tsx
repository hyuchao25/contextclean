import Link from "next/link";
import GuideFooter from "../components/GuideFooter";
import { getPageSeo, siteUrl } from "../seo";

const seo = getPageSeo("/clean-nodejs-error-log");

export const metadata = {
  title: seo.title,
  description: seo.description,
  alternates: {
    canonical: `${siteUrl}${seo.path}`,
  },
};

const nodeNoise = [
  "Long chains of internal/modules or node: loader frames",
  "node_modules paths that repeat the same call stack shape",
  "Package manager warnings that are not the direct cause of the crash",
  "Framework wrapper output that appears after the application-level error",
];

export default function CleanNodeJSErrorLogPage() {
  return (
    <main className="min-h-screen px-4 py-8 text-stone-100 sm:px-6 lg:px-8">
      <article className="mx-auto max-w-4xl rounded-[32px] border border-white/10 bg-stone-950/80 p-8">
        <Link href="/" className="text-sm text-emerald-300 hover:text-emerald-200">
          Back to ContextClean
        </Link>

        <p className="mt-8 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300/80">
          Node.js Guide
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white">
          How to clean Node.js error logs before sending them to an AI coding assistant
        </h1>

        <div className="mt-6 space-y-5 text-sm leading-7 text-stone-300">
          <p>
            Node.js logs can become noisy very quickly. A simple missing import or
            undefined value can generate a long trail of internal loader frames,
            package manager warnings, framework wrappers, and dependency paths that
            distract from the actual issue.
          </p>
          <p>
            AI tools are especially vulnerable to this kind of noise because they treat
            every line as potential signal. If the prompt is padded with the wrong
            details, the first answer is more likely to focus on a downstream symptom
            instead of the real failure in your application code.
          </p>
        </div>

        <section className="mt-8 rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
          <h2 className="text-2xl font-semibold text-white">
            Common Node.js noise patterns
          </h2>
          <ul className="mt-4 list-disc space-y-3 pl-6 text-sm leading-7 text-stone-300">
            {nodeNoise.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="mt-10 grid gap-4 md:grid-cols-2">
          <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
            <h2 className="text-2xl font-semibold text-white">Keep these lines</h2>
            <p className="mt-4 text-sm leading-7 text-stone-300">
              The most useful parts of a Node.js error for AI debugging are usually the
              first error name, the first application-level file path, the line number,
              the function name when available, and the command that triggered the
              failure.
            </p>
          </div>
          <div className="rounded-[28px] border border-amber-400/20 bg-amber-300/8 p-6">
            <h2 className="text-2xl font-semibold text-white">Drop these lines</h2>
            <p className="mt-4 text-sm leading-7 text-stone-300">
              Repeated frames from dependency internals are often useful only after you
              already know the root cause. For a first prompt, they usually dilute the
              real issue rather than clarify it.
            </p>
          </div>
        </section>

        <section className="mt-10 rounded-[28px] border border-white/10 bg-black/25 p-6">
          <h2 className="text-2xl font-semibold text-white">Minimal useful example</h2>
          <pre className="mt-4 overflow-x-auto rounded-2xl border border-white/10 bg-black/45 p-4 text-sm leading-6 text-stone-300">
{`Error: Cannot find module 'express'
    at Object.<anonymous> (C:\\app\\server.js:3:17)
Command: node server.js
Expected behavior: the HTTP server should start locally`}
          </pre>
          <p className="mt-4 text-sm leading-7 text-stone-300">
            This preserves the actual failure and the project file that triggered it.
            That is enough for an AI tool to suggest checking dependencies, package
            installation, or import correctness without wading through unrelated frames.
          </p>
        </section>

        <section className="mt-10 rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
          <h2 className="text-2xl font-semibold text-white">
            When not to over-trim a Node.js log
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-7 text-stone-300">
            <p>
              If the bug is clearly caused by a package version conflict, ESM versus
              CommonJS mismatch, or a runtime loader issue, some dependency context may
              still matter. The right approach is not “shortest possible log.” It is
              “short enough to focus the diagnosis, long enough to preserve the cause.”
            </p>
            <p>
              ContextClean is helpful here because it gives you a cleaner first pass.
              You can always reintroduce one or two extra lines if the AI needs more
              context after the first answer.
            </p>
          </div>
        </section>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/"
            className="rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-stone-950 hover:bg-emerald-300"
          >
            Open Node.js Log Cleaner
          </Link>
          <Link
            href="/safe-log-sharing-for-ai"
            className="rounded-full border border-white/12 px-6 py-3 text-sm font-semibold text-white hover:bg-white/[0.05]"
          >
            Read safe log sharing guidance
          </Link>
        </div>

        <GuideFooter />
      </article>
    </main>
  );
}
