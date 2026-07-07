import { useRef, useState, useCallback } from "react";

export default function MagneticButton({ children, className = "", as: Tag = "button", ...props }) {
  const ref = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  const onMouseMove = useCallback((e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const strength = 0.25;
    setOffset({ x: x * strength, y: y * strength });
  }, []);

  const onMouseLeave = useCallback(() => {
    setOffset({ x: 0, y: 0 });
    setHovering(false);
  }, []);

  const onMouseEnter = useCallback(() => {
    setHovering(true);
  }, []);

  return (
    <Tag
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      onMouseEnter={onMouseEnter}
      className={className}
      style={{
        transform: hovering ? `translate(${offset.x}px, ${offset.y}px)` : "none",
        transition: hovering ? "none" : "transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
        willChange: "transform",
      }}
      {...props}
    >
      {children}
    </Tag>
  );
}
