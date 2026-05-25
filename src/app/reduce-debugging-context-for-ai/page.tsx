import GuideFooter from "../components/GuideFooter";
import { getPageSeo, siteUrl } from "../seo";

const seo = getPageSeo("/reduce-debugging-context-for-ai");

export const metadata = {
  title: seo.title,
  description: seo.description,
  alternates: {
    canonical: `${siteUrl}${seo.path}`,
  },
};

export default function ReduceDebuggingContextForAIPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-12 text-white">
      <article className="mx-auto max-w-3xl">
        <a href="/" className="text-sm text-green-400 hover:text-green-300">
          ← Back to ContextClean
        </a>

        <h1 className="mt-8 mb-6 text-4xl font-bold">
          Reduce Debugging Context for AI Coding Tools
        </h1>

        <p className="mb-6 text-lg text-zinc-400">
          AI coding assistants work better when error logs are short, focused, and
          free from low-signal framework output.
        </p>

        <h2 className="mt-10 mb-4 text-2xl font-bold">
          Why shorter debugging context helps
        </h2>

        <p className="mb-4 text-zinc-400">
          Long logs can include repeated stack frames, dependency internals, build
          messages, and unrelated warnings. This makes it harder for AI tools to find
          the real cause of the bug.
        </p>

        <h2 className="mt-10 mb-4 text-2xl font-bold">
          What to remove before pasting into AI
        </h2>

        <ul className="mb-6 list-disc space-y-2 pl-6 text-zinc-400">
          <li>Repeated lines</li>
          <li>node_modules paths</li>
          <li>webpack or build output</li>
          <li>irrelevant async frames</li>
          <li>unrelated warnings</li>
        </ul>
        <h2 className="mt-10 mb-4 text-2xl font-bold">
          How to decide what context to keep
        </h2>

        <p className="mb-4 text-zinc-400">
          Keep the first clear error message, your own file paths, line numbers,
          failing command, framework name, and the smallest relevant code location.
          Remove repeated internal frames, installation progress, and unrelated warnings.
        </p>

        <div className="mb-6 rounded-xl border border-zinc-800 bg-zinc-950 p-4">
          <h3 className="mb-2 font-bold text-white">Good context</h3>
          <pre className="overflow-x-auto text-sm text-zinc-400">
{`Error: Cannot read properties of undefined
File: src/api/user.ts
Line: 18
Command: npm run build`}
          </pre>
        </div>

        <p className="mb-4 text-zinc-400">
          The goal is not to remove every stack trace line. The goal is to preserve the
          lines that help the AI understand the root cause.
        </p>
        <h2 className="mt-10 mb-4 text-2xl font-bold">
          Use ContextClean
        </h2>

        <p className="mb-6 text-zinc-400">
          Paste your noisy log into ContextClean, clean it, then send the shorter
          version to ChatGPT, Claude, Cursor, Codex, or another AI coding assistant.
        </p>

        <a
          href="/"
          className="inline-block rounded-xl bg-green-500 px-6 py-3 font-bold text-black"
        >
          Open Context Cleaner
        </a>
        <GuideFooter />

      </article>
    </main>
  );
}