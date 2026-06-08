"use client";

import { useMemo, useState } from "react";

type Mode = "general" | "node" | "python" | "react" | "docker" | "ci";

const modes: Record<Mode, { label: string; noise: string[] }> = {
  general: {
    label: "General",
    noise: ["compiled successfully", "ready in", "npm notice"],
  },
  node: {
    label: "Node.js",
    noise: ["node:internal", "internal/modules", "npm warn", "pnpm warn"],
  },
  python: {
    label: "Python",
    noise: ["site-packages", "__pycache__", "pytest cache"],
  },
  react: {
    label: "React / Next.js",
    noise: ["react-dom", "webpack-internal", "next/dist", ".next/"],
  },
  docker: {
    label: "Docker",
    noise: ["pulling fs layer", "download complete", "extracting", "using cache"],
  },
  ci: {
    label: "CI",
    noise: ["post job cleanup", "cache restored", "runner image", "checkout"],
  },
};

const examples: Record<Mode, string> = {
  general: `Starting development server
Compiled successfully
Error: Cannot find module 'next'
    at Object.<anonymous> (C:\\project\\app\\page.tsx:10:5)
    at C:\\project\\node_modules\\next\\dist\\server.js:20:1
API_TOKEN=sk-example-secret-value
Error: Cannot find module 'next'`,
  node: `npm warn deprecated inflight@1.0.6
Error: Cannot find module 'express'
    at Module._resolveFilename (node:internal/modules/cjs/loader:1144:15)
    at Object.<anonymous> (C:\\app\\server.js:3:17)
    at C:\\app\\node_modules\\express\\index.js:18:1`,
  python: `Traceback (most recent call last):
  File "/app/main.py", line 12, in <module>
    run()
  File "/app/main.py", line 8, in run
    print(user["name"])
KeyError: 'name'
  File "/app/venv/lib/python3.11/site-packages/flask/app.py", line 200, in __call__`,
  react: `Warning: Text content did not match.
Error: Hydration failed because the initial UI does not match.
    at Header (src/components/Header.tsx:15:3)
    at react-dom/client
    at webpack-internal:///(app-pages-browser)/./node_modules/next/dist/client/app-index.js`,
  docker: `Step 1/8 : FROM node:20
 ---> Using cache
Step 4/8 : RUN npm run build
Error: Cannot find module 'next'
The command '/bin/sh -c npm run build' returned a non-zero code: 1
Download complete`,
  ci: `Run npm test
FAIL src/user.test.ts
TypeError: Cannot read properties of undefined
    at src/user.ts:18:10
Error: Process completed with exit code 1.
Post job cleanup.
Cache restored successfully.`,
};

const importantTerms = [
  "error",
  "exception",
  "failed",
  "failure",
  "cannot",
  "not found",
  "syntaxerror",
  "typeerror",
  "referenceerror",
  "keyerror",
  "traceback",
  "caused by",
  "exit code",
  "warning:",
];

