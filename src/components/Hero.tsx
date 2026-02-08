import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import heroBg1 from "@/assets/hero-bg.jpg";
import heroBg2 from "@/assets/hero-bg-2.jpg";
import heroBg3 from "@/assets/hero-bg-3.jpg";

const slides = [
  {
    image: heroBg1,
    tagline: "On the Road. In the Eyes.",
    subtitle: "India's 1st Moving Outdoor LED Network",
  },
  {
    image: heroBg2,
    tagline: "40+ High Footfall Routes",
    subtitle: "Maximum visibility where it matters most",
  },
  {
    image: heroBg3,
    tagline: "10+ Next-Gen LED Screens",
    subtitle: "100% Smart Display Control",
  },
];

const stats = [
  { value: "40+", label: "High Footfall Routes" },
  { value: "10+", label: "LED Screens" },
  { value: "100%", label: "Smart Control" },
  { value: "150+", label: "Locations" },
];

const AnimatedCounter = ({ value, label }: { value: string; label: string }) => {
  const [count, setCount] = useState(0);
  const numericPart = parseInt(value);
  const suffix = value.replace(/[0-9]/g, "");

  useEffect(() => {
    if (isNaN(numericPart)) return;
    let start = 0;
    const duration = 2000;
    const step = duration / numericPart;
    const timer = setInterval(() => {
      start++;
      setCount(start);
      if (start >= numericPart) clearInterval(timer);
    }, step);
    return () => clearInterval(timer);
  }, [numericPart]);

  return (
    <div className="text-center">
      <div className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary text-glow-strong">
        {isNaN(numericPart) ? value : `${count}${suffix}`}
      </div>
      <div className="text-xs sm:text-sm text-foreground/60 mt-1 tracking-wider uppercase font-display">
        {label}
      </div>
    </div>
  );
};

const Hero = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((p) => (p + 1) % slides.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [next]);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <img
            src={slides[current].image}
            alt={slides[current].tagline}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-glow-strong text-primary mb-4 leading-tight">
                {slides[current].tagline}
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-foreground/80 mb-8 font-light">
                {slides[current].subtitle}
              </p>
            </motion.div>
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <a
              href="#booking"
              className="gradient-primary text-primary-foreground font-display text-sm tracking-wider uppercase px-8 py-3.5 rounded-lg font-semibold hover:opacity-90 transition-all box-glow-strong"
            >
              Book Your Campaign
            </a>
            <a
              href="#contact"
              className="neon-border text-primary font-display text-sm tracking-wider uppercase px-8 py-3.5 rounded-lg font-semibold hover:bg-primary/10 transition-all"
            >
              Get Free Consultation
            </a>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="neon-border text-primary font-display text-sm tracking-wider uppercase px-8 py-3.5 rounded-lg font-semibold hover:bg-primary/10 transition-all"
            >
              Chat on WhatsApp
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="glass rounded-2xl p-6 sm:p-8 max-w-3xl mx-auto box-glow"
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <AnimatedCounter key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === current ? "bg-primary box-glow-strong w-8" : "bg-foreground/30"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
