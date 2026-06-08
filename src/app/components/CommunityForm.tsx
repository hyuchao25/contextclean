"use client";

import type { FormEvent } from "react";
import { useState } from "react";

const categories = [
  "AI debugging question",
  "Prompt review",
  "Log cleaning feedback",
  "Feature request",
  "Documentation correction",
];

export default function CommunityForm() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState(categories[0]);
  const [details, setDetails] = useState("");
  const [checked, setChecked] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const issueTitle = `[Community] ${category}: ${title.trim()}`;
    const body = `## Question or discussion

${details.trim()}

## Context

- Category: ${category}
- Submitted from: https://www.contextclean.dev/community

## Safety confirmation

I reviewed this message and removed passwords, API keys, access tokens, private customer data, and confidential source code.`;

    const url = new URL("https://github.com/hyuchao25/contextclean/issues/new");
    url.searchParams.set("title", issueTitle);
    url.searchParams.set("body", body);
    window.location.assign(url.toString());
  }

  return (
    <form onSubmit={submit} className="rounded-[30px] border border-white/10 bg-stone-950/75 p-6 sm:p-8">
      <h2 className="text-2xl font-semibold text-white">Start a public discussion</h2>
      <p className="mt-3 text-sm leading-7 text-stone-300">
        Your message will be published as a GitHub issue so other developers can
        reply, reference code safely, and follow the discussion. A free GitHub
        account is required to complete publication.
      </p>

      <div className="mt-6 grid gap-5">
        <label className="text-sm font-semibold text-white">
          Discussion type
          <select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            className="mt-2 w-full rounded-2xl border border-white/10 bg-stone-900 px-4 py-3 font-normal text-stone-100 outline-none focus:border-emerald-400"
          >
            {categories.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </label>

        <label className="text-sm font-semibold text-white">
          Short title
          <input
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            minLength={8}
            maxLength={100}
            required
            placeholder="Example: Claude keeps focusing on the wrong stack frame"
            className="mt-2 w-full rounded-2xl border border-white/10 bg-black/35 px-4 py-3 font-normal text-stone-100 outline-none focus:border-emerald-400"
          />
        </label>

        <label className="text-sm font-semibold text-white">
          Details
          <textarea
            value={details}
            onChange={(event) => setDetails(event.target.value)}
            minLength={30}
            maxLength={4000}
            required
            placeholder="Describe what you tried, what response you received, and the specific point you want other developers to discuss."
            className="mt-2 h-48 w-full rounded-2xl border border-white/10 bg-black/35 p-4 font-normal leading-7 text-stone-100 outline-none focus:border-emerald-400"
          />
        </label>

        <label className="flex cursor-pointer items-start gap-3 rounded-2xl border border-amber-300/20 bg-amber-300/[0.07] p-4 text-sm leading-6 text-stone-200">
          <input
            type="checkbox"
            checked={checked}
            onChange={(event) => setChecked(event.target.checked)}
            required
            className="mt-1 accent-emerald-400"
          />
          <span>
            I removed passwords, tokens, customer data, private URLs, and
            confidential source code. I understand this discussion will be public.
          </span>
        </label>
      </div>

      <button
        type="submit"
        disabled={!checked || title.trim().length < 8 || details.trim().length < 30}
        className="mt-6 rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-stone-950 disabled:cursor-not-allowed disabled:opacity-40"
      >
        Continue to GitHub and publish
      </button>
    </form>
  );
}
