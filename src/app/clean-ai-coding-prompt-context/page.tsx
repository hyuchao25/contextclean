export default function CleanAICodingPromptContextPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-12 text-white">
      <article className="mx-auto max-w-3xl">
        <a href="/" className="text-sm text-green-400 hover:text-green-300">
          ← Back to ContextClean
        </a>

        <h1 className="mt-8 mb-6 text-4xl font-bold">
          Clean AI Coding Prompt Context
        </h1>

        <p className="mb-6 text-lg text-zinc-400">
          AI coding prompts work better when the context is short, relevant, and free
          from noisy logs or repeated debugging output.
        </p>

        <h2 className="mt-10 mb-4 text-2xl font-bold">
          Why prompt context matters
        </h2>

        <p className="mb-4 text-zinc-400">
          When you paste long logs into ChatGPT, Claude, Cursor, or Codex, the model
          may spend attention on low-signal framework output instead of the real error.
        </p>

        <h2 className="mt-10 mb-4 text-2xl font-bold">
          What to remove from AI coding prompts
        </h2>

        <ul className="mb-6 list-disc space-y-2 pl-6 text-zinc-400">
          <li>duplicated error messages</li>
          <li>dependency paths</li>
          <li>build tool noise</li>
          <li>empty lines</li>
          <li>irrelevant warnings</li>
        </ul>

        <h2 className="mt-10 mb-4 text-2xl font-bold">
          Use ContextClean
        </h2>

        <p className="mb-6 text-zinc-400">
          Clean your debugging context first, then paste the shorter version into your
          AI coding assistant for better debugging results.
        </p>

        <a
          href="/"
          className="inline-block rounded-xl bg-green-500 px-6 py-3 font-bold text-black"
        >
          Open Context Cleaner
        </a>
      </article>
    </main>
  );
}