export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-12 text-white">
      <section className="mx-auto max-w-3xl">
        <a href="/" className="text-sm text-green-400 hover:text-green-300">
          ← Back to ContextClean
        </a>

        <h1 className="mt-8 mb-6 text-4xl font-bold">Contact</h1>

        <p className="mb-4 text-zinc-400">
          For feedback, suggestions, or support, contact:
        </p>

        <p className="text-zinc-300">support@contextclean.dev</p>
      </section>
    </main>
  );
}