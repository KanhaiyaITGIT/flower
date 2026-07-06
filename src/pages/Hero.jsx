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
  Users,
  Award,
  Package,
  Phone,
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
import imageF2 from "../assets/f2.png";

import imageOcc1 from "../assets/s18.png";
import imageOcc2 from "../assets/s34.png";
import imageOcc3 from "../assets/s46.png";
import imageOcc4 from "../assets/s64.png";

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
    const cardWidth = card ? card.offsetWidth + 20 : 300;
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
      image: imageOcc1,
    },
    {
      title: "Devotional",
      desc: "Celebrate your love story",
      icon: Heart,
      image: imageOcc2,
    },
    {
      title: "Decor",
      desc: "Mark every milestone in style",
      icon: PartyPopper,
      image: imageOcc3,
    },
    {
      title: "Thank You",
      desc: "Show your gratitude with blooms",
      icon: Gift,
      image: imageOcc4,
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
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#fff8f2] via-[#fef6ee] to-[#fafaf9] pt-20 lg:pt-14">
        <BokehLights spots={[
          { color: "from-rose-300/25 to-transparent", size: 280, top: "2%", right: "6%", anim: "bk-drift2", delay: 0, duration: 26 },
          { color: "from-amber-200/25 to-transparent", size: 240, top: "35%", left: "2%", anim: "bk-drift1", delay: 2, duration: 30 },
          { color: "from-emerald-200/20 to-transparent", size: 220, bottom: "8%", right: "20%", anim: "bk-float", delay: 4, duration: 28 },
          { color: "from-purple-200/15 to-transparent", size: 180, top: "12%", left: "35%", anim: "bk-drift3", delay: 1, duration: 24 },
        ]} />

        {/* ─── FnP-Style Category Shortcuts Row ─── */}
        <div className="relative w-full pb-2 lg:pb-4">
          <div className="overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex gap-6 md:gap-8 justify-start md:justify-center px-6 md:px-8 max-w-[1440px] mx-auto">
              {[
                { label: "Birthday", image: image1, link: "/category?cat=Birthday", discount: null },
                { label: "Anniversary", image: image4, link: "/category?cat=Anniversary", discount: null },
                { label: "Wedding", image: image7, link: "/category?cat=Wedding", discount: null },
                { label: "Balloons", image: image16, link: "/category?cat=Balloon", discount: "Up to 30% Off" },
                { label: "Devotional", image: image9, link: "/category?cat=Devotional", discount: null },
                { label: "Luxury", image: image26, link: "/category", discount: null },
                { label: "Gifts", image: image27, link: "/category", discount: "10% Off" },
                { label: "Roses", image: image6, link: "/category?cat=Anniversary", discount: null },
                { label: "Plants", image: image5, link: "/category?cat=Birthday", discount: null },
                { label: "Cakes", image: image8, link: "/category", discount: "Flat 15%" },
              ].map((cat, i) => (
                <Link
                  key={i}
                  to={cat.link}
                  className="flex flex-col items-center gap-2.5 shrink-0 group"
                >
                  <div className="relative w-[84px] h-[84px] md:w-24 md:h-24 rounded-full overflow-hidden border-[2.5px] border-white shadow-[0_4px_14px_rgba(0,0,0,0.08)] group-hover:shadow-[0_8px_24px_rgba(0,0,0,0.15)] transition-all duration-300">
                    <LazyImage
                      src={cat.image}
                      alt={cat.label}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {cat.discount && (
                      <div className="absolute -top-1 -right-1 bg-[#D6537A] text-white text-[8px] md:text-[9px] font-bold px-1.5 py-0.5 rounded-full shadow-md whitespace-nowrap">
                        {cat.discount}
                      </div>
                    )}
                  </div>
                  <span className="text-xs md:text-sm font-semibold text-gray-600 group-hover:text-[#14301F] transition-colors whitespace-nowrap">
                    {cat.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* ─── Hero Promotional Card ─── */}
        <div className="max-w-[1440px] mx-auto px-6 lg:px-8 pb-4 lg:pb-6">
          <div className="relative bg-[#F5EFE6] rounded-[28px] overflow-hidden shadow-[0_20px_60px_-15px_rgba(214,83,122,0.25),0_10px_30px_-10px_rgba(201,161,90,0.2)] ring-1 ring-[#C9A15A]/20">

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
            <div className="grid lg:grid-cols-2 min-h-[380px] lg:min-h-[520px]">
              {/* ─── LEFT: TEXT CONTENT ─── */}
              <div className="flex flex-col justify-center px-7 lg:px-12 py-10 lg:py-12 order-2 lg:order-1">
                <span className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-[0.2em] uppercase text-[#7a8c6b] font-inter mb-3">
                  <span className="w-6 h-[1.5px] bg-[#7a8c6b]/40 inline-block" />
                  Fresh Daily
                </span>

                <h1 className="font-inter font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-[#1a1a1a] leading-[1.08] tracking-tight">
                  Luxury
                  <span className="block bg-gradient-to-r from-[#D6537A] via-[#C9A15A] to-[#e8a03d] bg-clip-text text-transparent">Blooms</span>
                </h1>

                <p className="text-gray-500 text-sm lg:text-base mt-3 max-w-md leading-relaxed font-inter">
                  Handpicked fresh every morning. Artisan bouquets, premium arrangements and thoughtful gifts — curated for life's most beautiful moments.
                </p>

                {/* CTA Buttons — gradient + outline pill shape */}
                <div className="flex flex-col sm:flex-row gap-3 mt-7 lg:mt-8">
                  <Link
                    to="/category"
                    className="group inline-flex items-center justify-center gap-2 px-7 lg:px-8 py-3.5 lg:py-4 bg-gradient-to-r from-[#14301F] to-[#1f4a30] text-white font-bold text-xs lg:text-sm tracking-wider uppercase rounded-full shadow-md hover:shadow-[0_8px_30px_rgba(201,161,90,0.45)] hover:scale-[1.04] transition-all duration-300"
                  >
                    <ShoppingBag size={16} className="group-hover:scale-110 transition-transform icon-wiggle" />
                    <span>Shop Collection</span>
                  </Link>
                  <Link
                    to="/occasions"
                    className="group inline-flex items-center justify-center gap-2 px-7 lg:px-8 py-3.5 lg:py-4 bg-white text-[#1a1a1a] font-bold text-xs lg:text-sm tracking-wider uppercase rounded-full border-2 border-[#D6537A]/30 hover:bg-gradient-to-r hover:from-[#D6537A] hover:to-[#C9A15A] hover:text-white hover:border-transparent hover:shadow-[0_8px_30px_rgba(214,83,122,0.35)] hover:scale-[1.04] transition-all duration-300"
                  >
                    <Flower2 size={16} className="text-[#C9A15A] group-hover:text-white group-hover:rotate-12 transition-all icon-wiggle" />
                    <span>Explore Occasions</span>
                  </Link>
                </div>
              </div>

              {/* ─── RIGHT: HERO IMAGE (full photo, no crop) ─── */}
              <div className="relative order-1 lg:order-2 min-h-[380px] lg:min-h-[520px] overflow-hidden bg-gradient-to-br from-[#f0b088]/25 via-[#F5EFE6] to-[#9fd4c4]/30">
                {/* Soft gradient overlay on left edge for smooth blend */}
                <div className="absolute inset-y-0 left-0 w-16 lg:w-24 bg-gradient-to-r from-[#F5EFE6] to-transparent z-10 pointer-events-none hidden lg:block" />
                <LazyImage
                  src={hero}
                  alt="Luxurious fresh flower bouquet arrangement - Premium floral delivery"
                  className="absolute inset-0 w-full h-full object-contain object-center"
                />
                {/* Bottom fade */}
                <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-[#F5EFE6] to-transparent pointer-events-none lg:hidden" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Trust Stats Strip ─── */}
      <section className="relative bg-gradient-to-r from-[#14301F] via-[#1f4a30] to-[#14301F] py-8 lg:py-10 overflow-hidden">
        <BokehLights spots={[
          { color: "from-rose-400/15 to-transparent", size: 200, top: "-20%", left: "10%", anim: "bk-drift1", delay: 0, duration: 26 },
          { color: "from-amber-300/12 to-transparent", size: 180, bottom: "-20%", right: "15%", anim: "bk-drift3", delay: 2, duration: 24 },
        ]} />
        <div className="max-w-[1440px] mx-auto px-6 relative grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {[
            { icon: Users, value: "10,000+", label: "Happy Customers" },
            { icon: Package, value: "50,000+", label: "Orders Delivered" },
            { icon: Award, value: "5+ Years", label: "Trusted Experience" },
            { icon: Clock, value: "24/7", label: "Support Available" },
          ].map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div key={i} className="group flex items-center gap-3 lg:gap-4 justify-center lg:justify-start">
                <div className="w-11 h-11 lg:w-12 lg:h-12 shrink-0 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center group-hover:bg-[#C9A15A]/20 group-hover:scale-110 transition-all duration-300">
                  <Icon size={20} className="text-[#C9A15A]" />
                </div>
                <div>
                  <p className="text-white font-serif-display font-bold text-lg lg:text-xl leading-none">{stat.value}</p>
                  <p className="text-white/50 text-[10px] lg:text-xs mt-1.5 uppercase tracking-wider font-semibold">{stat.label}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ─── Explore Our Exquisite Range ─── */}
      <RevealSection className="relative py-24 bg-gradient-to-b from-[#faf8f5] via-[#fcf5ee] to-[#faf8f5] border-b border-[#eae4dc] overflow-hidden">
        <BokehLights spots={[
          { color: "from-rose-200/12 to-transparent", size: 240, top: "-5%", left: "15%", anim: "bk-drift2", delay: 0, duration: 30 },
          { color: "from-amber-100/10 to-transparent", size: 200, bottom: "-6%", right: "10%", anim: "bk-drift1", delay: 2, duration: 26 },
          { color: "from-[#C9A15A]/6 to-transparent", size: 180, top: "50%", left: "5%", anim: "bk-float", delay: 4, duration: 28 },
        ]} />
        <FloatingDecoration type="petal" side="left" top="15%" size={40} opacity={0.1} delay={0} duration={12} animation="sway3" color="#D6537A" />
        <FloatingDecoration type="leaf" side="right" top="auto" bottom="12%" size={44} opacity={0.12} delay={2} duration={11} animation="sway2" color="#14301F" />
        <FloatingDecoration type="petal6" side="right" top="8%" size={48} opacity={0.07} delay={1} duration={14} animation="rotate" color="#C9A15A" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-px bg-gradient-to-r from-transparent via-[#C9A15A]/30 to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-40 h-px bg-gradient-to-r from-transparent via-[#C9A15A]/30 to-transparent" />
        <div className="max-w-[1440px] mx-auto px-6 relative">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="w-6 h-px bg-gradient-to-r from-transparent to-[#C9A15A]/60" />
              <span className="text-[11px] font-bold tracking-[0.25em] text-[#C9A15A] uppercase font-inter">
                Flower Collection
              </span>
              <span className="w-6 h-px bg-gradient-to-l from-transparent to-[#C9A15A]/60" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-serif-display font-black text-[#1a0f0a] mt-2 leading-tight">
              Explore Our Exquisite Range
            </h2>
            <div className="flex items-center justify-center gap-3 mt-4 mb-3">
              <span className="text-[#C9A15A]/40 text-[10px] tracking-[0.3em] uppercase font-light">❀</span>
              <span className="text-[#C9A15A]/40 text-[10px] tracking-[0.3em] uppercase font-light">✦</span>
              <span className="text-[#C9A15A]/40 text-[10px] tracking-[0.3em] uppercase font-light">❀</span>
            </div>
            <p className="text-[#8a7a6e] text-sm mt-2 font-light max-w-xl mx-auto">
              Handpicked blooms arranged by nature, ready for every moment that matters
            </p>
          </div>

          <div className="w-full flex flex-row flex-nowrap md:grid md:grid-cols-6 gap-6 max-w-7xl mx-auto overflow-x-auto md:overflow-x-visible px-4 py-8 scrollbar-hide [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {[
              { id: 1, title: "Roses", subtitle: "Soft Rose Pink", bg: "bg-gradient-to-b from-[#FFF0F2] to-[#FFE4E8]", img: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=500&q=80" },
              { id: 2, title: "Gerberas", subtitle: "Soft Milky Cream", bg: "bg-gradient-to-b from-[#FFFDF0] to-[#FFF9D6]", img: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=500&q=80" },
              { id: 3, title: "Orchids", subtitle: "Soft Lilac/Lavender", bg: "bg-gradient-to-b from-[#FBF5FF] to-[#F3E5FF]", img: "https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?auto=format&fit=crop&w=500&q=80" },
              { id: 4, title: "Lilies", subtitle: "Soft Apricot Peachy Tint", bg: "bg-gradient-to-b from-[#FFF9F2] to-[#FFEEDC]", img: "https://images.unsplash.com/photo-1508747703725-719777637510?auto=format&fit=crop&w=500&q=80" },
              { id: 5, title: "Carnations", subtitle: "Soft Coral Bloom", bg: "bg-gradient-to-b from-[#FFF5F7] to-[#FFE6EC]", img: "https://images.unsplash.com/photo-1550950158-d0d960dff51b?auto=format&fit=crop&w=500&q=80" },
              { id: 6, title: "Sunflowers", subtitle: "Soft Primrose Yellow", bg: "bg-gradient-to-b from-[#FFFFF2] to-[#FFFDE0]", img: "https://images.unsplash.com/photo-1596436889106-be35e843f974?auto=format&fit=crop&w=500&q=80" },
            ].map((item) => (
              <div
                key={item.id}
                className="w-[200px] sm:w-[220px] md:w-full h-[350px] sm:h-[390px] flex-shrink-0 group rounded-[24px] border border-white/70 shadow-[0_12px_40px_-15px_rgba(20,48,31,0.06)] bg-white overflow-hidden transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_30px_60px_-15px_rgba(20,48,31,0.14)] flex flex-col snap-start"
              >
                <div className={`h-[68%] w-full ${item.bg} flex items-center justify-center p-4 relative group-hover:brightness-[1.02] transition-all duration-500`}>
                  <img
                    src={item.img}
                    alt={item.title}
                    loading="lazy"
                    className="max-w-full max-h-full object-contain filter drop-shadow-[0_12px_20px_rgba(0,0,0,0.08)] transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_16px_28px_rgba(0,0,0,0.10)]"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-b from-transparent to-white/60 pointer-events-none" />
                </div>
                <div className="flex-1 bg-gradient-to-b from-white via-white to-[#faf8f5] backdrop-blur-sm flex flex-col items-center justify-center px-4 border-t border-white/80">
                  <span className="bg-white text-[#14301F] text-xs font-bold uppercase tracking-wider py-2 px-6 rounded-full shadow-sm mx-auto block max-w-max border border-gray-50 ring-1 ring-transparent hover:ring-[#C9A15A]/30 transition-all duration-300">
                    {item.title}
                  </span>
                  <span className="flex items-center gap-2 mt-2.5">
                    <span className="text-[#C9A15A]/40 text-[6px]">●</span>
                    <span className="text-[10px] sm:text-[11px] text-[#C9A15A]/80 font-medium tracking-wide text-center block">
                      {item.subtitle}
                    </span>
                    <span className="text-[#C9A15A]/40 text-[6px]">●</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* ─── Shop By Category ─── */}
      <RevealSection className="relative pt-16 lg:pt-20 pb-28 bg-gradient-to-b from-[#faf6f0] via-[#f5ede4] to-[#e8ddd0] border-b border-[#C9A15A]/10 overflow-hidden">
        {/* Subtle cream watercolor paper texture overlay */}
        <div className="absolute inset-0 opacity-[0.035] pointer-events-none mix-blend-multiply"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='120' height='120' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px',
          }}
        />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNDOUExNUEiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-60" />
        <BokehLights spots={[
          { color: "from-rose-300/20 to-transparent", size: 300, top: "-8%", right: "-4%", anim: "bk-drift2", delay: 0, duration: 32 },
          { color: "from-amber-200/18 to-transparent", size: 240, bottom: "-10%", left: "5%", anim: "bk-drift1", delay: 3, duration: 28 },
          { color: "from-[#C9A15A]/10 to-transparent", size: 280, top: "50%", left: "50%", anim: "bk-float", delay: 1, duration: 30 },
          { color: "from-rose-200/15 to-transparent", size: 200, top: "20%", left: "10%", anim: "bk-drift3", delay: 2, duration: 26 },
        ]} />
        <FloatingDecoration type="rose" side="left" top="12%" size={72} opacity={0.1} delay={0} duration={16} animation="bloom" color="#D6537A" />
        <FloatingDecoration type="leaf" side="right" top="20%" size={60} opacity={0.15} delay={1.5} duration={12} animation="sway2" color="#14301F" />
        <FloatingDecoration type="lotus" side="right" top="auto" bottom="12%" size={56} opacity={0.08} delay={2} duration={18} animation="drift-bloom" color="#C9A15A" />
        <FloatingDecoration type="petal5" side="left" top="auto" bottom="8%" size={48} opacity={0.1} delay={2.5} duration={14} animation="sway3" color="#C9A15A" />
        <FloatingDecoration type="petal6" side="left" top="35%" size={40} opacity={0.08} delay={1} duration={15} animation="sway1" color="#D6537A" />
        <FloatingDecoration type="leaf" side="right" top="55%" size={44} opacity={0.12} delay={3} duration={10} animation="sway3" color="#C9A15A" />
        {/* Extreme corner floral illustrations */}
        <div className="absolute -top-4 -left-4 w-36 h-36 opacity-[0.07] pointer-events-none rotate-[15deg]">
          <Flower2 size={144} strokeWidth={0.8} className="text-[#D6537A]" />
        </div>
        <div className="absolute -bottom-5 -right-5 w-44 h-44 opacity-[0.06] pointer-events-none -rotate-[18deg]">
          <Leaf size={176} strokeWidth={0.7} className="text-[#C9A15A]" />
        </div>
        <div className="max-w-[1440px] mx-auto px-4 lg:px-6 relative">
          <div className="text-center mb-6 lg:mb-8">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-gradient-to-r from-transparent to-[#C9A15A]/60" />
              <span className="text-[11px] font-bold tracking-[0.25em] text-[#C9A15A] uppercase font-inter">
                Curated Collections
              </span>
              <span className="w-8 h-px bg-gradient-to-l from-transparent to-[#C9A15A]/60" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-serif-display font-black text-[#1a0f0a] mt-2 leading-tight">
              Shop By Category
            </h2>
            <p className="text-[#8a7a6e] text-sm mt-3 font-light max-w-lg mx-auto">
              Find the perfect arrangements designed for your special moments
            </p>
          </div>

          <div className="relative px-0.5">
            <button
              onClick={() => scrollSlider(categorySliderRef, "left")}
              className="absolute -left-1.5 lg:-left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/70 backdrop-blur-md border border-white/60 shadow-[0_4px_16px_rgba(0,0,0,0.06)] flex items-center justify-center text-gray-400 hover:bg-white/90 hover:text-[#1a0f0a] hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)] hover:scale-105 transition-all duration-300"
              aria-label="Scroll left"
            >
              <ChevronLeft size={15} />
            </button>

            <div
              ref={categorySliderRef}
              className="flex gap-4 lg:gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-6 scrollbar-hide [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden pr-2 lg:pr-4"
            >
              {categories.map((item, index) => {
                const IconComponent = cardIcons[index];
                return (
                  <div
                    key={index}
                    data-slide-card
                    onClick={() => navigate(`/category?cat=${encodeURIComponent(item.category)}`)}
                    className="group rounded-[20px] overflow-hidden bg-white shadow-[0_4px_20px_-6px_rgba(0,0,0,0.07)] hover:shadow-[0_16px_40px_-12px_rgba(0,0,0,0.12)] hover:-translate-y-[5px] transition-all duration-300 ease-in-out cursor-pointer shrink-0 min-w-[180px] w-[180px] sm:w-[220px] lg:w-[240px]"
                  >
                    <div className="h-[160px] sm:h-[200px] lg:h-[250px] overflow-hidden relative bg-[#f5ede4]">
                      <img
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1a0f0a]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out" />
                      <div className="absolute top-4 left-4 z-10">
                        <span className="inline-block px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-[9px] font-bold tracking-widest uppercase text-[#C9A15A] shadow-sm border border-[#C9A15A]/20">
                          Featured
                        </span>
                      </div>
                      <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1.5 bg-white/85 backdrop-blur-sm rounded-full text-[8px] font-bold tracking-wider text-[#C9A15A] shadow-sm border border-[#C9A15A]/20">
                          <Gift size={10} className="text-[#D6537A]" />
                          Gift Wrap
                        </span>
                      </div>
                      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-in-out z-10">
                        <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-[#D6537A] to-rose-500 text-white text-[10px] font-bold tracking-widest uppercase px-5 py-2.5 rounded-full shadow-lg shadow-rose-500/25 hover:shadow-rose-500/40">
                          Shop Now <ArrowRight size={11} />
                        </span>
                      </div>
                      {/* Circular emblem at image-text intersection */}
                      <div className="absolute -bottom-[20px] left-1/2 -translate-x-1/2 z-20">
                        <div className="w-9 h-9 lg:w-10 lg:h-10 rounded-full bg-white shadow-[0_4px_14px_rgba(0,0,0,0.06)] border-[2.5px] border-[#C9A15A]/20 flex items-center justify-center group-hover:border-[#C9A15A]/50 group-hover:shadow-[0_4px_18px_rgba(201,161,90,0.15)] transition-all duration-300 ease-in-out">
                          <IconComponent size={15} className="text-[#C9A15A] group-hover:text-[#D6537A] transition-colors duration-300" />
                        </div>
                      </div>
                    </div>
                    <div className="pt-7 lg:pt-8 pb-5 lg:pb-6 px-5 lg:px-6 text-center">
                      <h3 className="font-serif-display font-bold text-base lg:text-lg text-[#14301F] group-hover:text-[#D6537A] transition-colors duration-300">
                        {item.title}
                      </h3>
                      <div className="flex items-center justify-center gap-1.5 mt-2">
                        <span className="text-[#C9A15A]/60 text-[10px] tracking-wider">—</span>
                        <span className="text-[#C9A15A] text-[10px]">❀</span>
                        <span className="text-[#C9A15A]/60 text-[10px] tracking-wider">—</span>
                        <span className="text-[#8a7a6e] text-xs font-medium tracking-wide ml-1">{item.products}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <button
              onClick={() => scrollSlider(categorySliderRef, "right")}
              className="absolute -right-1.5 lg:-right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/70 backdrop-blur-md border border-white/60 shadow-[0_4px_16px_rgba(0,0,0,0.06)] flex items-center justify-center text-gray-400 hover:bg-white/90 hover:text-[#1a0f0a] hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)] hover:scale-105 transition-all duration-300"
              aria-label="Scroll right"
            >
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </RevealSection>

      {/* ─── Best Sellers ─── */}
      <RevealSection className="py-24 bg-gradient-to-b from-[#fdf6f0] via-[#faf3ec] to-[#fdf6f0]">
        <div className="max-w-[1440px] mx-auto px-6">
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
                  className="bg-white rounded-3xl overflow-hidden ring-1 ring-gray-100 hover:ring-[#C9A15A]/40 shadow-soft hover:shadow-[0_20px_40px_-10px_rgba(214,83,122,0.25)] hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 shrink-0 w-[80vw] sm:w-[280px] snap-start flex flex-col"
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
                        {item.price === "acceptable" ? <a href="tel:9540849659" className="inline-flex items-center gap-1.5"><Phone size={14} className="icon-wiggle" /> Call for Price</a> : item.price}
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
      <RevealSection className="py-24 bg-gradient-to-br from-[#0d1f0f] via-[#14301F] to-[#0d1f0f] relative overflow-hidden">
        <BokehLights spots={[
          { color: "from-rose-400/20 to-transparent", size: 300, top: "-8%", right: "-5%", anim: "bk-drift1", delay: 0, duration: 28 },
          { color: "from-amber-300/15 to-transparent", size: 250, bottom: "-10%", left: "-4%", anim: "bk-drift2", delay: 2, duration: 32 },
          { color: "from-pink-400/15 to-transparent", size: 200, top: "50%", left: "35%", anim: "bk-float", delay: 4, duration: 24 },
          { color: "from-violet-400/10 to-transparent", size: 260, top: "15%", right: "25%", anim: "bk-drift3", delay: 1, duration: 30 },
        ]} />
        <FloatingDecoration type="rose" side="right" top="8%" size={80} opacity={0.08} delay={0} duration={18} animation="bloom" color="#D6537A" />
        <FloatingDecoration type="leaf" side="left" top="auto" bottom="12%" size={56} opacity={0.12} delay={2} duration={14} animation="sway3" color="#C9A15A" />
        <FloatingDecoration type="petal5" side="right" top="auto" bottom="8%" size={48} opacity={0.07} delay={3} duration={16} animation="sway1" color="#D6537A" />
        {/* Subtle gold fleck overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #C9A15A 1px, transparent 1px), radial-gradient(circle at 75% 75%, #C9A15A 1px, transparent 1px)`,
            backgroundSize: '60px 60px, 80px 80px',
          }}
        />
        {/* Decorative gold border accent */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-px bg-gradient-to-r from-transparent via-[#C9A15A]/30 to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-40 h-px bg-gradient-to-r from-transparent via-[#C9A15A]/30 to-transparent" />

        <div className="max-w-[1440px] mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="rounded-[24px] overflow-hidden shadow-[0_20px_60px_-20px_rgba(0,0,0,0.5)] ring-1 ring-white/10">
                <LazyImage
                  src={image28}
                  alt="Sunset Rose Grand Bouquet - Deal of the Day"
                  className="w-full h-[480px] object-cover transition-all duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1f0f]/40 via-transparent to-transparent pointer-events-none" />
              </div>
              <div className="absolute -top-4 -left-4 bg-gradient-to-br from-[#D6537A] to-rose-600 text-white rounded-2xl px-6 py-4 shadow-[0_8px_24px_rgba(214,83,122,0.35)] -rotate-3 hover:rotate-0 transition-all duration-300">
                <p className="text-[10px] uppercase tracking-widest font-black flex items-center gap-1">
                  <Percent size={11} /> Today Only
                </p>
                <p className="text-2xl font-black mt-1 font-serif-display">40% OFF</p>
              </div>
              {/* Gold corner flourish */}
              <div className="absolute -bottom-3 -right-3 w-16 h-16 opacity-20 pointer-events-none">
                <div className="w-full h-full border-r-2 border-b-2 border-[#C9A15A] rounded-br-[24px]" />
              </div>
            </div>

            <div className="text-white flex flex-col gap-7">
              <div>
                <span className="inline-flex items-center gap-2 bg-white/[0.06] backdrop-blur-sm text-[#C9A15A] text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full border border-white/[0.08] shadow-sm">
                  <Clock size={12} className="animate-pulse" /> Deal of the Day
                </span>
                <div className="inline-flex items-center gap-3 mt-6 mb-4">
                  <span className="w-8 h-px bg-gradient-to-r from-transparent to-[#C9A15A]/40" />
                  <span className="text-[#C9A15A]/50 text-[10px] tracking-[0.3em] uppercase font-light">✦</span>
                  <span className="w-8 h-px bg-gradient-to-l from-transparent to-[#C9A15A]/40" />
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-display font-black leading-tight text-[#F7F0E8]">
                  Sunset Rose Grand Bouquet
                </h2>
                <p className="text-gray-400 text-sm mt-4 leading-relaxed font-light max-w-lg">
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
                  className="text-xl sm:text-2xl font-black text-[#C9A15A] hover:text-[#dfc4a3] transition-colors font-serif-display tracking-tight"
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
                  <div
                    key={t.label}
                    className="bg-white/[0.04] backdrop-blur-sm border border-white/[0.06] rounded-2xl px-6 py-4 text-center min-w-[82px] hover:bg-white/[0.07] transition-colors duration-300"
                  >
                    <p className="text-2xl sm:text-3xl font-bold text-[#F7F0E8] tabular-nums leading-none tracking-tight">
                      {pad(t.value)}
                    </p>
                    <p className="text-[9px] text-[#C9A15A] uppercase tracking-wider font-bold mt-2.5">
                      {t.label}
                    </p>
                  </div>
                ))}
              </div>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-2 inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#D6537A] to-rose-500 hover:from-rose-500 hover:to-[#D6537A] text-white px-10 py-4 rounded-2xl font-bold text-xs tracking-widest uppercase shadow-lg shadow-rose-500/25 hover:shadow-rose-500/40 hover:scale-[1.03] hover:-translate-y-1 transition-all duration-300 max-w-max"
              >
                Grab This Deal <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* ─── How It Works ─── */}
      <RevealSection className="relative py-24 bg-[radial-gradient(circle_at_top,_#FAF5EF,_#F4EDE4,_#EAE0D5)] border-b border-[#ddd5c8] overflow-hidden">
        {/* Geometric blur blobs */}
        <div className="pointer-events-none absolute -top-32 -left-32 w-96 h-96 bg-[#E8C4B8]/20 rounded-full blur-3xl opacity-30" />
        <div className="pointer-events-none absolute -bottom-32 -right-32 w-80 h-80 bg-[#D4A373]/15 rounded-full blur-3xl opacity-30" />
        <div className="pointer-events-none absolute top-1/3 right-1/4 w-64 h-64 bg-[#F4C9D1]/15 rounded-full blur-3xl opacity-20" />
        <BokehLights spots={[
          { color: "from-rose-200/12 to-transparent", size: 240, top: "-5%", left: "20%", anim: "bk-drift3", delay: 0, duration: 30 },
          { color: "from-amber-100/10 to-transparent", size: 200, bottom: "-6%", right: "5%", anim: "bk-drift1", delay: 2, duration: 28 },
          { color: "from-purple-200/8 to-transparent", size: 180, top: "30%", right: "30%", anim: "bk-float", delay: 4, duration: 26 },
        ]} />
        <FloatingDecoration type="petal" side="left" top="18%" size={40} opacity={0.14} delay={0} duration={10} animation="sway3" color="#D6537A" />
        <FloatingDecoration type="petal5" side="right" top="12%" size={70} opacity={0.1} delay={2} duration={15} animation="sway1" />
        <FloatingDecoration type="petal6" side="left" top="auto" bottom="8%" size={48} opacity={0.12} delay={1} duration={12} animation="sway2" color="#C9A15A" />
        <FloatingDecoration type="leaf" side="right" top="auto" bottom="15%" size={44} opacity={0.15} delay={3} duration={9} animation="sway3" />
        <div className="max-w-[1440px] mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <span className="text-xs font-bold tracking-[0.2em] text-[#D6537A] uppercase font-inter">
              Simple Process
            </span>
            <h2 className="text-4xl sm:text-5xl font-serif-display font-black text-[#14301F] mt-3 tracking-tight">
              How It Works
            </h2>
            <p className="text-gray-400 text-sm mt-4 font-light max-w-xl mx-auto leading-relaxed">
              From our garden directly to your doorstep in three easy steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="group relative min-h-[340px] w-full backdrop-blur-md bg-white/70 rounded-[24px] p-8 pt-14 border border-white/40 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.04)] transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-3 hover:shadow-[0_20px_40px_-15px_rgba(20,48,31,0.08)] text-center overflow-hidden"
                >
                  {/* Hover gradient fill overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#14301F] to-[#1F4930] opacity-0 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] rounded-[24px]" />

                  {/* Number — top-left overlap */}
                  <span className="absolute -top-6 left-4 text-8xl font-black text-[#14301F]/10 group-hover:text-[#E6C280] font-serif-display select-none leading-none tracking-tighter transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-110 group-hover:translate-x-1">
                    {pad(index + 1)}
                  </span>

                  {/* Icon — double-bordered circular badge */}
                  <div className="relative z-10 w-16 h-16 mx-auto rounded-full bg-[#FDF2F4] flex items-center justify-center mb-6 ring-2 ring-[#FDF2F4]/80 shadow-inner transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-110 group-hover:bg-[#E6C280] group-hover:ring-[#E6C280]/50 group-hover:shadow-lg group-hover:shadow-[#E6C280]/20">
                    <Icon size={24} className="text-[#D4A373] group-hover:text-white transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]" />
                  </div>

                  {/* Title */}
                  <h3 className="relative z-10 font-serif-display font-bold text-xl text-[#14301F] group-hover:text-white transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="relative z-10 text-gray-400 group-hover:text-white/80 text-xs mt-3 leading-relaxed font-light max-w-[260px] mx-auto transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </RevealSection>

      {/* ─── Why Choose Us ─── */}
      <RevealSection className="relative py-24 bg-gradient-to-b from-[#fdf6f0] via-[#faf3ec] to-[#fdf6f0] overflow-hidden">
        <FloatingDecoration type="petal5" side="left" top="15%" size={56} opacity={0.12} delay={1} duration={14} color="#D6537A" />
        <FloatingDecoration type="leaf" side="right" top="25%" size={60} opacity={0.18} delay={0} duration={11} animation="sway2" color="#14301F" />
        <FloatingDecoration type="petal6" side="left" top="auto" bottom="12%" size={42} opacity={0.1} delay={2.5} duration={13} animation="sway3" color="#C9A15A" />
        <div className="max-w-[1440px] mx-auto px-6">
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

      {/* ─── Plan The Perfect Surprise ─── */}
      <RevealSection className="relative py-24 bg-gradient-to-b from-[#faf8f5] via-[#fdf6f0] to-[#faf8f5] border-b border-[#eae4dc] overflow-hidden">
        <BokehLights spots={[
          { color: "from-rose-200/10 to-transparent", size: 220, top: "-4%", left: "8%", anim: "bk-drift2", delay: 0, duration: 30 },
          { color: "from-amber-100/8 to-transparent", size: 180, bottom: "-6%", right: "10%", anim: "bk-drift1", delay: 2, duration: 26 },
          { color: "from-[#C9A15A]/6 to-transparent", size: 200, top: "40%", right: "30%", anim: "bk-float", delay: 3, duration: 28 },
        ]} />
        <FloatingDecoration type="petal5" side="left" top="12%" size={56} opacity={0.08} delay={0} duration={14} animation="sway2" color="#C9A15A" />
        <FloatingDecoration type="leaf" side="right" top="auto" bottom="10%" size={44} opacity={0.1} delay={2} duration={12} animation="sway3" color="#14301F" />
        <FloatingDecoration type="petal6" side="left" top="auto" bottom="6%" size={40} opacity={0.07} delay={1.5} duration={11} animation="rotate" color="#D6537A" />
        <div className="max-w-[1440px] mx-auto px-6 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="w-6 h-px bg-gradient-to-r from-transparent to-[#C9A15A]/60" />
              <span className="text-[11px] font-bold tracking-[0.25em] text-[#C9A15A] uppercase font-inter">
                Surprise Someone Special
              </span>
              <span className="w-6 h-px bg-gradient-to-l from-transparent to-[#C9A15A]/60" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-serif-display font-black text-[#1a0f0a] mt-2 leading-tight">
              Plan The Perfect Surprise
            </h2>
            <div className="flex items-center justify-center gap-3 mt-4 mb-3">
              <span className="text-[#C9A15A]/40 text-[10px] tracking-[0.3em] uppercase font-light">❀</span>
              <span className="text-[#C9A15A]/40 text-[10px] tracking-[0.3em] uppercase font-light">✦</span>
              <span className="text-[#C9A15A]/40 text-[10px] tracking-[0.3em] uppercase font-light">❀</span>
            </div>
            <p className="text-[#8a7a6e] text-sm mt-2 font-light max-w-xl mx-auto">
              Thoughtfully crafted floral gifts for every kind of love
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
            {[
              { id: 1, title: 'For Him', bg: 'bg-[#EBF3FC]', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80' },
              { id: 2, title: 'For Her', bg: 'bg-[#FCEBEB]', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80' },
              { id: 3, title: 'For Them', bg: 'bg-[#FCF5EB]', img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80' },
            ].map((item) => (
              <div key={item.id} className="group text-center">
                <div className="relative mb-7">
                  <div className={`${item.bg} aspect-square rounded-[40%_60%_70%_30%_/_40%_50%_60%_50%] overflow-hidden shadow-[0_8px_28px_-6px_rgba(0,0,0,0.06)] transition-all duration-500 ease-out hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.12)] hover:-translate-y-1.5`}>
                    <div className="absolute inset-0 ring-1 ring-inset ring-black/[0.04] rounded-[inherit] pointer-events-none" />
                    <img
                      src={item.img}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                  </div>
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 z-10">
                    <button className="bg-[#14301F] text-white text-[11px] font-bold tracking-[0.15em] uppercase px-7 py-3 rounded-full inline-flex items-center justify-center gap-2.5 hover:bg-[#1f472e] shadow-[0_4px_16px_rgba(20,48,31,0.15)] hover:shadow-[0_8px_24px_rgba(20,48,31,0.25)] transition-all duration-300 hover:-translate-y-0.5">
                      {item.title}
                      <span className="w-5 h-5 rounded-full bg-white/15 flex items-center justify-center text-white text-[10px] leading-none backdrop-blur-sm">→</span>
                    </button>
                  </div>
                </div>
                <p className="text-[#8a7a6e]/60 text-[10px] tracking-[0.2em] uppercase font-medium mt-1">
                  Shop {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* ─── Choose a Favourite Colour ─── */}
      <RevealSection className="relative py-20 bg-gradient-to-b from-[#faf8f5] via-white to-[#faf8f5] border-b border-[#eae4dc] overflow-hidden">
        <BokehLights spots={[
          { color: "from-rose-200/8 to-transparent", size: 180, top: "-3%", right: "15%", anim: "bk-drift2", delay: 1, duration: 28 },
          { color: "from-amber-100/8 to-transparent", size: 200, bottom: "-5%", left: "5%", anim: "bk-drift4", delay: 3, duration: 24 },
          { color: "from-violet-200/6 to-transparent", size: 160, top: "50%", left: "40%", anim: "bk-float", delay: 2, duration: 26 },
        ]} />
        <FloatingDecoration type="petal6" side="left" top="10%" size={48} opacity={0.07} delay={0} duration={13} animation="sway1" color="#C9A15A" />
        <FloatingDecoration type="leaf" side="right" top="auto" bottom="8%" size={44} opacity={0.09} delay={2.5} duration={11} animation="sway3" color="#14301F" />
        <div className="max-w-[1440px] mx-auto px-6 relative">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="w-6 h-px bg-gradient-to-r from-transparent to-[#C9A15A]/60" />
              <span className="text-[11px] font-bold tracking-[0.25em] text-[#C9A15A] uppercase font-inter">
                Pick Your Palette
              </span>
              <span className="w-6 h-px bg-gradient-to-l from-transparent to-[#C9A15A]/60" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-serif-display font-black text-[#1a0f0a] mt-2 leading-tight">
              Choose a Favourite Colour
            </h2>
            <div className="flex items-center justify-center gap-3 mt-4 mb-3">
              <span className="text-[#C9A15A]/40 text-[10px] tracking-[0.3em] uppercase font-light">✦</span>
              <span className="text-[#C9A15A]/40 text-[10px] tracking-[0.3em] uppercase font-light">❀</span>
              <span className="text-[#C9A15A]/40 text-[10px] tracking-[0.3em] uppercase font-light">✦</span>
            </div>
            <p className="text-[#8a7a6e] text-sm mt-2 font-light max-w-xl mx-auto">
              Browse our blooms sorted by your favourite shade
            </p>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-y-8 gap-x-6 max-w-4xl mx-auto">
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
              <div key={color.label} className="text-center group">
                <div className="w-[82px] h-[82px] rounded-full overflow-hidden border-[3px] border-white/80 shadow-[0_4px_16px_rgba(0,0,0,0.05)] cursor-pointer transition-all duration-500 ease-out hover:scale-110 hover:shadow-[0_12px_32px_-8px_rgba(20,48,31,0.12)] hover:border-[#C9A15A]/40 mx-auto">
                  <img
                    src={color.img}
                    alt={color.label}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                  />
                </div>
                <span className="text-xs text-[#14301F] font-medium tracking-wide mt-3 text-center block transition-colors duration-300 group-hover:text-[#C9A15A]">
                  {color.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* ─── Testimonials ─── */}
      <RevealSection className="relative py-24 bg-gradient-to-b from-[#fdf6f0] via-[#faf3ec] to-[#fdf6f0] overflow-hidden">
        <BokehLights spots={[
          { color: "from-rose-300/12 to-transparent", size: 240, top: "-6%", right: "-3%", anim: "bk-drift2", delay: 0, duration: 32 },
          { color: "from-amber-200/10 to-transparent", size: 200, bottom: "-8%", left: "8%", anim: "bk-drift4", delay: 3, duration: 28 },
          { color: "from-violet-200/8 to-transparent", size: 180, top: "40%", left: "45%", anim: "bk-float", delay: 1, duration: 26 },
        ]} />
        <FloatingDecoration type="petal5" side="left" top="8%" size={56} opacity={0.1} delay={0.5} duration={13} color="#C9A15A" />
        <FloatingDecoration type="petal6" side="right" top="12%" size={60} opacity={0.12} delay={0} duration={14} animation="sway2" />
        <FloatingDecoration type="leaf" side="right" top="auto" bottom="8%" size={48} opacity={0.16} delay={2} duration={11} animation="sway3" color="#14301F" />
        <div className="max-w-[1440px] mx-auto px-6">
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
      <RevealSection className="py-24 bg-gradient-to-b from-white via-[#fdf6f0] to-white border-b border-gray-100">
        <div className="max-w-[1440px] mx-auto px-6">
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
      <RevealSection className="py-24 bg-gradient-to-b from-[#fdf6f0] via-[#faf3ec] to-[#fdf6f0]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-8">
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
      <RevealSection className="relative py-24 bg-gradient-to-r from-[#F4C9D1]/50 via-pink-50/30 to-purple-100/40 overflow-hidden">
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
