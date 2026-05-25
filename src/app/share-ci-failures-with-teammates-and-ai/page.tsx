import Link from "next/link";
import { getPageSeo, siteUrl } from "../seo";

const seo = getPageSeo("/share-ci-failures-with-teammates-and-ai");

export const metadata = {
  title: seo.title,
  description: seo.description,
  alternates: {
    canonical: `${siteUrl}${seo.path}`,
  },
};

export default function ShareCIFailuresWithTeammatesAndAIPage() {
  return (
    <main className="min-h-screen px-4 py-8 text-stone-100 sm:px-6 lg:px-8">
      <article className="mx-auto max-w-4xl rounded-[32px] border border-white/10 bg-stone-950/80 p-8">
        <Link href="/" className="text-sm text-emerald-300 hover:text-emerald-200">
          Back to ContextClean
        </Link>

        <p className="mt-8 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300/80">
          CI Workflow
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white">
          How to share CI failures with teammates and AI without pasting an entire pipeline transcript
        </h1>

        <div className="mt-6 space-y-5 text-sm leading-7 text-stone-300">
          <p>
            A good CI failure summary is useful to both humans and models. It should
            identify the failing job, the failing step, the first explicit error, and
            the command or test that stopped the pipeline. Everything else can usually
            be added later on demand.
          </p>
          <p>
            This approach saves time in pull request discussions, incident threads, and
            AI debugging chats because people do not have to parse setup noise before
            they reach the actual failure.
          </p>
        </div>

        <section className="mt-8 rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
          <h2 className="text-2xl font-semibold text-white">A simple failure summary format</h2>
          <pre className="mt-4 overflow-x-auto rounded-2xl border border-white/10 bg-black/45 p-4 text-sm leading-6 text-stone-300">
{`Job: test
Step: run integration tests
Command: npm test
Error: Expected 200 but received 500
Relevant file: src/user.test.ts`}
          </pre>
        </section>

        <p className="mt-10 text-sm leading-7 text-stone-400">
          Last reviewed: May 25, 2026. Maintained as part of the ContextClean resource library.
        </p>
      </article>
    </main>
  );
}
