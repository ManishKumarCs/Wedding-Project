import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Heart, Check } from "lucide-react";

export function RSVP() {
  const [submitted, setSubmitted] = useState(false);
  const [attending, setAttending] = useState<"yes" | "no">("yes");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="relative py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-rose-gold tracking-[0.4em] uppercase text-sm"
        >
          Will You Join Us?
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-script text-5xl md:text-7xl text-deep-rose mt-3 mb-10"
        >
          RSVP
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-8 md:p-10 shadow-petal"
        >
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form
                key="form"
                exit={{ opacity: 0, y: -20 }}
                onSubmit={handleSubmit}
                className="space-y-5 text-left"
              >
                <div>
                  <label className="block text-sm tracking-[0.2em] uppercase text-deep-rose mb-2">
                    Your Name
                  </label>
                  <input
                    required
                    type="text"
                    className="w-full px-5 py-3 rounded-xl bg-white/60 border border-rose-gold/30 focus:border-rose-gold focus:outline-none focus:ring-2 focus:ring-rose-gold/30 transition font-display text-lg"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm tracking-[0.2em] uppercase text-deep-rose mb-2">
                    Will you attend?
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {(["yes", "no"] as const).map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setAttending(opt)}
                        className={`py-3 rounded-xl font-display tracking-[0.2em] uppercase text-sm transition-all ${
                          attending === opt
                            ? "bg-gradient-rose-gold text-primary-foreground shadow-soft scale-[1.02]"
                            : "bg-white/50 text-foreground/60 border border-rose-gold/20"
                        }`}
                      >
                        {opt === "yes" ? "Joyfully Accept" : "Regretfully Decline"}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm tracking-[0.2em] uppercase text-deep-rose mb-2">
                    A Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-5 py-3 rounded-xl bg-white/60 border border-rose-gold/30 focus:border-rose-gold focus:outline-none focus:ring-2 focus:ring-rose-gold/30 transition font-display"
                    placeholder="Send your wishes for the couple..."
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-rose-gold text-primary-foreground font-display tracking-[0.3em] uppercase shadow-soft relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <Heart size={18} /> Send With Love
                  </span>
                </motion.button>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-10"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1, rotate: [0, 360] }}
                  transition={{ duration: 0.8 }}
                  className="mx-auto w-20 h-20 rounded-full bg-gradient-rose-gold flex items-center justify-center shadow-glow"
                >
                  <Check className="text-primary-foreground" size={40} />
                </motion.div>
                <h3 className="font-script text-4xl text-deep-rose mt-6">Thank you!</h3>
                <p className="mt-3 text-foreground/70 font-display text-lg">
                  Your response means the world to us. We can't wait to celebrate with you.
                </p>
                {[...Array(8)].map((_, i) => (
                  <motion.span
                    key={i}
                    className="absolute text-2xl"
                    initial={{ x: "50%", y: "50%", opacity: 1 }}
                    animate={{
                      x: `${50 + (Math.random() - 0.5) * 200}%`,
                      y: `${50 + (Math.random() - 0.5) * 200}%`,
                      opacity: 0,
                    }}
                    transition={{ duration: 2, delay: i * 0.1 }}
                  >
                    💗
                  </motion.span>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
