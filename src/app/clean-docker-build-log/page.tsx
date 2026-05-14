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
    <main className="min-h-screen bg-black px-6 py-12 text-white">
      <article className="mx-auto max-w-3xl">
        <a href="/" className="text-sm text-green-400 hover:text-green-300">← Back to ContextClean</a>

        <h1 className="mt-8 mb-6 text-4xl font-bold">
          Clean Docker Build Logs for AI Debugging
        </h1>

        <p className="mb-6 text-lg text-zinc-400">
          Docker build logs can be long, repetitive, and filled with package manager
          output. Cleaning them before asking AI can make build failures easier to debug.
        </p>

        <h2 className="mt-10 mb-4 text-2xl font-bold">Why Docker logs get noisy</h2>
        <p className="mb-4 text-zinc-400">
          A failed Docker build may include installation progress, cached layers,
          package manager details, warnings, and repeated command output.
        </p>

        <h2 className="mt-10 mb-4 text-2xl font-bold">What to clean before using AI</h2>
        <ul className="mb-6 list-disc space-y-2 pl-6 text-zinc-400">
          <li>repeated build steps</li>
          <li>package install noise</li>
          <li>cached layer output</li>
          <li>empty lines</li>
          <li>unrelated warnings</li>
        </ul>

        <h2 className="mt-10 mb-4 text-2xl font-bold">Use ContextClean</h2>
        <p className="mb-6 text-zinc-400">
          Paste your Docker build log into ContextClean, clean it, then send the shorter
          version to ChatGPT, Claude, Cursor, or Codex.
        </p>

        <a href="/" className="inline-block rounded-xl bg-green-500 px-6 py-3 font-bold text-black">
          Open Docker Log Cleaner
        </a>
        <GuideFooter />

      </article>
    </main>
  );
}