import Link from "next/link";
import GuideFooter from "../components/GuideFooter";
import { getPageSeo, siteUrl } from "../seo";

const seo = getPageSeo("/clean-python-traceback-for-ai");

export const metadata = {
  title: seo.title,
  description: seo.description,
  alternates: {
    canonical: `${siteUrl}${seo.path}`,
  },
};

const tracebackNoise = [
  "Long site-packages paths from libraries that only wrap your failing code",
  "Virtual environment prefixes that repeat on every frame",
  "Test runner output that appears before or after the actual exception",
  "Framework internals that do not change the diagnosis",
];

export default function CleanPythonTracebackForAIPage() {
  return (
    <main className="min-h-screen px-4 py-8 text-stone-100 sm:px-6 lg:px-8">
      <article className="mx-auto max-w-4xl rounded-[32px] border border-white/10 bg-stone-950/80 p-8">
        <Link href="/" className="text-sm text-emerald-300 hover:text-emerald-200">
          Back to ContextClean
        </Link>

        <p className="mt-8 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300/80">
          Python Guide
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white">
          How to clean Python tracebacks before sending them to ChatGPT, Claude, Cursor, or Codex
        </h1>

        <div className="mt-6 space-y-5 text-sm leading-7 text-stone-300">
          <p>
            Python tracebacks are often readable to humans, but they still grow noisy
            fast once frameworks, test runners, async wrappers, and virtual
            environments get involved. If you paste the full traceback into an AI tool,
            the useful exception and your own file frames can be buried under a long
            sequence of surrounding library context.
          </p>
          <p>
            The best AI debugging prompts usually keep the exception type, the final
            error message, and the last few frames that point to your application code.
            The rest may be useful later, but it is rarely the best starting point.
          </p>
        </div>

        <section className="mt-8 rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
          <h2 className="text-2xl font-semibold text-white">
            Common traceback noise to reduce first
          </h2>
          <ul className="mt-4 list-disc space-y-3 pl-6 text-sm leading-7 text-stone-300">
            {tracebackNoise.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="mt-10 grid gap-4 md:grid-cols-2">
          <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
            <h2 className="text-2xl font-semibold text-white">Keep these details</h2>
            <p className="mt-4 text-sm leading-7 text-stone-300">
              Preserve the exception name, the line where your code failed, the file
              path, and the last application-level frame or two that explains the call
              chain. That is usually enough for an AI assistant to reason about the bug.
            </p>
          </div>
          <div className="rounded-[28px] border border-amber-400/20 bg-amber-300/8 p-6">
            <h2 className="text-2xl font-semibold text-white">Do not over-trim</h2>
            <p className="mt-4 text-sm leading-7 text-stone-300">
              If the error really comes from library configuration, serializer behavior,
              dependency versions, or framework integration, one or two library frames
              may still matter. Shorter is better only when the diagnosis stays intact.
            </p>
          </div>
        </section>

        <section className="mt-10 rounded-[28px] border border-white/10 bg-black/25 p-6">
          <h2 className="text-2xl font-semibold text-white">Example of a useful slice</h2>
          <pre className="mt-4 overflow-x-auto rounded-2xl border border-white/10 bg-black/45 p-4 text-sm leading-6 text-stone-300">
{`File "/app/main.py", line 8, in run
    print(user["name"])
KeyError: 'name'
Command: python main.py`}
          </pre>
          <p className="mt-4 text-sm leading-7 text-stone-300">
            This is short, but it preserves the important parts: where the failure
            happened, what operation triggered it, and what exception Python raised.
          </p>
        </section>

        <section className="mt-10 rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
          <h2 className="text-2xl font-semibold text-white">
            Why this helps in real debugging
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-7 text-stone-300">
            <p>
              Many Python issues are simple once isolated: a missing key, a bad type,
              a wrong attribute, a None value, or an import path problem. The hard part
              is not always the bug itself. The hard part is getting the prompt down to
              the minimum context that still explains the failure clearly.
            </p>
            <p>
              ContextClean is useful because it turns a large traceback into something
              easier to review, easier to redact, and easier to share with a model or
              teammate.
            </p>
          </div>
        </section>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/"
            className="rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-stone-950 hover:bg-emerald-300"
          >
            Open Python Traceback Cleaner
          </Link>
          <Link
            href="/safe-log-sharing-for-ai"
            className="rounded-full border border-white/12 px-6 py-3 text-sm font-semibold text-white hover:bg-white/[0.05]"
          >
            Read safe log sharing guidance
          </Link>
        </div>

        <GuideFooter />
      </article>
    </main>
  );
}
