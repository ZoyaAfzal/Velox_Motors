import { createFileRoute, Outlet, useParams } from "@tanstack/react-router";
import { events } from "@/lib/data/events";
import { EventCard } from "@/components/cards/EventCard";
import { SectionLabel } from "@/components/common/SectionLabel";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events — Velox Motors" },
      { name: "description", content: "Track days, concours, alpine tours and private previews from Velox Motors." },
    ],
    links: [{ rel: "canonical", href: "/events" }],
  }),
  component: EventsLayout,
});

function EventsLayout() {
  const params = Route.useParams();
  const isDetail = 'slug' in params;

  return (
    <div className="pt-32 pb-24 px-6 lg:px-10">
      <div className="mx-auto max-w-[1400px]">
        {!isDetail && (
          <>
            <SectionLabel>Events</SectionLabel>
            <h1 className="mt-6 font-display text-7xl lg:text-8xl italic leading-[0.9]">
              Live the <span className="text-velox-gold">passion.</span>
            </h1>
            <p className="mt-6 max-w-xl text-velox-platinum/70">
              From sailing trips to concours weekends, our events bring together the Velox family.
            </p>

            <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((e) => <EventCard key={e.slug} event={e} />)}
            </div>
          </>
        )}
        <Outlet />
      </div>
    </div>
  );
}
