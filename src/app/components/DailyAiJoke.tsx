import { getDailyAiJoke, getRecentAiJokes } from "../lib/daily-ai-jokes";

export default function DailyAiJoke({
  showArchive = true,
}: {
  showArchive?: boolean;
}) {
  const joke = getDailyAiJoke();
  const archive = showArchive ? getRecentAiJokes() : [];

  return (
    <section className="overflow-hidden rounded-[32px] border border-amber-300/20 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.14),transparent_40%),rgba(12,10,9,0.86)]">
      <div className="grid gap-px bg-white/10 lg:grid-cols-[0.72fr_1.28fr]">
        <div className="bg-stone-950/90 p-7 sm:p-9">
          <div className="flex flex-wrap items-center gap-3">
            <p className="font-mono text-xs tracking-[0.2em] text-amber-300">
              DAILY AI ROAST
            </p>
            <span className="rounded-full border border-white/10 px-3 py-1 font-mono text-[10px] text-stone-500">
              {joke.date} · #{joke.issue}
            </span>
          </div>
          <p className="mt-6 text-2xl font-semibold leading-9 text-white">
            {joke.setup}
          </p>
          <p className="mt-5 text-lg leading-8 text-amber-100">{joke.punchline}</p>
          <span className="mt-6 inline-flex rounded-full bg-amber-300/10 px-3 py-1 font-mono text-xs text-amber-200">
            {joke.tag}
          </span>
        </div>
        <div className="bg-emerald-950/15 p-7 sm:p-9">
          <p className="font-mono text-xs tracking-[0.2em] text-emerald-300">
            HUMAN TRANSLATION
          </p>
          <p className="mt-5 text-2xl font-semibold leading-9 text-white">
            {joke.translation}
          </p>
          <p className="mt-5 text-sm leading-7 text-stone-400">
            One original debugging joke is selected from the maintained ContextClean
            library using the current date in Asia/Shanghai. It remains stable for the
            day and changes automatically after midnight.
          </p>
        </div>
      </div>

      {archive.length > 0 ? (
        <div className="border-t border-white/10 bg-black/20 p-7 sm:p-9">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-stone-400">
            Previous six field notes
          </p>
          <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {archive.map((item) => (
              <article
                key={item.date}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
              >
                <p className="font-mono text-[10px] text-stone-500">{item.date}</p>
                <p className="mt-2 text-sm leading-6 text-stone-300">
                  {item.punchline}
                </p>
              </article>
            ))}
          </div>
        </div>
      ) : null}
    </section>
  );
}
