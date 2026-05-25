import Link from "next/link";
import { getPageSeo, siteUrl } from "../seo";

const seo = getPageSeo("/safe-log-sharing-for-ai");

export const metadata = {
  title: seo.title,
  description: seo.description,
  alternates: {
    canonical: `${siteUrl}${seo.path}`,
  },
};

const risks = [
  "Access tokens, API keys, session cookies, or auth headers",
  "Customer email addresses, IDs, request payloads, or database values",
  "Internal hostnames, bucket names, repository paths, or private endpoints",
  "Source code snippets that should not leave a private project boundary",
];

export default function SafeLogSharingForAIPage() {
  return (
    <main className="min-h-screen px-4 py-8 text-stone-100 sm:px-6 lg:px-8">
      <article className="mx-auto max-w-4xl rounded-[32px] border border-white/10 bg-stone-950/80 p-8">
        <Link href="/" className="text-sm text-emerald-300 hover:text-emerald-200">
          Back to ContextClean
        </Link>

        <p className="mt-8 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300/80">
          Safety
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white">
          How to share logs with AI more safely without stripping away the lines that matter
        </h1>

        <div className="mt-6 space-y-5 text-sm leading-7 text-stone-300">
          <p>
            Developers often think about prompt quality before they think about prompt
            safety. That order is backwards. A debugging prompt is only useful if it is
            both informative and appropriate to share. Many production logs include more
            than stack traces. They also include credentials, internal infrastructure
            details, and customer-related data that should not be pasted into a public
            tool or external model.
          </p>
          <p>
            The goal is not to become paranoid about every line. The goal is to build
            a habit of scanning for the categories of information that can create real
            operational, privacy, or contractual risk.
          </p>
        </div>

        <section className="mt-8 rounded-[28px] border border-red-400/20 bg-red-400/8 p-6">
          <h2 className="text-2xl font-semibold text-white">
            Common categories to remove or redact first
          </h2>
          <ul className="mt-4 list-disc space-y-3 pl-6 text-sm leading-7 text-stone-300">
            {risks.map((risk) => (
              <li key={risk}>{risk}</li>
            ))}
          </ul>
        </section>

        <section className="mt-10 rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
          <h2 className="text-2xl font-semibold text-white">
            A practical review order
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-7 text-stone-300">
            <p>
              First, identify the smallest section of the log that still explains the
              failure. Second, scan that smaller section for secrets and private data.
              Third, add one or two sentences of human context to replace anything you
              removed that still matters conceptually. That gives you a safer prompt
              without turning it into an empty shell.
            </p>
            <p>
              This is another place where a cleaner helps. Shorter output is easier to
              inspect. If you are looking at 25 lines instead of 500, it is much more
              realistic to catch the token, customer ID, or internal URL before sharing
              the text.
            </p>
          </div>
        </section>
      </article>
    </main>
  );
}
