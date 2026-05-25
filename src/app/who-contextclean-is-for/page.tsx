import Link from "next/link";
import { getPageSeo, siteUrl } from "../seo";

const seo = getPageSeo("/who-contextclean-is-for");

export const metadata = {
  title: seo.title,
  description: seo.description,
  alternates: {
    canonical: `${siteUrl}${seo.path}`,
  },
};

export default function WhoContextCleanIsForPage() {
  return (
    <main className="min-h-screen px-4 py-8 text-stone-100 sm:px-6 lg:px-8">
      <article className="mx-auto max-w-4xl rounded-[32px] border border-white/10 bg-stone-950/80 p-8">
        <Link href="/" className="text-sm text-emerald-300 hover:text-emerald-200">
          Back to ContextClean
        </Link>

        <p className="mt-8 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300/80">
          Audience
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white">
          Who ContextClean is for, and who should probably use a different workflow
        </h1>

        <div className="mt-6 space-y-5 text-sm leading-7 text-stone-300">
          <p>
            ContextClean is built for developers who already use AI tools as part of
            their debugging workflow and want a faster way to prepare cleaner input. It
            is not designed as a replacement for an IDE, a debugger, a security review
            system, or a compliance tool.
          </p>
        </div>

        <section className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
            <h2 className="text-2xl font-semibold text-white">Best fit</h2>
            <p className="mt-4 text-sm leading-7 text-stone-300">
              Solo developers, small teams, support engineers, and AI-assisted coders
              who regularly work with stack traces, build failures, test output, and
              long terminal logs.
            </p>
          </div>
          <div className="rounded-[28px] border border-amber-400/20 bg-amber-300/8 p-6">
            <h2 className="text-2xl font-semibold text-white">Poor fit</h2>
            <p className="mt-4 text-sm leading-7 text-stone-300">
              Workflows that require guaranteed secret detection, legally sensitive
              document handling, or complete preservation of every line in the original
              diagnostic output.
            </p>
          </div>
        </section>

        <p className="mt-10 text-sm leading-7 text-stone-400">
          Last reviewed: May 25, 2026. Maintained as part of the ContextClean resource library.
        </p>
      </article>
    </main>
  );
}
