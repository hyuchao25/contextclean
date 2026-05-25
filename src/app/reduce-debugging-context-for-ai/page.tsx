import Link from "next/link";
import GuideFooter from "../components/GuideFooter";
import { getPageSeo, siteUrl } from "../seo";

const seo = getPageSeo("/reduce-debugging-context-for-ai");

export const metadata = {
  title: seo.title,
  description: seo.description,
  alternates: {
    canonical: `${siteUrl}${seo.path}`,
  },
};

const removalTargets = [
  "Repeated stack frames that do not change the diagnosis",
  "Dependency paths from node_modules or framework internals",
  "Package manager chatter, install progress, and cache restore logs",
  "Warnings unrelated to the failure you are asking about",
];

const keepTargets = [
  "The first clear error message",
  "The failing command, route, or build step",
  "Your own file path and line number",
  "One sentence about expected behavior",
];

export default function ReduceDebuggingContextForAIPage() {
  return (
    <main className="min-h-screen px-4 py-8 text-stone-100 sm:px-6 lg:px-8">
      <article className="mx-auto max-w-4xl rounded-[32px] border border-white/10 bg-stone-950/80 p-8">
        <Link href="/" className="text-sm text-emerald-300 hover:text-emerald-200">
          Back to ContextClean
        </Link>

        <p className="mt-8 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300/80">
          Guide
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white">
          How to reduce debugging context for AI without removing the lines that actually matter
        </h1>

        <div className="mt-6 space-y-5 text-sm leading-7 text-stone-300">
          <p>
            When developers say an AI tool gave a vague or unhelpful debugging answer,
            the model is often not the only problem. The input is frequently overloaded
            with low-signal context: repeated frames, dependency internals, package
            manager progress, setup logs, and warnings that are adjacent to the failure
            but not explanatory.
          </p>
          <p>
            Reducing debugging context does not mean stripping away everything until the
            log becomes useless. It means removing the parts that compete for attention
            while preserving the lines that identify the real failure, the affected file,
            and the command that triggered the issue.
          </p>
        </div>

        <section className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
            <h2 className="text-2xl font-semibold text-white">What to remove first</h2>
            <ul className="mt-4 list-disc space-y-3 pl-6 text-sm leading-7 text-stone-300">
              {removalTargets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-[28px] border border-emerald-400/15 bg-emerald-300/8 p-6">
            <h2 className="text-2xl font-semibold text-white">What to keep</h2>
            <ul className="mt-4 list-disc space-y-3 pl-6 text-sm leading-7 text-stone-300">
              {keepTargets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-10 rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
          <h2 className="text-2xl font-semibold text-white">
            A practical rule: preserve diagnosis, remove narration
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-7 text-stone-300">
            <p>
              Many logs contain two kinds of text. One kind diagnoses the failure:
              error names, file locations, line numbers, import paths, failing tests,
              build steps, and exit codes. The other kind narrates the environment:
              what package was installed, what layer was cached, what internal runtime
              frame was traversed, or what setup step ran before the failure happened.
            </p>
            <p>
              If you want a stronger AI answer, keep the diagnosis and reduce the
              narration. That single distinction is often more useful than any longer
              theory about prompting.
            </p>
          </div>
        </section>

        <section className="mt-10 rounded-[28px] border border-white/10 bg-black/25 p-6">
          <h2 className="text-2xl font-semibold text-white">Example of useful context</h2>
          <pre className="mt-4 overflow-x-auto rounded-2xl border border-white/10 bg-black/45 p-4 text-sm leading-6 text-stone-300">
{`Error: Cannot read properties of undefined
File: src/api/user.ts
Line: 18
Command: npm run build
Expected behavior: user data should render after the API call completes`}
          </pre>
          <p className="mt-4 text-sm leading-7 text-stone-300">
            This is short, but it still tells a model what failed, where it failed,
            how it failed, and what outcome the developer expected. That is enough to
            get a better first-pass response than a raw wall of terminal output.
          </p>
        </section>

        <section className="mt-10 rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
          <h2 className="text-2xl font-semibold text-white">
            Why this matters for real workflows
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-7 text-stone-300">
            <p>
              Developers rarely debug in a vacuum. They are often moving between CI
              failures, local builds, editor diagnostics, and support conversations.
              Shorter, higher-signal context helps not only with AI tools but also with
              issue comments, handoffs to teammates, and personal debugging notes.
            </p>
            <p>
              ContextClean exists to make that reduction step faster. It is not a
              replacement for thinking through the issue, but it helps compress noisy
              output into something that is easier to review and easier to share.
            </p>
          </div>
        </section>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/"
            className="rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-stone-950 hover:bg-emerald-300"
          >
            Open ContextClean
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
