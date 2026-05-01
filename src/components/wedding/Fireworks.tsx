import { motion } from "framer-motion";
import { useMemo } from "react";

export function Fireworks() {
  const bursts = useMemo(
    () =>
      Array.from({ length: 6 }).map((_, i) => ({
        id: i,
        x: 10 + Math.random() * 80,
        y: 10 + Math.random() * 60,
        delay: i * 0.6,
        color: ["oklch(0.78 0.12 25)", "oklch(0.85 0.1 50)", "oklch(0.7 0.15 15)"][i % 3],
      })),
    []
  );

  return (
    <section className="relative py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        {bursts.map((b) => (
          <div key={b.id} className="absolute" style={{ left: `${b.x}%`, top: `${b.y}%` }}>
            {[...Array(14)].map((_, i) => {
              const angle = (i / 14) * Math.PI * 2;
              return (
                <motion.div
                  key={i}
                  className="absolute h-1.5 w-1.5 rounded-full"
                  style={{ background: b.color, boxShadow: `0 0 10px ${b.color}` }}
                  animate={{
                    x: [0, Math.cos(angle) * 80],
                    y: [0, Math.sin(angle) * 80],
                    opacity: [1, 0],
                    scale: [1, 0.3],
                  }}
                  transition={{
                    duration: 1.4,
                    delay: b.delay,
                    repeat: Infinity,
                    repeatDelay: 3,
                  }}
                />
              );
            })}
          </div>
        ))}
      </div>

      <div className="relative max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="font-script text-6xl md:text-8xl text-deep-rose"
        >
          See You There!
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-6 font-display text-xl md:text-2xl italic text-foreground/70"
        >
          "And they lived happily ever after..."
        </motion.p>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "8rem" }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 1 }}
          className="h-px bg-gradient-to-r from-transparent via-rose-gold to-transparent mx-auto mt-10"
        />
        <p className="mt-6 text-rose-gold tracking-[0.4em] text-xs uppercase">
          With Love · Akanksha &amp; Kunal
        </p>
      </div>
    </section>
  );
}
