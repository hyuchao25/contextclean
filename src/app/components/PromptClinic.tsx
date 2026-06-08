"use client";

import { useMemo, useState } from "react";

const rubric = [
  {
    label: "Failure action",
    points: 15,
    test: (text: string) =>
      /\b(command|run|route|request|click|build|test|deploy|action)\b/i.test(text),
    fix: "Add the command, route, test, or user action that fails.",
  },
  {
    label: "Environment",
    points: 10,
    test: (text: string) =>
      /\b(node|python|react|next\.?js|typescript|docker|windows|linux|macos|version|environment)\b/i.test(text),
    fix: "Name the runtime, framework, operating system, and relevant versions.",
  },
  {
    label: "Expected behavior",
    points: 15,
    test: (text: string) =>
      /\b(expected|should|supposed|wanted|instead of)\b/i.test(text),
    fix: "State what should happen and how the actual result differs.",
  },
  {
    label: "Error evidence",
    points: 20,
    test: (text: string) =>
      /\b(error|exception|failed|failure|traceback|typeerror|syntaxerror|exit code|received|cannot|not found)\b/i.test(text),
    fix: "Include a reviewed error excerpt, assertion difference, or exit code.",
  },
  {
    label: "Recent change",
    points: 10,
    test: (text: string) =>
      /\b(changed|recent|after|upgrade|moved|added|removed|introduced|since)\b/i.test(text),
    fix: "Describe the most relevant code, dependency, or configuration change.",
  },
  {
    label: "Checks already completed",
    points: 10,
    test: (text: string) =>
      /\b(tried|checked|confirmed|verified|already|reproduced|ruled out)\b/i.test(text),
    fix: "List the checks already completed so the answer does not repeat them.",
  },
  {
    label: "Requested outcome",
    points: 20,
    test: (text: string) =>
      /\b(root cause|next step|minimal fix|smallest fix|explain|reproduction|verify|diagnose)\b/i.test(text),
    fix: "Ask for one outcome: root cause, next check, minimal fix, or reproduction plan.",
  },
];

