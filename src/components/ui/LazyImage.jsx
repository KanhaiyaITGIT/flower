import { useState, useEffect, useRef } from "react";

export default function LazyImage({ src, alt, className = "", rootMargin = "200px", onError }) {
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);
  const [inView, setInView] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );
    if (imgRef.current) observer.observe(imgRef.current);
    return () => observer.disconnect();
  }, [rootMargin]);

  const fallbackSrc = "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=500&q=80";

  const handleError = (e) => {
    if (errored) return;
    setErrored(true);
    if (onError) onError(e);
    e.target.src = fallbackSrc;
  };

  return (
    <div ref={imgRef} className="w-full h-full relative overflow-hidden">
      {!loaded && !errored && (
        <div
          className="absolute inset-0 bg-gradient-to-r from-rose-50 via-pink-100 to-rose-50 animate-pulse"
          aria-hidden="true"
        />
      )}
      {(inView || errored) && (
        <img
          src={errored ? fallbackSrc : src}
          alt={alt}
          className={`${className} ${loaded || errored ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}
          onLoad={() => setLoaded(true)}
          onError={handleError}
          loading="lazy"
          decoding="async"
        />
      )}
    </div>
  );
}
