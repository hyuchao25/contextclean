const relatedGuides = [
  {
    href: "/clean-stack-trace-for-chatgpt",
    title: "Clean Stack Trace for ChatGPT",
  },
  {
    href: "/reduce-debugging-context-for-ai",
    title: "Reduce Debugging Context for AI",
  },
  {
    href: "/clean-nodejs-error-log",
    title: "Clean Node.js Error Logs",
  },
  {
    href: "/clean-python-traceback-for-ai",
    title: "Clean Python Tracebacks",
  },
];

export default function GuideFooter() {
  return (
    <section className="mt-12 border-t border-zinc-800 pt-8">
      <div className="rounded-2xl border border-green-900 bg-green-950/20 p-6">
        <h2 className="mb-3 text-2xl font-bold text-white">
          Clean your log now
        </h2>
        <p className="mb-5 text-zinc-300">
          Paste your raw error log into ContextClean and copy a cleaner version for
          ChatGPT, Claude, Cursor, Codex, or another AI coding assistant.
        </p>
        <a
          href="/"
          className="inline-block rounded-xl bg-green-500 px-6 py-3 font-bold text-black"
        >
          Open ContextClean
        </a>
      </div>

      <div className="mt-8">
        <h2 className="mb-4 text-2xl font-bold text-white">Related guides</h2>
        <div className="grid gap-3 md:grid-cols-2">
          {relatedGuides.map((guide) => (
            <a
              key={guide.href}
              href={guide.href}
              className="rounded-xl border border-zinc-800 p-4 text-zinc-300 hover:border-green-500 hover:text-white"
            >
              {guide.title}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}