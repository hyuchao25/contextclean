import { getPageSeo, siteUrl } from "../seo";

const seo = getPageSeo("/terms");

export const metadata = {
  title: seo.title,
  description: seo.description,
  alternates: {
    canonical: `${siteUrl}${seo.path}`,
  },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-12 text-white">
      <section className="mx-auto max-w-3xl">
        <a href="/" className="text-sm text-green-400 hover:text-green-300">
          ← Back to ContextClean
        </a>

        <h1 className="mt-8 mb-6 text-4xl font-bold">Terms of Use</h1>

        <p className="mb-4 text-zinc-400">
          By using ContextClean, you agree to these terms.
        </p>

        <h2 className="mt-10 mb-4 text-2xl font-bold">Service</h2>

        <p className="mb-4 text-zinc-400">
          ContextClean provides browser-based tools for cleaning logs, stack traces,
          tracebacks, build errors, and debugging text for AI coding workflows.
        </p>

        <h2 className="mt-10 mb-4 text-2xl font-bold">User responsibility</h2>

        <p className="mb-4 text-zinc-400">
          You are responsible for reviewing both the original input and cleaned
          output. Do not rely on ContextClean as your only debugging or security
          review tool.
        </p>

        <p className="mb-4 text-zinc-400">
          Do not paste passwords, API keys, access tokens, private customer data,
          confidential source code, or other sensitive information into any online
          tool.
        </p>

        <h2 className="mt-10 mb-4 text-2xl font-bold">No warranty</h2>

        <p className="mb-4 text-zinc-400">
          ContextClean is provided as-is. We do not guarantee that cleaned output is
          complete, accurate, secure, or suitable for every use case.
        </p>

        <h2 className="mt-10 mb-4 text-2xl font-bold">Changes</h2>

        <p className="mb-4 text-zinc-400">
          ContextClean may change features, pages, or policies over time as the site
          improves.
        </p>

        <h2 className="mt-10 mb-4 text-2xl font-bold">Contact</h2>

        <p className="text-zinc-400">
          Contact: support@contextclean.dev
        </p>
      </section>
    </main>
  );
}