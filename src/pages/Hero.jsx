import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ShoppingBag,
  ArrowRight,
  Truck,
  ShieldCheck,
  Gift,
  Flower2,
  Star,
  Quote,
  Heart,
  Cake,
  PartyPopper,
  Mail,
  Clock,
  Percent,
  Leaf,
  Plus,
  Minus,
  MessageCircle,
  CheckCircle2,
  ChevronLeft,
  Users,
  Award,
  Package,
  Phone,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import LazyImage from "../components/ui/LazyImage";
import FloatingDecoration from "../components/FloatingDecoration";
import BokehLights from "../components/BokehLights";
import RevealSection from "../components/RevealSection";
import WordRotator from "../components/WordRotator";
import SectionDivider from "../components/SectionDivider";
import MagneticButton from "../components/MagneticButton";
import RippleButton from "../components/RippleButton";
import TiltCard from "../components/TiltCard";
import SectionTitle from "../components/SectionTitle";
import useParallax from "../hooks/useParallax";
import { WHATSAPP_LINK, INSTAGRAM_LINK, FACEBOOK_LINK } from "../constants";

import image1 from "../assets/f4.png";
import image42 from "../assets/s42.png";
import image16 from "../assets/s16.png";
import image4 from "../assets/f3.png";
import image5 from "../assets/f24.png";
import image6 from "../assets/f20.png";
import image7 from "../assets/f10.png";
import image8 from "../assets/s8.png";
import image9 from "../assets/s9.png";
import image11 from "../assets/s12.png";
import image13 from "../assets/s14.png";
import image26 from "../assets/s26.png";
import image27 from "../assets/s27.png";
import hero from "../assets/hero.png";
import image28 from "../assets/f1.png";
import imageF2 from "../assets/f2.png";

