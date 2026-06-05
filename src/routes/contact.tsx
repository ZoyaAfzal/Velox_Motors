import { createFileRoute } from "@tanstack/react-router";
import { ContactSection } from "@/components/sections/ContactSection";
import { SectionLabel } from "@/components/common/SectionLabel";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Velox Motors" },
      { name: "description", content: "Get in touch with Velox Motors. Copenhagen showroom, private viewings, test drives." },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <div className="pt-32">
      <div className="px-6 lg:px-10 mx-auto max-w-[1400px]">
        <SectionLabel>Get in touch</SectionLabel>
        <h1 className="mt-6 font-display text-7xl lg:text-8xl italic leading-[0.9] max-w-4xl">
          We respond <span className="text-velox-gold">personally.</span>
        </h1>
      </div>
      <ContactSection />
    </div>
  );
}
