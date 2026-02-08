import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import serviceAuto from "@/assets/service-auto-branding.jpg";
import serviceAirport from "@/assets/service-airport.jpg";
import serviceBus from "@/assets/service-bus-branding.jpg";
import serviceBtl from "@/assets/service-btl.jpg";
import serviceCinema from "@/assets/service-cinema.jpg";
import serviceDigital from "@/assets/service-digital-screens.jpg";
import serviceInfluencer from "@/assets/service-influencer.jpg";
import serviceMall from "@/assets/service-mall.jpg";
import serviceNewspaper from "@/assets/service-newspaper.jpg";
import serviceOutdoor from "@/assets/service-outdoor.jpg";
import serviceRadio from "@/assets/service-radio.jpg";
import serviceRailway from "@/assets/service-railway.jpg";

const services = [
  { name: "Auto Branding", image: serviceAuto, desc: "LED screens on e-rickshaws across city routes" },
  { name: "Airport Advertising", image: serviceAirport, desc: "Premium digital displays at airport terminals" },
  { name: "Bus Branding", image: serviceBus, desc: "High-impact bus wrap & LED advertising" },
  { name: "BTL Activities", image: serviceBtl, desc: "Below-the-line experiential marketing" },
  { name: "Cinema Advertising", image: serviceCinema, desc: "Pre-show LED screen advertising" },
  { name: "Digital Screens", image: serviceDigital, desc: "Smart outdoor LED displays" },
  { name: "Influencer Marketing", image: serviceInfluencer, desc: "Social media brand partnerships" },
  { name: "Mall Advertising", image: serviceMall, desc: "Indoor retail digital signage" },
  { name: "Newspaper Ads", image: serviceNewspaper, desc: "Print media advertising solutions" },
  { name: "Outdoor Hoarding", image: serviceOutdoor, desc: "Large-format billboards & hoardings" },
  { name: "Radio Advertising", image: serviceRadio, desc: "FM radio campaigns & jingles" },
  { name: "Railway Advertising", image: serviceRailway, desc: "Station & train branding solutions" },
];

const Services = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="services" className="section-padding" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary text-glow mb-4">
            Our Services
          </h2>
          <div className="w-24 h-1 gradient-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass rounded-xl overflow-hidden group hover:box-glow-strong transition-all duration-300 cursor-pointer"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h3 className="font-display text-xs sm:text-sm font-semibold text-primary tracking-wider uppercase">
                  {service.name}
                </h3>
                <p className="text-xs text-muted-foreground mt-1">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
