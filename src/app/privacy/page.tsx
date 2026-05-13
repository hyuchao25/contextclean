import { getPageSeo, siteUrl } from "../seo";

const seo = getPageSeo("/privacy");

export const metadata = {
  title: seo.title,
  description: seo.description,
  alternates: {
    canonical: `${siteUrl}${seo.path}`,
  },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-12 text-white">
      <section className="mx-auto max-w-3xl">
        <a href="/" className="text-sm text-green-400 hover:text-green-300">
          ← Back to ContextClean
        </a>

        <h1 className="mt-8 mb-6 text-4xl font-bold">Privacy Policy</h1>

        <p className="mb-4 text-zinc-400">
          ContextClean is a browser-based tool for cleaning logs, stack traces,
          tracebacks, build errors, and debugging output for AI coding workflows.
        </p>

        <h2 className="mt-10 mb-4 text-2xl font-bold">Text processing</h2>

        <p className="mb-4 text-zinc-400">
          The text you paste into ContextClean is processed in your browser by the
          page itself. ContextClean does not require an account and does not provide
          a server upload workflow for pasted logs.
        </p>

        <p className="mb-4 text-zinc-400">
          You should not paste passwords, API keys, access tokens, private customer
          data, confidential source code, or other sensitive secrets into any online
          tool.
        </p>

        <h2 className="mt-10 mb-4 text-2xl font-bold">Analytics</h2>

        <p className="mb-4 text-zinc-400">
          ContextClean may use privacy-friendly analytics to understand general site
          usage, such as page views, referrers, and basic performance information.
        </p>

        <h2 className="mt-10 mb-4 text-2xl font-bold">Advertising</h2>

        <p className="mb-4 text-zinc-400">
          ContextClean may display ads through third-party advertising services such
          as Google AdSense. These services may use cookies or similar technologies
          according to their own policies.
        </p>

        <h2 className="mt-10 mb-4 text-2xl font-bold">Contact</h2>

        <p className="text-zinc-400">
          For privacy questions, contact: support@contextclean.dev
        </p>
      </section>
    </main>
  );
}