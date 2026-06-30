import React, { useState, useEffect, useRef } from "react";

import image1 from "../assets/s1.png";
import image2 from "../assets/s2.png";
import image3 from "../assets/s3.png";
import image4 from "../assets/s4.png";
import image5 from "../assets/s5.png";
import image6 from "../assets/s6.png";
import image7 from "../assets/s7.png";
import image8 from "../assets/s8.png";
import image9 from "../assets/s9.png";
import image10 from "../assets/s10.png";
import image11 from "../assets/s11.png";
import image12 from "../assets/s12.png";
import image21 from "../assets/s21.png"

import {
  MessageCircle,
  Phone,
  Mail,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Eye,
  Palette,
  CheckCircle,
  Sparkles,
  MapPin,
  Star,
  Send,
  PlayCircle,
} from "lucide-react";

// ─── Data ─────────────────────────────────────────

const decoreThemes = [
  { label: "Wedding", emoji: "💍", color: "#e8667a" },
  { label: "Pre-Wedding", emoji: "🌸", color: "#c9a96e" },
  { label: "Baby Shower", emoji: "👶", color: "#93c5fd" },
  { label: "Haldi & Mehendi", emoji: "🌼", color: "#f59e0b" },
  { label: "Birthday", emoji: "🎂", color: "#a78bfa" },
  { label: "Anniversary", emoji: "🏢", color: "#6b7280" },
  { label: "House Party", emoji: "🏠", color: "#34d399" },
  { label: "Reception", emoji: "✨", color: "#e8667a" },
];

const galleryItems = [
  { image: image1, label: "Wedding Stage", tag: "Wedding", span: "row-span-2" },
  { image: image2, label: "Entrance Decor", tag: "Reception", span: "row-span-1" },
  { image: image3, label: "Table Centre", tag: "Corporate", span: "row-span-1" },
  { image: image21, label: "Haldi Setup", tag: "Haldi", span: "row-span-2" },
  { image: image5, label: "Floral Arch", tag: "Wedding", span: "row-span-1" },
  { image: image6, label: "Baby Shower", tag: "Baby Shower", span: "row-span-1" },
  { image: image7, label: "Mehendi Mandap", tag: "Pre-Wedding", span: "row-span-1" },
  { image: image8, label: "Birthday Backdrop", tag: "Birthday", span: "row-span-1" },
  { image: image9, label: "Reception Hall", tag: "Reception", span: "row-span-2" },
  { image: image10, label: "Poolside Decor", tag: "House Party", span: "row-span-1" },
  { image: image11, label: "Car Decoration", tag: "Wedding", span: "row-span-1" },
  { image: image12, label: "Stage Flowers", tag: "Wedding", span: "row-span-1" },
];

const processSteps = [
  {
    icon: MapPin,
    title: "On-Site Visit",
    desc: "Our expert florist visits your venue to understand the space, lighting, and layout — no guesswork, ever.",
    color: "#e8667a",
    bg: "#fdf2f4",
  },
  {
    icon: Palette,
    title: "Design Concept",
    desc: "We craft a detailed mood board with bloom choices, colour palette, and styling — tailored to your occasion.",
    color: "#c9a96e",
    bg: "#fdf8f0",
  },
  {
    icon: Eye,
    title: "Your Approval",
    desc: "We share a detailed plan and final costing. No surprises — you sign off before a single stem is cut.",
    color: "#a78bfa",
    bg: "#f5f3ff",
  },
  {
    icon: Sparkles,
    title: "We Transform",
    desc: "Our team sets up on the day with freshness, finesse, and flawless execution — you just show up and celebrate.",
    color: "#34d399",
    bg: "#f0fdf9",
  },
];

const faqs = [
  { q: "What occasions do you provide décor services for?", a: "We decorate for weddings, pre-wedding functions (haldi, mehendi, sangeet), receptions, baby showers, birthday parties, corporate events, house parties, and more. If there's a celebration, we're there." },
  { q: "Do you customise décor themes?", a: "Absolutely. Every décor project is designed from scratch based on your vision, venue, and occasion. We don't do copy-paste setups." },
  { q: "Do you conduct a site visit before finalising the décor?", a: "Yes — always. Every project begins with an expert on-site visit. We assess the space, understand the light, and plan the layout before presenting any concept." },
  { q: "What is the process once we enquire?", a: "Once you reach out, we schedule a call, then an on-site visit, then share a design concept and quote within 48 hours. After your approval, we lock the date and begin sourcing." },
  { q: "Can you work within a specific budget?", a: "Yes. Share your budget upfront and we design the best possible experience within it — no compromises on quality, just smart choices on scale." },
  { q: "How far in advance should we book?", a: "For weddings, we recommend 4–8 weeks. For smaller events, 1–2 weeks is usually fine. For peak season (Oct–Feb), earlier is always better." },
];

const stats = [
  { value: 500, suffix: "+", label: "Events Decorated", icon: "🎉" },
  { value: 4.9, suffix: "★", label: "Average Rating", icon: "⭐" },
  { value: 8, suffix: "+", label: "Years Experience", icon: "🌸" },
  { value: 48, suffix: "hr", label: "Design Turnaround", icon: "⚡" },
];

