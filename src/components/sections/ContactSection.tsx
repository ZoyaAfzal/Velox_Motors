import { Link } from "@tanstack/react-router";
import { Mail, MapPin, ArrowRight } from "lucide-react";
import { SectionLabel } from "@/components/common/SectionLabel";
import { RevealOnScroll } from "@/components/common/RevealOnScroll";

export function ContactSection() {
  return (
    <section className="py-32 px-6 lg:px-10">
      <div className="mx-auto max-w-[1400px] grid lg:grid-cols-2 gap-16">
        <RevealOnScroll>
          <SectionLabel>Contact</SectionLabel>
          <h2 className="mt-6 font-display text-6xl lg:text-7xl italic leading-[0.95]">
            Begin a <span className="text-velox-gold">conversation.</span>
          </h2>
          <p className="mt-8 text-velox-platinum/80 max-w-md">
            Book a private viewing, request a brochure, or simply ask a question. We respond within one business day.
          </p>
          <div className="mt-12 space-y-6 text-sm">
            <div className="flex gap-4 items-center text-velox-platinum">
              <Mail className="size-4 text-velox-gold" /> contact@veloxmotors.dk
            </div>
            <div className="flex gap-4 items-center text-velox-platinum">
              <MapPin className="size-4 text-velox-gold" /> Strandvejen 100, 2900 Hellerup
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <form className="space-y-5 border border-white/10 p-10 bg-velox-charcoal" onSubmit={(e) => e.preventDefault()}>
            {["Name", "Email"].map((f) => (
              <div key={f}>
                <label className="font-mono-ui text-[10px] text-velox-gold">{f}</label>
                <input className="mt-2 w-full bg-transparent border-b border-white/15 py-3 text-velox-white focus:border-velox-gold outline-none transition" />
              </div>
            ))}
            <div>
              <label className="font-mono-ui text-[10px] text-velox-gold">Message</label>
              <textarea rows={4} className="mt-2 w-full bg-transparent border-b border-white/15 py-3 text-velox-white focus:border-velox-gold outline-none transition resize-none" />
            </div>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 bg-velox-gold text-velox-black px-7 py-4 font-mono-ui text-[11px] hover:bg-velox-gold-light transition"
            >
              Send Enquiry <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </form>
        </RevealOnScroll>
      </div>
    </section>
  );
}
