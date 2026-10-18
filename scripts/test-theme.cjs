const fs = require("node:fs");
const vm = require("node:vm");
const assert = require("node:assert/strict");
const test = require("node:test");
const ts = require("typescript");

function load(file, globals = {}) {
  const source = ts.transpileModule(fs.readFileSync(file, "utf8"), {
    fileName: file,
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2022,
      jsx: ts.JsxEmit.ReactJSX,
    },
  }).outputText;
  const context = { exports: {}, require: () => ({}), ...globals };
  vm.runInNewContext(source, context);
  return context.exports;
}

const { flatChartOptions } = load("src/lib/flat-chart-options.ts");
const palette = ["#087f75", "#e47751", "#8762c7", "#d49a2c", "#3984c5"];

test("linked buttons render a single slot child without a server error", () => {
  const React = require("react");
  const { renderToStaticMarkup } = require("react-dom/server");
  const { Button } = load("src/components/ui/button.tsx", {
    require: (name) =>
      name === "@/lib/utils"
        ? { cn: (...values) => values.filter(Boolean).join(" ") }
        : require(name),
  });
  const html = renderToStaticMarkup(
    React.createElement(
      Button,
      { asChild: true },
      React.createElement("a", { href: "/pages/faq" }, "Support"),
    ),
  );
  assert.match(html, /<a[^>]*href="\/pages\/faq"/);
  assert.match(html, /Support<\/a>/);
});

test("mixed charts become flat without changing series colors or opacity", () => {
  const options = {
    colors: ["#16815d", "#c64b51"],
    chart: { stacked: true, dropShadow: { enabled: true, blur: 8 } },
    fill: {
      type: ["gradient", "solid"],
      opacity: [0.2, 1],
      gradient: { opacityFrom: 0.5 },
    },
    yaxis: { min: 0, max: 100 },
  };
  const original = JSON.stringify(options);
  const result = flatChartOptions(options, palette, false);
  assert.deepEqual(Array.from(result.fill.type), ["solid", "solid"]);
  assert.equal(result.fill.gradient, undefined);
  assert.equal(result.chart.dropShadow.enabled, false);
  assert.deepEqual(result.colors, options.colors);
  assert.deepEqual(result.fill.opacity, options.fill.opacity);
  assert.deepEqual(result.yaxis, options.yaxis);
  assert.equal(JSON.stringify(options), original);
});

test("unconfigured area and bar charts receive readable shared defaults", () => {
  const area = flatChartOptions({}, palette, true);
  const bar = flatChartOptions({ colors: [] }, palette, false);
  assert.deepEqual(area.colors, palette);
  assert.equal(area.fill.opacity, 0.18);
  assert.deepEqual(bar.colors, palette);
  assert.equal(bar.fill.opacity, 1);
});

test("reference sparklines use a soft fill without changing chart data or main chart fills", () => {
  const options = {
    chart: { sparkline: { enabled: true } },
    colors: ["#7932b1"],
    fill: { opacity: 0.12 },
  };
  const result = flatChartOptions(options, palette, true);
  assert.equal(result.fill.type, "gradient");
  assert.equal(result.fill.gradient.opacityFrom, 0.18);
  assert.equal(result.fill.gradient.opacityTo, 0);
  assert.deepEqual(result.colors, options.colors);
  assert.equal(flatChartOptions(options, palette, false).fill.type, "solid");
});

function settingsApp(stored) {
  const root = { dataset: {}, classList: { toggle() {} } };
  const storage =
    typeof stored === "string"
      ? { "edzen-admin-settings": stored }
      : { ...(stored || {}) };
  const context = {
    document: { documentElement: root },
    window: {
      localStorage: {
        getItem: (key) => storage[key] ?? null,
        setItem: (key, value) => {
          storage[key] = value;
        },
      },
      matchMedia: () => ({ matches: false }),
    },
  };
  const settings = load("src/lib/nova-settings.ts", context);
  return { settings, context, root, saved: () => ({ ...storage }) };
}

test("older settings adopt Multicolor while preserving mode and direction", () => {
  const app = settingsApp(
    JSON.stringify({ skin: "sapphire", mode: "dark", direction: "rtl" }),
  );
  assert.equal(app.settings.getSettings().skin, "multicolor");
  assert.equal(app.settings.getSettings().mode, "dark");
  assert.equal(app.settings.getSettings().direction, "rtl");
  vm.runInNewContext(app.settings.themeBootstrapScript, app.context);
  assert.equal(app.root.dataset.skin, "multicolor");
  assert.equal(app.root.dir, "rtl");
  app.settings.setSettings({ skin: "violet" });
  assert.equal(settingsApp(app.saved()).settings.getSettings().skin, "violet");
});

test("saved theme selection agrees with bootstrap before hydration", () => {
  const app = settingsApp(
    JSON.stringify({ themeVersion: 3, skin: "rose", mode: "light" }),
  );
  vm.runInNewContext(app.settings.themeBootstrapScript, app.context);
  assert.equal(app.settings.getSettings().skin, "rose");
  assert.equal(app.root.dataset.skin, app.settings.getSettings().skin);
});

test("dark sidebar selection survives reload and is applied before hydration", () => {
  const firstLoad = settingsApp(
    JSON.stringify({ themeVersion: 3, mode: "light", sidebarColor: "light" }),
  );
  firstLoad.settings.setSettings({ sidebarColor: "dark" });

  const reloaded = settingsApp(firstLoad.saved());
  assert.equal(reloaded.settings.getSettings().sidebarColor, "dark");
  vm.runInNewContext(reloaded.settings.themeBootstrapScript, reloaded.context);
  assert.equal(reloaded.root.dataset.sidebarColor, "dark");
});
