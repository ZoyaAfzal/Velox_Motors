import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cars } from "@/lib/data/cars";
import { CarCard } from "@/components/cards/CarCard";
import { SectionLabel } from "@/components/common/SectionLabel";

export const Route = createFileRoute("/inventory/$slug")({
  loader: ({ params }) => {
    const car = cars.find((c) => c.slug === params.slug);
    if (!car) throw notFound();
    return { car };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.car.brand} ${loaderData.car.model} — Velox Motors` },
          { name: "description", content: loaderData.car.description },
          { property: "og:image", content: loaderData.car.image },
        ]
      : [],
    links: loaderData ? [{ rel: "canonical", href: `/inventory/${loaderData.car.slug}` }] : [],
  }),
  notFoundComponent: () => (
    <div className="pt-40 text-center">
      <p className="font-display text-3xl">Vehicle not found</p>
      <Link to="/inventory" className="mt-6 inline-block text-velox-gold font-mono-ui text-xs">← Back to inventory</Link>
    </div>
  ),
  errorComponent: () => <div className="pt-40 text-center text-velox-muted">Could not load.</div>,
  component: CarDetail,
});

function CarDetail() {
  const { car } = Route.useLoaderData();
  const related = cars.filter((c) => c.slug !== car.slug).slice(0, 3);

  const specs = [
    ["Engine", car.engine],
    ["Power", car.power],
    ["0–100 km/h", car.zeroToHundred],
    ["Top Speed", car.topSpeed],
    ["Transmission", car.transmission],
    ["Mileage", car.mileage],
  ];

  return (
    <div className="pt-28">
      <div className="px-6 lg:px-10 mx-auto max-w-[1400px]">
        <Link to="/inventory" className="inline-flex items-center gap-2 font-mono-ui text-[10px] text-velox-muted hover:text-velox-gold transition-colors">
          <ArrowLeft className="size-3" /> Back to Inventory
        </Link>
      </div>

      <div className="mt-10 mx-auto max-w-[1400px] px-6 lg:px-10 grid lg:grid-cols-[1.5fr_1fr] gap-12">
        <div className="space-y-4">
          <div className="aspect-[16/10] overflow-hidden bg-velox-charcoal">
            <img src={car.images[0] || car.image} alt={car.model} className="h-full w-full object-cover" />
          </div>
          <div className="grid grid-cols-3 gap-4">
            {car.images.slice(0, 3).map((src: string, i: number) => (
              <div key={i} className="aspect-[4/3] overflow-hidden bg-velox-charcoal">
                <img src={src} alt="" className="h-full w-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            ))}
          </div>
        </div>

        <aside className="lg:sticky lg:top-28 self-start">
          <div className="font-mono-ui text-[10px] text-velox-gold">{car.brand} · {car.year}</div>
          <h1 className="mt-3 font-display text-5xl lg:text-6xl italic leading-[0.95]">{car.model}</h1>
          <div className="mt-6 font-display text-4xl text-velox-gold">{car.priceFormatted}</div>

          <div className="mt-10 grid grid-cols-2 gap-y-6 border-y border-white/10 py-8">
            {specs.map(([k, v]) => (
              <div key={k}>
                <div className="font-mono-ui text-[10px] text-velox-muted">{k}</div>
                <div className="mt-1 text-velox-platinum">{v}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 space-y-3">
            <Link to="/contact" className="block text-center bg-velox-gold text-velox-black px-6 py-4 font-mono-ui text-[11px] hover:bg-velox-gold-light transition-colors">
              Book Test Drive
            </Link>
            <button className="w-full border border-white/15 text-velox-platinum px-6 py-4 font-mono-ui text-[11px] hover:border-velox-gold hover:text-velox-gold transition">
              Download Brochure
            </button>
          </div>
        </aside>
      </div>

      <section className="mt-24 px-6 lg:px-10 mx-auto max-w-[1400px] grid lg:grid-cols-2 gap-16">
        <div>
          <SectionLabel>About this car</SectionLabel>
          <p className="mt-6 font-display text-3xl italic leading-snug text-velox-platinum">
            {car.description}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="p-6 border border-white/10">
            <div className="font-mono-ui text-[10px] text-velox-gold">Color</div>
            <div className="mt-2 text-velox-platinum">{car.color}</div>
          </div>
          <div className="p-6 border border-white/10">
            <div className="font-mono-ui text-[10px] text-velox-gold">Status</div>
            <div className="mt-2 text-velox-platinum capitalize">{car.status}</div>
          </div>
          <div className="p-6 border border-white/10">
            <div className="font-mono-ui text-[10px] text-velox-gold">Category</div>
            <div className="mt-2 text-velox-platinum">{car.category}</div>
          </div>
          <div className="p-6 border border-white/10">
            <div className="font-mono-ui text-[10px] text-velox-gold">VIN</div>
            <div className="mt-2 text-velox-platinum">On request</div>
          </div>
        </div>
      </section>

      <section className="mt-32 px-6 lg:px-10 mx-auto max-w-[1400px]">
        <div className="flex justify-between items-end mb-10">
          <h2 className="font-display text-4xl italic">Similar <span className="text-velox-gold">vehicles</span></h2>
          <Link to="/inventory" className="font-mono-ui text-[11px] text-velox-gold inline-flex items-center gap-2">All <ArrowRight className="size-3" /></Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {related.map((r) => <CarCard key={r.slug} car={r} />)}
        </div>
      </section>
    </div>
  );
}
