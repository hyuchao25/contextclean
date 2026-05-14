import GuideFooter from "../components/GuideFooter";
import { getPageSeo, siteUrl } from "../seo";

const seo = getPageSeo("/clean-typescript-error-for-ai");

export const metadata = {
  title: seo.title,
  description: seo.description,
  alternates: {
    canonical: `${siteUrl}${seo.path}`,
  },
};

export default function CleanTypeScriptErrorForAIPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-12 text-white">
      <article className="mx-auto max-w-3xl">
        <a href="/" className="text-sm text-green-400 hover:text-green-300">← Back to ContextClean</a>

        <h1 className="mt-8 mb-6 text-4xl font-bold">
          Clean TypeScript Errors for AI Debugging
        </h1>

        <p className="mb-6 text-lg text-zinc-400">
          TypeScript errors can include long generic types, repeated compiler output,
          framework paths, and dependency noise. Cleaning them helps AI coding tools
          focus on the real type issue.
        </p>

        <h2 className="mt-10 mb-4 text-2xl font-bold">Why TypeScript errors get hard to read</h2>
        <p className="mb-4 text-zinc-400">
          Large projects often produce long compiler messages with nested types,
          repeated file paths, generated code, and unrelated warnings.
        </p>

        <h2 className="mt-10 mb-4 text-2xl font-bold">What to clean before asking AI</h2>
        <ul className="mb-6 list-disc space-y-2 pl-6 text-zinc-400">
          <li>duplicated compiler lines</li>
          <li>dependency paths</li>
          <li>generated build output</li>
          <li>irrelevant warnings</li>
          <li>low-signal framework messages</li>
        </ul>

        <h2 className="mt-10 mb-4 text-2xl font-bold">Use ContextClean</h2>
        <p className="mb-6 text-zinc-400">
          Paste your TypeScript error into ContextClean, clean it, then send the shorter
          result to ChatGPT, Claude, Cursor, Codex, or another AI coding assistant.
        </p>

        <a href="/" className="inline-block rounded-xl bg-green-500 px-6 py-3 font-bold text-black">
          Open TypeScript Error Cleaner
        </a>
        <GuideFooter />

      </article>
    </main>
  );
}