import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { SectionLabel } from "@/components/common/SectionLabel";

const IMG = "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=1200&q=85";

export function AboutSection() {
  return (
    <section className="py-32 px-6 lg:px-10">
      <div className="mx-auto max-w-[1400px] grid lg:grid-cols-12 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 relative aspect-[3/4] overflow-hidden bg-velox-charcoal"
        >
          <img src={IMG} alt="Velox heritage" className="h-full w-full object-cover" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="lg:col-span-7 lg:pl-12"
        >
          <SectionLabel>The House of Velox</SectionLabel>
          <h2 className="mt-6 font-display text-5xl lg:text-6xl italic leading-[1.05]">
            Velox Motors has united <span className="text-velox-gold">passion and love</span> for cars since 1994.
          </h2>
          <p className="mt-8 text-velox-platinum/80 leading-relaxed max-w-xl">
            Three decades of curating the world's most extraordinary automobiles, and an obsessive commitment to the people who drive them.
          </p>

          <Link
            to="/about"
            className="group mt-12 inline-flex items-center gap-2 font-mono-ui text-[11px] text-velox-gold border-b border-velox-gold/40 pb-1 hover:gap-3 transition-all"
          >
            Read Our Story
            <ArrowRight className="size-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
