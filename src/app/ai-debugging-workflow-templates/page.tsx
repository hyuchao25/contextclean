import Link from "next/link";
import ErrorReportBuilder from "../components/ErrorReportBuilder";
import { getPageSeo, siteUrl } from "../seo";

const seo = getPageSeo("/ai-debugging-workflow-templates");

export const metadata = {
  title: seo.title,
  description: seo.description,
  alternates: {
    canonical: `${siteUrl}${seo.path}`,
  },
};

const templates = [
  {
    title: "Build failure",
    body: `Please debug this build failure.\nCommand:\nRelevant file:\nRecent change:\nCleaned error:\nWhat I already checked:`,
  },
  {
    title: "Runtime crash",
    body: `Please identify the likely root cause.\nRoute or command:\nRelevant file:\nExpected behavior:\nCleaned stack trace:\nMinimal fix requested:`,
  },
  {
    title: "CI failure",
    body: `Please summarize this CI failure and suggest the next check.\nJob:\nStep:\nCommand:\nCleaned error:\nExit code:`,
  },
  {
    title: "TypeScript error",
    body: `Please explain this TypeScript error and suggest the smallest type-safe fix.\nFile:\nChanged code:\nCleaned diagnostic:\nExpected type:\nActual value:`,
  },
  {
    title: "React hydration issue",
    body: `Please narrow this hydration mismatch.\nRoute:\nComponent:\nServer-rendered expectation:\nClient behavior:\nCleaned warning or stack trace:`,
  },
  {
    title: "Support escalation",
    body: `Please help triage this bug report.\nUser impact:\nEnvironment:\nCleaned error:\nSensitive values removed:\nQuestion for engineering:`,
  },
];

const usageRules = [
  "Clean the log first, then paste the result into the template.",
  "Add the command, route, file, or job name before asking for a fix.",
  "Ask for one outcome: root cause, next check, minimal fix, or reproduction steps.",
  "Remove secrets and internal data before using the prompt in a third-party AI tool.",
];

export default function AIDebuggingWorkflowTemplatesPage() {
  return (
    <main className="min-h-screen px-4 py-8 text-stone-100 sm:px-6 lg:px-8">
      <article className="mx-auto max-w-6xl rounded-[32px] border border-white/10 bg-stone-950/80 p-8">
        <Link href="/" className="text-sm text-emerald-300 hover:text-emerald-200">
          Back to ContextClean
        </Link>

        <p className="mt-8 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300/80">
          Templates
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white">
          AI debugging workflow templates for cleaner prompts and handoffs
        </h1>
        <p className="mt-6 max-w-3xl text-sm leading-7 text-stone-300">
          These templates are designed to be used after cleaning a log. They help turn
          the cleaned text into a complete prompt by adding expected behavior, recent
          changes, and the specific task you want the AI assistant to perform.
        </p>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {templates.map((template) => (
            <section key={template.title} className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
              <h2 className="text-xl font-semibold text-white">{template.title}</h2>
              <pre className="mt-4 overflow-x-auto rounded-2xl border border-white/10 bg-black/45 p-4 text-sm leading-6 text-stone-300">
                {template.body}
              </pre>
            </section>
          ))}
        </div>

        <section className="mt-10 rounded-[28px] border border-emerald-400/15 bg-emerald-300/8 p-6">
          <h2 className="text-2xl font-semibold text-white">
            How to use these templates
          </h2>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {usageRules.map((rule) => (
              <p
                key={rule}
                className="rounded-2xl border border-white/10 bg-black/20 p-4 text-sm leading-6 text-stone-300"
              >
                {rule}
              </p>
            ))}
          </div>
        </section>

        <ErrorReportBuilder />
      </article>
    </main>
  );
}
