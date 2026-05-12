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
      </section>
    </main>
  );
}