import Link from "next/link";
import { getPageSeo, siteUrl } from "../seo";

const seo = getPageSeo("/common-typescript-errors-ai-misreads");

export const metadata = {
  title: seo.title,
  description: seo.description,
  alternates: {
    canonical: `${siteUrl}${seo.path}`,
  },
};

export default function CommonTypeScriptErrorsAIMisreadsPage() {
  return (
    <main className="min-h-screen px-4 py-8 text-stone-100 sm:px-6 lg:px-8">
      <article className="mx-auto max-w-4xl rounded-[32px] border border-white/10 bg-stone-950/80 p-8">
        <Link href="/" className="text-sm text-emerald-300 hover:text-emerald-200">
          Back to ContextClean
        </Link>

        <p className="mt-8 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300/80">
          TypeScript Notes
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white">
          Common TypeScript errors that AI assistants misread when the prompt is too noisy
        </h1>

        <div className="mt-6 space-y-5 text-sm leading-7 text-stone-300">
          <p>
            TypeScript diagnostics are often precise, but they are easy to overwhelm
            with extra text. Once a prompt contains repeated compiler output, inferred
            generic expansions, and unrelated framework messages, an AI assistant can
            misidentify the real mismatch and propose a fix that changes too much code.
          </p>
        </div>

        <section className="mt-8 space-y-4">
          {[
            "Type 'undefined' is not assignable to type X: often a missing guard or initialization issue, not a reason to weaken all types.",
            "Property does not exist on type X: often a union narrowing or data-shape mismatch, not proof that the property should be optional everywhere.",
            "Argument of type X is not assignable to parameter of type Y: often a wrong call-site shape rather than a problem in the callee definition.",
          ].map((item) => (
            <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-sm leading-6 text-stone-300">
              {item}
            </div>
          ))}
        </section>

        <p className="mt-10 text-sm leading-7 text-stone-400">
          Last reviewed: May 25, 2026. Maintained as part of the ContextClean resource library.
        </p>
      </article>
    </main>
  );
}
