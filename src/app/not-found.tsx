import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found - ContextClean",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <main className="px-4 py-20 text-stone-100 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-4xl rounded-[32px] border border-white/10 bg-stone-950/75 p-8 sm:p-12">
        <p className="font-mono text-sm text-amber-300">404 / ROUTE_NOT_FOUND</p>
        <h1 className="mt-5 text-5xl font-semibold tracking-tight text-white">
          This page is not part of the current ContextClean toolkit.
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-stone-300">
          Some older guides were consolidated into stronger resources. Use one of
          these active areas instead.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {[
            ["/", "Log Cleaner", "Clean and redact a debugging log locally."],
            ["/prompt-clinic", "Prompt Clinic", "Score a debugging request and practice evidence-first decisions."],
            ["/field-notes", "AI Field Notes", "Explore AI coding failure patterns, polls, and debugging Bingo."],
            ["/resources", "Resource Library", "Browse the maintained technical guides."],
          ].map(([href, title, body]) => (
            <Link
              key={href}
              href={href}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 hover:border-emerald-300/30"
            >
              <h2 className="font-semibold text-white">{title}</h2>
              <p className="mt-2 text-sm leading-6 text-stone-400">{body}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
