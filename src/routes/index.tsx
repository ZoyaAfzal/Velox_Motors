import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/sections/HeroSection";
import { BrandsSection } from "@/components/sections/BrandsSection";
import { FeaturedInventory } from "@/components/sections/FeaturedInventory";
import { CollectionDescription } from "@/components/sections/CollectionDescription";
import { LeasingSection } from "@/components/sections/LeasingSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { EventsSection } from "@/components/sections/EventsSection";
import { EventsDescription } from "@/components/sections/EventsDescription";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ContactSection } from "@/components/sections/ContactSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Velox Motors — Premium Automobiles · Copenhagen" },
      { name: "description", content: "Curated supercars and luxury automobiles. Porsche, Ferrari, Lamborghini, McLaren, Bentley. Copenhagen since 1994." },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <HeroSection />
      <BrandsSection />
      <FeaturedInventory />
      <CollectionDescription />
      <LeasingSection />
      <AboutSection />
      <EventsSection />
      <EventsDescription />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}


