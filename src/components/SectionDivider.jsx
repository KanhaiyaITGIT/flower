import { motion } from "framer-motion";

export default function SectionDivider({ variant = "wave", flip = false }) {
  if (variant === "wave") {
    return (
      <div className={`relative h-16 md:h-24 -mb-px overflow-hidden ${flip ? "-scale-x-100" : ""}`}>
        <svg
          className="absolute bottom-0 w-full h-full"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M0 50 C360 0, 720 100, 1080 50 C1260 25, 1350 40, 1440 50 L1440 100 L0 100 Z"
            fill="currentColor"
            className="text-white/40"
            initial={{ d: "M0 50 C360 0, 720 100, 1080 50 C1260 25, 1350 40, 1440 50 L1440 100 L0 100 Z" }}
            animate={{
              d: [
                "M0 50 C360 0, 720 100, 1080 50 C1260 25, 1350 40, 1440 50 L1440 100 L0 100 Z",
                "M0 40 C360 100, 720 0, 1080 60 C1260 35, 1350 30, 1440 40 L1440 100 L0 100 Z",
                "M0 50 C360 0, 720 100, 1080 50 C1260 25, 1350 40, 1440 50 L1440 100 L0 100 Z",
              ],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            opacity={0.3}
          />
          <motion.path
            d="M0 60 C360 30, 720 80, 1080 40 C1260 20, 1350 30, 1440 60 L1440 100 L0 100 Z"
            fill="currentColor"
            className="text-[#C9A15A]"
            initial={{ d: "M0 60 C360 30, 720 80, 1080 40 C1260 20, 1350 30, 1440 60 L1440 100 L0 100 Z" }}
            animate={{
              d: [
                "M0 60 C360 30, 720 80, 1080 40 C1260 20, 1350 30, 1440 60 L1440 100 L0 100 Z",
                "M0 40 C360 70, 720 30, 1080 60 C1260 40, 1350 50, 1440 40 L1440 100 L0 100 Z",
                "M0 60 C360 30, 720 80, 1080 40 C1260 20, 1350 30, 1440 60 L1440 100 L0 100 Z",
              ],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            opacity={0.15}
          />
        </svg>
      </div>
    );
  }

  if (variant === "curve") {
    return (
      <div className={`relative h-12 md:h-16 -mb-px overflow-hidden ${flip ? "-scale-x-100" : ""}`}>
        <svg
          className="absolute bottom-0 w-full h-full"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          fill="none"
        >
          <motion.path
            d="M0 0 C360 80, 720 0, 1080 80 C1260 40, 1350 20, 1440 0 L1440 80 L0 80 Z"
            fill="currentColor"
            className="text-white/30"
            animate={{
              d: [
                "M0 0 C360 80, 720 0, 1080 80 C1260 40, 1350 20, 1440 0 L1440 80 L0 80 Z",
                "M0 10 C360 60, 720 20, 1080 60 C1260 30, 1350 30, 1440 10 L1440 80 L0 80 Z",
                "M0 0 C360 80, 720 0, 1080 80 C1260 40, 1350 20, 1440 0 L1440 80 L0 80 Z",
              ],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
      </div>
    );
  }

  return null;
}
