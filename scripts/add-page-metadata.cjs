const fs = require("fs");
const path = require("path");

const routes = [
  "/about",
  "/contact",
  "/privacy",
  "/terms",
  "/clean-stack-trace-for-chatgpt",
  "/reduce-debugging-context-for-ai",
  "/clean-nodejs-error-log",
  "/clean-python-traceback-for-ai",
  "/clean-react-error-stack",
  "/clean-nextjs-build-error",
  "/clean-typescript-error-for-ai",
  "/clean-docker-build-log",
  "/clean-ci-error-log",
  "/clean-error-log-for-cursor",
  "/clean-ai-coding-prompt-context",
];

for (const route of routes) {
  const file = path.join(
    process.cwd(),
    "src",
    "app",
    route.replace("/", ""),
    "page.tsx"
  );

  if (!fs.existsSync(file)) {
    console.log("Missing:", file);
    continue;
  }

  let content = fs.readFileSync(file, "utf8");

  if (content.includes("export const metadata")) {
    console.log("Already has metadata:", route);
    continue;
  }

  const header = `import { getPageSeo, siteUrl } from "../seo";

const seo = getPageSeo("${route}");

export const metadata = {
  title: seo.title,
  description: seo.description,
  alternates: {
    canonical: \`${"${siteUrl}"}${"${seo.path}"}\`,
  },
};

`;

  fs.writeFileSync(file, header + content);
  console.log("Updated:", route);
}