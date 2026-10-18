const fs = require("node:fs");
const path = require("node:path");
const ts = require("typescript");
const files = [];
function walk(directory) {
  for (const item of fs.readdirSync(directory, { withFileTypes: true })) {
    const file = path.join(directory, item.name);
    if (item.isDirectory()) walk(file);
    else if (/\.tsx?$/.test(file)) files.push(file);
  }
}
walk("src");
const problems = [];
let chartPages = 0;
for (const file of files) {
  const text = fs.readFileSync(file, "utf8");
  if (text.includes("<ApexChart")) chartPages++;
  if (
    /\b(?:bg|text|border|ring|fill|stroke)-(?:blue|indigo|purple|violet|emerald|green|cyan|sky|teal|orange|amber|yellow|rose|pink|red|slate|gray|zinc)-\d+/.test(
      text,
    )
  ) {
    problems.push(`${file}: fixed utility color`);
  }
  if (/bg-gradient-to-|(?:linear|radial)-gradient\(/.test(text)) {
    problems.push(`${file}: decorative gradient`);
  }
  if (
    text.includes("<ApexChart") &&
    /(?:color:\s*["']#|colors:\s*\[\s*["']#|type:\s*["']gradient)/.test(text)
  ) {
    problems.push(`${file}: fixed chart color or gradient`);
  }
  const source = ts.createSourceFile(file, text, ts.ScriptTarget.Latest, true);
  for (const error of source.parseDiagnostics) {
    problems.push(
      `${file}: ${ts.flattenDiagnosticMessageText(error.messageText, " ")}`,
    );
  }
}
const tree = ts.createSourceFile(
  "routes",
  fs.readFileSync("src/routeTree.gen.ts", "utf8"),
  ts.ScriptTarget.Latest,
  true,
);
const routes = tree.statements.find(
  (node) =>
    ts.isInterfaceDeclaration(node) &&
    node.name.text === "FileRoutesByFullPath",
);
const paths = routes.members.map((member) => member.name.text);
console.log(
  `Audited ${files.length} source files, ${paths.length} registered routes, and ${chartPages} chart components.`,
);
if (problems.length) {
  console.error(problems.join("\n"));
  process.exitCode = 1;
} else {
  console.log(
    "No legacy utility colors, decorative gradients, fixed chart palettes, or syntax errors.",
  );
}

// Optional HTTP smoke check against the existing local preview.
if (process.argv[2]) {
  (async () => {
    const uiSource = fs.readFileSync(
      "src/components/pages/UiElementDetailApp.tsx",
      "utf8",
    );
    const emailSource = fs.readFileSync(
      "src/components/auth/pages/EmailTemplatesApp.tsx",
      "utf8",
    );
    const queue = [
      ...new Set([
        ...paths.filter((route) => !route.includes("$")),
        ...Array.from(
          uiSource.matchAll(/element === "([^"]+)"/g),
          (match) => `/ui/${match[1]}`,
        ),
        "/ui/tables",
        ...Array.from(
          emailSource.matchAll(/^\s+id: "([^"]+)"/gm),
          (match) => `/auth/email-templates/${match[1]}`,
        ),
        "/theme-audit-not-found",
      ]),
    ];
    const failures = [];
    const total = queue.length;
    await Promise.all(
      Array.from({ length: 4 }, async () => {
        while (queue.length) {
          const route = queue.shift();
          try {
            const response = await fetch(new URL(route, process.argv[2]), {
              signal: AbortSignal.timeout(30000),
            });
            const html = await response.text();
            const invalidBrand =
              process.argv.includes("--brand") &&
              (!html.includes("Edzen") ||
                /\bEdzen\b|edzenadmin|edzensystems/.test(html));
            if (
              !response.ok ||
              !html.includes("<html") ||
              !/styles[^"']*\.css/.test(html) ||
              html.includes("Something went wrong on our end.") ||
              html.includes("Slot failed to slot onto its children") ||
              invalidBrand
            ) {
              failures.push(
                `${route}: status ${response.status}, missing HTML or shared stylesheet`,
              );
            }
          } catch (error) {
            failures.push(`${route}: ${error.message}`);
          }
        }
      }),
    );
    console.log(
      `HTTP checked ${total} routes: ${total - failures.length} passed, ${failures.length} failed.`,
    );
    if (failures.length) {
      console.error(failures.join("\n"));
      process.exitCode = 1;
    }
  })();
}
