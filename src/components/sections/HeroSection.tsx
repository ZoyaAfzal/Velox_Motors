import { Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform, AnimatePresence, useSpring, useMotionValue } from "framer-motion";
import { ArrowRight, Play, ChevronDown, X } from "lucide-react";
import { useRef, useState, useEffect } from "react";

const HERO = "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1920&q=80";

const words = ["Mærk", "mere."];

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [showVideo, setShowVideo] = useState(false);
  
  // Parallax on scroll
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const scrollYParallax = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  // Mouse interactivity
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothY, [-0.5, 0.5], ["2deg", "-2deg"]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], ["-2deg", "2deg"]);
  const translateX = useTransform(smoothX, [-0.5, 0.5], ["-1%", "1%"]);
  const translateY = useTransform(smoothY, [-0.5, 0.5], ["-1%", "1%"]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX.set(clientX / innerWidth - 0.5);
      mouseY.set(clientY / innerHeight - 0.5);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section ref={ref} className="relative h-screen min-h-[720px] overflow-hidden">
      <motion.div 
        style={{ 
          y: scrollYParallax,
          rotateX,
          rotateY,
          x: translateX,
          translateY,
          scale: 1.1
        }} 
        className="absolute inset-0 transition-transform duration-300 ease-out"
      >
        <img src={HERO} alt="Velox Motors hero" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-velox-black/70 via-velox-black/30 to-velox-black" />
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.18, delayChildren: 0.4 } } }}
          className="mt-8 font-display text-[18vw] sm:text-[14vw] lg:text-[11rem] leading-[0.85] tracking-tight"
        >
          {words.map((w, i) => (
            <motion.span
              key={i}
              variants={{
                hidden: { y: 80, opacity: 0 },
                visible: { y: 0, opacity: 1, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } },
              }}
              className={`inline-block mr-4 italic ${i === 1 ? "shimmer-text" : "text-velox-white"}`}
            >
              {w}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="mt-8 max-w-xl text-velox-platinum/80 leading-relaxed"
        >
          Premium automobiles for those who demand more than transportation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row gap-3"
        >
          <Link
            to="/inventory"
            className="group inline-flex items-center justify-center gap-2 bg-velox-gold text-velox-black px-7 py-4 font-mono-ui text-[11px] hover:bg-velox-gold-light transition-colors"
          >
            Explore Inventory
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <button 
            onClick={() => setShowVideo(true)}
            className="inline-flex items-center justify-center gap-2 border border-velox-platinum/30 text-velox-platinum px-7 py-4 font-mono-ui text-[11px] hover:border-velox-gold hover:text-velox-gold transition-colors"
          >
            <Play className="size-3" />
            Watch Story
          </button>
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-2 left-1/2 -translate-x-1/2 text-velox-gold/60"
      >
        <ChevronDown className="size-5" />
      </motion.div>

      <AnimatePresence>
        {showVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-velox-black/95 backdrop-blur-sm px-6"
          >
            <button 
              onClick={() => setShowVideo(false)}
              className="absolute top-10 right-10 text-velox-platinum hover:text-velox-gold transition-colors"
            >
              <X className="size-8" />
            </button>
            <div className="relative aspect-video w-full max-w-5xl bg-velox-black border border-velox-platinum/10 flex flex-col items-center justify-center overflow-hidden">
              <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center grayscale" />
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="relative z-10 flex flex-col items-center"
              >
                <div className="size-20 rounded-full border border-velox-gold/30 flex items-center justify-center mb-8">
                  <Play className="size-8 text-velox-gold animate-pulse" />
                </div>
                <h2 className="font-display text-4xl lg:text-6xl text-velox-white italic mb-4">Coming Soon</h2>
                <p className="font-mono-ui text-[10px] text-velox-gold tracking-[0.2em] uppercase">The Velox Story · 2026</p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

