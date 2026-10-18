import { useEffect, useMemo, useRef, useState } from "react";

import * as Icons from "lucide-react";

import {
  addDays,
  addMonths,
  differenceInCalendarDays,
  endOfMonth,
  endOfWeek,
  format,
  isSameDay,
  isSameMonth,
  startOfMonth,
  startOfWeek,
} from "date-fns";

import { toast } from "sonner";

import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

import { cn } from "@/lib/utils";
import { PageHeader } from "@/components/dashboard/widgets";
import {
  calendarICS,
  layoutCalendarEvents,
  minutes,
  validateCalendarEvent,
  type CalendarCategory,
  type CalendarEvent,
} from "@/lib/calendar-utils";

/* =====================================================
   Types
===================================================== */

type View = "Month" | "Week" | "Day" | "Agenda";

type Category = CalendarCategory;
type EventItem = CalendarEvent;

/* =====================================================
   Category Styles
===================================================== */

const categoryStyles: Record<Category, string> = {
  Work: "bg-chart-4/10 text-foreground",

  Meetings: "bg-primary/12 text-primary",

  Personal: "bg-success/15 text-success",

  Project: "bg-chart-3/10 text-foreground",

  Marketing: "bg-chart-5/10 text-foreground",

  Deadline: "bg-destructive/12 text-destructive",

  Reminder: "bg-muted text-muted-foreground",
};

const categoryDots: Record<Category, string> = {
  Work: "bg-chart-4",
  Meetings: "bg-primary",
  Personal: "bg-success",
  Project: "bg-chart-3",
  Marketing: "bg-chart-5",
  Deadline: "bg-destructive",
  Reminder: "bg-muted-foreground",
};

/* =====================================================
   Initial Events
===================================================== */

const initialEvents: EventItem[] = [
  {
    id: "standup",
    title: "Product Team Standup",
    date: "2026-08-24",
    start: "09:30",
    end: "10:00",
    category: "Work",
    location: "Focus room",
    description: "Daily planning and blockers.",
    attendees: ["Sophia Carter", "Daniel Lee", "You"],
    reminder: "10 minutes before",
    recurrence: "Daily",
    link: "https://meet.edzenadmin.com/product",
  },

  {
    id: "design",
    title: "Design Review",
    date: "2026-08-24",
    start: "14:00",
    end: "15:00",
    category: "Project",
    location: "Design Studio",
    description: "Review the onboarding flow and mobile states.",
    attendees: ["Sophia Carter", "Olivia Smith"],
    reminder: "30 minutes before",
    recurrence: "Does not repeat",
  },

  {
    id: "demo",
    title: "Customer Demo - Acme Inc.",
    date: "2026-08-25",
    start: "11:00",
    end: "12:00",
    category: "Meetings",
    location: "Video conference",
    description: "Product walkthrough for Acme stakeholders.",
    attendees: ["Ethan Brown", "Emma Wilson"],
    reminder: "1 hour before",
    recurrence: "Does not repeat",
    link: "https://meet.edzenadmin.com/acme",
  },

  {
    id: "launch",
    title: "Marketing Campaign Launch",
    date: "2026-08-26",
    start: "08:00",
    end: "09:00",
    category: "Marketing",
    location: "Marketing channel",
    description: "Launch checklist and owner handoff.",
    attendees: ["Mia Johnson", "Noah Williams"],
    reminder: "At time of event",
    recurrence: "Does not repeat",
  },

  {
    id: "sprint",
    title: "Sprint Planning",
    date: "2026-08-27",
    start: "10:00",
    end: "11:30",
    category: "Work",
    location: "North meeting room",
    description: "Plan the next sprint scope.",
    attendees: ["Daniel Lee", "Olivia Smith", "You"],
    reminder: "30 minutes before",
    recurrence: "Weekly",
  },

  {
    id: "qbr",
    title: "Quarterly Business Review",
    date: "2026-08-28",
    start: "15:00",
    end: "16:30",
    category: "Meetings",
    location: "Executive room",
    description: "Quarterly progress and outcomes.",
    attendees: ["Sophia Carter", "Emma Wilson"],
    reminder: "1 day before",
    recurrence: "Does not repeat",
  },

  {
    id: "research",
    title: "Research Readout",
    date: "2026-08-20",
    start: "13:00",
    end: "14:00",
    category: "Project",
    location: "Research room",
    description: "Share usability findings and next steps.",
    attendees: ["Olivia Smith", "You"],
    reminder: "30 minutes before",
    recurrence: "Does not repeat",
  },

  {
    id: "one-on-one",
    title: "1:1 with Daniel",
    date: "2026-08-21",
    start: "11:30",
    end: "12:00",
    category: "Meetings",
    location: "Focus room",
    description: "Weekly check-in with Daniel.",
    attendees: ["Daniel Lee"],
    reminder: "10 minutes before",
    recurrence: "Weekly",
  },

  {
    id: "gym",
    title: "Gym session",
    date: "2026-08-23",
    start: "08:00",
    end: "09:00",
    category: "Personal",
    location: "Wellness center",
    description: "Personal wellbeing block.",
    attendees: [],
    reminder: "30 minutes before",
    recurrence: "Weekly",
  },

  {
    id: "content",
    title: "Content Calendar Review",
    date: "2026-08-24",
    start: "16:00",
    end: "16:45",
    category: "Marketing",
    location: "Marketing channel",
    description: "Approve next week content plan.",
    attendees: ["Mia Johnson"],
    reminder: "10 minutes before",
    recurrence: "Weekly",
  },

  {
    id: "analytics",
    title: "Analytics Deep Dive",
    date: "2026-08-25",
    start: "15:30",
    end: "16:30",
    category: "Work",
    location: "Data hub",
    description: "Review conversion and retention trends.",
    attendees: ["Noah Williams", "You"],
    reminder: "30 minutes before",
    recurrence: "Does not repeat",
  },

  {
    id: "release",
    title: "Release Readiness",
    date: "2026-08-26",
    start: "13:30",
    end: "14:15",
    category: "Deadline",
    location: "Engineering channel",
    description: "Confirm release blockers are closed.",
    attendees: ["Daniel Lee", "Ethan Brown"],
    reminder: "1 hour before",
    recurrence: "Does not repeat",
  },

  {
    id: "client",
    title: "Client Follow-up",
    date: "2026-08-27",
    start: "14:00",
    end: "14:30",
    category: "Meetings",
    location: "Video conference",
    description: "Follow-up discussion with client team.",
    attendees: ["Emma Wilson"],
    reminder: "10 minutes before",
    recurrence: "Does not repeat",
  },

  {
    id: "retro",
    title: "Sprint Retrospective",
    date: "2026-08-28",
    start: "11:00",
    end: "12:00",
    category: "Project",
    location: "North meeting room",
    description: "Capture improvements for the next sprint.",
    attendees: ["Sophia Carter", "Daniel Lee", "Olivia Smith"],
    reminder: "30 minutes before",
    recurrence: "Biweekly",
  },

  {
    id: "weekend",
    title: "Weekly Planning",
    date: "2026-08-30",
    start: "18:00",
    end: "18:30",
    category: "Reminder",
    location: "",
    description: "Review priorities for the coming week.",
    attendees: [],
    reminder: "At time of event",
    recurrence: "Weekly",
  },

  {
    id: "invoice",
    title: "Invoice Deadline",
    date: "2026-08-29",
    start: "",
    end: "",
    category: "Deadline",
    location: "",
    description: "Submit August invoices.",
    attendees: [],
    reminder: "1 day before",
    recurrence: "Monthly",
    allDay: true,
  },
];

