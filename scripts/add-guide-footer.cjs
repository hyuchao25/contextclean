/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require("fs");
const path = require("path");

const routes = [
  "clean-stack-trace-for-chatgpt",
  "reduce-debugging-context-for-ai",
  "clean-nodejs-error-log",
  "clean-python-traceback-for-ai",
  "clean-react-error-stack",
  "clean-nextjs-build-error",
  "clean-typescript-error-for-ai",
  "clean-docker-build-log",
  "clean-ci-error-log",
  "clean-error-log-for-cursor",
  "clean-ai-coding-prompt-context",
];

for (const route of routes) {
  const file = path.join(process.cwd(), "src", "app", route, "page.tsx");

  let content = fs.readFileSync(file, "utf8");

  if (!content.includes('GuideFooter from "../components/GuideFooter"')) {
    content = content.replace(
      /^/,
      'import GuideFooter from "../components/GuideFooter";\n'
    );
  }

  if (!content.includes("<GuideFooter />")) {
    content = content.replace(
      /(\s*)<\/article>/,
      `$1  <GuideFooter />\n$1</article>`
    );
  }

  fs.writeFileSync(file, content);
  console.log("Updated:", route);
}
