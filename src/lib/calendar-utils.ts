export type CalendarCategory =
  | "Work"
  | "Meetings"
  | "Personal"
  | "Project"
  | "Marketing"
  | "Deadline"
  | "Reminder";
export type CalendarEvent = {
  id: string;
  title: string;
  date: string;
  start: string;
  end: string;
  category: CalendarCategory;
  location: string;
  description: string;
  attendees: string[];
  reminder: string;
  recurrence: string;
  link?: string;
  notes?: string;
  allDay?: boolean;
};

export function minutes(time: string) {
  const [hours, mins] = time.split(":").map(Number);
  return (hours ?? 0) * 60 + (mins ?? 0);
}

export function validateCalendarEvent(event: CalendarEvent): string | null {
  if (!event.title.trim()) return "Give your event a title.";
  if (!/^\d{4}-\d{2}-\d{2}$/.test(event.date)) return "Choose a valid date.";
  const date = new Date(`${event.date}T00:00:00Z`);
  if (
    Number.isNaN(date.getTime()) ||
    date.toISOString().slice(0, 10) !== event.date
  )
    return "Choose a valid date.";
  if (!event.allDay) {
    if (
      ![event.start, event.end].every((time) =>
        /^([01]\d|2[0-3]):[0-5]\d$/.test(time),
      )
    )
      return "Choose a start and end time.";
    if (minutes(event.end) <= minutes(event.start))
      return "End time must be after start time.";
  }
  if (event.link && !/^https?:\/\//i.test(event.link))
    return "Meeting links must start with https:// or http://.";
  return null;
}

/** Allocate lanes for same-day events, including the minimum readable tile height. */
export function layoutCalendarEvents(events: CalendarEvent[]) {
  const sorted = events
    .filter((event) => !event.allDay)
    .slice()
    .sort(
      (a, b) =>
        minutes(a.start) - minutes(b.start) || minutes(b.end) - minutes(a.end),
    );
  const result: { event: CalendarEvent; lane: number; lanes: number }[] = [];
  let group: typeof result = [];
  let ends: number[] = [];
  let groupEnd = -1;
  const flush = () => {
    for (const item of group) result.push({ ...item, lanes: ends.length });
    group = [];
    ends = [];
  };
  for (const event of sorted) {
    const start = minutes(event.start),
      end = Math.max(minutes(event.end), start + 30);
    if (start >= groupEnd) flush();
    let lane = ends.findIndex((value) => value <= start);
    if (lane < 0) lane = ends.length;
    ends[lane] = end;
    group.push({ event, lane, lanes: 0 });
    groupEnd = Math.max(group.length === 1 ? end : groupEnd, end);
  }
  flush();
  return result;
}

export function calendarICS(events: CalendarEvent[]) {
  const escape = (value: string) =>
    value
      .replace(/\\/g, "\\\\")
      .replace(/\r\n|\r|\n/g, "\\n")
      .replace(/;/g, "\\;")
      .replace(/,/g, "\\,");
  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Edzen//Calendar//EN",
    "CALSCALE:GREGORIAN",
    "X-WR-CALNAME:Edzen Calendar",
  ];
  const stamp = new Date()
    .toISOString()
    .replace(/[-:]/g, "")
    .replace(/\.\d+Z$/, "Z");
  for (const event of events) {
    const date = event.date.replace(/-/g, "");
    lines.push(
      "BEGIN:VEVENT",
      `UID:${escape(event.id)}@edzen-calendar`,
      `DTSTAMP:${stamp}`,
    );
    if (event.allDay) {
      const next = new Date(`${event.date}T00:00:00Z`);
      next.setUTCDate(next.getUTCDate() + 1);
      lines.push(
        `DTSTART;VALUE=DATE:${date}`,
        `DTEND;VALUE=DATE:${next.toISOString().slice(0, 10).replace(/-/g, "")}`,
      );
    } else {
      lines.push(
        `DTSTART:${date}T${event.start.replace(":", "")}00`,
        `DTEND:${date}T${event.end.replace(":", "")}00`,
      );
    }
    lines.push(
      `SUMMARY:${escape(event.title)}`,
      `DESCRIPTION:${escape(event.description)}`,
      `LOCATION:${escape(event.location)}`,
      `CATEGORIES:${escape(event.category)}`,
      "END:VEVENT",
    );
  }
  lines.push("END:VCALENDAR");
  const encoder = new TextEncoder();
  return (
    lines
      .map((line) => {
        let folded = "",
          length = 0;
        for (const character of line) {
          const size = encoder.encode(character).length;
          if (length + size > 75) {
            folded += "\r\n ";
            length = 1;
          }
          folded += character;
          length += size;
        }
        return folded;
      })
      .join("\r\n") + "\r\n"
  );
}