// ─── Animated Counter ──────────────────────────────
const AnimatedCounter = ({ target, suffix, duration = 1800 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const isDecimal = target % 1 !== 0;
          const steps = 60;
          const stepTime = duration / steps;
          let step = 0;
          const timer = setInterval(() => {
            step++;
            const progress = step / steps;
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = isDecimal
              ? parseFloat((eased * target).toFixed(1))
              : Math.floor(eased * target);
            setCount(current);
            if (step >= steps) clearInterval(timer);
          }, stepTime);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
};

// ─── Component ────────────────────────────────────

const DecorPage = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [activeTheme, setActiveTheme] = useState("All");
  const [form, setForm] = useState({ name: "", email: "", phone: "", occasion: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [hoveredGallery, setHoveredGallery] = useState(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.email && form.phone) setSubmitted(true);
  };

  const filteredGallery = activeTheme === "All"
    ? galleryItems
    : galleryItems.filter((g) => g.tag === activeTheme);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&family=DM+Sans:wght@300;400;500;600&display=swap');

        *, *::before, *::after { box-sizing: border-box; }
        * { font-family: 'DM Sans', sans-serif; }
        .font-display { font-family: 'Cormorant Garamond', serif; }

        @keyframes slowZoom {
          from { transform: scale(1); }
          to { transform: scale(1.08); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(32px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(-1deg); }
          50% { transform: translateY(-10px) rotate(1deg); }
        }
        @keyframes scrollBounce {
          0%, 100% { transform: translateX(-50%) translateY(0); opacity: 1; }
          50% { transform: translateX(-50%) translateY(8px); opacity: 0.4; }
        }
        @keyframes dotPulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.5); opacity: 0.7; }
        }

        .hero-img { animation: slowZoom 16s ease-in-out infinite alternate; }
        .fade-up-1 { animation: fadeUp 0.9s 0.1s cubic-bezier(0.16,1,0.3,1) both; }
        .fade-up-2 { animation: fadeUp 0.9s 0.3s cubic-bezier(0.16,1,0.3,1) both; }
        .fade-up-3 { animation: fadeUp 0.9s 0.5s cubic-bezier(0.16,1,0.3,1) both; }
        .fade-up-4 { animation: fadeUp 0.9s 0.7s cubic-bezier(0.16,1,0.3,1) both; }

        .gold-shimmer {
          background: linear-gradient(90deg, #c9a96e, #f0d5a0, #c9a96e, #a07840, #c9a96e);
          background-size: 300% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 4s linear infinite;
        }

        .stat-card { position: relative; overflow: hidden; }
        .stat-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(201,169,110,0.06) 0%, transparent 60%);
          pointer-events: none;
        }
        .stat-card:hover .stat-icon { transform: scale(1.15) rotate(5deg); }
        .stat-icon { transition: transform 0.4s cubic-bezier(0.34,1.56,0.64,1); display: block; }

        .hero-cta-primary {
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, #e8667a, #d4546a);
          transition: all 0.3s ease;
        }
        .hero-cta-primary::before {
          content: '';
          position: absolute;
          top: 0; left: -100%; width: 100%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent);
          transition: left 0.5s ease;
        }
        .hero-cta-primary:hover::before { left: 100%; }
        .hero-cta-primary:hover { transform: translateY(-2px); box-shadow: 0 16px 40px rgba(232,102,122,0.45); }

        .hero-cta-secondary {
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,0.2);
          background: rgba(255,255,255,0.07);
          transition: all 0.3s ease;
        }
        .hero-cta-secondary:hover {
          background: rgba(255,255,255,0.15);
          border-color: rgba(255,255,255,0.35);
          transform: translateY(-2px);
        }

        .scroll-dot {
          animation: scrollBounce 2s ease-in-out infinite;
          position: absolute;
          top: 0;
          left: 50%;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #c9a96e;
          margin-left: -2.5px;
        }

        .tag-pill {
          position: relative;
          overflow: hidden;
          transition: all 0.25s ease;
          cursor: pointer;
          border: none;
        }
        .tag-pill:hover { transform: translateY(-1px); }

        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }

        .gallery-item { transition: transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94); }
        .gallery-item:hover { transform: scale(1.01); }

        /* ── HERO RESPONSIVE ── */
        .hero-headline {
          font-size: clamp(2.4rem, 7vw, 5.2rem);
          line-height: 1.04;
        }

        /* ── STATS GRID RESPONSIVE ── */
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
        }
        @media (max-width: 640px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .stats-grid .stat-card:nth-child(2) { border-right: none !important; }
          .stats-grid .stat-card:nth-child(3) { border-right: 1px solid rgba(255,255,255,0.06) !important; }
          .stats-grid .stat-card:nth-child(1),
          .stats-grid .stat-card:nth-child(2) {
            border-bottom: 1px solid rgba(255,255,255,0.06);
          }
        }

        /* ── ABOUT GRID RESPONSIVE ── */
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: center;
        }
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr;
          }
          .about-image-col {
            height: 300px !important;
          }
          .about-img-1 {
            width: 55% !important;
            height: 60% !important;
          }
          .about-img-2 {
            width: 48% !important;
            height: 52% !important;
          }
        }

        /* ── GALLERY GRID RESPONSIVE ── */
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
          grid-auto-rows: 180px;
        }
        @media (max-width: 900px) {
          .gallery-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        @media (max-width: 600px) {
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr);
            grid-auto-rows: 150px;
          }
          /* Reset row-span-2 on mobile for cleaner layout */
          .gallery-grid .row-span-2 {
            grid-row: span 1;
          }
        }

        /* ── PROCESS STEPS RESPONSIVE ── */
        .process-step {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 1.5rem;
        }
        .process-step.even { flex-direction: row; }
        .process-step.odd  { flex-direction: row-reverse; }
        @media (max-width: 768px) {
          .process-step,
          .process-step.odd {
            flex-direction: column !important;
            align-items: flex-start;
            gap: 1rem;
          }
          .process-text { text-align: left !important; }
          .process-connector { display: none !important; }
          .process-spine { display: none !important; }
        }

        /* ── CONTACT FORM GRID ── */
        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-bottom: 1rem;
        }
        @media (max-width: 600px) {
          .form-grid { grid-template-columns: 1fr; }
        }

        /* ── FINAL CTA STRIP ── */
        .cta-strip {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
        }
        @media (max-width: 640px) {
          .cta-strip {
            flex-direction: column;
            align-items: flex-start;
          }
          .cta-strip-buttons {
            width: 100%;
            display: flex;
            gap: 0.75rem;
          }
          .cta-strip-buttons a {
            flex: 1;
            justify-content: center;
          }
        }

        /* ── HERO BUTTONS RESPONSIVE ── */
        .hero-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }
        @media (max-width: 420px) {
          .hero-buttons a {
            width: 100%;
            justify-content: center;
          }
        }

        /* ── FORM SUBMIT BUTTONS ── */
        .form-submit-row {
          display: flex;
          flex-direction: row;
          gap: 0.75rem;
        }
        @media (max-width: 500px) {
          .form-submit-row {
            flex-direction: column;
          }
        }

        /* ── ABOUT BUTTONS ── */
        .about-buttons {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
        }
        @media (max-width: 400px) {
          .about-buttons a { width: 100%; justify-content: center; }
        }

        /* ── HERO TRUST ROW ── */
        .hero-trust-row {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        /* General section padding */
        .section-pad { padding: 5rem 1.5rem; }
        @media (max-width: 600px) {
          .section-pad { padding: 3.5rem 1rem; }
        }

        .inner { max-width: 1100px; margin: 0 auto; }
        .inner-sm { max-width: 760px; margin: 0 auto; }

        /* Reduce hero stat font on very small screens */
        @media (max-width: 380px) {
          .hero-headline { font-size: 2rem; }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-img, .gold-shimmer, .scroll-dot, .fade-up-1, .fade-up-2, .fade-up-3, .fade-up-4 {
            animation: none !important;
          }
          .hero-img { transform: none !important; }
        }
      `}</style>

      {/* ══════════════════════════════════════════════ */}
      {/* ── HERO ────────────────────────────────────── */}
      {/* ══════════════════════════════════════════════ */}
      <section style={{ position: "relative", overflow: "hidden", height: "100svh", minHeight: "580px" }}>

        {/* Background */}
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <img
            src={image1}
            alt="Luxury floral décor"
            className="hero-img"
            style={{ width: "100%", height: "100%", objectFit: "cover", transformOrigin: "center 40%" }}
          />
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(110deg, rgba(10,6,4,0.88) 0%, rgba(10,6,4,0.65) 45%, rgba(10,6,4,0.25) 100%)"
          }} />
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(0deg, rgba(10,6,4,0.75) 0%, transparent 45%, transparent 70%, rgba(10,6,4,0.3) 100%)"
          }} />
          <div style={{
            position: "absolute", inset: 0, pointerEvents: "none",
            background: "radial-gradient(ellipse at center, transparent 40%, rgba(10,6,4,0.6) 100%)"
          }} />
        </div>

        {/* Gold left accent */}
        <div style={{
          position: "absolute", left: 0, top: 0, bottom: 0, width: "3px",
          background: "linear-gradient(180deg, transparent 0%, #c9a96e 30%, #f0d5a0 60%, #c9a96e 80%, transparent 100%)",
          opacity: 0.7
        }} />

        {/* Decorative petal — hidden on small screens via opacity trick */}
        <div style={{
          position: "absolute", top: "18%", right: "8%", opacity: 0.15, pointerEvents: "none",
          animation: "float 8s ease-in-out infinite"
        }}>
          <svg width="70" height="70" viewBox="0 0 80 80" fill="none">
            <ellipse cx="40" cy="20" rx="12" ry="20" fill="#c9a96e" transform="rotate(0 40 40)" />
            <ellipse cx="40" cy="20" rx="12" ry="20" fill="#c9a96e" transform="rotate(72 40 40)" />
            <ellipse cx="40" cy="20" rx="12" ry="20" fill="#c9a96e" transform="rotate(144 40 40)" />
            <ellipse cx="40" cy="20" rx="12" ry="20" fill="#c9a96e" transform="rotate(216 40 40)" />
            <ellipse cx="40" cy="20" rx="12" ry="20" fill="#c9a96e" transform="rotate(288 40 40)" />
          </svg>
        </div>

        {/* Content */}
        <div style={{ position: "relative", height: "100%", display: "flex", alignItems: "center" }}>
          <div className="inner" style={{ padding: "0 1.5rem", width: "100%" }}>
            <div style={{ maxWidth: "660px" }}>

              {/* Eyebrow */}
              <div className="fade-up-1">
                <div style={{ display: "inline-flex", alignItems: "center", gap: "10px", marginBottom: "2rem" }}>
                  <div style={{
                    width: "6px", height: "6px", borderRadius: "50%", background: "#c9a96e",
                    animation: "dotPulse 2s ease-in-out infinite", flexShrink: 0
                  }} />
                  <span style={{
                    color: "#c9a96e", fontSize: "11px", fontWeight: 700,
                    letterSpacing: "0.2em", textTransform: "uppercase"
                  }}>
                    Floral Décor Studio · Est. 2022
                  </span>
                </div>
              </div>

              {/* Headline */}
              <h1 className="fade-up-2 font-display hero-headline" style={{
                fontWeight: 700, color: "#fff",
                marginBottom: "1.25rem", letterSpacing: "-0.01em"
              }}>
                Spaces that
                <br />
                <em className="gold-shimmer font-display" style={{ fontStyle: "italic", fontWeight: 600 }}>
                  remember you.
                </em>
              </h1>

              {/* Sub */}
              <p className="fade-up-3" style={{
                color: "rgba(255,255,255,0.58)", fontSize: "clamp(0.9rem, 2.5vw, 1.05rem)",
                lineHeight: 1.7, maxWidth: "460px", marginBottom: "2rem", fontWeight: 300
              }}>
                From intimate house parties to dreamy pre-wedding functions — every décor is designed from scratch. Personal, intentional, unforgettable.
              </p>

              {/* CTAs */}
              <div className="fade-up-4 hero-buttons">
                <a
                  href="#contact"
                  className="hero-cta-primary"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: "10px",
                    color: "#fff", borderRadius: "9999px", textDecoration: "none",
                    fontSize: "14px", fontWeight: 600, padding: "13px 28px",
                    letterSpacing: "0.02em"
                  }}
                >
                  <Send size={14} />
                  Request a Free Quote
                </a>
                <a
                  href="https://wa.me/919999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-cta-secondary"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: "10px",
                    color: "#fff", borderRadius: "9999px", textDecoration: "none",
                    fontSize: "14px", fontWeight: 600, padding: "13px 28px",
                    letterSpacing: "0.02em"
                  }}
                >
                  <MessageCircle size={14} />
                  Talk on WhatsApp
                </a>
              </div>

              {/* Trust */}
              <div className="fade-up-4 hero-trust-row" style={{ marginTop: "1.5rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} fill="#c9a96e" style={{ color: "#c9a96e" }} />
                  ))}
                  <span style={{ color: "rgba(255,255,255,0.45)", fontSize: "12px", marginLeft: "4px" }}>4.9 · 200+ reviews</span>
                </div>
                <div style={{ width: "1px", height: "14px", background: "rgba(255,255,255,0.2)", flexShrink: 0 }} />
                <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "12px" }}>Reply within 10 mins</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)",
          display: "flex", flexDirection: "column", alignItems: "center", gap: "8px",
          animation: "fadeIn 1s 1.5s ease both"
        }}>
          <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "9px", fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase" }}>
            Scroll
          </span>
          <div style={{ width: "1px", height: "40px", background: "linear-gradient(to bottom, rgba(201,169,110,0.6), transparent)", position: "relative" }}>
            <div className="scroll-dot" />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════ */}
      {/* ── STATS ────────────────────────────────────── */}
      {/* ══════════════════════════════════════════════ */}
      <section style={{ background: "linear-gradient(135deg, #0f0b08 0%, #1a1108 50%, #0f0b08 100%)", position: "relative", overflow: "hidden" }}>
        <div style={{
          position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
          width: "600px", height: "200px", borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(201,169,110,0.12) 0%, transparent 70%)",
          pointerEvents: "none"
        }} />
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(201,169,110,0.6), rgba(232,102,122,0.4), rgba(201,169,110,0.6), transparent)"
        }} />
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0, height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(201,169,110,0.3), transparent)"
        }} />

        <div className="inner" style={{ padding: "0 1.5rem" }}>
          <div className="stats-grid">
            {stats.map(({ value, suffix, label, icon }, i) => (
              <div
                key={i}
                className="stat-card"
                style={{
                  padding: "clamp(1.5rem, 4vw, 2.25rem) 1.25rem",
                  textAlign: "center",
                  borderRight: i < 3 ? "1px solid rgba(255,255,255,0.06)" : "none",
                }}
              >
                <div className="stat-icon" style={{ fontSize: "20px", marginBottom: "8px", filter: "drop-shadow(0 0 8px rgba(201,169,110,0.4))" }}>
                  {icon}
                </div>
                <div className="font-display" style={{
                  fontSize: "clamp(1.8rem, 5vw, 2.6rem)", fontWeight: 700, lineHeight: 1, marginBottom: "6px",
                  background: "linear-gradient(135deg, #f0d5a0 0%, #c9a96e 40%, #a07840 100%)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                }}>
                  <AnimatedCounter target={value} suffix={suffix} />
                </div>
                <div style={{ color: "rgba(255,255,255,0.42)", fontSize: "10px", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase" }}>
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════ */}
      {/* ── ABOUT ────────────────────────────────────── */}
      {/* ══════════════════════════════════════════════ */}
      <section className="section-pad" style={{ background: "#faf7f2" }}>
        <div className="inner">
          <div className="about-grid">
            <div>
              <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#e8667a", marginBottom: "0.75rem" }}>
                Our Approach
              </p>
              <h2 className="font-display" style={{
                fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 700,
                color: "#111", lineHeight: 1.12, marginBottom: "1.25rem"
              }}>
                Every celebration
                <br />
                <em className="font-display" style={{ color: "#c9a96e", fontStyle: "italic" }}>deserves to bloom.</em>
              </h2>
              <p style={{ color: "#6b7280", fontSize: "15px", lineHeight: 1.75, marginBottom: "1rem" }}>
                At Shivam Florist, we turn spaces into experiences. Every project begins with an expert on-site visit — we understand your vision, assess the space, and let your flower preferences, colour palette, and occasion guide the design.
              </p>
              <p style={{ color: "#6b7280", fontSize: "15px", lineHeight: 1.75, marginBottom: "2rem" }}>
                Once the concept is refined, we share a detailed design plan and final costing for your approval. No surprises — just beautifully planned décor, executed with freshness and finesse.
              </p>
              <div className="about-buttons">
                <a
                  href="#contact"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: "8px",
                    background: "#e8667a", color: "#fff",
                    borderRadius: "9999px", padding: "11px 26px",
                    fontSize: "14px", fontWeight: 700, textDecoration: "none",
                    transition: "transform 0.2s ease"
                  }}
                  onMouseEnter={e => e.currentTarget.style.transform = "translateY(-2px)"}
                  onMouseLeave={e => e.currentTarget.style.transform = ""}
                >
                  Write to Us <ArrowRight size={14} />
                </a>
                <a
                  href="https://wa.me/919999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: "8px",
                    border: "2px solid #c9a96e", color: "#c9a96e",
                    borderRadius: "9999px", padding: "11px 26px",
                    fontSize: "14px", fontWeight: 700, textDecoration: "none",
                    transition: "transform 0.2s ease"
                  }}
                  onMouseEnter={e => e.currentTarget.style.transform = "translateY(-2px)"}
                  onMouseLeave={e => e.currentTarget.style.transform = ""}
                >
                  <Phone size={14} />
                  Talk to an Expert
                </a>
              </div>
            </div>

            <div className="about-image-col" style={{ position: "relative", height: "400px" }}>
              <img
                src={image5}
                alt="Floral arch decor"
                className="about-img-1"
                style={{
                  position: "absolute", top: 0, right: 0,
                  width: "62%", height: "68%",
                  objectFit: "cover", borderRadius: "16px",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
                  border: "4px solid #fff"
                }}
              />
              <img
                src={image6}
                alt="Baby shower decor"
                className="about-img-2"
                style={{
                  position: "absolute", bottom: 0, left: 0,
                  width: "54%", height: "56%",
                  objectFit: "cover", borderRadius: "16px",
                  boxShadow: "0 12px 40px rgba(0,0,0,0.12)",
                  border: "4px solid #fff"
                }}
              />
              <div style={{
                position: "absolute", top: "50%", left: "50%",
                transform: "translate(-50%, -50%)",
                background: "#c9a96e", color: "#fff",
                fontSize: "11px", fontWeight: 700,
                letterSpacing: "0.15em", textTransform: "uppercase",
                borderRadius: "9999px", padding: "10px 20px",
                boxShadow: "0 6px 20px rgba(201,169,110,0.4)",
                whiteSpace: "nowrap"
              }}>
                Est. 2022
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── OCCASION THEME FILTER ─────────────────────── */}
      <section style={{ padding: "1.1rem 1.5rem", borderTop: "1px solid #f3f4f6", borderBottom: "1px solid #f3f4f6", background: "#fff", overflow: "hidden" }}>
        <div style={{ display: "flex", gap: "10px", overflowX: "auto", paddingBottom: "4px" }} className="scrollbar-hide">
          {["All", ...decoreThemes.map((t) => t.label)].map((theme) => (
            <button
              key={theme}
              onClick={() => setActiveTheme(theme)}
              className="tag-pill"
              style={{
                flexShrink: 0, borderRadius: "9999px", padding: "7px 15px",
                fontSize: "12px", fontWeight: 700, letterSpacing: "0.04em",
                border: "1px solid",
                ...(activeTheme === theme
                  ? { background: "#e8667a", color: "#fff", borderColor: "#e8667a" }
                  : { background: "#fff", color: "#6b7280", borderColor: "#e5e7eb" })
              }}
            >
              {theme !== "All" && decoreThemes.find((t) => t.label === theme)?.emoji + " "}
              {theme}
            </button>
          ))}
        </div>
      </section>

      {/* ── GALLERY ──────────────────────────────────── */}
      <section className="section-pad" style={{ background: "#fff" }}>
        <div className="inner">
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#e8667a", marginBottom: "8px" }}>
              Portfolio
            </p>
            <h2 className="font-display" style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 700, color: "#111" }}>
              Explore Our Work
            </h2>
            <p style={{ color: "#9ca3af", fontSize: "14px", marginTop: "8px" }}>
              Each setup is one-of-a-kind. Hover to see the story.
            </p>
          </div>

          <div className="gallery-grid">
            {filteredGallery.map((item, i) => (
              <div
                key={i}
                className={`gallery-item ${item.span}`}
                style={{ position: "relative", borderRadius: "12px", overflow: "hidden", cursor: "pointer" }}
                onMouseEnter={() => setHoveredGallery(i)}
                onMouseLeave={() => setHoveredGallery(null)}
              >
                <img
                  src={item.image}
                  alt={item.label}
                  style={{
                    width: "100%", height: "100%", objectFit: "cover",
                    transition: "transform 0.7s ease",
                    transform: hoveredGallery === i ? "scale(1.1)" : "scale(1)"
                  }}
                />
                <div style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.2) 40%, transparent 100%)",
                  opacity: hoveredGallery === i ? 1 : 0,
                  transition: "opacity 0.4s ease"
                }} />
                <div style={{
                  position: "absolute", top: "10px", left: "10px",
                  background: "rgba(201,169,110,0.92)", backdropFilter: "blur(4px)",
                  color: "#fff", fontSize: "9px", fontWeight: 700,
                  letterSpacing: "0.12em", textTransform: "uppercase",
                  borderRadius: "9999px", padding: "4px 10px"
                }}>
                  {item.tag}
                </div>
                <div style={{
                  position: "absolute", bottom: 0, left: 0, right: 0,
                  padding: "12px 14px",
                  opacity: hoveredGallery === i ? 1 : 0,
                  transform: hoveredGallery === i ? "translateY(0)" : "translateY(10px)",
                  transition: "all 0.35s ease"
                }}>
                  <p className="font-display" style={{ color: "#fff", fontWeight: 700, fontSize: "14px", margin: 0 }}>{item.label}</p>
                  <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "11px", marginTop: "2px", display: "flex", alignItems: "center", gap: "4px" }}>
                    <Eye size={10} /> View details
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            {/* <button style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              border: "2px solid #e8667a", color: "#e8667a",
              borderRadius: "9999px", padding: "11px 28px",
              fontSize: "14px", fontWeight: 700, background: "transparent",
              cursor: "pointer", transition: "transform 0.2s ease"
            }}
              onMouseEnter={e => e.currentTarget.style.transform = "translateY(-2px)"}
              onMouseLeave={e => e.currentTarget.style.transform = ""}
            >
              Load More Work <ArrowRight size={14} />
            </button> */}
          </div>
        </div>
      </section>

      {/* ── PROCESS ──────────────────────────────────── */}
      <section className="section-pad" style={{ background: "#faf7f2" }}>
        <div className="inner-sm">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#e8667a", marginBottom: "8px" }}>
              How It Works
            </p>
            <h2 className="font-display" style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 700, color: "#111" }}>
              From idea to
              <em className="font-display" style={{ color: "#c9a96e", fontStyle: "italic" }}> execution</em>
            </h2>
            <p style={{ color: "#9ca3af", fontSize: "14px", marginTop: "10px", maxWidth: "340px", margin: "10px auto 0" }}>
              A structured process so every detail is intentional — and nothing is left to chance.
            </p>
          </div>

          <div style={{ position: "relative" }}>
            {/* Vertical spine — desktop only */}
            <div className="process-spine" style={{
              position: "absolute", left: "50%", top: "32px", bottom: "32px",
              width: "1px",
              background: "linear-gradient(to bottom, #e8667a, #c9a96e, #34d399)",
              opacity: 0.3, transform: "translateX(-50%)", pointerEvents: "none"
            }} />

            <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
              {processSteps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <div key={i} className={`process-step ${i % 2 === 0 ? "even" : "odd"}`}>
                    <div className="process-text" style={{ flex: 1, textAlign: i % 2 === 0 ? "right" : "left" }}>
                      <p style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: step.color, marginBottom: "4px" }}>
                        Step {i + 1}
                      </p>
                      <h3 className="font-display" style={{ fontSize: "1.25rem", fontWeight: 700, color: "#111", marginBottom: "6px" }}>
                        {step.title}
                      </h3>
                      <p style={{ color: "#6b7280", fontSize: "14px", lineHeight: 1.7, maxWidth: "260px", margin: i % 2 === 0 ? "0 0 0 auto" : "0 auto 0 0" }}>
                        {step.desc}
                      </p>
                    </div>

                    <div className="process-connector" style={{ flexShrink: 0 }}>
                      <div style={{
                        width: "60px", height: "60px", borderRadius: "50%",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        background: step.bg, border: "4px solid #fff",
                        boxShadow: "0 4px 20px rgba(0,0,0,0.1)", position: "relative", zIndex: 10
                      }}>
                        <Icon size={22} style={{ color: step.color }} />
                      </div>
                    </div>

                    {/* Mobile layout: icon + text inline */}
                    <div style={{ display: "none" }} className="process-mobile-icon" />

                    <div style={{ flex: 1 }} className="process-connector" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────────────── */}
      <section id="contact" className="section-pad" style={{ background: "#1a1a1a", position: "relative", overflow: "hidden" }}>
        <div style={{
          position: "absolute", top: "-8rem", right: "-8rem",
          width: "24rem", height: "24rem", borderRadius: "50%",
          background: "#c9a96e", opacity: 0.08, filter: "blur(60px)", pointerEvents: "none"
        }} />
        <div style={{
          position: "absolute", bottom: "-6rem", left: "-6rem",
          width: "16rem", height: "16rem", borderRadius: "50%",
          background: "#e8667a", opacity: 0.08, filter: "blur(50px)", pointerEvents: "none"
        }} />

        <div className="inner-sm" style={{ position: "relative" }}>
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#c9a96e", marginBottom: "0.75rem" }}>
              Get in Touch
            </p>
            <h2 className="font-display" style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 700, color: "#fff", lineHeight: 1.1, marginBottom: "0.75rem" }}>
              Let's plan your
              <br />
              <em className="font-display" style={{ color: "#c9a96e", fontStyle: "italic" }}>perfect décor</em>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "14px", lineHeight: 1.7, maxWidth: "340px", margin: "0 auto" }}>
              Fill in your details and our floral expert will get back to you within 10 minutes.
            </p>
          </div>

          {submitted ? (
            <div style={{
              borderRadius: "16px", border: "1px solid rgba(201,169,110,0.25)",
              background: "rgba(201,169,110,0.08)", padding: "3rem", textAlign: "center"
            }}>
              <CheckCircle size={48} style={{ color: "#c9a96e", margin: "0 auto 1rem" }} />
              <h3 className="font-display" style={{ fontSize: "1.5rem", fontWeight: 700, color: "#fff", marginBottom: "0.5rem" }}>
                We'll be in touch!
              </h3>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "14px" }}>
                Our floral expert will call you within 10 minutes.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              style={{
                borderRadius: "16px", padding: "clamp(1.5rem, 5vw, 2.5rem)",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)"
              }}
            >
              <div className="form-grid">
                {[
                  { key: "name", label: "Your Name", type: "text", required: true },
                  { key: "email", label: "Email Address", type: "email", required: true },
                  { key: "phone", label: "Phone Number", type: "tel", required: true },
                  { key: "occasion", label: "Occasion Type", type: "text", required: false },
                ].map(({ key, label, type, required }) => (
                  <div key={key}>
                    <input
                      type={type}
                      required={required}
                      placeholder={label + (required ? " *" : "")}
                      value={form[key]}
                      onChange={(e) => setForm((p) => ({ ...p, [key]: e.target.value }))}
                      style={{
                        width: "100%", padding: "12px 18px",
                        borderRadius: "10px", fontSize: "14px", outline: "none",
                        background: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(255,255,255,0.12)",
                        color: "#fff", transition: "border-color 0.2s"
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "#c9a96e")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.12)")}
                    />
                  </div>
                ))}
              </div>
              <textarea
                rows={4}
                placeholder="Tell us about your vision — theme, venue size, date, and any special requests..."
                value={form.message}
                onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                style={{
                  width: "100%", padding: "12px 18px",
                  borderRadius: "10px", fontSize: "14px", outline: "none",
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  color: "#fff", resize: "none", marginBottom: "1.25rem",
                  transition: "border-color 0.2s", display: "block"
                }}
                onFocus={(e) => (e.target.style.borderColor = "#c9a96e")}
                onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.12)")}
              />
              <div className="form-submit-row">
                <button
                  type="submit"
                  style={{
                    flex: 1, display: "flex", alignItems: "center", justifyContent: "center",
                    gap: "8px", background: "#e8667a", color: "#fff",
                    border: "none", borderRadius: "10px", padding: "14px",
                    fontSize: "14px", fontWeight: 700, cursor: "pointer",
                    transition: "transform 0.2s ease, opacity 0.2s ease"
                  }}
                  onMouseEnter={e => e.currentTarget.style.transform = "translateY(-2px)"}
                  onMouseLeave={e => e.currentTarget.style.transform = ""}
                >
                  <Send size={15} />
                  Send Request
                </button>
                <a
                  href="https://wa.me/919540849659"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    flex: 1, display: "flex", alignItems: "center", justifyContent: "center",
                    gap: "8px", border: "1px solid #25d366", color: "#25d366",
                    borderRadius: "10px", padding: "14px",
                    fontSize: "14px", fontWeight: 700, textDecoration: "none",
                    transition: "transform 0.2s ease"
                  }}
                  onMouseEnter={e => e.currentTarget.style.transform = "translateY(-2px)"}
                  onMouseLeave={e => e.currentTarget.style.transform = ""}
                >
                  <MessageCircle size={15} />
                  WhatsApp Us
                </a>
              </div>
              <p style={{ color: "rgba(255,255,255,0.25)", fontSize: "12px", textAlign: "center", marginTop: "1rem" }}>
                We respond within 10 minutes · Available 9 AM – 9 PM daily
              </p>
            </form>
          )}
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────── */}
      <section className="section-pad" style={{ background: "#faf7f2" }}>
        <div className="inner-sm">
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#e8667a", marginBottom: "8px" }}>
              Questions & Answers
            </p>
            <h2 className="font-display" style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 700, color: "#111" }}>
              FAQs
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {faqs.map((faq, i) => (
              <div
                key={i}
                style={{
                  background: "#fff", borderRadius: "14px",
                  border: `1px solid ${openFaq === i ? "rgba(232,102,122,0.25)" : "#f3f4f6"}`,
                  overflow: "hidden", transition: "border-color 0.2s"
                }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{
                    width: "100%", textAlign: "left", padding: "1.1rem 1.5rem",
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    gap: "1rem", background: "none", border: "none", cursor: "pointer"
                  }}
                >
                  <span style={{ fontWeight: 600, color: "#111", fontSize: "14px", lineHeight: 1.4 }}>{faq.q}</span>
                  <span style={{ color: "#e8667a", flexShrink: 0 }}>
                    {openFaq === i ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </span>
                </button>
                {openFaq === i && (
                  <div style={{ padding: "0 1.5rem 1.25rem" }}>
                    <div style={{ width: "32px", height: "2px", background: "#e8667a", marginBottom: "10px" }} />
                    <p style={{ color: "#6b7280", fontSize: "14px", lineHeight: 1.75 }}>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA STRIP ──────────────────────────── */}
      <section style={{ padding: "3.5rem 1.5rem", background: "#fff", borderTop: "1px solid #f3f4f6" }}>
        <div className="inner cta-strip">
          <div>
            <h3 className="font-display" style={{ fontSize: "clamp(1.4rem, 4vw, 2rem)", fontWeight: 700, color: "#111", marginBottom: "4px" }}>
              Ready to transform your space?
            </h3>
            <p style={{ color: "#9ca3af", fontSize: "14px" }}>
              Speak to a floral expert today — no commitment, just ideas.
            </p>
          </div>
          <div className="cta-strip-buttons" style={{ display: "flex", gap: "12px", flexShrink: 0 }}>
            <a
              href="tel:+919999999999"
              style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                border: "2px solid #1a1a1a", color: "#1a1a1a",
                borderRadius: "9999px", padding: "11px 22px",
                fontSize: "14px", fontWeight: 700, textDecoration: "none",
                transition: "transform 0.2s ease"
              }}
              onMouseEnter={e => e.currentTarget.style.transform = "translateY(-2px)"}
              onMouseLeave={e => e.currentTarget.style.transform = ""}
            >
              <Phone size={14} />
              Call Us
            </a>
            <a
              href="#contact"
              style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                background: "#e8667a", color: "#fff",
                borderRadius: "9999px", padding: "11px 22px",
                fontSize: "14px", fontWeight: 700, textDecoration: "none",
                boxShadow: "0 6px 20px rgba(232,102,122,0.35)",
                transition: "transform 0.2s ease"
              }}
              onMouseEnter={e => e.currentTarget.style.transform = "translateY(-2px)"}
              onMouseLeave={e => e.currentTarget.style.transform = ""}
            >
              Get a Quote <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* WhatsApp FAB */}
      <a
        href="https://wa.me/919999999999"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        style={{
          position: "fixed", bottom: "1.5rem", right: "1.5rem", zIndex: 50,
          width: "52px", height: "52px", borderRadius: "50%",
          background: "#25d366", display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: "0 8px 24px rgba(37,211,102,0.4)",
          transition: "transform 0.2s ease"
        }}
        onMouseEnter={e => e.currentTarget.style.transform = "scale(1.1)"}
        onMouseLeave={e => e.currentTarget.style.transform = ""}
      >
        <MessageCircle size={24} color="white" fill="white" />
      </a>
    </>
  );
};

export default DecorPage;