import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import doorsImg from "@/assets/doors.jpg";

export function DoorIntro({ onOpen }: { onOpen: () => void }) {
  const [opening, setOpening] = useState(false);

  const handleOpen = () => {
    if (opening) return;
    setOpening(true);
    setTimeout(onOpen, 2200);
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 overflow-hidden bg-black"
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Single full gate image */}
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.05 }}
          animate={opening ? { scale: 1.6, opacity: 0 } : { scale: 1.05, opacity: 1 }}
          transition={{ duration: 2.2, ease: [0.65, 0, 0.35, 1] }}
        >
          <img
            src={doorsImg}
            alt="Royal wedding gate"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
        </motion.div>

        {/* Curtain reveal — two soft light panels split open */}
        <motion.div
          className="absolute inset-y-0 left-0 w-1/2 z-10 pointer-events-none"
          initial={{ x: 0 }}
          animate={opening ? { x: "-100%" } : { x: 0 }}
          transition={{ duration: 2, ease: [0.83, 0, 0.17, 1], delay: 0.2 }}
          style={{
            background:
              "linear-gradient(to right, rgba(0,0,0,0.55), rgba(0,0,0,0) 100%)",
          }}
        />
        <motion.div
          className="absolute inset-y-0 right-0 w-1/2 z-10 pointer-events-none"
          initial={{ x: 0 }}
          animate={opening ? { x: "100%" } : { x: 0 }}
          transition={{ duration: 2, ease: [0.83, 0, 0.17, 1], delay: 0.2 }}
          style={{
            background:
              "linear-gradient(to left, rgba(0,0,0,0.55), rgba(0,0,0,0) 100%)",
          }}
        />

        {/* Center light burst when opening */}
        <motion.div
          className="absolute inset-0 z-10 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={opening ? { opacity: [0, 0.9, 0] } : { opacity: 0 }}
          transition={{ duration: 2.2, times: [0, 0.6, 1] }}
          style={{
            background:
              "radial-gradient(circle at center, oklch(0.95 0.06 30 / 0.9), transparent 60%)",
          }}
        />

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: opening ? 0 : 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="absolute left-1/2 top-[8%] z-20 -translate-x-1/2 text-center px-4"
        >
          <p className="text-sm tracking-[0.4em] text-white/90 uppercase drop-shadow-lg">
            The Wedding of
          </p>
          <h1 className="font-script text-5xl md:text-7xl text-white mt-3 drop-shadow-[0_4px_20px_rgba(0,0,0,0.85)]">
            Akanksha &amp; Kunal
          </h1>
          <p className="mt-2 text-white/90 tracking-[0.3em] text-xs md:text-sm drop-shadow-lg">
            9 MAY 2026
          </p>
        </motion.div>

        {/* Open button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: opening ? 0 : 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="absolute bottom-[14%] left-1/2 z-20 -translate-x-1/2"
        >
          <motion.button
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.94 }}
            onClick={handleOpen}
            className="group relative px-12 py-4 rounded-full bg-gradient-rose-gold text-primary-foreground font-display text-lg tracking-[0.25em] uppercase shadow-petal overflow-hidden"
          >
            <span className="relative z-10">Open Invitation</span>
            <motion.span
              className="absolute inset-0 bg-white/30"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
            />
            <motion.span
              className="absolute -inset-2 rounded-full border border-white/40"
              animate={{ scale: [1, 1.15, 1], opacity: [0.6, 0, 0.6] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut" }}
            />
          </motion.button>
          <p className="mt-4 text-center text-white/85 font-script text-2xl drop-shadow-lg">
            ~ tap to begin ~
          </p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
