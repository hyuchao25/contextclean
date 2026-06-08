import Link from "next/link";
import { getPageSeo, siteUrl } from "../seo";

const seo = getPageSeo("/privacy");

export const metadata = {
  title: seo.title,
  description: seo.description,
  alternates: {
    canonical: `${siteUrl}${seo.path}`,
  },
};

export default function PrivacyPage() {
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
          Privacy Policy
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white">
          Privacy information for ContextClean
        </h1>

        <p className="mt-6 text-sm leading-7 text-stone-300">
          Last updated: June 8, 2026.
        </p>

        <div className="mt-6 space-y-5 text-sm leading-7 text-stone-300">
          <p>
            ContextClean is a browser-based tool for cleaning logs, stack traces,
            tracebacks, build errors, and debugging output for AI-assisted developer
            workflows. This page explains the types of information the site may
            process and the limits of that processing.
          </p>
          <p>
            Because the site is designed around pasted debugging text, users should be
            especially careful not to include passwords, API keys, access tokens,
            customer records, private credentials, or confidential source code in any
            content they submit to online tools.
          </p>
        </div>

        <h2 className="mt-10 text-2xl font-semibold text-white">
          Pasted text and browser processing
        </h2>
        <div className="mt-4 space-y-4 text-sm leading-7 text-stone-300">
          <p>
            The main cleaning workflow is intended to run directly in your browser on
            the page itself. ContextClean does not require an account to use the core
            cleaner and does not present a manual upload workflow for pasted logs.
          </p>
          <p>
            Even with browser-based processing, you remain responsible for the text
            you paste. If a log contains sensitive or regulated information, do not
            paste it into any public website.
          </p>
        </div>

        <h2 className="mt-10 text-2xl font-semibold text-white">
          Analytics and basic usage data
        </h2>
        <div className="mt-4 space-y-4 text-sm leading-7 text-stone-300">
          <p>
            ContextClean may use site analytics to understand general traffic patterns
            and page performance, such as page views, referrers, and aggregate usage
            behavior. This information helps measure whether pages are being used and
            where the site should be improved.
          </p>
          <p>
            Analytics providers may process technical information such as IP-related
            network data, browser details, pages visited, timestamps, and referring
            pages according to their own service behavior and terms.
          </p>
        </div>

        <h2 className="mt-10 text-2xl font-semibold text-white">
          Advertising
        </h2>
        <div className="mt-4 space-y-4 text-sm leading-7 text-stone-300">
          <p>
            ContextClean may display advertising through third-party services such as
            Google AdSense. Those services may use cookies or similar technologies to
            serve, measure, or personalize advertising, subject to their own policies
            and user controls.
          </p>
          <p>
            If advertising is shown on this site, users should review the policies of
            the relevant advertising providers for details about data collection and
            available opt-out mechanisms.
          </p>
        </div>

        <h2 className="mt-10 text-2xl font-semibold text-white">
          Browser interaction preferences
        </h2>
        <div className="mt-4 space-y-4 text-sm leading-7 text-stone-300">
          <p>
            The AI Field Notes page can store a poll choice and Bingo selections in
            your browser&apos;s local storage. These preferences remain on the device
            and are not submitted as a shared vote or attached to an account.
          </p>
          <p>
            Prompt Clinic text, scores, and challenge answers are evaluated in the
            current browser tab and are not submitted to a ContextClean server.
          </p>
        </div>

        <h2 className="mt-10 text-2xl font-semibold text-white">
          Community discussions
        </h2>
        <div className="mt-4 space-y-4 text-sm leading-7 text-stone-300">
          <p>
            The community form prepares a public GitHub issue. Publishing requires a
            GitHub account, and the discussion is stored and processed by GitHub under
            its own terms and privacy policy. ContextClean displays recent public
            community issues using the GitHub API.
          </p>
          <p>
            Do not publish credentials, customer data, private URLs, confidential
            source code, or any information you are not authorized to disclose.
          </p>
        </div>

        <h2 className="mt-10 text-2xl font-semibold text-white">
          Links to other services
        </h2>
        <div className="mt-4 space-y-4 text-sm leading-7 text-stone-300">
          <p>
            The site may link to external resources, documentation, or provider
            policies. ContextClean is not responsible for the privacy practices of
            other websites once you leave this domain.
          </p>
        </div>

        <h2 className="mt-10 text-2xl font-semibold text-white">
          Contact
        </h2>
        <div className="mt-4 space-y-4 text-sm leading-7 text-stone-300">
          <p>
            Privacy questions can be opened through the
            <a
              href="https://github.com/hyuchao25/contextclean/issues/new"
              className="mx-1 text-emerald-300 hover:text-emerald-200"
            >
              ContextClean issue tracker
            </a>
            without including private data. If the matter cannot be described safely
            in public, request a private contact channel in the issue.
          </p>
          <p>
            This policy may be updated as the site evolves, adds providers, or
            changes how public pages are operated.
          </p>
        </div>
      </section>
    </main>
  );
}
