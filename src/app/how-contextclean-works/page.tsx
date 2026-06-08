import type { Metadata } from "next";
import Link from "next/link";
import { getPageSeo, siteUrl } from "../seo";

const seo = getPageSeo("/how-contextclean-works");

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  alternates: { canonical: `${siteUrl}${seo.path}` },
};

const decisions = [
  {
    category: "Always preserve",
    examples: "Explicit errors, exception names, assertion differences, exit codes, application file paths",
    reason: "These lines identify the failure or locate it in code controlled by the user.",
  },
  {
    category: "Usually preserve",
    examples: "Caused-by chains, first application frames, failing commands, relevant compiler diagnostics",
    reason: "They explain causality and execution context, but may need formatting rather than deletion.",
  },
  {
    category: "Usually reduce",
    examples: "Exact duplicates, progress messages, cache hits, successful setup steps, post-job cleanup",
    reason: "They describe activity around a failure without changing its first-pass diagnosis.",
  },
  {
    category: "Mode-dependent",
    examples: "Framework internals, dependency frames, package-manager warnings, container layer output",
    reason: "They are noise for application bugs but evidence when debugging the framework or environment itself.",
  },
];

const failureModes = [
  {
    title: "Exception chains are flattened",
    body: "Removing the first exception can leave only a generic wrapper. Preserve every distinct exception and its causal order.",
  },
  {
    title: "Environment evidence disappears",
    body: "A successful setup line may prove which runtime, dependency, or generated artifact was used. Restore it when environment drift is plausible.",
  },
  {
    title: "Repeated lines encode time",
    body: "Similar messages can represent retries or a loop. Exact deduplication is unsafe when timestamps or sequence count matter.",
  },
  {
    title: "A framework regression is misclassified",
    body: "Framework internals are normally low-signal, but they become primary evidence when the bug is inside the framework version or adapter.",
  },
];

export default function HowContextCleanWorksPage() {
  return (
    <main className="px-4 py-12 text-stone-100 sm:px-6 lg:px-8">
      <article className="mx-auto max-w-6xl">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300">
          Transparent methodology
        </p>
        <h1 className="mt-4 max-w-5xl text-5xl font-semibold tracking-tight text-white">
          How ContextClean decides what looks like signal, noise, or sensitive data
        </h1>
        <p className="mt-6 max-w-4xl text-lg leading-8 text-stone-300">
          ContextClean is a deterministic text filter, not an AI diagnosis service.
          The current browser workbench applies three optional operations: remove
          known low-signal patterns for the selected log type, remove exact duplicate
          lines, and replace common credential patterns with explicit placeholders.
        </p>

        <section className="mt-10 overflow-hidden rounded-[30px] border border-white/10">
          <div className="grid grid-cols-[0.8fr_1.3fr_1.5fr] bg-white/[0.06] text-sm font-semibold text-white">
            <div className="p-4">Decision</div>
            <div className="p-4">Examples</div>
            <div className="p-4">Reason</div>
          </div>
          {decisions.map((item) => (
            <div key={item.category} className="grid grid-cols-[0.8fr_1.3fr_1.5fr] border-t border-white/10 bg-stone-950/60 text-sm leading-6 text-stone-300">
              <div className="p-4 font-semibold text-emerald-200">{item.category}</div>
              <div className="p-4">{item.examples}</div>
              <div className="p-4">{item.reason}</div>
            </div>
          ))}
        </section>

        <section className="mt-10 grid gap-5 lg:grid-cols-2">
          <article className="rounded-[28px] border border-white/10 bg-white/[0.03] p-7">
            <h2 className="text-2xl font-semibold text-white">Mode-specific rules</h2>
            <div className="mt-5 space-y-4 text-sm leading-7 text-stone-300">
              <p><strong className="text-white">Node.js:</strong> reduces internal module loader frames and package-manager warnings while retaining application frames and module names.</p>
              <p><strong className="text-white">Python:</strong> reduces library frames but preserves exception chaining, file locations, and application calls.</p>
              <p><strong className="text-white">React / Next.js:</strong> reduces React DOM and bundler internals while retaining component names, server/client differences, and source files.</p>
              <p><strong className="text-white">Docker / CI:</strong> reduces transfer, cache, checkout, and cleanup narration while retaining the failed step, command, error, and exit code.</p>
            </div>
          </article>

          <article className="rounded-[28px] border border-white/10 bg-white/[0.03] p-7">
            <h2 className="text-2xl font-semibold text-white">Secret detection scope</h2>
            <div className="mt-5 space-y-4 text-sm leading-7 text-stone-300">
              <p>
                The workbench checks common bearer tokens, JWT-shaped strings, AWS
                access-key identifiers, and assignments using names such as
                <code className="mx-1 text-emerald-200">api_key</code>,
                <code className="mx-1 text-emerald-200">token</code>,
                <code className="mx-1 text-emerald-200">secret</code>, and
                <code className="mx-1 text-emerald-200">password</code>.
              </p>
              <p>
                It cannot recognize every proprietary token, customer identifier,
                private hostname, source-code secret, or value whose meaning depends
                on business context. Manual review remains mandatory.
              </p>
            </div>
          </article>
        </section>

        <section className="mt-10">
          <h2 className="text-3xl font-semibold text-white">Known failure modes</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {failureModes.map((item) => (
              <article key={item.title} className="rounded-2xl border border-amber-300/15 bg-amber-300/[0.05] p-6">
                <h3 className="font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-stone-300">{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-[30px] border border-emerald-300/15 bg-emerald-300/[0.05] p-7">
          <h2 className="text-2xl font-semibold text-white">How to validate a cleaned result</h2>
          <ol className="mt-5 list-decimal space-y-3 pl-6 text-sm leading-7 text-stone-300">
            <li>Compare the cleaned output with the original instead of reviewing it in isolation.</li>
            <li>Confirm the first explicit error, application location, and causal chain still exist.</li>
            <li>Restore setup or environment lines when versions, configuration, or generated files may matter.</li>
            <li>Search manually for secrets and private data after automatic redaction.</li>
            <li>Add the expected behavior and recent change before requesting a diagnosis.</li>
          </ol>
          <Link href="/before-after-log-examples" className="mt-6 inline-flex text-sm font-semibold text-emerald-300 hover:text-emerald-200">
            Review the annotated examples
          </Link>
        </section>
      </article>
    </main>
  );
}
