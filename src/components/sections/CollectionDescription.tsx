import { RevealOnScroll } from "@/components/common/RevealOnScroll";
import { SectionLabel } from "@/components/common/SectionLabel";

export function CollectionDescription() {
  return (
    <section id="collection-description" className="py-32 px-6 lg:px-10 bg-velox-black relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-velox-gold/5 blur-[120px] -z-10" />
      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <RevealOnScroll>
            <div>
              <SectionLabel>Curated Excellence</SectionLabel>
              <h2 className="mt-6 font-display text-5xl lg:text-7xl italic text-velox-white leading-[0.95]">
                The <span className="text-velox-gold">Velox</span> Collection
              </h2>
              <p className="mt-8 text-velox-platinum/70 leading-relaxed max-w-xl">
                Every vehicle in our showroom is hand-selected through a rigorous process of verification and aesthetic assessment. We don't just sell cars; we curate masterpieces of automotive history and future-forward engineering.
              </p>
            </div>
          </RevealOnScroll>
          
          <RevealOnScroll delay={0.2}>
            <div className="relative aspect-[4/5] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=85" 
                alt="Collection detail" 
                className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velox-black via-transparent to-transparent opacity-60" />
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
