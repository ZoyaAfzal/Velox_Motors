import { Link } from "@tanstack/react-router";
import { ArrowRight, Car, Crown, Briefcase } from "lucide-react";
import { SectionLabel } from "@/components/common/SectionLabel";
import { RevealOnScroll } from "@/components/common/RevealOnScroll";

const tiers = [
  { slug: "selected", icon: Car, name: "Selected Car Leasing", desc: "Curated single-vehicle leasing, full service included.", price: "From DKK 14,800 / mo" },
  { slug: "premium", icon: Crown, name: "Premium Leasing", desc: "Concierge ownership of the most desirable cars in our collection.", price: "From DKK 28,500 / mo" },
  { slug: "business", icon: Briefcase, name: "Business Fleet", desc: "Tailored fleet solutions for companies and family offices.", price: "Custom pricing" },
];

export function LeasingSection() {
  return (
    <section className="py-32 px-6 lg:px-10 bg-velox-charcoal">
      <div className="mx-auto max-w-[1400px] grid lg:grid-cols-2 gap-20 items-start">
        <RevealOnScroll>
          <SectionLabel>Leasing</SectionLabel>
          <h2 className="mt-6 font-display text-6xl lg:text-7xl italic leading-[0.95]">
            Drive without<br />
            <span className="text-velox-gold">compromise.</span>
          </h2>
          <p className="mt-8 text-velox-platinum/80 max-w-md leading-relaxed">
            Three flexible programs designed for individuals, enthusiasts, and businesses who refuse to settle for ordinary.
          </p>
          <Link
            to="/leasing"
            className="mt-10 inline-flex items-center gap-2 bg-velox-gold text-velox-black px-7 py-4 font-mono-ui text-[11px] hover:bg-velox-gold-light transition-colors"
          >
            View Leasing Plans
            <ArrowRight className="size-4" />
          </Link>
        </RevealOnScroll>

        <div className="space-y-4">
          {tiers.map((t, i) => (
            <RevealOnScroll key={t.name} delay={i * 0.1}>
              <Link
                to="/leasing/$slug"
                params={{ slug: t.slug }}
                className="group block border border-white/10 bg-velox-black p-8 transition-all duration-500 hover:border-velox-gold/60 hover:shadow-[0_20px_60px_-20px_rgba(201,168,76,0.3)] hover:-translate-y-1"
              >
                <div className="flex items-start gap-6">
                  <div className="size-12 border border-velox-gold/40 flex items-center justify-center text-velox-gold shrink-0">
                    <t.icon className="size-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-2xl text-velox-white">{t.name}</h3>
                    <p className="mt-2 text-sm text-velox-muted">{t.desc}</p>
                    <p className="mt-4 font-mono-ui text-[10px] text-velox-gold">{t.price}</p>
                  </div>
                  <ArrowRight className="size-4 text-velox-muted group-hover:text-velox-gold group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

