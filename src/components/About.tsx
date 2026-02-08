import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-background" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Who We Are</span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
              About Chalchitra Advertising
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="bg-card rounded-2xl p-8 sm:p-12 card-shadow-lg border border-border space-y-6 text-muted-foreground leading-relaxed text-lg">
            <p>
              <span className="text-primary font-semibold">Chalchitra Advertising</span> is India's first moving outdoor LED advertising network, revolutionizing how brands connect with their audience. We operate a fleet of next-generation LED-equipped e-rickshaws that traverse 40+ high-footfall routes across major Indian cities.
            </p>
            <p>
              Our innovative approach combines the power of traditional outdoor advertising with cutting-edge digital technology. Each of our 10+ LED screens is equipped with smart display control, enabling real-time content management, geo-targeted campaigns, and data-driven advertising solutions.
            </p>
            <p>
              Founded with a vision to make outdoor advertising more dynamic, measurable, and accessible, Chalchitra bridges the gap between hyperlocal reach and digital precision. We bring your brand directly to the streets — where your audience lives, works, and commutes.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
