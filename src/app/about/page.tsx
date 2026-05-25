import Link from "next/link";
import { getPageSeo, siteUrl } from "../seo";

const seo = getPageSeo("/about");

export const metadata = {
  title: seo.title,
  description: seo.description,
  alternates: {
    canonical: `${siteUrl}${seo.path}`,
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen px-4 py-8 text-stone-100 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-4xl rounded-[32px] border border-white/10 bg-stone-950/80 p-8">
        <Link
          href="/"
          className="text-sm text-emerald-300 transition hover:text-emerald-200"
        >
          Back to ContextClean
        </Link>

        <p className="mt-8 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300/80">
          About
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white">
          ContextClean is a focused utility for higher-signal AI debugging.
        </h1>

        <div className="mt-6 space-y-5 text-sm leading-7 text-stone-300">
          <p>
            ContextClean is a browser-based tool for cleaning noisy logs, stack
            traces, build failures, tracebacks, and CI output before those logs are
            sent to AI coding assistants or shared with teammates. The site exists to
            solve a narrow but common problem: raw debugging output is often too noisy
            to be helpful on the first pass.
          </p>
          <p>
            Many developers now use AI tools as part of their debugging workflow, but
            the quality of the answer depends heavily on the quality of the context.
            If the prompt is cluttered with dependency internals, repeated frames,
            package manager warnings, and unrelated setup output, the actual issue is
            easier to miss.
          </p>
          <p>
            ContextClean tries to reduce that problem by preserving the lines that are
            more likely to explain the failure while filtering common low-signal
            patterns. It is intentionally small in scope and is meant to support,
            rather than replace, human debugging judgment.
          </p>
        </div>

        <h2 className="mt-10 text-2xl font-semibold text-white">
          What the product is for
        </h2>
        <div className="mt-4 space-y-4 text-sm leading-7 text-stone-300">
          <p>
            The primary use case is preparing a cleaner prompt for tools such as
            ChatGPT, Claude, Cursor, and Codex. Secondary use cases include shortening
            logs for internal notes, support conversations, issue reports, and shared
            debugging threads.
          </p>
          <p>
            The site supports general debugging output as well as more specific modes
            for Node.js, Python, React and Next.js, Docker, and CI pipelines. Those
            modes reflect common categories of noise that developers encounter in real
            production and local development workflows.
          </p>
        </div>

        <h2 className="mt-10 text-2xl font-semibold text-white">
          Product principles
        </h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <h3 className="text-base font-semibold text-white">Useful output first</h3>
            <p className="mt-2 text-sm leading-6 text-stone-300">
              The cleaned result should be easier for a developer to read before it is
              pasted into any AI system.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <h3 className="text-base font-semibold text-white">Explicit boundaries</h3>
            <p className="mt-2 text-sm leading-6 text-stone-300">
              The tool does not claim to be a debugger, a security review tool, or a
              guarantee of correct AI advice.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <h3 className="text-base font-semibold text-white">Privacy awareness</h3>
            <p className="mt-2 text-sm leading-6 text-stone-300">
              The site emphasizes local browser processing and repeatedly warns users
              not to share secrets or private data.
            </p>
          </div>
        </div>

        <h2 className="mt-10 text-2xl font-semibold text-white">
          What ContextClean does not promise
        </h2>
        <div className="mt-4 space-y-4 text-sm leading-7 text-stone-300">
          <p>
            It does not guarantee that every important line is preserved. It does not
            verify whether a suggested fix is correct. It does not automatically
            remove secrets or sensitive data. It does not replace understanding the
            failing command, environment, inputs, or recent code changes.
          </p>
          <p>
            Developers should still review both the original and the cleaned output.
            In some cases, extra context is necessary, and in other cases, sensitive
            details should never be pasted into any online tool in the first place.
          </p>
        </div>

        <h2 className="mt-10 text-2xl font-semibold text-white">
          Site information
        </h2>
        <div className="mt-4 space-y-4 text-sm leading-7 text-stone-300">
          <p>
            ContextClean is published as an independent web product at
            <span className="text-white"> contextclean.dev</span>. The site includes
            a public homepage, supporting guide pages, and standard trust pages such
            as About, Contact, Privacy Policy, and Terms of Use.
          </p>
          <p>
            Last content review for this page: May 25, 2026.
          </p>
        </div>
      </section>
    </main>
  );
}
