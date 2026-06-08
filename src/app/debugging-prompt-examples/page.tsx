import Link from "next/link";
import { getPageSeo, siteUrl } from "../seo";

const seo = getPageSeo("/debugging-prompt-examples");

export const metadata = {
  title: seo.title,
  description: seo.description,
  alternates: {
    canonical: `${siteUrl}${seo.path}`,
  },
};

const examples = [
  {
    label: "BUILD / MODULE RESOLUTION",
    title: "A stylesheet import fails only during the production build",
    weak: "My Next.js build is broken. How do I fix it?",
    evidence: [
      "Command: npm run build",
      "Environment: Next.js 16.2, Windows, Node.js 22",
      "Relevant file: src/app/layout.tsx",
      "Recent change: moved globals.css into src/styles",
      "First error: Module not found: Can't resolve './globals.css'",
    ],
    prompt:
      "Explain the most likely cause using only the evidence below. Propose the smallest import-path fix first. If the move could also violate a Next.js global CSS rule, list the check that would distinguish those two causes. Do not suggest reinstalling dependencies unless the error supports it.",
    why:
      "The request names the failing command, the exact change, and the first causal error. It also asks the assistant to separate two testable hypotheses instead of inventing a broad repair plan.",
    verify:
      "Run the same production build after changing only the import. Confirm that the original module-resolution error disappears before addressing any later error.",
  },
  {
    label: "RUNTIME / DATA SHAPE",
    title: "An API route crashes when an optional profile is missing",
    weak: "Why is this undefined? Here is my entire server log.",
    evidence: [
      "Route: GET /api/users/:id",
      "Relevant expression: user.profile.displayName",
      "Observed input: profile is null for imported accounts",
      "Expected behavior: return the user with displayName set to null",
      "Error: TypeError: Cannot read properties of null (reading 'displayName')",
    ],
    prompt:
      "Identify where the runtime assumption differs from the observed data. Compare an optional-chain fix with validating the database result at the boundary. Recommend one based on the expected API contract, and include a regression test for an imported account with profile: null.",
    why:
      "The prompt includes the real value, the failing expression, and the intended contract. That gives the assistant enough information to discuss design rather than merely adding a defensive operator.",
    verify:
      "Add one fixture with a profile and one without it. Check the response schema and status code for both cases, then confirm that unrelated server errors are still surfaced.",
  },
  {
    label: "TEST / STATE LEAKAGE",
    title: "A test passes alone but fails after the full suite",
    weak: "This test is flaky. Rewrite it so it passes.",
    evidence: [
      "Isolated command passes: npm test -- user.test.ts",
      "Full-suite command fails: npm test",
      "Failure: expected 200, received 500",
      "Shared dependency: process.env.DATABASE_URL",
      "Previous test replaces DATABASE_URL and does not restore it",
    ],
    prompt:
      "Use the order-dependent evidence to identify the likely shared-state leak. Suggest the smallest cleanup that restores test isolation without weakening the assertion. Show where setup and teardown belong, and explain one command that can confirm the diagnosis.",
    why:
      "The assistant is constrained to preserve the assertion and investigate state isolation. It cannot hide the failure by increasing timeouts, removing checks, or retrying the test.",
    verify:
      "Run the affected files in both orders, then run the suite repeatedly with random ordering if the runner supports it. The test should pass without retries.",
  },
];

const antiPatterns = [
  {
    title: "The solution-shaped request",
    body:
      '"Tell me where to add optional chaining" assumes the fix before the cause is known. Ask the assistant to compare the assumption with the observed value first.',
  },
  {
    title: "The context dump",
    body:
      "A complete CI transcript can bury the first causal error under retries and summaries. Preserve the failing command, first meaningful error, source location, and a short window around it.",
  },
  {
    title: "The passing-answer test",
    body:
      '"Make the test pass" rewards deletion, weaker assertions, and retries. State the behavior that must remain true and define how the proposed fix will be checked.',
  },
  {
    title: "The certainty trap",
    body:
      "When evidence is incomplete, require assumptions and a discriminating check. A useful answer can say what it does not yet know.",
  },
];

