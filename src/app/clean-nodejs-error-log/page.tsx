export default function CleanNodeJSErrorLogPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-12 text-white">
      <article className="mx-auto max-w-3xl">
        <a href="/" className="text-sm text-green-400 hover:text-green-300">
          ← Back to ContextClean
        </a>

        <h1 className="mt-8 mb-6 text-4xl font-bold">
          Clean Node.js Error Logs for AI Debugging
        </h1>

        <p className="mb-6 text-lg text-zinc-400">
          Node.js error logs often include internal module paths, repeated frames,
          async traces, and dependency noise. ContextClean helps shorten them before
          you paste them into ChatGPT, Claude, Cursor, or Codex.
        </p>

        <h2 className="mt-10 mb-4 text-2xl font-bold">
          Why Node.js logs get noisy
        </h2>

        <p className="mb-4 text-zinc-400">
          A simple error can produce many lines from node_modules, internal modules,
          build tools, and framework wrappers. These lines often make AI debugging
          harder because they hide the real source of the problem.
        </p>

        <h2 className="mt-10 mb-4 text-2xl font-bold">
          What to clean before asking AI
        </h2>

        <ul className="mb-6 list-disc space-y-2 pl-6 text-zinc-400">
          <li>node_modules stack frames</li>
          <li>internal/modules paths</li>
          <li>duplicated error messages</li>
          <li>irrelevant async frames</li>
          <li>framework build output</li>
        </ul>

        <h2 className="mt-10 mb-4 text-2xl font-bold">
          Use the free Node.js log cleaner
        </h2>

        <p className="mb-6 text-zinc-400">
          Paste your Node.js error log into ContextClean, clean the noisy lines, then
          copy the shorter result into your AI coding assistant.
        </p>

        <a
          href="/"
          className="inline-block rounded-xl bg-green-500 px-6 py-3 font-bold text-black"
        >
          Open Node.js Log Cleaner
        </a>
      </article>
    </main>
  );
}