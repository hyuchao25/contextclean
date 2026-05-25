import Link from "next/link";
import { getPageSeo, siteUrl } from "../seo";

const seo = getPageSeo("/ai-debugging-checklist");

export const metadata = {
  title: seo.title,
  description: seo.description,
  alternates: {
    canonical: `${siteUrl}${seo.path}`,
  },
};

const checklist = [
  "Identify the first clear error, not the last repeated frame.",
  "Keep the failing command, file path, and line number when available.",
  "Remove dependency internals, install progress, and irrelevant warnings.",
  "State what behavior you expected and what changed recently.",
  "Review the text for secrets, tokens, customer data, or internal URLs.",
  "Ask the AI for one specific job: root cause, minimal fix, or verification steps.",
];

export default function AIDebuggingChecklistPage() {
  return (
    <main className="min-h-screen px-4 py-8 text-stone-100 sm:px-6 lg:px-8">
      <article className="mx-auto max-w-4xl rounded-[32px] border border-white/10 bg-stone-950/80 p-8">
        <Link href="/" className="text-sm text-emerald-300 hover:text-emerald-200">
          Back to ContextClean
        </Link>

        <p className="mt-8 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300/80">
          Checklist
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white">
          An AI debugging checklist for sending better logs and getting more useful answers
        </h1>

        <div className="mt-6 space-y-5 text-sm leading-7 text-stone-300">
          <p>
            A model cannot fix what your prompt does not explain. At the same time, a
            model does worse when the prompt includes too much irrelevant context. The
            useful middle ground is not “paste less” in the abstract. It is a repeatable
            checklist for keeping the lines that matter and removing the ones that only
            increase noise.
          </p>
          <p>
            This page is written for developers who already use tools such as ChatGPT,
            Claude, Cursor, and Codex and want a more reliable workflow for debugging
            code with AI support.
          </p>
        </div>

        <div className="mt-8 space-y-4">
          {checklist.map((item, index) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
            >
              <p className="text-sm font-semibold text-emerald-200">
                Step {index + 1}
              </p>
              <p className="mt-2 text-sm leading-6 text-stone-300">{item}</p>
            </div>
          ))}
        </div>

        <section className="mt-10 rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
          <h2 className="text-2xl font-semibold text-white">
            Why this improves results
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-7 text-stone-300">
            <p>
              Models respond to the shape of the context they receive. A prompt that
              begins with the real error, identifies the affected file, and states the
              expected behavior is easier to reason about than one that starts with 200
              lines of terminal chatter. The point is not to hide complexity. The point
              is to make the important complexity visible first.
            </p>
            <p>
              ContextClean helps with the reduction step, but the final prompt still
              benefits from explicit human framing: what broke, when it started, and
              what kind of answer you want next.
            </p>
          </div>
        </section>
      </article>
    </main>
  );
}