const secretSignals = [
  /Bearer\s+[A-Za-z0-9._~+/-]+/i,
  /eyJ[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+/,
  /\b(api[_-]?key|token|secret|password|passwd)\s*[:=]\s*\S+/i,
  /AKIA[0-9A-Z]{16}/,
];

const challenges = [
  {
    title: "The missing module",
    situation:
      "A Node.js app says Cannot find module 'express'. The AI recommends upgrading Node and rewriting imports.",
    choices: [
      "Upgrade Node immediately",
      "Check package installation, package.json, workspace location, and the first application require/import frame",
      "Add a try/catch around require()",
    ],
    answer: 1,
    explanation:
      "The error identifies module resolution as the first cause candidate. Verify dependency presence and resolution context before changing runtime versions.",
  },
  {
    title: "The hydration mismatch",
    situation:
      "The server renders June 8 while the first client render shows June 7. The AI suggests disabling SSR.",
    choices: [
      "Disable SSR for the entire route",
      "Suppress the hydration warning",
      "Compare timezone, locale, and nondeterministic date formatting in the first render",
    ],
    answer: 2,
    explanation:
      "The differing values are direct evidence. Removing SSR hides the symptom and sacrifices behavior without explaining the mismatch.",
  },
  {
    title: "The failing CI test",
    situation:
      "Checkout and install succeed. One test expects 200, receives 500, and throws in src/user.ts.",
    choices: [
      "Focus the report on the assertion, exception, application frame, and recent code change",
      "Paste the entire runner transcript",
      "Clear every CI cache",
    ],
    answer: 0,
    explanation:
      "Successful setup is lower-signal than the assertion and first application frame. Restore environment details only if evidence points there.",
  },
  {
    title: "The wrapped Python error",
    situation:
      "InvalidUser is raised from a ValueError. The AI discusses only InvalidUser.",
    choices: [
      "Remove the ValueError because it is already handled",
      "Preserve both exceptions and their caused-by relationship",
      "Replace the custom exception with Exception",
    ],
    answer: 1,
    explanation:
      "The underlying ValueError contains the input failure. The custom exception adds domain meaning; both are necessary.",
  },
  {
    title: "The confident patch",
    situation:
      "The AI proposes changes in four files but never states the root cause or a verification command.",
    choices: [
      "Apply all files because the answer is detailed",
      "Ask for the suspected root cause, evidence, smallest fix, and one verification step",
      "Ask it to rewrite the project in another framework",
    ],
    answer: 1,
    explanation:
      "Patch size is not evidence. Require a falsifiable diagnosis and observable verification before increasing the change surface.",
  },
];

export default function PromptClinic() {
  const [prompt, setPrompt] = useState("");
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [copied, setCopied] = useState(false);

  const results = useMemo(
    () =>
      rubric.map((item) => ({
        ...item,
        passed: item.test(prompt),
      })),
    [prompt]
  );
  const score = results.reduce(
    (total, item) => total + (item.passed ? item.points : 0),
    0
  );
  const secretRisk = secretSignals.some((pattern) => pattern.test(prompt));
  const answered = Object.keys(answers).length;
  const correct = challenges.reduce(
    (total, item, index) => total + (answers[index] === item.answer ? 1 : 0),
    0
  );

  const rewrittenPrompt = [
    "Please identify the likely root cause and the next diagnostic step.",
    "",
    results[0].passed ? "" : "Command or failing action: [add this]",
    results[1].passed ? "" : "Environment and versions: [add this]",
    results[2].passed ? "" : "Expected behavior: [add this]",
    results[4].passed ? "" : "Recent relevant change: [add this]",
    results[5].passed ? "" : "Checks already completed: [add this]",
    "",
    "Reviewed and redacted error:",
    prompt.trim() || "[paste the relevant evidence]",
  ]
    .filter(Boolean)
    .join("\n");

  async function copyRewrite() {
    await navigator.clipboard.writeText(rewrittenPrompt);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  return (
    <div className="space-y-12">
      <section className="rounded-[30px] border border-white/10 bg-stone-950/75 p-6 sm:p-8">
        <div className="grid gap-8 xl:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300">
              Prompt checkup
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white">
              Paste a debugging request and find the missing evidence
            </h2>
            <p className="mt-3 text-sm leading-7 text-stone-400">
              The rubric is deterministic and runs in this browser. It evaluates
              prompt structure, not whether a proposed diagnosis is correct.
            </p>
            <textarea
              value={prompt}
              onChange={(event) => setPrompt(event.target.value)}
              placeholder="Example: npm run build fails with Module not found after I moved globals.css..."
              className="mt-6 h-72 w-full rounded-2xl border border-white/10 bg-black/40 p-5 font-mono text-sm leading-7 text-stone-100 outline-none focus:border-emerald-400"
            />
            {secretRisk && (
              <p className="mt-3 rounded-xl border border-red-300/20 bg-red-300/10 p-4 text-sm leading-6 text-red-100">
                Possible credential pattern detected. Remove it before copying or
                sharing this prompt.
              </p>
            )}
          </div>

          <div>
            <div className="flex items-end justify-between">
              <div>
                <p className="text-sm text-stone-400">Prompt readiness</p>
                <p className="mt-1 text-5xl font-semibold text-white">{score}</p>
              </div>
              <p className="font-mono text-xs text-stone-500">OUT OF 100</p>
            </div>
            <div className="mt-5 h-3 overflow-hidden rounded-full bg-white/10">
              <div
                className={`h-full rounded-full transition-all ${
                  score >= 80 ? "bg-emerald-400" : score >= 50 ? "bg-amber-300" : "bg-red-400"
                }`}
                style={{ width: `${score}%` }}
              />
            </div>
            <div className="mt-6 space-y-3">
              {results.map((item) => (
                <div
                  key={item.label}
                  className={`rounded-2xl border p-4 ${
                    item.passed
                      ? "border-emerald-300/15 bg-emerald-300/[0.05]"
                      : "border-white/10 bg-white/[0.03]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-white">{item.label}</p>
                    <p className={`font-mono text-xs ${item.passed ? "text-emerald-300" : "text-stone-500"}`}>
                      {item.passed ? `+${item.points}` : "MISSING"}
                    </p>
                  </div>
                  {!item.passed && (
                    <p className="mt-2 text-sm leading-6 text-stone-400">{item.fix}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="text-sm font-semibold text-white">Suggested structure</p>
            <pre className="mt-2 whitespace-pre-wrap rounded-2xl border border-white/10 bg-black/40 p-5 text-xs leading-6 text-stone-300">
              {rewrittenPrompt}
            </pre>
          </div>
          <button
            type="button"
            onClick={copyRewrite}
            className="rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-stone-950"
          >
            {copied ? "Copied" : "Copy structure"}
          </button>
        </div>
      </section>

      <section>
        <div className="max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-300">
            Evidence challenge
          </p>
          <h2 className="mt-3 text-4xl font-semibold text-white">
            Choose the next move in five debugging situations
          </h2>
          <p className="mt-4 text-sm leading-7 text-stone-400">
            Each answer explains why a tempting shortcut is weaker than an
            evidence-driven next step.
          </p>
        </div>

        <div className="mt-7 space-y-5">
          {challenges.map((challenge, challengeIndex) => (
            <article key={challenge.title} className="rounded-[28px] border border-white/10 bg-stone-950/70 p-6">
              <p className="font-mono text-xs text-stone-500">SCENARIO {challengeIndex + 1}</p>
              <h3 className="mt-3 text-2xl font-semibold text-white">{challenge.title}</h3>
              <p className="mt-3 text-sm leading-7 text-stone-300">{challenge.situation}</p>
              <div className="mt-5 grid gap-3">
                {challenge.choices.map((choice, choiceIndex) => {
                  const selected = answers[challengeIndex] === choiceIndex;
                  const resolved = answers[challengeIndex] !== undefined;
                  const correctChoice = choiceIndex === challenge.answer;
                  return (
                    <button
                      key={choice}
                      type="button"
                      onClick={() =>
                        setAnswers((current) => ({
                          ...current,
                          [challengeIndex]: choiceIndex,
                        }))
                      }
                      className={`rounded-2xl border px-5 py-4 text-left text-sm leading-6 transition ${
                        resolved && correctChoice
                          ? "border-emerald-300/35 bg-emerald-300/10 text-emerald-100"
                          : selected
                            ? "border-red-300/30 bg-red-300/10 text-red-100"
                            : "border-white/10 bg-white/[0.03] text-stone-300 hover:border-white/20"
                      }`}
                    >
                      {choice}
                    </button>
                  );
                })}
              </div>
              {answers[challengeIndex] !== undefined && (
                <p className="mt-5 rounded-2xl border border-white/10 bg-black/25 p-4 text-sm leading-7 text-stone-300">
                  <strong className="text-white">Why:</strong> {challenge.explanation}
                </p>
              )}
            </article>
          ))}
        </div>

        <div className="mt-6 rounded-[28px] border border-amber-300/15 bg-amber-300/[0.05] p-6">
          <p className="font-mono text-xs text-amber-200">PROGRESS {answered}/5</p>
          <p className="mt-2 text-2xl font-semibold text-white">
            {answered < 5
              ? `${correct} correct so far`
              : correct === 5
                ? "5/5: evidence-first debugger"
                : `${correct}/5: review the explanations and try again`}
          </p>
        </div>
      </section>
    </div>
  );
}
