import Link from "next/link";
import { getPageSeo, siteUrl } from "../seo";

const seo = getPageSeo("/editorial-standards");

export const metadata = {
  title: seo.title,
  description: seo.description,
  alternates: {
    canonical: `${siteUrl}${seo.path}`,
  },
};

export default function EditorialStandardsPage() {
  return (
    <main className="min-h-screen px-4 py-8 text-stone-100 sm:px-6 lg:px-8">
      <article className="mx-auto max-w-4xl rounded-[32px] border border-white/10 bg-stone-950/80 p-8">
        <Link href="/" className="text-sm text-emerald-300 hover:text-emerald-200">
          Back to ContextClean
        </Link>

        <p className="mt-8 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300/80">
          Standards
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white">
          Editorial standards for ContextClean guides, examples, and resource pages
        </h1>

        <div className="mt-6 space-y-5 text-sm leading-7 text-stone-300">
          <p>
            ContextClean publishes product pages, examples, and resource articles aimed
            at developers who debug with AI tools. The editorial goal is not to produce
            generic filler around keywords. The goal is to create pages that help a
            visitor understand how to prepare logs, reduce noisy context, and make safer
            debugging decisions before sharing text with AI systems or teammates.
          </p>
        </div>

        <section className="mt-8 space-y-4">
          {[
            "Pages should describe a real developer workflow, not just repeat the same tool description with swapped keywords.",
            "Examples should be concrete enough to be recognizable by developers who have actually seen similar failures.",
            "Guides should state both where the workflow helps and where it breaks down.",
            "Pages that discuss sharing logs should include privacy and redaction guidance.",
            "Resource pages should be reviewed and updated over time rather than treated as one-time filler.",
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
