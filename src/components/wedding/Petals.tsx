import { motion } from "framer-motion";
import { useMemo } from "react";

export function Petals({ count = 18 }: { count?: number }) {
  const petals = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 8,
        duration: 10 + Math.random() * 10,
        size: 12 + Math.random() * 18,
        rotate: Math.random() * 360,
        sway: 30 + Math.random() * 60,
      })),
    [count]
  );

  return (
    <div className="pointer-events-none fixed inset-0 z-30 overflow-hidden">
      {petals.map((p) => (
        <motion.div
          key={p.id}
          className="absolute -top-10"
          style={{ left: `${p.left}%` }}
          initial={{ y: -50, x: 0, rotate: p.rotate, opacity: 0 }}
          animate={{
            y: ["0vh", "110vh"],
            x: [0, p.sway, -p.sway, p.sway / 2, 0],
            rotate: [p.rotate, p.rotate + 360],
            opacity: [0, 1, 1, 0.7, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <svg width={p.size} height={p.size} viewBox="0 0 24 24" fill="none">
            <path
              d="M12 2C8 6 6 10 6 14c0 4 3 7 6 7s6-3 6-7c0-4-2-8-6-12z"
              fill="url(#petalGrad)"
              opacity="0.85"
            />
            <defs>
              <linearGradient id="petalGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="oklch(0.95 0.04 15)" />
                <stop offset="100%" stopColor="oklch(0.72 0.12 25)" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      ))}
    </div>
  );
}
