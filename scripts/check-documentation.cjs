const fs = require("node:fs");
const path = require("node:path");
const root = path.resolve(__dirname, "..");
let checks = 0;
const errors = [];
function readRoutes(dir) {
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .flatMap((entry) =>
      entry.isDirectory()
        ? readRoutes(path.join(dir, entry.name))
        : entry.name.endsWith(".tsx")
          ? [
              ...fs
                .readFileSync(path.join(dir, entry.name), "utf8")
                .matchAll(/createFileRoute\(\s*["']([^"']+)["']\s*\)/g),
            ].map((match) => match[1])
          : [],
    );
}
const routes = new Set(readRoutes(path.join(root, "src/routes")));
for (const folder of ["public/documentation"]) {
  const dir = path.join(root, folder);
  for (const name of fs.readdirSync(dir).filter((n) => n.endsWith(".html"))) {
    if (name === "template.html") continue;
    const source = fs.readFileSync(path.join(dir, name), "utf8");
    if (!source.includes("<h1>") || source.includes("{{"))
      errors.push(`${name}: missing content or unresolved placeholder`);
    for (const match of source.matchAll(/(?:href|src)="([^"]+)"/g)) {
      const target = match[1];
      if (target.startsWith("/")) {
        if (!routes.has(target))
          errors.push(`${name}: missing local project route ${target}`);
        checks++;
        continue;
      }
      if (/^(?:https?:|mailto:|#|\/)/.test(target)) continue;
      const file = target.split(/[?#]/)[0];
      if (file && !fs.existsSync(path.resolve(dir, file)))
        errors.push(`${name}: missing ${file}`);
      checks++;
    }
    if (!source.includes("Version 1.0.0"))
      errors.push(`${folder}/${name}: missing documentation version`);
  }
}
for (const folder of ["public/documentation", "public/landing"]) {
  for (const name of fs.readdirSync(path.join(root, folder))) {
    if (!name.endsWith(".html")) continue;
    const source = fs.readFileSync(path.join(root, folder, name), "utf8");
    if (source.includes("edzen.adminsmpixelcraft.workers.dev"))
      errors.push(`${folder}/${name}: contains retired hosted preview URL`);
  }
}
const documentationIndex = fs.readFileSync(
  path.join(root, "public/documentation", "index.html"),
  "utf8",
);
if (!documentationIndex.includes("data-live-preview"))
  errors.push("public/documentation/index.html: missing live preview resolver");
if (
  !fs
    .readFileSync(path.join(root, "public/documentation", "js/main.js"), "utf8")
    .includes("[data-live-preview]")
)
  errors.push("public/documentation/js/main.js: missing live preview fallback");
if (errors.length) {
  console.error(errors.join("\n"));
  process.exitCode = 1;
} else
  console.log(
    `Documentation check passed: ${checks} relative asset/link references.`,
  );
