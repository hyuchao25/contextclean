export const siteUrl = "https://www.contextclean.dev";

export const defaultDescription =
  "Clean noisy logs, stack traces, tracebacks, build errors, and CI output before sending them to ChatGPT, Claude, Cursor, Codex, or other AI coding tools.";

export const pages = [
  {
    path: "/",
    title: "ContextClean - Clean Logs & Stack Traces for AI",
    description: defaultDescription,
  },
  {
    path: "/clean-stack-trace-for-chatgpt",
    title: "Clean Stack Trace for ChatGPT - ContextClean",
    description:
      "Clean noisy stack traces before sending them to ChatGPT for AI debugging.",
  },
  {
    path: "/reduce-debugging-context-for-ai",
    title: "Reduce Debugging Context for AI - ContextClean",
    description:
      "Shorten noisy debugging context before sending logs to AI coding assistants.",
  },
  {
    path: "/clean-nodejs-error-log",
    title: "Clean Node.js Error Logs - ContextClean",
    description:
      "Clean noisy Node.js error logs before asking AI coding tools for debugging help.",
  },
  {
    path: "/clean-python-traceback-for-ai",
    title: "Clean Python Tracebacks for AI - ContextClean",
    description:
      "Clean Python tracebacks before sending them to ChatGPT, Claude, Cursor, or Codex.",
  },
  {
    path: "/clean-react-error-stack",
    title: "Clean React Error Stacks - ContextClean",
    description:
      "Clean React and Next.js error stacks before using AI coding assistants.",
  },
  {
    path: "/clean-nextjs-build-error",
    title: "Clean Next.js Build Errors - ContextClean",
    description:
      "Clean noisy Next.js build errors before sending them to AI debugging tools.",
  },
  {
    path: "/clean-typescript-error-for-ai",
    title: "Clean TypeScript Errors for AI - ContextClean",
    description:
      "Clean TypeScript compiler errors before asking AI tools for debugging help.",
  },
  {
    path: "/clean-docker-build-log",
    title: "Clean Docker Build Logs - ContextClean",
    description:
      "Clean Docker build logs before sending build failures to AI coding tools.",
  },
  {
    path: "/clean-ci-error-log",
    title: "Clean CI Error Logs - ContextClean",
    description:
      "Clean CI logs from GitHub Actions, GitLab CI, and other pipelines for AI debugging.",
  },
  {
    path: "/clean-error-log-for-cursor",
    title: "Clean Error Logs for Cursor AI - ContextClean",
    description:
      "Clean error logs before pasting them into Cursor AI Chat or Composer.",
  },
  {
    path: "/clean-ai-coding-prompt-context",
    title: "Clean AI Coding Prompt Context - ContextClean",
    description:
      "Shorten noisy debugging context before sending prompts to AI coding tools.",
  },
  {
    path: "/resources",
    title: "Resources for AI Debugging Workflows - ContextClean",
    description:
      "Read practical resources on AI debugging prompts, safer log sharing, and build-error review workflows.",
  },
  {
    path: "/ai-debugging-checklist",
    title: "AI Debugging Checklist - ContextClean",
    description:
      "Use a practical checklist to send better logs and cleaner prompts to AI coding assistants.",
  },
  {
    path: "/safe-log-sharing-for-ai",
    title: "Safe Log Sharing for AI - ContextClean",
    description:
      "Learn how to reduce privacy and security risk before sharing logs with AI tools.",
  },
  {
    path: "/how-to-read-build-errors-before-asking-ai",
    title: "How to Read Build Errors Before Asking AI - ContextClean",
    description:
      "Read build failures more effectively before sending them to AI coding assistants.",
  },
  {
    path: "/debugging-prompt-examples",
    title: "Debugging Prompt Examples - ContextClean",
    description:
      "Read concrete examples of AI debugging prompts for build errors, runtime crashes, and failing tests.",
  },
  {
    path: "/before-after-log-examples",
    title: "Before-and-After Log Examples - ContextClean",
    description:
      "See side-by-side examples of noisy logs transformed into cleaner AI debugging prompts.",
  },
  {
    path: "/editorial-updates",
    title: "Editorial Updates - ContextClean",
    description:
      "Review recent editorial and product updates across the ContextClean site.",
  },
  {
    path: "/about",
    title: "About ContextClean",
    description:
      "Learn about ContextClean, a browser-based log and stack trace cleaner for AI debugging.",
  },
  {
    path: "/contact",
    title: "Contact ContextClean",
    description:
      "Contact ContextClean for feedback, support, bug reports, and feature requests.",
  },
  {
    path: "/privacy",
    title: "Privacy Policy - ContextClean",
    description:
      "Read the ContextClean privacy policy for browser-based log cleaning and analytics.",
  },
  {
    path: "/terms",
    title: "Terms of Use - ContextClean",
    description:
      "Read the ContextClean terms of use for browser-based log cleaning tools.",
  },
];

export function getPageSeo(path: string) {
  return pages.find((page) => page.path === path) || pages[0];
}
