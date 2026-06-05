import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { cars } from "@/lib/data/cars";
import { CarCard } from "@/components/cards/CarCard";
import { SectionLabel } from "@/components/common/SectionLabel";
import { RevealOnScroll } from "@/components/common/RevealOnScroll";

export function FeaturedInventory() {
  return (
    <section className="py-32 px-6 lg:px-10">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div>
            <SectionLabel>Biler hos Velox · Showroom</SectionLabel>
            <h2 className="mt-6 font-display text-6xl lg:text-7xl italic text-velox-white max-w-2xl leading-[0.95]">
              Featured <span 
                className="text-velox-gold cursor-pointer hover:underline decoration-1 underline-offset-8"
                onClick={() => document.getElementById('collection-description')?.scrollIntoView({ behavior: 'smooth' })}
              >Collection</span>
            </h2>
          </div>
          <Link
            to="/inventory"
            className="group inline-flex items-center gap-2 font-mono-ui text-[11px] text-velox-gold hover:gap-3 transition-all"
          >
            View All Inventory
            <ArrowUpRight className="size-4 transition-transform group-hover:rotate-45" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cars.slice(0, 6).map((c, i) => (
            <RevealOnScroll key={c.slug} delay={i * 0.08}>
              <CarCard car={c} />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
