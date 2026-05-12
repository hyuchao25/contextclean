export default function PrivacyPage() {
    return (
      <main className="min-h-screen bg-black px-6 py-12 text-white">
        <section className="mx-auto max-w-3xl">
          <h1 className="mb-6 text-4xl font-bold">Privacy Policy</h1>
  
          <p className="mb-4 text-zinc-400">
            ContextClean is a simple browser-based tool for cleaning logs and stack traces.
          </p>
  
          <h2 className="mt-8 mb-3 text-2xl font-bold">Data Processing</h2>
          <p className="mb-4 text-zinc-400">
            The text you paste into ContextClean is processed locally in your browser.
            We do not store your logs, stack traces, source code, or debugging output.
          </p>
  
          <h2 className="mt-8 mb-3 text-2xl font-bold">Analytics</h2>
          <p className="mb-4 text-zinc-400">
            We may use privacy-friendly analytics to understand general website usage,
            such as page views and referrers.
          </p>
  
          <h2 className="mt-8 mb-3 text-2xl font-bold">Advertising</h2>
          <p className="mb-4 text-zinc-400">
            We may display ads or affiliate links in the future. Third-party services may
            use cookies or similar technologies according to their own policies.
          </p>
  
          <h2 className="mt-8 mb-3 text-2xl font-bold">Contact</h2>
          <p className="text-zinc-400">
            Contact: support@contextclean.dev
          </p>
        </section>
      </main>
    );
  }