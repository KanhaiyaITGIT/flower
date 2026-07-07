import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Gift, Truck, Clock, Percent, Sparkles } from "lucide-react";

const announcements = [
  { icon: Truck, text: "Free delivery on orders above ₹60", color: "#C9A15A" },
  { icon: Percent, text: "Flat 15% off on first order — Use code FIRST15", color: "#D6537A" },
  { icon: Clock, text: "Same-day delivery in Delhi NCR — Order before 4 PM", color: "#C9A15A" },
  { icon: Gift, text: "Free gift wrapping on all premium bouquets", color: "#D6537A" },
  { icon: Sparkles, text: "New year special — Up to 40% off on wedding decor", color: "#C9A15A" },
];

export default function AnnouncementBar() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % announcements.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="announcement-bar relative overflow-hidden h-10">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center justify-center gap-2 px-4"
        >
          {(() => {
            const a = announcements[current];
            const Icon = a.icon;
            return (
              <>
                <Icon size={12} style={{ color: a.color }} />
                <span style={{ color: a.color }}>{a.text}</span>
              </>
            );
          })()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
