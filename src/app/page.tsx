import type { Metadata } from "next";
import Link from "next/link";
import CleanerWorkbench from "./components/CleanerWorkbench";
import { HeroTerminalVisual, WorkflowMapVisual } from "./components/VisualShowcase";
import { defaultDescription, siteUrl } from "./seo";

export const metadata: Metadata = {
  title: "ContextClean - Free Local Log Cleaner for AI Debugging",
  description: defaultDescription,
  alternates: { canonical: "/" },
};

const useCases = [
  {
    title: "Build failures",
    body: "Remove setup chatter and repeated framework frames while keeping the failed command, file, and error.",
    href: "/how-to-read-build-errors-before-asking-ai",
  },
  {
    title: "Runtime exceptions",
    body: "Shorten Node.js, Python, React, and TypeScript traces without flattening the useful call path.",
    href: "/before-after-log-examples",
  },
  {
    title: "CI handoffs",
    body: "Turn a long pipeline transcript into a smaller report for a teammate, issue, or AI assistant.",
    href: "/clean-ci-error-log",
  },
];

const safeguards = [
  "Processing happens in the current browser tab.",
  "Common token and credential patterns can be redacted.",
  "No account is required to use the cleaner.",
  "The original text remains available for comparison.",
];

const faq = [
  {
    question: "Does ContextClean upload my log?",
    answer:
      "The cleaner on this page runs in your browser and does not send the pasted log to a ContextClean server. Third-party browser extensions or services remain outside our control.",
  },
  {
    question: "Can I trust automatic secret detection?",
    answer:
      "No automated detector catches every credential format. Treat the warning as an extra check and manually review the text before sharing it.",
  },
  {
    question: "Why can removing log lines be risky?",
    answer:
      "A line that looks repetitive may still contain timing, environment, or call-order context. Compare the output with the original and restore anything needed to reproduce the failure.",
  },
  {
    question: "Which AI tools can use the result?",
    answer:
      "The cleaned output is plain text, so it can be used with ChatGPT, Claude, Cursor, Codex, an issue tracker, or a teammate conversation.",
  },
];

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "ContextClean",
    url: siteUrl,
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Any modern web browser",
    description: defaultDescription,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  return (
    <main className="px-4 py-8 text-stone-100 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="mx-auto max-w-7xl">
        <section className="grid items-center gap-8 py-8 lg:grid-cols-[1.08fr_0.92fr] lg:py-14">
          <div>
            <p className="inline-flex rounded-full border border-emerald-300/20 bg-emerald-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-200">
              Free, local-first developer utility
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
              Turn noisy error logs into useful debugging context.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-300">
              Paste a stack trace, build error, traceback, or CI failure. ContextClean
              removes common noise, deduplicates repeated lines, flags likely secrets,
              and gives you a smaller result to review before sharing.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="#cleaner" className="rounded-full bg-emerald-400 px-6 py-3 font-semibold text-stone-950 hover:bg-emerald-300">
                Open the cleaner
              </Link>
              <Link href="/before-after-log-examples" className="rounded-full border border-white/15 px-6 py-3 font-semibold text-white hover:bg-white/[0.05]">
                See real examples
              </Link>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {safeguards.map((item) => (
                <div key={item} className="flex gap-3 text-sm leading-6 text-stone-300">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-emerald-300" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <HeroTerminalVisual />
        </section>

        <CleanerWorkbench />

        <section className="py-16">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-300">
              A review step, not a black box
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white">
              What the cleaner changes and what stays your responsibility
            </h2>
            <p className="mt-5 text-base leading-8 text-stone-300">
              ContextClean uses transparent pattern matching. It removes known
              low-signal messages for the selected log type, removes exact duplicate
              lines, and optionally replaces common credential patterns. It does not
              diagnose the bug, execute code, or know which application-specific line
              matters most.
            </p>
          </div>
          <div className="mt-8">
            <WorkflowMapVisual />
          </div>
        </section>

        <section className="grid gap-5 lg:grid-cols-3">
          {useCases.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="rounded-[28px] border border-white/10 bg-white/[0.03] p-7 transition hover:border-emerald-300/30 hover:bg-emerald-300/[0.04]"
            >
              <h2 className="text-2xl font-semibold text-white">{item.title}</h2>
              <p className="mt-4 text-sm leading-7 text-stone-300">{item.body}</p>
              <p className="mt-6 text-sm font-semibold text-emerald-300">Read the guide</p>
            </Link>
          ))}
        </section>

        <section className="mt-16 grid gap-8 rounded-[32px] border border-white/10 bg-stone-950/70 p-7 lg:grid-cols-2 lg:p-10">
          <article>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300">
              Better input
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-white">
              A cleaned log is only one part of a useful debugging request.
            </h2>
            <div className="mt-6 space-y-4 text-sm leading-7 text-stone-300">
              <p>
                Add the command or route that failed, the behavior you expected, and
                the most relevant recent change. Those facts often matter more than
                another hundred lines of framework output.
              </p>
              <p>
                Ask for a specific outcome such as the likely root cause, the next
                diagnostic check, or the smallest safe fix. This gives a teammate or
                AI assistant a clearer task.
              </p>
            </div>
            <Link href="/ai-debugging-workflow-templates" className="mt-6 inline-flex text-sm font-semibold text-emerald-300 hover:text-emerald-200">
              Use the debugging templates
            </Link>
          </article>
          <article>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-300">
              Safer sharing
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-white">
              Redaction requires human review.
            </h2>
            <div className="mt-6 space-y-4 text-sm leading-7 text-stone-300">
              <p>
                Logs may contain access tokens, customer identifiers, internal URLs,
                file paths, request payloads, or source code. Secret detection helps
                identify common formats but cannot understand every private value.
              </p>
              <p>
                If a log contains regulated, confidential, or production data, do not
                paste it into a public website or third-party AI system.
              </p>
            </div>
            <Link href="/remove-secrets-from-logs-before-sharing" className="mt-6 inline-flex text-sm font-semibold text-amber-200 hover:text-amber-100">
              Read the redaction guide
            </Link>
          </article>
        </section>

        <section className="py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300">
            Frequently asked questions
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {faq.map((item) => (
              <article key={item.question} className="rounded-[26px] border border-white/10 bg-white/[0.03] p-6">
                <h2 className="text-lg font-semibold text-white">{item.question}</h2>
                <p className="mt-3 text-sm leading-7 text-stone-300">{item.answer}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-16 rounded-[32px] border border-emerald-300/15 bg-[linear-gradient(135deg,rgba(16,185,129,0.10),rgba(12,10,9,0.75))] p-7 sm:p-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300">
                Community discussion
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-white">
                When an AI answer still looks wrong, ask other developers.
              </h2>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-stone-300">
                Discuss prompt failures, misleading stack frames, context trimming,
                and safer ways to share a technical problem. Discussions are public
                and moderated through the ContextClean GitHub repository.
              </p>
            </div>
            <Link href="/community" className="rounded-full bg-emerald-400 px-6 py-3 text-center text-sm font-semibold text-stone-950 hover:bg-emerald-300">
              Visit the community
            </Link>
          </div>
        </section>

        <section className="mb-16 grid gap-6 rounded-[32px] border border-amber-300/15 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.12),transparent_35%),rgba(12,10,9,0.78)] p-7 lg:grid-cols-[1fr_0.7fr] lg:items-center sm:p-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-300">
              AI coding field notes
            </p>
            <h2 className="mt-4 text-4xl font-semibold text-white">
              Tools are useful. Shared failure stories are memorable.
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-stone-300">
              Explore invented APIs, dependency bonfires, symptom patches, version
              amnesia, AI black-hat translations, a hallucination-risk checklist,
              debugging Bingo, and community-submitted roasts.
            </p>
            <Link href="/field-notes" className="mt-6 inline-flex rounded-full bg-amber-300 px-6 py-3 text-sm font-semibold text-stone-950 hover:bg-amber-200">
              Enter the field notes
            </Link>
          </div>
          <div className="rounded-[26px] border border-white/10 bg-black/30 p-6">
            <p className="font-mono text-xs text-amber-200">AI SAYS</p>
            <p className="mt-3 text-xl font-semibold text-white">
              &quot;This should resolve the issue.&quot;
            </p>
            <p className="mt-6 font-mono text-xs text-emerald-200">FIELD TRANSLATION</p>
            <p className="mt-3 text-sm leading-7 text-stone-300">
              &quot;I generated a plausible patch but did not run your tests.&quot;
            </p>
          </div>
        </section>

        <section className="mb-16 rounded-[32px] border border-white/10 bg-stone-950/75 p-7 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
            <div>
              <p className="font-mono text-xs text-emerald-300">PROMPT READINESS</p>
              <p className="mt-3 text-7xl font-semibold text-white">72</p>
              <div className="mt-5 h-3 overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-[72%] rounded-full bg-amber-300" />
              </div>
              <p className="mt-3 text-sm text-stone-400">
                Missing: recent change and checks already completed
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300">
                Prompt clinic
              </p>
              <h2 className="mt-4 text-4xl font-semibold text-white">
                Find out why an AI debugging request is likely to produce a vague answer.
              </h2>
              <p className="mt-4 text-sm leading-7 text-stone-300">
                Score the evidence in your prompt, detect common credential patterns,
                generate a stronger structure, and practice five realistic diagnostic
                decisions with immediate explanations.
              </p>
              <Link href="/prompt-clinic" className="mt-6 inline-flex rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-stone-950 hover:bg-emerald-300">
                Open the prompt clinic
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