export default function DebuggingPromptExamplesPage() {
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
          Debugging prompt examples for build errors, runtime crashes, and failing tests
        </h1>

        <div className="mt-6 space-y-5 text-sm leading-7 text-stone-300">
          <p>
            A useful debugging prompt is not a magic phrase. It is a compact evidence
            package: the failing operation, the first meaningful error, the observed
            state, the expected behavior, and a way to test the answer. The examples
            below show how a vague request becomes a falsifiable engineering task.
          </p>
          <p>
            Copying the wording is less important than preserving the reasoning
            structure. A strong request prevents the assistant from silently changing
            requirements, hiding a failure, or treating a plausible guess as a proven
            root cause.
          </p>
        </div>

        <div className="mt-10 space-y-6">
          {examples.map((example) => (
            <section
              key={example.title}
              className="overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03]"
            >
              <div className="border-b border-white/10 p-6 sm:p-8">
                <p className="font-mono text-xs tracking-[0.2em] text-amber-300">
                  {example.label}
                </p>
                <h2 className="mt-3 text-2xl font-semibold text-white">
                  {example.title}
                </h2>
              </div>
              <div className="grid gap-px bg-white/10 lg:grid-cols-2">
                <div className="bg-stone-950 p-6 sm:p-8">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-rose-300">
                    Weak request
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-stone-300">
                    {example.weak}
                  </p>
                  <h3 className="mt-7 text-sm font-semibold uppercase tracking-wider text-stone-200">
                    Evidence to preserve
                  </h3>
                  <ul className="mt-3 space-y-2 font-mono text-xs leading-6 text-stone-400">
                    {example.evidence.map((line) => (
                      <li key={line} className="rounded-xl bg-white/[0.03] px-3 py-2">
                        {line}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-emerald-950/20 p-6 sm:p-8">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-emerald-300">
                    Stronger request
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-stone-200">
                    {example.prompt}
                  </p>
                  <h3 className="mt-7 text-sm font-semibold text-white">
                    Why this is stronger
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-stone-300">
                    {example.why}
                  </p>
                  <h3 className="mt-5 text-sm font-semibold text-white">
                    Verification contract
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-stone-300">
                    {example.verify}
                  </p>
                </div>
              </div>
            </section>
          ))}
        </div>

        <section className="mt-10">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-300/80">
            Failure patterns
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white">
            Four prompt habits that produce confident but weak answers
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {antiPatterns.map((pattern) => (
              <div
                key={pattern.title}
                className="rounded-2xl border border-white/10 bg-black/20 p-5"
              >
                <h3 className="font-semibold text-white">{pattern.title}</h3>
                <p className="mt-2 text-sm leading-7 text-stone-300">
                  {pattern.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-[28px] border border-emerald-300/20 bg-emerald-300/[0.06] p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-white">
            The five-line debugging contract
          </h2>
          <ol className="mt-5 grid gap-3 text-sm leading-7 text-stone-200 md:grid-cols-5">
            {[
              "State the failed operation.",
              "Quote the first causal error.",
              "Describe observed versus expected behavior.",
              "Name relevant changes and constraints.",
              "Define the check that proves the fix.",
            ].map((item, index) => (
              <li key={item} className="rounded-2xl bg-black/20 p-4">
                <span className="font-mono text-emerald-300">0{index + 1}</span>
                <span className="mt-2 block">{item}</span>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-10 rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
          <h2 className="text-2xl font-semibold text-white">Related reading</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/ai-debugging-checklist" className="rounded-full border border-white/10 px-4 py-2 text-sm text-stone-300 hover:text-white">
              AI Debugging Checklist
            </Link>
            <Link href="/ai-debugging-workflow-templates" className="rounded-full border border-white/10 px-4 py-2 text-sm text-stone-300 hover:text-white">
              Interactive Report Builder
            </Link>
            <Link href="/before-after-log-examples" className="rounded-full border border-white/10 px-4 py-2 text-sm text-stone-300 hover:text-white">
              Annotated Log Examples
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
