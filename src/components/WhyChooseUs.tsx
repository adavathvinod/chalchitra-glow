import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, MapPin, Monitor, BarChart3, Clock, Shield } from "lucide-react";

const reasons = [
  { icon: Zap, title: "First Mover Advantage", desc: "India's pioneering moving LED outdoor advertising network." },
  { icon: MapPin, title: "40+ Prime Routes", desc: "Strategically selected high-footfall urban routes." },
  { icon: Monitor, title: "Smart Display Tech", desc: "Real-time content management with 100% control." },
  { icon: BarChart3, title: "Data-Driven Results", desc: "Measurable campaigns with geo-targeted analytics." },
  { icon: Clock, title: "24/7 Visibility", desc: "Round-the-clock brand presence on the streets." },
  { icon: Shield, title: "Trusted Network", desc: "Reliable fleet operations with consistent delivery." },
];

const WhyChooseUs = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary text-glow mb-4">
            Why Choose Us
          </h2>
          <div className="w-24 h-1 gradient-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-xl p-6 hover:box-glow-strong transition-all duration-300 group neon-border"
            >
              <r.icon className="w-8 h-8 text-primary mb-4 group-hover:text-glow-strong transition-all" />
              <h3 className="font-display text-sm font-bold text-primary tracking-wider uppercase mb-2">
                {r.title}
              </h3>
              <p className="text-sm text-muted-foreground">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
