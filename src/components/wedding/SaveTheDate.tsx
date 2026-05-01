import { motion } from "framer-motion";

export function SaveTheDate() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-gold/5 to-pink-100/5" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Save the Date Title */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <h2 className="font-display text-4xl md:text-6xl text-deep-rose font-semibold">
              Save the Date
            </h2>
          </motion.div>

          {/* Date Display */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-12"
          >
            <div className="glass rounded-3xl p-8 md:p-12 shadow-soft inline-block">
              <div className="font-script text-5xl md:text-7xl text-rose-gold mb-2">
                9
              </div>
              <div className="font-display text-2xl md:text-3xl text-deep-rose font-semibold uppercase tracking-wider">
                MAY 2026
              </div>
            </div>
          </motion.div>

          {/* Loving Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-2xl mx-auto"
          >
            <div className="space-y-6">
              <p className="font-script text-2xl md:text-3xl text-foreground/90 leading-relaxed">
                Two hearts, one love, a lifetime of happiness begins...
              </p>
              <p className="text-lg md:text-xl text-foreground/70 leading-relaxed">
                After countless moments of laughter, dreams shared, and love grown, 
                we are ready to begin our forever together. Join us as we promise to 
                love, cherish, and stand by each other for all the days of our lives.
              </p>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-8"
              >
                <div className="glass rounded-2xl p-6 md:p-8 shadow-soft">
                  <p className="font-script text-3xl md:text-4xl text-rose-gold font-semibold">
                    We are Married now & Happy!
                  </p>
                  <p className="mt-4 text-foreground/60">
                    Our greatest adventure is just beginning
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Decorative elements */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-16 flex justify-center space-x-8"
          >
            <div className="w-2 h-2 rounded-full bg-rose-gold animate-pulse" />
            <div className="w-2 h-2 rounded-full bg-rose-gold animate-pulse delay-100" />
            <div className="w-2 h-2 rounded-full bg-rose-gold animate-pulse delay-200" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
