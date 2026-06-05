import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Check, ArrowRight } from "lucide-react";
import { SectionLabel } from "@/components/common/SectionLabel";

export const Route = createFileRoute("/leasing")({
  head: () => ({
    meta: [
      { title: "Leasing — Velox Motors" },
      { name: "description", content: "Selected, premium, and business leasing programs from Velox Motors." },
    ],
    links: [{ rel: "canonical", href: "/leasing" }],
  }),
  component: Leasing,
});

function Leasing() {
  const [value, setValue] = useState(2000000);
  const [down, setDown] = useState(20);
  const [term, setTerm] = useState(36);
  const monthly = Math.round(((value * (1 - down / 100)) / term) * 1.04);

  return (
    <div className="pt-32 pb-24 px-6 lg:px-10">
      <div className="mx-auto max-w-[1400px]">
        <SectionLabel>Leasing</SectionLabel>
        <h1 className="mt-6 font-display text-7xl lg:text-8xl italic leading-[0.9] max-w-3xl">
          Drive the <span className="text-velox-gold">extraordinary.</span>
        </h1>
        <p className="mt-8 max-w-xl text-velox-platinum/80 leading-relaxed">
          Three programs, one standard. Velox leasing is the discreet alternative to ownership, same access, none of the friction.
        </p>

        <div className="mt-24 grid lg:grid-cols-3 gap-6">
          {[
            { name: "Selected", price: "DKK 14,800 / mo", feats: ["Single curated vehicle", "Service & maintenance", "12,000 km / yr", "24 month terms"] },
            { name: "Premium", price: "DKK 28,500 / mo", feats: ["Top-tier collection access", "Vehicle swaps quarterly", "Concierge service", "Insurance included"], featured: true },
            { name: "Business", price: "Custom", feats: ["Tax-optimized structuring", "Fleet of 3+ vehicles", "Dedicated account director", "Bespoke terms"] },
          ].map((p) => (
            <div
              key={p.name}
              className={`p-10 border ${p.featured ? "border-velox-gold bg-velox-charcoal" : "border-white/10"} transition-all hover:-translate-y-1`}
            >
              {p.featured && <div className="font-mono-ui text-[10px] text-velox-gold mb-4">Most popular</div>}
              <h3 className="font-display text-3xl italic">{p.name}</h3>
              <div className="mt-4 font-display text-2xl text-velox-gold">{p.price}</div>
              <ul className="mt-8 space-y-3 text-sm text-velox-platinum">
                {p.feats.map((f) => (
                  <li key={f} className="flex gap-3"><Check className="size-4 text-velox-gold shrink-0 mt-0.5" /> {f}</li>
                ))}
              </ul>
              <Link to="/contact" className="mt-10 inline-flex items-center gap-2 font-mono-ui text-[11px] text-velox-gold">
                Apply <ArrowRight className="size-3" />
              </Link>
            </div>
          ))}
        </div>

        <section className="mt-32 grid lg:grid-cols-2 gap-16 items-center bg-velox-charcoal p-12 lg:p-16 border border-white/5">
          <div>
            <SectionLabel>Calculator</SectionLabel>
            <h2 className="mt-6 font-display text-5xl italic leading-tight">Estimate your <span className="text-velox-gold">monthly.</span></h2>
            <p className="mt-6 text-velox-platinum/80">Indicative only. Final pricing depends on vehicle and terms.</p>
          </div>
          <div className="space-y-8">
            <div>
              <div className="flex justify-between text-sm">
                <span className="font-mono-ui text-[10px] text-velox-gold">Vehicle value</span>
                <span className="text-velox-platinum">DKK {value.toLocaleString()}</span>
              </div>
              <input type="range" min={500000} max={5000000} step={50000} value={value} onChange={(e) => setValue(+e.target.value)} className="w-full mt-3 accent-velox-gold" />
            </div>
            <div>
              <div className="flex justify-between text-sm">
                <span className="font-mono-ui text-[10px] text-velox-gold">Down payment</span>
                <span className="text-velox-platinum">{down}%</span>
              </div>
              <input type="range" min={0} max={50} value={down} onChange={(e) => setDown(+e.target.value)} className="w-full mt-3 accent-velox-gold" />
            </div>
            <div>
              <div className="font-mono-ui text-[10px] text-velox-gold mb-2">Term</div>
              <div className="flex gap-2">
                {[24, 36, 48].map((t) => (
                  <button key={t} onClick={() => setTerm(t)} className={`flex-1 py-3 font-mono-ui text-[11px] border transition ${term === t ? "bg-velox-gold text-velox-black border-velox-gold" : "border-white/15 text-velox-platinum hover:border-velox-gold"}`}>
                    {t} mo
                  </button>
                ))}
              </div>
            </div>
            <div className="border-t border-white/10 pt-6">
              <div className="font-mono-ui text-[10px] text-velox-muted">Estimated monthly</div>
              <div className="font-display text-5xl text-velox-gold mt-2">DKK {monthly.toLocaleString()}</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
