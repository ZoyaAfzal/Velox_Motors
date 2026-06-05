import { RevealOnScroll } from "@/components/common/RevealOnScroll";
import { SectionLabel } from "@/components/common/SectionLabel";

export function EventsDescription() {
  return (
    <section id="events-description" className="py-32 px-6 lg:px-10 bg-velox-white text-velox-black">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <RevealOnScroll>
            <div>
              <SectionLabel>Experience</SectionLabel>
              <h2 className="mt-6 font-display text-5xl lg:text-7xl italic leading-[0.95]">
                Velox <span className="text-velox-gold">Community</span>
              </h2>
              <p className="mt-8 text-velox-black/70 leading-relaxed max-w-xl">
                We believe that premium automobiles are best enjoyed in the company of like-minded enthusiasts. Our events calendar is curated to foster connections, celebrate automotive heritage, and create unforgettable memories, from coastal cruises to exclusive showroom previews.
              </p>
            </div>
          </RevealOnScroll>
          
          <RevealOnScroll delay={0.2}>
            <div className="relative aspect-[4/3] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1542362567-b07e54358753?w=1200&q=85" 
                alt="Community event" 
                className="w-full h-full object-cover"
              />
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
