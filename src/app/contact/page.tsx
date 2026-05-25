import Link from "next/link";
import { getPageSeo, siteUrl } from "../seo";

const seo = getPageSeo("/contact");

export const metadata = {
  title: seo.title,
  description: seo.description,
  alternates: {
    canonical: `${siteUrl}${seo.path}`,
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen px-4 py-8 text-stone-100 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-4xl rounded-[32px] border border-white/10 bg-stone-950/80 p-8">
        <Link
          href="/"
          className="text-sm text-emerald-300 transition hover:text-emerald-200"
        >
          Back to ContextClean
        </Link>

        <p className="mt-8 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300/80">
          Contact
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white">
          Contact the site for support, feedback, or policy questions.
        </h1>

        <div className="mt-6 rounded-[28px] border border-emerald-400/20 bg-emerald-300/10 p-6">
          <p className="text-sm leading-7 text-stone-200">
            Email:
            <span className="ml-2 font-semibold text-white">
              support@contextclean.dev
            </span>
          </p>
          <p className="mt-3 text-sm leading-7 text-stone-300">
            Use this address for product feedback, bug reports, broken page reports,
            policy questions, and requests related to the public content on the site.
          </p>
        </div>

        <h2 className="mt-10 text-2xl font-semibold text-white">
          Helpful messages to send
        </h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <h3 className="text-base font-semibold text-white">Product issues</h3>
            <p className="mt-2 text-sm leading-6 text-stone-300">
              Report logs that are cleaned poorly, buttons that fail, formatting bugs,
              broken links, or mobile layout problems.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <h3 className="text-base font-semibold text-white">Feature requests</h3>
            <p className="mt-2 text-sm leading-6 text-stone-300">
              Suggest new cleaner modes, stronger examples, new guide topics, or
              improvements to the AI prompt workflow.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <h3 className="text-base font-semibold text-white">Privacy or policy</h3>
            <p className="mt-2 text-sm leading-6 text-stone-300">
              Ask questions about data handling, advertising disclosures, or the terms
              and privacy pages on this site.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <h3 className="text-base font-semibold text-white">Quality feedback</h3>
            <p className="mt-2 text-sm leading-6 text-stone-300">
              Share examples where the guide content is unclear, too thin, outdated,
              or missing a practical developer workflow.
            </p>
          </div>
        </div>

        <h2 className="mt-10 text-2xl font-semibold text-white">
          What helps support requests
        </h2>
        <div className="mt-4 space-y-4 text-sm leading-7 text-stone-300">
          <p>
            If you are reporting a bug, include the page URL, the browser you used,
            what action you took, and what happened instead of the expected behavior.
            If the issue is about a specific cleaning mode, include a safe sample that
            does not contain secrets.
          </p>
          <p>
            If the message is about content quality or policy clarity, referencing the
            exact page and the paragraph that appears unclear will make review easier.
          </p>
          <p>
            Last content review for this page: May 25, 2026.
          </p>
        </div>
      </section>
    </main>
  );
}
