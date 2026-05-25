import Link from "next/link";
import { getPageSeo, siteUrl } from "../seo";

const seo = getPageSeo("/all-guides");

export const metadata = {
  title: seo.title,
  description: seo.description,
  alternates: {
    canonical: `${siteUrl}${seo.path}`,
  },
};

const guideGroups = [
  {
    title: "Core Cleaner Guides",
    links: [
      ["/clean-stack-trace-for-chatgpt", "Clean Stack Trace for ChatGPT"],
      ["/clean-nodejs-error-log", "Clean Node.js Error Logs"],
      ["/clean-python-traceback-for-ai", "Clean Python Tracebacks"],
      ["/clean-react-error-stack", "Clean React Error Stacks"],
      ["/clean-nextjs-build-error", "Clean Next.js Build Errors"],
      ["/clean-typescript-error-for-ai", "Clean TypeScript Errors"],
      ["/clean-docker-build-log", "Clean Docker Build Logs"],
      ["/clean-ci-error-log", "Clean CI Error Logs"],
      ["/clean-error-log-for-cursor", "Clean Error Logs for Cursor"],
      ["/clean-ai-coding-prompt-context", "Clean AI Coding Prompt Context"],
    ],
  },
  {
    title: "Workflow and Safety",
    links: [
      ["/ai-debugging-checklist", "AI Debugging Checklist"],
      ["/safe-log-sharing-for-ai", "Safe Log Sharing for AI"],
      ["/remove-secrets-from-logs-before-sharing", "Remove Secrets From Logs Before Sharing"],
      ["/when-not-to-trim-logs-for-ai", "When Not to Trim Logs for AI"],
      ["/what-makes-a-high-signal-error-report", "What Makes a High-Signal Error Report"],
    ],
  },
  {
    title: "Reference and Methodology",
    links: [
      ["/how-contextclean-works", "How ContextClean Works"],
      ["/ai-debugging-glossary", "AI Debugging Glossary"],
      ["/editorial-standards", "Editorial Standards"],
      ["/site-maintenance-and-review-process", "Site Maintenance and Review Process"],
      ["/editorial-updates", "Editorial Updates"],
    ],
  },
  {
    title: "Examples and Case Studies",
    links: [
      ["/debugging-prompt-examples", "Debugging Prompt Examples"],
      ["/before-after-log-examples", "Before-and-After Log Examples"],
      ["/case-study-nextjs-hydration-log-cleanup", "Case Study: Next.js Hydration Cleanup"],
      ["/case-study-ci-failure-summary", "Case Study: CI Failure Summary"],
      ["/case-study-typescript-noise-reduction", "Case Study: TypeScript Noise Reduction"],
    ],
  },
];

export default function AllGuidesPage() {
  return (
    <main className="min-h-screen px-4 py-8 text-stone-100 sm:px-6 lg:px-8">
      <article className="mx-auto max-w-6xl rounded-[32px] border border-white/10 bg-stone-950/80 p-8">
        <Link href="/" className="text-sm text-emerald-300 hover:text-emerald-200">
          Back to ContextClean
        </Link>

        <p className="mt-8 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300/80">
          Guide Index
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white">
          All ContextClean guides, examples, references, and workflow pages
        </h1>
        <p className="mt-6 max-w-4xl text-sm leading-7 text-stone-300">
          This page is a human-readable index of the site's main educational content.
          It exists so visitors can browse the library by topic instead of landing on a
          single tool page and leaving immediately.
        </p>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {guideGroups.map((group) => (
            <section
              key={group.title}
              className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6"
            >
              <h2 className="text-2xl font-semibold text-white">{group.title}</h2>
              <div className="mt-4 grid gap-3">
                {group.links.map(([href, label]) => (
                  <Link
                    key={href}
                    href={href}
                    className="rounded-2xl border border-white/10 px-4 py-3 text-sm text-stone-300 transition hover:border-emerald-400/40 hover:text-white"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>

        <section className="mt-10 rounded-[28px] border border-emerald-400/15 bg-emerald-300/8 p-6">
          <h2 className="text-2xl font-semibold text-white">Index maintenance notes</h2>
          <div className="mt-4 space-y-3 text-sm leading-7 text-stone-300">
            <p>Last reviewed: May 25, 2026.</p>
            <p>Maintained by ContextClean as a human-readable index of the site's educational pages.</p>
            <p>
              New guides, examples, reference pages, and case studies are added here as
              the library expands.
            </p>
          </div>
        </section>
      </article>
    </main>
  );
}
