import Link from "next/link";
import { getPageSeo, siteUrl } from "../seo";

const seo = getPageSeo("/resources");

export const metadata = {
  title: seo.title,
  description: seo.description,
  alternates: {
    canonical: `${siteUrl}${seo.path}`,
  },
};

const resources = [
  {
    href: "/ai-debugging-checklist",
    title: "AI Debugging Checklist",
    body: "A concrete review checklist for preparing logs, stating the expected behavior, and keeping the model focused on the real failure.",
  },
  {
    href: "/safe-log-sharing-for-ai",
    title: "Safe Log Sharing for AI",
    body: "How to think about secrets, customer data, internal URLs, and other sensitive details before you paste any log into a third-party tool.",
  },
  {
    href: "/how-to-read-build-errors-before-asking-ai",
    title: "How to Read Build Errors Before Asking AI",
    body: "A practical reminder that the first useful debugging step is still a human read of the build output, not blind prompt forwarding.",
  },
  {
    href: "/debugging-prompt-examples",
    title: "Debugging Prompt Examples",
    body: "Concrete examples of short, high-signal prompts for runtime crashes, build failures, and failing tests.",
  },
  {
    href: "/before-after-log-examples",
    title: "Before-and-After Log Examples",
    body: "Side-by-side examples showing how large logs can be reduced into smaller, more reviewable AI debugging inputs.",
  },
  {
    href: "/editorial-updates",
    title: "Editorial Updates",
    body: "A summary page showing that the site is actively maintained and expanded over time.",
  },
];

export default function ResourcesPage() {
  return (
    <main className="min-h-screen px-4 py-8 text-stone-100 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-6xl rounded-[32px] border border-white/10 bg-stone-950/80 p-8">
        <Link href="/" className="text-sm text-emerald-300 hover:text-emerald-200">
          Back to ContextClean
        </Link>

        <p className="mt-8 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300/80">
          Resources
        </p>
        <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-white">
          Resources for better AI debugging prompts, safer log sharing, and cleaner developer workflows
        </h1>
        <p className="mt-6 max-w-3xl text-sm leading-7 text-stone-300">
          ContextClean is a focused utility, but the workflow around it is broader.
          Developers still need to decide what context matters, what should never be
          shared, and how to phrase a debugging prompt so the model can do useful work.
          This resource section exists to make those decisions more explicit.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <h2 className="text-lg font-semibold text-white">Operational value</h2>
            <p className="mt-2 text-sm leading-6 text-stone-300">
              Better debugging prompts reduce wasted back-and-forth when a model is
              distracted by noise or misses the actual failing line.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <h2 className="text-lg font-semibold text-white">Safety value</h2>
            <p className="mt-2 text-sm leading-6 text-stone-300">
              Shorter logs are easier to inspect for secrets, customer data, and
              internal details before they are shared with another system.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <h2 className="text-lg font-semibold text-white">Editorial value</h2>
            <p className="mt-2 text-sm leading-6 text-stone-300">
              Supporting pages make the site more useful than a one-screen tool and
              give users a place to learn the workflow around the product.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {resources.map((resource) => (
            <Link
              key={resource.href}
              href={resource.href}
              className="rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-6 transition hover:border-emerald-400/40 hover:bg-emerald-300/[0.05]"
            >
              <h2 className="text-xl font-semibold text-white">{resource.title}</h2>
              <p className="mt-3 text-sm leading-6 text-stone-300">{resource.body}</p>
            </Link>
          ))}
        </div>

        <section className="mt-10 rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
          <h2 className="text-2xl font-semibold text-white">
            Why this section exists
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-7 text-stone-300">
            <p>
              The most common failure mode in AI-assisted debugging is not the model
              being bad. It is the input being cluttered, incomplete, or risky to
              share. Developers often paste everything they see, including build noise,
              redundant frames, and sensitive details that were never needed to debug
              the issue in the first place.
            </p>
            <p>
              A better workflow is straightforward: read the output once yourself,
              isolate the real failure, remove low-signal text, add one sentence about
              the expected behavior and one sentence about what changed, then ask the
              AI for a specific next step. These resource pages support that workflow.
            </p>
          </div>
        </section>
      </section>
    </main>
  );
}
