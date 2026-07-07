import { useState, useCallback } from "react";

export default function RippleButton({ children, className = "", as: Tag = "button", onClick: externalOnClick, ...props }) {
  const [ripples, setRipples] = useState([]);

  const onClick = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();
    setRipples((prev) => [...prev, { x, y, id }]);
    setTimeout(() => setRipples((prev) => prev.filter((r) => r.id !== id)), 600);
    externalOnClick?.(e);
  }, [externalOnClick]);

  return (
    <Tag
      className={`relative overflow-hidden ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
      {ripples.map((r) => (
        <span
          key={r.id}
          style={{
            position: "absolute",
            left: r.x,
            top: r.y,
            width: 0,
            height: 0,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.3)",
            transform: "translate(-50%, -50%)",
            animation: "ripple-effect 0.6s ease-out forwards",
            pointerEvents: "none",
          }}
        />
      ))}
    </Tag>
  );
}
