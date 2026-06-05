import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Check, ArrowRight } from "lucide-react";
import { SectionLabel } from "@/components/common/SectionLabel";

// Dummy data for plans - in a real scenario this might come from a central data file
const plans = {
  selected: { name: "Selected Car Leasing", price: "From DKK 14,800 / mo", description: "Curated single-vehicle leasing, full service included.", details: ["Single curated vehicle", "Service & maintenance", "12,000 km / yr", "24 month terms"] },
  premium: { name: "Premium Leasing", price: "From DKK 28,500 / mo", description: "Concierge ownership of the most desirable cars in our collection.", details: ["Top-tier collection access", "Vehicle swaps quarterly", "Concierge service", "Insurance included"] },
  business: { name: "Business Fleet", price: "Custom pricing", description: "Tailored fleet solutions for companies and family offices.", details: ["Tax-optimized structuring", "Fleet of 3+ vehicles", "Dedicated account director", "Bespoke terms"] },
};

export const Route = createFileRoute("/leasing/$slug")({
  loader: ({ params }) => {
    const plan = (plans as any)[params.slug];
    if (!plan) throw notFound();
    return { plan, slug: params.slug };
  },
  component: PlanDetail,
});

function PlanDetail() {
  const { plan } = Route.useLoaderData();

  return (
    <div className="pt-32 pb-24 px-6 lg:px-10">
      <div className="mx-auto max-w-[1400px]">
        <Link to="/leasing" className="inline-flex items-center gap-2 font-mono-ui text-[10px] text-velox-muted hover:text-velox-gold transition-colors">
          <ArrowLeft className="size-3" /> Back to Leasing
        </Link>
        <div className="mt-12 grid lg:grid-cols-2 gap-20">
          <div>
            <SectionLabel>Leasing Plan</SectionLabel>
            <h1 className="mt-6 font-display text-6xl italic leading-[0.95]">{plan.name}</h1>
            <p className="mt-8 text-velox-platinum/80 text-xl leading-relaxed">{plan.description}</p>
            <div className="mt-10 font-display text-4xl text-velox-gold">{plan.price}</div>
            <Link to="/contact" className="mt-10 inline-flex items-center gap-2 bg-velox-gold text-velox-black px-7 py-4 font-mono-ui text-[11px] hover:bg-velox-gold-light transition-colors">
              Request this plan <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="bg-velox-charcoal p-10 border border-white/5">
            <h3 className="font-display text-2xl mb-8">Plan Features</h3>
            <ul className="space-y-4">
              {plan.details.map((d: string) => (
                <li key={d} className="flex gap-4 items-center text-velox-platinum border-b border-white/5 pb-4">
                  <Check className="size-5 text-velox-gold" /> {d}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
