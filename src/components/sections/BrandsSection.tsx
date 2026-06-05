import { SectionLabel } from "@/components/common/SectionLabel";
import { Link } from "@tanstack/react-router";

const brands = ["Porsche", "Ferrari", "Lamborghini", "McLaren", "Bentley", "Aston Martin", "Rolls-Royce", "Bugatti", "Pagani"];

export function BrandsSection() {
  return (
    <section className="bg-velox-charcoal py-24 overflow-hidden border-y border-white/5">
      <div className="flex justify-center mb-12">
        <SectionLabel>Our Brands</SectionLabel>
      </div>
      <div className="relative">
        <div className="marquee-track">
          {[...brands, ...brands].map((b, i) => (
            <Link
              key={i}
              to="/inventory"
              search={{ brand: b }}
              className="font-display italic text-6xl lg:text-7xl text-velox-muted hover:text-velox-gold transition-colors duration-300 px-12 whitespace-nowrap"
            >
              {b}
            </Link>
          ))}
        </div>
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-velox-charcoal to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-velox-charcoal to-transparent pointer-events-none" />
      </div>
    </section>
  );
}

