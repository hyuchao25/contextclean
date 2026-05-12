export default function TermsPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-12 text-white">
      <section className="mx-auto max-w-3xl">
        <h1 className="mb-6 text-4xl font-bold">Terms of Use</h1>

        <p className="mb-4 text-zinc-400">
          By using ContextClean, you agree to these terms.
        </p>

        <h2 className="mt-8 mb-3 text-2xl font-bold">Service</h2>
        <p className="mb-4 text-zinc-400">
          ContextClean provides browser-based tools for cleaning logs, stack traces,
          and debugging text for AI coding workflows.
        </p>

        <h2 className="mt-8 mb-3 text-2xl font-bold">No Warranty</h2>
        <p className="mb-4 text-zinc-400">
          ContextClean is provided as-is. We do not guarantee that cleaned output is
          complete, accurate, secure, or suitable for every use case.
        </p>

        <h2 className="mt-8 mb-3 text-2xl font-bold">User Responsibility</h2>
        <p className="mb-4 text-zinc-400">
          Do not paste sensitive secrets, passwords, API keys, private customer data,
          or confidential information into any online tool.
        </p>

        <h2 className="mt-8 mb-3 text-2xl font-bold">Contact</h2>
        <p className="text-zinc-400">Contact: support@contextclean.dev</p>
      </section>
    </main>
  );
}