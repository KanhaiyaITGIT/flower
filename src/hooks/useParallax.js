import { useEffect, useRef } from "react";

export default function useParallax(speed = 0.3) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const winH = window.innerHeight;
      const centerY = rect.top + rect.height / 2;
      const scrollProgress = (centerY - winH / 2) / winH;
      const yOffset = scrollProgress * speed * 100;
      el.style.transform = `translateY(${yOffset}px)`;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, [speed]);

  return ref;
}
