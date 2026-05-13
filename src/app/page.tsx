"use client";

import { useState } from "react";

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
      node: ["node:", "node_modules", "internal/modules", "npm ", "pnpm ", "yarn "],
      python: ["site-packages", "venv", "__pycache__", "pytest", "traceback"],
      react: ["react-dom", "hydration", "webpack", ".next", "next/dist"],
      docker: ["step ", "pulling fs layer", "download complete", "extracting", "docker build"],
      ci: ["github actions", "runner", "checkout", "setup-", "cache restored", "npm install"],
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

      const isNoise = noisePatterns.some((pattern) =>
        lower.includes(pattern)
      );

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

  return (
    <main className="min-h-screen bg-black px-6 py-12 text-white">
      <section className="mx-auto max-w-5xl">
        <h1 className="mb-4 text-4xl font-bold md:text-6xl">
          Clean Logs & Stack Traces for AI
        </h1>

        <p className="mb-8 text-lg text-zinc-400">
          Paste a noisy error log, stack trace, build failure, or CI output.
          ContextClean removes low-signal lines so AI coding tools can focus on
          the real error.
        </p>
        <div className="mb-6 rounded-xl border border-zinc-800 bg-zinc-950 p-4 text-sm text-zinc-400">
          <strong className="text-zinc-200">Privacy note:</strong> ContextClean runs
          in your browser. Do not paste passwords, API keys, tokens, customer data,
          or other sensitive secrets into any online tool.
        </div>
        <section className="mb-6 grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4">
            <h2 className="mb-2 font-bold text-white">For AI debugging</h2>
            <p className="text-sm text-zinc-400">
              Prepare cleaner context before asking ChatGPT, Claude, Cursor, or Codex.
            </p>
          </div>

          <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4">
            <h2 className="mb-2 font-bold text-white">For build failures</h2>
            <p className="text-sm text-zinc-400">
              Shorten noisy Next.js, Docker, CI, Node.js, and TypeScript errors.
            </p>
          </div>

          <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4">
            <h2 className="mb-2 font-bold text-white">For safer sharing</h2>
            <p className="text-sm text-zinc-400">
              Remove repeated noise before sharing logs with teammates or AI tools.
            </p>
          </div>
        </section>
        <div className="mb-4">
          <label className="mb-2 block text-sm font-bold text-zinc-300">
            Cleaning mode
          </label>
          <select
            value={mode}
            onChange={(e) => setMode(e.target.value)}
            className="w-full rounded-xl border border-zinc-700 bg-zinc-900 p-3 text-white outline-none md:w-72"
          >
            <option value="general">General</option>
            <option value="node">Node.js</option>
            <option value="python">Python</option>
            <option value="react">React / Next.js</option>
            <option value="docker">Docker</option>
            <option value="ci">CI / GitHub Actions</option>
          </select>
        </div>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Paste your stack trace here..."
          className="mb-4 h-72 w-full rounded-xl border border-zinc-700 bg-zinc-900 p-4 font-mono text-sm text-zinc-100 outline-none"
        />

<div className="mb-4 grid gap-3 text-sm text-zinc-400 md:grid-cols-3">
          <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-3">
            Input characters: {inputLength}
          </div>
          <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-3">
            Output characters: {outputLength}
          </div>
          <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-3">
            Reduction: {reduction}%
          </div>
        </div>
<div className="mb-6 flex flex-wrap gap-3">
          <button
            onClick={cleanStackTrace}
            className="rounded-xl bg-green-500 px-6 py-3 font-bold text-black"
          >
            Clean Stack Trace
          </button>

          <button
            onClick={loadExample}
            className="rounded-xl border border-zinc-700 px-6 py-3 font-bold text-white"
          >
            Load Example
          </button>

          <button
            onClick={copyOutput}
            className="rounded-xl border border-zinc-700 px-6 py-3 font-bold text-white"
          >
            Copy Result
          </button>
          <button
            onClick={copyPromptForAI}
            className="rounded-xl border border-zinc-700 px-6 py-3 font-bold text-white"
          >
            Copy Prompt for AI
          </button>
          <button
            onClick={downloadResult}
            className="rounded-xl border border-zinc-700 px-6 py-3 font-bold text-white"
          >
            Download Result
          </button>
          <button
            onClick={clearAll}
            className="rounded-xl border border-zinc-700 px-6 py-3 font-bold text-white"
          >
            Clear
          </button>
        </div>

        <textarea
          value={output}
          readOnly
          placeholder="Cleaned result will appear here..."
          className="h-72 w-full rounded-xl border border-zinc-700 bg-zinc-950 p-4 font-mono text-sm text-zinc-100 outline-none"
        />
                {output && (
          <div className="mt-4 rounded-xl border border-green-900 bg-green-950/30 p-4 text-sm text-green-200">
            <p className="font-bold text-green-300">Cleaned successfully</p>
            <p className="mt-2">
              The output above has removed common noisy lines, repeated entries,
              and low-signal debugging context. You can now copy it directly into
              ChatGPT, Claude, Cursor, Codex, or another AI coding assistant.
            </p>
          </div>
        )}
                <section className="mt-10 rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
          <h2 className="mb-4 text-2xl font-bold text-white">
            Supported log types
          </h2>

          <div className="grid gap-3 md:grid-cols-3">
            {[
              "JavaScript stack traces",
              "Node.js errors",
              "Python tracebacks",
              "React errors",
              "Next.js build errors",
              "TypeScript compiler errors",
              "Docker build logs",
              "CI / GitHub Actions logs",
              "General debugging output",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-zinc-800 bg-black p-3 text-sm text-zinc-300"
              >
                {item}
              </div>
            ))}
          </div>
        </section>
                <section className="mt-10 rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
          <h2 className="mb-4 text-2xl font-bold text-white">
            Before and after example
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <h3 className="mb-2 font-bold text-zinc-300">Before</h3>
              <pre className="overflow-x-auto rounded-xl border border-zinc-800 bg-black p-4 text-xs text-zinc-400">
{`Error: Cannot find module 'next'
    at Object.<anonymous> (C:\\project\\app\\page.tsx:10:5)
    at C:\\project\\node_modules\\next\\dist\\server.js:20:1
    at async Promise.all
    at processTicksAndRejections`}
              </pre>
            </div>

            <div>
              <h3 className="mb-2 font-bold text-zinc-300">After</h3>
              <pre className="overflow-x-auto rounded-xl border border-green-900 bg-black p-4 text-xs text-green-300">
{`Error: Cannot find module 'next'
    at Object.<anonymous> (C:\\project\\app\\page.tsx:10:5)`}
              </pre>
            </div>
          </div>
        </section>
                <section className="mt-10 rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
          <h2 className="mb-4 text-2xl font-bold text-white">
            How to use ContextClean
          </h2>

          <ol className="list-decimal space-y-3 pl-6 text-zinc-300">
            <li>Choose a cleaning mode that matches your error type.</li>
            <li>Paste your raw log, stack trace, traceback, or build failure.</li>
            <li>Click Clean Stack Trace to remove noisy low-signal lines.</li>
            <li>Copy the cleaned result or copy a ready-made AI debugging prompt.</li>
          </ol>
        </section>
                <section className="mt-16 grid gap-8 text-zinc-300 md:grid-cols-3">
          <div>
            <h2 className="mb-3 text-xl font-bold text-white">
              Clean stack traces for ChatGPT
            </h2>
            <p>
              Remove dependency noise, repeated lines, and irrelevant runtime frames
              before sending errors to AI tools.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-bold text-white">
              Reduce debugging context
            </h2>
            <p>
              Shorter logs help AI coding assistants focus on the real error instead
              of unrelated framework output.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-bold text-white">
              Browser-based processing
            </h2>
            <p>
              Your pasted text is cleaned in your browser. ContextClean does not need
              an account or server upload.
            </p>
          </div>
        </section>
        <section className="mt-12 rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
          <h2 className="mb-4 text-2xl font-bold text-white">Guides</h2>

          <div className="grid gap-4 md:grid-cols-3">
            <a
              href="/clean-stack-trace-for-chatgpt"
              className="rounded-xl border border-zinc-800 p-4 text-zinc-300 hover:border-green-500 hover:text-white"
            >
              <h3 className="mb-2 font-bold text-white">Clean Stack Trace for ChatGPT</h3>
              <p>Learn why shorter stack traces help ChatGPT debug code more accurately.</p>
            </a>

            <a
              href="/reduce-debugging-context-for-ai"
              className="rounded-xl border border-zinc-800 p-4 text-zinc-300 hover:border-green-500 hover:text-white"
            >
              <h3 className="mb-2 font-bold text-white">Reduce Debugging Context for AI</h3>
              <p>Prepare cleaner logs before sending them to AI coding assistants.</p>
            </a>

            <a
              href="/clean-nodejs-error-log"
              className="rounded-xl border border-zinc-800 p-4 text-zinc-300 hover:border-green-500 hover:text-white"
            >
              <h3 className="mb-2 font-bold text-white">Clean Node.js Error Logs</h3>
              <p>Remove noisy Node.js stack traces before sending errors to AI coding tools.</p>
            </a>

            <a
              href="/clean-python-traceback-for-ai"
              className="rounded-xl border border-zinc-800 p-4 text-zinc-300 hover:border-green-500 hover:text-white"
            >
              <h3 className="mb-2 font-bold text-white">Clean Python Tracebacks</h3>
              <p>Shorten Python tracebacks before asking ChatGPT or Claude for debugging help.</p>
            </a>

            <a
              href="/clean-react-error-stack"
              className="rounded-xl border border-zinc-800 p-4 text-zinc-300 hover:border-green-500 hover:text-white"
            >
              <h3 className="mb-2 font-bold text-white">Clean React Error Stacks</h3>
              <p>Remove noisy React and Next.js error output before using AI coding tools.</p>
            </a>

            <a
              href="/clean-nextjs-build-error"
              className="rounded-xl border border-zinc-800 p-4 text-zinc-300 hover:border-green-500 hover:text-white"
            >
              <h3 className="mb-2 font-bold text-white">Clean Next.js Build Errors</h3>
              <p>Make Next.js build logs shorter and easier for AI assistants to understand.</p>
            </a>
            <a
              href="/clean-typescript-error-for-ai"
              className="rounded-xl border border-zinc-800 p-4 text-zinc-300 hover:border-green-500 hover:text-white"
            >
              <h3 className="mb-2 font-bold text-white">Clean TypeScript Errors</h3>
              <p>Shorten TypeScript compiler errors before asking AI for debugging help.</p>
            </a>

            <a
              href="/clean-docker-build-log"
              className="rounded-xl border border-zinc-800 p-4 text-zinc-300 hover:border-green-500 hover:text-white"
            >
              <h3 className="mb-2 font-bold text-white">Clean Docker Build Logs</h3>
              <p>Remove noisy Docker build output before sending logs to AI coding tools.</p>
            </a>

            <a
              href="/clean-ci-error-log"
              className="rounded-xl border border-zinc-800 p-4 text-zinc-300 hover:border-green-500 hover:text-white"
            >
              <h3 className="mb-2 font-bold text-white">Clean CI Error Logs</h3>
              <p>Prepare cleaner GitHub Actions and CI logs for AI debugging.</p>
            </a>
            <a
              href="/clean-error-log-for-cursor"
              className="rounded-xl border border-zinc-800 p-4 text-zinc-300 hover:border-green-500 hover:text-white"
            >
              <h3 className="mb-2 font-bold text-white">
                Clean Error Logs for Cursor
              </h3>
              <p>
                Prepare shorter error logs before pasting them into Cursor AI.
              </p>
            </a>
            <a
              href="/clean-ai-coding-prompt-context"
              className="rounded-xl border border-zinc-800 p-4 text-zinc-300 hover:border-green-500 hover:text-white"
            >
              <h3 className="mb-2 font-bold text-white">
                Clean AI Coding Prompt Context
              </h3>
              <p>
                Shorten noisy debugging context before sending prompts to AI coding tools.
              </p>
            </a>
          </div>
          
        </section>
        <section className="mt-12 rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
          <h2 className="mb-6 text-2xl font-bold text-white">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6 text-zinc-300">
            <div>
              <h3 className="mb-2 font-bold text-white">
                Does ContextClean upload my logs?
              </h3>
              <p>
                No. The cleaner runs in your browser. Your pasted text is not stored
                by ContextClean.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-bold text-white">
                What AI tools is this for?
              </h3>
              <p>
                ContextClean is designed for ChatGPT, Claude, Cursor, Codex, and other
                AI coding assistants.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-bold text-white">
                What kinds of logs can I clean?
              </h3>
              <p>
                You can clean stack traces, Node.js logs, Python tracebacks, React
                errors, Next.js build errors, Docker logs, and CI output.
              </p>
            </div>
          </div>
          <div>
              <h3 className="mb-2 font-bold text-white">
                Is ContextClean a replacement for debugging?
              </h3>
              <p>
                No. It helps prepare cleaner debugging context for AI tools. You should
                still review the original error and verify any suggested fix yourself.
              </p>
            </div>
        </section>
              <footer className="mt-12 border-t border-zinc-800 pt-6 text-sm text-zinc-500">
              <div className="flex flex-wrap gap-4">
            <a href="/about" className="hover:text-white">
              About
            </a>
            <a href="/contact" className="hover:text-white">
              Contact
            </a>
            <a href="/privacy" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-white">
              Terms of Use
            </a>
          </div>
        </footer>
      </section>
    </main>
  );
}