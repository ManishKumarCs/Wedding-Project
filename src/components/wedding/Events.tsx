import { motion } from "framer-motion";
import haldiImage from "../../assets/Gemini_Generated_Image_ivgf3yivgf3yivgf (1).png";
import mehendiImage from "../../assets/Gemini_Generated_Image_gzdniegzdniegzdn.png";
import jaagoImage from "../../assets/Gemini_Generated_Image_16b5wx16b5wx16b5-CFQ8f_Ja.png";
import djPartyImage from "../../assets/Gemini_Generated_Image_lefg5ylefg5ylefg.png";
import baratReceptionImage from "../../assets/Gemini_Generated_Image_fz8zyxfz8zyxfz8z.png";
import doliVidaiImage from "../../assets/Gemini_Generated_Image_dagqy4dagqy4dagq.png";

const days = [
  {
    date: "Friday, 8th May 2026",
    events: [
      { name: "Haldi (Samuhat)", time: "8:00 AM", image: haldiImage },
      { name: "Mehendi", time: "11:00 AM", image: mehendiImage },
      { name: "Jaago", time: "5:00 PM", image: jaagoImage },
      { name: "DJ Party", time: "7:00 PM", image: djPartyImage },
    ],
  },
  {
    date: "Saturday, 9th May 2026",
    events: [
      { name: "Barat Reception", time: "7:00 PM", image: baratReceptionImage },
    ],
  },
  {
    date: "Sunday, 10th May 2026",
    events: [{ name: "Doli Vidai", time: "8:00 PM", image: doliVidaiImage },],
  },
];

export function Events() {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-rose-gold tracking-[0.4em] uppercase text-sm"
          >
            Wedding Festivities
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-script text-5xl md:text-7xl text-deep-rose mt-3"
          >
            Our Celebrations
          </motion.h2>
        </div>

        <div className="relative">
          {/* Center vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-rose-gold/50 to-transparent md:-translate-x-px" />

          <div className="space-y-8">
            {(() => {
              let globalEventIndex = 0;
              return days.map((day, dayIndex) => (
                <div key={day.date}>
                  {/* Day Header */}
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-8"
                  >
                    <h3 className="font-display text-3xl md:text-4xl text-deep-rose font-semibold">
                      {day.date}
                    </h3>
                  </motion.div>

                  {/* Individual Event Cards */}
                  <div className="space-y-12">
                    {day.events.map((event, eventIndex) => {
                      const isLeft = globalEventIndex % 2 === 0;
                    globalEventIndex++;
                      return (
                      <motion.div
                        key={`${day.date}-${event.name}`}
                        initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, delay: globalEventIndex * 0.1 }}
                        className={`relative pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-12 ${
                          isLeft ? "" : "md:[&>div:first-child]:order-2"
                        }`}
                      >
                        {/* Timeline Dot */}
                        <div className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2 z-10">
                          <div className="relative">
                            <div className="absolute inset-0 rounded-full bg-rose-gold blur-md animate-pulse" />
                            <div className="relative h-5 w-5 rounded-full bg-gradient-rose-gold ring-4 ring-background" />
                          </div>
                        </div>

                        {/* Event Card */}
                        <div className={isLeft ? "md:text-right md:pr-8" : "md:pl-8"}>
                        <motion.div
                          whileHover={{ y: -5, scale: 1.02 }}
                          className="glass rounded-3xl p-6 md:p-8 shadow-soft"
                        >
                          {/* Event Image */}
                          {event.image ? (
                            <>
                              <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="rounded-2xl overflow-hidden shadow-lg"
                              >
                                <img
                                  src={event.image}
                                  alt={event.name}
                                  className="w-full h-auto object-cover"
                                />
                              </motion.div>
                              <div className="mt-4 text-center">
                                <span className="font-script text-2xl md:text-3xl text-rose-gold">{event.name}</span>
                                <span className="text-foreground/50 mx-2">·</span>
                                <span className="text-sm tracking-wider text-foreground/70">{event.time}</span>
                              </div>
                            </>
                          ) : (
                            <div className="text-center py-8">
                              <span className="font-script text-2xl md:text-3xl text-rose-gold">{event.name}</span>
                              <span className="text-foreground/50 mx-2">·</span>
                              <span className="text-sm tracking-wider text-foreground/70">{event.time}</span>
                            </div>
                          )}
                        </motion.div>
                        </div>
                        <div />
                      </motion.div>
                    );
                    })}
                  </div>
                </div>
              ));
            })()}
          </div>
        </div>
      </div>
    </section>
  );
}
