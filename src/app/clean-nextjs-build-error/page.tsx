import GuideFooter from "../components/GuideFooter";
import { getPageSeo, siteUrl } from "../seo";

const seo = getPageSeo("/clean-nextjs-build-error");

export const metadata = {
  title: seo.title,
  description: seo.description,
  alternates: {
    canonical: `${siteUrl}${seo.path}`,
  },
};

export default function CleanNextJSBuildErrorPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-12 text-white">
      <article className="mx-auto max-w-3xl">
        <a href="/" className="text-sm text-green-400 hover:text-green-300">← Back to ContextClean</a>

        <h1 className="mt-8 mb-6 text-4xl font-bold">
          Clean Next.js Build Errors for AI Debugging
        </h1>

        <p className="mb-6 text-lg text-zinc-400">
          Next.js build errors can include Turbopack messages, framework internals,
          dependency paths, and repeated stack traces. Cleaning them helps AI coding
          assistants focus on the real build failure.
        </p>

        <h2 className="mt-10 mb-4 text-2xl font-bold">Why Next.js build logs are hard to read</h2>
        <p className="mb-4 text-zinc-400">
          A single failed build can produce many unrelated lines from bundlers,
          framework internals, dependency imports, and generated files.
        </p>

        <h2 className="mt-10 mb-4 text-2xl font-bold">What to clean before asking AI</h2>
        <ul className="mb-6 list-disc space-y-2 pl-6 text-zinc-400">
          <li>.next output</li>
          <li>webpack or Turbopack noise</li>
          <li>node_modules frames</li>
          <li>duplicated build messages</li>
          <li>low-signal runtime output</li>
        </ul>
        <h2 className="mt-10 mb-4 text-2xl font-bold">
          What matters in a Next.js build error
        </h2>

        <p className="mb-4 text-zinc-400">
          Next.js build output can include route compilation, Turbopack or webpack
          messages, server component traces, hydration warnings, and dependency paths.
          AI tools usually need the first real error, the file path, and the line number.
        </p>

        <div className="mb-6 rounded-xl border border-zinc-800 bg-zinc-950 p-4">
          <h3 className="mb-2 font-bold text-white">Example</h3>
          <pre className="overflow-x-auto text-sm text-zinc-400">
{`Build error occurred
Module not found: Can't resolve './globals.css'
./src/app/layout.tsx (2:1)`}
          </pre>
        </div>

        <p className="mb-4 text-zinc-400">
          Keep the exact error message and the file location. Remove repeated compiled
          output, long dependency traces, and unrelated warnings before asking AI for a
          minimal fix.
        </p>
        <h2 className="mt-10 mb-4 text-2xl font-bold">Use ContextClean</h2>
        <p className="mb-6 text-zinc-400">
          Paste your Next.js build error into ContextClean, clean it, then send the
          shorter version to ChatGPT, Claude, Cursor, Codex, or another AI coding tool.
        </p>

        <a href="/" className="inline-block rounded-xl bg-green-500 px-6 py-3 font-bold text-black">
          Open Next.js Build Error Cleaner
        </a>
        <GuideFooter />

      </article>
    </main>
  );
}