/* ─── CountUp Component ─── */
function CountUp({ end, suffix = "", duration = 2 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const increment = end / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

/* ─── Auto-Testimonial Carousel ─── */
function TestimonialCarousel({ testimonials }) {
  const [active, setActive] = useState(0);

  const next = useCallback(() => {
    setActive((c) => (c + 1) % testimonials.length);
  }, [testimonials.length]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const t = testimonials[active];

  return (
    <div className="relative min-h-[320px]">
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="bg-app-card backdrop-blur-sm rounded-3xl p-8 border border-app shadow-app flex flex-col gap-6"
        >
          <Quote size={28} className="text-accent/30" />
          <div className="flex gap-0.5">
            {[...Array(t.rating)].map((_, i) => (
              <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
            ))}
          </div>
          <p className="text-app-secondary text-sm leading-relaxed font-light flex-1 italic">
            "{t.review}"
          </p>
          <div className="flex items-center gap-3.5 pt-4 border-t border-app">
            <div className={`w-11 h-11 rounded-full ${t.color} flex items-center justify-center text-white font-bold text-sm shadow-inner`}>
              {t.initials}
            </div>
            <div>
              <h4 className="font-bold text-sm text-app-primary leading-none">{t.name}</h4>
              <p className="text-app-muted text-[10px] uppercase font-bold tracking-wider mt-1">{t.role}</p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`rounded-full transition-all duration-300 ${
              i === active ? "w-8 h-2 bg-accent" : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>

      <button
        onClick={() => setActive((c) => (c - 1 + testimonials.length) % testimonials.length)}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-9 h-9 rounded-full bg-app-card shadow-app border border-app flex items-center justify-center text-app-muted hover:text-app-primary hover:scale-105 transition-all"
      >
        <ChevronLeft size={14} />
      </button>
      <button
        onClick={() => setActive((c) => (c + 1) % testimonials.length)}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-9 h-9 rounded-full bg-app-card shadow-app border border-app flex items-center justify-center text-app-muted hover:text-app-primary hover:scale-105 transition-all"
      >
        <ChevronRight size={14} />
      </button>
    </div>
  );
}

const Home = () => {
  const navigate = useNavigate();
  const categorySliderRef = useRef(null);
  const bestSellerSliderRef = useRef(null);
  const rangeRef = useRef(null);

  const scrollSlider = (ref, direction) => {
    if (!ref.current) return;
    const card = ref.current.querySelector("[data-slide-card]");
    const cardWidth = card ? card.offsetWidth + 20 : 300;
    ref.current.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [activeCategory, setActiveCategory] = useState("All");
  const [timeLeft, setTimeLeft] = useState({
    hours: 5,
    minutes: 42,
    seconds: 18,
  });

  const scrollToRange = (cat) => {
    setActiveCategory(cat);
    setTimeout(() => {
      rangeRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev;
        if (seconds > 0) {
          seconds -= 1;
        } else if (minutes > 0) {
          minutes -= 1;
          seconds = 59;
        } else if (hours > 0) {
          hours -= 1;
          minutes = 59;
          seconds = 59;
        } else {
          hours = 5;
          minutes = 42;
          seconds = 18;
        }
        return { hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSubscribe = () => {
    if (email.includes("@")) {
      setSubscribed(true);
      setEmail("");
    }
  };

  const pad = (n) => String(n).padStart(2, "0");

  const flowerProducts = [
    { id: 1, type: "Roses", name: "Premium Red Roses", subtitle: "Soft Rose Pink", bg: "bg-gradient-to-b from-[#FFF0F2] to-[#FFE4E8]", img: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=500&q=80" },
    { id: 2, type: "Birthday", name: "Vibrant Gerberas", subtitle: "Sunshine Yellow", bg: "bg-gradient-to-b from-[#FFFDF0] to-[#FFF9D6]", img: "https://images.unsplash.com/photo-1606041008023-472dfb5e530b?auto=format&fit=crop&w=500&q=80" },
    { id: 3, type: "Wedding", name: "Elegant White Orchids", subtitle: "Pure White Grace", bg: "bg-gradient-to-b from-[#FBF5FF] to-[#F3E5FF]", img: "https://images.unsplash.com/photo-1535077612907-ec0ae5e64fa8?auto=format&fit=crop&w=500&q=80" },
    { id: 4, type: "Anniversary", name: "Fragrant Lilies", subtitle: "Soft Apricot Tone", bg: "bg-gradient-to-b from-[#FFF9F2] to-[#FFEEDC]", img: "https://images.unsplash.com/photo-1509384324410-9f2e26fddf43?auto=format&fit=crop&w=500&q=80" },
    { id: 5, type: "Gifts", name: "Pink Carnations", subtitle: "Soft Coral Bloom", bg: "bg-gradient-to-b from-[#FFF5F7] to-[#FFE6EC]", img: "https://images.unsplash.com/photo-1599733589046-10c7f0f8a0e2?auto=format&fit=crop&w=500&q=80" },
    { id: 6, type: "All", name: "Golden Sunflowers", subtitle: "Soft Primrose Yellow", bg: "bg-gradient-to-b from-[#FFFFF2] to-[#FFFDE0]", img: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&w=500&q=80" },
    { id: 7, type: "Birthday", name: "Birthday Bloom Box", subtitle: "Celebration Mix", bg: "bg-gradient-to-b from-[#FFF9F2] to-[#FFEEDC]", img: "https://images.unsplash.com/photo-1598387993441-a364f854c3e1?auto=format&fit=crop&w=500&q=80" },
    { id: 8, type: "Anniversary", name: "Red Rose Heart", subtitle: "50 Long Stems", bg: "bg-gradient-to-b from-[#FFF0F2] to-[#FFE4E8]", img: "https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?auto=format&fit=crop&w=500&q=80" },
    { id: 9, type: "Wedding", name: "Bridal Cascade", subtitle: "Ivory & Blush", bg: "bg-gradient-to-b from-[#FBF5FF] to-[#F3E5FF]", img: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=500&q=80" },
    { id: 10, type: "Devotional", name: "Marigold Mala", subtitle: "Sacred Blessings", bg: "bg-gradient-to-b from-[#FFFDF0] to-[#FFF9D6]", img: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=500&q=80" },
    { id: 11, type: "Luxury", name: "Premium Rose Cascade", subtitle: "Luxury Red", bg: "bg-gradient-to-b from-[#FFF0F2] to-[#FFE4E8]", img: "https://images.unsplash.com/photo-1490750967868-88aa4f44baee?auto=format&fit=crop&w=500&q=80" },
    { id: 12, type: "Roses", name: "Pink Paradise", subtitle: "Blush Beauty", bg: "bg-gradient-to-b from-[#FFF5F7] to-[#FFE6EC]", img: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=500&q=80" },
    { id: 13, type: "Devotional", name: "Lotus Pooja Set", subtitle: "Divine Fragrance", bg: "bg-gradient-to-b from-[#FBF5FF] to-[#F3E5FF]", img: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?auto=format&fit=crop&w=500&q=80" },
    { id: 14, type: "Balloon", name: "Celebration Balloon", subtitle: "Festive Joy", bg: "bg-gradient-to-b from-[#FFFDF0] to-[#FFF9D6]", img: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=500&q=80" },
    { id: 15, type: "Luxury", name: "Gold Leaf Orchids", subtitle: "Opulent Elegance", bg: "bg-gradient-to-b from-[#FFF9F2] to-[#FFEEDC]", img: "https://images.unsplash.com/photo-1567696153798-9111f9cd3d1d?auto=format&fit=crop&w=500&q=80" },
    { id: 16, type: "Gifts", name: "Chocolate & Blooms", subtitle: "Sweet Surprise", bg: "bg-gradient-to-b from-[#FFF5F7] to-[#FFE6EC]", img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=500&q=80" },
  ];

  const filteredRange = activeCategory === "All"
    ? flowerProducts
    : flowerProducts.filter(p => p.type === activeCategory);

  const rangeCategories = ["All", "Roses", "Birthday", "Anniversary", "Wedding", "Balloon", "Devotional", "Luxury", "Gifts"];

  const categories = [
    { title: "Bouquets", image: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=600&q=80", products: "120+ Products", category: "Bouquets" },
    { title: "Floral Arrangements", image: "https://images.unsplash.com/photo-1510076857177-7470076d4098?w=600&q=80", products: "80+ Products", category: "All" },
    { title: "Premium Balloons Decor", image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=80", products: "150+ Products", category: "Balloon" },
    { title: "For Love", image: image5, products: "30+ Products", category: "Anniversary" },
    { title: "Occasional Cakes & Gifts", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80", products: "25+ Products", category: "All" },
    { title: "Dried Florals", image: imageF2, products: "40+ Products", category: "All" },
  ];

  const cardIcons = [Flower2, Star, PartyPopper, Heart, Cake, Leaf];

  const bestSellers = [
    {
      id: 1,
      title: "Pink Rhapsody Bouquet",
      image: image5,
      price: "acceptable",
      originalPrice: "₹1,999",
      rating: 4.8,
      badge: "Bestseller",
      category: "Bouquets",
    },
    {
      id: 2,
      title: "Lily Blush Symphony",
      image: image6,
      price: "acceptable",
      originalPrice: "₹2,499",
      rating: 4.9,
      badge: "New",
      category: "Bouquets",
    },
    {
      id: 3,
      title: "Red Velvet Bouquet",
      image: image7,
      price: "acceptable",
      originalPrice: null,
      rating: 4.7,
      badge: null,
      category: "Bouquets",
    },
    {
      id: 4,
      title: "Wildflower Melody",
      image: image8,
      price: "acceptable",
      originalPrice: "₹2,399",
      rating: 4.6,
      badge: "Limited",
      category: "Bouquets",
    },
  ];

  const steps = [
    {
      title: "Browse & Choose",
      desc: "Explore our curated collection of bouquets, arrangements and gifts for every occasion.",
      icon: ShoppingBag,
    },
    {
      title: "We Craft & Pack",
      desc: "Our florists hand-arrange your order with fresh, farm-sourced blooms and secure packaging.",
      icon: Flower2,
    },
    {
      title: "Same-Day Delivery",
      desc: "Sit back and relax while we deliver your order fresh and on time, right to their door.",
      icon: Truck,
    },
  ];

  const whyChooseUs = [
    {
      title: "Fast Delivery",
      desc: "Same day flower delivery available.",
      icon: Truck,
      bg: "bg-[#F4C9D1]/50",
      iconColor: "text-accent",
    },
    {
      title: "Fresh Flowers",
      desc: "Handpicked premium blooms, sourced daily.",
      icon: Flower2,
      bg: "bg-emerald-50/50",
      iconColor: "text-emerald-600",
    },
    {
      title: "Secure Payment",
      desc: "Safe and encrypted checkout.",
      icon: ShieldCheck,
      bg: "bg-blue-50/50",
      iconColor: "text-blue-600",
    },
    {
      title: "Perfect Gifts",
      desc: "Crafted with love and care.",
      icon: Gift,
      bg: "bg-amber-50/50",
      iconColor: "text-amber-600",
    },
  ];

  const testimonials = [
    {
      name: "Rashmi Pathak",
      role: "Verified Buyer",
      review: "Beautiful flowers delivered right on time. The quality and packaging were amazing, exactly like the pictures.",
      rating: 5,
      initials: "RP",
      color: "bg-rose-400",
    },
    {
      name: "Anand Upadhyay",
      role: "Verified Buyer",
      review: "Fresh flowers with a premium presentation. The bouquet stayed fresh for over a week — highly recommended.",
      rating: 5,
      initials: "AU",
      color: "bg-[#c9a96e]",
    },
    {
      name: "Aanchal Kalra",
      role: "Verified Buyer",
      review: "Excellent service from order to doorstep. Ordered for our anniversary and my husband absolutely loved it.",
      rating: 5,
      initials: "AK",
      color: "bg-rose-400",
    },
  ];

  const faqs = [
    { q: "How fast can I get same-day delivery?", a: "Place your order before 4 PM and we'll deliver fresh flowers to your doorstep the same day, across Delhi NCR." },
    { q: "Are the flowers fresh when they arrive?", a: "Every arrangement is hand-crafted on the day of delivery using flowers sourced from local farms that morning." },
    { q: "Can I customize my bouquet or add a gift?", a: "Yes! You can choose your favourite blooms, colours and wrapping, and add chocolates, cakes or candles at checkout." },
    { q: "What happens if I'm not happy with my order?", a: "Reach out within 24 hours of delivery and we'll arrange a replacement or refund — no questions asked." },
  ];

  const galleryImages = [image42, image16, image4, image9, image13, image11];
  const parallaxRef = useParallax(-0.15);
  const dealParallaxRef = useParallax(0.12);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.06 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.96 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <div className="w-full overflow-hidden bg-app">
      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* ─── HERO SECTION ─── */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative w-full overflow-hidden pt-20 lg:pt-14">
        <BokehLights spots={[
          { color: "from-rose-300/25 to-transparent", size: 280, top: "2%", right: "6%", anim: "bk-drift2", delay: 0, duration: 26 },
          { color: "from-amber-200/25 to-transparent", size: 240, top: "35%", left: "2%", anim: "bk-drift1", delay: 2, duration: 30 },
          { color: "from-emerald-200/20 to-transparent", size: 220, bottom: "8%", right: "20%", anim: "bk-float", delay: 4, duration: 28 },
          { color: "from-purple-200/15 to-transparent", size: 180, top: "12%", left: "35%", anim: "bk-drift3", delay: 1, duration: 24 },
        ]} />
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${5 + Math.random() * 90}%`,
                top: `${10 + Math.random() * 80}%`,
                background: ["#D6537A", "#C9A15A", "#F4C9D1", "#14301F"][i % 4],
                animationDelay: `${i * 0.8}s`,
                animationDuration: `${3 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>

        {/* ─── Category Shortcuts ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative w-full pb-2 lg:pb-4"
        >
          <div className="overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex gap-6 md:gap-8 justify-start md:justify-center px-6 md:px-8 max-w-[1440px] mx-auto">
              {[
                { label: "Birthday", image: image1, filter: "Birthday", discount: null },
                { label: "Anniversary", image: image4, filter: "Anniversary", discount: null },
                { label: "Wedding", image: image7, filter: "Wedding", discount: null },
                { label: "Balloons", image: image16, filter: "Balloon", discount: "Up to 30% Off" },
                { label: "Devotional", image: image9, filter: "Devotional", discount: null },
                { label: "Luxury", image: image26, filter: "Luxury", discount: null },
                { label: "Gifts", image: image27, filter: "Gifts", discount: "10% Off" },
                { label: "Roses", image: image6, filter: "Roses", discount: null },
                { label: "Plants", image: image5, filter: "All", discount: null },
                { label: "Cakes", image: image8, filter: "All", discount: "Flat 15%" },
              ].map((cat, i) => (
                <button
                  key={i}
                  onClick={() => scrollToRange(cat.filter)}
                  className="flex flex-col items-center gap-2.5 shrink-0 group text-left"
                >
                  <div className={`relative w-[84px] h-[84px] md:w-24 md:h-24 rounded-full overflow-hidden border-[2.5px] transition-all duration-300 group-hover:scale-105 ${
                    activeCategory === cat.filter ? "border-accent shadow-[0_4px_14px_rgba(214,83,122,0.25)]" : "border-white shadow-[0_4px_14px_rgba(0,0,0,0.08)] group-hover:shadow-[0_8px_24px_rgba(0,0,0,0.15)]"
                  }`}>
                    <LazyImage
                      src={cat.image}
                      alt={cat.label}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {cat.discount && (
                      <div className="absolute -top-1 -right-1 bg-accent text-white text-[8px] md:text-[9px] font-bold px-1.5 py-0.5 rounded-full shadow-md whitespace-nowrap pulse-ring">
                        {cat.discount}
                      </div>
                    )}
                  </div>
                  <span className={`text-xs md:text-sm font-semibold whitespace-nowrap transition-colors ${
                    activeCategory === cat.filter ? "text-accent" : "text-app-secondary group-hover:text-app-primary"
                  }`}>
                    {cat.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ─── Hero Content ─── */}
        <div className="max-w-[1440px] mx-auto px-6 lg:px-8 pb-4 lg:pb-6">
          <div className="relative rounded-[28px] overflow-hidden bg-app-card border border-app shadow-app-hover">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-gold/5 pointer-events-none" />

            {/* Decorative corner accents */}
            <div className="absolute top-0 left-0 w-32 h-32 pointer-events-none">
              <div className="absolute top-0 left-0 w-16 h-px bg-gradient-to-r from-gold/40 to-transparent" />
              <div className="absolute top-0 left-0 h-16 w-px bg-gradient-to-b from-gold/40 to-transparent" />
            </div>
            <div className="absolute bottom-0 right-0 w-32 h-32 pointer-events-none">
              <div className="absolute bottom-0 right-0 w-16 h-px bg-gradient-to-l from-accent/40 to-transparent" />
              <div className="absolute bottom-0 right-0 h-16 w-px bg-gradient-to-t from-accent/40 to-transparent" />
            </div>

            <div className="grid lg:grid-cols-2 min-h-[380px] lg:min-h-[520px]">
              {/* ─── LEFT ─── */}
              <div className="flex flex-col justify-center px-7 lg:px-12 py-10 lg:py-12 order-2 lg:order-1 relative z-10">
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-[0.2em] uppercase text-accent font-inter mb-3"
                >
                  <span className="w-6 h-[1.5px] bg-accent/40 inline-block rounded-full" />
                  Fresh Daily
                </motion.span>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-app-primary leading-[1.08] tracking-tight"
                >
                  Luxury{' '}
                  <span className="text-gradient-flow">
                    <WordRotator />
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-app-secondary text-sm lg:text-base mt-3 max-w-md leading-relaxed"
                >
                  Handpicked fresh every morning. Artisan bouquets, premium arrangements and thoughtful gifts — curated for life's most beautiful moments.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="flex flex-col sm:flex-row gap-3 mt-7 lg:mt-8"
                >
                  <MagneticButton
                    as={Link}
                    to="/category"
                    className="group inline-flex items-center justify-center gap-2 px-7 lg:px-8 py-3.5 lg:py-4 bg-primary text-white font-bold text-xs lg:text-sm tracking-wider uppercase rounded-full shadow-md hover:shadow-[0_8px_30px_rgba(201,161,90,0.45)] hover:scale-[1.04] transition-all duration-300"
                  >
                    <ShoppingBag size={16} className="group-hover:scale-110 transition-transform icon-wiggle" />
                    <span>Shop Collection</span>
                  </MagneticButton>
                  <MagneticButton
                    as={Link}
                    to="/occasions"
                    className="group inline-flex items-center justify-center gap-2 px-7 lg:px-8 py-3.5 lg:py-4 bg-app-card text-app-primary font-bold text-xs lg:text-sm tracking-wider uppercase rounded-full border-2 border-accent/30 hover:bg-accent hover:text-white hover:border-transparent hover:shadow-[0_8px_30px_rgba(214,83,122,0.35)] hover:scale-[1.04] transition-all duration-300"
                  >
                    <Flower2 size={16} className="text-gold group-hover:text-white group-hover:rotate-12 transition-all icon-wiggle" />
                    <span>Explore Occasions</span>
                  </MagneticButton>
                </motion.div>
              </div>

              {/* ─── RIGHT: IMAGE ─── */}
              <div ref={parallaxRef} className="relative order-1 lg:order-2 min-h-[380px] lg:min-h-[520px] overflow-hidden">
                <div className="absolute inset-y-0 left-0 w-16 lg:w-24 bg-gradient-to-r from-app-card to-transparent z-10 pointer-events-none hidden lg:block" />
                <motion.div
                  initial={{ scale: 1.1, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full h-full"
                >
                  <LazyImage
                    src={hero}
                    alt="Luxurious fresh flower bouquet arrangement - Premium floral delivery"
                    className="absolute inset-0 w-full h-full object-contain object-center"
                  />
                </motion.div>
                <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-app-card to-transparent pointer-events-none lg:hidden" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider variant="wave" flip />

      {/* ─── Trust Stats Strip ─── */}
      <section className="relative bg-primary py-8 lg:py-10 overflow-hidden">
        <BokehLights spots={[
          { color: "from-rose-400/15 to-transparent", size: 200, top: "-20%", left: "10%", anim: "bk-drift1", delay: 0, duration: 26 },
          { color: "from-amber-300/12 to-transparent", size: 180, bottom: "-20%", right: "15%", anim: "bk-drift3", delay: 2, duration: 24 },
        ]} />
        <div className="max-w-[1440px] mx-auto px-6 relative grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {[
            { icon: Users, value: "10000+", label: "Happy Customers", num: 10000 },
            { icon: Package, value: "50000+", label: "Orders Delivered", num: 50000 },
            { icon: Award, value: "5+ Years", label: "Trusted Experience", num: 5 },
            { icon: Clock, value: "24/7", label: "Support Available", num: 24 },
          ].map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group flex items-center gap-3 lg:gap-4 justify-center lg:justify-start"
              >
                <div className="w-11 h-11 lg:w-12 lg:h-12 shrink-0 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center group-hover:bg-gold/20 group-hover:scale-110 transition-all duration-300">
                  <Icon size={20} className="text-gold" />
                </div>
                <div>
                  <p className="text-cream font-heading font-bold text-lg lg:text-xl leading-none">
                    {stat.num <= 24 ? stat.value : <CountUp end={stat.num} suffix="+" />}
                  </p>
                  <p className="text-cream/50 text-[10px] lg:text-xs mt-1.5 uppercase tracking-wider font-semibold">{stat.label}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      <SectionDivider variant="wave" />

      {/* ─── Explore Our Exquisite Range ─── */}
      <RevealSection ref={rangeRef} className="relative py-24 bg-app-secondary border-b border-app overflow-hidden">
        <BokehLights spots={[
          { color: "from-rose-200/12 to-transparent", size: 240, top: "-5%", left: "15%", anim: "bk-drift2", delay: 0, duration: 30 },
          { color: "from-amber-100/10 to-transparent", size: 200, bottom: "-6%", right: "10%", anim: "bk-drift1", delay: 2, duration: 26 },
          { color: "from-gold/6 to-transparent", size: 180, top: "50%", left: "5%", anim: "bk-float", delay: 4, duration: 28 },
        ]} />
        <FloatingDecoration type="petal" side="left" top="15%" size={40} opacity={0.1} delay={0} duration={12} animation="sway3" color="#D6537A" />
        <FloatingDecoration type="leaf" side="right" top="auto" bottom="12%" size={44} opacity={0.12} delay={2} duration={11} animation="sway2" color="#14301F" />
        <FloatingDecoration type="petal6" side="right" top="8%" size={48} opacity={0.07} delay={1} duration={14} animation="rotate" color="#C9A15A" />
        <FloatingDecoration type="petal5" side="left" top="55%" size={36} opacity={0.06} delay={3} duration={8} animation="breathe" color="#D6537A" />
        <FloatingDecoration type="lotus" side="right" top="60%" size={44} opacity={0.07} delay={1.5} duration={9} animation="float-up" color="#C9A15A" />
        <FloatingDecoration type="leaf" side="left" top="5%" size={32} opacity={0.08} delay={0.5} duration={10} animation="spin-slow" color="#14301F" />
        <div className="max-w-[1440px] mx-auto px-6 relative">
          <SectionTitle
            centered
            size="md"
            subtitle={activeCategory === "All"
              ? "Handpicked blooms arranged by nature, ready for every moment that matters"
              : `Curated ${activeCategory} collection — fresh, premium & delivered with love`
            }
          >
            Explore Our {activeCategory === "All" ? "Exquisite Range" : `${activeCategory} Collection`}
          </SectionTitle>

          {/* ─── Filter Tabs ─── */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap justify-center gap-2.5 mb-10"
          >
            {rangeCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-primary text-cream shadow-lg shadow-primary/25 scale-105"
                    : "bg-app-card text-app-secondary border border-app hover:border-accent/30 hover:text-accent hover:scale-[1.04]"
                }`}
              >
                {cat === "All" ? "All Blooms" : cat}
              </button>
            ))}
          </motion.div>

          {/* ─── Product Grid ─── */}
          {filteredRange.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-app-muted text-sm">No products found for this category. Try a different filter.</p>
            </div>
          ) : (
            <motion.div
              key={activeCategory}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 max-w-7xl mx-auto"
            >
              {filteredRange.map((item) => (
                <motion.div variants={itemVariants} key={item.id}>
                  <TiltCard tiltDegree={6} scale={1.01} glare={false}>
                    <div className="w-full h-[340px] sm:h-[370px] group rounded-[20px] border border-white/70 shadow-app bg-app-card overflow-hidden transition-all duration-500 hover:shadow-app-hover flex flex-col">
                      <div className={`h-[65%] w-full ${item.bg} flex items-center justify-center p-4 relative overflow-hidden`}>
                        <img
                          src={item.img}
                          alt={item.name}
                          loading="lazy"
                          onError={(e) => {
                            e.target.src = "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=500&q=80";
                          }}
                          className="max-w-full max-h-full object-contain filter drop-shadow-[0_10px_18px_rgba(0,0,0,0.08)] transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_16px_28px_rgba(0,0,0,0.12)]"
                        />
                        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-b from-transparent to-white/50 pointer-events-none" />
                      </div>
                      <div className="flex-1 bg-gradient-to-b from-app-card via-app-card to-app-secondary backdrop-blur-sm flex flex-col items-center justify-center px-4 border-t border-white/80">
                        <span className="bg-app-card text-app-primary text-xs font-bold uppercase tracking-wider py-2 px-5 rounded-full shadow-sm mx-auto block max-w-max border border-app ring-1 ring-transparent hover:ring-gold/30 transition-all duration-300">
                          {item.name}
                        </span>
                        <span className="flex items-center gap-2 mt-2">
                          <span className="text-gold/40 text-[6px]">●</span>
                          <span className="text-[10px] text-gold/80 font-medium tracking-wide text-center block">
                            {item.subtitle}
                          </span>
                          <span className="text-gold/40 text-[6px]">●</span>
                        </span>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          className="mt-2.5 px-5 py-1.5 bg-primary text-cream rounded-full text-[9px] font-bold tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-accent"
                        >
                          Shop Now
                        </motion.button>
                      </div>
                    </div>
                  </TiltCard>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </RevealSection>

      <SectionDivider variant="curve" flip />

      {/* ─── Shop By Category ─── */}
      <RevealSection className="relative pt-16 lg:pt-20 pb-28 bg-app bg-opacity-50 border-b border-gold/10 overflow-hidden">
        <BokehLights spots={[
          { color: "from-rose-300/20 to-transparent", size: 300, top: "-8%", right: "-4%", anim: "bk-drift2", delay: 0, duration: 32 },
          { color: "from-amber-200/18 to-transparent", size: 240, bottom: "-10%", left: "5%", anim: "bk-drift1", delay: 3, duration: 28 },
          { color: "from-gold/10 to-transparent", size: 280, top: "50%", left: "50%", anim: "bk-float", delay: 1, duration: 30 },
          { color: "from-rose-200/15 to-transparent", size: 200, top: "20%", left: "10%", anim: "bk-drift3", delay: 2, duration: 26 },
        ]} />
        <FloatingDecoration type="rose" side="left" top="12%" size={72} opacity={0.1} delay={0} duration={16} animation="bloom" color="#D6537A" />
        <FloatingDecoration type="leaf" side="right" top="20%" size={60} opacity={0.15} delay={1.5} duration={12} animation="sway2" color="#14301F" />
        <FloatingDecoration type="lotus" side="right" top="auto" bottom="12%" size={56} opacity={0.08} delay={2} duration={18} animation="drift-bloom" color="#C9A15A" />
        <FloatingDecoration type="petal5" side="left" top="auto" bottom="8%" size={48} opacity={0.1} delay={2.5} duration={14} animation="sway3" color="#C9A15A" />
        <FloatingDecoration type="petal6" side="left" top="35%" size={40} opacity={0.08} delay={1} duration={15} animation="sway1" color="#D6537A" />
        <FloatingDecoration type="leaf" side="right" top="55%" size={44} opacity={0.12} delay={3} duration={10} animation="sway3" color="#C9A15A" />
        <FloatingDecoration type="petal5" side="left" top="70%" size={40} opacity={0.08} delay={4} duration={7} animation="breathe" color="#D6537A" />
        <FloatingDecoration type="lotus" side="right" top="40%" size={50} opacity={0.06} delay={1} duration={10} animation="spin-slow" color="#C9A15A" />
        <FloatingDecoration type="petal" side="left" top="5%" size={30} opacity={0.09} delay={2} duration={8} animation="float-up" color="#D6537A" />
        <div className="max-w-[1440px] mx-auto px-4 lg:px-6 relative">
          <SectionTitle centered size="md" subtitle="Find the perfect arrangements designed for your special moments">
            Shop By Category
          </SectionTitle>

          <div className="relative px-0.5 mt-10">
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => scrollSlider(categorySliderRef, "left")}
              className="absolute -left-1.5 lg:-left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-app-card/70 backdrop-blur-md border border-white/60 shadow-app flex items-center justify-center text-app-muted hover:bg-app-card/90 hover:text-app-primary hover:shadow-app-hover hover:scale-105 transition-all duration-300"
              aria-label="Scroll left"
            >
              <ChevronLeft size={15} />
            </motion.button>

            <div
              ref={categorySliderRef}
              className="flex gap-4 lg:gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-6 scrollbar-hide [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden pr-2 lg:pr-4"
            >
              {categories.map((item, index) => {
                const IconComponent = cardIcons[index];
                return (
                  <TiltCard key={index} tiltDegree={5} scale={1.01} glare={false}>
                    <motion.div
                      data-slide-card
                      onClick={() => navigate(`/category?cat=${encodeURIComponent(item.category)}`)}
                      className="group rounded-[20px] overflow-hidden bg-app-card shadow-app hover:shadow-app-hover transition-all duration-300 ease-in-out cursor-pointer shrink-0 min-w-[180px] w-[180px] sm:w-[220px] lg:w-[240px]"
                    >
                      <div className="h-[160px] sm:h-[200px] lg:h-[250px] overflow-hidden relative bg-app-secondary">
                        <img
                          src={item.image}
                          alt={item.title}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-app-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out" />
                        <div className="absolute top-4 left-4 z-10">
                          <span className="inline-block px-3 py-1.5 bg-app-card/90 backdrop-blur-sm rounded-full text-[9px] font-bold tracking-widest uppercase text-gold shadow-sm border border-gold/20">
                            Featured
                          </span>
                        </div>
                        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-in-out z-10">
                          <span className="inline-flex items-center gap-1.5 bg-accent text-white text-[10px] font-bold tracking-widest uppercase px-5 py-2.5 rounded-full shadow-lg shadow-accent/25 hover:shadow-accent/40">
                            Shop Now <ArrowRight size={11} />
                          </span>
                        </div>
                        <div className="absolute -bottom-[20px] left-1/2 -translate-x-1/2 z-20">
                          <div className="w-9 h-9 lg:w-10 lg:h-10 rounded-full bg-app-card shadow-app border-[2.5px] border-gold/20 flex items-center justify-center group-hover:border-gold/50 group-hover:shadow-[0_4px_18px_rgba(201,161,90,0.15)] transition-all duration-300 ease-in-out">
                            <IconComponent size={15} className="text-gold group-hover:text-accent transition-colors duration-300" />
                          </div>
                        </div>
                      </div>
                      <div className="pt-7 lg:pt-8 pb-5 lg:pb-6 px-5 lg:px-6 text-center">
                        <h3 className="font-heading font-bold text-base lg:text-lg text-app-primary group-hover:text-accent transition-colors duration-300">
                          {item.title}
                        </h3>
                        <div className="flex items-center justify-center gap-1.5 mt-2">
                          <span className="text-gold/60 text-[10px] tracking-wider">—</span>
                          <span className="text-gold text-[10px]">❀</span>
                          <span className="text-gold/60 text-[10px] tracking-wider">—</span>
                          <span className="text-app-muted text-xs font-medium tracking-wide ml-1">{item.products}</span>
                        </div>
                      </div>
                    </motion.div>
                  </TiltCard>
                );
              })}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => scrollSlider(categorySliderRef, "right")}
              className="absolute -right-1.5 lg:-right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-app-card/70 backdrop-blur-md border border-white/60 shadow-app flex items-center justify-center text-app-muted hover:bg-app-card/90 hover:text-app-primary hover:shadow-app-hover hover:scale-105 transition-all duration-300"
              aria-label="Scroll right"
            >
              <ArrowRight size={15} />
            </motion.button>
          </div>
        </div>
      </RevealSection>

      {/* ─── Best Sellers ─── */}
      <RevealSection className="py-24 bg-app-secondary">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="flex justify-between items-end mb-12 flex-wrap gap-4">
            <div>
              <span className="text-xs font-bold tracking-widest text-accent uppercase font-inter">
                Customer Favorites
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-app-primary mt-2">
                Bestselling Bouquets
              </h2>
            </div>
            <Link
              to="/category"
              className="text-accent hover:text-accent font-bold text-xs tracking-widest uppercase flex items-center gap-1.5 transition-colors duration-300 hover:scale-[1.04]"
            >
              View All <ArrowRight size={14} className="icon-wiggle" />
            </Link>
          </div>

          <div className="relative">
            <motion.button
              whileHover={{ scale: 1.04 }}
              onClick={() => scrollSlider(bestSellerSliderRef, "left")}
              className="absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-2xl bg-app-card border border-app shadow-app flex items-center justify-center text-app-secondary hover:bg-app-card hover:shadow-app-hover hover:scale-[1.04] transition-all duration-300"
              aria-label="Scroll left"
            >
              <ChevronLeft size={18} className="icon-wiggle" />
            </motion.button>

            <div
              ref={bestSellerSliderRef}
              className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 scrollbar-hide"
            >
              {bestSellers.map((item) => (
                <TiltCard key={item.id} tiltDegree={5} scale={1.01} glare={false}>
                  <motion.div
                    data-slide-card
                    className="bg-app-card rounded-3xl overflow-hidden ring-1 ring-app shadow-app hover:shadow-[0_20px_40px_-10px_rgba(214,83,122,0.25)] transition-all duration-300 shrink-0 w-[80vw] sm:w-[280px] snap-start flex flex-col"
                  >
                    <div className="overflow-hidden h-72 relative bg-accent/10">
                      {item.badge && (
                        <span className="absolute top-4 left-4 z-10 bg-accent text-white text-[9px] font-black px-3 py-1.5 rounded-full uppercase tracking-wider">
                          {item.badge}
                        </span>
                      )}
                      <LazyImage
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover hover:scale-105 transition duration-500"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="font-heading font-bold text-base text-app-primary leading-snug">
                        {item.title}
                      </h3>
                      <div className="flex items-center gap-1 mt-2">
                        <Star size={11} className="fill-amber-400 text-amber-400" />
                        <span className="text-[11px] font-bold text-app-secondary font-inter">
                          {item.rating}
                        </span>
                        <span className="text-[11px] text-app-muted">(120+ reviews)</span>
                      </div>
                      <div className="flex items-center gap-2 mt-3">
                        <p className="text-accent font-black text-base">
                          {item.price === "acceptable" ? <a href="tel:9540849659" className="inline-flex items-center gap-1.5"><Phone size={14} className="icon-wiggle" /> Call for Price</a> : item.price}
                        </p>
                      </div>

                      <Link
                        to={`/category?cat=${encodeURIComponent(item.category)}`}
                        className="mt-6 w-full bg-primary text-white py-3 rounded-2xl font-bold text-xs tracking-wider uppercase hover:bg-primary/90 hover:shadow-soft-lg hover:shadow-primary/30 hover:scale-[1.03] transition-all duration-300 text-center"
                      >
                        Quick View
                      </Link>
                    </div>
                  </motion.div>
                </TiltCard>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.04 }}
              onClick={() => scrollSlider(bestSellerSliderRef, "right")}
              className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-2xl bg-app-card border border-app shadow-app flex items-center justify-center text-app-secondary hover:bg-app-card hover:shadow-app-hover hover:scale-[1.04] transition-all duration-300"
              aria-label="Scroll right"
            >
              <ArrowRight size={18} className="icon-wiggle" />
            </motion.button>
          </div>
        </div>
      </RevealSection>

      {/* ─── Deal of the Day ─── */}
      <RevealSection className="py-24 bg-primary relative overflow-hidden">
        <BokehLights spots={[
          { color: "from-rose-400/20 to-transparent", size: 300, top: "-8%", right: "-5%", anim: "bk-drift1", delay: 0, duration: 28 },
          { color: "from-amber-300/15 to-transparent", size: 250, bottom: "-10%", left: "-4%", anim: "bk-drift2", delay: 2, duration: 32 },
          { color: "from-pink-400/15 to-transparent", size: 200, top: "50%", left: "35%", anim: "bk-float", delay: 4, duration: 24 },
          { color: "from-violet-400/10 to-transparent", size: 260, top: "15%", right: "25%", anim: "bk-drift3", delay: 1, duration: 30 },
        ]} />
        <FloatingDecoration type="rose" side="right" top="8%" size={80} opacity={0.08} delay={0} duration={18} animation="bloom" color="#D6537A" />
        <FloatingDecoration type="leaf" side="left" top="auto" bottom="12%" size={56} opacity={0.12} delay={2} duration={14} animation="sway3" color="#C9A15A" />
        <FloatingDecoration type="petal5" side="right" top="auto" bottom="8%" size={48} opacity={0.07} delay={3} duration={16} animation="sway1" color="#D6537A" />
        <div className="max-w-[1440px] mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div className="relative group">
              <div ref={dealParallaxRef} className="rounded-[24px] overflow-hidden shadow-[0_20px_60px_-20px_rgba(0,0,0,0.5)] ring-1 ring-white/10">
                <LazyImage
                  src={image28}
                  alt="Sunset Rose Grand Bouquet - Deal of the Day"
                  className="w-full h-[480px] object-cover transition-all duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent pointer-events-none" />
              </div>
              <motion.div
                animate={{ rotate: [-3, 0, -3] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -left-4 bg-accent text-white rounded-2xl px-6 py-4 shadow-[0_8px_24px_rgba(214,83,122,0.35)]"
              >
                <p className="text-[10px] uppercase tracking-widest font-black flex items-center gap-1">
                  <Percent size={11} /> Today Only
                </p>
                <p className="text-2xl font-black mt-1 font-heading">40% OFF</p>
              </motion.div>
            </motion.div>

            <div className="text-cream flex flex-col gap-7">
              <div>
                <motion.span
                  animate={{ opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="inline-flex items-center gap-2 bg-white/[0.06] backdrop-blur-sm text-gold text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full border border-white/[0.08] shadow-sm"
                >
                  <Clock size={12} /> Deal of the Day
                </motion.span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black leading-tight text-cream mt-6">
                  Sunset Rose Grand Bouquet
                </h2>
                <p className="text-cream/50 text-sm mt-4 leading-relaxed font-light max-w-lg">
                  A breathtaking, hand-tied arrangement of 50 premium long-stemmed roses in warm
                  sunset hues, finished with fresh eucalyptus and a signature silk ribbon.
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-px h-8 bg-white/10" />
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl sm:text-2xl font-black text-gold hover:text-[#dfc4a3] transition-colors font-heading tracking-tight"
                >
                  Call us for best price
                </a>
                <div className="w-px h-8 bg-white/10" />
              </div>

              <div className="flex gap-4">
                {[
                  { label: "Hours", value: timeLeft.hours },
                  { label: "Minutes", value: timeLeft.minutes },
                  { label: "Seconds", value: timeLeft.seconds },
                ].map((t) => (
                  <motion.div
                    key={t.label}
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                    className="bg-white/[0.04] backdrop-blur-sm border border-white/[0.06] rounded-2xl px-6 py-4 text-center min-w-[82px] transition-colors duration-300"
                  >
                    <motion.p
                      key={t.value}
                      initial={{ y: -5, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      className="text-2xl sm:text-3xl font-bold text-cream tabular-nums leading-none tracking-tight"
                    >
                      {pad(t.value)}
                    </motion.p>
                    <p className="text-[9px] text-gold uppercase tracking-wider font-bold mt-2.5">
                      {t.label}
                    </p>
                  </motion.div>
                ))}
              </div>

              <RippleButton
                as="a"
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-2 inline-flex items-center justify-center gap-3 bg-accent hover:bg-accent/90 text-white px-10 py-4 rounded-2xl font-bold text-xs tracking-widest uppercase shadow-lg shadow-accent/25 hover:shadow-accent/40 hover:scale-[1.03] hover:-translate-y-1 transition-all duration-300 max-w-max"
              >
                Grab This Deal <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform duration-300" />
              </RippleButton>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* ─── How It Works ─── */}
      <RevealSection className="relative py-24 bg-app-secondary overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 relative z-10">
          <SectionTitle centered size="md" subtitle="From our garden directly to your doorstep in three easy steps">
            How It Works
          </SectionTitle>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-10 mt-16">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  whileHover={{ y: -12, scale: 1.02 }}
                  className="group relative min-h-[340px] w-full backdrop-blur-md bg-app-card rounded-[24px] p-8 pt-14 border border-app shadow-app transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-3 hover:shadow-app-hover text-center overflow-hidden"
                >
                  <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] rounded-[24px]" />
                  <span className="absolute -top-6 left-4 text-8xl font-black text-app-primary/10 group-hover:text-gold font-heading select-none leading-none tracking-tighter transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-110 group-hover:translate-x-1">
                    {pad(index + 1)}
                  </span>
                  <div className="relative z-10 w-16 h-16 mx-auto rounded-full bg-accent/10 flex items-center justify-center mb-6 ring-2 ring-accent/20 shadow-inner transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-110 group-hover:bg-gold group-hover:ring-gold/50 group-hover:shadow-lg group-hover:shadow-gold/20">
                    <Icon size={24} className="text-accent group-hover:text-white transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]" />
                  </div>
                  <h3 className="relative z-10 font-heading font-bold text-xl text-app-primary group-hover:text-white transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]">
                    {step.title}
                  </h3>
                  <p className="relative z-10 text-app-secondary group-hover:text-white/80 text-xs mt-3 leading-relaxed font-light max-w-[260px] mx-auto transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]">
                    {step.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </RevealSection>

      <SectionDivider variant="wave" />

      {/* ─── Why Choose Us ─── */}
      <RevealSection className="relative py-24 bg-app overflow-hidden">
        <FloatingDecoration type="petal5" side="left" top="15%" size={56} opacity={0.12} delay={1} duration={14} color="#D6537A" />
        <FloatingDecoration type="leaf" side="right" top="25%" size={60} opacity={0.18} delay={0} duration={11} animation="sway2" color="#14301F" />
        <FloatingDecoration type="petal6" side="left" top="auto" bottom="12%" size={42} opacity={0.1} delay={2.5} duration={13} animation="sway3" color="#C9A15A" />
        <div className="max-w-[1440px] mx-auto px-6">
          <SectionTitle centered size="md" subtitle="Delivering smiles and premium quality with every single delivery">
            Why Choose Us
          </SectionTitle>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <TiltCard key={index} tiltDegree={4} scale={1.01} glare={false}>
                  <div className={`${item.bg} group p-8 rounded-3xl border border-app text-center hover:shadow-app-hover transition-all duration-300`}>
                    <div className="w-14 h-14 mx-auto rounded-2xl bg-app-card border border-app/80 flex items-center justify-center shadow-sm">
                      <Icon size={24} className={`${item.iconColor} icon-wiggle`} />
                    </div>
                    <h3 className="font-heading font-bold text-base text-app-primary mt-5">
                      {item.title}
                    </h3>
                    <p className="text-app-secondary text-xs mt-2 font-light">{item.desc}</p>
                  </div>
                </TiltCard>
              );
            })}
          </div>
        </div>
      </RevealSection>

      {/* ─── Plan The Perfect Surprise ─── */}
      <RevealSection className="relative py-24 bg-app-secondary border-b border-app overflow-hidden">
        <BokehLights spots={[
          { color: "from-rose-200/10 to-transparent", size: 220, top: "-4%", left: "8%", anim: "bk-drift2", delay: 0, duration: 30 },
          { color: "from-amber-100/8 to-transparent", size: 180, bottom: "-6%", right: "10%", anim: "bk-drift1", delay: 2, duration: 26 },
          { color: "from-gold/6 to-transparent", size: 200, top: "40%", right: "30%", anim: "bk-float", delay: 3, duration: 28 },
        ]} />
        <FloatingDecoration type="petal5" side="left" top="12%" size={56} opacity={0.08} delay={0} duration={14} animation="sway2" color="#C9A15A" />
        <FloatingDecoration type="leaf" side="right" top="auto" bottom="10%" size={44} opacity={0.1} delay={2} duration={12} animation="sway3" color="#14301F" />
        <FloatingDecoration type="petal6" side="left" top="auto" bottom="6%" size={40} opacity={0.07} delay={1.5} duration={11} animation="rotate" color="#D6537A" />
        <div className="max-w-[1440px] mx-auto px-6 relative">
          <SectionTitle centered size="md" subtitle="Thoughtfully crafted floral gifts for every kind of love">
            Plan The Perfect Surprise
          </SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto mt-16">
            {[
              { id: 1, title: 'For Him', bg: 'bg-[#EBF3FC]', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80' },
              { id: 2, title: 'For Her', bg: 'bg-[#FCEBEB]', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80' },
              { id: 3, title: 'For Them', bg: 'bg-[#FCF5EB]', img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80' },
            ].map((item) => (
              <motion.div key={item.id} whileHover={{ y: -4 }} className="group text-center">
                <div className="relative mb-7">
                  <div className={`${item.bg} aspect-square rounded-[40%_60%_70%_30%_/_40%_50%_60%_50%] overflow-hidden shadow-app transition-all duration-500 ease-out hover:shadow-app-hover`}>
                    <div className="absolute inset-0 ring-1 ring-inset ring-black/[0.04] rounded-[inherit] pointer-events-none" />
                    <img
                      src={item.img}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                  </div>
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 z-10">
                    <motion.button
                      whileHover={{ y: -2 }}
                      className="bg-primary text-white text-[11px] font-bold tracking-[0.15em] uppercase px-7 py-3 rounded-full inline-flex items-center justify-center gap-2.5 hover:bg-primary/90 shadow-[0_4px_16px_rgba(20,48,31,0.15)] hover:shadow-[0_8px_24px_rgba(20,48,31,0.25)] transition-all duration-300"
                    >
                      {item.title}
                      <span className="w-5 h-5 rounded-full bg-white/15 flex items-center justify-center text-white text-[10px] leading-none backdrop-blur-sm">→</span>
                    </motion.button>
                  </div>
                </div>
                <p className="text-app-muted/60 text-[10px] tracking-[0.2em] uppercase font-medium mt-1">
                  Shop {item.title}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* ─── Choose a Favourite Colour ─── */}
      <RevealSection className="relative py-20 bg-app border-b border-app overflow-hidden">
        <BokehLights spots={[
          { color: "from-rose-200/8 to-transparent", size: 180, top: "-3%", right: "15%", anim: "bk-drift2", delay: 1, duration: 28 },
          { color: "from-amber-100/8 to-transparent", size: 200, bottom: "-5%", left: "5%", anim: "bk-drift4", delay: 3, duration: 24 },
          { color: "from-violet-200/6 to-transparent", size: 160, top: "50%", left: "40%", anim: "bk-float", delay: 2, duration: 26 },
        ]} />
        <FloatingDecoration type="petal6" side="left" top="10%" size={48} opacity={0.07} delay={0} duration={13} animation="sway1" color="#C9A15A" />
        <FloatingDecoration type="leaf" side="right" top="auto" bottom="8%" size={44} opacity={0.09} delay={2.5} duration={11} animation="sway3" color="#14301F" />
        <div className="max-w-[1440px] mx-auto px-6 relative">
          <SectionTitle centered size="md" subtitle="Browse our blooms sorted by your favourite shade">
            Choose a Favourite Colour
          </SectionTitle>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-y-8 gap-x-6 max-w-4xl mx-auto mt-14">
            {[
              { label: 'Red', img: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=150' },
              { label: 'Purple', img: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=150' },
              { label: 'Pink', img: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?w=150' },
              { label: 'Peach', img: 'https://images.unsplash.com/photo-1508747703725-719777637510?w=150' },
              { label: 'Warm', img: 'https://images.unsplash.com/photo-1596436889106-be35e843f974?w=150' },
              { label: 'Pastel', img: 'https://images.unsplash.com/photo-1550950158-d0d960dff51b?w=150' },
              { label: 'Orange', img: 'https://images.unsplash.com/photo-1597848212624-a19eb35e2651?w=150' },
              { label: 'Blue', img: 'https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?w=150' },
              { label: 'White', img: 'https://images.unsplash.com/photo-1533616688419-b7a585564566?w=150' },
              { label: 'Yellow', img: 'https://images.unsplash.com/photo-1597848212624-a19eb35e2651?w=150' },
              { label: 'Cool', img: 'https://images.unsplash.com/photo-1494972308805-463bc619d34e?w=150' },
              { label: 'Mixed', img: 'https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?w=150' },
            ].map((color) => (
              <motion.div key={color.label} whileHover={{ scale: 1.1 }} className="text-center group">
                <TiltCard tiltDegree={5} scale={1.05} glare={false}>
                  <div className="w-[82px] h-[82px] rounded-full overflow-hidden border-[3px] border-white/80 shadow-app cursor-pointer transition-all duration-500 ease-out hover:shadow-app-hover hover:border-gold/40 mx-auto">
                    <img
                      src={color.img}
                      alt={color.label}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                    />
                  </div>
                </TiltCard>
                <span className="text-xs text-app-primary font-medium tracking-wide mt-3 text-center block transition-colors duration-300 group-hover:text-gold">
                  {color.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* ─── Testimonials ─── */}
      <RevealSection className="relative py-24 bg-app-secondary overflow-hidden">
        <BokehLights spots={[
          { color: "from-rose-300/12 to-transparent", size: 240, top: "-6%", right: "-3%", anim: "bk-drift2", delay: 0, duration: 32 },
          { color: "from-amber-200/10 to-transparent", size: 200, bottom: "-8%", left: "8%", anim: "bk-drift4", delay: 3, duration: 28 },
          { color: "from-violet-200/8 to-transparent", size: 180, top: "40%", left: "45%", anim: "bk-float", delay: 1, duration: 26 },
        ]} />
        <FloatingDecoration type="petal5" side="left" top="8%" size={56} opacity={0.1} delay={0.5} duration={13} color="#C9A15A" />
        <FloatingDecoration type="petal6" side="right" top="12%" size={60} opacity={0.12} delay={0} duration={14} animation="sway2" />
        <FloatingDecoration type="leaf" side="right" top="auto" bottom="8%" size={48} opacity={0.16} delay={2} duration={11} animation="sway3" color="#14301F" />
        <div className="max-w-[1440px] mx-auto px-6">
          <SectionTitle centered size="md" subtitle="Hear from our happy customers">
            What Our Customers Say
          </SectionTitle>

          <div className="flex justify-center mb-16 mt-8">
            <div className="flex items-center gap-5 bg-app-card border border-app rounded-3xl px-8 py-5 shadow-app">
              <span className="text-4xl font-black text-app-primary font-heading">4.9</span>
              <div className="w-px h-10 bg-app" />
              <div>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={13} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-xs text-app-muted mt-1 font-semibold">Based on 2,400+ reviews</p>
              </div>
            </div>
          </div>

          <div className="max-w-2xl mx-auto">
            <TestimonialCarousel testimonials={testimonials} />
          </div>
        </div>
      </RevealSection>

      {/* ─── Instagram Gallery ─── */}
      <RevealSection className="py-24 bg-app border-b border-app">
        <div className="max-w-[1440px] mx-auto px-6">
          <SectionTitle centered size="md" subtitle="Follow our floral journey on Instagram">
            <span className="inline-flex items-center gap-2">
              Follow Our Floral Journey
              <Sparkles size={20} className="text-gold" />
            </span>
          </SectionTitle>

          <div className="flex justify-center mt-8 mb-12">
            <motion.a
              whileHover={{ scale: 1.05 }}
              href={INSTAGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-accent font-bold text-sm hover:underline"
            >
              <FaInstagram size={18} />
              @ShivamFlorist
            </motion.a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {galleryImages.map((img, index) => (
              <motion.a
                whileHover={{ scale: 1.02, y: -4 }}
                href={INSTAGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
                className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-app hover:shadow-app-hover transition-all duration-300"
              >
                <LazyImage
                  src={img}
                  alt="Floral journey picture on Instagram"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/30 transition duration-300 flex items-center justify-center">
                  <FaInstagram
                    size={22}
                    className="text-white opacity-0 group-hover:opacity-100 transition duration-300"
                  />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* ─── FAQ ─── */}
      <RevealSection className="py-24 bg-app-secondary">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-8">
          <SectionTitle centered size="md" subtitle="Everything you need to know about our flowers and shipping policies">
            Frequently Asked Questions
          </SectionTitle>

          <div className="max-w-4xl mx-auto flex flex-col gap-4 mt-12">
            {faqs.map((faq, index) => {
              const isSelected = openFaq === index;
              return (
                <motion.div
                  key={index}
                  animate={{ scale: isSelected ? 1.01 : 1 }}
                  className="border border-app rounded-3xl overflow-hidden bg-app-card shadow-app transition-all duration-300"
                >
                  <button
                    onClick={() => setOpenFaq(isSelected ? null : index)}
                    className="group w-full flex items-center justify-between gap-4 px-6 py-5 text-left font-bold text-app-primary hover:text-app-primary focus:outline-none transition-colors duration-300 hover:bg-accent/10"
                  >
                    <span className="font-heading text-base leading-snug">{faq.q}</span>
                    <span className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent shrink-0">
                      {isSelected ? <Minus size={14} /> : <Plus size={14} />}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isSelected && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-5 text-app-secondary text-sm leading-relaxed font-light border-t border-app pt-3">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </RevealSection>

      {/* ─── Newsletter ─── */}
      <RevealSection className="relative py-24 bg-accent/10 overflow-hidden">
        <BokehLights spots={[
          { color: "from-rose-300/20 to-transparent", size: 280, top: "-8%", left: "-5%", anim: "bk-drift1", delay: 0, duration: 30 },
          { color: "from-amber-200/18 to-transparent", size: 220, bottom: "-10%", right: "10%", anim: "bk-drift4", delay: 3, duration: 28 },
          { color: "from-purple-300/12 to-transparent", size: 200, top: "60%", left: "40%", anim: "bk-float", delay: 1, duration: 26 },
        ]} />
        <FloatingDecoration type="petal5" side="left" top="15%" size={64} opacity={0.12} delay={0} duration={14} />
        <FloatingDecoration type="petal6" side="right" top="10%" size={52} opacity={0.1} delay={1.5} duration={12} animation="sway2" color="#C9A15A" />
        <FloatingDecoration type="leaf" side="left" top="auto" bottom="12%" size={44} opacity={0.15} delay={2} duration={10} animation="sway3" />
        <FloatingDecoration type="petal" side="right" top="auto" bottom="8%" size={40} opacity={0.12} delay={3} duration={11} animation="sway1" color="#D6537A" />
        <div className="max-w-[1440px] mx-auto text-center px-6 lg:px-8">
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6"
          >
            <Mail size={24} className="text-accent" />
          </motion.div>
          <SectionTitle centered size="md" subtitle="Subscribe for exclusive discounts, floral tips, and advance access to our limited holiday collections.">
            Join Our Flower Family
          </SectionTitle>

          <div className="mt-10 max-w-xl mx-auto">
            {subscribed ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-emerald-50 border border-emerald-200 rounded-3xl px-8 py-5 text-emerald-700 font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2"
              >
                <CheckCircle2 size={16} /> Welcome to the family! Check your inbox soon.
              </motion.div>
            ) : (
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSubscribe()}
                  placeholder="Enter your email address"
                  className="flex-1 border border-app bg-app-card rounded-full px-6 py-4 text-sm text-app-primary placeholder-app-muted outline-none focus:border-accent/40 focus:ring-1 focus:ring-accent/20 transition-all"
                />
                <RippleButton
                  as="button"
                  onClick={handleSubscribe}
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-2xl font-bold text-xs tracking-widest uppercase hover:shadow-soft-lg hover:shadow-primary/30 transition-all duration-300"
                >
                  Subscribe
                </RippleButton>
              </div>
            )}
          </div>

          <div className="flex items-center justify-center gap-3 mt-12">
            <motion.a
              whileHover={{ y: -3, scale: 1.1 }}
              href={INSTAGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-10 h-10 rounded-full bg-app-card border border-app flex items-center justify-center text-accent shadow-sm transition duration-300"
            >
              <FaInstagram size={16} />
            </motion.a>
            <motion.a
              whileHover={{ y: -3, scale: 1.1 }}
              href={FACEBOOK_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-10 h-10 rounded-full bg-app-card border border-app flex items-center justify-center text-accent shadow-sm transition duration-300"
            >
              <FaFacebookF size={15} />
            </motion.a>
          </div>
        </div>
      </RevealSection>

      {/* ─── WhatsApp Floating Button ─── */}
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={{ boxShadow: ["0 0 0 0 rgba(37,211,102,0.4)", "0 0 0 18px rgba(37,211,102,0)", "0 0 0 0 rgba(37,211,102,0)"] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25d366] flex items-center justify-center shadow-xl shadow-emerald-400/30 hover:bg-[#20ba59] hover:shadow-2xl hover:shadow-emerald-400/50 transition-all duration-300"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={26} color="white" fill="white" />
      </motion.a>
    </div>
  );
};

export default Home;
