export type DailyAiJoke = {
  setup: string;
  punchline: string;
  translation: string;
  tag: string;
};

const jokes: DailyAiJoke[] = [
  {
    setup: 'The AI said, "I found the root cause."',
    punchline: "It had found a root cause. It just belonged to a different repository.",
    translation: "Confident diagnosis, missing evidence.",
    tag: "API fan fiction",
  },
  {
    setup: 'The AI said, "This is definitely a caching issue."',
    punchline: "The cache had an alibi, three witnesses, and was not running.",
    translation: "The first guess survived longer than the facts.",
    tag: "Cache blame",
  },
  {
    setup: 'The AI suggested, "Delete node_modules and reinstall."',
    punchline: "A traditional ceremony performed whenever the stack trace becomes inconvenient.",
    translation: "No dependency has been identified yet.",
    tag: "Dependency ritual",
  },
  {
    setup: 'The AI said, "This should resolve the issue."',
    punchline: "The tests were touched by the confidence of the statement and passed in spirit.",
    translation: "No command was run.",
    tag: "Premature victory",
  },
  {
    setup: "The AI added optional chaining to the crash.",
    punchline: "The bug stopped screaming and quietly corrupted the response instead.",
    translation: "The symptom was hidden, not explained.",
    tag: "Symptom patch",
  },
  {
    setup: "The AI invented a library method with perfect naming.",
    punchline: "Documentation was the only environment where it failed to compile.",
    translation: "Plausibility is not an API contract.",
    tag: "Invented API",
  },
  {
    setup: 'The AI said, "You are absolutely right."',
    punchline: "A graceful migration from one confident answer to the opposite confident answer.",
    translation: "The previous claim was not checked.",
    tag: "Confidence migration",
  },
  {
    setup: "The AI fixed a one-line condition.",
    punchline: "It only needed a factory, an adapter, two hooks, and a migration guide.",
    translation: "The patch is larger than the evidence.",
    tag: "Refactor inflation",
  },
  {
    setup: "The AI read the final line of a 900-line CI log.",
    punchline: "It diagnosed exit code 1 with remarkable accuracy.",
    translation: "The first causal error was ignored.",
    tag: "Log archaeology",
  },
  {
    setup: 'The AI recommended "robust error handling."',
    punchline: "The exception is now professionally wrapped and equally unexplained.",
    translation: "Try/catch is not a root cause.",
    tag: "Exception gift wrap",
  },
  {
    setup: "The AI blamed a race condition.",
    punchline: "It was correct in the sense that the answer raced past every deterministic clue.",
    translation: "Timing has not been measured.",
    tag: "Race speculation",
  },
  {
    setup: "The AI upgraded the entire framework to fix one warning.",
    punchline: "The original warning disappeared beneath twelve new migration errors.",
    translation: "Change scope exceeded diagnosis scope.",
    tag: "Upgrade therapy",
  },
  {
    setup: "The AI removed the failing assertion.",
    punchline: "The test suite achieved inner peace by no longer expecting anything.",
    translation: "Passing is not the same as correct.",
    tag: "Test pacification",
  },
  {
    setup: "The AI added a three-second timeout.",
    punchline: "The flaky test now fails with patience.",
    translation: "The ordering problem remains.",
    tag: "Timeout engineering",
  },
  {
    setup: "The AI converted every component to client rendering.",
    punchline: "Hydration errors dropped to zero, along with most reasons to use server rendering.",
    translation: "The boundary was bypassed, not understood.",
    tag: "Hydration retreat",
  },
  {
    setup: "The AI saw an undefined value.",
    punchline: "It recommended defining it. Computer science advanced another step.",
    translation: "Trace where the value became invalid.",
    tag: "Data-flow insight",
  },
  {
    setup: "The AI generated a regex for the log parser.",
    punchline: "Now the log, the parser, and the developer all contain unmatched groups.",
    translation: "Add fixtures before adding cleverness.",
    tag: "Regex diplomacy",
  },
  {
    setup: "The AI proposed a microservice.",
    punchline: "The function was lonely, so it received a network boundary.",
    translation: "Architecture is not a substitute for a fix.",
    tag: "Service expansion",
  },
  {
    setup: "The AI said the behavior was expected.",
    punchline: "The product requirements were relieved to learn they had been wrong.",
    translation: "Expected by whom?",
    tag: "Requirement revision",
  },
  {
    setup: "The AI asked for the full repository.",
    punchline: "The missing environment variable remained shy in 40,000 files.",
    translation: "More context is not always better context.",
    tag: "Context appetite",
  },
  {
    setup: "The AI renamed the variable for clarity.",
    punchline: "The null pointer now has an excellent name.",
    translation: "Readability did not alter runtime state.",
    tag: "Cosmetic repair",
  },
  {
    setup: "The AI added logging to every branch.",
    punchline: "The bug is still hidden, but it now produces a newsletter.",
    translation: "Instrumentation needs a hypothesis.",
    tag: "Observability flood",
  },
  {
    setup: "The AI recommended checking the internet connection.",
    punchline: "The local TypeScript compiler appreciated the concern.",
    translation: "The suggestion is unrelated to the error.",
    tag: "Generic support",
  },
  {
    setup: "The AI summarized the error in six paragraphs.",
    punchline: "The missing semicolon enjoyed its biography.",
    translation: "Explanation length exceeded problem depth.",
    tag: "Narrative debugging",
  },
  {
    setup: "The AI generated a Docker fix from a Kubernetes example.",
    punchline: "Every container deserves to dream bigger.",
    translation: "The toolchain was not identified.",
    tag: "Platform blending",
  },
  {
    setup: "The AI said the package was deprecated.",
    punchline: "The package learned about its retirement from a model trained two years ago.",
    translation: "Verify current documentation and version.",
    tag: "Version amnesia",
  },
  {
    setup: "The AI wrote a fallback for the impossible state.",
    punchline: "The impossible state immediately became a supported feature.",
    translation: "Validate the invariant instead.",
    tag: "Invariant surrender",
  },
  {
    setup: "The AI suggested memoizing everything.",
    punchline: "The bug is now cached for excellent performance.",
    translation: "Optimization has no causal link yet.",
    tag: "Performance theater",
  },
  {
    setup: "The AI proposed retrying the failed request forever.",
    punchline: "Reliability improved until the cloud bill arrived.",
    translation: "Retries require limits and a failure model.",
    tag: "Infinite resilience",
  },
  {
    setup: "The AI replaced the type with any.",
    punchline: "The compiler stopped complaining because it had been removed from the conversation.",
    translation: "The mismatch still exists at runtime.",
    tag: "Type diplomacy",
  },
  {
    setup: "The AI found five possible causes.",
    punchline: "It ranked them alphabetically.",
    translation: "Ask for evidence and a discriminating test.",
    tag: "Hypothesis buffet",
  },
  {
    setup: "The AI copied the error message into its conclusion.",
    punchline: "The diagnosis was technically identical to the symptom.",
    translation: "Restatement is not reasoning.",
    tag: "Error echo",
  },
  {
    setup: "The AI added a comment explaining the workaround.",
    punchline: "Future developers now know exactly where not to ask why.",
    translation: "Documenting debt does not repay it.",
    tag: "Comment-driven repair",
  },
  {
    setup: "The AI recommended a clean architecture rewrite.",
    punchline: "The broken import was honored to receive a five-layer solution.",
    translation: "Start with the smallest reversible change.",
    tag: "Architecture detour",
  },
  {
    setup: "The AI generated a benchmark result.",
    punchline: "The benchmark was so fast it completed without being run.",
    translation: "Measured claims need measurements.",
    tag: "Synthetic evidence",
  },
  {
    setup: "The AI promised backward compatibility.",
    punchline: "Backward was the only direction the release could move.",
    translation: "Compatibility requires explicit test cases.",
    tag: "Release optimism",
  },
  {
    setup: "The AI blamed the operating system.",
    punchline: "Linux, Windows, and macOS formed a support group.",
    translation: "No platform-specific evidence was provided.",
    tag: "Platform blame",
  },
  {
    setup: "The AI fixed the linter warning with a disable comment.",
    punchline: "Static analysis accepted the legal settlement.",
    translation: "The warning was suppressed, not resolved.",
    tag: "Lint negotiation",
  },
  {
    setup: "The AI suggested adding another abstraction.",
    punchline: "The bug can no longer be seen from the public interface.",
    translation: "Distance is not correctness.",
    tag: "Abstraction camouflage",
  },
  {
    setup: "The AI concluded that the database was slow.",
    punchline: "The query had never reached the database, preserving its undefeated record.",
    translation: "Follow the request path before optimizing a layer.",
    tag: "Database alibi",
  },
  {
    setup: "The AI said the fix was production-ready.",
    punchline: "Production had not been consulted.",
    translation: "Define tests, rollback, and observability first.",
    tag: "Deployment confidence",
  },
  {
    setup: "The AI suggested an environment-variable fix.",
    punchline: "It created a variable whose main value was emotional support.",
    translation: "Configuration must connect to a documented behavior.",
    tag: "Configuration folklore",
  },
];

const shanghaiDateFormatter = new Intl.DateTimeFormat("en-CA", {
  timeZone: "Asia/Shanghai",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
});

function dateKey(date: Date) {
  return shanghaiDateFormatter.format(date);
}

function dayNumber(key: string) {
  return Math.floor(new Date(`${key}T00:00:00+08:00`).getTime() / 86_400_000);
}

export function getDailyAiJoke(date = new Date()) {
  const key = dateKey(date);
  const sequence = dayNumber(key);
  return {
    ...jokes[((sequence % jokes.length) + jokes.length) % jokes.length],
    date: key,
    issue: sequence,
  };
}

export function getRecentAiJokes(count = 6, date = new Date()) {
  return Array.from({ length: count }, (_, index) => {
    const previous = new Date(date.getTime() - (index + 1) * 86_400_000);
    return getDailyAiJoke(previous);
  });
}
