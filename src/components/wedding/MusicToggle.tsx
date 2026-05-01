import { motion } from "framer-motion";
import { Music, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import weddingMusic from "../../assets/good_b_music-romantic-episode-139730.mp3";

export function MusicToggle({ active }: { active: boolean }) {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!active) return;
    const a = new Audio(weddingMusic);
    a.loop = true;
    a.volume = 0.35;
    audioRef.current = a;

    const tryPlay = () => {
      a.play()
        .then(() => setPlaying(true))
        .catch(() => setPlaying(false));
    };
    tryPlay();

    // Fallback: start on first user interaction if autoplay was blocked
    const onInteract = () => {
      if (a.paused) tryPlay();
      window.removeEventListener("click", onInteract);
      window.removeEventListener("touchstart", onInteract);
      window.removeEventListener("scroll", onInteract);
    };
    window.addEventListener("click", onInteract, { once: true });
    window.addEventListener("touchstart", onInteract, { once: true });
    window.addEventListener("scroll", onInteract, { once: true });

    return () => {
      a.pause();
      audioRef.current = null;
      window.removeEventListener("click", onInteract);
      window.removeEventListener("touchstart", onInteract);
      window.removeEventListener("scroll", onInteract);
    };
  }, [active]);

  const toggle = () => {
    const a = audioRef.current;
    if (!a) return;
    if (a.paused) {
      a.play().then(() => setPlaying(true)).catch(() => {});
    } else {
      a.pause();
      setPlaying(false);
    }
  };

  if (!active) return null;

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5 }}
      onClick={toggle}
      className="fixed bottom-6 right-6 z-40 h-12 w-12 rounded-full glass shadow-soft flex items-center justify-center text-deep-rose hover:scale-110 transition-transform"
      aria-label="Toggle music"
    >
      <motion.div
        animate={playing ? { rotate: 360 } : { rotate: 0 }}
        transition={{ duration: 4, repeat: playing ? Infinity : 0, ease: "linear" }}
      >
        {playing ? <Music size={20} /> : <VolumeX size={20} />}
      </motion.div>
    </motion.button>
  );
}
