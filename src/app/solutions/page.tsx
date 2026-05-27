import Link from "next/link";
import { WorkflowMapVisual } from "../components/VisualShowcase";
import { getPageSeo, siteUrl } from "../seo";

const seo = getPageSeo("/solutions");

export const metadata = {
  title: seo.title,
  description: seo.description,
  alternates: {
    canonical: `${siteUrl}${seo.path}`,
  },
};

const solutionAreas = [
  {
    href: "/for-engineering-teams",
    title: "Engineering teams",
    body: "Clean CI failures, build logs, stack traces, and bug reports before they enter pull requests, issues, or AI-assisted debugging threads.",
  },
  {
    href: "/for-support-and-bug-reports",
    title: "Support and bug reports",
    body: "Reduce noisy customer-provided logs into safer, shorter summaries before escalating to engineering or AI tools.",
  },
  {
    href: "/ai-debugging-workflow-templates",
    title: "Workflow templates",
    body: "Use repeatable prompt shapes for runtime errors, deployment failures, failing tests, and TypeScript diagnostics.",
  },
];

const workflowStages = [
  {
    stage: "Before asking AI",
    value:
      "Reduce repeated frames, runner setup logs, and package-manager chatter so the first prompt starts with the useful failure.",
  },
  {
    stage: "Before opening an issue",
    value:
      "Turn a long terminal paste into a smaller report that includes the command, environment, relevant file, and cleaned error.",
  },
  {
    stage: "Before escalating to engineering",
    value:
      "Help support or QA teams remove unrelated output and preserve the lines an engineer needs for triage.",
  },
  {
    stage: "Before sharing internally",
    value:
      "Make logs easier to review for secrets, customer data, internal URLs, or other details that should not be forwarded.",
  },
];

const productBoundaries = [
  "ContextClean is not a replacement for reading the error yourself.",
  "It does not guarantee secret removal or compliance review.",
  "It does not run code, inspect repositories, or prove the AI answer is correct.",
  "It works best as a small preparation step before a human or AI debugging conversation.",
];

export default function SolutionsPage() {
  return (
    <main className="min-h-screen px-4 py-8 text-stone-100 sm:px-6 lg:px-8">
      <article className="mx-auto max-w-6xl rounded-[32px] border border-white/10 bg-stone-950/80 p-8">
        <Link href="/" className="text-sm text-emerald-300 hover:text-emerald-200">
          Back to ContextClean
        </Link>

        <p className="mt-8 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300/80">
          Solutions
        </p>
        <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-white">
          Developer workflow solutions for cleaner AI debugging context
        </h1>
        <p className="mt-6 max-w-3xl text-sm leading-7 text-stone-300">
          ContextClean is not a ticketing system, IDE, or AI chat product. It is a
          focused cleanup step that helps people turn noisy logs into clearer,
          reviewable context before sharing them with teammates or AI tools.
        </p>

        <section className="mt-8">
          <WorkflowMapVisual />
        </section>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {solutionAreas.map((area) => (
            <Link
              key={area.href}
              href={area.href}
              className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6 transition hover:border-emerald-400/40 hover:bg-emerald-300/[0.05]"
            >
              <h2 className="text-2xl font-semibold text-white">{area.title}</h2>
              <p className="mt-4 text-sm leading-7 text-stone-300">{area.body}</p>
            </Link>
          ))}
        </div>

        <section className="mt-10 rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
          <h2 className="text-2xl font-semibold text-white">How it fits into a workflow</h2>
          <ol className="mt-4 list-decimal space-y-3 pl-6 text-sm leading-7 text-stone-300">
            <li>Paste a raw error log, traceback, build failure, or CI output.</li>
            <li>Choose the closest cleaning mode and reduce the low-signal lines.</li>
            <li>Review the cleaned result for accuracy and sensitive data.</li>
            <li>Share the smaller context in an issue, pull request, support escalation, or AI prompt.</li>
          </ol>
        </section>

        <section className="mt-10 grid gap-4 md:grid-cols-2">
          {workflowStages.map((item) => (
            <div
              key={item.stage}
              className="rounded-[26px] border border-white/10 bg-black/20 p-6"
            >
              <h2 className="text-xl font-semibold text-white">{item.stage}</h2>
              <p className="mt-3 text-sm leading-7 text-stone-300">{item.value}</p>
            </div>
          ))}
        </section>

        <section className="mt-10 rounded-[28px] border border-amber-400/15 bg-amber-300/8 p-6">
          <h2 className="text-2xl font-semibold text-white">
            Clear product boundaries
          </h2>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {productBoundaries.map((boundary) => (
              <p
                key={boundary}
                className="rounded-2xl border border-white/10 bg-black/20 p-4 text-sm leading-6 text-stone-300"
              >
                {boundary}
              </p>
            ))}
          </div>
        </section>
      </article>
    </main>
  );
}
