import type { Metadata } from "next";
import Link from "next/link";
import FieldNotesLab from "../components/FieldNotesLab";
import { siteUrl } from "../seo";

export const metadata: Metadata = {
  title: "AI Coding Field Notes: Failure Patterns, Polls and Jokes",
  description:
    "Explore recurring AI coding failure patterns, check an answer for hallucination risk, play debugging Bingo, and share a public AI roast.",
  alternates: { canonical: `${siteUrl}/field-notes` },
};

const problemAtlas = [
  {
    name: "API fan fiction",
    symptom: "The answer uses a plausible method, option, or package that does not exist.",
    why: "Language models optimize for plausible continuations, not verified library inventories.",
    counter:
      "Ask it to cite the exact package version and documentation surface, or verify the symbol in your installed types.",
  },
  {
    name: "The dependency bonfire",
    symptom: "The first recommendation is deleting lockfiles, caches, and node_modules.",
    why: "Resetting state sometimes works, so it becomes an overused generic escape hatch.",
    counter:
      "Ask which evidence points to stale state and what lower-cost check can confirm that hypothesis.",
  },
  {
    name: "Symptom whack-a-mole",
    symptom: "The patch adds guards or optional chaining where an impossible value appears.",
    why: "The visible exception is easier to patch than the earlier state or data-flow error.",
    counter:
      "Ask where the invalid value was first introduced and require the answer to trace it backward.",
  },
  {
    name: "Framework cargo cult",
    symptom: "The answer adds useEffect, dynamic import, or client-only rendering to silence a warning.",
    why: "Common fixes from unrelated examples are applied without checking the component boundary.",
    counter:
      "Require an explanation of the server value, client value, and first render that differs.",
  },
  {
    name: "Version amnesia",
    symptom: "The solution matches an older or newer API than the project actually uses.",
    why: "Training examples span incompatible versions and documentation generations.",
    counter:
      "Put exact runtime and package versions near the top of the request.",
  },
  {
    name: "Refactor inflation",
    symptom: "A one-line bug receives a new abstraction, helper module, and architecture proposal.",
    why: "Longer answers can appear more complete even when they increase change risk.",
    counter:
      "Request the smallest safe fix first, then ask for optional cleanup separately.",
  },
  {
    name: "Evidence blindness",
    symptom: "The answer never mentions the assertion difference, exit code, or first application frame.",
    why: "Too much surrounding log text dilutes the highest-signal evidence.",
    counter:
      "Lead with a reviewed excerpt and explicitly ask the model to cite evidence for each claim.",
  },
  {
    name: "Premature victory lap",
    symptom: "The response says the issue is fixed without a test, command, or observable result.",
    why: "Generating code and verifying behavior are different tasks.",
    counter:
      "Require one verification command and define the expected output before applying the change.",
  },
];

const translations = [
  ["AI says", "What it often means"],
  ["This should resolve the issue.", "I generated a plausible patch but did not run it."],
  ["Make sure your dependencies are up to date.", "I have not isolated which dependency matters."],
  ["There may be a caching issue.", "The evidence did not support my first guess."],
  ["You are absolutely right.", "The previous confident answer was wrong."],
  ["For production, consider adding robust error handling.", "The root cause is still unresolved, but try/catch is available."],
  ["This is a common issue.", "I have seen similar words in unrelated examples."],
];

export default function FieldNotesPage() {
  return (
    <main className="px-4 py-12 text-stone-100 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <section className="grid gap-8 lg:grid-cols-[1fr_0.75fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-300">
              AI coding field notes
            </p>
            <h1 className="mt-4 text-5xl font-semibold tracking-tight text-white sm:text-6xl">
              The strange, funny, and expensive ways AI debugging goes wrong
            </h1>
            <p className="mt-6 max-w-4xl text-lg leading-8 text-stone-300">
              A living field guide to invented APIs, cargo-cult fixes, version
              confusion, premature victory laps, and the prompts that help pull a
              coding assistant back toward evidence.
            </p>
          </div>
          <div className="rounded-[28px] border border-amber-300/15 bg-amber-300/[0.06] p-6">
            <p className="font-mono text-xs text-amber-200">FIELD NOTE #001</p>
            <p className="mt-4 text-xl font-semibold leading-8 text-white">
              If the answer begins with deleting every cache before mentioning the
              actual error, the cache is probably not the only thing being cleared.
            </p>
          </div>
        </section>

        <section className="mt-14">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300">
              Problem atlas
            </p>
            <h2 className="mt-3 text-4xl font-semibold text-white">
              Eight recurring failure patterns and how to challenge them
            </h2>
          </div>
          <div className="mt-7 grid gap-5 md:grid-cols-2">
            {problemAtlas.map((item, index) => (
              <article key={item.name} className="rounded-[28px] border border-white/10 bg-stone-950/70 p-6">
                <p className="font-mono text-xs text-stone-500">PATTERN {String(index + 1).padStart(2, "0")}</p>
                <h3 className="mt-3 text-2xl font-semibold text-white">{item.name}</h3>
                <dl className="mt-5 space-y-4 text-sm leading-7">
                  <div>
                    <dt className="font-semibold text-amber-200">What it looks like</dt>
                    <dd className="mt-1 text-stone-300">{item.symptom}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-stone-200">Why it happens</dt>
                    <dd className="mt-1 text-stone-400">{item.why}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-emerald-200">Counter-prompt</dt>
                    <dd className="mt-1 text-stone-300">{item.counter}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-14 overflow-hidden rounded-[30px] border border-white/10">
          {translations.map((row, index) => (
            <div
              key={row[0]}
              className={`grid grid-cols-2 ${index === 0 ? "bg-white/[0.07] font-semibold text-white" : "border-t border-white/10 bg-stone-950/60 text-stone-300"}`}
            >
              <div className="p-5">{row[0]}</div>
              <div className="p-5">{row[1]}</div>
            </div>
          ))}
        </section>

        <section className="mt-14">
          <FieldNotesLab />
        </section>

        <section className="mt-14 rounded-[32px] border border-emerald-300/15 bg-emerald-300/[0.05] p-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <h2 className="text-3xl font-semibold text-white">
                Have a better AI failure story?
              </h2>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-stone-300">
                Share what the assistant said, what the actual problem was, and the
                question that finally produced a useful answer. Public submissions
                live in the community issue tracker so others can reply.
              </p>
            </div>
            <Link href="/community" className="rounded-full bg-emerald-400 px-6 py-3 text-center text-sm font-semibold text-stone-950">
              Share a field note
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
