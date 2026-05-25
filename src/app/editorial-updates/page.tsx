import Link from "next/link";
import { getPageSeo, siteUrl } from "../seo";

const seo = getPageSeo("/editorial-updates");

export const metadata = {
  title: seo.title,
  description: seo.description,
  alternates: {
    canonical: `${siteUrl}${seo.path}`,
  },
};

const updates = [
  "Expanded homepage documentation and trust sections.",
  "Added a dedicated resources library for AI debugging workflows.",
  "Rewrote major guide pages across Node.js, Docker, CI, Python, React, TypeScript, Next.js, Cursor, and prompt hygiene.",
  "Added example-driven content such as prompt examples and before-and-after log comparisons.",
];

export default function EditorialUpdatesPage() {
  return (
    <main className="min-h-screen px-4 py-8 text-stone-100 sm:px-6 lg:px-8">
      <article className="mx-auto max-w-4xl rounded-[32px] border border-white/10 bg-stone-950/80 p-8">
        <Link href="/" className="text-sm text-emerald-300 hover:text-emerald-200">
          Back to ContextClean
        </Link>

        <p className="mt-8 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300/80">
          Updates
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white">
          Recent editorial and product updates on ContextClean
        </h1>

        <p className="mt-6 text-sm leading-7 text-stone-300">
          This page makes the site history more visible to returning users and reviewers.
          It shows that the project is being expanded and maintained over time rather
          than left as a single static tool page.
        </p>

        <div className="mt-8 space-y-4">
          {updates.map((update, index) => (
            <section
              key={update}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
            >
              <p className="text-sm font-semibold text-emerald-200">Update {index + 1}</p>
              <p className="mt-2 text-sm leading-6 text-stone-300">{update}</p>
            </section>
          ))}
        </div>
      </article>
    </main>
  );
}
