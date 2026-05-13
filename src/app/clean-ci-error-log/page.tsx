export default function CleanCIErrorLogPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-12 text-white">
      <article className="mx-auto max-w-3xl">
        <a href="/" className="text-sm text-green-400 hover:text-green-300">← Back to ContextClean</a>

        <h1 className="mt-8 mb-6 text-4xl font-bold">
          Clean CI Error Logs for AI Debugging
        </h1>

        <p className="mb-6 text-lg text-zinc-400">
          CI logs from GitHub Actions, GitLab CI, CircleCI, and other pipelines often
          contain setup output, dependency installation logs, and repeated failure lines.
        </p>

        <h2 className="mt-10 mb-4 text-2xl font-bold">Why CI logs are hard for AI</h2>
        <p className="mb-4 text-zinc-400">
          CI output often mixes the real failure with setup commands, environment logs,
          build steps, package manager noise, and unrelated warnings.
        </p>

        <h2 className="mt-10 mb-4 text-2xl font-bold">What to clean before asking AI</h2>
        <ul className="mb-6 list-disc space-y-2 pl-6 text-zinc-400">
          <li>dependency install output</li>
          <li>setup logs</li>
          <li>repeated failed command lines</li>
          <li>cached step messages</li>
          <li>empty or low-signal lines</li>
        </ul>

        <h2 className="mt-10 mb-4 text-2xl font-bold">Use ContextClean</h2>
        <p className="mb-6 text-zinc-400">
          Paste your CI error log into ContextClean, clean it, then send the shorter
          output to ChatGPT, Claude, Cursor, Codex, or another AI coding assistant.
        </p>

        <a href="/" className="inline-block rounded-xl bg-green-500 px-6 py-3 font-bold text-black">
          Open CI Log Cleaner
        </a>
      </article>
    </main>
  );
}