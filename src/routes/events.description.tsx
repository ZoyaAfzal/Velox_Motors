import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { events } from "@/lib/data/events";
import { SectionLabel } from "@/components/common/SectionLabel";

export const Route = createFileRoute("/events/description")({
  component: EventsDescriptionPage,
});

function EventsDescriptionPage() {
  return (
    <div className="pt-32 pb-24 px-6 lg:px-10">
      <div className="mx-auto max-w-[1400px]">
        <Link to="/events" className="inline-flex items-center gap-2 font-mono-ui text-[10px] text-velox-muted hover:text-velox-gold transition-colors">
          <ArrowLeft className="size-3" /> Back to Events
        </Link>
        <div className="mt-12">
            <SectionLabel>About Our Community</SectionLabel>
            <h1 className="mt-6 font-display text-7xl lg:text-8xl italic leading-[0.9]">
              The Velox <span className="text-velox-gold">Experience</span>
            </h1>
            <p className="mt-12 text-velox-platinum/80 text-xl leading-relaxed max-w-3xl">
              At Velox Motors, our events are more than just gatherings; they are curated experiences designed to foster a deep sense of community among automotive enthusiasts. Whether it's the quiet luxury of a coastal cruise, the adrenaline-fueled excitement of a track day, or the refined atmosphere of a concours exhibition, we provide exclusive opportunities for our members to connect and celebrate their shared passion.
            </p>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-velox-charcoal p-8 border border-white/10">
                <h3 className="font-display text-2xl text-velox-white">Curated Access</h3>
                <p className="mt-4 text-sm text-velox-platinum/70">Gaining access to venues and experiences usually closed to the public.</p>
              </div>
              <div className="bg-velox-charcoal p-8 border border-white/10">
                <h3 className="font-display text-2xl text-velox-white">Shared Passion</h3>
                <p className="mt-4 text-sm text-velox-platinum/70">Connecting with a community that shares your appreciation for fine engineering.</p>
              </div>
              <div className="bg-velox-charcoal p-8 border border-white/10">
                <h3 className="font-display text-2xl text-velox-white">Heritage</h3>
                <p className="mt-4 text-sm text-velox-platinum/70">Celebrating the history and future of automotive design.</p>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}
