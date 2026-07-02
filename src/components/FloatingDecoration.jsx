import React from "react";

const Petal5 = ({ color, size }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" aria-hidden="true">
    {[0, 72, 144, 216, 288].map((a) => (
      <ellipse key={a} cx="50" cy="25" rx="11" ry="22" fill={color} transform={`rotate(${a} 50 50)`} />
    ))}
    <circle cx="50" cy="50" r="7" fill={color === "#C9A15A" ? "#f0d5a0" : "#ffffff"} opacity="0.9" />
  </svg>
);

const Petal6 = ({ color, size }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" aria-hidden="true">
    {[0, 60, 120, 180, 240, 300].map((a) => (
      <ellipse key={a} cx="50" cy="25" rx="10" ry="20" fill={color} transform={`rotate(${a} 50 50)`} />
    ))}
  </svg>
);

const LeafSVG = ({ color, size }) => (
  <svg width={size} height={size} viewBox="0 0 60 80" fill="none" aria-hidden="true">
    <path
      d="M30 2 C30 2, 6 20, 6 42 C6 64, 30 78, 30 78 C30 78, 54 64, 54 42 C54 20, 30 2, 30 2Z"
      fill={color}
      opacity="0.7"
    />
    <path d="M30 2 L30 70" stroke={color === "#C9A15A" ? "#a07840" : "#ffffff"} strokeWidth="2" strokeLinecap="round" opacity="0.5" />
  </svg>
);

const SinglePetal = ({ color, size }) => (
  <svg width={size} height={size * 1.6} viewBox="0 0 40 70" fill="none" aria-hidden="true">
    <path d="M20 2 C20 2, 4 16, 4 35 C4 54, 20 68, 20 68 C20 68, 36 54, 36 35 C36 16, 20 2, 20 2Z" fill={color} opacity="0.8" />
  </svg>
);

const SVGS = { petal5: Petal5, petal6: Petal6, leaf: LeafSVG, petal: SinglePetal };

const defaultColors = { petal5: "#D6537A", petal6: "#C9A15A", leaf: "#14301F", petal: "#D6537A" };

const animClasses = {
  sway1: "fd-sway1",
  sway2: "fd-sway2",
  sway3: "fd-sway3",
  rotate: "fd-rotate",
};

const FloatingDecoration = ({
  type = "petal5",
  side = "left",
  size = 70,
  opacity = 0.18,
  delay = 0,
  duration = 12,
  color,
  top,
  bottom,
  animation = "sway1",
}) => {
  const Svg = SVGS[type] || Petal5;
  const fillColor = color || defaultColors[type] || "#D6537A";

  const isLeft = side === "left" || side === "left-top" || side === "left-bottom";
  const isRight = side === "right" || side === "right-top" || side === "right-bottom";
  const isCenter = side === "left-center" || side === "right-center";

  const posLeft = isLeft ? "0" : undefined;
  const posRight = isRight ? "0" : undefined;
  const posTop = top ?? (side.includes("top") ? "4%" : isCenter ? "50%" : undefined);
  const posBottom = bottom ?? (side.includes("bottom") ? "4%" : undefined);

  return (
    <div
      className={animClasses[animation] || "fd-sway1"}
      style={{
        position: "absolute",
        left: posLeft,
        right: posRight,
        top: posTop,
        bottom: posBottom,
        transform: isCenter ? "translateY(-50%)" : "none",
        width: size,
        height: type === "petal" ? size * 1.6 : size,
        opacity,
        pointerEvents: "none",
        zIndex: 1,
        animationDuration: `${duration}s`,
        animationDelay: `${delay}s`,
        willChange: "transform",
      }}
      aria-hidden="true"
    >
      <Svg color={fillColor} size={type === "petal" ? size * 1.6 : size} />
    </div>
  );
};

export default FloatingDecoration;
