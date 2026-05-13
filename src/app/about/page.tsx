export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-12 text-white">
      <section className="mx-auto max-w-3xl">
        <a href="/" className="text-sm text-green-400 hover:text-green-300">
          ← Back to ContextClean
        </a>

        <h1 className="mt-8 mb-6 text-4xl font-bold">About ContextClean</h1>

        <p className="mb-4 text-zinc-400">
          ContextClean is a simple tool for cleaning noisy logs, stack traces,
          and debugging output before sending them to AI coding assistants.
        </p>

        <p className="mb-4 text-zinc-400">
          It is designed for developers using tools like ChatGPT, Claude, Cursor,
          Codex, and other AI coding workflows.
        </p>

        <p className="text-zinc-400">
          The goal is to reduce irrelevant debugging context so AI tools can focus
          on the real error.
        </p>
      </section>
    </main>
  );
}