import Link from "next/link";
import { getPageSeo, siteUrl } from "../seo";

const seo = getPageSeo("/case-study-ci-failure-summary");

export const metadata = {
  title: seo.title,
  description: seo.description,
  alternates: {
    canonical: `${siteUrl}${seo.path}`,
  },
};

export default function CaseStudyCIFailureSummaryPage() {
  return (
    <main className="min-h-screen px-4 py-8 text-stone-100 sm:px-6 lg:px-8">
      <article className="mx-auto max-w-4xl rounded-[32px] border border-white/10 bg-stone-950/80 p-8">
        <Link href="/" className="text-sm text-emerald-300 hover:text-emerald-200">
          Back to ContextClean
        </Link>

        <p className="mt-8 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300/80">
          Case Study
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white">
          Case study: turning a long CI pipeline log into a short failure summary for humans and AI
        </h1>

        <div className="mt-6 space-y-5 text-sm leading-7 text-stone-300">
          <p>
            CI logs often contain hundreds of lines that are operationally complete but
            editorially poor. A teammate usually does not need the cache restore lines,
            package download progress, or post-job cleanup messages on first read. An AI
            assistant benefits even less from that noise.
          </p>
          <p>
            The useful transformation is simple: preserve the job, the failing step, the
            command, the first explicit error, and the exit code. That smaller summary is
            easier to paste into a pull request, a chat thread, or a debugging prompt.
          </p>
        </div>
      </article>
    </main>
  );
}
