import { getPageSeo, siteUrl } from "../seo";

const seo = getPageSeo("/about");

export const metadata = {
  title: seo.title,
  description: seo.description,
  alternates: {
    canonical: `${siteUrl}${seo.path}`,
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-12 text-white">
      <section className="mx-auto max-w-3xl">
        <a href="/" className="text-sm text-green-400 hover:text-green-300">
          ← Back to ContextClean
        </a>

        <h1 className="mt-8 mb-6 text-4xl font-bold">About ContextClean</h1>

        <p className="mb-4 text-zinc-400">
          ContextClean is a browser-based utility for cleaning noisy logs, stack
          traces, tracebacks, build errors, and CI output before sending them to AI
          coding assistants.
        </p>

        <p className="mb-4 text-zinc-400">
          It is built for developers who use ChatGPT, Claude, Cursor, Codex, and
          other AI tools to debug code faster.
        </p>

        <h2 className="mt-10 mb-4 text-2xl font-bold">Why this tool exists</h2>

        <p className="mb-4 text-zinc-400">
          AI coding tools work best when the input is focused. Raw error logs often
          include dependency paths, repeated lines, package manager output, framework
          internals, and unrelated warnings.
        </p>

        <p className="mb-4 text-zinc-400">
          ContextClean helps remove low-signal debugging context so the AI can focus
          on the real error.
        </p>

        <h2 className="mt-10 mb-4 text-2xl font-bold">Privacy-first design</h2>

        <p className="mb-4 text-zinc-400">
          The cleaner runs in your browser. ContextClean is designed to process text
          locally on the page instead of requiring an account or upload workflow.
        </p>

        <p className="text-zinc-400">
          You should still avoid pasting passwords, API keys, tokens, customer data,
          or confidential information into any online tool.
        </p>
        <h2 className="mt-10 mb-4 text-2xl font-bold">How ContextClean is built</h2>

<p className="mb-4 text-zinc-400">
  ContextClean is intentionally small and focused. It does not try to replace
  a full IDE, debugger, or AI coding assistant. Instead, it prepares cleaner
  text so those tools can work with better input.
</p>

<p className="mb-4 text-zinc-400">
  The cleaning rules are designed around common real-world debugging noise:
  dependency folders, repeated stack frames, build system messages, package
  manager output, and low-signal runtime lines.
</p>

<p className="text-zinc-400">
  Future improvements will focus on better language-specific cleaning modes,
  clearer examples, and more practical debugging workflows.
</p>
      </section>
    </main>
  );
}