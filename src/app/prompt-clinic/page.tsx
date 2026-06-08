import type { Metadata } from "next";
import Link from "next/link";
import PromptClinic from "../components/PromptClinic";
import { siteUrl } from "../seo";

export const metadata: Metadata = {
  title: "AI Debugging Prompt Clinic and Evidence Challenge",
  description:
    "Score a debugging prompt, find missing evidence, generate a clearer structure, and practice five evidence-driven AI debugging scenarios.",
  alternates: { canonical: `${siteUrl}/prompt-clinic` },
};

export default function PromptClinicPage() {
  return (
    <main className="px-4 py-12 text-stone-100 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <section className="grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300">
              AI debugging training ground
            </p>
            <h1 className="mt-4 text-5xl font-semibold tracking-tight text-white sm:text-6xl">
              Diagnose the prompt before asking AI to diagnose the code
            </h1>
            <p className="mt-6 max-w-4xl text-lg leading-8 text-stone-300">
              Measure whether a debugging request contains the evidence needed for a
              useful answer, generate a clearer structure, and practice choosing the
              next move in realistic failure scenarios.
            </p>
          </div>
          <div className="rounded-[28px] border border-emerald-300/15 bg-emerald-300/[0.05] p-6">
            <p className="font-mono text-xs text-emerald-200">CLINIC RULE</p>
            <p className="mt-4 text-xl font-semibold leading-8 text-white">
              A longer prompt is not automatically better. Every added line should
              locate the failure, explain causality, or rule out a hypothesis.
            </p>
          </div>
        </section>

        <section className="mt-12">
          <PromptClinic />
        </section>

        <section className="mt-14 grid gap-5 md:grid-cols-3">
          {[
            ["/how-contextclean-works", "Understand the cleaner", "Review the exact filtering rules and known failure modes."],
            ["/before-after-log-examples", "Study annotated cases", "See why specific lines stay, leave, or need to be restored."],
            ["/field-notes", "Recognize AI failure patterns", "Learn the habits that make confident answers unreliable."],
          ].map(([href, title, body]) => (
            <Link key={href} href={href} className="rounded-[26px] border border-white/10 bg-white/[0.03] p-6 hover:border-emerald-300/30">
              <h2 className="text-xl font-semibold text-white">{title}</h2>
              <p className="mt-3 text-sm leading-7 text-stone-300">{body}</p>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}
