import Link from "next/link";
import { getPageSeo, siteUrl } from "../seo";

const seo = getPageSeo("/debug-hydration-errors-step-by-step");

export const metadata = {
  title: seo.title,
  description: seo.description,
  alternates: {
    canonical: `${siteUrl}${seo.path}`,
  },
};

export default function DebugHydrationErrorsStepByStepPage() {
  return (
    <main className="min-h-screen px-4 py-8 text-stone-100 sm:px-6 lg:px-8">
      <article className="mx-auto max-w-4xl rounded-[32px] border border-white/10 bg-stone-950/80 p-8">
        <Link href="/" className="text-sm text-emerald-300 hover:text-emerald-200">
          Back to ContextClean
        </Link>

        <p className="mt-8 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300/80">
          Tutorial
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white">
          How to debug hydration errors step by step before asking AI for help
        </h1>

        <div className="mt-6 space-y-5 text-sm leading-7 text-stone-300">
          <p>
            Hydration errors are a common source of confusion in React and Next.js
            projects because the visible failure message is often broad while the real
            cause is narrow. The app says that the initial UI does not match, but the
            bug may be a single unstable value, a conditional render mismatch, or a
            client-only API that leaked into server output.
          </p>
          <p>
            Before asking an AI assistant to explain the issue, it helps to reduce the
            problem into a repeatable diagnostic path. That path is what this page
            outlines.
          </p>
        </div>

        <section className="mt-8 space-y-4">
          {[
            [
              "1. Find the first component in your code",
              "Ignore most framework frames at first. Find the first component path that belongs to your project, because that is usually where the server-client mismatch becomes actionable.",
            ],
            [
              "2. Look for unstable render input",
              "Check for values that differ between server and client such as current time, random numbers, browser-only state, window checks, local storage reads, or data that loads after first paint.",
            ],
            [
              "3. Check conditional markup",
              "Hydration often breaks when the server renders one branch and the client renders another. Compare booleans, feature flags, auth state, and viewport-dependent UI.",
            ],
            [
              "4. Reduce the log before sharing it",
              "Once you identify the likely component, keep the hydration message, the component path, and one sentence about what changed. Remove the rest of the framework stack for the first AI prompt.",
            ],
          ].map(([title, body]) => (
            <div
              key={title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
            >
              <h2 className="text-xl font-semibold text-white">{title}</h2>
              <p className="mt-3 text-sm leading-6 text-stone-300">{body}</p>
            </div>
          ))}
        </section>

        <section className="mt-10 rounded-[28px] border border-white/10 bg-black/25 p-6">
          <h2 className="text-2xl font-semibold text-white">A smaller AI prompt is usually better</h2>
          <pre className="mt-4 overflow-x-auto rounded-2xl border border-white/10 bg-black/45 p-4 text-sm leading-6 text-stone-300">
{`Please debug this hydration error.
Component: Header
File: src/components/Header.tsx:15
Expected behavior: server and client should render the same navigation
Recent change: I added a localStorage-based welcome message
Error: Hydration failed because the initial UI does not match.`}
          </pre>
        </section>

        <p className="mt-10 text-sm leading-7 text-stone-400">
          Last reviewed: May 25, 2026. Maintained as part of the ContextClean resource library.
        </p>
      </article>
    </main>
  );
}
