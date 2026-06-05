import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Youtube, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-velox-black border-t border-white/5 mt-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-20 grid grid-cols-2 lg:grid-cols-5 gap-12">
        <div className="col-span-2">
          <div className="flex items-baseline gap-2">
            <span className="font-display italic text-4xl text-velox-gold">Velox</span>
            <span className="font-mono-ui text-xs text-velox-platinum">Motors</span>
          </div>
          <p className="mt-6 max-w-xs text-velox-muted text-sm leading-relaxed">
            Premium automobiles for those who demand more than transportation. Copenhagen, Est. 1994.
          </p>
          <div className="mt-8 flex gap-5">
            {[Instagram, Facebook, Youtube, Linkedin].map((Icon, i) => (
              <a key={i} href="#" aria-label="social" className="text-velox-muted hover:text-velox-gold transition-all hover:scale-110">
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        {[
          { title: "Inventory", links: [["All Cars", "/inventory"], ["Featured", "/inventory"]] },
          { title: "Services", links: [["Leasing", "/leasing"], ["Events", "/events"]] },
          { title: "House", links: [["About", "/about"], ["Contact", "/contact"]] },
        ].map((col) => (
          <div key={col.title}>
            <h4 className="font-mono-ui text-[10px] text-velox-gold mb-5">{col.title}</h4>
            <ul className="space-y-3">
              {col.links.map(([label, href]) => (
                <li key={label}>
                  <Link to={href} className="text-velox-platinum/80 hover:text-velox-gold text-sm transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/5">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-6 flex flex-col md:flex-row justify-end gap-2 text-velox-muted font-mono-ui text-[10px]">
          <a href="https://axistechgroup.com/" target="_blank" rel="noopener noreferrer" className="hover:text-velox-gold transition-colors">
            Powered by AxisTechGroup
          </a>
        </div>
      </div>
    </footer>
  );
}
