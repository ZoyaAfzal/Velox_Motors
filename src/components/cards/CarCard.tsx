import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Gauge, Calendar, Zap, ArrowUpRight } from "lucide-react";
import type { Car } from "@/lib/types";

const statusStyles: Record<Car["status"], string> = {
  available: "bg-velox-gold/15 text-velox-gold border-velox-gold/40",
  reserved: "bg-velox-platinum/10 text-velox-platinum border-velox-platinum/30",
  sold: "bg-velox-muted/20 text-velox-muted border-velox-muted/40",
};

export function CarCard({ car }: { car: Car }) {
  return (
    <Link
      to="/inventory/$slug"
      params={{ slug: car.slug }}
      search={{}}
      className="group relative block aspect-[3/4] overflow-hidden bg-velox-charcoal"
    >
      <motion.img
        src={car.image}
        alt={`${car.brand} ${car.model}`}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
        initial={{ scale: 1.02 }}
        whileHover={{ scale: 1.08 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-velox-black via-velox-black/40 to-transparent" />

      <div className={`absolute top-4 right-4 border px-3 py-1 text-[10px] font-mono-ui ${statusStyles[car.status]}`}>
        {car.status}
      </div>

      <div className="absolute top-4 left-4 font-mono-ui text-[10px] text-velox-platinum/70">
        {car.brand}
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6 transition-transform duration-500 group-hover:-translate-y-1">
        <h3 className="font-display text-3xl leading-tight text-velox-white">
          {car.model}
        </h3>
        <p className="mt-1 font-mono-ui text-xs text-velox-gold">{car.priceFormatted}</p>

        <div className="mt-4 flex items-center gap-4 text-[11px] text-velox-platinum/70 font-mono-ui">
          <span className="flex items-center gap-1.5"><Calendar className="size-3" />{car.year}</span>
          <span className="flex items-center gap-1.5"><Gauge className="size-3" />{car.engine.split(" ")[0]}</span>
          <span className="flex items-center gap-1.5"><Zap className="size-3" />{car.power}</span>
        </div>

        <div className="mt-5 flex items-center gap-2 text-velox-gold text-xs font-mono-ui opacity-0 -translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
          View Details <ArrowUpRight className="size-4" />
        </div>
      </div>
    </Link>
  );
}
