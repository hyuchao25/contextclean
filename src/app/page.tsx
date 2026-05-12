"use client";

import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  function cleanStackTrace() {
    const lines = input
      .split("\n")
      .filter((line) => {
        const lower = line.toLowerCase();
        return (
          line.trim() !== "" &&
          !lower.includes("node_modules") &&
          !lower.includes(".next") &&
          !lower.includes("webpack") &&
          !lower.includes("internal/modules") &&
          !lower.includes("at process.") &&
          !lower.includes("at async")
        );
      });

    const cleaned = Array.from(new Set(lines)).join("\n");
    setOutput(cleaned);
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
          Reduce noisy logs before sending them to ChatGPT, Claude or Cursor.
        </p>

        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Paste your stack trace here..."
          className="mb-4 h-72 w-full rounded-xl border border-zinc-700 bg-zinc-900 p-4 font-mono text-sm text-zinc-100 outline-none"
        />

        <div className="mb-6 flex gap-3">
          <button
            onClick={cleanStackTrace}
            className="rounded-xl bg-green-500 px-6 py-3 font-bold text-black"
          >
            Clean Stack Trace
          </button>

          <button
            onClick={copyOutput}
            className="rounded-xl border border-zinc-700 px-6 py-3 font-bold text-white"
          >
            Copy Result
          </button>
        </div>

        <textarea
          value={output}
          readOnly
          placeholder="Cleaned result will appear here..."
          className="h-72 w-full rounded-xl border border-zinc-700 bg-zinc-950 p-4 font-mono text-sm text-zinc-100 outline-none"
        />
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
              <h3 className="mb-2 font-bold text-white">
                Clean Stack Trace for ChatGPT
              </h3>
              <p>
                Learn why shorter stack traces help ChatGPT debug code more accurately.
              </p>
            </a>

            <a
              href="/reduce-debugging-context-for-ai"
              className="rounded-xl border border-zinc-800 p-4 text-zinc-300 hover:border-green-500 hover:text-white"
            >
              <h3 className="mb-2 font-bold text-white">
                Reduce Debugging Context for AI
              </h3>
              <p>
                Prepare cleaner logs before sending them to AI coding assistants.
              </p>
            </a>
            <a
              href="/clean-nodejs-error-log"
              className="rounded-xl border border-zinc-800 p-4 text-zinc-300 hover:border-green-500 hover:text-white"
            >
              <h3 className="mb-2 font-bold text-white">
                Clean Node.js Error Logs
              </h3>
              <p>
                Remove noisy Node.js stack
                <a
              href="/clean-nodejs-error-log"
              className="rounded-xl border border-zinc-800 p-4 text-zinc-300 hover:border-green-500 hover:text-white"
            >
              <h3 className="mb-2 font-bold text-white">
                Clean Node.js Error Logs
              </h3>
              <p>
                Remove noisy Node.js stack traces before sending errors to AI coding tools.
              </p>
            </a>
          </div>
        </section>
              <footer className="mt-12 border-t border-zinc-800 pt-6 text-sm text-zinc-500">
          <div className="flex gap-4">
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