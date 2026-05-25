import Link from "next/link";
import GuideFooter from "../components/GuideFooter";
import { getPageSeo, siteUrl } from "../seo";

const seo = getPageSeo("/clean-stack-trace-for-chatgpt");

export const metadata = {
  title: seo.title,
  description: seo.description,
  alternates: {
    canonical: `${siteUrl}${seo.path}`,
  },
};

export default function CleanStackTraceForChatGPTPage() {
  return (
    <main className="min-h-screen px-4 py-8 text-stone-100 sm:px-6 lg:px-8">
      <article className="mx-auto max-w-4xl rounded-[32px] border border-white/10 bg-stone-950/80 p-8">
        <Link href="/" className="text-sm text-emerald-300 hover:text-emerald-200">
          Back to ContextClean
        </Link>

        <p className="mt-8 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300/80">
          Stack Trace Guide
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white">
          Why cleaning a stack trace before using ChatGPT usually produces a better debugging answer
        </h1>

        <div className="mt-6 space-y-5 text-sm leading-7 text-stone-300">
          <p>
            Stack traces are one of the most common things developers paste into AI
            tools, and they are also one of the easiest things to over-paste. A long
            trace often contains repeated frames, dependency internals, async wrappers,
            and runtime details that look important but rarely change the first-pass
            diagnosis.
          </p>
          <p>
            ChatGPT does better when the trace is short enough to foreground the real
            error and the first relevant file path. The point is not to erase technical
            detail. The point is to stop irrelevant detail from dominating the prompt.
          </p>
        </div>

        <section className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
            <h2 className="text-2xl font-semibold text-white">Good candidates to remove</h2>
            <p className="mt-4 text-sm leading-7 text-stone-300">
              Repeated frames, dependency paths, build wrappers, and low-signal runtime
              internals are usually the first lines to cut.
            </p>
          </div>
          <div className="rounded-[28px] border border-emerald-400/15 bg-emerald-300/8 p-6">
            <h2 className="text-2xl font-semibold text-white">Good candidates to keep</h2>
            <p className="mt-4 text-sm leading-7 text-stone-300">
              The error name, the message, the first application-level file path, and
              the line where the failure becomes actionable.
            </p>
          </div>
        </section>

        <section className="mt-10 rounded-[28px] border border-white/10 bg-black/25 p-6">
          <h2 className="text-2xl font-semibold text-white">Minimal example</h2>
          <pre className="mt-4 overflow-x-auto rounded-2xl border border-white/10 bg-black/45 p-4 text-sm leading-6 text-stone-300">
{`Error: Cannot find module 'next'
    at Object.<anonymous> (C:\\project\\app\\page.tsx:10:5)`}
          </pre>
          <p className="mt-4 text-sm leading-7 text-stone-300">
            This is a much stronger starting point than the same message wrapped inside
            a long chain of framework and runtime frames. The important failure is now
            immediately visible.
          </p>
        </section>

        <section className="mt-10 rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
          <h2 className="text-2xl font-semibold text-white">
            Why this is useful even outside ChatGPT
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-7 text-stone-300">
            <p>
              Cleaner stack traces help in issue comments, code review threads, pair
              debugging sessions, and incident notes. Once the trace is shorter, it is
              easier for another person to scan and easier for you to notice whether
              the important line is even present.
            </p>
            <p>
              ContextClean is built around that exact use case: turning a large trace
              into a smaller unit of context that is easier to understand and easier to
              share safely.
            </p>
          </div>
        </section>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/"
            className="rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-stone-950 hover:bg-emerald-300"
          >
            Open Stack Trace Cleaner
          </Link>
          <Link
            href="/clean-ai-coding-prompt-context"
            className="rounded-full border border-white/12 px-6 py-3 text-sm font-semibold text-white hover:bg-white/[0.05]"
          >
            Read prompt context guidance
          </Link>
        </div>

        <GuideFooter />
      </article>
    </main>
  );
}
