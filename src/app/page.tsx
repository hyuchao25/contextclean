"use client";

import Link from "next/link";
import { useState } from "react";

const modeDescriptions: Record<
  string,
  { label: string; hint: string; focus: string }
> = {
  general: {
    label: "General",
    hint: "Mixed stack traces, terminal output, and generic debugging logs.",
    focus: "Keeps the likely root-cause lines while dropping repeated noise.",
  },
  node: {
    label: "Node.js",
    hint: "npm, pnpm, module resolution, server runtime, and backend traces.",
    focus: "Filters package manager chatter and internal module frames.",
  },
  python: {
    label: "Python",
    hint: "Tracebacks, virtualenv paths, pytest output, and runtime exceptions.",
    focus: "Preserves file paths and exception names that matter for diagnosis.",
  },
  react: {
    label: "React / Next.js",
    hint: "Hydration, rendering, build-time, and app-router-related errors.",
    focus: "Reduces framework internals so the component-level signal stands out.",
  },
  docker: {
    label: "Docker",
    hint: "Build steps, image pull logs, failed layers, and containerized installs.",
    focus: "Cuts layer-by-layer noise and keeps the failing command visible.",
  },
  ci: {
    label: "CI / GitHub Actions",
    hint: "Pipeline failures, test jobs, checkout/setup logs, and runner noise.",
    focus: "Leaves the failing test, command, or exit code easier to spot.",
  },
};

const guides = [
  {
    href: "/clean-stack-trace-for-chatgpt",
    title: "Clean Stack Trace for ChatGPT",
    description:
      "Why shorter stack traces help ChatGPT isolate the root cause faster.",
  },
  {
    href: "/reduce-debugging-context-for-ai",
    title: "Reduce Debugging Context for AI",
    description:
      "A practical guide to sending less noise and more signal to coding assistants.",
  },
  {
    href: "/clean-nodejs-error-log",
    title: "Clean Node.js Error Logs",
    description:
      "Trim Node.js internals, npm output, and dependency paths before sharing.",
  },
  {
    href: "/clean-python-traceback-for-ai",
    title: "Clean Python Tracebacks",
    description:
      "Keep the traceback structure while reducing virtualenv and framework noise.",
  },
  {
    href: "/clean-react-error-stack",
    title: "Clean React Error Stacks",
    description:
      "Shorten hydration and component stack output for clearer AI debugging prompts.",
  },
  {
    href: "/clean-nextjs-build-error",
    title: "Clean Next.js Build Errors",
    description:
      "Focus build failures around the actionable line instead of the surrounding churn.",
  },
];

const resourceArticles = [
  {
    href: "/resources",
    title: "Resource Library",
    description:
      "A central page that explains the workflows, guardrails, and best practices behind cleaner AI debugging prompts.",
  },
  {
    href: "/ai-debugging-checklist",
    title: "AI Debugging Checklist",
    description:
      "A practical checklist for what to keep, what to cut, and what to say before sending a bug to an AI tool.",
  },
  {
    href: "/safe-log-sharing-for-ai",
    title: "Safe Log Sharing for AI",
    description:
      "A guide to reducing privacy risk when logs may contain secrets, personal data, or internal implementation details.",
  },
  {
    href: "/how-to-read-build-errors-before-asking-ai",
    title: "Read Build Errors First",
    description:
      "A long-form explainer on how developers should inspect build failures before outsourcing the first read to a model.",
  },
  {
    href: "/debugging-prompt-examples",
    title: "Prompt Examples",
    description:
      "Concrete prompt examples for runtime errors, build failures, and test issues.",
  },
  {
    href: "/before-after-log-examples",
    title: "Before and After Examples",
    description:
      "Side-by-side log transformations that show what useful compression actually looks like.",
  },
];

const editorialUpdates = [
  {
    href: "/editorial-updates",
    date: "May 2026",
    title: "Expanded guide pages across Node.js, Python, React, CI, Docker, and Cursor",
    description:
      "Major product guides were rewritten into longer, more structured help content with examples and internal cross-links.",
  },
  {
    href: "/resources",
    date: "May 2026",
    title: "Launched the resources library",
    description:
      "The site now includes a dedicated content hub for AI debugging workflows, prompt hygiene, and log-sharing safety.",
  },
  {
    href: "/before-after-log-examples",
    date: "May 2026",
    title: "Added before-and-after log examples",
    description:
      "Realistic examples now show how a large noisy log can be reduced to a smaller prompt without losing the core failure signal.",
  },
];

