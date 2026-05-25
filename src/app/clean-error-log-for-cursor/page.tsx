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
    <main className="min-h-screen bg-black px-6 py-12 text-white">
      <article className="mx-auto max-w-3xl">
        <a href="/" className="text-sm text-green-400 hover:text-green-300">
          ← Back to ContextClean
        </a>

        <h1 className="mt-8 mb-6 text-4xl font-bold">
          Clean Error Logs for Cursor AI
        </h1>

        <p className="mb-6 text-lg text-zinc-400">
          Cursor can debug code better when the error log is short, focused, and free
          from repeated dependency output. ContextClean helps prepare cleaner debugging
          context before you paste logs into Cursor.
        </p>

        <h2 className="mt-10 mb-4 text-2xl font-bold">
          Why clean logs before using Cursor?
        </h2>

        <p className="mb-4 text-zinc-400">
          Large logs can distract AI coding tools with framework internals, package
          manager output, repeated stack frames, and unrelated warnings.
        </p>

        <h2 className="mt-10 mb-4 text-2xl font-bold">
          What ContextClean helps remove
        </h2>

        <ul className="mb-6 list-disc space-y-2 pl-6 text-zinc-400">
          <li>duplicated stack trace lines</li>
          <li>node_modules paths</li>
          <li>framework internals</li>
          <li>empty lines</li>
          <li>low-signal runtime output</li>
        </ul>
        <h2 className="mt-10 mb-4 text-2xl font-bold">
          How to prepare logs for Cursor
        </h2>

        <p className="mb-4 text-zinc-400">
          Cursor works best when the prompt includes the real error, the relevant file,
          and the expected behavior. Long noisy logs can make the Composer or Chat focus
          on framework internals instead of the code you want changed.
        </p>

        <div className="mb-6 rounded-xl border border-zinc-800 bg-zinc-950 p-4">
          <h3 className="mb-2 font-bold text-white">Useful prompt format</h3>
          <pre className="overflow-x-auto text-sm text-zinc-400">
{`Please debug this error.
Relevant file: src/api/user.ts
Error: Cannot read properties of undefined
Expected result: return a valid user object`}
          </pre>
        </div>

        <p className="mb-4 text-zinc-400">
          After cleaning the log, paste the shorter version into Cursor with the file or
          folder you want Cursor to edit.
        </p>
        <h2 className="mt-10 mb-4 text-2xl font-bold">
          Use the free Cursor log cleaner
        </h2>

        <p className="mb-6 text-zinc-400">
          Paste your error log into ContextClean, clean it, then copy the shorter result
          into Cursor Chat or Composer.
        </p>

        <a
          href="/"
          className="inline-block rounded-xl bg-green-500 px-6 py-3 font-bold text-black"
        >
          Open Cursor Log Cleaner
        </a>
        <GuideFooter />

      </article>
    </main>
  );
}