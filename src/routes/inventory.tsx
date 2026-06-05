import { createFileRoute, Outlet } from "@tanstack/react-router";
import { useMemo } from "react";
import { z } from "zod";
import { cars } from "@/lib/data/cars";
import { CarCard } from "@/components/cards/CarCard";
import { SectionLabel } from "@/components/common/SectionLabel";

const inventorySearchSchema = z.object({
  brand: z.string().optional(),
  category: z.string().optional(),
  sort: z.enum(["price-asc", "price-desc", "year-desc"]).optional().default("year-desc"),
});

export const Route = createFileRoute("/inventory")({
  validateSearch: inventorySearchSchema,
  head: () => ({
    meta: [
      { title: "Inventory — Velox Motors" },
      { name: "description", content: "Browse the full Velox Motors collection of premium and exotic automobiles." },
    ],
    links: [{ rel: "canonical", href: "/inventory" }],
  }),
  component: Inventory,
});

const brands = Array.from(new Set(cars.map((c) => c.brand)));

function Inventory() {
  const { brand, sort } = Route.useSearch();
  const navigate = Route.useNavigate();
  const matches = Route.useParams();

  // If we are on a nested route (a detail page), don't show the list
  // The 'slug' parameter exists only on the child route.
  if ('slug' in matches) {
      return <Outlet />;
  }

  const filtered = useMemo(() => {
    let list = brand ? cars.filter((c) => c.brand === brand) : cars;
    list = [...list].sort((a, b) => {
      if (sort === "price-asc") return a.price - b.price;
      if (sort === "price-desc") return b.price - a.price;
      return b.year - a.year;
    });
    return list;
  }, [brand, sort]);

  const setBrand = (b: string | undefined) => {
    navigate({ search: (prev) => ({ ...prev, brand: b }) });
  };

  const setSort = (s: typeof sort) => {
    navigate({ search: (prev) => ({ ...prev, sort: s }) });
  };

  return (
    <div className="pt-32 pb-24 px-6 lg:px-10">
      <div className="mx-auto max-w-[1400px]">
        <SectionLabel>{brand ? `${brand} Collection` : "The Collection"}</SectionLabel>
        <h1 className="mt-6 font-display text-7xl lg:text-8xl italic leading-[0.9]">
          {brand || "Inventory"}
        </h1>
        <p className="mt-6 max-w-xl text-velox-platinum/70">
          {brand 
            ? `Explore our curated selection of ${brand} masterpieces.` 
            : `${filtered.length} curated vehicles, all available for private viewing.`}
        </p>

        <div className="mt-16 grid lg:grid-cols-[260px_1fr] gap-12">
          <aside className="lg:sticky lg:top-28 self-start">
            <div className="font-mono-ui text-[10px] text-velox-gold mb-4">Brand</div>
            <div className="space-y-3">
              <label className="flex items-center gap-3 cursor-pointer text-velox-platinum hover:text-velox-gold transition-colors text-sm">
                <input 
                  type="radio" 
                  checked={!brand} 
                  onChange={() => setBrand(undefined)} 
                  className="accent-velox-gold" 
                />
                All Brands
              </label>
              {brands.map((b) => (
                <label key={b} className="flex items-center gap-3 cursor-pointer text-velox-platinum hover:text-velox-gold transition-colors text-sm">
                  <input 
                    type="radio" 
                    checked={brand === b} 
                    onChange={() => setBrand(b)} 
                    className="accent-velox-gold" 
                  />
                  {b}
                </label>
              ))}
            </div>

            <div className="font-mono-ui text-[10px] text-velox-gold mt-10 mb-4">Sort</div>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as typeof sort)}
              className="w-full bg-velox-charcoal border border-white/10 text-velox-platinum text-sm py-2.5 px-3 outline-none focus:border-velox-gold"
            >
              <option value="year-desc">Newest first</option>
              <option value="price-asc">Price · low to high</option>
              <option value="price-desc">Price · high to low</option>
            </select>
          </aside>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filtered.map((c) => (
              <CarCard key={c.slug} car={c} />
            ))}
            {filtered.length === 0 && (
              <div className="col-span-full py-20 text-center border border-dashed border-white/10">
                <p className="text-velox-muted font-display text-2xl italic">No vehicles found in this collection</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}


