import Link from "next/link";
import GuideFooter from "../components/GuideFooter";
import { getPageSeo, siteUrl } from "../seo";

const seo = getPageSeo("/clean-ai-coding-prompt-context");

export const metadata = {
  title: seo.title,
  description: seo.description,
  alternates: {
    canonical: `${siteUrl}${seo.path}`,
  },
};

export default function CleanAICodingPromptContextPage() {
  return (
    <main className="min-h-screen px-4 py-8 text-stone-100 sm:px-6 lg:px-8">
      <article className="mx-auto max-w-4xl rounded-[32px] border border-white/10 bg-stone-950/80 p-8">
        <Link href="/" className="text-sm text-emerald-300 hover:text-emerald-200">
          Back to ContextClean
        </Link>

        <p className="mt-8 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300/80">
          Prompt Guide
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white">
          How to clean AI coding prompt context so the model spends attention on the real bug
        </h1>

        <div className="mt-6 space-y-5 text-sm leading-7 text-stone-300">
          <p>
            A debugging prompt is not just a pasted log. It is a package of context:
            what failed, where it failed, what you expected, what changed recently, and
            what kind of answer you want back. Most weak AI debugging results happen
            because one of those pieces is missing or because the prompt is bloated with
            irrelevant text.
          </p>
          <p>
            Cleaning prompt context means reducing duplicate errors, dependency noise,
            and low-signal build output while keeping the smallest set of facts that
            still explain the problem accurately.
          </p>
        </div>

        <section className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <h2 className="text-lg font-semibold text-white">Error</h2>
            <p className="mt-2 text-sm leading-6 text-stone-300">
              Keep the first meaningful error message, not every repeated downstream
              symptom.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <h2 className="text-lg font-semibold text-white">Location</h2>
            <p className="mt-2 text-sm leading-6 text-stone-300">
              Preserve the relevant file path, component, module, route, or test name.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <h2 className="text-lg font-semibold text-white">Expectation</h2>
            <p className="mt-2 text-sm leading-6 text-stone-300">
              Add one sentence about the behavior you expected and what changed before
              the bug appeared.
            </p>
          </div>
        </section>

        <section className="mt-10 rounded-[28px] border border-white/10 bg-black/25 p-6">
          <h2 className="text-2xl font-semibold text-white">Example prompt</h2>
          <pre className="mt-4 overflow-x-auto rounded-2xl border border-white/10 bg-black/45 p-4 text-sm leading-6 text-stone-300">
{`Please debug this error.
Relevant file: src/app/page.tsx
Expected behavior: the page should render without crashing
Recent change: I moved data fetching into a new helper
Error: TypeError: Cannot read properties of undefined`}
          </pre>
          <p className="mt-4 text-sm leading-7 text-stone-300">
            This prompt gives the model direction. It defines the task, preserves the
            core error, identifies the code area, and adds one piece of change context
            that may explain why the bug started.
          </p>
        </section>

        <section className="mt-10 rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
          <h2 className="text-2xl font-semibold text-white">
            What to remove from prompt context first
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-7 text-stone-300">
            <p>
              Remove duplicated error messages, generic dependency paths, full install
              output, unrelated warnings, and repeated stack frames that do not change
              the diagnosis. If the AI needs more context after the first answer, you
              can always add it back selectively.
            </p>
            <p>
              Starting small is not a weakness. It is a way to prevent the model from
              anchoring on the wrong details too early.
            </p>
          </div>
        </section>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/"
            className="rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-stone-950 hover:bg-emerald-300"
          >
            Open Context Cleaner
          </Link>
          <Link
            href="/ai-debugging-checklist"
            className="rounded-full border border-white/12 px-6 py-3 text-sm font-semibold text-white hover:bg-white/[0.05]"
          >
            Read the AI debugging checklist
          </Link>
        </div>

        <GuideFooter />
      </article>
    </main>
  );
}
