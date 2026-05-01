import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const TARGET = new Date("2026-05-09T08:00:00").getTime();

export function Countdown() {
  const [time, setTime] = useState({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    const tick = () => {
      const diff = Math.max(0, TARGET - Date.now());
      setTime({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff / 3600000) % 24),
        m: Math.floor((diff / 60000) % 60),
        s: Math.floor((diff / 1000) % 60),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const items = [
    { label: "Days", val: time.d },
    { label: "Hours", val: time.h },
    { label: "Minutes", val: time.m },
    { label: "Seconds", val: time.s },
  ];

  return (
    <section className="relative py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-rose-gold tracking-[0.4em] uppercase text-sm"
        >
          Counting Every Moment
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-script text-5xl md:text-7xl text-deep-rose mt-3 mb-12"
        >
          Until We Say "I Do"
        </motion.h2>

        <div className="grid grid-cols-4 gap-3 md:gap-6">
          {items.map((it, i) => (
            <motion.div
              key={it.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-4 md:p-8 shadow-soft"
            >
              <motion.div
                key={it.val}
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="font-display text-4xl md:text-6xl text-gradient-rose font-semibold"
              >
                {String(it.val).padStart(2, "0")}
              </motion.div>
              <div className="mt-2 text-xs md:text-sm tracking-[0.2em] uppercase text-foreground/60">
                {it.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
