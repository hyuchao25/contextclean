"use client";

import Link from "next/link";
import { useDeferredValue, useState } from "react";
import type { AiNewsItem } from "../lib/ai-news";

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));
}

function NewsCard({
  item,
  featured = false,
}: {
  item: AiNewsItem;
  featured?: boolean;
}) {
  return (
    <article
      className={
        featured
          ? "group rounded-[30px] border border-emerald-300/20 bg-[radial-gradient(circle_at_top_right,rgba(52,211,153,0.14),transparent_42%),rgba(12,10,9,0.9)] p-7 sm:p-9"
          : "group rounded-[26px] border border-white/10 bg-white/[0.03] p-6 transition hover:border-emerald-300/25"
      }
    >
      <div className="flex flex-wrap items-center gap-2 text-xs">
        <span className="font-semibold text-emerald-300">{item.source}</span>
        <span className="text-stone-600">/</span>
        <time dateTime={item.publishedAt} className="text-stone-400">
          {formatDate(item.publishedAt)}
        </time>
      </div>
      <h2
        className={
          featured
            ? "mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl"
            : "mt-4 text-xl font-semibold leading-snug text-white"
        }
      >
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="transition group-hover:text-emerald-200"
        >
          {item.title}
        </a>
      </h2>
      <p className="mt-4 text-sm leading-7 text-stone-300">{item.summary}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {item.topics.map((topic) => (
          <span
            key={topic}
            className="rounded-full border border-white/10 bg-black/20 px-3 py-1 font-mono text-[11px] text-stone-400"
          >
            {topic}
          </span>
        ))}
      </div>
      <a
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex text-sm font-semibold text-emerald-300 hover:text-emerald-200"
      >
        Read the official source ↗
      </a>
    </article>
  );
}

export function AiNewsFeed({
  items,
  compact = false,
  interactive = false,
}: {
  items: AiNewsItem[];
  compact?: boolean;
  interactive?: boolean;
}) {
  const [query, setQuery] = useState("");
  const [topic, setTopic] = useState("All");
  const deferredQuery = useDeferredValue(query.trim().toLowerCase());
  const topics = ["All", ...new Set(items.flatMap((item) => item.topics))];
  const visibleItems = items.filter((item) => {
    const matchesTopic = topic === "All" || item.topics.includes(topic);
    const matchesQuery =
      deferredQuery.length === 0 ||
      `${item.title} ${item.summary} ${item.source} ${item.topics.join(" ")}`
        .toLowerCase()
        .includes(deferredQuery);
    return matchesTopic && matchesQuery;
  });

  if (items.length === 0) {
    return (
      <div className="rounded-[26px] border border-dashed border-white/15 bg-white/[0.02] p-8">
        <p className="font-semibold text-white">Live feeds are temporarily unavailable.</p>
        <p className="mt-2 text-sm leading-7 text-stone-400">
          The news radar fails closed rather than publishing unverified material.
          Use the official source links below and check back after the next refresh.
        </p>
      </div>
    );
  }

  if (compact) {
    return (
      <div className="grid gap-4 lg:grid-cols-3">
        {items.slice(0, 3).map((item) => (
          <NewsCard key={item.id} item={item} />
        ))}
      </div>
    );
  }

  return (
    <>
      {interactive ? (
        <div className="mb-7 rounded-[26px] border border-white/10 bg-stone-950/70 p-5">
          <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
            <label className="sr-only" htmlFor="news-search">
              Search AI news
            </label>
            <input
              id="news-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search models, agents, coding, safety..."
              className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none placeholder:text-stone-600 focus:border-emerald-300/40"
            />
            <p className="font-mono text-xs text-stone-500">
              {visibleItems.length} / {items.length} SIGNALS
            </p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2" aria-label="Filter by topic">
            {topics.map((itemTopic) => (
              <button
                key={itemTopic}
                type="button"
                onClick={() => setTopic(itemTopic)}
                aria-pressed={topic === itemTopic}
                className={
                  topic === itemTopic
                    ? "rounded-full bg-emerald-300 px-4 py-2 text-xs font-semibold text-stone-950"
                    : "rounded-full border border-white/10 px-4 py-2 text-xs font-semibold text-stone-300 hover:border-white/20 hover:text-white"
                }
              >
                {itemTopic}
              </button>
            ))}
          </div>
        </div>
      ) : null}

      {visibleItems.length > 0 ? (
        <div className="grid gap-5 lg:grid-cols-2">
          {visibleItems.map((item, index) => (
            <div key={item.id} className={index === 0 ? "lg:col-span-2" : ""}>
              <NewsCard item={item} featured={index === 0} />
            </div>
          ))}
        </div>
      ) : (
        <div className="rounded-[26px] border border-dashed border-white/15 bg-white/[0.02] p-8 text-center">
          <p className="font-semibold text-white">No signals match this filter.</p>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setTopic("All");
            }}
            className="mt-3 text-sm font-semibold text-emerald-300 hover:text-emerald-200"
          >
            Clear search and topic
          </button>
        </div>
      )}
    </>
  );
}

export function NewsMethodLink() {
  return (
    <Link
      href="#method"
      className="text-sm font-semibold text-stone-300 hover:text-white"
    >
      How ranking works
    </Link>
  );
}
