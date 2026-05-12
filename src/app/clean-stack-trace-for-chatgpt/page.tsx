export default function CleanStackTraceForChatGPTPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-12 text-white">
      <article className="mx-auto max-w-3xl">
        <a href="/" className="text-sm text-green-400 hover:text-green-300">
          ← Back to ContextClean
        </a>

        <h1 className="mt-8 mb-6 text-4xl font-bold">
          Clean Stack Trace for ChatGPT
        </h1>

        <p className="mb-6 text-lg text-zinc-400">
          Long stack traces often contain repeated frames, dependency paths, build
          output, and framework noise. Cleaning them before pasting into ChatGPT can
          help the model focus on the real error.
        </p>

        <h2 className="mt-10 mb-4 text-2xl font-bold">
          Why clean a stack trace before using ChatGPT?
        </h2>

        <p className="mb-4 text-zinc-400">
          AI coding tools work better when the input is short and relevant. If your
          error log contains many lines from node_modules, webpack, build systems, or
          repeated async frames, the useful part can be buried.
        </p>

        <h2 className="mt-10 mb-4 text-2xl font-bold">
          What ContextClean removes
        </h2>

        <ul className="mb-6 list-disc space-y-2 pl-6 text-zinc-400">
          <li>Repeated stack trace lines</li>
          <li>Common dependency noise</li>
          <li>Framework build output</li>
          <li>Empty lines</li>
          <li>Low-signal runtime frames</li>
        </ul>

        <h2 className="mt-10 mb-4 text-2xl font-bold">
          Use the free cleaner
        </h2>

        <p className="mb-6 text-zinc-400">
          Paste your error log into the ContextClean homepage, click Clean Stack
          Trace, then copy the cleaned result into ChatGPT, Claude, Cursor, Codex, or
          another AI coding assistant.
        </p>

        <a
          href="/"
          className="inline-block rounded-xl bg-green-500 px-6 py-3 font-bold text-black"
        >
          Open Stack Trace Cleaner
        </a>
      </article>
    </main>
  );
}