/* =====================================================
   Categories
===================================================== */

const categories = Object.keys(categoryStyles) as Category[];

/* =====================================================
   Empty Event
===================================================== */

const emptyEvent = (date = format(new Date(), "yyyy-MM-dd")): EventItem => ({
  id: "",
  title: "",
  date,
  start: "09:00",
  end: "10:00",
  category: "Work",
  location: "",
  description: "",
  attendees: [],
  reminder: "10 minutes before",
  recurrence: "Does not repeat",
  link: "",
  notes: "",
});

/* =====================================================
   Calendar App
===================================================== */

const CALENDAR_STORAGE = "edzen-calendar-events-v1";
const localDate = (value: string) => new Date(`${value}T00:00:00`);
const sortEvents = (items: EventItem[]) =>
  items
    .slice()
    .sort(
      (a, b) =>
        a.date.localeCompare(b.date) ||
        Number(Boolean(b.allDay)) - Number(Boolean(a.allDay)) ||
        a.start.localeCompare(b.start),
    );
const periodDays = (date: Date, view: View) => {
  const start =
    view === "Month"
      ? startOfMonth(date)
      : view === "Day"
        ? date
        : startOfWeek(date, { weekStartsOn: 1 });
  const count =
    view === "Month" ? endOfMonth(date).getDate() : view === "Day" ? 1 : 7;
  return Array.from({ length: count }, (_, index) => addDays(start, index));
};

