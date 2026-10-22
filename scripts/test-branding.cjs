const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const assert = require("node:assert/strict");
const test = require("node:test");
const React = require("react");
const { renderToStaticMarkup } = require("react-dom/server");
const ts = require("typescript");

const source = ts.transpileModule(
  fs.readFileSync("src/components/branding/BrandLogo.tsx", "utf8"),
  {
    fileName: "BrandLogo.tsx",
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2022,
      jsx: ts.JsxEmit.ReactJSX,
    },
  },
).outputText;

function logoMarkup(props = {}, dark = false) {
  const context = {
    exports: {},
    require(name) {
      if (name === "@/lib/utils")
        return { cn: (...values) => values.filter(Boolean).join(" ") };
      if (name === "@/lib/edzen-settings")
        return { useEdzenSettings: () => ({}), isDark: () => dark };
      if (name.endsWith(".png"))
        return { default: name.replace("@/", "../src/") };
      return require(name);
    },
  };
  vm.runInNewContext(source, context);
  return renderToStaticMarkup(
    React.createElement(context.exports.BrandLogo, props),
  );
}

test("light wordmark and collapsed icon use Edzen assets and accessible labels", () => {
  const full = logoMarkup();
  const icon = logoMarkup({ variant: "icon" });
  assert.match(full, /aria-label="Edzen"/);
  assert.match(full, /edzen-logo\.png/);
  assert.match(full, /viewBox="145 131 1882 503"/);
  assert.match(icon, /edzen-icon\.png/);
  assert.doesNotMatch(icon, /edzen-logo\.png/);
  assert.doesNotMatch(full + icon, /logo-light\.png|logo-dark\.png/);
});

test("dark surfaces whiten only the wordmark and keep the symbol unfiltered", () => {
  const full = logoMarkup({ darkSurface: true });
  assert.match(full, /feColorMatrix/);
  assert.equal((full.match(/<image /g) ?? []).length, 3);
  assert.equal((full.match(/ filter=/g) ?? []).length, 1);
  assert.match(logoMarkup({}, true), /data-dark-surface="true"/);
  assert.match(
    logoMarkup({ darkSurface: false }, true),
    /data-dark-surface="false"/,
  );
});

test("live source uses the current brand assets without deprecated logo imports", () => {
  const deprecatedLogo =
    /logos\/(?:logo-light|logo-dark|logo-icon-light|logo-icon-dark)\.png/;
  function walk(directory) {
    for (const item of fs.readdirSync(directory, { withFileTypes: true })) {
      const file = path.join(directory, item.name);
      if (item.isDirectory()) walk(file);
      else if (/\.(tsx?|css)$/.test(file))
        assert.doesNotMatch(
          fs.readFileSync(file, "utf8"),
          deprecatedLogo,
          file,
        );
    }
  }
  walk("src");
  assert.match(
    fs.readFileSync("src/components/branding/BrandLogo.tsx", "utf8"),
    /edzen-logo\.png/,
  );
});

test("transparent logo assets and all browser icon formats are installed", () => {
  for (const file of [
    "src/assets/images/logos/edzen-logo.png",
    "src/assets/images/logos/edzen-icon.png",
    "public/favicon.png",
  ]) {
    const png = fs.readFileSync(file);
    assert.equal(png.toString("ascii", 1, 4), "PNG");
    assert.equal(png[25], 6, `${file} must retain RGBA transparency`);
  }
  const ico = fs.readFileSync("public/favicon.ico");
  assert.equal(ico.readUInt16LE(2), 1);
  assert.equal(ico.readUInt16LE(4), 1);
  assert.equal(
    ico.subarray(22).equals(fs.readFileSync("public/favicon.png")),
    true,
  );
  assert.match(
    fs.readFileSync("public/favicon.svg", "utf8"),
    /data:image\/png;base64/,
  );
  assert.match(
    fs.readFileSync("src/routes/__root.tsx", "utf8"),
    /href: "\/edzen-favicon\.png"/,
  );
  assert.match(
    fs.readFileSync("src/routes/__root.tsx", "utf8"),
    /href: "\/edzen-favicon\.ico"/,
  );
  assert.equal(
    fs
      .readFileSync("public/edzen-favicon.png")
      .equals(fs.readFileSync("public/favicon.png")),
    true,
  );
  assert.equal(fs.readFileSync("public/edzen-favicon.ico").equals(ico), true);
});

if (process.argv[2] === "--preview") {
  fs.mkdirSync(".branding-backups", { recursive: true });
  const html = `<html><head><meta charset="utf-8"><style>body{margin:0;background:#f7f8fa;font:14px Arial;color:#334155;padding:36px}section{padding:28px;border:1px solid #e5e7eb;border-radius:8px;margin:20px 0;background:#fff}section.dark{background:#151c29;color:white}svg{width:235px;height:64px;display:block}svg.icon{width:48px;height:48px}p{margin:0 0 18px}</style></head><body><h1>Edzen branding review</h1><section><p>Light surfaces</p>${logoMarkup()}</section><section class="dark"><p>Dark surfaces</p>${logoMarkup({ darkSurface: true })}</section><section><p>Collapsed sidebar</p>${logoMarkup({ variant: "icon", className: "icon" })}</section></body></html>`;
  fs.writeFileSync(".branding-backups/edzen-review.html", html);
}
