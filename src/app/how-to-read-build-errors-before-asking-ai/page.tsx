import Link from "next/link";
import { getPageSeo, siteUrl } from "../seo";

const seo = getPageSeo("/how-to-read-build-errors-before-asking-ai");

export const metadata = {
  title: seo.title,
  description: seo.description,
  alternates: {
    canonical: `${siteUrl}${seo.path}`,
  },
};

export default function HowToReadBuildErrorsBeforeAskingAIPage() {
  return (
    <main className="min-h-screen px-4 py-8 text-stone-100 sm:px-6 lg:px-8">
      <article className="mx-auto max-w-4xl rounded-[32px] border border-white/10 bg-stone-950/80 p-8">
        <Link href="/" className="text-sm text-emerald-300 hover:text-emerald-200">
          Back to ContextClean
        </Link>

        <p className="mt-8 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300/80">
          Workflow
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white">
          How to read a build error yourself before asking AI to suggest the fix
        </h1>

        <div className="mt-6 space-y-5 text-sm leading-7 text-stone-300">
          <p>
            One of the easiest ways to waste time with AI debugging is to forward a raw
            build log before you have personally identified the first meaningful error.
            Build systems are noisy by design. They emit context for machines,
            framework internals, caches, dependency resolution, loader chains, and
            runtime wrappers. If you let the model consume all of that without a first
            pass, you are outsourcing the part of the task that is easiest for a human
            to do quickly.
          </p>
          <p>
            The first pass is simple. Find the first error message that directly names
            a missing module, failing import, invalid type, syntax problem, unresolved
            file, or broken command. Ignore repeated downstream failures until you have
            found that first cause candidate.
          </p>
        </div>

        <section className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <h2 className="text-lg font-semibold text-white">1. Find the trigger</h2>
            <p className="mt-2 text-sm leading-6 text-stone-300">
              Look for the first explicit failure, not the most dramatic summary at the
              bottom of the output.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <h2 className="text-lg font-semibold text-white">2. Keep the location</h2>
            <p className="mt-2 text-sm leading-6 text-stone-300">
              Preserve the file path, line number, route, command, or Docker step that
              locates the failure in your project.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <h2 className="text-lg font-semibold text-white">3. Add one sentence</h2>
            <p className="mt-2 text-sm leading-6 text-stone-300">
              Tell the model what you expected to happen and what changed recently.
            </p>
          </div>
        </section>

        <section className="mt-10 rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
          <h2 className="text-2xl font-semibold text-white">
            Where a cleaner fits into this workflow
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-7 text-stone-300">
            <p>
              A cleaner is most valuable after the first read, not before it. Once you
              have found the likely trigger, removing the rest of the noise helps you
              package that signal into a prompt that is easier to reason about. That is
              where ContextClean is intentionally useful: it compresses noisy output so
              the real issue is easier to review and share.
            </p>
          </div>
        </section>
      </article>
    </main>
  );
}
