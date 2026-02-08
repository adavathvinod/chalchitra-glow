import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Eye } from "lucide-react";

const MissionVision = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="mission" className="section-padding gradient-dark" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary text-glow mb-4">
            Mission & Vision
          </h2>
          <div className="w-24 h-1 gradient-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="glass rounded-2xl p-8 sm:p-10 box-glow neon-border"
          >
            <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-primary-foreground" />
            </div>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-primary text-glow mb-4">
              Our Mission
            </h3>
            <p className="text-foreground/80 leading-relaxed">
              To revolutionize outdoor advertising in India by providing innovative, technology-driven, and cost-effective moving LED advertising solutions. We aim to empower brands of all sizes — from local businesses to national enterprises — with hyperlocal, high-visibility campaigns that deliver measurable results.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="glass rounded-2xl p-8 sm:p-10 box-glow neon-border"
          >
            <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-6">
              <Eye className="w-7 h-7 text-primary-foreground" />
            </div>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-primary text-glow mb-4">
              Our Vision
            </h3>
            <p className="text-foreground/80 leading-relaxed">
              To become India's largest and most trusted moving outdoor advertising network, setting the standard for smart, sustainable, and impactful street-level advertising. We envision a future where every brand can reach their audience on the move — efficiently, affordably, and with the power of next-generation LED technology.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
