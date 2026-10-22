import { useState } from "react";
import * as Icons from "lucide-react";
import { toast } from "sonner";
import { localImages, productImages } from "@/lib/local-images";
import { getUserImage } from "@/lib/user-images";
import { cn } from "@/lib/utils";
import { Badge, Card, PageHeader } from "@/components/dashboard/widgets";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const skills = [
  "Operations Strategy",
  "Process Design",
  "Project Delivery",
  "Client Success",
  "Analytics",
];

const projects = [
  ["Website Redesign", "82%", "Active"],
  ["CRM Migration", "46%", "At Risk"],
  ["Marketing Automation", "71%", "Active"],
];

export function ProfileApp() {
  const [tab, setTab] = useState("About");
  const [galleryImage, setGalleryImage] = useState<string | null>(null);

  return (
    <>
      <PageHeader
        title="Profile"
        subtitle="Manage your professional presence, availability and workspace activity."
        breadcrumb={["Edzen", "Profile"]}
        actions={
          <>
            <Button
              variant="outline"
              onClick={() => toast.success("Profile link copied")}
            >
              <Icons.Link />
              Share
            </Button>
            <Button onClick={() => toast.success("Edit profile ready")}>
              Edit Profile
            </Button>
          </>
        }
      />

      <section className="relative overflow-hidden rounded-2xl border bg-card shadow-sm">
        <div className="relative min-h-40 overflow-hidden bg-primary px-6 py-5 lg:px-8">
          <div className="absolute -end-16 -top-16 size-64 rounded-full border-[22px] border-primary-foreground/10" />
          <div className="absolute -bottom-24 start-[42%] size-52 rounded-full bg-primary-foreground/10 blur-3xl" />
          <div className="relative flex items-start justify-between gap-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-3 py-1.5 text-xs font-medium text-primary-foreground">
              <span className="size-1.5 rounded-full bg-primary-foreground" />
              Workspace profile
            </div>
            <button
              type="button"
              className="grid size-9 place-items-center rounded-xl border border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground transition hover:bg-primary-foreground/20"
              aria-label="Profile settings"
              onClick={() => location.assign("/pages/settings")}
            >
              <Icons.Settings2 className="size-4" />
            </button>
          </div>
        </div>

        <div className="relative px-6 pb-6 lg:px-8">
          <div className="absolute -top-13 start-6 rounded-2xl border-4 border-card bg-card p-1 shadow-lg lg:start-8">
            <img
              src={getUserImage("Avery Morgan")}
              alt="Avery Morgan"
              className="size-24 rounded-xl object-cover"
            />
          </div>

          <div className="flex justify-end pt-4">
            <Badge tone="success">Available for new work</Badge>
          </div>

          <div className="pt-8 xl:grid xl:grid-cols-[minmax(0,1fr)_auto] xl:items-end xl:gap-8">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h2 className="text-2xl font-semibold tracking-tight">
                  Avery Morgan
                </h2>
                <span
                  className="grid size-5 place-items-center rounded-full bg-primary text-primary-foreground"
                  title="Verified profile"
                >
                  <Icons.Check className="size-3" />
                </span>
                <span className="rounded-full bg-muted px-2 py-0.5 text-[11px] font-medium text-muted-foreground">
                  @averymorgan
                </span>
              </div>
              <p className="mt-1.5 text-sm font-medium text-muted-foreground">
                Operations Lead <span className="px-1 text-border">/</span>{" "}
                Edzen
              </p>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">
                Building repeatable operating systems, healthy delivery
                practices, and clear cross-functional experiences for growing
                teams.
              </p>
            </div>

            <div className="mt-6 grid grid-cols-3 overflow-hidden rounded-xl border bg-muted/25 xl:mt-0">
              {[
                ["18", "Projects"],
                ["142", "Tasks"],
                ["1.2k", "Followers"],
              ].map(([value, label], index) => (
                <div
                  key={label}
                  className={cn(
                    "min-w-22 px-4 py-3 text-center",
                    index > 0 && "border-s border-border",
                  )}
                >
                  <b className="block text-lg leading-5">{value}</b>
                  <span className="mt-1 block text-[10px] font-medium uppercase tracking-[0.08em] text-muted-foreground">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <nav
        className="mt-5 flex gap-1 overflow-x-auto rounded-xl border bg-card p-1.5"
        aria-label="Profile sections"
      >
        {["About", "Projects", "Gallery", "Followers", "Friends"].map((x) => (
          <button
            key={x}
            type="button"
            onClick={() => setTab(x)}
            className={cn(
              "min-w-max rounded-lg px-4 py-2.5 text-sm font-medium transition",
              tab === x
                ? "bg-primary text-primary-foreground shadow-sm"
                : "text-muted-foreground hover:bg-muted hover:text-foreground",
            )}
          >
            {x}
            {x === "Followers" && (
              <span
                className={cn(
                  "ms-2 rounded-full px-1.5 py-0.5 text-[10px]",
                  tab === x ? "bg-primary-foreground/20" : "bg-muted",
                )}
              >
                1.2k
              </span>
            )}
          </button>
        ))}
      </nav>
      {tab !== "About" ? (
        <Card className="mt-4" title={tab}>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {(tab === "Projects"
              ? [
                  ["Website Redesign", "Nexora", "82%", "Active"],
                  ["CRM Migration", "Vertex Labs", "46%", "At Risk"],
                  ["Marketing Automation", "BrightWorks", "71%", "Active"],
                  ["Mobile App v2", "CloudAxis", "64%", "Active"],
                ]
              : tab === "Friends"
                ? [
                    [
                      "Maya Rodriguez",
                      localImages.sophiaCarter,
                      "Product Strategist",
                      "",
                    ],
                    ["Ethan Cole", localImages.user2, "Engineering Lead", ""],
                    ["Priya Nair", localImages.user3, "Design Director", ""],
                  ]
                : tab === "Followers"
                  ? [
                      [
                        "Sophia Carter",
                        localImages.sophiaCarter,
                        "Project Manager  12 shared projects",
                        "1.8k followers",
                      ],
                      [
                        "Daniel Lee",
                        localImages.user2,
                        "Frontend Developer  8 shared projects",
                        "932 followers",
                      ],
                      [
                        "Emma Wilson",
                        localImages.user3,
                        "Product Designer  6 shared projects",
                        "1.4k followers",
                      ],
                      [
                        "Noah Williams",
                        localImages.user2,
                        "QA Engineer  5 shared projects",
                        "686 followers",
                      ],
                    ]
                  : tab === "Gallery"
                    ? [
                        [
                          "Design system workshop",
                          localImages.workspaceDashboard,
                          "",
                          "",
                        ],
                        [
                          "Product planning board",
                          localImages.productCatalog,
                          "",
                          "",
                        ],
                        [
                          "Team collaboration",
                          localImages.chatOnboardingFlow,
                          "",
                          "",
                        ],
                        [
                          "Workspace review",
                          productImages.auroraDeskLamp,
                          "",
                          "",
                        ],
                      ]
                    : [
                        ["Profile item", "Workspace", "", ""],
                        ["Profile item", "Workspace", "", ""],
                        ["Profile item", "Workspace", "", ""],
                      ]
            ).map((item, i) => (
              <div key={i} className="rounded-xl border bg-card text-sm">
                {tab === "Gallery" && (
                  <button
                    aria-label={`Open ${item[0]} preview`}
                    onClick={() => setGalleryImage(item[1])}
                    className="block w-full overflow-hidden"
                  >
                    <img
                      src={item[1]}
                      alt={item[0]}
                      className="h-40 w-full object-cover transition-transform hover:scale-105 rounded-xl"
                    />
                  </button>
                )}

                <div className="p-4">
                  <div className="flex items-center flex-wrap justify-between gap-3">
                    {(tab === "Followers" || tab === "Friends") && (
                      <img
                        src={item[1]}
                        alt={item[0]}
                        className="size-12 shrink-0 rounded-full border-2 border-primary/20 object-cover"
                      />
                    )}

                    <span className="flex-1">
                      <b className="block">{item[0]}</b>

                      {tab === "Followers" && (
                        <small className="block text-muted-foreground">
                          {item[2]}
                        </small>
                      )}

                      {tab === "Friends" && (
                        <small className="block text-muted-foreground">
                          {item[2]}
                        </small>
                      )}
                    </span>

                    {tab === "Followers" && (
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => toast.success(`Following ${item[0]}`)}
                      >
                        Follow
                      </Button>
                    )}

                    {item[3] && (
                      <Badge tone={item[3] === "At Risk" ? "warning" : "info"}>
                        {item[3]}
                      </Badge>
                    )}
                  </div>

                  <p className="mt-2 text-xs text-muted-foreground">
                    {tab === "Followers"
                      ? item[3]
                      : tab === "Friends"
                        ? "Mutual workspace connection"
                        : item[1]}
                  </p>

                  {tab === "Projects" && (
                    <>
                      <div className="mt-4 flex justify-between">
                        <span>Progress</span>
                        <b>{item[2]}</b>
                      </div>

                      <div className="mt-2 h-2 rounded bg-muted">
                        <div
                          className="h-full rounded bg-primary"
                          style={{ width: item[2] }}
                        />
                      </div>

                      <p className="mt-3 text-xs text-muted-foreground">
                        Your role: Operations Lead Updated today
                      </p>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Card>
      ) : (
        <div className="mt-5 grid gap-5 xl:grid-cols-3">
          <main className="space-y-5 xl:col-span-2">
            <Card
              title="Profile strength"
              description="Complete these items to make your workspace profile more useful."
              action={
                <button
                  type="button"
                  onClick={() => toast.success("Profile checklist opened")}
                  className="text-xs font-semibold text-primary hover:underline"
                >
                  View checklist
                </button>
              }
            >
              <div className="grid gap-5 p-2 sm:grid-cols-[auto_minmax(0,1fr)] sm:items-center">
                <div
                  className="grid size-24 place-items-center rounded-full"
                  style={{
                    background:
                      "conic-gradient(var(--primary) 0deg 310deg, var(--muted) 310deg 360deg)",
                  }}
                >
                  <div className="grid size-[78px] place-items-center rounded-full bg-card text-center">
                    <b className="text-xl leading-5">86%</b>
                    <span className="text-[10px] uppercase tracking-wide text-muted-foreground">
                      complete
                    </span>
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <b>Strong professional profile</b>
                    <Badge tone="success">Top 12% of the team</Badge>
                  </div>

                  <p className="mt-1 text-sm text-muted-foreground">
                    Add a public bio and verify your contact details to finish
                    setup.
                  </p>

                  <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-muted">
                    <div className="h-full w-[86%] rounded bg-primary" />
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground">
                    2 profile details remaining
                  </p>
                </div>
              </div>
            </Card>

            <Card
              title="Assigned projects"
              action={
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => location.assign("/projects/list")}
                >
                  View all
                </Button>
              }
            >
              <div className="space-y-2 p-1">
                {projects.map((x, index) => (
                  <div
                    key={x[0]}
                    className="grid gap-3 rounded-xl border bg-muted/[0.22] p-3.5 sm:grid-cols-[minmax(0,1fr)_7rem] sm:items-center"
                  >
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span
                          className={cn(
                            "size-2 shrink-0 rounded-full",
                            index === 1 ? "bg-chart-2" : "bg-chart-1",
                          )}
                        />
                        <b className="truncate">{x[0]}</b>
                        <Badge tone={x[2] === "At Risk" ? "warning" : "info"}>
                          {x[2]}
                        </Badge>
                      </div>
                      <p className="mt-1.5 text-xs text-muted-foreground">
                        Operations lead <span className="px-1">•</span> Updated
                        today
                      </p>
                    </div>

                    <div className="flex items-center gap-2.5 sm:justify-end">
                      <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-muted sm:max-w-16">
                        <div
                          className={cn(
                            "h-full rounded-full",
                            index === 1 ? "bg-chart-2" : "bg-primary",
                          )}
                          style={{ width: x[1] }}
                        />
                      </div>
                      <span className="w-9 text-end text-sm font-semibold">
                        {x[1]}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card
              title="Recent activity"
              description="Your latest workspace decisions and collaboration."
              action={
                <button
                  type="button"
                  onClick={() => toast.success("Activity history opened")}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
                >
                  View history
                  <Icons.ArrowUpRight className="size-3.5" />
                </button>
              }
            >
              <div className="grid gap-3 p-1 sm:grid-cols-[9.5rem_minmax(0,1fr)]">
                <div className="rounded-xl bg-muted/55 p-3.5">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                    This week
                  </span>
                  <b className="mt-2 block text-2xl leading-7">12</b>
                  <p className="mt-1 text-xs leading-5 text-muted-foreground">
                    meaningful workspace updates
                  </p>
                  <div className="mt-4 flex -space-x-2">
                    {["Sophia Carter", "Daniel Lee", "Emma Wilson"].map(
                      (person) => (
                        <img
                          key={person}
                          src={getUserImage(person)}
                          alt={person}
                          className="size-6 rounded-full border-2 border-muted object-cover"
                        />
                      ),
                    )}
                    <span className="grid size-6 place-items-center rounded-full border-2 border-muted bg-primary text-[9px] font-semibold text-primary-foreground">
                      +4
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  {[
                    {
                      title: "Updated the Website Redesign timeline",
                      detail: "Moved the delivery review to Friday",
                      time: "12 min ago",
                      icon: Icons.CalendarClock,
                      tone: "bg-primary text-primary-foreground",
                    },
                    {
                      title: "Completed the delivery health review",
                      detail: "Q3 delivery status is ready to share",
                      time: "2 hrs ago",
                      icon: Icons.CircleCheckBig,
                      tone: "bg-chart-3/15 text-chart-3",
                    },
                    {
                      title: "Added feedback to CRM Migration",
                      detail: "Mentioned Daniel Lee and Sophia Carter",
                      time: "Yesterday",
                      icon: Icons.MessageSquareText,
                      tone: "bg-chart-2/15 text-chart-2",
                    },
                    {
                      title: "Joined Marketing Automation planning",
                      detail: "Kickoff session with the growth team",
                      time: "Aug 21",
                      icon: Icons.UsersRound,
                      tone: "bg-chart-4/15 text-chart-4",
                    },
                  ].map((item) => {
                    const ActivityIcon = item.icon;

                    return (
                      <div
                        key={item.title}
                        className="group flex items-center gap-3 rounded-xl border border-transparent bg-muted/[0.22] px-3 py-2.5 transition-colors hover:border-primary/15 hover:bg-primary/[0.035]"
                      >
                        <span
                          className={cn(
                            "grid size-9 shrink-0 place-items-center rounded-lg",
                            item.tone,
                          )}
                        >
                          <ActivityIcon className="size-4" />
                        </span>
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-sm font-medium">
                            {item.title}
                          </p>
                          <p className="mt-0.5 truncate text-xs text-muted-foreground">
                            {item.detail}
                          </p>
                        </div>
                        <span className="hidden whitespace-nowrap text-[11px] text-muted-foreground sm:block">
                          {item.time}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Card>
          </main>

          <aside className="space-y-4">
            <Card title="Workspace details">
              <div className="space-y-3 text-sm">
                <p className="flex gap-2">
                  <Icons.Mail className="size-4 text-muted-foreground" />
                  avery@edzenadmin.com
                </p>

                <p className="flex gap-2">
                  <Icons.MapPin className="size-4 text-muted-foreground" />
                  San Francisco, CA
                </p>

                <p className="flex gap-2">
                  <Icons.Clock3 className="size-4 text-muted-foreground" />
                  UTC -08:00 Working now
                </p>

                <p className="flex gap-2">
                  <Icons.Building2 className="size-4 text-muted-foreground" />
                  Product Operations
                </p>
              </div>
            </Card>

            <Card title="Skills">
              <div className="flex flex-wrap gap-1.5">
                {skills.map((x) => (
                  <Badge key={x}>{x}</Badge>
                ))}
              </div>
            </Card>

            <Card title="Team context">
              <div className="space-y-3 text-sm">
                {[
                  ["SC", "Sophia Carter", "Project Manager"],
                  ["DL", "Daniel Lee", "Frontend Developer"],
                  ["EW", "Emma Wilson", "Product Designer"],
                ].map((x) => (
                  <div key={x[1]} className="flex items-center gap-2">
                    <img
                      src={getUserImage(x[1])}
                      alt={x[1]}
                      className="size-9 rounded-full object-cover"
                    />

                    <span>
                      <b>{x[1]}</b>
                      <small className="block text-muted-foreground">
                        {x[2]}
                      </small>
                    </span>
                  </div>
                ))}
              </div>
            </Card>

            <Card title="Account">
              <Button
                variant="outline"
                className="w-full"
                onClick={() => location.assign("/pages/settings")}
              >
                Security & settings
              </Button>
            </Card>
          </aside>
        </div>
      )}

      <Dialog
        open={!!galleryImage}
        onOpenChange={(open) => !open && setGalleryImage(null)}
      >
        <DialogContent className="max-w-4xl p-2">
          <img
            src={galleryImage ?? ""}
            alt="Gallery preview"
            className="max-h-[80vh] w-full rounded-md object-contain"
          />
        </DialogContent>
      </Dialog>
    </>
  );
}
