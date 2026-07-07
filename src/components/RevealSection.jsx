import React from "react";
import useScrollReveal from "../hooks/useScrollReveal";

const RevealSection = React.forwardRef(({ children, className = "", as: Tag = "section", stagger = false, threshold, rootMargin, ...rest }, forwardedRef) => {
  const [ref, revealed] = useScrollReveal({ threshold, rootMargin });

  const combinedRef = (el) => {
    ref.current = el;
    if (forwardedRef) {
      if (typeof forwardedRef === "function") forwardedRef(el);
      else forwardedRef.current = el;
    }
  };

  return (
    <Tag
      ref={combinedRef}
      className={`${className} ${revealed ? "sr-revealed" : "sr-hidden"}${stagger ? " sr-stagger" : ""}`}
      {...rest}
    >
      {children}
    </Tag>
  );
});

RevealSection.displayName = "RevealSection";

export default RevealSection;