const secretPatterns = [
  { label: "Bearer token", pattern: /Bearer\s+[A-Za-z0-9._~+/-]+=*/gi },
  { label: "JWT", pattern: /eyJ[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+/g },
  { label: "AWS access key", pattern: /AKIA[0-9A-Z]{16}/g },
  {
    label: "Credential assignment",
    pattern: /\b(api[_-]?key|token|secret|password|passwd)\s*[:=]\s*[^\s,;]+/gi,
  },
];

function redactSecrets(text: string) {
  return secretPatterns.reduce(
    (current, item) => current.replace(item.pattern, `${item.label}=[REDACTED]`),
    text
  );
}

export default function CleanerWorkbench() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [mode, setMode] = useState<Mode>("general");
  const [removeNoise, setRemoveNoise] = useState(true);
  const [removeDuplicates, setRemoveDuplicates] = useState(true);
  const [redact, setRedact] = useState(true);
  const [removedLines, setRemovedLines] = useState(0);
  const [copied, setCopied] = useState(false);

  const inputLines = input ? input.split(/\r?\n/).length : 0;
  const outputLines = output ? output.split(/\r?\n/).length : 0;
  const sensitiveMatches = useMemo(
    () =>
      secretPatterns.reduce((count, item) => {
        const flags = item.pattern.flags.includes("g")
          ? item.pattern.flags
          : `${item.pattern.flags}g`;
        return count + (input.match(new RegExp(item.pattern.source, flags))?.length ?? 0);
      }, 0),
    [input]
  );

  function clean() {
    const seen = new Set<string>();
    let removed = 0;

    const cleaned = input.split(/\r?\n/).filter((line) => {
      const trimmed = line.trim();
      const lower = trimmed.toLowerCase();

      if (!trimmed) {
        removed += 1;
        return false;
      }

      const important = importantTerms.some((term) => lower.includes(term));
      const noise = modes[mode].noise.some((term) => lower.includes(term));

      if (removeNoise && noise && !important) {
        removed += 1;
        return false;
      }

      if (removeDuplicates && seen.has(trimmed)) {
        removed += 1;
        return false;
      }

      seen.add(trimmed);
      return true;
    });

    const result = cleaned.join("\n");
    setOutput(redact ? redactSecrets(result) : result);
    setRemovedLines(removed);
  }

  async function copy(text: string) {
    if (!text) return;
    await navigator.clipboard.writeText(text);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  function download() {
    if (!output) return;
    const url = URL.createObjectURL(new Blob([output], { type: "text/plain" }));
    const link = document.createElement("a");
    link.href = url;
    link.download = "contextclean-output.txt";
    link.click();
    URL.revokeObjectURL(url);
  }

  return (
    <section id="cleaner" className="rounded-[32px] border border-white/10 bg-stone-950/80 p-5 shadow-2xl shadow-black/30 sm:p-8">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300">
            Browser workbench
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white">
            Clean, inspect, and redact a log locally
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-stone-300">
            Your text is processed by JavaScript in this browser tab. It is not sent
            to a ContextClean server by this tool.
          </p>
        </div>
        <button
          type="button"
          onClick={() => {
            setInput(examples[mode]);
            setOutput("");
          }}
          className="rounded-full border border-amber-300/30 px-5 py-2.5 text-sm font-semibold text-amber-100 hover:bg-amber-300/10"
        >
          Load {modes[mode].label} example
        </button>
      </div>

      <div className="mt-7 grid gap-5 xl:grid-cols-[230px_1fr_1fr]">
        <aside className="space-y-4">
          <label className="block text-sm font-semibold text-white">
            Log type
            <select
              value={mode}
              onChange={(event) => setMode(event.target.value as Mode)}
              className="mt-2 w-full rounded-2xl border border-white/10 bg-stone-900 px-4 py-3 text-stone-100 outline-none focus:border-emerald-400"
            >
              {Object.entries(modes).map(([value, item]) => (
                <option key={value} value={value}>{item.label}</option>
              ))}
            </select>
          </label>

          <div className="space-y-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            {[
              ["Remove known noise", removeNoise, setRemoveNoise],
              ["Remove duplicate lines", removeDuplicates, setRemoveDuplicates],
              ["Redact common secrets", redact, setRedact],
            ].map(([label, checked, setter]) => (
              <label key={label as string} className="flex cursor-pointer items-start gap-3 text-sm text-stone-300">
                <input
                  type="checkbox"
                  checked={checked as boolean}
                  onChange={(event) => (setter as (value: boolean) => void)(event.target.checked)}
                  className="mt-1 accent-emerald-400"
                />
                <span>{label as string}</span>
              </label>
            ))}
          </div>

          <div className={`rounded-2xl border p-4 text-sm ${
            sensitiveMatches > 0
              ? "border-amber-300/25 bg-amber-300/10 text-amber-100"
              : "border-white/10 bg-white/[0.03] text-stone-300"
          }`}>
            <p className="font-semibold">
              {sensitiveMatches > 0
                ? `${sensitiveMatches} possible secret${sensitiveMatches === 1 ? "" : "s"} detected`
                : "No common secret pattern detected"}
            </p>
            <p className="mt-2 text-xs leading-5 opacity-80">
              Detection is a safety aid, not a guarantee. Review the text manually.
            </p>
          </div>
        </aside>

        <label className="block">
          <span className="text-sm font-semibold text-white">Raw log</span>
          <textarea
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="Paste a stack trace, build error, traceback, or CI failure..."
            spellCheck={false}
            className="mt-2 h-[420px] w-full resize-y rounded-3xl border border-white/10 bg-black/45 p-4 font-mono text-sm leading-6 text-stone-100 outline-none focus:border-emerald-400"
          />
        </label>

        <label className="block">
          <span className="text-sm font-semibold text-white">Cleaned output</span>
          <textarea
            value={output}
            readOnly
            placeholder="Run the cleaner to generate a smaller, reviewable result."
            spellCheck={false}
            className="mt-2 h-[420px] w-full resize-y rounded-3xl border border-emerald-300/15 bg-emerald-950/10 p-4 font-mono text-sm leading-6 text-stone-100 outline-none"
          />
        </label>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-4">
        {[
          ["Input", `${inputLines} lines`],
          ["Output", `${outputLines} lines`],
          ["Removed", `${removedLines} lines`],
          ["Reduction", inputLines ? `${Math.max(0, Math.round((removedLines / inputLines) * 100))}%` : "0%"],
        ].map(([label, value]) => (
          <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <p className="text-xs uppercase tracking-[0.18em] text-stone-500">{label}</p>
            <p className="mt-2 font-semibold text-white">{value}</p>
          </div>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={clean}
          disabled={!input.trim()}
          className="rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-stone-950 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Clean log
        </button>
        <button type="button" onClick={() => copy(output)} disabled={!output} className="rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white disabled:opacity-40">
          {copied ? "Copied" : "Copy output"}
        </button>
        <button type="button" onClick={() => copy(`Please identify the likely root cause, explain the next diagnostic step, and suggest the smallest safe fix.\n\n${output}`)} disabled={!output} className="rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white disabled:opacity-40">
          Copy AI prompt
        </button>
        <button type="button" onClick={download} disabled={!output} className="rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white disabled:opacity-40">
          Download
        </button>
        <button
          type="button"
          onClick={() => {
            setInput("");
            setOutput("");
            setRemovedLines(0);
          }}
          className="rounded-full px-5 py-3 text-sm font-semibold text-stone-400 hover:text-white"
        >
          Clear
        </button>
      </div>
    </section>
  );
}
