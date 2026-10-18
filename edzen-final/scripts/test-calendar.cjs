const fs = require("node:fs");
const vm = require("node:vm");
const assert = require("node:assert/strict");
const test = require("node:test");
const ts = require("typescript");
const context = { exports: {}, TextEncoder };
vm.runInNewContext(
  ts.transpileModule(fs.readFileSync("src/lib/calendar-utils.ts", "utf8"), {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2022,
    },
  }).outputText,
  context,
);
const { validateCalendarEvent, layoutCalendarEvents, calendarICS } =
  context.exports;
const event = (id, start = "09:00", end = "10:00", extra = {}) => ({
  id,
  title: "Team meeting",
  date: "2026-10-13",
  start,
  end,
  category: "Work",
  location: "Focus room",
  description: "Planning",
  attendees: [],
  reminder: "None",
  recurrence: "Does not repeat",
  ...extra,
});

test("invalid dates, zero-length events and unsafe meeting links are rejected", () => {
  assert.equal(validateCalendarEvent(event("a")), null);
  for (const extra of [
    { date: "2026-02-30" },
    { title: "  " },
    { start: "10:00", end: "10:00" },
    { start: "24:00" },
    { link: "javascript:alert(1)" },
  ])
    assert.ok(validateCalendarEvent(event("a", "09:00", "10:00", extra)));
  assert.equal(
    validateCalendarEvent(event("a", "", "", { allDay: true })),
    null,
  );
});

test("overlapping events use separate lanes and independent groups regain full width", () => {
  const result = layoutCalendarEvents([
    event("a"),
    event("b", "09:30", "10:30"),
    event("c", "11:00", "12:00"),
    event("all", "", "", { allDay: true }),
  ]);
  assert.equal(result.length, 3);
  assert.notEqual(result[0].lane, result[1].lane);
  assert.equal(result[0].lanes, 2);
  assert.equal(result[1].lanes, 2);
  assert.equal(result[2].lanes, 1);
});

test("touching hourly events share a lane while short tiles remain visually separate", () => {
  const touching = layoutCalendarEvents([
    event("a"),
    event("b", "10:00", "11:00"),
  ]);
  assert.equal(touching[0].lanes, 1);
  assert.equal(touching[1].lanes, 1);
  const short = layoutCalendarEvents([
    event("a", "09:00", "09:10"),
    event("b", "09:10", "09:20"),
  ]);
  assert.notEqual(short[0].lane, short[1].lane);
});

test("calendar export preserves local times and gives all-day events an exclusive end date", () => {
  const ics = calendarICS([
    event("a"),
    event("b", "", "", { allDay: true, date: "2026-12-31" }),
  ]);
  assert.match(ics, /DTSTART:20261013T090000\r\nDTEND:20261013T100000/);
  assert.match(ics, /DTSTART;VALUE=DATE:20261231\r\nDTEND;VALUE=DATE:20270101/);
  assert.match(ics, /UID:a@edzen-calendar/);
});

test("exports escape user text and fold long Unicode lines at 75 bytes", () => {
  const ics = calendarICS([
    event("a", "09:00", "10:00", {
      title: "Hello; team,\\\r\nBEGIN:VEVENT",
      description: "会議".repeat(70),
    }),
  ]);
  assert.equal((ics.match(/^BEGIN:VEVENT$/gm) ?? []).length, 1);
  assert.match(ics, /SUMMARY:Hello\\; team\\,\\\\\\nBEGIN:VEVENT/);
  for (const line of ics.split("\r\n"))
    assert.ok(Buffer.byteLength(line, "utf8") <= 75);
});
