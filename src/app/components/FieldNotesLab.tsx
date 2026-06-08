"use client";

import { useEffect, useMemo, useState } from "react";

const pollOptions = [
  "Confidently invents an API",
  "Suggests reinstalling everything",
  "Fixes the symptom, not the cause",
  "Ignores the first error in the log",
  "Rewrites working code for no reason",
  "Says \"you are absolutely right\" after being wrong",
];

const smellChecks = [
  {
    label: "The answer does not quote or reference the actual error.",
    weight: 2,
  },
  {
    label: "It recommends a major upgrade before checking versions or compatibility.",
    weight: 3,
  },
  {
    label: "It invents a function, option, package, or file that is not in the evidence.",
    weight: 4,
  },
  {
    label: "It changes several unrelated files in one proposed fix.",
    weight: 2,
  },
  {
    label: "It gives a fix without stating the suspected root cause.",
    weight: 3,
  },
  {
    label: "It ignores a caused-by exception, assertion difference, or exit code.",
    weight: 3,
  },
  {
    label: "It claims success without a verification command or observable result.",
    weight: 2,
  },
];

const bingoSquares = [
  "Clear the cache",
  "Reinstall dependencies",
  "Check your internet connection",
  "That API does not actually exist",
  "Adds an unnecessary useEffect",
  "Changes the question halfway through",
  "Deletes the type instead of fixing it",
  "Wraps everything in try/catch",
  "Ends with \"Hope this helps!\"",
];

export default function FieldNotesLab() {
  const [vote, setVote] = useState<string | null>(null);
  const [checks, setChecks] = useState<string[]>([]);
  const [bingo, setBingo] = useState<string[]>([]);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setVote(window.localStorage.getItem("contextclean-ai-poll"));
      setBingo(
        JSON.parse(window.localStorage.getItem("contextclean-ai-bingo") || "[]") as string[]
      );
    }, 0);

    return () => window.clearTimeout(timer);
  }, []);

  const smellScore = useMemo(
    () =>
      smellChecks
        .filter((item) => checks.includes(item.label))
        .reduce((total, item) => total + item.weight, 0),
    [checks]
  );

  const assessment =
    smellScore === 0
      ? {
          label: "No obvious warning signs",
          body: "Still verify the diagnosis against the source code and reproduce the result.",
          tone: "text-emerald-200",
        }
      : smellScore <= 5
        ? {
            label: "Needs a careful review",
            body: "Ask the assistant to cite evidence from the error and provide one verification step.",
            tone: "text-amber-200",
          }
        : {
            label: "High hallucination risk",
            body: "Do not apply the fix yet. Reframe the prompt around the first error, versions, and a minimal reproduction.",
            tone: "text-red-200",
          };

  function chooseVote(option: string) {
    setVote(option);
    window.localStorage.setItem("contextclean-ai-poll", option);
  }

  function toggleBingo(square: string) {
    const next = bingo.includes(square)
      ? bingo.filter((item) => item !== square)
      : [...bingo, square];
    setBingo(next);
    window.localStorage.setItem("contextclean-ai-bingo", JSON.stringify(next));
  }

  function submitRoast() {
    const title = vote || "An AI debugging answer that deserves a second opinion";
    const body = `## What the AI did

${vote || "[Describe the behavior]"}

## What the real problem was

[Explain the actual error or missing context]

## The answer that would have been more useful

[Share the better diagnostic question, evidence, or minimal fix]

## Safety confirmation

I removed credentials, private customer data, internal URLs, and confidential source code.`;

    const url = new URL("https://github.com/hyuchao25/contextclean/issues/new");
    url.searchParams.set("title", `[Community] AI roast: ${title}`);
    url.searchParams.set("body", body);
    window.location.assign(url.toString());
  }

  return (
    <div className="space-y-10">
      <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <article className="rounded-[30px] border border-white/10 bg-stone-950/75 p-7">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-300">
            Painfully accurate poll
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white">
            Which AI coding habit wastes the most time?
          </h2>
          <p className="mt-3 text-sm leading-7 text-stone-400">
            This lightweight vote is stored only in your browser. Use the community
            link below when you want a public, replyable discussion.
          </p>
          <div className="mt-6 space-y-3">
            {pollOptions.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => chooseVote(option)}
                className={`flex w-full items-center justify-between rounded-2xl border px-4 py-3 text-left text-sm transition ${
                  vote === option
                    ? "border-amber-300/40 bg-amber-300/10 text-white"
                    : "border-white/10 bg-white/[0.03] text-stone-300 hover:border-white/20"
                }`}
              >
                <span>{option}</span>
                <span className="font-mono text-xs">{vote === option ? "VOTED" : "○"}</span>
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={submitRoast}
            className="mt-5 rounded-full border border-amber-300/30 px-5 py-3 text-sm font-semibold text-amber-100 hover:bg-amber-300/10"
          >
            Turn this into a public AI roast
          </button>
        </article>

        <article className="rounded-[30px] border border-emerald-300/15 bg-emerald-300/[0.05] p-7">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300">
            Answer smell detector
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white">
            Does this AI answer deserve to touch your code?
          </h2>
          <div className="mt-6 space-y-3">
            {smellChecks.map((item) => (
              <label
                key={item.label}
                className="flex cursor-pointer items-start gap-3 rounded-2xl border border-white/10 bg-black/20 p-4 text-sm leading-6 text-stone-300"
              >
                <input
                  type="checkbox"
                  checked={checks.includes(item.label)}
                  onChange={() =>
                    setChecks((current) =>
                      current.includes(item.label)
                        ? current.filter((value) => value !== item.label)
                        : [...current, item.label]
                    )
                  }
                  className="mt-1 accent-emerald-400"
                />
                <span>{item.label}</span>
              </label>
            ))}
          </div>
          <div className="mt-5 rounded-2xl border border-white/10 bg-black/30 p-5">
            <p className="font-mono text-xs text-stone-500">RISK SCORE {smellScore}/19</p>
            <p className={`mt-2 text-xl font-semibold ${assessment.tone}`}>
              {assessment.label}
            </p>
            <p className="mt-2 text-sm leading-6 text-stone-300">{assessment.body}</p>
          </div>
        </article>
      </section>

      <section className="rounded-[30px] border border-white/10 bg-stone-950/75 p-7">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300">
              AI debugging Bingo
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white">
              Mark a square whenever your assistant reaches for a cliché
            </h2>
          </div>
          <p className="text-sm text-stone-400">
            {bingo.length}/9 marked · saved in this browser
          </p>
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {bingoSquares.map((square) => (
            <button
              key={square}
              type="button"
              onClick={() => toggleBingo(square)}
              className={`min-h-28 rounded-2xl border p-5 text-left text-sm font-semibold leading-6 transition ${
                bingo.includes(square)
                  ? "border-emerald-300/35 bg-emerald-300/10 text-emerald-100"
                  : "border-white/10 bg-white/[0.03] text-stone-300 hover:border-white/20"
              }`}
            >
              {square}
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}
