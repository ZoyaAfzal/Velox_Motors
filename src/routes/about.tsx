import { createFileRoute } from "@tanstack/react-router";
import { SectionLabel } from "@/components/common/SectionLabel";
import { RevealOnScroll } from "@/components/common/RevealOnScroll";
import { AnimatedCounter } from "@/components/common/AnimatedCounter";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Velox Motors" },
      { name: "description", content: "Three decades of curating the world's most extraordinary automobiles. The Velox Motors story." },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const timeline = [
  { year: "1994", title: "Founded in Copenhagen", text: "A small showroom on Strandvejen with three cars and one obsession." },
  { year: "2003", title: "First Concours award", text: "Velox's restoration division receives international recognition." },
  { year: "2011", title: "Expansion to Aarhus", text: "Our second location opens; the house grows beyond the capital." },
  { year: "2018", title: "The Investment Pool", text: "We invite a circle of clients to co-own appreciating modern classics." },
  { year: "2024", title: "Seven locations · 100+ team", text: "Today Velox is Scandinavia's most trusted name in premium automobiles." },
];

function About() {
  return (
    <div className="pt-32 pb-12 px-6 lg:px-10">
      <div className="mx-auto max-w-[1400px]">
        <SectionLabel>Our Story</SectionLabel>
        <h1 className="mt-6 font-display text-7xl lg:text-9xl italic leading-[0.88] max-w-5xl">
          The house of <span className="text-velox-gold">Velox.</span>
        </h1>

        <div className="mt-20 grid lg:grid-cols-2 gap-16 items-center">
          <img src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=1200&q=85" alt="Showroom" className="aspect-[4/5] object-cover w-full" />
          <div>
            <p className="font-display italic text-3xl leading-snug text-velox-platinum">
              "We don't sell cars. We connect remarkable people with the machines they've always dreamed of."
            </p>
            <p className="mt-6 font-mono-ui text-[10px] text-velox-gold">— Founder, Velox Motors</p>
            <p className="mt-12 text-velox-platinum/80 leading-relaxed">
              From a single Copenhagen showroom in 1994 to seven locations across Scandinavia, Velox has spent three decades earning the trust of collectors, drivers, and connoisseurs. Every car we sell passes through a 240-point inspection. Every client relationship begins with a conversation, not a transaction.
            </p>
          </div>
        </div>

        <div className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-8 border-y border-white/10 py-12">
          {[
            { n: 30, s: "", l: "Years" },
            { n: 847, s: "", l: "Cars delivered" },
            { n: 100, s: "+", l: "Team members" },
            { n: 7, s: "", l: "Locations" },
          ].map((x) => (
            <div key={x.l}>
              <div className="font-display text-5xl lg:text-6xl text-velox-gold"><AnimatedCounter to={x.n} suffix={x.s} /></div>
              <div className="font-mono-ui text-[10px] text-velox-muted mt-2">{x.l}</div>
            </div>
          ))}
        </div>

        <div className="mt-32">
          <SectionLabel>Timeline</SectionLabel>
          <h2 className="mt-6 font-display text-5xl italic">Three decades, <span className="text-velox-gold">one standard.</span></h2>
          <div className="mt-16 space-y-12">
            {timeline.map((t, i) => (
              <RevealOnScroll key={t.year} delay={i * 0.05}>
                <div className="grid grid-cols-[120px_1fr] gap-8 lg:gap-16 border-t border-white/10 pt-10">
                  <div className="font-display text-4xl text-velox-gold italic">{t.year}</div>
                  <div>
                    <h3 className="font-display text-2xl">{t.title}</h3>
                    <p className="mt-3 text-velox-platinum/80 max-w-2xl">{t.text}</p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
