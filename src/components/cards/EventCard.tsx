import { Link } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import type { VeloxEvent } from "@/lib/types";

export function EventCard({ event }: { event: VeloxEvent }) {
  const d = new Date(event.date);
  const day = d.getDate().toString().padStart(2, "0");
  const month = d.toLocaleString("en-US", { month: "short" }).toUpperCase();

  return (
    <Link
      to="/events/$slug"
      params={{ slug: event.slug }}
      className="group relative block h-full overflow-hidden bg-velox-charcoal border border-white/5 transition-all duration-500 hover:border-velox-gold/40 hover:-translate-y-1"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="h-full w-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-velox-black/80 to-transparent" />
        <div className="absolute top-4 left-4 bg-velox-black/80 backdrop-blur px-3 py-2 text-center">
          <div className="font-display text-2xl leading-none text-velox-gold">{day}</div>
          <div className="font-mono-ui text-[10px] text-velox-platinum mt-1">{month}</div>
        </div>
        {event.price === "Gratis" && (
          <div className="absolute top-4 right-4 bg-velox-gold text-velox-black font-mono-ui text-[10px] px-2.5 py-1">
            GRATIS
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="font-mono-ui text-[10px] text-velox-gold mb-3">{event.category}</div>
        <h3 className="font-display text-2xl text-velox-white leading-tight">{event.title}</h3>
        <div className="mt-4 flex items-center gap-1.5 text-velox-muted text-xs font-mono-ui">
          <MapPin className="size-3" />
          {event.location}
        </div>
      </div>
    </Link>
  );
}
