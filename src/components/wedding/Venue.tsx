import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export function Venue() {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-rose-gold tracking-[0.4em] uppercase text-sm"
        >
          The Venue
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-script text-5xl md:text-7xl text-deep-rose mt-3"
        >
          Where Forever Begins
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-10 glass rounded-3xl p-6 md:p-10 shadow-petal overflow-hidden"
        >
          <div className="flex flex-col items-center gap-3">
            <motion.div
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="relative"
            >
              <div className="absolute inset-0 bg-rose-gold blur-xl opacity-60 rounded-full" />
              <div className="relative h-14 w-14 rounded-full bg-gradient-rose-gold flex items-center justify-center">
                <MapPin className="text-primary-foreground" />
              </div>
            </motion.div>
            <h3 className="font-display text-3xl md:text-4xl text-deep-rose mt-2">
              Hotel Binwa View
            </h3>
            <p className="text-foreground/70 tracking-wider">Baijnath, Himachal Pradesh</p>
          </div>

          <div className="mt-8 rounded-2xl overflow-hidden ring-1 ring-rose-gold/20">
            <iframe
              title="Hotel Binwa View"
              src="https://www.google.com/maps?q=Hotel+Binwa+View+Baijnath&output=embed"
              width="100%"
              height="320"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <a
            href="https://www.google.com/maps/search/Hotel+Binwa+View+Baijnath"
            target="_blank"
            rel="noreferrer"
            className="inline-flex mt-8 items-center gap-2 px-8 py-3 rounded-full bg-gradient-rose-gold text-primary-foreground font-display tracking-[0.2em] text-sm uppercase shadow-soft hover:scale-105 transition-transform"
          >
            <MapPin size={18} /> View on Map
          </a>
        </motion.div>
      </div>
    </section>
  );
}
