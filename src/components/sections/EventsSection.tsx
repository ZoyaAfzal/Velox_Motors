import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { events } from "@/lib/data/events";
import { EventCard } from "@/components/cards/EventCard";
import { SectionLabel } from "@/components/common/SectionLabel";
import { RevealOnScroll } from "@/components/common/RevealOnScroll";

export function EventsSection() {
  return (
    <section className="py-32 px-6 lg:px-10 bg-velox-black">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div>
            <SectionLabel>Events</SectionLabel>
            <h2 
              className="mt-6 font-display text-6xl lg:text-7xl italic leading-[0.95] max-w-2xl cursor-pointer hover:underline decoration-1 underline-offset-8"
              onClick={() => document.getElementById('events-description')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Udlev passionen <br />til <span className="text-velox-gold">events.</span>
            </h2>
          </div>
          <Link to="/events" className="group inline-flex items-center gap-2 font-mono-ui text-[11px] text-velox-gold hover:gap-3 transition-all">
            See All Events <ArrowUpRight className="size-4 transition-transform group-hover:rotate-45" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.slice(0, 3).map((e, i) => (
            <RevealOnScroll key={e.slug} delay={i * 0.1}>
              <EventCard event={e} />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
