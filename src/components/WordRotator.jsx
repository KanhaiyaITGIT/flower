import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = [
  { text: "Blooms", gradient: "from-[#D6537A] via-[#C9A15A] to-[#e8a03d]" },
  { text: "Flowers", gradient: "from-[#C9A15A] via-[#D6537A] to-[#e8a03d]" },
  { text: "Gifts", gradient: "from-[#e8a03d] via-[#D6537A] to-[#C9A15A]" },
  { text: "Moments", gradient: "from-[#D6537A] via-[#e8a03d] to-[#C9A15A]" },
];

export default function WordRotator({ className = "" }) {
  const [index, setIndex] = useState(0);

  const next = useCallback(() => {
    setIndex((c) => (c + 1) % words.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 2800);
    return () => clearInterval(timer);
  }, [next]);

  const w = words[index];

  return (
    <span className={`relative inline-flex items-center ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ y: 20, opacity: 0, filter: "blur(4px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          exit={{ y: -20, opacity: 0, filter: "blur(4px)" }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className={`block bg-gradient-to-r ${w.gradient} bg-clip-text text-transparent`}
        >
          {w.text}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
