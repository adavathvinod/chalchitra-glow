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
    <section className="section-padding bg-muted/50" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Strengths</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
            Why Choose Us
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-background rounded-xl p-6 card-shadow hover:card-shadow-lg transition-all duration-300 group border border-border hover:border-primary/30"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <r.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-bold text-foreground mb-2">
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
