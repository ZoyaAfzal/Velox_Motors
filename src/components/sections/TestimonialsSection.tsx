import { Quote } from "lucide-react";
import { SectionLabel } from "@/components/common/SectionLabel";

const items = [
  { quote: "Velox didn't sell me a car. They delivered an experience I'll remember for the rest of my life.", name: "Henrik L.", car: "Porsche 911 GT3 Owner" },
  { quote: "Three generations of my family have bought from Velox. The standard never wavers.", name: "Sofie M.", car: "Bentley Continental GT" },
  { quote: "The most discreet, knowledgeable team I've ever worked with. They understand the cars and the clients.", name: "Magnus K.", car: "Ferrari 296 GTB Owner" },
  { quote: "Every detail considered. Every promise kept. Velox is in a class of one.", name: "Anders B.", car: "Aston Martin DB12" },
];

export function TestimonialsSection() {
  return (
    <section className="py-32 overflow-hidden bg-velox-charcoal border-y border-white/5">
      <div className="flex justify-center mb-16">
        <SectionLabel>Words from clients</SectionLabel>
      </div>
      <div className="group relative">
        <div className="marquee-track group-hover:[animation-play-state:paused]">
          {[...items, ...items].map((t, i) => (
            <div key={i} className="w-[480px] shrink-0 mx-6 p-10 bg-velox-black border border-white/5">
              <Quote className="size-8 text-velox-gold/60 mb-6" />
              <p className="font-display italic text-2xl leading-snug text-velox-white">"{t.quote}"</p>
              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="text-velox-platinum text-sm">{t.name}</div>
                <div className="font-mono-ui text-[10px] text-velox-gold mt-1">{t.car}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
