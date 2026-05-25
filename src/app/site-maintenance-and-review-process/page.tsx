import Link from "next/link";
import { getPageSeo, siteUrl } from "../seo";

const seo = getPageSeo("/site-maintenance-and-review-process");

export const metadata = {
  title: seo.title,
  description: seo.description,
  alternates: {
    canonical: `${siteUrl}${seo.path}`,
  },
};

export default function SiteMaintenanceAndReviewProcessPage() {
  return (
    <main className="min-h-screen px-4 py-8 text-stone-100 sm:px-6 lg:px-8">
      <article className="mx-auto max-w-4xl rounded-[32px] border border-white/10 bg-stone-950/80 p-8">
        <Link href="/" className="text-sm text-emerald-300 hover:text-emerald-200">
          Back to ContextClean
        </Link>

        <p className="mt-8 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300/80">
          Maintenance
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white">
          How ContextClean content is reviewed, maintained, and expanded over time
        </h1>

        <div className="mt-6 space-y-5 text-sm leading-7 text-stone-300">
          <p>
            ContextClean is not intended to be a static landing page. The site is being
            expanded with new guides, examples, glossary pages, comparisons, and
            workflow notes so that visitors can understand both the product and the
            surrounding debugging practices.
          </p>
          <p>
            Resource pages include a visible review date when they are updated. The site
            also keeps a separate updates page to make expansion and maintenance visible
            to returning users and reviewers.
          </p>
        </div>

        <section className="mt-8 rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
          <h2 className="text-2xl font-semibold text-white">Review process</h2>
          <ol className="mt-4 list-decimal space-y-3 pl-6 text-sm leading-7 text-stone-300">
            <li>Identify thin pages or missing workflow coverage.</li>
            <li>Expand those pages with examples, boundaries, and use-case detail.</li>
            <li>Link the new pages into the resource library and supporting guides.</li>
            <li>Rebuild the site to verify that routes and metadata still generate correctly.</li>
          </ol>
        </section>

        <p className="mt-10 text-sm leading-7 text-stone-400">
          Last reviewed: May 25, 2026. Maintained as part of the ContextClean resource library.
        </p>
      </article>
    </main>
  );
}
