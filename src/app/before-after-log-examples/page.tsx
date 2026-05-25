import Link from "next/link";
import { getPageSeo, siteUrl } from "../seo";

const seo = getPageSeo("/before-after-log-examples");

export const metadata = {
  title: seo.title,
  description: seo.description,
  alternates: {
    canonical: `${siteUrl}${seo.path}`,
  },
};

export default function BeforeAfterLogExamplesPage() {
  return (
    <main className="min-h-screen px-4 py-8 text-stone-100 sm:px-6 lg:px-8">
      <article className="mx-auto max-w-5xl rounded-[32px] border border-white/10 bg-stone-950/80 p-8">
        <Link href="/" className="text-sm text-emerald-300 hover:text-emerald-200">
          Back to ContextClean
        </Link>

        <p className="mt-8 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300/80">
          Examples
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white">
          Before-and-after log examples for AI debugging workflows
        </h1>

        <p className="mt-6 max-w-3xl text-sm leading-7 text-stone-300">
          These examples show what useful compression looks like in practice. The goal
          is not to create the shortest possible output. The goal is to remove the
          surrounding noise while keeping the core failure visible.
        </p>

        <div className="mt-8 space-y-6">
          <section className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
            <h2 className="text-2xl font-semibold text-white">Node.js module error</h2>
            <div className="mt-4 grid gap-4 lg:grid-cols-2">
              <pre className="overflow-x-auto rounded-2xl border border-white/10 bg-black/45 p-4 text-xs leading-6 text-stone-400">
{`Error: Cannot find module 'express'
at Module._resolveFilename ...
at Module._load ...
at Object.<anonymous> (C:\\app\\server.js:3:17)
at C:\\app\\node_modules\\express\\index.js:18:1
npm warn deprecated package found`}
              </pre>
              <pre className="overflow-x-auto rounded-2xl border border-emerald-400/20 bg-black/45 p-4 text-xs leading-6 text-emerald-200">
{`Error: Cannot find module 'express'
at Object.<anonymous> (C:\\app\\server.js:3:17)`}
              </pre>
            </div>
          </section>

          <section className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
            <h2 className="text-2xl font-semibold text-white">CI test failure</h2>
            <div className="mt-4 grid gap-4 lg:grid-cols-2">
              <pre className="overflow-x-auto rounded-2xl border border-white/10 bg-black/45 p-4 text-xs leading-6 text-stone-400">
{`Run npm install
Cache restored successfully
Run npm test
FAIL src/user.test.ts
TypeError: Cannot read properties of undefined
Post job cleanup
Error: Process completed with exit code 1`}
              </pre>
              <pre className="overflow-x-auto rounded-2xl border border-emerald-400/20 bg-black/45 p-4 text-xs leading-6 text-emerald-200">
{`FAIL src/user.test.ts
TypeError: Cannot read properties of undefined
Error: Process completed with exit code 1`}
              </pre>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}
