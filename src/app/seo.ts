export const siteUrl = "https://www.contextclean.dev";

export const defaultDescription =
  "Clean, inspect, deduplicate, and redact noisy logs in your browser before sharing them with a teammate or AI coding assistant.";

export const pages = [
  {
    path: "/",
    title: "ContextClean - Free Local Log Cleaner for AI Debugging",
    description: defaultDescription,
  },
  {
    path: "/resources",
    title: "AI Debugging Guides and Resources - ContextClean",
    description:
      "Practical guides for reading errors, preserving diagnostic evidence, redacting secrets, and writing better debugging requests.",
  },
  {
    path: "/community",
    title: "AI Debugging Community Discussions - ContextClean",
    description:
      "Discuss AI debugging prompts, log cleanup, error context, and safer technical problem sharing with other developers.",
  },
  {
    path: "/field-notes",
    title: "AI Coding Field Notes: Failure Patterns, Polls and Jokes",
    description:
      "Explore recurring AI coding failure patterns, check an answer for hallucination risk, play debugging Bingo, and share a public AI roast.",
  },
  {
    path: "/prompt-clinic",
    title: "AI Debugging Prompt Clinic and Evidence Challenge",
    description:
      "Score a debugging prompt, find missing evidence, generate a clearer structure, and practice five evidence-driven AI debugging scenarios.",
  },
  {
    path: "/how-contextclean-works",
    title: "How ContextClean Filters Logs - Methodology and Limits",
    description:
      "Read the exact signal, noise, deduplication, and secret-detection rules used by the ContextClean browser workbench.",
  },
  {
    path: "/before-after-log-examples",
    title: "Annotated Before-and-After Log Examples - ContextClean",
    description:
      "Review realistic Node.js, Python, CI, and Next.js log reductions with explanations of what stays, what leaves, and why.",
  },
  {
    path: "/ai-debugging-checklist",
    title: "Seven-Step AI Debugging Checklist - ContextClean",
    description:
      "Use a seven-step evidence, context, privacy, and verification checklist before asking an AI assistant to debug an error.",
  },
  {
    path: "/ai-debugging-workflow-templates",
    title: "AI Debugging Templates and Report Builder - ContextClean",
    description:
      "Build complete debugging reports for runtime, build, CI, TypeScript, hydration, and support failures.",
  },
  {
    path: "/debugging-prompt-examples",
    title: "Debugging Prompt Examples - ContextClean",
    description:
      "Read concrete AI debugging prompts for build errors, runtime crashes, and failing tests.",
  },
  {
    path: "/remove-secrets-from-logs-before-sharing",
    title: "Remove Secrets From Logs Before Sharing - ContextClean",
    description:
      "Identify and replace credentials, signed URLs, customer data, and internal infrastructure details before sharing logs.",
  },
  {
    path: "/how-to-read-build-errors-before-asking-ai",
    title: "How to Read Build Errors Before Asking AI - ContextClean",
    description:
      "Find the first cause candidate, preserve source locations, and prepare useful build-error evidence before requesting help.",
  },
  {
    path: "/debug-hydration-errors-step-by-step",
    title: "Debug React and Next.js Hydration Errors Step by Step",
    description:
      "Narrow server and client rendering differences before asking an AI assistant to diagnose a hydration mismatch.",
  },
  {
    path: "/clean-nodejs-error-log",
    title: "Clean Node.js Error Logs - ContextClean",
    description:
      "Preserve module names and application frames while reducing Node.js internals and package-manager noise.",
  },
  {
    path: "/clean-python-traceback-for-ai",
    title: "Clean Python Tracebacks for AI - ContextClean",
    description:
      "Preserve exception chains and application frames while reducing unrelated Python library output.",
  },
  {
    path: "/clean-react-error-stack",
    title: "Clean React Error Stacks - ContextClean",
    description:
      "Keep component locations and rendering evidence while reducing repetitive React framework frames.",
  },
  {
    path: "/clean-nextjs-build-error",
    title: "Clean Next.js Build Errors - ContextClean",
    description:
      "Prepare Next.js compiler, route, module, and build failures for a focused debugging request.",
  },
  {
    path: "/clean-typescript-error-for-ai",
    title: "Clean TypeScript Errors for AI - ContextClean",
    description:
      "Preserve expected and received types, diagnostics, and source locations in a concise TypeScript error report.",
  },
  {
    path: "/clean-docker-build-log",
    title: "Clean Docker Build Logs - ContextClean",
    description:
      "Reduce layer-transfer output while preserving the failed Docker instruction, command, and exit code.",
  },
  {
    path: "/clean-ci-error-log",
    title: "Clean CI Error Logs - ContextClean",
    description:
      "Turn long CI transcripts into reviewed summaries with the failing job, step, command, evidence, and exit code.",
  },
  {
    path: "/for-engineering-teams",
    title: "ContextClean for Engineering Teams",
    description:
      "Create clearer asynchronous debugging handoffs for pull requests, issues, CI failures, and incident follow-up.",
  },
  {
    path: "/for-support-and-bug-reports",
    title: "ContextClean for Support and Bug Reports",
    description:
      "Reduce and redact customer-provided logs before escalating a focused bug report to engineering.",
  },
  {
    path: "/about",
    title: "About ContextClean",
    description:
      "Learn what ContextClean does, how its browser-based cleaner works, who maintains it, and where its limits are.",
  },
  {
    path: "/contact",
    title: "Contact ContextClean",
    description:
      "Contact ContextClean for product feedback, bug reports, corrections, privacy questions, and support.",
  },
  {
    path: "/privacy",
    title: "Privacy Policy - ContextClean",
    description:
      "Read how ContextClean handles browser-based log cleaning, analytics, advertising, and public community discussions.",
  },
  {
    path: "/terms",
    title: "Terms of Use - ContextClean",
    description:
      "Read the terms for using ContextClean tools, guides, and public community discussions.",
  },
];

export function getPageSeo(path: string) {
  return pages.find((page) => page.path === path) || pages[0];
}
