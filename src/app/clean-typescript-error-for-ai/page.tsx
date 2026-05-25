import Link from "next/link";
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
    <main className="min-h-screen px-4 py-8 text-stone-100 sm:px-6 lg:px-8">
      <article className="mx-auto max-w-4xl rounded-[32px] border border-white/10 bg-stone-950/80 p-8">
        <Link href="/" className="text-sm text-emerald-300 hover:text-emerald-200">
          Back to ContextClean
        </Link>

        <p className="mt-8 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300/80">
          TypeScript Guide
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white">
          How to clean TypeScript errors before sending them to an AI coding assistant
        </h1>

        <div className="mt-6 space-y-5 text-sm leading-7 text-stone-300">
          <p>
            TypeScript errors often contain more syntax than signal. Large inferred
            types, repeated file paths, generated output, and framework wrappers can
            make a simple mismatch look intimidating. If you trim the error to the core
            type conflict, the prompt becomes much easier for a model to reason about.
          </p>
          <p>
            The most useful TypeScript prompt usually includes the file path, line
            number, error code when present, the expected type, the received type, and
            the smallest code fragment or explanation that clarifies what the variable
            was supposed to be.
          </p>
        </div>

        <section className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
            <h2 className="text-2xl font-semibold text-white">Keep</h2>
            <p className="mt-4 text-sm leading-7 text-stone-300">
              Error code, file path, line number, expected type, received type, and the
              nearest application-level declaration that shows the mismatch.
            </p>
          </div>
          <div className="rounded-[28px] border border-amber-400/20 bg-amber-300/8 p-6">
            <h2 className="text-2xl font-semibold text-white">Reduce</h2>
            <p className="mt-4 text-sm leading-7 text-stone-300">
              Duplicated compiler output, deeply nested generated types, and unrelated
              warnings that do not change the type diagnosis.
            </p>
          </div>
        </section>

        <section className="mt-10 rounded-[28px] border border-white/10 bg-black/25 p-6">
          <h2 className="text-2xl font-semibold text-white">Example</h2>
          <pre className="mt-4 overflow-x-auto rounded-2xl border border-white/10 bg-black/45 p-4 text-sm leading-6 text-stone-300">
{`src/user.ts:18:10
Type 'undefined' is not assignable to type 'User'.
TS2322`}
          </pre>
          <p className="mt-4 text-sm leading-7 text-stone-300">
            This is usually enough for an AI tool to suggest narrowing, guards,
            initialization, or data-shape fixes without drowning in the full compiler dump.
          </p>
        </section>

        <section className="mt-10 rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
          <h2 className="text-2xl font-semibold text-white">
            Why TypeScript prompts benefit from compression
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-7 text-stone-300">
            <p>
              TypeScript messages become less useful when too much of the prompt budget
              is consumed by generic type detail that the model cannot connect back to
              your actual intent. If the assistant can quickly see the variable, the
              target type, and the mismatch, the first answer is usually much more direct.
            </p>
            <p>
              ContextClean helps by stripping away the repetitive compiler noise so the
              error can be paired with one or two lines of human explanation instead.
            </p>
          </div>
        </section>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/"
            className="rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-stone-950 hover:bg-emerald-300"
          >
            Open TypeScript Error Cleaner
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
