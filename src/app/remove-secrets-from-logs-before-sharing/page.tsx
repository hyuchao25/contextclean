import Link from "next/link";
import { getPageSeo, siteUrl } from "../seo";

const seo = getPageSeo("/remove-secrets-from-logs-before-sharing");

export const metadata = {
  title: seo.title,
  description: seo.description,
  alternates: {
    canonical: `${siteUrl}${seo.path}`,
  },
};

export default function RemoveSecretsFromLogsBeforeSharingPage() {
  return (
    <main className="min-h-screen px-4 py-8 text-stone-100 sm:px-6 lg:px-8">
      <article className="mx-auto max-w-4xl rounded-[32px] border border-white/10 bg-stone-950/80 p-8">
        <Link href="/" className="text-sm text-emerald-300 hover:text-emerald-200">
          Back to ContextClean
        </Link>

        <p className="mt-8 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300/80">
          Safety Tutorial
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white">
          How to remove secrets from logs before sharing them with AI or teammates
        </h1>

        <div className="mt-6 space-y-5 text-sm leading-7 text-stone-300">
          <p>
            Many debugging logs contain more than stack traces. They can include API
            keys, bearer tokens, cookies, database connection strings, internal
            hostnames, signed URLs, request payloads, and customer identifiers. Once a
            log is copied into a ticket, a chat tool, or an AI assistant, that context
            can travel further than the developer originally intended.
          </p>
          <p>
            A good redaction workflow starts before sharing, not after. The aim is to
            keep the technical signal while removing the data that should not leave the
            original environment.
          </p>
        </div>

        <section className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-[28px] border border-red-400/20 bg-red-400/8 p-6">
            <h2 className="text-2xl font-semibold text-white">High-risk categories</h2>
            <ul className="mt-4 list-disc space-y-3 pl-6 text-sm leading-7 text-stone-300">
              <li>Access tokens, cookies, API keys, auth headers</li>
              <li>Customer emails, IDs, names, addresses, request payloads</li>
              <li>Private bucket names, internal URLs, repository paths</li>
              <li>Database connection strings and signed temporary URLs</li>
            </ul>
          </div>
          <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
            <h2 className="text-2xl font-semibold text-white">Safer replacement style</h2>
            <p className="mt-4 text-sm leading-7 text-stone-300">
              Replace values with short placeholders such as `[REDACTED_TOKEN]`,
              `[CUSTOMER_ID]`, or `[INTERNAL_HOST]`. That keeps the shape of the log
              intact while removing the sensitive content.
            </p>
          </div>
        </section>

        <section className="mt-10 rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
          <h2 className="text-2xl font-semibold text-white">Recommended review order</h2>
          <ol className="mt-4 list-decimal space-y-3 pl-6 text-sm leading-7 text-stone-300">
            <li>Reduce the log to the smallest useful section first.</li>
            <li>Scan for obvious secrets and customer data.</li>
            <li>Replace values with explicit placeholders instead of deleting whole lines when possible.</li>
            <li>Add one sentence that explains anything important you removed conceptually.</li>
          </ol>
        </section>

        <p className="mt-10 text-sm leading-7 text-stone-400">
          Last reviewed: May 25, 2026. Maintained as part of the ContextClean resource library.
        </p>
      </article>
    </main>
  );
}
