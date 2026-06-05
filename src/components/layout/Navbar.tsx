import { Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { to: "/inventory", label: "Inventory" },
  { to: "/leasing", label: "Leasing" },
  { to: "/events", label: "Events" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 120], [1, 0.9]);
  const bg = useTransform(scrollY, [0, 80], ["rgba(10,10,10,0.4)", "rgba(10,10,10,0.85)"]);
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      style={{ backgroundColor: bg }}
      className="fixed top-0 inset-x-0 z-50 backdrop-blur-md border-b border-white/5"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 h-20 flex items-center justify-between">
        <motion.div style={{ scale }} className="origin-left">
          <Link to="/" className="flex items-baseline gap-2">
            <span className="font-display italic text-3xl text-velox-gold">Velox</span>
            <span className="font-mono-ui text-[10px] text-velox-platinum">Motors</span>
          </Link>
        </motion.div>

        <nav className="hidden lg:flex items-center gap-10">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="relative font-mono-ui text-[11px] text-velox-platinum hover:text-velox-gold transition-colors group"
              activeProps={{ className: "text-velox-gold" }}
            >
              {l.label}
              <span className="absolute -bottom-1.5 left-1/2 h-px w-0 bg-velox-gold transition-all duration-300 group-hover:left-0 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden lg:inline-flex font-mono-ui text-[11px] border border-velox-gold/60 text-velox-gold px-5 py-3 hover:bg-velox-gold hover:text-velox-black transition-colors"
        >
          Book a Test Drive
        </Link>

        <button
          onClick={() => setOpen(true)}
          className="lg:hidden text-velox-platinum"
          aria-label="Open menu"
        >
          <Menu className="size-6" />
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-velox-black z-50 flex flex-col"
        >
          <div className="flex items-center justify-between h-20 px-6 border-b border-white/5">
            <span className="font-display italic text-2xl text-velox-gold">Velox</span>
            <button onClick={() => setOpen(false)} aria-label="Close menu">
              <X className="size-6 text-velox-platinum" />
            </button>
          </div>
          <nav className="flex flex-col items-center justify-center flex-1 gap-8">
            {links.map((l, i) => (
              <motion.div
                key={l.to}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i, duration: 0.5 }}
              >
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="font-display text-4xl text-velox-white hover:text-velox-gold"
                >
                  {l.label}
                </Link>
              </motion.div>
            ))}
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}
