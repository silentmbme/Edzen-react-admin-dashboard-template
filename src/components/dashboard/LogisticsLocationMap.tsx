import { useState } from "react";
import { ExternalLink, MapPin, Package, Truck } from "lucide-react";
import { Card } from "./widgets";

const hubs = [
  { name: "Mumbai", lat: 19.076, lon: 72.8777 },
  { name: "Delhi", lat: 28.6139, lon: 77.209 },
  { name: "Bengaluru", lat: 12.9716, lon: 77.5946 },
  { name: "Hyderabad", lat: 17.385, lon: 78.4867 },
];
export function LogisticsLocationMap({
  shipments,
}: {
  shipments: {
    origin: string;
    destination: string;
    weight: number;
    status: string;
  }[];
}) {
  const [hub, setHub] = useState(hubs[0]!);
  const loads = shipments.filter((s) => s.origin === hub.name);
  const bbox = [
    hub.lon - 0.24,
    hub.lat - 0.16,
    hub.lon + 0.24,
    hub.lat + 0.16,
  ].join(",");
  return (
    <Card
      className="mt-4"
      title="Hub location map"
      description="Explore origin cities and their assigned cargo · sample shipment data"
      bodyClassName="p-0"
      action={
        <a
          href={`https://www.openstreetmap.org/?mlat=${hub.lat}&mlon=${hub.lon}#map=11/${hub.lat}/${hub.lon}`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-primary"
        >
          Open map
          <ExternalLink className="size-3.5" />
        </a>
      }
    >
      <div className="grid lg:grid-cols-[260px_minmax(0,1fr)]">
        <aside className="border-b border-border p-5 lg:border-b-0 lg:border-e">
          <p className="mb-3 text-[11px] font-medium text-muted-foreground">
            ORIGIN LOCATIONS
          </p>
          <div className="space-y-2">
            {hubs.map((h) => (
              <button
                key={h.name}
                aria-pressed={hub.name === h.name}
                onClick={() => setHub(h)}
                className={`flex w-full cursor-pointer items-center justify-between rounded-lg border px-3 py-2.5 text-start text-sm ${hub.name === h.name ? "border-primary bg-primary/5 text-primary" : "border-border hover:bg-muted/40"}`}
              >
                <span className="flex items-center gap-2">
                  <MapPin className="size-4" />
                  {h.name}
                </span>
                <span className="text-xs">
                  {shipments.filter((s) => s.origin === h.name).length}
                </span>
              </button>
            ))}
          </div>
          <div className="mt-5 space-y-3 border-t border-border pt-4">
            <p className="text-xs font-semibold">{hub.name} cargo summary</p>
            <div className="flex items-center justify-between gap-2 text-xs">
              <span className="flex items-center gap-1.5 text-muted-foreground">
                <Package className="size-3.5" />
                Assigned weight
              </span>
              <b>{loads.reduce((s, l) => s + l.weight, 0)} kg</b>
            </div>
            <div className="flex items-center justify-between gap-2 text-xs">
              <span className="flex items-center gap-1.5 text-muted-foreground">
                <Truck className="size-3.5" />
                In transit
              </span>
              <b>{loads.filter((s) => s.status === "In transit").length}</b>
            </div>
            <p className="text-[11px] leading-relaxed text-muted-foreground">
              Destinations: {loads.map((l) => l.destination).join(", ")}
            </p>
          </div>
        </aside>
        <div className="min-w-0">
          <iframe
            key={hub.name}
            title={`${hub.name} origin city location map`}
            src={`https://www.openstreetmap.org/export/embed.html?bbox=${encodeURIComponent(bbox)}&layer=mapnik&marker=${hub.lat}%2C${hub.lon}`}
            loading="lazy"
            referrerPolicy="no-referrer"
            className="h-[360px] w-full border-0 bg-muted"
          />
          <div className="flex flex-wrap items-center justify-between gap-2 border-t border-border px-4 py-3 text-[11px] text-muted-foreground">
            <span>
              City center marker · illustrative hub location, not a vehicle
              position
            </span>
            <span>Map data © OpenStreetMap contributors</span>
          </div>
        </div>
      </div>
    </Card>
  );
}
