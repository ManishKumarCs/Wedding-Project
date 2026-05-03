import { motion } from "framer-motion";

const families = [
  {
    title: "Bride's Parents",
    sub: "Akanksha's Family",
    parents: ["Smt. Rajni Thakur", "Sh. Ravi Thakur"],
  },
  {
    title: "Groom's Parents",
    sub: "Kunal's Family",
    parents: ["Smt. Renu", "Late Sh. Rakesh Kumar"],
  },
];

export function Family() {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-rose-gold tracking-[0.4em] uppercase text-sm"
        >
          With Blessings From
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-script text-5xl md:text-7xl text-deep-rose mt-3 mb-12"
        >
          Our Beloved Families
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {families.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              whileHover={{ y: -8 }}
              className="glass rounded-3xl p-10 shadow-soft relative overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-rose-gold rounded-full blur-3xl opacity-30" />
              <p className="text-rose-gold tracking-[0.3em] text-xs uppercase">{f.title}</p>
              <h3 className="font-script text-3xl text-deep-rose mt-2">{f.sub}</h3>
              <div className="my-6 flex justify-center">
                <span className="h-px w-24 bg-rose-gold/40" />
              </div>
              <div className="space-y-2">
                {f.parents.map((p) => (
                  <p key={p} className="font-display text-xl md:text-2xl text-foreground/80">
                    {p}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 glass rounded-3xl p-10 shadow-soft relative overflow-hidden max-w-2xl mx-auto"
        >
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-rose-gold rounded-full blur-3xl opacity-30" />
          <p className="text-rose-gold tracking-[0.3em] text-xs uppercase">
            With Best Compliments From
          </p>
          
          <p className="font-display text-xl md:text-2xl text-foreground/80">
            All Relatives
          </p>
          <div className="my-6 flex justify-center">
            <span className="h-px w-24 bg-rose-gold/40" />
          </div>
          <h3 className="font-script text-4xl text-deep-rose mt-2">R.S.V.P.</h3>
          <p className="font-script text-2xl text-rose-gold mt-4">
            All Verma Family
          </p>
          <div className="mt-4 flex flex-col sm:flex-row gap-2 justify-center items-center text-foreground/70 tracking-wider">
            <a href="tel:+918437975672" className="hover:text-deep-rose transition-colors">
              (M) 8437975672
            </a>
            <span className="hidden sm:inline text-rose-gold/60">·</span>
            <a href="tel:+918872641981" className="hover:text-deep-rose transition-colors">
              8872641981
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
