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
  { label: "Corporate", emoji: "🏢", color: "#6b7280" },
  { label: "House Party", emoji: "🏠", color: "#34d399" },
  { label: "Reception", emoji: "✨", color: "#e8667a" },
];

const galleryItems = [
  { image: image1, label: "Wedding Stage", tag: "Wedding", span: "row-span-2" },
  { image: image2, label: "Entrance Decor", tag: "Reception", span: "row-span-1" },
  { image: image3, label: "Table Centre", tag: "Corporate", span: "row-span-1" },
  { image: image4, label: "Haldi Setup", tag: "Haldi", span: "row-span-2" },
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
    desc: "Share a detailed plan and final costing. No surprises — you sign off before a single stem is cut.",
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

  const parallaxY = scrollY * 0.3;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&family=DM+Sans:wght@300;400;500;600&display=swap');

        * { font-family: 'DM Sans', sans-serif; }
        .font-display { font-family: 'Cormorant Garamond', serif; }

        @keyframes slowZoom {
          from { transform: scale(1) translateY(0px); }
          to { transform: scale(1.08) translateY(-12px); }
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
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(201,169,110,0.3), 0 0 60px rgba(201,169,110,0.1); }
          50% { box-shadow: 0 0 40px rgba(201,169,110,0.5), 0 0 100px rgba(201,169,110,0.2); }
        }
        @keyframes borderRotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes countUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes lineExpand {
          from { width: 0; }
          to { width: 100%; }
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
        .fade-in { animation: fadeIn 1.2s ease both; }

        .gold-shimmer {
          background: linear-gradient(90deg, #c9a96e, #f0d5a0, #c9a96e, #a07840, #c9a96e);
          background-size: 300% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 4s linear infinite;
        }

        .stat-card {
          position: relative;
          overflow: hidden;
        }
        .stat-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(201,169,110,0.06) 0%, transparent 60%);
          pointer-events: none;
        }
        .stat-card:hover .stat-icon { transform: scale(1.15) rotate(5deg); }
        .stat-icon { transition: transform 0.4s cubic-bezier(0.34,1.56,0.64,1); display: block; }

        .floating-badge { animation: float 6s ease-in-out infinite; }

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
          border: 1px solid rgba(255,255,255,0.2);
          background: rgba(255,255,255,0.07);
          transition: all 0.3s ease;
        }
        .hero-cta-secondary:hover {
          background: rgba(255,255,255,0.15);
          border-color: rgba(255,255,255,0.35);
          transform: translateY(-2px);
        }

        .scroll-indicator {
          animation: fadeIn 1s 1.5s ease both;
        }
        .scroll-line {
          animation: none;
        }
        @keyframes scrollBounce {
          0%, 100% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(8px); opacity: 0.4; }
        }
        .scroll-dot { animation: scrollBounce 2s ease-in-out infinite; }

        .tag-pill {
          position: relative;
          overflow: hidden;
          transition: all 0.25s ease;
        }
        .tag-pill::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.1), transparent);
          pointer-events: none;
        }
        .tag-pill:hover { transform: translateY(-1px); }

        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }

        .gallery-item { transition: transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94); }
        .gallery-item:hover { transform: scale(1.01); }

        @media (max-width: 768px) {
          .hero-headline { font-size: 3rem !important; line-height: 1.05 !important; }
        }
      `}</style>

      {/* ══════════════════════════════════════════════ */}
      {/* ── CINEMATIC HERO ──────────────────────────── */}
      {/* ══════════════════════════════════════════════ */}
      <section className="relative overflow-hidden" style={{ height: "100svh", minHeight: "640px" }}>

        {/* ── Background Image with Parallax ── */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ willChange: "transform" }}
        >
          <img
            src={image1}
            alt="Luxury floral décor"
            className="hero-img w-full h-full object-cover"
            style={{ transformOrigin: "center 40%" }}
          />

          {/* Layered cinematic overlays */}
          <div className="absolute inset-0" style={{
            background: "linear-gradient(110deg, rgba(10,6,4,0.88) 0%, rgba(10,6,4,0.65) 45%, rgba(10,6,4,0.25) 100%)"
          }} />
          <div className="absolute inset-0" style={{
            background: "linear-gradient(0deg, rgba(10,6,4,0.75) 0%, transparent 45%, transparent 70%, rgba(10,6,4,0.3) 100%)"
          }} />

          {/* Warm vignette edges */}
          <div className="absolute inset-0 pointer-events-none" style={{
            background: "radial-gradient(ellipse at center, transparent 40%, rgba(10,6,4,0.6) 100%)"
          }} />
        </div>

        {/* ── Gold accent bar — left edge ── */}
        <div className="absolute left-0 top-0 bottom-0 w-[3px]" style={{
          background: "linear-gradient(180deg, transparent 0%, #c9a96e 30%, #f0d5a0 60%, #c9a96e 80%, transparent 100%)",
          opacity: 0.7
        }} />

        {/* ── Decorative floating petals (CSS shapes) ── */}
        <div className="absolute top-[18%] right-[8%] opacity-20 pointer-events-none" style={{ animation: "float 8s ease-in-out infinite" }}>
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
            <ellipse cx="40" cy="20" rx="12" ry="20" fill="#c9a96e" transform="rotate(0 40 40)" />
            <ellipse cx="40" cy="20" rx="12" ry="20" fill="#c9a96e" transform="rotate(72 40 40)" />
            <ellipse cx="40" cy="20" rx="12" ry="20" fill="#c9a96e" transform="rotate(144 40 40)" />
            <ellipse cx="40" cy="20" rx="12" ry="20" fill="#c9a96e" transform="rotate(216 40 40)" />
            <ellipse cx="40" cy="20" rx="12" ry="20" fill="#c9a96e" transform="rotate(288 40 40)" />
          </svg>
        </div>
        <div className="absolute bottom-[22%] right-[15%] opacity-10 pointer-events-none" style={{ animation: "float 10s 2s ease-in-out infinite" }}>
          <svg width="120" height="120" viewBox="0 0 80 80" fill="none">
            <ellipse cx="40" cy="20" rx="12" ry="20" fill="#e8667a" transform="rotate(0 40 40)" />
            <ellipse cx="40" cy="20" rx="12" ry="20" fill="#e8667a" transform="rotate(60 40 40)" />
            <ellipse cx="40" cy="20" rx="12" ry="20" fill="#e8667a" transform="rotate(120 40 40)" />
            <ellipse cx="40" cy="20" rx="12" ry="20" fill="#e8667a" transform="rotate(180 40 40)" />
            <ellipse cx="40" cy="20" rx="12" ry="20" fill="#e8667a" transform="rotate(240 40 40)" />
            <ellipse cx="40" cy="20" rx="12" ry="20" fill="#e8667a" transform="rotate(300 40 40)" />
          </svg>
        </div>

        {/* ── Hero Content ── */}
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
            <div className="max-w-[660px]">

              {/* Eyebrow tag */}
              <div className="fade-up-1">
                <div className="inline-flex items-center gap-2.5 mb-8">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#c9a96e", animation: "dotPulse 2s ease-in-out infinite" }} />
                  <span style={{
                    color: "#c9a96e",
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase"
                  }}>
                    Floral Décor Studio · Delhi NCR · Est. 2016
                  </span>
                </div>
              </div>

              {/* Main headline */}
              <h1 className="fade-up-2 font-display hero-headline" style={{
                fontSize: "5.2rem",
                fontWeight: 700,
                color: "#fff",
                lineHeight: 1.02,
                marginBottom: "1.5rem",
                letterSpacing: "-0.01em"
              }}>
                Spaces that
                <br />
                <em className="gold-shimmer font-display" style={{ fontStyle: "italic", fontWeight: 600 }}>
                  remember you.
                </em>
              </h1>

              {/* Subheadline */}
              <p className="fade-up-3" style={{
                color: "rgba(255,255,255,0.58)",
                fontSize: "1.05rem",
                lineHeight: 1.7,
                maxWidth: "460px",
                marginBottom: "2.5rem",
                fontWeight: 300
              }}>
                From intimate house parties to dreamy pre-wedding functions — every décor is designed from scratch. Personal, intentional, unforgettable.
              </p>

              {/* CTA Buttons */}
              <div className="fade-up-4 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="hero-cta-primary inline-flex items-center gap-2.5 text-white rounded-full text-sm font-semibold"
                  style={{ padding: "14px 30px", letterSpacing: "0.02em" }}
                >
                  <Send size={14} />
                  Request a Free Quote
                </a>
                <a
                  href="https://wa.me/91XXXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-cta-secondary inline-flex items-center gap-2.5 text-white rounded-full text-sm font-semibold"
                  style={{ padding: "14px 30px", letterSpacing: "0.02em" }}
                >
                  <MessageCircle size={14} />
                  Talk on WhatsApp
                </a>
              </div>

              {/* Trust micro-copy */}
              <div className="fade-up-4" style={{ marginTop: "1.75rem", display: "flex", alignItems: "center", gap: "1.5rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={13} fill="#c9a96e" style={{ color: "#c9a96e" }} />
                  ))}
                  <span style={{ color: "rgba(255,255,255,0.45)", fontSize: "12px", marginLeft: "4px" }}>4.9 · 200+ reviews</span>
                </div>
                <div style={{ width: "1px", height: "14px", background: "rgba(255,255,255,0.2)" }} />
                <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "12px" }}>Reply in 10 mins</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Scroll indicator ── */}
        <div className="scroll-indicator absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "9px", fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase" }}>
            Scroll
          </span>
          <div style={{ width: "1px", height: "40px", background: "linear-gradient(to bottom, rgba(201,169,110,0.6), transparent)", position: "relative" }}>
            <div className="scroll-dot" style={{
              width: "5px", height: "5px", borderRadius: "50%",
              background: "#c9a96e",
              position: "absolute",
              top: 0, left: "50%", transform: "translateX(-50%)"
            }} />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════ */}
      {/* ── STATS STRIP (redesigned) ─────────────────── */}
      {/* ══════════════════════════════════════════════ */}
      <section style={{ background: "linear-gradient(135deg, #0f0b08 0%, #1a1108 50%, #0f0b08 100%)", position: "relative", overflow: "hidden" }}>

        {/* Ambient glow behind stats */}
        <div style={{
          position: "absolute",
          top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px", height: "200px",
          borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(201,169,110,0.12) 0%, transparent 70%)",
          pointerEvents: "none"
        }} />

        {/* Top border accent */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(201,169,110,0.6), rgba(232,102,122,0.4), rgba(201,169,110,0.6), transparent)"
        }} />
        {/* Bottom border accent */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0, height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(201,169,110,0.3), transparent)"
        }} />

        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
          }}>
            {stats.map(({ value, suffix, label, icon }, i) => (
              <div
                key={i}
                className="stat-card"
                style={{
                  padding: "36px 20px",
                  textAlign: "center",
                  borderRight: i < 3 ? "1px solid rgba(255,255,255,0.06)" : "none",
                  position: "relative"
                }}
              >
                {/* Icon */}
                <div className="stat-icon" style={{
                  fontSize: "22px",
                  marginBottom: "10px",
                  display: "block",
                  filter: "drop-shadow(0 0 8px rgba(201,169,110,0.4))"
                }}>
                  {icon}
                </div>

                {/* Number */}
                <div className="font-display" style={{
                  fontSize: "2.6rem",
                  fontWeight: 700,
                  lineHeight: 1,
                  marginBottom: "6px",
                  background: "linear-gradient(135deg, #f0d5a0 0%, #c9a96e 40%, #a07840 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>
                  <AnimatedCounter target={value} suffix={suffix} />
                </div>

                {/* Label */}
                <div style={{
                  color: "rgba(255,255,255,0.42)",
                  fontSize: "11px",
                  fontWeight: 600,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase"
                }}>
                  {label}
                </div>

                {/* Subtle divider line bottom on mobile */}
                {i < 3 && (
                  <div className="md:hidden" style={{
                    position: "absolute",
                    bottom: 0, left: "20%", right: "20%",
                    height: "1px",
                    background: "rgba(255,255,255,0.06)"
                  }} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT / INTRO ──────────────────────────────── */}
      <section className="py-20 px-6 bg-[#faf7f2]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#e8667a" }}>
              Our Approach
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Every celebration
              <br />
              <em className="font-display" style={{ color: "#c9a96e", fontStyle: "italic" }}>deserves to bloom.</em>
            </h2>
            <p className="text-gray-500 text-base leading-relaxed mb-5">
              At Bring My Flowers, we turn spaces into experiences. Every project begins with an expert on-site visit — we understand your vision, assess the space, and let your flower preferences, colour palette, and occasion guide the design.
            </p>
            <p className="text-gray-500 text-base leading-relaxed mb-8">
              Once the concept is refined, we share a detailed design plan and final costing for your approval. No surprises — just beautifully planned décor, executed with freshness and finesse.
            </p>
            <div className="flex gap-3 flex-wrap">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-white rounded-full px-7 py-3 text-sm font-bold transition-all duration-200 hover:-translate-y-0.5"
                style={{ background: "#e8667a" }}
              >
                Write to Us <ArrowRight size={14} />
              </a>
              <a
                href="https://wa.me/91XXXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-bold border-2 transition-all duration-200 hover:-translate-y-0.5"
                style={{ borderColor: "#c9a96e", color: "#c9a96e" }}
              >
                <Phone size={14} />
                Talk to an Expert
              </a>
            </div>
          </div>

          <div className="relative h-[400px]">
            <img
              src={image5}
              alt="Decor showcase"
              className="absolute top-0 right-0 w-64 h-72 object-cover rounded-2xl shadow-2xl border-4 border-white"
            />
            <img
              src={image6}
              alt="Decor showcase 2"
              className="absolute bottom-0 left-0 w-56 h-60 object-cover rounded-2xl shadow-xl border-4 border-white"
            />
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-xs font-bold tracking-widest uppercase rounded-full px-5 py-2.5 shadow-lg"
              style={{ background: "#c9a96e" }}
            >
              Est. 2016
            </div>
          </div>
        </div>
      </section>

      {/* ── OCCASION THEMES TICKER ─────────────────────── */}
      <section className="py-5 px-6 border-y border-gray-100 bg-white overflow-hidden">
        <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-1">
          {["All", ...decoreThemes.map((t) => t.label)].map((theme) => (
            <button
              key={theme}
              onClick={() => setActiveTheme(theme)}
              className="tag-pill shrink-0 rounded-full px-4 py-2 text-xs font-bold tracking-wide border"
              style={
                activeTheme === theme
                  ? { background: "#e8667a", color: "#fff", borderColor: "#e8667a" }
                  : { background: "#fff", color: "#6b7280", borderColor: "#e5e7eb" }
              }
            >
              {theme !== "All" && decoreThemes.find((t) => t.label === theme)?.emoji + " "}
              {theme}
            </button>
          ))}
        </div>
      </section>

      {/* ── MASONRY GALLERY ────────────────────────────── */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "#e8667a" }}>
              Portfolio
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900">
              Explore Our Work
            </h2>
            <p className="text-gray-400 text-sm mt-2 max-w-xs mx-auto">
              Each setup is one-of-a-kind. Hover to see the story.
            </p>
          </div>

          <div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3"
            style={{ gridAutoRows: "180px" }}
          >
            {filteredGallery.map((item, i) => (
              <div
                key={i}
                className={`gallery-item relative rounded-xl overflow-hidden cursor-pointer group ${item.span}`}
                onMouseEnter={() => setHoveredGallery(i)}
                onMouseLeave={() => setHoveredGallery(null)}
              >
                <img
                  src={item.image}
                  alt={item.label}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                <div
                  className="absolute top-3 left-3 text-white text-[10px] font-bold tracking-widest uppercase rounded-full px-2.5 py-1"
                  style={{ background: "rgba(201,169,110,0.9)", backdropFilter: "blur(4px)" }}
                >
                  {item.tag}
                </div>
                <div
                  className={`absolute bottom-0 left-0 right-0 px-4 py-4 transition-all duration-400 ${hoveredGallery === i ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
                >
                  <p className="text-white font-display font-bold text-sm">{item.label}</p>
                  <p className="text-white/60 text-xs mt-0.5 flex items-center gap-1">
                    <Eye size={10} /> View details
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button
              className="inline-flex items-center gap-2 rounded-full px-8 py-3 text-sm font-bold border-2 transition-all duration-200 hover:-translate-y-0.5"
              style={{ borderColor: "#e8667a", color: "#e8667a" }}
            >
              Load More Work <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </section>

      {/* ── OUR PROCESS ────────────────────────────────── */}
      <section className="py-20 px-6 bg-[#faf7f2]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "#e8667a" }}>
              How It Works
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900">
              From idea to
              <em className="font-display" style={{ color: "#c9a96e", fontStyle: "italic" }}> execution</em>
            </h2>
            <p className="text-gray-400 text-sm mt-3 max-w-sm mx-auto">
              A structured process so every detail is intentional — and nothing is left to chance.
            </p>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-8 bottom-8 w-px bg-gradient-to-b from-[#e8667a] via-[#c9a96e] to-[#34d399] opacity-30 -translate-x-1/2 pointer-events-none" />
            <div className="flex flex-col gap-8">
              {processSteps.map((step, i) => {
                const Icon = step.icon;
                const isEven = i % 2 === 0;
                return (
                  <div
                    key={i}
                    className={`flex flex-col md:flex-row items-center gap-6 ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}
                  >
                    <div className={`flex-1 ${isEven ? "md:text-right" : "md:text-left"}`}>
                      <p className="text-xs font-bold tracking-widest uppercase mb-1" style={{ color: step.color }}>
                        Step {i + 1}
                      </p>
                      <h3 className="font-display text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto md:mx-0 md:ml-auto">{step.desc}</p>
                    </div>
                    <div
                      className="relative z-10 w-16 h-16 rounded-full flex items-center justify-center shadow-lg shrink-0 border-4 border-white"
                      style={{ background: step.bg }}
                    >
                      <Icon size={24} style={{ color: step.color }} />
                    </div>
                    <div className="flex-1 hidden md:block" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT FORM ───────────────────────────────── */}
      <section id="contact" className="py-20 px-6 bg-[#1a1a1a] relative overflow-hidden">
        <div
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-10 pointer-events-none blur-3xl"
          style={{ background: "#c9a96e" }}
        />
        <div
          className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full opacity-10 pointer-events-none blur-2xl"
          style={{ background: "#e8667a" }}
        />

        <div className="max-w-3xl mx-auto relative">
          <div className="text-center mb-10">
            <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#c9a96e" }}>
              Get in Touch
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-3">
              Let's plan your
              <br />
              <em className="font-display" style={{ color: "#c9a96e", fontStyle: "italic" }}>perfect décor</em>
            </h2>
            <p className="text-white/50 text-sm leading-relaxed max-w-sm mx-auto">
              Fill in your details and our floral expert will get back to you within 10 minutes.
            </p>
          </div>

          {submitted ? (
            <div className="rounded-2xl border p-10 text-center" style={{ borderColor: "#c9a96e40", background: "rgba(201,169,110,0.08)" }}>
              <CheckCircle size={48} className="mx-auto mb-4" style={{ color: "#c9a96e" }} />
              <h3 className="font-display text-2xl font-bold text-white mb-2">We'll be in touch!</h3>
              <p className="text-white/50 text-sm">Our floral expert will call you within 10 minutes.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="rounded-2xl p-8 md:p-10 border" style={{ background: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.08)" }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
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
                      className="w-full px-5 py-3.5 rounded-xl text-sm outline-none transition-all duration-200"
                      style={{
                        background: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(255,255,255,0.12)",
                        color: "#fff",
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
                className="w-full px-5 py-3.5 rounded-xl text-sm outline-none transition-all duration-200 resize-none mb-5"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  color: "#fff",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#c9a96e")}
                onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.12)")}
              />
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-1 text-white font-bold py-3.5 rounded-xl text-sm tracking-wide transition-all duration-200 hover:-translate-y-0.5 flex items-center justify-center gap-2"
                  style={{ background: "#e8667a" }}
                >
                  <Send size={15} />
                  Send Request
                </button>
                <a
                  href="https://wa.me/91XXXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-white font-bold py-3.5 rounded-xl text-sm tracking-wide transition-all duration-200 hover:-translate-y-0.5 flex items-center justify-center gap-2 border"
                  style={{ borderColor: "#25d366", color: "#25d366" }}
                >
                  <MessageCircle size={15} />
                  WhatsApp Us
                </a>
              </div>
              <p className="text-white/25 text-xs text-center mt-4">
                We respond within 10 minutes · Available 9 AM – 9 PM daily
              </p>
            </form>
          )}
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-[#faf7f2]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "#e8667a" }}>
              Questions & Answers
            </p>
            <h2 className="font-display text-4xl font-bold text-gray-900">FAQs</h2>
          </div>
          <div className="flex flex-col gap-2">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border overflow-hidden transition-all duration-200"
                style={{ borderColor: openFaq === i ? "#e8667a40" : "#f3f4f6" }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
                >
                  <span className="font-semibold text-gray-900 text-sm leading-snug">{faq.q}</span>
                  <span className="shrink-0" style={{ color: "#e8667a" }}>
                    {openFaq === i ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5">
                    <div className="w-8 h-px mb-3" style={{ background: "#e8667a" }} />
                    <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA STRIP ────────────────────────────── */}
      <section className="py-14 px-6 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-gray-900 mb-1">
              Ready to transform your space?
            </h3>
            <p className="text-gray-400 text-sm">
              Speak to a floral expert today — no commitment, just ideas.
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <a
              href="tel:+91XXXXXXXXXX"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold border-2 transition-all duration-200 hover:-translate-y-0.5"
              style={{ borderColor: "#1a1a1a", color: "#1a1a1a" }}
            >
              <Phone size={14} />
              Call Us
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-white rounded-full px-6 py-3 text-sm font-bold transition-all duration-200 hover:-translate-y-0.5 shadow-lg"
              style={{ background: "#e8667a", boxShadow: "0 6px 20px rgba(232,102,122,0.35)" }}
            >
              Get a Quote <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* WhatsApp FAB */}
      <a
        href="https://wa.me/91XXXXXXXXXX"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-xl shadow-green-300 hover:scale-110 transition-transform duration-200"
        aria-label="WhatsApp"
      >
        <MessageCircle size={26} color="white" fill="white" />
      </a>
    </>
  );
};

export default DecorPage;