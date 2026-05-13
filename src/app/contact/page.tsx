export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-12 text-white">
      <section className="mx-auto max-w-3xl">
        <a href="/" className="text-sm text-green-400 hover:text-green-300">
          ← Back to ContextClean
        </a>

        <h1 className="mt-8 mb-6 text-4xl font-bold">Contact</h1>

        <p className="mb-4 text-zinc-400">
          Send feedback, bug reports, feature requests, or support questions to:
        </p>

        <p className="mb-8 text-zinc-300">support@contextclean.dev</p>

        <h2 className="mt-10 mb-4 text-2xl font-bold">Useful feedback</h2>

        <ul className="list-disc space-y-2 pl-6 text-zinc-400">
          <li>Examples of logs that ContextClean does not clean well</li>
          <li>Requests for new cleaning modes</li>
          <li>Bug reports about buttons, copy, download, or formatting</li>
          <li>Suggestions for improving AI debugging prompts</li>
        </ul>
      </section>
    </main>
  );
}