export function CalendarApp() {
  const [today] = useState(() => new Date());
  const [current, setCurrent] = useState(() => new Date());
  const [events, setEvents] = useState<EventItem[]>(() => {
    const anchor = startOfWeek(new Date(), { weekStartsOn: 1 });
    return initialEvents.map((event) => ({
      ...event,
      date: format(
        addDays(
          anchor,
          differenceInCalendarDays(
            localDate(event.date),
            new Date(2026, 7, 24),
          ),
        ),
        "yyyy-MM-dd",
      ),
    }));
  });
  const [loaded, setLoaded] = useState(false);
  const [view, setView] = useState<View>("Month");
  const [visible, setVisible] = useState<Record<Category, boolean>>(
    () =>
      Object.fromEntries(
        categories.map((category) => [category, true]),
      ) as Record<Category, boolean>,
  );
  const [search, setSearch] = useState("");
  const [form, setForm] = useState<EventItem | null>(null);
  const [detail, setDetail] = useState<EventItem | null>(null);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [storageBlocked, setStorageBlocked] = useState(false);
  useEffect(() => {
    if (window.matchMedia("(max-width: 639px)").matches) setView("Agenda");
    try {
      const stored = localStorage.getItem(CALENDAR_STORAGE);
      if (stored) {
        const parsed: unknown = JSON.parse(stored);
        if (
          Array.isArray(parsed) &&
          parsed.every(
            (item) =>
              item &&
              typeof item.id === "string" &&
              typeof item.title === "string" &&
              typeof item.date === "string" &&
              typeof item.start === "string" &&
              typeof item.end === "string" &&
              typeof item.description === "string" &&
              typeof item.location === "string" &&
              Array.isArray(item.attendees) &&
              item.attendees.every(
                (name: unknown) => typeof name === "string",
              ) &&
              categories.includes(item.category) &&
              !validateCalendarEvent(item),
          )
        )
          setEvents(parsed as EventItem[]);
      }
    } catch {
      /* Keep the sample schedule if saved data is unavailable. */
    }
    setLoaded(true);
  }, []);
  useEffect(() => {
    if (loaded)
      try {
        localStorage.setItem(CALENDAR_STORAGE, JSON.stringify(events));
        setStorageBlocked(false);
      } catch {
        setStorageBlocked(true);
      }
  }, [events, loaded]);
  const filtered = useMemo(
    () =>
      sortEvents(
        events.filter(
          (event) =>
            visible[event.category] &&
            `${event.title} ${event.location} ${event.description} ${event.attendees.join(" ")}`
              .toLowerCase()
              .includes(search.trim().toLowerCase()),
        ),
      ),
    [events, visible, search],
  );
  const days = periodDays(current, view);
  const first = format(days[0] ?? current, "yyyy-MM-dd"),
    last = format(days.at(-1) ?? current, "yyyy-MM-dd");
  const period = filtered.filter(
    (event) => event.date >= first && event.date <= last,
  );
  const hours =
    period.reduce(
      (sum, event) =>
        sum + (event.allDay ? 0 : minutes(event.end) - minutes(event.start)),
      0,
    ) / 60;
  const create = (date = current, start = "09:00") => {
    const end = Math.min(minutes(start) + 60, 1439);
    setForm({
      ...emptyEvent(format(date, "yyyy-MM-dd")),
      start,
      end: `${Math.floor(end / 60)
        .toString()
        .padStart(2, "0")}:${(end % 60).toString().padStart(2, "0")}`,
    });
  };
  const saveEvent = () => {
    if (!form) return;
    const error = validateCalendarEvent(form);
    if (error) {
      toast.error(error);
      return;
    }
    const isNew = !form.id;
    const saved = {
      ...form,
      title: form.title.trim(),
      id:
        form.id ||
        globalThis.crypto?.randomUUID?.() ||
        `event-${Date.now()}-${Math.random().toString(36).slice(2)}`,
    };
    const collision = events.some(
      (event) =>
        event.id !== saved.id &&
        event.date === saved.date &&
        !event.allDay &&
        !saved.allDay &&
        minutes(event.start) < minutes(saved.end) &&
        minutes(event.end) > minutes(saved.start),
    );
    setEvents((all) =>
      isNew
        ? [...all, saved]
        : all.map((event) => (event.id === saved.id ? saved : event)),
    );
    setCurrent(localDate(saved.date));
    setForm(null);
    setDetail(saved);
    toast.success(isNew ? "Event created" : "Event updated");
    if (collision)
      toast.info("This event overlaps with another item in your schedule.");
  };
  const nav = (amount: number) =>
    setCurrent((date) =>
      view === "Month"
        ? addMonths(date, amount)
        : addDays(date, view === "Day" ? amount : amount * 7),
    );
  const exportCalendar = () => {
    const url = URL.createObjectURL(
      new Blob([calendarICS(period)], { type: "text/calendar;charset=utf-8" }),
    );
    const link = document.createElement("a");
    link.href = url;
    link.download = `edzen-calendar-${first}.ics`;
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    toast.success("Calendar exported");
  };
  const sidebar = (mobile = false) => (
    <CalendarSidebar
      current={current}
      today={today}
      onDate={(date) => {
        setCurrent(date);
        if (mobile) setSidebarOpen(false);
      }}
      visible={visible}
      setVisible={setVisible}
      events={filtered}
      allEvents={events}
      onEvent={(event) => {
        setDetail(event);
        setSidebarOpen(false);
      }}
      onCreate={() => {
        create();
        setSidebarOpen(false);
      }}
    />
  );

  return (
    <div className="space-y-5">
      <PageHeader
        title="Calendar"
        subtitle="Make room for focused work, meetings, and everything in between."
        breadcrumb={["Apps", "Calendar"]}
        actions={
          <>
            <Button
              variant="outline"
              onClick={exportCalendar}
              disabled={!period.length}
            >
              <Icons.Download />
              Export calendar
            </Button>
            <Button onClick={() => create()}>
              <Icons.Plus />
              New event
            </Button>
          </>
        }
      />
      <div className="grid grid-cols-3 gap-3">
        {[
          {
            label: "Events in view",
            value: period.length,
            caption: `${format(days[0] ?? current, "MMM d")} – ${format(days.at(-1) ?? current, "MMM d")}`,
            icon: Icons.CalendarDays,
            color: "bg-primary/10 text-primary",
          },
          {
            label: "Meetings",
            value: period.filter((event) => event.category === "Meetings")
              .length,
            caption: "Time to connect and collaborate",
            icon: Icons.Users,
            color: "bg-chart-3/10 text-chart-3",
          },
          {
            label: "Scheduled time",
            value: `${Number(hours.toFixed(1))}h`,
            caption: "Timed events in this view",
            icon: Icons.Clock3,
            color: "bg-chart-4/10 text-chart-4",
          },
        ].map((stat) => (
          <div
            key={stat.label}
            className="flex items-center gap-3 rounded-lg border bg-card px-4 py-3"
          >
            <span
              className={cn(
                "hidden size-10 shrink-0 place-items-center rounded-lg sm:grid",
                stat.color,
              )}
            >
              <stat.icon className="size-5" />
            </span>
            <div>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
              <p className="mt-0.5 text-xl font-semibold tabular-nums">
                {stat.value}
              </p>
              <p className="hidden text-[11px] text-muted-foreground sm:block">
                {stat.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex overflow-hidden rounded-xl border bg-card">
        <div className="hidden w-[240px] shrink-0 border-e xl:block">
          {sidebar()}
        </div>
        <section aria-label="Calendar workspace" className="min-w-0 flex-1">
          <CalendarToolbar
            current={current}
            view={view}
            setView={setView}
            onNav={nav}
            onToday={() => setCurrent(today)}
            search={search}
            setSearch={setSearch}
            onSidebar={() => setSidebarOpen(true)}
          />
          <CalendarGrid
            view={view}
            current={current}
            today={today}
            events={filtered}
            onEvent={setDetail}
            onEmpty={create}
            onShowDay={(date) => {
              setCurrent(date);
              setView("Day");
            }}
          />
          <div className="flex flex-wrap items-center justify-between gap-2 border-t px-5 py-3 text-[11px] text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Icons.CircleCheck className="size-3.5 text-success" />
              {storageBlocked
                ? "Changes are available for this session"
                : "Changes are saved on this device"}
            </span>
            <span>
              {period.length} {period.length === 1 ? "event" : "events"} in view
              · Local time
            </span>
          </div>
        </section>
      </div>
      <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
        <SheetContent side="left" className="overflow-y-auto">
          <SheetHeader>
            <SheetTitle>Your calendars</SheetTitle>
            <SheetDescription>
              Choose dates and filter your schedule.
            </SheetDescription>
          </SheetHeader>
          <div className="mt-4">{sidebar(true)}</div>
        </SheetContent>
      </Sheet>
      <EventForm
        open={Boolean(form)}
        event={form}
        setEvent={setForm}
        onClose={() => setForm(null)}
        onSave={saveEvent}
      />
      <Sheet
        open={Boolean(detail)}
        onOpenChange={(open) => !open && setDetail(null)}
      >
        <SheetContent className="w-full overflow-y-auto sm:max-w-md">
          <SheetHeader>
            <SheetTitle>Event details</SheetTitle>
            <SheetDescription>
              View and manage this calendar event.
            </SheetDescription>
          </SheetHeader>
          <EventDetails
            event={detail}
            onEdit={() => {
              setForm(detail);
              setDetail(null);
            }}
            onDuplicate={() => {
              if (detail)
                setForm({ ...detail, id: "", title: `${detail.title} copy` });
              setDetail(null);
            }}
            onDelete={() => setDeleteOpen(true)}
          />
        </SheetContent>
      </Sheet>
      <Dialog open={deleteOpen} onOpenChange={setDeleteOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete this event?</DialogTitle>
            <DialogDescription>
              This removes the event from your saved calendar.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDeleteOpen(false)}>
              Keep event
            </Button>
            <Button
              variant="destructive"
              onClick={() => {
                if (detail)
                  setEvents((all) =>
                    all.filter((event) => event.id !== detail.id),
                  );
                setDeleteOpen(false);
                setDetail(null);
                toast.success("Event deleted");
              }}
            >
              Delete event
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

function CalendarSidebar({
  current,
  today,
  onDate,
  visible,
  setVisible,
  events,
  allEvents,
  onEvent,
  onCreate,
}: {
  current: Date;
  today: Date;
  onDate: (date: Date) => void;
  visible: Record<Category, boolean>;
  setVisible: React.Dispatch<React.SetStateAction<Record<Category, boolean>>>;
  events: EventItem[];
  allEvents: EventItem[];
  onEvent: (event: EventItem) => void;
  onCreate: () => void;
}) {
  const start = startOfWeek(startOfMonth(current), { weekStartsOn: 1 });
  const upcoming = events
    .filter((event) => event.date >= format(today, "yyyy-MM-dd"))
    .slice(0, 3);
  return (
    <aside className="space-y-6 p-4">
      <Button className="w-full" onClick={onCreate}>
        <Icons.Plus />
        Create event
      </Button>
      <div>
        <div className="mb-3 flex items-center justify-between">
          <span className="text-sm font-semibold">
            {format(current, "MMMM yyyy")}
          </span>
          <div className="flex">
            <Button
              variant="ghost"
              size="iconSm"
              onClick={() => onDate(addMonths(current, -1))}
              aria-label="Mini calendar previous month"
            >
              <Icons.ChevronLeft />
            </Button>
            <Button
              variant="ghost"
              size="iconSm"
              onClick={() => onDate(addMonths(current, 1))}
              aria-label="Mini calendar next month"
            >
              <Icons.ChevronRight />
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-7 gap-y-1 text-center">
          {["M", "T", "W", "T", "F", "S", "S"].map((day, index) => (
            <span
              key={index}
              className="py-1 text-[10px] font-medium text-muted-foreground"
            >
              {day}
            </span>
          ))}
          {Array.from({ length: 42 }, (_, index) => addDays(start, index)).map(
            (day) => (
              <button
                key={format(day, "yyyy-MM-dd")}
                type="button"
                aria-label={format(day, "MMMM d, yyyy")}
                aria-pressed={isSameDay(day, current)}
                onClick={() => onDate(day)}
                className={cn(
                  "relative mx-auto grid size-7 place-items-center rounded-full text-[11px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  isSameDay(day, current)
                    ? "bg-primary text-primary-foreground"
                    : isSameDay(day, today)
                      ? "bg-primary/10 font-semibold text-primary"
                      : "hover:bg-muted",
                  !isSameMonth(day, current) && "opacity-40",
                )}
              >
                {format(day, "d")}
                {events.some(
                  (event) => event.date === format(day, "yyyy-MM-dd"),
                ) &&
                  !isSameDay(day, current) && (
                    <span className="absolute bottom-0.5 size-0.5 rounded-full bg-primary" />
                  )}
              </button>
            ),
          )}
        </div>
      </div>
      <div className="border-t pt-5">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
            My calendars
          </h2>
          <button
            type="button"
            onClick={() =>
              setVisible(
                Object.fromEntries(
                  categories.map((category) => [category, true]),
                ) as Record<Category, boolean>,
              )
            }
            className="text-[11px] font-medium text-primary"
          >
            Show all
          </button>
        </div>
        <div className="space-y-0.5">
          {categories.map((category) => (
            <label
              key={category}
              className="flex cursor-pointer items-center gap-2.5 rounded-md px-1 py-2 text-[12px]"
            >
              <input
                type="checkbox"
                checked={visible[category]}
                onChange={() =>
                  setVisible((all) => ({ ...all, [category]: !all[category] }))
                }
                className="size-3.5 accent-primary"
              />
              <span
                className={cn("size-2 rounded-full", categoryDots[category])}
              />
              <span className="flex-1">{category}</span>
              <span className="text-[10px] tabular-nums text-muted-foreground">
                {
                  allEvents.filter((event) => event.category === category)
                    .length
                }
              </span>
            </label>
          ))}
        </div>
      </div>
      <div className="border-t pt-5">
        <h2 className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
          Coming up
        </h2>
        {upcoming.length ? (
          <div className="space-y-3">
            {upcoming.map((event) => (
              <button
                key={event.id}
                type="button"
                onClick={() => onEvent(event)}
                className="flex w-full items-start gap-2.5 text-start"
              >
                <span
                  className={cn(
                    "mt-1.5 size-2 shrink-0 rounded-full",
                    categoryDots[event.category],
                  )}
                />
                <div className="min-w-0">
                  <p className="truncate text-[12px] font-medium hover:text-primary">
                    {event.title}
                  </p>
                  <p className="mt-0.5 text-[10px] text-muted-foreground">
                    {format(localDate(event.date), "MMM d")} ·{" "}
                    {event.allDay ? "All day" : event.start}
                  </p>
                </div>
              </button>
            ))}
          </div>
        ) : (
          <p className="text-xs leading-5 text-muted-foreground">
            No upcoming events match your filters.
          </p>
        )}
      </div>
    </aside>
  );
}

function CalendarToolbar({
  current,
  view,
  setView,
  onNav,
  onToday,
  search,
  setSearch,
  onSidebar,
}: {
  current: Date;
  view: View;
  setView: (view: View) => void;
  onNav: (amount: number) => void;
  onToday: () => void;
  search: string;
  setSearch: (value: string) => void;
  onSidebar: () => void;
}) {
  const weekStart = startOfWeek(current, { weekStartsOn: 1 });
  const title =
    view === "Month"
      ? format(current, "MMMM yyyy")
      : view === "Day"
        ? format(current, "EEE, MMM d")
        : `${format(weekStart, "MMM d")} – ${format(addDays(weekStart, 6), "MMM d, yyyy")}`;
  return (
    <div className="space-y-4 border-b px-4 py-4 sm:px-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-2">
          <Button
            variant="outline"
            size="iconSm"
            className="xl:hidden"
            onClick={onSidebar}
            aria-label="Open calendar filters"
          >
            <Icons.PanelLeft />
          </Button>
          <h2 className="text-lg font-semibold sm:text-xl">{title}</h2>
        </div>
        <div className="flex items-center gap-1.5">
          <Button variant="outline" size="sm" onClick={onToday}>
            Today
          </Button>
          <Button
            variant="ghost"
            size="iconSm"
            onClick={() => onNav(-1)}
            aria-label="Previous calendar period"
          >
            <Icons.ChevronLeft />
          </Button>
          <Button
            variant="ghost"
            size="iconSm"
            onClick={() => onNav(1)}
            aria-label="Next calendar period"
          >
            <Icons.ChevronRight />
          </Button>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div
          className="inline-flex rounded-lg border bg-muted/50 p-1"
          aria-label="Calendar view"
        >
          {(["Month", "Week", "Day", "Agenda"] as View[]).map((item) => (
            <button
              key={item}
              type="button"
              aria-pressed={view === item}
              onClick={() => setView(item)}
              className={cn(
                "rounded-md px-3 py-1.5 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                view === item
                  ? "bg-card text-primary shadow-sm"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {item}
            </button>
          ))}
        </div>
        <label className="relative w-full sm:w-52">
          <span className="sr-only">Search calendar events</span>
          <Icons.Search className="pointer-events-none absolute start-3 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground" />
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search events, people…"
            className="h-9 w-full rounded-lg border bg-card ps-9 pe-8 text-xs outline-none focus-visible:ring-2 focus-visible:ring-ring"
          />
          {search && (
            <button
              type="button"
              aria-label="Clear calendar search"
              onClick={() => setSearch("")}
              className="absolute end-2 top-1/2 -translate-y-1/2 text-muted-foreground"
            >
              <Icons.X className="size-3.5" />
            </button>
          )}
        </label>
      </div>
    </div>
  );
}

function CalendarGrid({
  view,
  current,
  today,
  events,
  onEvent,
  onEmpty,
  onShowDay,
}: {
  view: View;
  current: Date;
  today: Date;
  events: EventItem[];
  onEvent: (event: EventItem) => void;
  onEmpty: (date: Date, start?: string) => void;
  onShowDay: (date: Date) => void;
}) {
  if (view === "Agenda") {
    const days = periodDays(current, view);
    return (
      <div className="min-h-[540px] p-4 sm:p-5">
        {days.map((day) => {
          const items = events.filter(
            (event) => event.date === format(day, "yyyy-MM-dd"),
          );
          return (
            <div
              key={format(day, "yyyy-MM-dd")}
              className="grid gap-3 border-b py-4 last:border-0 sm:grid-cols-[94px_1fr]"
            >
              <div>
                <p
                  className={cn(
                    "text-sm font-semibold",
                    isSameDay(day, today) && "text-primary",
                  )}
                >
                  {format(day, "EEE, d")}
                </p>
                <p className="mt-1 text-[11px] text-muted-foreground">
                  {format(day, "MMMM")}
                </p>
              </div>
              <div className="space-y-2">
                {items.length ? (
                  items.map((event) => (
                    <button
                      key={event.id}
                      type="button"
                      onClick={() => onEvent(event)}
                      className="flex w-full flex-wrap items-center gap-3 rounded-lg border px-3 py-3 text-start transition-colors hover:bg-muted/30"
                    >
                      <span
                        className={cn(
                          "h-8 w-1 rounded-full",
                          categoryDots[event.category],
                        )}
                      />
                      <div className="w-[100px] text-xs tabular-nums text-muted-foreground">
                        {event.allDay
                          ? "All day"
                          : `${event.start} – ${event.end}`}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium">{event.title}</p>
                        {event.location && (
                          <p className="mt-1 flex items-center gap-1 text-[11px] text-muted-foreground">
                            <Icons.MapPin className="size-3" />
                            {event.location}
                          </p>
                        )}
                      </div>
                      <span
                        className={cn(
                          "rounded-md px-2 py-1 text-[10px] font-medium",
                          categoryStyles[event.category],
                        )}
                      >
                        {event.category}
                      </span>
                    </button>
                  ))
                ) : (
                  <button
                    type="button"
                    onClick={() => onEmpty(day)}
                    className="flex items-center gap-2 py-2 text-xs text-muted-foreground hover:text-primary"
                  >
                    <Icons.Plus className="size-3.5" />
                    No events · Add to your day
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
  if (view !== "Month")
    return (
      <CalendarTimeline
        current={current}
        today={today}
        view={view}
        events={events}
        onEvent={onEvent}
        onEmpty={onEmpty}
      />
    );
  const start = startOfWeek(startOfMonth(current), { weekStartsOn: 1 });
  return (
    <div className="overflow-x-auto">
      <div className="grid min-w-[650px] grid-cols-7">
        {[
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ].map((day) => (
          <div
            key={day}
            className="border-b bg-muted/20 px-3 py-3 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground"
          >
            {day.slice(0, 3)}
          </div>
        ))}
        {Array.from({ length: 42 }, (_, index) => addDays(start, index)).map(
          (day) => {
            const items = events.filter(
              (event) => event.date === format(day, "yyyy-MM-dd"),
            );
            return (
              <section
                key={format(day, "yyyy-MM-dd")}
                className={cn(
                  "group min-h-[124px] border-b border-e p-2 last:border-e-0",
                  !isSameMonth(day, current)
                    ? "bg-muted/30"
                    : day.getDay() === 0 || day.getDay() === 6
                      ? "bg-muted/10"
                      : "bg-card",
                )}
              >
                <div className="mb-2 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => onShowDay(day)}
                    aria-label={`View ${format(day, "MMMM d")}`}
                    className={cn(
                      "grid size-7 place-items-center rounded-full text-xs font-medium hover:ring-1 hover:ring-primary/30",
                      isSameDay(day, today)
                        ? "bg-primary text-primary-foreground"
                        : !isSameMonth(day, current)
                          ? "text-muted-foreground/70"
                          : "text-foreground",
                    )}
                  >
                    {format(day, "d")}
                  </button>
                  <button
                    type="button"
                    aria-label={`Create event on ${format(day, "MMMM d")}`}
                    onClick={() => onEmpty(day)}
                    className="grid size-6 place-items-center rounded-md text-muted-foreground opacity-0 hover:bg-muted focus:opacity-100 group-hover:opacity-100"
                  >
                    <Icons.Plus className="size-3.5" />
                  </button>
                </div>
                <div className="space-y-1.5">
                  {items.slice(0, 3).map((event) => (
                    <button
                      key={event.id}
                      type="button"
                      onClick={() => onEvent(event)}
                      title={`${event.title} · ${event.allDay ? "All day" : event.start}`}
                      className={cn(
                        "flex w-full items-center gap-1.5 overflow-hidden rounded-md px-2 py-1.5 text-start text-[10px] font-medium transition-opacity hover:opacity-80",
                        categoryStyles[event.category],
                      )}
                    >
                      <span
                        className={cn(
                          "size-1.5 shrink-0 rounded-full",
                          categoryDots[event.category],
                        )}
                      />
                      <span className="truncate">
                        {event.allDay ? "" : `${event.start} `}
                        {event.title}
                      </span>
                    </button>
                  ))}
                  {items.length > 3 && (
                    <button
                      type="button"
                      onClick={() => onShowDay(day)}
                      className="px-2 text-[10px] font-medium text-muted-foreground hover:text-primary"
                    >
                      +{items.length - 3} more events
                    </button>
                  )}
                </div>
              </section>
            );
          },
        )}
      </div>
    </div>
  );
}

function CalendarTimeline({
  current,
  today,
  view,
  events,
  onEvent,
  onEmpty,
}: {
  current: Date;
  today: Date;
  view: "Week" | "Day";
  events: EventItem[];
  onEvent: (event: EventItem) => void;
  onEmpty: (date: Date, start?: string) => void;
}) {
  const viewport = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (viewport.current) viewport.current.scrollTop = 7 * 48;
  }, [view]);
  const days = periodDays(current, view);
  const grid = `64px repeat(${days.length}, minmax(0, 1fr))`;
  return (
    <div ref={viewport} className="max-h-[660px] overflow-auto">
      <div className={view === "Week" ? "min-w-[820px]" : "min-w-[320px]"}>
        <div
          className="sticky top-0 z-20 grid border-b bg-card"
          style={{ gridTemplateColumns: grid }}
        >
          <div className="border-e" />
          {days.map((day) => (
            <div
              key={format(day, "yyyy-MM-dd")}
              className="border-e py-3 text-center"
            >
              <p className="text-[10px] uppercase text-muted-foreground">
                {format(day, "EEE")}
              </p>
              <span
                className={cn(
                  "mx-auto mt-1 grid size-8 place-items-center rounded-full text-sm font-semibold",
                  isSameDay(day, today) && "bg-primary text-primary-foreground",
                )}
              >
                {format(day, "d")}
              </span>
            </div>
          ))}
        </div>
        <div className="grid border-b" style={{ gridTemplateColumns: grid }}>
          <div className="border-e px-2 py-3 text-[10px] text-muted-foreground">
            All day
          </div>
          {days.map((day) => (
            <div
              key={format(day, "yyyy-MM-dd")}
              className="space-y-1 border-e p-2"
            >
              {events
                .filter(
                  (event) =>
                    event.allDay && event.date === format(day, "yyyy-MM-dd"),
                )
                .map((event) => (
                  <button
                    key={event.id}
                    type="button"
                    onClick={() => onEvent(event)}
                    className={cn(
                      "w-full truncate rounded-md px-2 py-1 text-start text-[10px]",
                      categoryStyles[event.category],
                    )}
                  >
                    {event.title}
                  </button>
                ))}
            </div>
          ))}
        </div>
        <div className="grid" style={{ gridTemplateColumns: grid }}>
          <div>
            {Array.from({ length: 24 }, (_, hour) => (
              <div
                key={hour}
                className="h-12 border-b border-e px-2 pt-1 text-[10px] tabular-nums text-muted-foreground"
              >{`${hour.toString().padStart(2, "0")}:00`}</div>
            ))}
          </div>
          {days.map((day) => (
            <div
              key={format(day, "yyyy-MM-dd")}
              className="relative h-[1152px] border-e"
            >
              {Array.from({ length: 24 }, (_, hour) => (
                <button
                  key={hour}
                  type="button"
                  aria-label={`Create event ${format(day, "EEE, MMM d")} at ${hour}:00`}
                  onClick={() =>
                    onEmpty(day, `${hour.toString().padStart(2, "0")}:00`)
                  }
                  className="block h-12 w-full border-b transition-colors hover:bg-primary/5 focus-visible:bg-primary/10 focus-visible:outline-none"
                />
              ))}
              {layoutCalendarEvents(
                events.filter(
                  (event) => event.date === format(day, "yyyy-MM-dd"),
                ),
              ).map(({ event, lane, lanes }) => (
                <button
                  key={event.id}
                  type="button"
                  onClick={() => onEvent(event)}
                  title={`${event.title} · ${event.start} – ${event.end}`}
                  style={{
                    top: `${minutes(event.start) * 0.8}px`,
                    height: `${Math.max((minutes(event.end) - minutes(event.start)) * 0.8, 24)}px`,
                    insetInlineStart: `calc(${(lane / lanes) * 100}% + 2px)`,
                    width: `calc(${100 / lanes}% - 4px)`,
                  }}
                  className={cn(
                    "absolute z-10 overflow-hidden rounded-md border border-current/15 px-2 py-1 text-start text-[10px] font-medium hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                    categoryStyles[event.category],
                  )}
                >
                  <p className="truncate font-semibold">{event.title}</p>
                  <p className="truncate opacity-80">
                    {event.start} – {event.end}
                  </p>
                  {view === "Day" && event.location && (
                    <p className="mt-1 truncate opacity-80">{event.location}</p>
                  )}
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function EventForm({
  open,
  event,
  setEvent,
  onClose,
  onSave,
}: {
  open: boolean;
  event: EventItem | null;
  setEvent: (event: EventItem | null) => void;
  onClose: () => void;
  onSave: () => void;
}) {
  const [attendeeInput, setAttendeeInput] = useState("");
  useEffect(() => {
    setAttendeeInput(event?.attendees.join(", ") ?? "");
  }, [open, event?.id]);
  const update = <K extends keyof EventItem>(key: K, value: EventItem[K]) =>
    event && setEvent({ ...event, [key]: value });
  return (
    <Dialog open={open} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-xl">
        <DialogHeader>
          <DialogTitle>{event?.id ? "Edit event" : "Create event"}</DialogTitle>
          <DialogDescription>
            Add the details for this calendar event.
          </DialogDescription>
        </DialogHeader>
        {event && (
          <div className="grid gap-4 py-2">
            <input
              aria-label="Event title"
              value={event.title}
              onChange={(item) => update("title", item.target.value)}
              placeholder="Event title"
              className="h-10 rounded-lg border bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring"
            />
            <div className="grid grid-cols-2 gap-3">
              <input
                type="date"
                aria-label="Event date"
                value={event.date}
                onChange={(item) => update("date", item.target.value)}
                className="h-10 rounded-lg border bg-background px-3 text-sm"
              />
              <select
                aria-label="Event category"
                value={event.category}
                onChange={(item) =>
                  update("category", item.target.value as Category)
                }
                className="h-10 rounded-lg border bg-background px-3 text-sm"
              >
                {categories.map((category) => (
                  <option key={category}>{category}</option>
                ))}
              </select>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <input
                type="time"
                aria-label="Start time"
                value={event.start}
                onChange={(item) => update("start", item.target.value)}
                disabled={event.allDay}
                className="h-10 rounded-lg border bg-background px-3 text-sm disabled:opacity-50"
              />
              <input
                type="time"
                aria-label="End time"
                value={event.end}
                onChange={(item) => update("end", item.target.value)}
                disabled={event.allDay}
                className="h-10 rounded-lg border bg-background px-3 text-sm disabled:opacity-50"
              />
            </div>
            <input
              aria-label="Event location"
              value={event.location}
              onChange={(item) => update("location", item.target.value)}
              placeholder="Location"
              className="h-10 rounded-lg border bg-background px-3 text-sm"
            />
            <textarea
              aria-label="Event description"
              value={event.description}
              onChange={(item) => update("description", item.target.value)}
              placeholder="Description"
              className="min-h-24 rounded-lg border bg-background p-3 text-sm"
            />
            <div className="grid gap-3 border-t pt-4">
              <label className="space-y-1.5 text-xs font-medium">
                Attendees
                <input
                  value={attendeeInput}
                  onChange={(item) => {
                    setAttendeeInput(item.target.value);
                    update(
                      "attendees",
                      item.target.value
                        .split(",")
                        .map((name) => name.trim())
                        .filter(Boolean),
                    );
                  }}
                  placeholder="Names separated by commas"
                  className="h-10 w-full rounded-lg border bg-card px-3 text-sm font-normal"
                />
              </label>
              <label className="space-y-1.5 text-xs font-medium">
                Meeting link{" "}
                <span className="font-normal text-muted-foreground">
                  (optional)
                </span>
                <input
                  type="url"
                  value={event.link ?? ""}
                  onChange={(item) => update("link", item.target.value)}
                  placeholder="https://…"
                  className="h-10 w-full rounded-lg border bg-card px-3 text-sm font-normal"
                />
              </label>
            </div>
            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={Boolean(event.allDay)}
                onChange={(item) => update("allDay", item.target.checked)}
                className="size-4 accent-primary"
              />{" "}
              All day event
            </label>
          </div>
        )}
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={onSave}>Save event</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

function EventDetails({
  event,
  onEdit,
  onDuplicate,
  onDelete,
}: {
  event: EventItem | null;
  onEdit: () => void;
  onDuplicate: () => void;
  onDelete: () => void;
}) {
  if (!event) return null;
  return (
    <div className="pt-6">
      <div className="mb-5 flex items-start justify-between gap-3">
        <div>
          <span
            className={cn(
              "inline-flex rounded-full px-2.5 py-1 text-xs font-medium",
              categoryStyles[event.category],
            )}
          >
            {event.category}
          </span>
          <h2 className="mt-3 text-xl font-semibold">{event.title}</h2>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={onEdit}
          aria-label="Edit event"
        >
          <Icons.Pencil className="size-4" />
        </Button>
      </div>
      <div className="space-y-4 text-sm">
        <p className="flex gap-3">
          <Icons.CalendarDays className="mt-0.5 size-4 text-muted-foreground" />
          {format(
            new Date(`${event.date}T00:00:00`),
            "EEEE, MMMM d, yyyy",
          )}{" "}
          {event.allDay ? "All day" : `${event.start} - ${event.end}`}
        </p>
        {event.location && (
          <p className="flex gap-3">
            <Icons.MapPin className="mt-0.5 size-4 text-muted-foreground" />
            {event.location}
          </p>
        )}
        {event.description && (
          <p className="rounded-lg bg-muted/50 p-3 leading-6 text-muted-foreground">
            {event.description}
          </p>
        )}
        {event.attendees.length > 0 && (
          <p className="flex gap-3">
            <Icons.Users className="mt-0.5 size-4 text-muted-foreground" />
            {event.attendees.join(", ")}
          </p>
        )}
        {event.link && /^https?:\/\//i.test(event.link) && (
          <a
            href={event.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-primary hover:bg-primary/5"
          >
            <Icons.Link className="size-4" />
            Open meeting link
            <Icons.ExternalLink className="size-3.5" />
          </a>
        )}
      </div>
      <div className="mt-7 grid grid-cols-2 gap-2">
        <Button variant="outline" onClick={onDuplicate}>
          <Icons.Copy className="me-2 size-4" />
          Duplicate
        </Button>
        <Button variant="destructive" onClick={onDelete}>
          <Icons.Trash2 className="me-2 size-4" />
          Delete
        </Button>
      </div>
    </div>
  );
}
