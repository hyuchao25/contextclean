import GuideFooter from "../components/GuideFooter";
import { getPageSeo, siteUrl } from "../seo";

const seo = getPageSeo("/clean-react-error-stack");

export const metadata = {
  title: seo.title,
  description: seo.description,
  alternates: {
    canonical: `${siteUrl}${seo.path}`,
  },
};

export default function CleanReactErrorStackPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-12 text-white">
      <article className="mx-auto max-w-3xl">
        <a href="/" className="text-sm text-green-400 hover:text-green-300">← Back to ContextClean</a>

        <h1 className="mt-8 mb-6 text-4xl font-bold">
          Clean React Error Stacks for AI Coding Tools
        </h1>

        <p className="mb-6 text-lg text-zinc-400">
          React and Next.js errors often include component stacks, build output,
          framework paths, and repeated runtime messages. ContextClean helps shorten
          them before sending them to AI tools.
        </p>

        <h2 className="mt-10 mb-4 text-2xl font-bold">Why React errors get noisy</h2>
        <p className="mb-4 text-zinc-400">
          React apps can produce long error output from hydration warnings, component
          stacks, webpack, Next.js internals, and browser console logs.
        </p>

        <h2 className="mt-10 mb-4 text-2xl font-bold">What ContextClean helps remove</h2>
        <ul className="mb-6 list-disc space-y-2 pl-6 text-zinc-400">
          <li>duplicated console lines</li>
          <li>webpack output</li>
          <li>Next.js internal frames</li>
          <li>low-signal component stack noise</li>
          <li>empty lines and repeated messages</li>
        </ul>
        <h2 className="mt-10 mb-4 text-2xl font-bold">
          Useful React error details to keep
        </h2>

        <p className="mb-4 text-zinc-400">
          For React debugging, keep the first error message, the component name, your
          source file path, and the line number. These details help AI tools identify
          whether the problem is caused by props, state, hooks, rendering, or hydration.
        </p>

        <div className="mb-6 rounded-xl border border-zinc-800 bg-zinc-950 p-4">
          <h3 className="mb-2 font-bold text-white">Example</h3>
          <pre className="overflow-x-auto text-sm text-zinc-400">
{`Error: Hydration failed because the initial UI does not match.
Header (src/components/Header.tsx:15:3)`}
          </pre>
        </div>

        <p className="mb-4 text-zinc-400">
          Remove repeated framework traces and browser console noise unless they point
          to your own component or a specific rendering mismatch.
        </p>
        <h2 className="mt-10 mb-4 text-2xl font-bold">Use the React error cleaner</h2>
        <p className="mb-6 text-zinc-400">
          Paste your React error stack into ContextClean, clean it, then ask ChatGPT,
          Claude, Cursor, or Codex to debug the shorter version.
        </p>

        <a href="/" className="inline-block rounded-xl bg-green-500 px-6 py-3 font-bold text-black">
          Open React Error Cleaner
        </a>
        <GuideFooter />

      </article>
    </main>
  );
}