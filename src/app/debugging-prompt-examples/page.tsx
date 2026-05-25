import Link from "next/link";
import { getPageSeo, siteUrl } from "../seo";

const seo = getPageSeo("/debugging-prompt-examples");

export const metadata = {
  title: seo.title,
  description: seo.description,
  alternates: {
    canonical: `${siteUrl}${seo.path}`,
  },
};

const examples = [
  {
    title: "Build failure prompt",
    body: `Please debug this build error.\nCommand: npm run build\nRelevant file: src/app/layout.tsx\nRecent change: moved a shared stylesheet\nError: Module not found: Can't resolve './globals.css'`,
  },
  {
    title: "Runtime crash prompt",
    body: `Please find the likely root cause.\nRelevant file: src/api/user.ts\nExpected behavior: API should return a valid user object\nError: TypeError: Cannot read properties of undefined`,
  },
  {
    title: "Test failure prompt",
    body: `Please explain why this test fails and suggest the minimal fix.\nJob: test\nFile: src/user.test.ts\nError: Expected 200 but received 500`,
  },
];

export default function DebuggingPromptExamplesPage() {
  return (
    <main className="min-h-screen px-4 py-8 text-stone-100 sm:px-6 lg:px-8">
      <article className="mx-auto max-w-5xl rounded-[32px] border border-white/10 bg-stone-950/80 p-8">
        <Link href="/" className="text-sm text-emerald-300 hover:text-emerald-200">
          Back to ContextClean
        </Link>

        <p className="mt-8 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300/80">
          Examples
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white">
          Debugging prompt examples for build errors, runtime crashes, and failing tests
        </h1>

        <div className="mt-6 space-y-5 text-sm leading-7 text-stone-300">
          <p>
            The fastest way to explain a good AI debugging prompt is to show one. These
            examples use a simple pattern: tell the model what job you want it to do,
            preserve the real error, identify the relevant file or command, and add the
            smallest amount of human context needed to frame the failure.
          </p>
          <p>
            They are not strict templates. They are examples of how to keep prompts
            tight enough to be readable while still being specific enough to be useful.
          </p>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {examples.map((example) => (
            <section
              key={example.title}
              className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6"
            >
              <h2 className="text-xl font-semibold text-white">{example.title}</h2>
              <pre className="mt-4 overflow-x-auto rounded-2xl border border-white/10 bg-black/45 p-4 text-sm leading-6 text-stone-300">
                {example.body}
              </pre>
            </section>
          ))}
        </div>

        <section className="mt-10 rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
          <h2 className="text-2xl font-semibold text-white">Related reading</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/ai-debugging-checklist" className="rounded-full border border-white/10 px-4 py-2 text-sm text-stone-300 hover:text-white">
              AI Debugging Checklist
            </Link>
            <Link href="/what-makes-a-high-signal-error-report" className="rounded-full border border-white/10 px-4 py-2 text-sm text-stone-300 hover:text-white">
              High-Signal Error Reports
            </Link>
            <Link href="/compare-raw-vs-cleaned-logs" className="rounded-full border border-white/10 px-4 py-2 text-sm text-stone-300 hover:text-white">
              Compare Raw vs Cleaned Logs
            </Link>
          </div>
        </section>

        <p className="mt-10 text-sm leading-7 text-stone-400">
          Last reviewed: May 25, 2026. Maintained as part of the ContextClean resource library.
        </p>
      </article>
    </main>
  );
}
