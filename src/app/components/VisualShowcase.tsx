const logLines = [
  { text: "npm run build", tone: "muted" },
  { text: "warn deprecated transitive-package", tone: "dim" },
  { text: "TypeError: Cannot read properties of undefined", tone: "hot" },
  { text: "at checkout-api/src/handler.ts:42:18", tone: "good" },
  { text: "runner cleanup completed", tone: "dim" },
];

export function HeroTerminalVisual() {
  return (
    <div className="relative overflow-hidden rounded-[28px] border border-emerald-300/20 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.22),transparent_34%),linear-gradient(145deg,rgba(12,10,9,0.92),rgba(28,25,23,0.78))] p-5 shadow-2xl shadow-black/30">
      <div className="absolute -right-14 -top-14 h-40 w-40 rounded-full bg-emerald-300/20 blur-3xl" />
      <div className="absolute -bottom-16 left-8 h-36 w-36 rounded-full bg-amber-300/10 blur-3xl" />

      <div className="relative flex items-center justify-between">
        <div className="flex gap-2">
          <span className="h-3 w-3 rounded-full bg-red-400/90" />
          <span className="h-3 w-3 rounded-full bg-amber-300/90" />
          <span className="h-3 w-3 rounded-full bg-emerald-300/90" />
        </div>
        <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-stone-300">
          cleaned context
        </span>
      </div>

      <div className="relative mt-5 space-y-3 font-mono text-xs">
        {logLines.map((line) => (
          <div
            key={line.text}
            className={`flex items-center gap-3 rounded-2xl border px-3 py-2 ${
              line.tone === "hot"
                ? "border-red-300/20 bg-red-400/10 text-red-100"
                : line.tone === "good"
                  ? "border-emerald-300/20 bg-emerald-300/10 text-emerald-100"
                  : line.tone === "dim"
                    ? "border-white/5 bg-white/[0.02] text-stone-500 line-through decoration-stone-600"
                    : "border-white/10 bg-black/20 text-stone-300"
            }`}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-current opacity-70" />
            <span>{line.text}</span>
          </div>
        ))}
      </div>

      <div className="relative mt-5 grid grid-cols-3 gap-3">
        {[
          ["Noise cut", "62%"],
          ["Signal kept", "4 lines"],
          ["Ready for", "AI prompt"],
        ].map(([label, value]) => (
          <div key={label} className="rounded-2xl border border-white/10 bg-black/25 p-3">
            <p className="text-xs text-stone-400">{label}</p>
            <p className="mt-1 text-sm font-semibold text-white">{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function WorkflowMapVisual() {
  const steps = ["Raw log", "Clean", "Review", "Share"];

  return (
    <div className="rounded-[30px] border border-white/10 bg-[linear-gradient(135deg,rgba(16,185,129,0.10),rgba(255,255,255,0.03),rgba(245,158,11,0.08))] p-6">
      <div className="grid gap-4 md:grid-cols-4">
        {steps.map((step, index) => (
          <div key={step} className="relative">
            {index < steps.length - 1 && (
              <div className="absolute left-[54%] top-8 hidden h-px w-[92%] bg-gradient-to-r from-emerald-300/60 to-transparent md:block" />
            )}
            <div className="relative rounded-[24px] border border-white/10 bg-black/30 p-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-300/20 bg-emerald-300/10 text-lg font-semibold text-emerald-100">
                {index + 1}
              </div>
              <h2 className="mt-4 text-lg font-semibold text-white">{step}</h2>
              <p className="mt-2 text-sm leading-6 text-stone-300">
                {index === 0 && "Noisy terminal output, stack trace, or CI transcript."}
                {index === 1 && "Remove repeated and low-signal lines."}
                {index === 2 && "Check accuracy and sensitive data manually."}
                {index === 3 && "Use a shorter issue, PR comment, or AI prompt."}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function TeamHandoffVisual() {
  return (
    <div className="grid gap-4 rounded-[30px] border border-white/10 bg-white/[0.03] p-6 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="rounded-[24px] border border-white/10 bg-black/30 p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-200">
          Before
        </p>
        <div className="mt-4 space-y-2 font-mono text-xs text-stone-500">
          {Array.from({ length: 9 }).map((_, index) => (
            <div key={index} className="h-3 rounded-full bg-stone-700/70" />
          ))}
        </div>
      </div>
      <div className="rounded-[24px] border border-emerald-300/20 bg-emerald-300/8 p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-200">
          After
        </p>
        <div className="mt-4 grid gap-3">
          {[
            "Command: npm run build",
            "Relevant file: src/app/layout.tsx",
            "Cleaned error: TypeError at handler.ts:42",
            "Question: minimal fix or next check?",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 bg-black/25 px-4 py-3 font-mono text-xs text-emerald-100"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function SupportTriageVisual() {
  const cards = [
    ["Customer report", "Long log and user impact"],
    ["ContextClean", "Reduced and reviewed"],
    ["Engineering", "Smaller escalation"],
  ];

  return (
    <div className="rounded-[30px] border border-white/10 bg-[radial-gradient(circle_at_20%_20%,rgba(245,158,11,0.12),transparent_32%),rgba(255,255,255,0.03)] p-6">
      <div className="grid gap-4 md:grid-cols-3">
        {cards.map(([title, body], index) => (
          <div key={title} className="relative rounded-[24px] border border-white/10 bg-black/25 p-5">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-amber-300/20 bg-amber-300/10 text-lg font-semibold text-amber-100">
              {index + 1}
            </div>
            <h2 className="text-lg font-semibold text-white">{title}</h2>
            <p className="mt-2 text-sm leading-6 text-stone-300">{body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
