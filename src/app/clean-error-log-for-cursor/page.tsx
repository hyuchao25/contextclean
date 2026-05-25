import Link from "next/link";
import GuideFooter from "../components/GuideFooter";
import { getPageSeo, siteUrl } from "../seo";

const seo = getPageSeo("/clean-error-log-for-cursor");

export const metadata = {
  title: seo.title,
  description: seo.description,
  alternates: {
    canonical: `${siteUrl}${seo.path}`,
  },
};

export default function CleanErrorLogForCursorPage() {
  return (
    <main className="min-h-screen px-4 py-8 text-stone-100 sm:px-6 lg:px-8">
      <article className="mx-auto max-w-4xl rounded-[32px] border border-white/10 bg-stone-950/80 p-8">
        <Link href="/" className="text-sm text-emerald-300 hover:text-emerald-200">
          Back to ContextClean
        </Link>

        <p className="mt-8 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300/80">
          Cursor Guide
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white">
          How to clean error logs before pasting them into Cursor Chat or Composer
        </h1>

        <div className="mt-6 space-y-5 text-sm leading-7 text-stone-300">
          <p>
            Cursor works best when the prompt identifies a specific bug, points at a
            likely file or module, and avoids flooding the model with irrelevant log
            history. Raw error output often does the opposite. It mixes the useful line
            with framework internals, package manager chatter, repeated frames, and
            warnings that never explain the real failure.
          </p>
          <p>
            Cleaning the log before sending it to Cursor helps the model focus on the
            code you actually want it to inspect or edit.
          </p>
        </div>

        <section className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
            <h2 className="text-2xl font-semibold text-white">Keep in the prompt</h2>
            <p className="mt-4 text-sm leading-7 text-stone-300">
              Preserve the real error, the relevant file, the command or workflow that
              failed, and one sentence about what behavior you expected.
            </p>
          </div>
          <div className="rounded-[28px] border border-amber-400/20 bg-amber-300/8 p-6">
            <h2 className="text-2xl font-semibold text-white">Cut first</h2>
            <p className="mt-4 text-sm leading-7 text-stone-300">
              Remove duplicated stack lines, dependency paths, repeated console output,
              and unrelated build or install noise that does not change the diagnosis.
            </p>
          </div>
        </section>

        <section className="mt-10 rounded-[28px] border border-white/10 bg-black/25 p-6">
          <h2 className="text-2xl font-semibold text-white">Useful Cursor prompt shape</h2>
          <pre className="mt-4 overflow-x-auto rounded-2xl border border-white/10 bg-black/45 p-4 text-sm leading-6 text-stone-300">
{`Please debug this error.
Relevant file: src/api/user.ts
Error: Cannot read properties of undefined
Expected result: return a valid user object
Recent change: I moved the data mapping into a helper`}
          </pre>
          <p className="mt-4 text-sm leading-7 text-stone-300">
            This structure gives Cursor the error, the likely location, and one piece
            of change context without overwhelming it with terminal output.
          </p>
        </section>

        <section className="mt-10 rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
          <h2 className="text-2xl font-semibold text-white">
            Why this matters for edit-oriented AI tools
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-7 text-stone-300">
            <p>
              Cursor is often used to suggest or apply code edits, not only to describe
              a bug. If the prompt is noisy, the model can lock onto the wrong cause or
              edit the wrong area. Cleaner input makes narrower, more reviewable edits
              more likely.
            </p>
            <p>
              ContextClean supports that narrower workflow by shrinking the log to the
              part that is most likely to guide a useful change.
            </p>
          </div>
        </section>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/"
            className="rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-stone-950 hover:bg-emerald-300"
          >
            Open Cursor Log Cleaner
          </Link>
          <Link
            href="/debugging-prompt-examples"
            className="rounded-full border border-white/12 px-6 py-3 text-sm font-semibold text-white hover:bg-white/[0.05]"
          >
            Read prompt examples
          </Link>
        </div>

        <GuideFooter />
      </article>
    </main>
  );
}
