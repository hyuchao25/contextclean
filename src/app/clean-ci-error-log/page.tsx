import Link from "next/link";
import GuideFooter from "../components/GuideFooter";
import { getPageSeo, siteUrl } from "../seo";

const seo = getPageSeo("/clean-ci-error-log");

export const metadata = {
  title: seo.title,
  description: seo.description,
  alternates: {
    canonical: `${siteUrl}${seo.path}`,
  },
};

export default function CleanCIErrorLogPage() {
  return (
    <main className="min-h-screen px-4 py-8 text-stone-100 sm:px-6 lg:px-8">
      <article className="mx-auto max-w-4xl rounded-[32px] border border-white/10 bg-stone-950/80 p-8">
        <Link href="/" className="text-sm text-emerald-300 hover:text-emerald-200">
          Back to ContextClean
        </Link>

        <p className="mt-8 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300/80">
          CI Guide
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white">
          How to clean CI error logs before asking AI to explain a failing pipeline
        </h1>

        <div className="mt-6 space-y-5 text-sm leading-7 text-stone-300">
          <p>
            CI logs are a worst-case prompt format. They mix checkout steps, runner
            setup, cache restore messages, dependency installation, test execution,
            build output, teardown steps, and one or two lines that actually explain
            why the pipeline failed.
          </p>
          <p>
            If you want useful AI help, the right first move is to preserve the failed
            job, the failed command, the exit code, and the first specific test or build
            error while reducing all of the setup narration around it.
          </p>
        </div>

        <section className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
            <h2 className="text-2xl font-semibold text-white">Keep</h2>
            <p className="mt-4 text-sm leading-7 text-stone-300">
              The job name, step name, failing command, failing test, exit code, and
              any application file path or compiler message directly tied to the failure.
            </p>
          </div>
          <div className="rounded-[28px] border border-amber-400/20 bg-amber-300/8 p-6">
            <h2 className="text-2xl font-semibold text-white">Reduce</h2>
            <p className="mt-4 text-sm leading-7 text-stone-300">
              Checkout logs, cache restore lines, install progress, post-job cleanup,
              and repeated command echo are usually unnecessary for a first-pass diagnosis.
            </p>
          </div>
        </section>

        <section className="mt-10 rounded-[28px] border border-white/10 bg-black/25 p-6">
          <h2 className="text-2xl font-semibold text-white">Example</h2>
          <pre className="mt-4 overflow-x-auto rounded-2xl border border-white/10 bg-black/45 p-4 text-sm leading-6 text-stone-300">
{`Job: test
FAIL src/user.test.ts
TypeError: Cannot read properties of undefined
Error: Process completed with exit code 1.`}
          </pre>
          <p className="mt-4 text-sm leading-7 text-stone-300">
            This is a much better AI prompt seed than a full pipeline transcript. It
            already tells the model where the failure happened and what kind of problem
            caused the job to stop.
          </p>
        </section>

        <section className="mt-10 rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
          <h2 className="text-2xl font-semibold text-white">
            Why shorter CI prompts help more than you think
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-7 text-stone-300">
            <p>
              CI systems add a lot of operational detail because humans sometimes need
              it for auditability and reruns. AI models do not benefit from that same
              bulk when the task is simply “tell me why the pipeline failed and what to
              check next.”
            </p>
            <p>
              ContextClean helps by cutting the scaffolding around the failure. That
              makes it easier to read the problem yourself and easier to send a smaller,
              higher-signal prompt to a coding assistant.
            </p>
          </div>
        </section>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/"
            className="rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-stone-950 hover:bg-emerald-300"
          >
            Open CI Log Cleaner
          </Link>
          <Link
            href="/resources"
            className="rounded-full border border-white/12 px-6 py-3 text-sm font-semibold text-white hover:bg-white/[0.05]"
          >
            Browse more debugging resources
          </Link>
        </div>

        <GuideFooter />
      </article>
    </main>
  );
}
