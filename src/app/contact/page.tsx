import type { Metadata } from "next";
import Link from "next/link";
import { getPageSeo, siteUrl } from "../seo";

const seo = getPageSeo("/contact");

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  alternates: { canonical: `${siteUrl}${seo.path}` },
};

export default function ContactPage() {
  return (
    <main className="px-4 py-12 text-stone-100 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-5xl">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300">
          Contact and support
        </p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-white">
          Choose the right channel for your ContextClean question
        </h1>
        <p className="mt-6 max-w-4xl text-lg leading-8 text-stone-300">
          ContextClean uses public, trackable support channels so reports can be
          followed, corrected, and discussed without disappearing into an
          unmonitored inbox.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <Link href="/community" className="rounded-[28px] border border-emerald-300/20 bg-emerald-300/[0.06] p-7 hover:border-emerald-300/40">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">Community</p>
            <h2 className="mt-3 text-2xl font-semibold text-white">AI debugging discussion</h2>
            <p className="mt-4 text-sm leading-7 text-stone-300">
              Ask about prompt failures, log-cleaning decisions, missing context, or
              safer ways to present a technical problem.
            </p>
          </Link>

          <Link href="https://github.com/hyuchao25/contextclean/issues/new" className="rounded-[28px] border border-white/10 bg-white/[0.03] p-7 hover:border-emerald-300/30">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-400">Issue tracker</p>
            <h2 className="mt-3 text-2xl font-semibold text-white">Product bug or correction</h2>
            <p className="mt-4 text-sm leading-7 text-stone-300">
              Report a broken button, incorrect guide, accessibility issue, privacy
              concern, or unexpected cleaner result.
            </p>
          </Link>
        </div>

        <section className="mt-10 rounded-[28px] border border-amber-300/15 bg-amber-300/[0.05] p-7">
          <h2 className="text-2xl font-semibold text-white">Before posting publicly</h2>
          <p className="mt-4 text-sm leading-7 text-stone-300">
            Remove credentials, customer data, private URLs, proprietary source code,
            and any information you are not authorized to disclose. For a security
            concern that cannot be described safely in public, do not publish the
            sensitive details; open a minimal issue requesting a private contact
            channel.
          </p>
        </section>
      </section>
    </main>
  );
}
