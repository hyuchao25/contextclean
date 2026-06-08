import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      { source: "/editorial-updates", destination: "/about", permanent: true },
      { source: "/editorial-standards", destination: "/about", permanent: true },
      {
        source: "/site-maintenance-and-review-process",
        destination: "/about",
        permanent: true,
      },
      { source: "/ai-debugging-glossary", destination: "/resources", permanent: true },
      { source: "/who-contextclean-is-for", destination: "/about", permanent: true },
      {
        source: "/compare-raw-vs-cleaned-logs",
        destination: "/before-after-log-examples",
        permanent: true,
      },
      {
        source: "/common-typescript-errors-ai-misreads",
        destination: "/clean-typescript-error-for-ai",
        permanent: true,
      },
      {
        source: "/share-ci-failures-with-teammates-and-ai",
        destination: "/clean-ci-error-log",
        permanent: true,
      },
      {
        source: "/what-makes-a-high-signal-error-report",
        destination: "/ai-debugging-checklist",
        permanent: true,
      },
      {
        source: "/when-not-to-trim-logs-for-ai",
        destination: "/how-contextclean-works",
        permanent: true,
      },
      {
        source: "/case-study-ci-failure-summary",
        destination: "/clean-ci-error-log",
        permanent: true,
      },
      {
        source: "/case-study-typescript-noise-reduction",
        destination: "/clean-typescript-error-for-ai",
        permanent: true,
      },
      {
        source: "/case-study-nextjs-hydration-log-cleanup",
        destination: "/debug-hydration-errors-step-by-step",
        permanent: true,
      },
      {
        source: "/clean-stack-trace-for-chatgpt",
        destination: "/how-contextclean-works",
        permanent: true,
      },
      {
        source: "/reduce-debugging-context-for-ai",
        destination: "/how-contextclean-works",
        permanent: true,
      },
      {
        source: "/clean-error-log-for-cursor",
        destination: "/ai-debugging-workflow-templates",
        permanent: true,
      },
      {
        source: "/clean-ai-coding-prompt-context",
        destination: "/ai-debugging-workflow-templates",
        permanent: true,
      },
      {
        source: "/safe-log-sharing-for-ai",
        destination: "/remove-secrets-from-logs-before-sharing",
        permanent: true,
      },
      { source: "/all-guides", destination: "/resources", permanent: true },
      { source: "/solutions", destination: "/resources", permanent: true },
    ];
  },
};

export default nextConfig;
