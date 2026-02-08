import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send } from "lucide-react";

const BookingForm = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="booking" className="section-padding gradient-dark" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary text-glow mb-4">
            Book Your Campaign
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Ready to put your brand on the streets? Fill in the form and our team will reach out within 24 hours.
          </p>
          <div className="w-24 h-1 gradient-primary mx-auto rounded-full mt-4" />
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass rounded-2xl p-8 sm:p-12 max-w-2xl mx-auto box-glow neon-border"
        >
          <div className="grid sm:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-xs font-display tracking-wider uppercase text-primary mb-2">Name</label>
              <input
                type="text"
                required
                placeholder="Your Name"
                className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:box-glow transition-all"
              />
            </div>
            <div>
              <label className="block text-xs font-display tracking-wider uppercase text-primary mb-2">Email</label>
              <input
                type="email"
                required
                placeholder="you@email.com"
                className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:box-glow transition-all"
              />
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-xs font-display tracking-wider uppercase text-primary mb-2">Mobile</label>
            <input
              type="tel"
              required
              placeholder="+91 XXXXX XXXXX"
              className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:box-glow transition-all"
            />
          </div>
          <div className="mb-8">
            <label className="block text-xs font-display tracking-wider uppercase text-primary mb-2">Message</label>
            <textarea
              rows={4}
              placeholder="Tell us about your campaign..."
              className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:box-glow transition-all resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full gradient-primary text-primary-foreground font-display text-sm tracking-wider uppercase py-3.5 rounded-lg font-semibold hover:opacity-90 transition-all box-glow-strong flex items-center justify-center gap-2"
          >
            <Send className="w-4 h-4" />
            {submitted ? "Sent Successfully!" : "Book My Campaign"}
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default BookingForm;
