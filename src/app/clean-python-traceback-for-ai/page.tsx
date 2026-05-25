import GuideFooter from "../components/GuideFooter";
import { getPageSeo, siteUrl } from "../seo";

const seo = getPageSeo("/clean-python-traceback-for-ai");

export const metadata = {
  title: seo.title,
  description: seo.description,
  alternates: {
    canonical: `${siteUrl}${seo.path}`,
  },
};

export default function CleanPythonTracebackForAIPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-12 text-white">
      <article className="mx-auto max-w-3xl">
        <a href="/" className="text-sm text-green-400 hover:text-green-300">← Back to ContextClean</a>

        <h1 className="mt-8 mb-6 text-4xl font-bold">
          Clean Python Tracebacks for AI Debugging
        </h1>

        <p className="mb-6 text-lg text-zinc-400">
          Python tracebacks can include repeated frames, virtual environment paths,
          package internals, and framework noise. Cleaning them before using ChatGPT,
          Claude, Cursor, or Codex helps AI focus on the actual exception.
        </p>

        <h2 className="mt-10 mb-4 text-2xl font-bold">Why Python tracebacks need cleaning</h2>
        <p className="mb-4 text-zinc-400">
          A simple Python bug can create a long traceback filled with library paths,
          async wrappers, test runner output, and unrelated framework calls.
        </p>

        <h2 className="mt-10 mb-4 text-2xl font-bold">What to remove</h2>
        <ul className="mb-6 list-disc space-y-2 pl-6 text-zinc-400">
          <li>site-packages frames</li>
          <li>virtual environment paths</li>
          <li>duplicated traceback lines</li>
          <li>test runner noise</li>
          <li>low-signal framework internals</li>
        </ul>
        <h2 className="mt-10 mb-4 text-2xl font-bold">
          Useful Python traceback lines to keep
        </h2>

        <p className="mb-4 text-zinc-400">
          For Python debugging, the most useful lines are usually the exception type,
          the final error message, and the last few frames that point to your own files.
        </p>

        <div className="mb-6 rounded-xl border border-zinc-800 bg-zinc-950 p-4">
          <h3 className="mb-2 font-bold text-white">Example</h3>
          <pre className="overflow-x-auto text-sm text-zinc-400">
{`File "/app/main.py", line 8, in run
    print(user["name"])
KeyError: 'name'`}
          </pre>
        </div>

        <p className="mb-4 text-zinc-400">
          You can usually remove long site-packages frames unless the error appears to
          come from a library configuration problem.
        </p>
        <h2 className="mt-10 mb-4 text-2xl font-bold">Use ContextClean</h2>
        <p className="mb-6 text-zinc-400">
          Paste your Python traceback into ContextClean, clean the noisy lines, then
          copy the shorter version into your AI coding assistant.
        </p>

        <a href="/" className="inline-block rounded-xl bg-green-500 px-6 py-3 font-bold text-black">
          Open Python Traceback Cleaner
        </a>
        <GuideFooter />

      </article>
    </main>
  );
}