const trustPoints = [
  "Runs in the browser with no required account.",
  "Useful for solo developers, teams, tutorials, and support threads.",
  "Designed to complement debugging, not replace it.",
];

const qualitySignals = [
  {
    title: "Readable before-and-after output",
    body: "The tool is only useful if the cleaned version is easier for a human to review before it reaches an AI model.",
  },
  {
    title: "Clear boundaries",
    body: "ContextClean does not promise correctness, security review, or secret redaction. The site says that explicitly.",
  },
  {
    title: "Practical documentation",
    body: "The product pages, guide pages, and legal pages explain how the tool works, where it helps, and where it should not be trusted alone.",
  },
];

const useCases = [
  "Preparing a bug report for ChatGPT, Claude, Cursor, or Codex.",
  "Reducing noise before sharing a failing CI job with a teammate.",
  "Turning a raw build failure into a shorter AI prompt.",
  "Removing repeated stack frames before saving a debugging note.",
];

const workflowSteps = [
  {
    title: "1. Pick the closest mode",
    body: "Choose the mode that matches the log type so the cleaner can remove the most common category-specific noise.",
  },
  {
    title: "2. Review the cleaned result",
    body: "Do not assume every preserved line is useful or every removed line is safe to drop. Scan it like an engineer, not a copy machine.",
  },
  {
    title: "3. Send concise context",
    body: "Once the output is smaller, pair it with a short sentence about what command failed, what changed, and what behavior you expected.",
  },
];

const comparisonRows = [
  {
    label: "Raw pasted log",
    signal: "Low",
    readability: "Messy",
    outcome: "AI wastes attention on dependency noise and setup chatter.",
  },
  {
    label: "Cleaned log only",
    signal: "Medium",
    readability: "Better",
    outcome: "Useful when the failure is obvious and the root cause is already in the trace.",
  },
  {
    label: "Cleaned log plus context",
    signal: "High",
    readability: "Strong",
    outcome: "Best results: short error, expected behavior, recent change, and failing command.",
  },
];

const reviewChecklist = [
  "Does the page explain what the tool does in human language, not just keywords?",
  "Is there enough supporting content to show real use cases and limits?",
  "Can a reviewer find who to contact, how privacy is handled, and what the product is not claiming to do?",
  "Are there multiple useful internal pages instead of one thin utility screen?",
];

const faqItems = [
  {
    question: "Does ContextClean upload my pasted logs?",
    answer:
      "The cleaning workflow is designed to run in the browser. ContextClean does not require an account or a manual upload flow for pasted text.",
  },
  {
    question: "Can this remove secrets automatically?",
    answer:
      "No. You should still review the text and remove credentials, private data, and confidential code before sharing it anywhere.",
  },
  {
    question: "Who is this tool built for?",
    answer:
      "It is aimed at developers who already use AI assistants for debugging and want a faster way to prepare higher-signal prompts.",
  },
  {
    question: "Will a cleaned log always produce a better AI answer?",
    answer:
      "Not always. Better context helps, but the result still depends on the original bug, the missing surrounding facts, and the quality of the prompt.",
  },
];

