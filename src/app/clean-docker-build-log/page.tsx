import Link from "next/link";
import GuideFooter from "../components/GuideFooter";
import { getPageSeo, siteUrl } from "../seo";

const seo = getPageSeo("/clean-docker-build-log");

export const metadata = {
  title: seo.title,
  description: seo.description,
  alternates: {
    canonical: `${siteUrl}${seo.path}`,
  },
};

export default function CleanDockerBuildLogPage() {
  return (
    <main className="min-h-screen px-4 py-8 text-stone-100 sm:px-6 lg:px-8">
      <article className="mx-auto max-w-4xl rounded-[32px] border border-white/10 bg-stone-950/80 p-8">
        <Link href="/" className="text-sm text-emerald-300 hover:text-emerald-200">
          Back to ContextClean
        </Link>

        <p className="mt-8 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300/80">
          Docker Guide
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white">
          How to clean Docker build logs before you ask AI why the image failed to build
        </h1>

        <div className="mt-6 space-y-5 text-sm leading-7 text-stone-300">
          <p>
            Docker logs are a classic example of high-volume, mixed-signal output.
            They combine build steps, cached layers, package installation chatter,
            command echo, warning text, and the actual failure. The real error might be
            only a few lines long, but it is often buried inside dozens or hundreds of
            lines of surrounding narration.
          </p>
          <p>
            A model does better when you preserve the failing step, the command that
            broke, and the first clear error message while removing progress lines and
            unrelated installation output.
          </p>
        </div>

        <section className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
            <h2 className="text-2xl font-semibold text-white">Useful Docker lines</h2>
            <p className="mt-4 text-sm leading-7 text-stone-300">
              Keep the Dockerfile step number, the failing command, the first explicit
              error, and any file path or package name directly tied to the breakage.
            </p>
          </div>
          <div className="rounded-[28px] border border-amber-400/20 bg-amber-300/8 p-6">
            <h2 className="text-2xl font-semibold text-white">Low-signal Docker lines</h2>
            <p className="mt-4 text-sm leading-7 text-stone-300">
              Repeated layer extraction, package download progress, cached-step output,
              and generic warnings often add size without changing the diagnosis.
            </p>
          </div>
        </section>

        <section className="mt-10 rounded-[28px] border border-white/10 bg-black/25 p-6">
          <h2 className="text-2xl font-semibold text-white">Example</h2>
          <pre className="mt-4 overflow-x-auto rounded-2xl border border-white/10 bg-black/45 p-4 text-sm leading-6 text-stone-300">
{`Step 4/8 : RUN npm run build
Error: Cannot find module 'next'
The command '/bin/sh -c npm run build' returned a non-zero code: 1`}
          </pre>
          <p className="mt-4 text-sm leading-7 text-stone-300">
            Those three lines already tell a useful story. The build failed during a
            specific Docker step, the failing command is visible, and the missing
            module is named. The rest of the log is often secondary.
          </p>
        </section>

        <section className="mt-10 rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
          <h2 className="text-2xl font-semibold text-white">
            Why Docker logs benefit from aggressive first-pass trimming
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-7 text-stone-300">
            <p>
              Build containers produce output that is designed to be operationally
              complete, not editorially clear. A human scanning the log can often spot
              the failure quickly, but an AI assistant sees a prompt full of competing
              tokens. Trimming the log gives the model a better chance to focus on the
              dependency, file, or command that actually broke the build.
            </p>
            <p>
              This is especially helpful when the Docker failure is only a wrapper
              around a deeper Node.js, TypeScript, or framework error. The shorter log
              makes that nested cause easier to expose.
            </p>
          </div>
        </section>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/"
            className="rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-stone-950 hover:bg-emerald-300"
          >
            Open Docker Log Cleaner
          </Link>
          <Link
            href="/resources"
            className="rounded-full border border-white/12 px-6 py-3 text-sm font-semibold text-white hover:bg-white/[0.05]"
          >
            Browse more debugging resources
          </Link>
        </div>

        <GuideFooter />
      </article>
    </main>
  );
}
