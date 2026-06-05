import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Calendar, MapPin, Ticket } from "lucide-react";
import { events } from "@/lib/data/events";
import { EventCard } from "@/components/cards/EventCard";

export const Route = createFileRoute("/events/$slug")({
  loader: ({ params }) => {
    const event = events.find((e) => e.slug === params.slug);
    if (!event) throw notFound();
    return { event };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.event.title} — Velox Motors` },
          { name: "description", content: loaderData.event.description },
          { property: "og:image", content: loaderData.event.image },
        ]
      : [],
    links: loaderData ? [{ rel: "canonical", href: `/events/${loaderData.event.slug}` }] : [],
  }),
  notFoundComponent: () => <div className="pt-40 text-center text-velox-muted">Event not found.</div>,
  errorComponent: () => <div className="pt-40 text-center text-velox-muted">Could not load.</div>,
  component: EventDetail,
});

function EventDetail() {
  const { event } = Route.useLoaderData();
  const related = events.filter((e) => e.slug !== event.slug).slice(0, 3);
  const d = new Date(event.date);
  const dateText = d.toLocaleDateString("en-US", { weekday: "long", day: "numeric", month: "long", year: "numeric" });

  return (
    <div className="pt-28">
      <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
        <img src={event.image} alt={event.title} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-velox-black via-velox-black/40 to-transparent" />
        <div className="absolute bottom-12 left-0 right-0 px-6 lg:px-10 mx-auto max-w-[1400px]">
          <div className="font-mono-ui text-[10px] text-velox-gold">{event.category}</div>
          <h1 className="mt-3 font-display text-5xl lg:text-7xl italic leading-[0.95] max-w-3xl">{event.title}</h1>
        </div>
      </div>

      <div className="px-6 lg:px-10 mx-auto max-w-[1400px] mt-12">
        <Link to="/events" className="inline-flex items-center gap-2 font-mono-ui text-[10px] text-velox-muted hover:text-velox-gold transition-colors">
          <ArrowLeft className="size-3" /> All events
        </Link>

        <div className="mt-12 grid lg:grid-cols-[1.5fr_1fr] gap-16">
          <div>
            <p className="font-display italic text-3xl text-velox-platinum leading-snug">{event.description}</p>
            <div className="mt-12 prose prose-invert max-w-none text-velox-platinum/80">
              <h3 className="font-display text-2xl mt-12">Agenda</h3>
              <ul className="mt-4 space-y-2 list-none p-0">
                <li className="border-b border-white/5 py-3 flex justify-between"><span>Arrival & welcome</span><span className="text-velox-muted font-mono-ui text-[10px]">09:30</span></li>
                <li className="border-b border-white/5 py-3 flex justify-between"><span>Main programme</span><span className="text-velox-muted font-mono-ui text-[10px]">10:00 – 16:00</span></li>
                <li className="border-b border-white/5 py-3 flex justify-between"><span>Dinner & conversation</span><span className="text-velox-muted font-mono-ui text-[10px]">19:00</span></li>
              </ul>
            </div>
          </div>
          <aside className="bg-velox-charcoal border border-white/10 p-8 self-start lg:sticky lg:top-28">
            <div className="space-y-6">
              <div className="flex gap-4"><Calendar className="size-4 text-velox-gold shrink-0 mt-1" /><div><div className="font-mono-ui text-[10px] text-velox-muted">Date</div><div className="text-velox-platinum mt-1">{dateText}</div></div></div>
              <div className="flex gap-4"><MapPin className="size-4 text-velox-gold shrink-0 mt-1" /><div><div className="font-mono-ui text-[10px] text-velox-muted">Location</div><div className="text-velox-platinum mt-1">{event.location}</div></div></div>
              <div className="flex gap-4"><Ticket className="size-4 text-velox-gold shrink-0 mt-1" /><div><div className="font-mono-ui text-[10px] text-velox-muted">Access</div><div className="text-velox-platinum mt-1">{event.accessType}</div></div></div>
            </div>
            <div className="mt-8 pt-8 border-t border-white/10">
              <div className="font-mono-ui text-[10px] text-velox-muted">Price</div>
              <div className="font-display text-3xl text-velox-gold mt-1">{event.price}</div>
            </div>
            <Link to="/contact" className="mt-8 block text-center bg-velox-gold text-velox-black px-6 py-4 font-mono-ui text-[11px] hover:bg-velox-gold-light transition-colors">
              Register Interest
            </Link>
          </aside>
        </div>

        <section className="mt-32">
          <h2 className="font-display text-4xl italic mb-10">Related <span className="text-velox-gold">events</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map((r) => <EventCard key={r.slug} event={r} />)}
          </div>
        </section>
      </div>
    </div>
  );
}
