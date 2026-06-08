import type { Metadata } from "next";
import Link from "next/link";
import { getPageSeo, siteUrl } from "../seo";

const seo = getPageSeo("/before-after-log-examples");

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  alternates: { canonical: `${siteUrl}${seo.path}` },
};

const examples = [
  {
    title: "Node.js module resolution",
    context: "A local server fails immediately after a dependency change.",
    before: `npm warn deprecated inflight@1.0.6
Starting server on port 3000
Error: Cannot find module 'express'
Require stack:
- C:\\app\\server.js
    at Module._resolveFilename (node:internal/modules/cjs/loader:1144:15)
    at Module._load (node:internal/modules/cjs/loader:985:27)
    at Object.<anonymous> (C:\\app\\server.js:3:17)`,
    after: `Error: Cannot find module 'express'
Require stack:
- C:\\app\\server.js
    at Object.<anonymous> (C:\\app\\server.js:3:17)`,
    kept: "The missing package name, require stack, and first application frame locate the failure.",
    removed: "The deprecation warning and Node internal loader frames do not change the first dependency check.",
    caution: "Keep the full require stack when several local packages or workspaces can resolve the same module.",
  },
  {
    title: "GitHub Actions test failure",
    context: "A test job completes setup successfully and then fails in one suite.",
    before: `Run actions/checkout@v4
Cache restored from key: npm-windows
Run npm test
FAIL src/user.test.ts
Expected: 200
Received: 500
TypeError: Cannot read properties of undefined
    at getUser (src/user.ts:18:10)
Error: Process completed with exit code 1.
Post job cleanup.`,
    after: `Command: npm test
FAIL src/user.test.ts
Expected: 200
Received: 500
TypeError: Cannot read properties of undefined
    at getUser (src/user.ts:18:10)
Exit code: 1`,
    kept: "The failing command, assertion, exception, application frame, and exit code form a complete handoff.",
    removed: "Checkout, cache, and cleanup messages show pipeline activity but not the test cause.",
    caution: "Keep setup output when dependency installation, environment variables, or generated files may explain the failure.",
  },
  {
    title: "Python exception chaining",
    context: "An API wrapper converts a parsing error into a domain-specific exception.",
    before: `Traceback (most recent call last):
  File "/app/parser.py", line 24, in parse_user
    age = int(payload["age"])
ValueError: invalid literal for int() with base 10: 'unknown'

The above exception was the direct cause of the following exception:

Traceback (most recent call last):
  File "/app/api.py", line 61, in create_user
    user = parse_user(payload)
  File "/app/parser.py", line 27, in parse_user
    raise InvalidUser("age must be numeric") from error
InvalidUser: age must be numeric`,
    after: `ValueError: invalid literal for int() with base 10: 'unknown'
    at /app/parser.py:24 in parse_user
Caused by:
InvalidUser: age must be numeric
    at /app/parser.py:27 in parse_user
    called from /app/api.py:61 in create_user`,
    kept: "Both exception names and their causal relationship are essential. The application frames show where conversion and wrapping occur.",
    removed: "Only formatting and repeated traceback narration were compressed.",
    caution: "Never remove the earlier exception in a chained traceback; the wrapper message may hide the real input failure.",
  },
  {
    title: "Next.js hydration mismatch",
    context: "A component renders different text on the server and the first client render.",
    before: `Warning: Text content did not match.
Server: "June 8, 2026"
Client: "June 7, 2026"
Error: Hydration failed because the initial UI does not match.
    at throwOnHydrationMismatch (react-dom-client.development.js:...)
    at prepareToHydrateHostInstance (react-dom-client.development.js:...)
    at DateLabel (src/components/DateLabel.tsx:14:3)
    at Header (src/components/Header.tsx:22:5)`,
    after: `Hydration mismatch
Server text: "June 8, 2026"
Client text: "June 7, 2026"
First application component:
DateLabel (src/components/DateLabel.tsx:14:3)
Parent:
Header (src/components/Header.tsx:22:5)`,
    kept: "The server/client values and first application component directly support a timezone or nondeterministic-render diagnosis.",
    removed: "React DOM hydration internals repeat the mechanism without identifying the component decision.",
    caution: "Keep framework frames when investigating a framework regression rather than an application rendering difference.",
  },
];

export default function BeforeAfterLogExamplesPage() {
  return (
    <main className="px-4 py-12 text-stone-100 sm:px-6 lg:px-8">
      <article className="mx-auto max-w-7xl">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300">
          Annotated examples
        </p>
        <h1 className="mt-4 max-w-5xl text-5xl font-semibold tracking-tight text-white">
          Before-and-after logs with the reasoning behind every reduction
        </h1>
        <p className="mt-6 max-w-4xl text-lg leading-8 text-stone-300">
          Shorter is not automatically better. Each example below explains which
          evidence remains useful, which lines are low-signal for the first diagnosis,
          and when the removed context should be restored.
        </p>

        <div className="mt-10 space-y-8">
          {examples.map((example, index) => (
            <section key={example.title} className="rounded-[30px] border border-white/10 bg-stone-950/75 p-6 sm:p-8">
              <p className="font-mono text-xs text-emerald-300">CASE {index + 1}</p>
              <h2 className="mt-3 text-3xl font-semibold text-white">{example.title}</h2>
              <p className="mt-3 text-sm leading-7 text-stone-300">{example.context}</p>

              <div className="mt-6 grid gap-5 lg:grid-cols-2">
                <div>
                  <p className="mb-2 text-sm font-semibold text-stone-300">Raw excerpt</p>
                  <pre className="h-full overflow-x-auto whitespace-pre-wrap rounded-2xl border border-white/10 bg-black/45 p-5 text-xs leading-6 text-stone-400">
                    {example.before}
                  </pre>
                </div>
                <div>
                  <p className="mb-2 text-sm font-semibold text-emerald-200">Reviewed excerpt</p>
                  <pre className="h-full overflow-x-auto whitespace-pre-wrap rounded-2xl border border-emerald-300/20 bg-emerald-950/15 p-5 text-xs leading-6 text-emerald-100">
                    {example.after}
                  </pre>
                </div>
              </div>

              <div className="mt-5 grid gap-4 lg:grid-cols-3">
                {[
                  ["Why these lines stay", example.kept],
                  ["Why other lines leave", example.removed],
                  ["When to restore context", example.caution],
                ].map(([title, body]) => (
                  <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                    <h3 className="font-semibold text-white">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-stone-300">{body}</p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        <section className="mt-10 rounded-[30px] border border-amber-300/15 bg-amber-300/[0.06] p-7">
          <h2 className="text-2xl font-semibold text-white">A practical stopping rule</h2>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-stone-300">
            Stop trimming when the excerpt answers four questions: what failed, where
            it failed, what input or condition triggered it, and what causal error
            preceded the final message. If any answer disappears, the cleaned version
            is too aggressive.
          </p>
          <Link href="/ai-debugging-workflow-templates" className="mt-5 inline-flex text-sm font-semibold text-amber-200 hover:text-amber-100">
            Turn an excerpt into a complete debugging report
          </Link>
        </section>
      </article>
    </main>
  );
}
