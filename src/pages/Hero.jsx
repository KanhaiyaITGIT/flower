import React, { useState, useEffect, useRef } from "react";
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
  ChevronDown,
  ChevronLeft,
} from "lucide-react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import LazyImage from "../components/ui/LazyImage";
import FloatingDecoration from "../components/FloatingDecoration";
import BokehLights from "../components/BokehLights";
import RevealSection from "../components/RevealSection";
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
import image10 from "../assets/s10.png";
import image11 from "../assets/s12.png";
import image12 from "../assets/s13.png";
import image13 from "../assets/s14.png";
import image26 from "../assets/s26.png";
import image27 from "../assets/s27.png";
import hero from "../assets/hero.png";
import image28 from "../assets/f1.png";
import imagef20 from "../assets/f20.png";

// ─── Premium Variants ───
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const floatingVariants = {
  animate: {
    y: [0, -12, 0],
    transition: {
      duration: 6,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

const Home = () => {
  const navigate = useNavigate();
  const categorySliderRef = useRef(null);
  const bestSellerSliderRef = useRef(null);

  const scrollSlider = (ref, direction) => {
    if (!ref.current) return;
    const card = ref.current.querySelector("[data-slide-card]");
    const cardWidth = card ? card.offsetWidth + 24 : 300;
    ref.current.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [wishlist, setWishlist] = useState({});
  const [openFaq, setOpenFaq] = useState(0);
  const [timeLeft, setTimeLeft] = useState({
    hours: 5,
    minutes: 42,
    seconds: 18,
  });

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

  const toggleWishlist = (id) => {
    setWishlist((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const pad = (n) => String(n).padStart(2, "0");

  const categories = [
    { title: "Bouquets", image: image1, products: "120+ Products", category: "Bouquets" },
    { title: "Floral Arrangements", image: image42, products: "80+ Products", category: "All" },
    { title: "Premium Baloons Decor", image: image16, products: "150+ Products", category: "Balloon" },
    { title: "For Love", image: image4, products: "30+ Products", category: "Anniversary" },
  ];

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
      iconColor: "text-[#D6537A]",
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

  const occasions = [
    {
      title: "Marriage decor",
      desc: "Make their day extra special",
      icon: Cake,
      image: image9,
    },
    {
      title: "Devotional",
      desc: "Celebrate your love story",
      icon: Heart,
      image: image10,
    },
    {
      title: "Decor",
      desc: "Mark every milestone in style",
      icon: PartyPopper,
      image: imagef20,
    },
    {
      title: "Thank You",
      desc: "Show your gratitude with blooms",
      icon: Gift,
      image: image12,
    },
  ];

  const testimonials = [
    {
      name: "Rashmi Pathak",
      role: "Verified Buyer",
      review:
        "Beautiful flowers delivered right on time. The quality and packaging were amazing, exactly like the pictures.",
      rating: 5,
      initials: "RP",
      color: "bg-rose-400",
    },
    {
      name: "Anand Upadhyay",
      role: "Verified Buyer",
      review:
        "Fresh flowers with a premium presentation. The bouquet stayed fresh for over a week — highly recommended.",
      rating: 5,
      initials: "AU",
      color: "bg-[#c9a96e]",
    },
    {
      name: "Aanchal Kalra",
      role: "Verified Buyer",
      review:
        "Excellent service from order to doorstep. Ordered for our anniversary and my husband absolutely loved it.",
      rating: 5,
      initials: "AK",
      color: "bg-rose-400",
    },
  ];

  const faqs = [
    {
      q: "How fast can I get same-day delivery?",
      a: "Place your order before 4 PM and we'll deliver fresh flowers to your doorstep the same day, across Delhi NCR.",
    },
    {
      q: "Are the flowers fresh when they arrive?",
      a: "Every arrangement is hand-crafted on the day of delivery using flowers sourced from local farms that morning.",
    },
    {
      q: "Can I customize my bouquet or add a gift?",
      a: "Yes! You can choose your favourite blooms, colours and wrapping, and add chocolates, cakes or candles at checkout.",
    },
    {
      q: "What happens if I'm not happy with my order?",
      a: "Reach out within 24 hours of delivery and we'll arrange a replacement or refund — no questions asked.",
    },
  ];

  const galleryImages = [image42, image16, image4, image9, image11, image13];

  return (
    <div className="w-full overflow-hidden bg-[#fafaf9]">
      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* ─── HERO SECTION: PROMOTIONAL CARD STYLE ─── */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative w-full overflow-hidden bg-[#fafaf9] pt-20 lg:pt-14">

        {/* ─── Category Shortcuts Row ─── */}
        <div className="w-full overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden pb-2 lg:pb-4">
          <div className="flex gap-5 lg:gap-8 justify-start lg:justify-center px-6 lg:px-8 max-w-7xl mx-auto">
            {[
              { label: "All Flowers", image: image1, link: "/category" },
              { label: "Rose Love", image: image4, link: "/category?cat=Anniversary" },
              { label: "Birthdays", image: image5, link: "/category?cat=Birthday" },
              { label: "Anniversaries", image: image6, link: "/category?cat=Anniversary" },
              { label: "Weddings", image: image7, link: "/category?cat=Wedding" },
              { label: "Luxury", icon: "flower", link: "/category" },
              { label: "Balloons", image: image16, link: "/category?cat=Balloon" },
              { label: "Devotional", image: image9, link: "/category?cat=Devotional" },
              { label: "Gifts", icon: "gift", link: "/category" },
            ].map((cat, i) => (
              <Link
                key={i}
                to={cat.link}
                className="flex flex-col items-center gap-2 shrink-0 group"
              >
                <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden border-2 border-transparent group-hover:border-[#C9A15A] group-hover:shadow-lg transition-all duration-300">
                  {cat.icon ? (
                    <div className={`w-full h-full flex items-center justify-center ${cat.icon === "flower" ? "bg-[#F4C9D1]/30" : "bg-[#C9A15A]/20"}`}>
                      {cat.icon === "flower" ? <Flower2 size={28} className="text-[#D6537A]" /> : <Gift size={28} className="text-[#C9A15A]" />}
                    </div>
                  ) : (
                    <LazyImage
                      src={cat.image}
                      alt={cat.label}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  )}
                </div>
                <span className="text-[11px] lg:text-xs font-bold text-gray-600 group-hover:text-[#14301F] transition-colors whitespace-nowrap">
                  {cat.label}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* ─── Hero Promotional Card ─── */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-6 lg:pb-10">
          <div className="relative bg-[#F5EFE6] rounded-[28px] overflow-hidden shadow-lg">

            {/* Top-right decorative accent button */}
            <div className="absolute top-4 right-4 z-20 w-11 h-11 lg:w-12 lg:h-12 rounded-full bg-[#14301F] flex items-center justify-center shadow-md cursor-default">
              <ArrowRight size={20} className="text-[#C9A15A]" strokeWidth={2.5} />
            </div>

            {/* Hand-drawn botanical illustration — Top-left corner */}
            <div className="absolute top-0 left-0 z-10 pointer-events-none" aria-hidden="true">
              <svg width="140" height="100" viewBox="0 0 140 100" fill="none">
                <path d="M0 70 C20 50, 40 30, 60 20 C80 10, 100 8, 130 12" stroke="#7a8c6b" strokeWidth="1.8" strokeLinecap="round" fill="none" opacity="0.7" />
                <path d="M30 40 C34 34, 40 32, 44 36 C40 42, 34 44, 30 40Z" fill="#7a8c6b" opacity="0.5" />
                <path d="M55 24 C59 18, 65 16, 69 20 C65 26, 59 28, 55 24Z" fill="#7a8c6b" opacity="0.5" />
                <path d="M85 14 C89 8, 95 6, 99 10 C95 16, 89 18, 85 14Z" fill="#7a8c6b" opacity="0.45" />
                <path d="M5 85 C8 75, 14 72, 18 76 C14 82, 8 88, 5 85Z" fill="#C9A15A" opacity="0.5" />
                {/* Scattered dots */}
                <circle cx="110" cy="6" r="2" fill="#C9A15A" opacity="0.4" />
                <circle cx="125" cy="18" r="1.5" fill="#7a8c6b" opacity="0.4" />
                <circle cx="15" cy="95" r="1.5" fill="#C9A15A" opacity="0.35" />
              </svg>
            </div>

            {/* Hand-drawn botanical illustration — Bottom-left corner */}
            <div className="absolute bottom-0 left-0 z-10 pointer-events-none" aria-hidden="true">
              <svg width="100" height="80" viewBox="0 0 100 80" fill="none">
                <path d="M20 80 C30 60, 40 40, 40 28 C40 18, 35 10, 30 4" stroke="#7a8c6b" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6" />
                <path d="M34 30 C38 24, 44 22, 48 26 C44 32, 38 34, 34 30Z" fill="#7a8c6b" opacity="0.5" />
                <path d="M32 16 C36 10, 42 8, 46 12 C42 18, 36 20, 32 16Z" fill="#7a8c6b" opacity="0.5" />
                <circle cx="85" cy="70" r="2" fill="#C9A15A" opacity="0.35" />
                <circle cx="90" cy="64" r="1.2" fill="#7a8c6b" opacity="0.35" />
              </svg>
            </div>

            {/* Hand-drawn botanical flower bloom — Top-right area */}
            <div className="absolute top-0 right-0 z-10 pointer-events-none" aria-hidden="true">
              <svg width="90" height="90" viewBox="0 0 90 90" fill="none">
                <path d="M55 90 C58 74, 62 60, 62 48 C62 36, 58 26, 50 18" stroke="#C9A15A" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5" />
                <circle cx="50" cy="16" r="6" fill="#C9A15A" opacity="0.3" />
                <circle cx="42" cy="12" r="4" fill="#C9A15A" opacity="0.25" />
                <circle cx="58" cy="12" r="4" fill="#C9A15A" opacity="0.25" />
                <circle cx="50" cy="8" r="4" fill="#C9A15A" opacity="0.25" />
                <circle cx="44" cy="20" r="3.5" fill="#C9A15A" opacity="0.2" />
                <circle cx="56" cy="20" r="3.5" fill="#C9A15A" opacity="0.2" />
                <circle cx="70" cy="10" r="1.5" fill="#C9A15A" opacity="0.35" />
                <circle cx="78" cy="24" r="1.5" fill="#7a8c6b" opacity="0.3" />
              </svg>
            </div>

            {/* Grid: content left, image right */}
            <div className="grid lg:grid-cols-2 min-h-[360px] lg:min-h-[460px]">
              {/* ─── LEFT: TEXT CONTENT ─── */}
              <div className="flex flex-col justify-center px-7 lg:px-12 py-10 lg:py-12 order-2 lg:order-1">
                <span className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-[0.2em] uppercase text-[#7a8c6b] font-inter mb-3">
                  <span className="w-6 h-[1.5px] bg-[#7a8c6b]/40 inline-block" />
                  Fresh Daily
                </span>

                <h1 className="font-inter font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-[#1a1a1a] leading-[1.08] tracking-tight">
                  Luxury
                  <span className="block text-[#C9A15A]">Blooms</span>
                </h1>

                <p className="text-gray-500 text-sm lg:text-base mt-3 max-w-md leading-relaxed font-inter">
                  Handpicked fresh every morning. Artisan bouquets, premium arrangements and thoughtful gifts — curated for life's most beautiful moments.
                </p>

                {/* CTA Buttons — dark pill shape */}
                <div className="flex flex-col sm:flex-row gap-3 mt-7 lg:mt-8">
                  <Link
                    to="/category"
                    className="group inline-flex items-center justify-center gap-2 px-7 lg:px-8 py-3.5 lg:py-4 bg-[#1a1a1a] text-white font-bold text-xs lg:text-sm tracking-wider uppercase rounded-full hover:bg-[#333] hover:shadow-lg hover:scale-[1.03] transition-all duration-300"
                  >
                    <ShoppingBag size={16} className="group-hover:scale-110 transition-transform icon-wiggle" />
                    <span>Shop Collection</span>
                  </Link>
                  <Link
                    to="/occasions"
                    className="group inline-flex items-center justify-center gap-2 px-7 lg:px-8 py-3.5 lg:py-4 bg-white text-[#1a1a1a] font-bold text-xs lg:text-sm tracking-wider uppercase rounded-full border-2 border-[#1a1a1a]/15 hover:bg-[#1a1a1a] hover:text-white hover:border-[#1a1a1a] hover:shadow-lg hover:scale-[1.03] transition-all duration-300"
                  >
                    <Flower2 size={16} className="text-[#C9A15A] group-hover:rotate-12 transition-transform icon-wiggle" />
                    <span>Explore Occasions</span>
                  </Link>
                </div>
              </div>

              {/* ─── RIGHT: HERO IMAGE (bleeding off edge) ─── */}
              <div className="relative order-1 lg:order-2 min-h-[260px] lg:min-h-full overflow-hidden">
                {/* Soft gradient overlay on left edge for smooth blend */}
                <div className="absolute inset-y-0 left-0 w-16 lg:w-24 bg-gradient-to-r from-[#F5EFE6] to-transparent z-10 pointer-events-none" />
                <LazyImage
                  src={hero}
                  alt="Luxurious fresh flower bouquet arrangement - Premium floral delivery"
                  className="absolute right-0 top-0 h-full w-auto min-w-[120%] lg:min-w-[130%] max-w-none object-cover object-left"
                />
                {/* Bottom fade */}
                <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-[#F5EFE6] to-transparent pointer-events-none lg:hidden" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Shop By Category ─── */}
      <RevealSection className="relative pt-16 pb-24 bg-white border-b border-gray-100 overflow-hidden">
        <BokehLights spots={[
          { color: "from-rose-200/15 to-transparent", size: 260, top: "-6%", right: "-4%", anim: "bk-drift2", delay: 0, duration: 32 },
          { color: "from-amber-100/12 to-transparent", size: 200, bottom: "-8%", left: "5%", anim: "bk-drift1", delay: 3, duration: 28 },
          { color: "from-purple-200/10 to-transparent", size: 220, top: "40%", left: "40%", anim: "bk-float", delay: 1, duration: 30 },
        ]} />
        <FloatingDecoration type="petal5" side="left" top="20%" size={60} opacity={0.12} delay={0} duration={13} />
        <FloatingDecoration type="leaf" side="right" top="30%" size={50} opacity={0.15} delay={1} duration={11} animation="sway2" />
        <FloatingDecoration type="petal6" side="left" top="auto" bottom="10%" size={44} opacity={0.1} delay={2} duration={14} animation="sway3" color="#C9A15A" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-widest text-[#D6537A] uppercase font-inter">
              Curated Collections
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif-display font-black text-[#0d1f0f] mt-3">
              Shop By Category
            </h2>
            <p className="text-gray-400 text-sm mt-3 font-light">
              Find the perfect arrangements designed for your special moments
            </p>
          </div>

          <div className="relative">
            <button
              onClick={() => scrollSlider(categorySliderRef, "left")}
              className="absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-2xl bg-white border border-gray-100 shadow-md flex items-center justify-center text-slate-700 hover:bg-gray-50 hover:shadow-soft-lg hover:scale-[1.04] transition-all duration-300"
              aria-label="Scroll left"
            >
              <ChevronLeft size={18} className="icon-wiggle" />
            </button>

            <div
              ref={categorySliderRef}
              className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 scrollbar-hide"
            >
              {categories.map((item, index) => (
                <div
                  key={index}
                  data-slide-card
                  onClick={() => navigate(`/category?cat=${encodeURIComponent(item.category)}`)}
                  className="group rounded-3xl overflow-hidden bg-white border border-gray-100/80 shadow-soft hover:shadow-soft-lg hover:scale-[1.02] transition-all duration-300 cursor-pointer shrink-0 w-[80vw] sm:w-[280px]"
                >
                  <div className="h-64 overflow-hidden relative bg-[#F4C9D1]/20">
                    <LazyImage
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
                    <span className="absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 bg-white text-xs font-bold text-[#14301F] px-4 py-2 rounded-2xl flex items-center gap-1">
                      Shop Now <ArrowRight size={12} />
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif-display font-bold text-lg text-[#14301F]">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-xs mt-1">{item.products}</p>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => scrollSlider(categorySliderRef, "right")}
              className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-2xl bg-white border border-gray-100 shadow-md flex items-center justify-center text-slate-700 hover:bg-gray-50 hover:shadow-soft-lg hover:scale-[1.04] transition-all duration-300"
              aria-label="Scroll right"
            >
              <ArrowRight size={18} className="icon-wiggle" />
            </button>
          </div>
        </div>
      </RevealSection>

      {/* ─── Best Sellers ─── */}
      <RevealSection className="py-24 bg-[#fafaf9]/60">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12 flex-wrap gap-4">
            <div>
              <span className="text-xs font-bold tracking-widest text-[#D6537A] uppercase font-inter">
                Customer Favorites
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif-display font-black text-[#14301F] mt-2">
                Bestselling Bouquets
              </h2>
            </div>
            <Link
              to="/category"
              className="text-[#D6537A] hover:text-[#D6537A] font-bold text-xs tracking-widest uppercase flex items-center gap-1.5 transition-colors duration-300 hover:scale-[1.04]"
            >
              View All <ArrowRight size={14} className="icon-wiggle" />
            </Link>
          </div>

          <div className="relative">
            <button
              onClick={() => scrollSlider(bestSellerSliderRef, "left")}
              className="absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-2xl bg-white border border-gray-100 shadow-md flex items-center justify-center text-slate-700 hover:bg-gray-50 hover:shadow-soft-lg hover:scale-[1.04] transition-all duration-300"
              aria-label="Scroll left"
            >
              <ChevronLeft size={18} className="icon-wiggle" />
            </button>

            <div
              ref={bestSellerSliderRef}
              className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 scrollbar-hide"
            >
              {bestSellers.map((item) => (
                <div
                  key={item.id}
                  data-slide-card
                  className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-soft hover:shadow-soft-lg hover:scale-[1.02] transition-all duration-300 shrink-0 w-[80vw] sm:w-[280px] snap-start flex flex-col"
                >
                  <div className="overflow-hidden h-72 relative bg-[#F4C9D1]/20">
                    {item.badge && (
                      <span className="absolute top-4 left-4 z-10 bg-[#D6537A] text-white text-[9px] font-black px-3 py-1.5 rounded-full uppercase tracking-wider">
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
                    <h3 className="font-serif-display font-bold text-base text-[#14301F] leading-snug">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-1 mt-2">
                      <Star size={11} className="fill-amber-400 text-amber-400" />
                      <span className="text-[11px] font-bold text-slate-700 font-inter">
                        {item.rating}
                      </span>
                      <span className="text-[11px] text-gray-400">(120+ reviews)</span>
                    </div>
                    <div className="flex items-center gap-2 mt-3">
                      <p className="text-[#D6537A] font-black text-base">
                        {item.price === "acceptable" ? "Call for Price" : item.price}
                      </p>
                    </div>

                    <Link
                      to={`/category?cat=${encodeURIComponent(item.category)}`}
                      className="mt-6 w-full bg-[#14301F] text-white py-3 rounded-2xl font-bold text-xs tracking-wider uppercase hover:bg-[#1a3320] hover:shadow-soft-lg hover:shadow-[#14301F]/30 hover:scale-[1.03] transition-all duration-300 text-center"
                    >
                      Quick View
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => scrollSlider(bestSellerSliderRef, "right")}
              className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-2xl bg-white border border-gray-100 shadow-md flex items-center justify-center text-slate-700 hover:bg-gray-50 hover:shadow-soft-lg hover:scale-[1.04] transition-all duration-300"
              aria-label="Scroll right"
            >
              <ArrowRight size={18} className="icon-wiggle" />
            </button>
          </div>
        </div>
      </RevealSection>

      {/* ─── Deal of the Day ─── */}
      <RevealSection className="py-24 bg-[#0d1f0f] relative overflow-hidden">
        <BokehLights spots={[
          { color: "from-rose-400/20 to-transparent", size: 300, top: "-8%", right: "-5%", anim: "bk-drift1", delay: 0, duration: 28 },
          { color: "from-amber-300/15 to-transparent", size: 250, bottom: "-10%", left: "-4%", anim: "bk-drift2", delay: 2, duration: 32 },
          { color: "from-pink-400/15 to-transparent", size: 200, top: "50%", left: "35%", anim: "bk-float", delay: 4, duration: 24 },
          { color: "from-violet-400/10 to-transparent", size: 260, top: "15%", right: "25%", anim: "bk-drift3", delay: 1, duration: 30 },
        ]} />

        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <LazyImage
                  src={image28}
                  alt="Sunset Rose Grand Bouquet - Deal of the Day"
                  className="w-full h-[480px] object-cover hover:scale-105 transition duration-700"
                />
              </div>
              <div className="absolute -top-4 -left-4 bg-[#D6537A] text-white rounded-2xl px-6 py-4 shadow-xl -rotate-6">
                <p className="text-[10px] uppercase tracking-widest font-black flex items-center gap-1">
                  <Percent size={11} /> Today Only
                </p>
                <p className="text-2xl font-black mt-1 font-serif-display">40% OFF</p>
              </div>
            </div>

            <div className="text-white flex flex-col gap-6">
              <div>
                <span className="inline-flex items-center gap-2 bg-white/10 text-[#C9A15A] text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full border border-white/10">
                  <Clock size={12} className="animate-pulse" /> Deal of the Day
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-display font-black mt-6 leading-tight text-[#F7F0E8]">
                  Sunset Rose Grand Bouquet
                </h2>
                <p className="text-gray-400 text-sm mt-4 leading-relaxed font-light">
                  A breathtaking, hand-tied arrangement of 50 premium long-stemmed roses in warm
                  sunset hues, finished with fresh eucalyptus and a signature silk ribbon.
                </p>
              </div>

              <div className="flex items-center gap-4">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl sm:text-3xl font-black text-[#C9A15A] hover:text-[#dfc4a3] transition-colors font-serif-display"
                >
                  Call us for best price
                </a>
              </div>

              <div className="flex gap-3">
                {[
                  { label: "Hours", value: timeLeft.hours },
                  { label: "Minutes", value: timeLeft.minutes },
                  { label: "Seconds", value: timeLeft.seconds },
                ].map((t) => (
                  <div
                    key={t.label}
                    className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-center min-w-[76px]"
                  >
                    <p className="text-2xl font-bold text-[#F7F0E8] tabular-nums leading-none">
                      {pad(t.value)}
                    </p>
                    <p className="text-[9px] text-[#C9A15A] uppercase tracking-wider font-bold mt-2">
                      {t.label}
                    </p>
                  </div>
                ))}
              </div>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-4 inline-flex items-center justify-center gap-2 bg-[#D6537A] hover:bg-rose-600 text-white px-8 py-4 rounded-2xl font-bold text-xs tracking-widest uppercase shadow-lg shadow-rose-200/30 hover:shadow-soft-lg hover:shadow-rose-400/40 hover:scale-[1.04] transition-all duration-300 hover:-translate-y-1"
              >
                Grab This Deal <ArrowRight size={14} className="icon-wiggle" />
              </a>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* ─── How It Works ─── */}
      <RevealSection className="relative py-24 bg-white border-b border-gray-100 overflow-hidden">
        <BokehLights spots={[
          { color: "from-rose-200/12 to-transparent", size: 240, top: "-5%", left: "20%", anim: "bk-drift3", delay: 0, duration: 30 },
          { color: "from-amber-100/10 to-transparent", size: 200, bottom: "-6%", right: "5%", anim: "bk-drift1", delay: 2, duration: 28 },
          { color: "from-purple-200/8 to-transparent", size: 180, top: "30%", right: "30%", anim: "bk-float", delay: 4, duration: 26 },
        ]} />
        <FloatingDecoration type="petal" side="left" top="18%" size={40} opacity={0.14} delay={0} duration={10} animation="sway3" color="#D6537A" />
        <FloatingDecoration type="petal5" side="right" top="12%" size={70} opacity={0.1} delay={2} duration={15} animation="sway1" />
        <FloatingDecoration type="petal6" side="left" top="auto" bottom="8%" size={48} opacity={0.12} delay={1} duration={12} animation="sway2" color="#C9A15A" />
        <FloatingDecoration type="leaf" side="right" top="auto" bottom="15%" size={44} opacity={0.15} delay={3} duration={9} animation="sway3" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-xs font-bold tracking-widest text-[#D6537A] uppercase font-inter">
              Simple Process
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif-display font-black text-[#14301F] mt-2">
              How It Works
            </h2>
            <p className="text-gray-400 text-sm mt-3 font-light">
              From our garden directly to your doorstep in three easy steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-[#fafaf9] rounded-3xl p-8 pt-12 border border-gray-100 hover:shadow-soft-lg hover:shadow-rose-500/10 hover:scale-[1.03] hover:-translate-y-1.5 transition-all duration-300 text-center"
                >
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-6xl font-black text-#F4C9D1/50 font-serif-display select-none">
                    {pad(index + 1)}
                  </span>
                  <div className="w-14 h-14 mx-auto rounded-2xl bg-[#D6537A]/10 flex items-center justify-center mb-6">
                    <Icon size={24} className="text-[#D6537A] icon-wiggle" />
                  </div>
                  <h3 className="font-serif-display font-bold text-lg text-[#14301F]">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-xs mt-3 leading-relaxed font-light">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </RevealSection>

      {/* ─── Why Choose Us ─── */}
      <RevealSection className="relative py-24 bg-[#fafaf9]/60 overflow-hidden">
        <FloatingDecoration type="petal5" side="left" top="15%" size={56} opacity={0.12} delay={1} duration={14} color="#D6537A" />
        <FloatingDecoration type="leaf" side="right" top="25%" size={60} opacity={0.18} delay={0} duration={11} animation="sway2" color="#14301F" />
        <FloatingDecoration type="petal6" side="left" top="auto" bottom="12%" size={42} opacity={0.1} delay={2.5} duration={13} animation="sway3" color="#C9A15A" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-xs font-bold tracking-widest text-[#D6537A] uppercase font-inter">
              Our Standards
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif-display font-black text-[#14301F] mt-2">
              Why Choose Us
            </h2>
            <p className="text-gray-400 text-sm mt-3 font-light">
              Delivering smiles and premium quality with every single delivery
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className={`${item.bg} group p-8 rounded-3xl border border-gray-200/40 text-center hover:shadow-soft-lg hover:shadow-rose-500/10 hover:scale-[1.03] transition-all duration-300`}
                >
                  <div className="w-14 h-14 mx-auto rounded-2xl bg-white border border-gray-100/80 flex items-center justify-center shadow-sm">
                    <Icon size={24} className={`${item.iconColor} icon-wiggle`} />
                  </div>
                  <h3 className="font-serif-display font-bold text-base text-[#14301F] mt-5">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-xs mt-2 font-light">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </RevealSection>

      {/* ─── Perfect For Every Occasion ─── */}
      <RevealSection className="relative py-24 bg-white border-b border-gray-100 overflow-hidden">
        <FloatingDecoration type="petal5" side="left" top="10%" size={72} opacity={0.1} delay={0} duration={15} animation="sway2" />
        <FloatingDecoration type="petal" side="right" top="18%" size={44} opacity={0.15} delay={1.5} duration={10} animation="sway3" color="#D6537A" />
        <FloatingDecoration type="leaf" side="right" top="auto" bottom="10%" size={52} opacity={0.14} delay={2} duration={12} animation="sway1" color="#C9A15A" />
        <FloatingDecoration type="petal6" side="left" top="auto" bottom="5%" size={48} opacity={0.1} delay={3} duration={11} animation="rotate" color="#C9A15A" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-xs font-bold tracking-widest text-[#D6537A] uppercase font-inter">
              Life Milestones
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif-display font-black text-[#14301F] mt-2">
              Perfect For Every Occasion
            </h2>
            <p className="text-gray-400 text-sm mt-3 font-light">
              Handcrafted flowers designed for all of life's beautiful moments
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {occasions.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  onClick={() => navigate("/occasions")}
                  className="group relative h-80 rounded-3xl overflow-hidden cursor-pointer shadow-soft hover:shadow-soft-lg hover:shadow-rose-500/15 hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300"
                >
                  <LazyImage
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                  <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                    <div className="w-11 h-11 rounded-full bg-white/20 backdrop-blur-md border border-white/10 flex items-center justify-center mb-4">
                      <Icon size={18} />
                    </div>
                    <h3 className="text-lg font-serif-display font-bold text-[#F7F0E8]">
                      {item.title}
                    </h3>
                    <p className="text-white/60 text-xs mt-1.5 font-light">{item.desc}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 text-white">
                      Explore <ArrowRight size={12} />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </RevealSection>

      {/* ─── Testimonials ─── */}
      <RevealSection className="relative py-24 bg-[#fafaf9]/60 overflow-hidden">
        <BokehLights spots={[
          { color: "from-rose-300/12 to-transparent", size: 240, top: "-6%", right: "-3%", anim: "bk-drift2", delay: 0, duration: 32 },
          { color: "from-amber-200/10 to-transparent", size: 200, bottom: "-8%", left: "8%", anim: "bk-drift4", delay: 3, duration: 28 },
          { color: "from-violet-200/8 to-transparent", size: 180, top: "40%", left: "45%", anim: "bk-float", delay: 1, duration: 26 },
        ]} />
        <FloatingDecoration type="petal5" side="left" top="8%" size={56} opacity={0.1} delay={0.5} duration={13} color="#C9A15A" />
        <FloatingDecoration type="petal6" side="right" top="12%" size={60} opacity={0.12} delay={0} duration={14} animation="sway2" />
        <FloatingDecoration type="leaf" side="right" top="auto" bottom="8%" size={48} opacity={0.16} delay={2} duration={11} animation="sway3" color="#14301F" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-widest text-[#D6537A] uppercase font-inter">
              Customer Reviews
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif-display font-black text-[#14301F] mt-2">
              What Our Customers Say
            </h2>
          </div>

          <div className="flex justify-center mb-16">
            <div className="flex items-center gap-5 bg-white border border-gray-100 rounded-3xl px-8 py-5 shadow-soft">
              <span className="text-4xl font-black text-[#14301F] font-serif-display">4.9</span>
              <div className="w-px h-10 bg-gray-200" />
              <div>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={13} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-xs text-gray-400 mt-1 font-semibold">Based on 2,400+ reviews</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 border border-gray-100 shadow-soft flex flex-col gap-6"
              >
                <Quote size={32} className="text-rose-300" />
                <div className="flex gap-0.5">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={12} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed font-light flex-1 italic">
                  "{item.review}"
                </p>
                <div className="flex items-center gap-3.5 pt-4 border-t border-gray-50">
                  <div
                    className={`w-10 h-10 rounded-full ${item.color} flex items-center justify-center text-white font-bold text-sm shadow-inner`}
                  >
                    {item.initials}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#14301F] leading-none">
                      {item.name}
                    </h4>
                    <p className="text-gray-400 text-[10px] uppercase font-bold tracking-wider mt-1">
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* ─── Instagram Gallery ─── */}
      <RevealSection className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-widest text-[#D6537A] uppercase font-inter">
              Follow Us
            </span>
            <h2 className="text-3xl font-serif-display font-black text-[#14301F] mt-2">
              Follow Our Floral Journey
            </h2>
            <p className="text-[#D6537A] font-bold mt-3 inline-flex items-center gap-1.5">
              <FaInstagram size={16} />
              <a
                href={INSTAGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                @ShivamFlorist
              </a>
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {galleryImages.map((img, index) => (
              <a
                href={INSTAGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
                className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-soft hover:shadow-soft-lg hover:scale-[1.02] transition-all duration-300"
              >
                <LazyImage
                  src={img}
                  alt="Floral journey picture on Instagram"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-[#D6537A]/0 group-hover:bg-[#D6537A]/30 transition duration-300 flex items-center justify-center">
                  <FaInstagram
                    size={22}
                    className="text-white opacity-0 group-hover:opacity-100 transition duration-300"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* ─── FAQ ─── */}
      <RevealSection className="py-24 bg-[#fafaf9]/60">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-widest text-[#D6537A] uppercase font-inter">
              Answers
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif-display font-black text-[#14301F] mt-2">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-400 text-sm mt-3 font-light">
              Everything you need to know about our flowers and shipping policies
            </p>
          </div>

          <div className="max-w-4xl mx-auto flex flex-col gap-4">
            {faqs.map((faq, index) => {
              const isSelected = openFaq === index;
              return (
                <div
                  key={index}
                  className="border border-gray-100 rounded-3xl overflow-hidden bg-white shadow-soft transition-all duration-300"
                >
                  <button
                    onClick={() => setOpenFaq(isSelected ? null : index)}
                    className="group w-full flex items-center justify-between gap-4 px-6 py-5 text-left font-bold text-[#14301F] hover:text-[#14301F] focus:outline-none transition-colors duration-300 hover:bg-[#F4C9D1]/30"
                  >
                    <span className="font-serif-display text-base leading-snug">{faq.q}</span>
                    <span className="w-8 h-8 rounded-full bg-[#F4C9D1]/50 flex items-center justify-center text-[#D6537A] shrink-0">
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
                        <div className="px-6 pb-5 text-gray-500 text-sm leading-relaxed font-light border-t border-gray-50/50 pt-3">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </RevealSection>

      {/* ─── Newsletter ─── */}
      <RevealSection className="relative py-24 bg-gradient-to-r from-#F4C9D1/50 via-pink-50/30 to-purple-100/40 overflow-hidden">
        <BokehLights spots={[
          { color: "from-rose-300/20 to-transparent", size: 280, top: "-8%", left: "-5%", anim: "bk-drift1", delay: 0, duration: 30 },
          { color: "from-amber-200/18 to-transparent", size: 220, bottom: "-10%", right: "10%", anim: "bk-drift4", delay: 3, duration: 28 },
          { color: "from-purple-300/12 to-transparent", size: 200, top: "60%", left: "40%", anim: "bk-float", delay: 1, duration: 26 },
        ]} />
        <FloatingDecoration type="petal5" side="left" top="15%" size={64} opacity={0.12} delay={0} duration={14} />
        <FloatingDecoration type="petal6" side="right" top="10%" size={52} opacity={0.1} delay={1.5} duration={12} animation="sway2" color="#C9A15A" />
        <FloatingDecoration type="leaf" side="left" top="auto" bottom="12%" size={44} opacity={0.15} delay={2} duration={10} animation="sway3" />
        <FloatingDecoration type="petal" side="right" top="auto" bottom="8%" size={40} opacity={0.12} delay={3} duration={11} animation="sway1" color="#D6537A" />
        <div className="max-w-7xl mx-auto text-center px-6 lg:px-8">
          <div className="w-14 h-14 bg-[#D6537A]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Mail size={24} className="text-[#D6537A]" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif-display font-black text-[#14301F] leading-tight">
            Join Our Flower Family
          </h2>
          <p className="text-gray-500 text-sm mt-3 font-light max-w-md mx-auto">
            Subscribe for exclusive discounts, floral tips, and advance access to our limited
            holiday collections.
          </p>

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
                  className="flex-1 border border-gray-200 bg-white rounded-full px-6 py-4 text-sm text-[#14301F] placeholder-gray-400 outline-none focus:border-rose-400 focus:ring-1 focus:ring-rose-300 transition-all"
                />
                <button
                  onClick={handleSubscribe}
                  className="bg-[#14301F] hover:bg-[#1a3320] text-white px-8 py-4 rounded-2xl font-bold text-xs tracking-widest uppercase hover:shadow-soft-lg hover:shadow-[#14301F]/30 hover:scale-[1.04] transition-all duration-300"
                >
                  Subscribe
                </button>
              </div>
            )}
          </div>

          <div className="flex items-center justify-center gap-3 mt-12">
            <a
              href={INSTAGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center text-[#D6537A] shadow-sm hover:-translate-y-1 transition duration-300"
            >
              <FaInstagram size={16} />
            </a>
            <a
              href={FACEBOOK_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center text-[#D6537A] shadow-sm hover:-translate-y-1 transition duration-300"
            >
              <FaFacebookF size={15} />
            </a>
          </div>
        </div>
      </RevealSection>

      {/* ─── WhatsApp Floating Button ─── */}
      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25d366] flex items-center justify-center shadow-xl shadow-emerald-400/30 hover:bg-[#20ba59] hover:shadow-2xl hover:shadow-emerald-400/50 hover:scale-[1.05] transition-all duration-300"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={26} color="white" fill="white" />
      </motion.a>
    </div>
  );
};

export default Home;
