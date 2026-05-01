import { motion } from "framer-motion";
import coupleImg from "@/assets/couple.jpg";
import floralCorner from "@/assets/floral-corner.png";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-24">
      {/* Floral corners */}
      <img src={floralCorner} alt="" className="pointer-events-none absolute -top-10 -left-10 w-64 md:w-96 opacity-90" />
      <img src={floralCorner} alt="" className="pointer-events-none absolute -bottom-10 -right-10 w-64 md:w-96 opacity-90 rotate-180" />

      <div className="relative z-10 max-w-4xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-rose-gold tracking-[0.5em] text-xs md:text-sm uppercase"
        >
          Together with their families
        </motion.p>

        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="my-8 relative inline-block"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-rose-gold blur-3xl opacity-40 animate-pulse" />
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <div className="relative mx-auto h-72 w-72 md:h-96 md:w-96 rounded-full overflow-hidden ring-8 ring-white/70 shadow-petal">
              <img src={coupleImg} alt="Akanksha and Kunal" className="h-full w-full object-cover" width={1024} height={1024} />
            </div>
          </motion.div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.9 }}
          className="font-script text-6xl md:text-9xl text-deep-rose leading-none"
        >
          Akanksha
        </motion.h1>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="my-2 flex items-center justify-center gap-4"
        >
          <span className="h-px w-16 md:w-32 bg-gradient-to-r from-transparent to-rose-gold" />
          <span className="text-3xl md:text-4xl animate-heartbeat">❤</span>
          <span className="h-px w-16 md:w-32 bg-gradient-to-l from-transparent to-rose-gold" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.1 }}
          className="font-script text-6xl md:text-9xl text-deep-rose leading-none"
        >
          Kunal
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.8 }}
          className="mt-10 font-display text-xl md:text-2xl italic text-foreground/70"
        >
          are tying the knot
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
          className="mt-8 inline-flex flex-col items-center gap-2 px-8 py-4 rounded-2xl glass shadow-soft"
        >
          <span className="font-script text-3xl text-deep-rose">Save the Date</span>
          <span className="tracking-[0.3em] text-sm text-rose-gold">9 MAY 2026</span>
        </motion.div>

        {/* Sparkles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-rose-gold pointer-events-none"
            style={{
              left: `${15 + i * 13}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: 2 + i * 0.3,
              repeat: Infinity,
              delay: i * 0.4,
            }}
          >
            ✦
          </motion.div>
        ))}
      </div>
    </section>
  );
}