export default function Home() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [mode, setMode] = useState("general");
  const inputLength = input.length;
  const outputLength = output.length;
  const reduction =
    inputLength > 0 && outputLength > 0
      ? Math.round(((inputLength - outputLength) / inputLength) * 100)
      : 0;

  function cleanStackTrace() {
    const baseNoisePatterns = [
      "node_modules",
      ".next",
      "webpack",
      "turbopack",
      "internal/modules",
      "at process.",
      "at async",
      "npm notice",
      "npm warn",
      "package-lock.json",
      "next-development.log",
      "compiled successfully",
      "ready in",
    ];

    const modeNoisePatterns: Record<string, string[]> = {
      general: [],
      node: [
        "node:",
        "node_modules",
        "internal/modules",
        "npm ",
        "pnpm ",
        "yarn ",
      ],
      python: ["site-packages", "venv", "__pycache__", "pytest", "traceback"],
      react: ["react-dom", "hydration", "webpack", ".next", "next/dist"],
      docker: [
        "step ",
        "pulling fs layer",
        "download complete",
        "extracting",
        "docker build",
      ],
      ci: [
        "github actions",
        "runner",
        "checkout",
        "setup-",
        "cache restored",
        "npm install",
      ],
    };

    const noisePatterns = [
      ...baseNoisePatterns,
      ...(modeNoisePatterns[mode] || []),
    ];

    const importantPatterns = [
      "error",
      "exception",
      "failed",
      "cannot",
      "missing",
      "not found",
      "syntaxerror",
      "typeerror",
      "referenceerror",
      "traceback",
      "caused by",
      "line ",
    ];

    const lines = input.split("\n");

    const cleanedLines = lines.filter((line) => {
      const text = line.trim();
      const lower = text.toLowerCase();

      if (!text) return false;

      const isImportant = importantPatterns.some((pattern) =>
        lower.includes(pattern)
      );

      const isNoise = noisePatterns.some((pattern) => lower.includes(pattern));

      return isImportant || !isNoise;
    });

    const uniqueLines = Array.from(new Set(cleanedLines));

    setOutput(uniqueLines.join("\n"));
  }

  function loadExample() {
    const examples: Record<string, string> = {
      general: `Error: Cannot find module 'next'
    at Object.<anonymous> (C:\\project\\app\\page.tsx:10:5)
    at Module._compile (node:internal/modules/cjs/loader:1254:14)
    at C:\\project\\node_modules\\next\\dist\\server.js:20:1
TypeError: Cannot read properties of undefined
    at handler (C:\\project\\src\\api\\user.ts:25:12)`,

      node: `Error: Cannot find module 'express'
    at Module._resolveFilename (node:internal/modules/cjs/loader:1144:15)
    at Module._load (node:internal/modules/cjs/loader:985:27)
    at Object.<anonymous> (C:\\app\\server.js:3:17)
    at C:\\app\\node_modules\\express\\index.js:18:1
npm warn deprecated package found`,

      python: `Traceback (most recent call last):
  File "/app/main.py", line 12, in <module>
    run()
  File "/app/main.py", line 8, in run
    print(user["name"])
KeyError: 'name'
  File "/app/venv/lib/python3.11/site-packages/flask/app.py", line 200, in __call__
pytest warning: cached data ignored`,

      react: `Error: Hydration failed because the initial UI does not match.
    at div
    at Header (src/components/Header.tsx:15:3)
    at App
    at react-dom/client
    at webpack-internal:///(app-pages-browser)/./node_modules/next/dist/client/app-index.js
Warning: Text content did not match.`,

      docker: `Step 1/8 : FROM node:20
 ---> Using cache
Step 2/8 : COPY package.json .
Step 3/8 : RUN npm install
npm warn deprecated package
Step 4/8 : RUN npm run build
Error: Cannot find module 'next'
The command '/bin/sh -c npm run build' returned a non-zero code: 1`,

      ci: `Run npm install
npm warn deprecated package
Run npm test
FAIL src/user.test.ts
TypeError: Cannot read properties of undefined
    at src/user.ts:18:10
Error: Process completed with exit code 1.
Post job cleanup.
Cache restored successfully.`,
    };

    setInput(examples[mode] || examples.general);
    setOutput("");
  }

  function clearAll() {
    setInput("");
    setOutput("");
  }

  function downloadResult() {
    const text = output || input;
    const blob = new Blob([text], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = "contextclean-result.txt";
    link.click();

    URL.revokeObjectURL(url);
  }

  async function copyPromptForAI() {
    const cleanedText = output || input;
    const prompt = `Please debug this error log. Focus on the root cause and suggest the minimal fix:\n\n${cleanedText}`;
    await navigator.clipboard.writeText(prompt);
  }

  async function copyOutput() {
    await navigator.clipboard.writeText(output || input);
  }

  const selectedMode = modeDescriptions[mode];

  return (
    <main className="min-h-screen px-4 py-6 text-stone-100 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <header className="mb-8 flex flex-col gap-4 rounded-[28px] border border-white/10 bg-white/5 p-5 backdrop-blur md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-300/80">
              ContextClean
            </p>
            <p className="mt-2 max-w-2xl text-sm text-stone-300">
              A focused utility for cleaning noisy logs and preparing clearer AI
              debugging context. Last content review: May 25, 2026.
            </p>
          </div>
          <nav className="flex flex-wrap gap-3 text-sm text-stone-300">
            <Link href="/about" className="rounded-full border border-white/10 px-4 py-2 hover:border-emerald-400/60 hover:text-white">
              About
            </Link>
            <Link href="/contact" className="rounded-full border border-white/10 px-4 py-2 hover:border-emerald-400/60 hover:text-white">
              Contact
            </Link>
            <Link href="/privacy" className="rounded-full border border-white/10 px-4 py-2 hover:border-emerald-400/60 hover:text-white">
              Privacy
            </Link>
            <Link href="/terms" className="rounded-full border border-white/10 px-4 py-2 hover:border-emerald-400/60 hover:text-white">
              Terms
            </Link>
          </nav>
        </header>

        <section className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[32px] border border-white/10 bg-[linear-gradient(135deg,rgba(16,185,129,0.18),rgba(12,10,9,0.2)_42%,rgba(245,158,11,0.12))] p-8 shadow-2xl shadow-black/30">
            <p className="mb-4 inline-flex rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-200">
              Cleaner prompts, clearer debugging
            </p>
            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Clean logs and stack traces before sending them to AI.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-200/88">
              ContextClean helps developers strip low-signal lines from stack
              traces, build failures, and CI output so the actual error is easier
              to read, review, and paste into ChatGPT, Claude, Cursor, Codex, or
              another coding assistant.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-black/25 p-4">
                <p className="text-sm font-semibold text-white">Browser-first</p>
                <p className="mt-2 text-sm leading-6 text-stone-300">
                  The core cleaning flow works directly in the page and does not
                  require a user account.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/25 p-4">
                <p className="text-sm font-semibold text-white">AI-oriented</p>
                <p className="mt-2 text-sm leading-6 text-stone-300">
                  Built for people who already debug with AI and need better input,
                  not more filler.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/25 p-4">
                <p className="text-sm font-semibold text-white">Reviewable output</p>
                <p className="mt-2 text-sm leading-6 text-stone-300">
                  The cleaned result is meant to be checked by a human before it is
                  shared with a model or teammate.
                </p>
              </div>
            </div>
          </div>

          <aside className="grid gap-4">
            <div className="rounded-[28px] border border-white/10 bg-stone-950/80 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-300/80">
                Current mode
              </p>
              <h2 className="mt-4 text-2xl font-semibold text-white">
                {selectedMode.label}
              </h2>
              <p className="mt-3 text-sm leading-6 text-stone-300">
                {selectedMode.hint}
              </p>
              <div className="mt-5 rounded-2xl border border-amber-400/20 bg-amber-300/8 p-4">
                <p className="text-sm font-medium text-amber-100">Focus</p>
                <p className="mt-2 text-sm leading-6 text-stone-300">
                  {selectedMode.focus}
                </p>
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-stone-950/80 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300/80">
                Why this page is longer now
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-stone-300">
                {qualitySignals.map((item) => (
                  <li key={item.title} className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                    <p className="font-medium text-white">{item.title}</p>
                    <p className="mt-2">{item.body}</p>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </section>

        <section className="mt-8 rounded-[32px] border border-white/10 bg-stone-950/75 p-6 shadow-2xl shadow-black/20 sm:p-8">
          <div className="grid gap-6 xl:grid-cols-[1fr_320px]">
            <div>
              <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300/80">
                    Log cleaner
                  </p>
                  <h2 className="mt-3 text-3xl font-semibold text-white">
                    Paste the noisy version. Keep the useful part.
                  </h2>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-stone-300">
                  Tip: review the output before copying it into any AI tool.
                </div>
              </div>

              <div className="mt-6 grid gap-4 lg:grid-cols-[280px_1fr]">
                <div className="space-y-4">
                  <label className="block text-sm font-semibold text-stone-200">
                    Cleaning mode
                  </label>
                  <select
                    value={mode}
                    onChange={(e) => setMode(e.target.value)}
                    className="w-full rounded-2xl border border-white/10 bg-stone-900 px-4 py-3 text-stone-100 outline-none transition focus:border-emerald-400"
                  >
                    <option value="general">General</option>
                    <option value="node">Node.js</option>
                    <option value="python">Python</option>
                    <option value="react">React / Next.js</option>
                    <option value="docker">Docker</option>
                    <option value="ci">CI / GitHub Actions</option>
                  </select>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm text-stone-300">
                    <p className="font-medium text-white">{selectedMode.label}</p>
                    <p className="mt-2 leading-6">{selectedMode.hint}</p>
                  </div>

                  <div className="rounded-2xl border border-emerald-400/15 bg-emerald-300/8 p-4 text-sm text-stone-200">
                    <p className="font-medium text-emerald-100">Privacy note</p>
                    <p className="mt-2 leading-6">
                      Do not paste passwords, tokens, customer data, internal keys,
                      or private source code that should not leave your machine.
                    </p>
                  </div>
                </div>

                <div>
                  <textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Paste your stack trace, traceback, build log, or CI failure here..."
                    className="h-72 w-full rounded-3xl border border-white/10 bg-black/40 p-4 font-mono text-sm leading-6 text-stone-100 outline-none transition focus:border-emerald-400"
                  />
                </div>
              </div>

              <div className="mt-4 grid gap-3 text-sm text-stone-300 md:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  Input characters: <span className="font-semibold text-white">{inputLength}</span>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  Output characters: <span className="font-semibold text-white">{outputLength}</span>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  Reduction: <span className="font-semibold text-white">{reduction}%</span>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                <button
                  onClick={cleanStackTrace}
                  className="rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-stone-950 transition hover:bg-emerald-300"
                >
                  Clean Stack Trace
                </button>
                <button
                  onClick={loadExample}
                  className="rounded-full border border-white/12 px-6 py-3 text-sm font-semibold text-white transition hover:border-amber-300/60 hover:bg-amber-300/10"
                >
                  Load Example
                </button>
                <button
                  onClick={copyOutput}
                  className="rounded-full border border-white/12 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/25 hover:bg-white/[0.05]"
                >
                  Copy Result
                </button>
                <button
                  onClick={copyPromptForAI}
                  className="rounded-full border border-white/12 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/25 hover:bg-white/[0.05]"
                >
                  Copy Prompt for AI
                </button>
                <button
                  onClick={downloadResult}
                  className="rounded-full border border-white/12 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/25 hover:bg-white/[0.05]"
                >
                  Download Result
                </button>
                <button
                  onClick={clearAll}
                  className="rounded-full border border-white/12 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/25 hover:bg-white/[0.05]"
                >
                  Clear
                </button>
              </div>

              <textarea
                value={output}
                readOnly
                placeholder="The cleaned result appears here."
                className="mt-5 h-72 w-full rounded-3xl border border-white/10 bg-black/55 p-4 font-mono text-sm leading-6 text-stone-100 outline-none"
              />

              {output && (
                <div className="mt-4 rounded-3xl border border-emerald-400/20 bg-emerald-300/10 p-5 text-sm text-stone-200">
                  <p className="font-semibold text-emerald-100">
                    Cleaned successfully
                  </p>
                  <p className="mt-2 leading-6">
                    The output above removes many low-signal lines and repeated
                    entries, but you should still verify that the remaining context
                    is accurate before sharing it.
                  </p>
                </div>
              )}
            </div>

            <aside className="space-y-4">
              <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-5">
                <p className="text-sm font-semibold text-white">Common use cases</p>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-stone-300">
                  {useCases.map((item) => (
                    <li key={item} className="rounded-2xl border border-white/8 bg-black/20 p-3">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-5">
                <p className="text-sm font-semibold text-white">What reviewers should see</p>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-stone-300">
                  {trustPoints.map((item) => (
                    <li key={item} className="border-l border-emerald-300/40 pl-4">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-3">
          {workflowSteps.map((step) => (
            <article
              key={step.title}
              className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6"
            >
              <h2 className="text-xl font-semibold text-white">{step.title}</h2>
              <p className="mt-3 text-sm leading-7 text-stone-300">{step.body}</p>
            </article>
          ))}
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <article className="rounded-[32px] border border-white/10 bg-stone-950/80 p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300/80">
              Better prompts
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-white">
              Good AI debugging input has three layers.
            </h2>
            <div className="mt-6 overflow-hidden rounded-[28px] border border-white/10">
              <div className="grid grid-cols-4 bg-white/[0.04] text-sm font-medium text-stone-200">
                <div className="p-4">Prompt shape</div>
                <div className="p-4">Signal</div>
                <div className="p-4">Readability</div>
                <div className="p-4">Typical outcome</div>
              </div>
              {comparisonRows.map((row) => (
                <div
                  key={row.label}
                  className="grid grid-cols-4 border-t border-white/10 text-sm text-stone-300"
                >
                  <div className="p-4 font-medium text-white">{row.label}</div>
                  <div className="p-4">{row.signal}</div>
                  <div className="p-4">{row.readability}</div>
                  <div className="p-4 leading-6">{row.outcome}</div>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-[32px] border border-white/10 bg-stone-950/80 p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-300/80">
              Site quality
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-white">
              What a reviewer should be able to verify quickly
            </h2>
            <div className="mt-5 space-y-4">
              {reviewChecklist.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm leading-6 text-stone-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </article>
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <article className="rounded-[32px] border border-white/10 bg-stone-950/80 p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-300/80">
              Why cleaner logs help
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-white">
              AI tools are sensitive to context quality.
            </h2>
            <div className="mt-5 space-y-4 text-sm leading-7 text-stone-300">
              <p>
                Raw logs often bury the real failure inside dependency internals,
                package manager output, repeated stack frames, runner setup logs, and
                framework noise. The more unrelated text you include, the more likely
                the useful line gets diluted.
              </p>
              <p>
                ContextClean narrows that prompt surface. The goal is not to make a
                log look nicer. The goal is to make the core issue more obvious for
                both the developer reading it and the model receiving it.
              </p>
              <p>
                This is especially useful for build failures, CI jobs, hydration
                mismatches, Python tracebacks, TypeScript compiler errors, and
                container build logs where the actionable line is often surrounded by
                pages of churn.
              </p>
            </div>
          </article>

          <article className="rounded-[32px] border border-white/10 bg-stone-950/80 p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300/80">
              Boundaries
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-white">
              What ContextClean does not do
            </h2>
            <div className="mt-5 space-y-4 text-sm leading-7 text-stone-300">
              <p>
                It does not guarantee that every important line is preserved. It does
                not validate an AI answer. It does not replace understanding the
                failing command, the recent code change, or the execution environment.
              </p>
              <p>
                It also does not automatically solve privacy or compliance concerns.
                If your log includes secrets, customer data, or internal details that
                should not be shared, you still need to remove them manually.
              </p>
              <p>
                That boundary matters. A useful developer tool should be specific
                about its value and equally specific about its limits.
              </p>
            </div>
          </article>
        </section>

        <section className="mt-8 rounded-[32px] border border-white/10 bg-stone-950/80 p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300/80">
            Example
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-white">
            Before and after a typical failure log
          </h2>
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            <div>
              <p className="mb-3 text-sm font-medium text-stone-200">Before</p>
              <pre className="overflow-x-auto rounded-3xl border border-white/10 bg-black/45 p-4 text-xs leading-6 text-stone-400">
{`Error: Cannot find module 'next'
    at Object.<anonymous> (C:\\project\\app\\page.tsx:10:5)
    at C:\\project\\node_modules\\next\\dist\\server.js:20:1
    at async Promise.all
    at processTicksAndRejections`}
              </pre>
            </div>
            <div>
              <p className="mb-3 text-sm font-medium text-stone-200">After</p>
              <pre className="overflow-x-auto rounded-3xl border border-emerald-400/20 bg-black/45 p-4 text-xs leading-6 text-emerald-200">
{`Error: Cannot find module 'next'
    at Object.<anonymous> (C:\\project\\app\\page.tsx:10:5)`}
              </pre>
            </div>
          </div>
        </section>

        <section className="mt-8 rounded-[32px] border border-white/10 bg-stone-950/80 p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-300/80">
            Supported log types
          </p>
          <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {[
              "JavaScript stack traces",
              "Node.js runtime errors",
              "Python tracebacks",
              "React component errors",
              "Next.js build failures",
              "TypeScript compiler output",
              "Docker build logs",
              "CI and GitHub Actions logs",
              "General debugging terminal output",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm text-stone-300"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-[32px] border border-white/10 bg-stone-950/80 p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300/80">
                Guides
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-white">
                Read the use-case pages, not just the tool.
              </h2>
            </div>
            <p className="max-w-2xl text-sm leading-6 text-stone-300">
              The supporting guide pages explain when a shorter log helps, what to
              preserve, and how to phrase better AI debugging prompts.
            </p>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {guides.map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5 transition hover:border-emerald-400/40 hover:bg-emerald-300/[0.06]"
              >
                <h3 className="text-lg font-semibold text-white">{guide.title}</h3>
                <p className="mt-3 text-sm leading-6 text-stone-300">
                  {guide.description}
                </p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-[32px] border border-white/10 bg-[linear-gradient(135deg,rgba(245,158,11,0.10),rgba(12,10,9,0.85),rgba(16,185,129,0.08))] p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-300/80">
                Editorial content
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-white">
                More than a cleaner: a small resource library for AI debugging.
              </h2>
            </div>
            <p className="max-w-2xl text-sm leading-6 text-stone-300">
              These pages are intentionally longer and more educational. They are
              there to help the user make better decisions before and after using the
              tool, and to make the site feel like a real product with supporting
              knowledge rather than a single thin utility page.
            </p>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {resourceArticles.map((article) => (
              <Link
                key={article.href}
                href={article.href}
                className="rounded-[26px] border border-white/10 bg-black/20 p-5 transition hover:border-amber-300/40 hover:bg-white/[0.05]"
              >
                <h3 className="text-xl font-semibold text-white">{article.title}</h3>
                <p className="mt-3 text-sm leading-6 text-stone-300">
                  {article.description}
                </p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-[32px] border border-white/10 bg-stone-950/80 p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300/80">
                Latest updates
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-white">
                Recent editorial and product updates on the site
              </h2>
            </div>
            <Link
              href="/editorial-updates"
              className="text-sm font-medium text-emerald-300 hover:text-emerald-200"
            >
              View update archive
            </Link>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {editorialUpdates.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-[26px] border border-white/10 bg-white/[0.03] p-5 transition hover:border-emerald-400/40 hover:bg-emerald-300/[0.05]"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-200/80">
                  {item.date}
                </p>
                <h3 className="mt-3 text-xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-stone-300">
                  {item.description}
                </p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-[1fr_0.95fr]">
          <article className="rounded-[32px] border border-white/10 bg-stone-950/80 p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300/80">
              Product principles
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-white">
              The site is intentionally narrow in scope.
            </h2>
            <div className="mt-5 space-y-4 text-sm leading-7 text-stone-300">
              <p>
                ContextClean is not trying to be an IDE, a debugger, a secret scanner,
                or an LLM chat product. It is a small utility that improves one step
                in a modern debugging workflow: preparing cleaner context.
              </p>
              <p>
                That narrow scope is deliberate. Developers do not need another vague
                AI wrapper. They need tools that solve a specific job well and explain
                the tradeoffs honestly.
              </p>
              <p>
                If you are evaluating the site for quality, the supporting pages on
                this domain describe its purpose, boundaries, contact path, and
                privacy assumptions in plain language.
              </p>
            </div>
          </article>

          <article className="rounded-[32px] border border-white/10 bg-stone-950/80 p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-300/80">
              FAQ
            </p>
            <div className="mt-4 space-y-5">
              {faqItems.map((item) => (
                <div key={item.question} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <h3 className="text-base font-semibold text-white">
                    {item.question}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-stone-300">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </article>
        </section>

        <footer className="mt-8 rounded-[28px] border border-white/10 bg-white/[0.03] p-6 text-sm text-stone-400">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="max-w-3xl leading-6">
              ContextClean is an independent developer utility focused on cleaner
              debugging context for AI workflows. Read the supporting pages before
              sharing sensitive information or relying on cleaned output alone.
            </p>
            <div className="flex flex-wrap gap-4 text-stone-300">
              <Link href="/about" className="hover:text-white">
                About
              </Link>
              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>
              <Link href="/privacy" className="hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white">
                Terms of Use
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
