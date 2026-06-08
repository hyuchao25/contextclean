"use client";

import { useMemo, useState } from "react";

export default function ErrorReportBuilder() {
  const [task, setTask] = useState("Identify the likely root cause and the next diagnostic step.");
  const [environment, setEnvironment] = useState("");
  const [command, setCommand] = useState("");
  const [expected, setExpected] = useState("");
  const [change, setChange] = useState("");
  const [error, setError] = useState("");
  const [checked, setChecked] = useState("");
  const [copied, setCopied] = useState(false);

  const report = useMemo(
    () =>
      [
        task.trim(),
        "",
        `Environment: ${environment.trim() || "[add runtime, framework, and version]"}`,
        `Command or action: ${command.trim() || "[add the failing command or user action]"}`,
        `Expected behavior: ${expected.trim() || "[describe the expected result]"}`,
        `Recent change: ${change.trim() || "[describe the most relevant recent change]"}`,
        `Already checked: ${checked.trim() || "[list checks already completed]"}`,
        "",
        "Reviewed error:",
        error.trim() || "[paste the cleaned and redacted error here]",
      ].join("\n"),
    [task, environment, command, expected, change, checked, error]
  );

  async function copyReport() {
    await navigator.clipboard.writeText(report);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  const fields = [
    ["Environment", environment, setEnvironment, "Node.js 22, Next.js 16, Windows 11"],
    ["Command or action", command, setCommand, "npm run build"],
    ["Expected behavior", expected, setExpected, "Production build should complete"],
    ["Recent change", change, setChange, "Moved analytics into the root layout"],
    ["Already checked", checked, setChecked, "Confirmed import path and cleared build cache"],
  ] as const;

  return (
    <section className="mt-10 rounded-[30px] border border-emerald-300/15 bg-emerald-300/[0.05] p-6 sm:p-8">
      <div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300">
          Interactive report builder
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-white">
          Build a complete debugging request instead of pasting a log alone
        </h2>
        <p className="mt-3 text-sm leading-7 text-stone-300">
          Complete the fields that change the diagnosis. The preview stays in your
          browser and can be copied as plain text.
        </p>
      </div>

      <div className="mt-7 grid gap-6 lg:grid-cols-2">
        <div className="space-y-4">
          <label className="block text-sm font-semibold text-white">
            Requested outcome
            <select
              value={task}
              onChange={(event) => setTask(event.target.value)}
              className="mt-2 w-full rounded-2xl border border-white/10 bg-stone-900 px-4 py-3 font-normal text-stone-100 outline-none focus:border-emerald-400"
            >
              <option>Identify the likely root cause and the next diagnostic step.</option>
              <option>Suggest the smallest safe fix and explain its tradeoffs.</option>
              <option>Explain what evidence is missing before proposing a fix.</option>
              <option>Turn this failure into clear reproduction steps.</option>
            </select>
          </label>

          {fields.map(([label, value, setter, placeholder]) => (
            <label key={label} className="block text-sm font-semibold text-white">
              {label}
              <input
                value={value}
                onChange={(event) => setter(event.target.value)}
                placeholder={placeholder}
                className="mt-2 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 font-normal text-stone-100 outline-none focus:border-emerald-400"
              />
            </label>
          ))}

          <label className="block text-sm font-semibold text-white">
            Cleaned and redacted error
            <textarea
              value={error}
              onChange={(event) => setError(event.target.value)}
              placeholder="Paste only the reviewed error excerpt."
              className="mt-2 h-40 w-full rounded-2xl border border-white/10 bg-black/30 p-4 font-mono text-xs leading-6 text-stone-100 outline-none focus:border-emerald-400"
            />
          </label>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">Generated report</p>
          <pre className="mt-2 min-h-[520px] whitespace-pre-wrap rounded-2xl border border-white/10 bg-black/45 p-5 text-xs leading-6 text-stone-300">
            {report}
          </pre>
          <button
            type="button"
            onClick={copyReport}
            className="mt-4 rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-stone-950"
          >
            {copied ? "Copied" : "Copy debugging report"}
          </button>
        </div>
      </div>
    </section>
  );
}
