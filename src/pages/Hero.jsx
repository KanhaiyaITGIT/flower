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
      bg: "bg-rose-50/50",
      iconColor: "text-rose-500",
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
      {/* ─── Hero Section ─── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-rose-50/70 via-pink-50/50 to-[#F7F0E8]/40 pt-10 pb-20 lg:py-28">
        <div className="absolute top-0 left-0 w-72 h-72 bg-rose-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* LEFT */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 order-2 lg:order-none"
            >
              <div className="inline-flex items-center gap-2 bg-white border border-gray-100 shadow-sm px-4 py-2 rounded-full text-xs font-semibold tracking-wider text-rose-500 uppercase font-inter">
                <Leaf size={12} className="animate-pulse" />
                Handpicked Fresh, Every Morning
              </div>

              <h1 className="mt-8 text-4xl sm:text-5xl lg:text-7xl font-serif-display font-black leading-[1.08] text-slate-900">
                Delivering
                <span className="block text-rose-500 italic font-medium font-serif-display">Happiness</span>
                With Fresh Flowers
              </h1>

              <p className="mt-6 text-sm sm:text-base text-gray-500 max-w-xl leading-relaxed font-light">
                Bespoke bouquets, luxury floral arrangements and meaningful gifts designed to elevate your moments into unforgettable memories.
              </p>

              <div className="flex flex-wrap gap-4 mt-8">
                <Link
                  to="/category"
                  className="inline-flex items-center gap-2 bg-rose-500 hover:bg-rose-600 text-white px-8 py-4 rounded-full font-bold text-xs tracking-widest uppercase shadow-lg shadow-rose-200 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <ShoppingBag size={14} />
                  Shop Collection
                </Link>

                <Link
                  to="/occasions"
                  className="inline-flex items-center gap-2 bg-white border border-gray-200 text-[#0D1F0F] px-8 py-4 rounded-full font-bold text-xs tracking-widest uppercase hover:bg-gray-50 hover:border-gray-300 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <Flower2 size={14} className="text-rose-500" />
                  Explore Occasions
                </Link>
              </div>

              {/* Trust Row */}
              <div className="flex items-center gap-10 mt-12 pt-8 border-t border-gray-200/50">
                <div>
                  <h3 className="text-3xl font-black text-slate-900 tracking-tight font-serif-display">10K+</h3>
                  <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold font-inter mt-1">Customers</p>
                </div>
                <div className="w-px h-10 bg-gray-200" />
                <div>
                  <h3 className="text-3xl font-black text-slate-900 tracking-tight font-serif-display">500+</h3>
                  <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold font-inter mt-1">Designs</p>
                </div>
                <div className="w-px h-10 bg-gray-200" />
                <div>
                  <h3 className="text-3xl font-black text-rose-500 tracking-tight font-serif-display">4.9★</h3>
                  <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold font-inter mt-1">Rating</p>
                </div>
              </div>
            </motion.div>

            {/* RIGHT */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative order-1 lg:order-none"
            >
              <div className="relative overflow-hidden rounded-[32px] shadow-2xl">
                <img
                  src={hero}
                  alt="Luxurious flower arrangements"
                  className="w-full object-cover aspect-[4/3] transform hover:scale-102 transition duration-700"
                />
                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md px-6 py-4 rounded-2xl shadow-xl border border-white/40">
                  <p className="font-serif-display font-black text-xl text-[#0D1F0F]">100% Fresh</p>
                  <p className="text-gray-500 text-xs mt-0.5">Satisfaction Guaranteed</p>
                </div>
              </div>
              <div className="hidden lg:block absolute -left-10 top-20 w-28 h-28 rounded-3xl overflow-hidden shadow-2xl border-4 border-white transition-transform hover:scale-105 duration-300">
                <img src={image42} alt="floral decor option 1" className="w-full h-full object-cover" />
              </div>
              <div className="hidden lg:block absolute -right-8 bottom-16 w-24 h-24 rounded-3xl overflow-hidden shadow-2xl border-4 border-white transition-transform hover:scale-105 duration-300">
                <img src={image16} alt="balloon decoration option" className="w-full h-full object-cover" />
              </div>
            </motion.div>
          </div>

          <div className="hidden lg:flex flex-col items-center gap-1.5 text-slate-400 mt-12">
            <span className="text-[10px] uppercase tracking-widest font-bold font-inter">Scroll</span>
            <ChevronDown size={14} className="animate-bounce" />
          </div>
        </div>
      </section>

      {/* ─── Shop By Category ─── */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-widest text-rose-500 uppercase font-inter">Curated Collections</span>
            <h2 className="text-3xl sm:text-4xl font-serif-display font-black text-[#0d1f0f] mt-3">Shop By Category</h2>
            <p className="text-gray-400 text-sm mt-3 font-light">Find the perfect arrangements designed for your special moments</p>
          </div>

          <div className="relative">
            {/* Left Arrow */}
            <button
              onClick={() => scrollSlider(categorySliderRef, "left")}
              className="absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white border border-gray-100 shadow-md flex items-center justify-center text-slate-700 hover:bg-[#0D1F0F] hover:text-white transition-all duration-200"
              aria-label="Scroll left"
            >
              <ChevronLeft size={18} />
            </button>

            {/* Slider track */}
            <div
              ref={categorySliderRef}
              className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 scrollbar-hide"
            >
              {categories.map((item, index) => (
                <div
                  key={index}
                  data-slide-card
                  onClick={() => navigate(`/category?cat=${encodeURIComponent(item.category)}`)}
                  className="group rounded-3xl overflow-hidden bg-white border border-gray-100/80 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer shrink-0 w-[80vw] sm:w-[280px] snap-start"
                >
                  <div className="h-64 overflow-hidden relative bg-rose-50/20">
                    <LazyImage
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
                    <span className="absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 bg-white text-[#0D1F0F] font-bold px-5 py-2.5 rounded-full text-xs tracking-wider uppercase flex items-center gap-1.5 shadow-md whitespace-nowrap">
                      Shop Now <ArrowRight size={12} />
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif-display font-bold text-lg text-slate-900">{item.title}</h3>
                    <p className="text-gray-400 text-xs mt-1">{item.products}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Arrow */}
            <button
              onClick={() => scrollSlider(categorySliderRef, "right")}
              className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white border border-gray-100 shadow-md flex items-center justify-center text-slate-700 hover:bg-[#0D1F0F] hover:text-white transition-all duration-200"
              aria-label="Scroll right"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* ─── Best Sellers ─── */}
      <section className="py-24 bg-[#fafaf9]/60">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12 flex-wrap gap-4">
            <div>
              <span className="text-xs font-bold tracking-widest text-rose-500 uppercase font-inter">Customer Favorites</span>
              <h2 className="text-3xl sm:text-4xl font-serif-display font-black text-slate-900 mt-2">Bestselling Bouquets</h2>
            </div>
            <Link
              to="/category"
              className="text-rose-500 hover:text-rose-600 font-bold text-xs tracking-widest uppercase flex items-center gap-1.5 transition-colors"
            >
              View All <ArrowRight size={14} />
            </Link>
          </div>

          <div className="relative">
            {/* Left Arrow */}
            <button
              onClick={() => scrollSlider(bestSellerSliderRef, "left")}
              className="absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white border border-gray-100 shadow-md flex items-center justify-center text-slate-700 hover:bg-[#0D1F0F] hover:text-white transition-all duration-200"
              aria-label="Scroll left"
            >
              <ChevronLeft size={18} />
            </button>

            {/* Slider track */}
            <div
              ref={bestSellerSliderRef}
              className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 scrollbar-hide"
            >
              {bestSellers.map((item) => (
                <div
                  key={item.id}
                  data-slide-card
                  className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 shrink-0 w-[80vw] sm:w-[280px] snap-start flex flex-col"
                >
                  <div className="overflow-hidden h-72 relative bg-rose-50/20">
                    {item.badge && (
                      <span className="absolute top-4 left-4 z-10 bg-rose-500 text-white text-[9px] font-black px-3 py-1.5 rounded-full uppercase tracking-wider">
                        {item.badge}
                      </span>
                    )}

                    <LazyImage
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover hover:scale-102 transition duration-500"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-serif-display font-bold text-base text-slate-900 leading-snug">{item.title}</h3>
                    <div className="flex items-center gap-1 mt-2">
                      <Star size={11} className="fill-amber-400 text-amber-400" />
                      <span className="text-[11px] font-bold text-slate-700 font-inter">{item.rating}</span>
                      <span className="text-[11px] text-gray-400">(120+ reviews)</span>
                    </div>
                    <div className="flex items-center gap-2 mt-3">
                      <p className="text-rose-500 font-black text-base">{item.price === "acceptable" ? "Contact us" : item.price}</p>
                      {item.originalPrice && (
                        <p className="text-gray-400 text-xs line-through">{item.originalPrice}</p>
                      )}
                    </div>
                    
                    <Link
                      to={`/category?cat=${encodeURIComponent(item.category)}`}
                      className="mt-6 w-full bg-[#0D1F0F] text-white py-3 rounded-2xl font-bold text-xs tracking-wider uppercase hover:bg-[#1a3320] transition-colors text-center"
                    >
                      Quick View
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Arrow */}
            <button
              onClick={() => scrollSlider(bestSellerSliderRef, "right")}
              className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white border border-gray-100 shadow-md flex items-center justify-center text-slate-700 hover:bg-[#0D1F0F] hover:text-white transition-all duration-200"
              aria-label="Scroll right"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* ─── Deal of the Day ─── */}
      <section className="py-24 bg-[#0d1f0f] relative overflow-hidden">
        <div className="absolute top-10 right-10 w-72 h-72 bg-rose-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-[#C8A882]/10 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="rounded-[32px] overflow-hidden shadow-2xl">
                <LazyImage
                  src={image28}
                  alt="Sunset Rose Grand Bouquet - Deal of the Day"
                  className="w-full h-[480px] object-cover hover:scale-102 transition duration-700"
                />
              </div>
              <div className="absolute -top-4 -left-4 bg-[#e11d48] text-white rounded-2xl px-6 py-4 shadow-xl -rotate-6">
                <p className="text-[10px] uppercase tracking-widest font-black flex items-center gap-1">
                  <Percent size={11} /> Today Only
                </p>
                <p className="text-2xl font-black mt-1 font-serif-display">40% OFF</p>
              </div>
            </div>
            
            <div className="text-white flex flex-col gap-6">
              <div>
                <span className="inline-flex items-center gap-2 bg-white/10 text-[#C8A882] text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full border border-white/10">
                  <Clock size={12} className="animate-pulse" /> Deal of the Day
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-display font-black mt-6 leading-tight text-[#F7F0E8]">
                  Sunset Rose Grand Bouquet
                </h2>
                <p className="text-gray-400 text-sm mt-4 leading-relaxed font-light">
                  A breathtaking, hand-tied arrangement of 50 premium long-stemmed roses in warm sunset hues, finished with fresh eucalyptus and a signature silk ribbon.
                </p>
              </div>

              <div className="flex items-center gap-4">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl sm:text-3xl font-black text-[#C8A882] hover:text-[#dfc4a3] transition-colors font-serif-display"
                >
                  Contact for Best Price
                </a>
                <span className="text-base text-white/40 line-through">₹1,999</span>
              </div>

              {/* Timer */}
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
                    <p className="text-[9px] text-[#C8A882] uppercase tracking-wider font-bold mt-2">
                      {t.label}
                    </p>
                  </div>
                ))}
              </div>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center justify-center gap-2 bg-rose-500 hover:bg-rose-600 text-white px-8 py-4 rounded-full font-bold text-xs tracking-widest uppercase shadow-lg shadow-rose-950/30 hover:-translate-y-0.5 transition-all duration-300 max-w-[240px]"
              >
                Grab This Deal <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── How It Works ─── */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-xs font-bold tracking-widest text-rose-500 uppercase font-inter">Simple Process</span>
            <h2 className="text-3xl sm:text-4xl font-serif-display font-black text-slate-900 mt-2">How It Works</h2>
            <p className="text-gray-400 text-sm mt-3 font-light">From our garden directly to your doorstep in three easy steps</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="relative bg-[#fafaf9] rounded-3xl p-8 pt-12 border border-gray-100 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 text-center"
                >
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-6xl font-black text-rose-100/50 font-serif-display select-none">
                    {pad(index + 1)}
                  </span>
                  <div className="w-14 h-14 mx-auto rounded-2xl bg-rose-500/10 flex items-center justify-center mb-6">
                    <Icon size={24} className="text-rose-500" />
                  </div>
                  <h3 className="font-serif-display font-bold text-lg text-slate-900">{step.title}</h3>
                  <p className="text-gray-400 text-xs mt-3 leading-relaxed font-light">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Why Choose Us ─── */}
      <section className="py-24 bg-[#fafaf9]/60">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-xs font-bold tracking-widest text-rose-500 uppercase font-inter">Our Standards</span>
            <h2 className="text-3xl sm:text-4xl font-serif-display font-black text-slate-900 mt-2">Why Choose Us</h2>
            <p className="text-gray-400 text-sm mt-3 font-light">Delivering smiles and premium quality with every single delivery</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className={`${item.bg} p-8 rounded-3xl border border-gray-200/40 text-center hover:shadow-lg transition-all duration-300`}
                >
                  <div className="w-14 h-14 mx-auto rounded-2xl bg-white border border-gray-100/80 flex items-center justify-center shadow-sm">
                    <Icon size={24} className={item.iconColor} />
                  </div>
                  <h3 className="font-serif-display font-bold text-base text-slate-900 mt-5">{item.title}</h3>
                  <p className="text-gray-400 text-xs mt-2 font-light">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Perfect For Every Occasion ─── */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-xs font-bold tracking-widest text-rose-500 uppercase font-inter">Life Milestones</span>
            <h2 className="text-3xl sm:text-4xl font-serif-display font-black text-slate-900 mt-2">Perfect For Every Occasion</h2>
            <p className="text-gray-400 text-sm mt-3 font-light">Handcrafted flowers designed for all of life's beautiful moments</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {occasions.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  onClick={() => navigate("/occasions")}
                  className="group relative h-80 rounded-3xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
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
                    <h3 className="text-lg font-serif-display font-bold text-[#F7F0E8]">{item.title}</h3>
                    <p className="text-white/60 text-xs mt-1.5 font-light">{item.desc}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      Explore <ArrowRight size={12} />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Testimonials ─── */}
      <section className="py-24 bg-[#fafaf9]/60">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-widest text-rose-500 uppercase font-inter">Customer Reviews</span>
            <h2 className="text-3xl sm:text-4xl font-serif-display font-black text-slate-900 mt-2">What Our Customers Say</h2>
          </div>
          
          <div className="flex justify-center mb-16">
            <div className="flex items-center gap-5 bg-white border border-gray-100 rounded-3xl px-8 py-5 shadow-sm">
              <span className="text-4xl font-black text-slate-900 font-serif-display">4.9</span>
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
              <div key={index} className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm flex flex-col gap-6">
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
                  <div className={`w-10 h-10 rounded-full ${item.color} flex items-center justify-center text-white font-bold text-sm shadow-inner`}>
                    {item.initials}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-800 leading-none">{item.name}</h4>
                    <p className="text-gray-400 text-[10px] uppercase font-bold tracking-wider mt-1">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Instagram Gallery ─── */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-widest text-rose-500 uppercase font-inter">Follow Us</span>
            <h2 className="text-3xl font-serif-display font-black text-slate-900 mt-2">Follow Our Floral Journey</h2>
            <p className="text-rose-500 font-bold mt-3 inline-flex items-center gap-1.5">
              <FaInstagram size={16} />
              <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="hover:underline">
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
                className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-sm"
              >
                <LazyImage
                  src={img}
                  alt="Floral journey picture on Instagram"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-rose-500/0 group-hover:bg-rose-500/30 transition duration-300 flex items-center justify-center">
                  <FaInstagram
                    size={22}
                    className="text-white opacity-0 group-hover:opacity-100 transition duration-300"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-24 bg-[#fafaf9]/60">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-widest text-rose-500 uppercase font-inter">Answers</span>
            <h2 className="text-3xl sm:text-4xl font-serif-display font-black text-slate-900 mt-2">Frequently Asked Questions</h2>
            <p className="text-gray-400 text-sm mt-3 font-light">Everything you need to know about our flowers and shipping policies</p>
          </div>
          
          <div className="flex flex-col gap-4">
            {faqs.map((faq, index) => {
              const isSelected = openFaq === index;
              return (
                <div
                  key={index}
                  className="border border-gray-100 rounded-3xl overflow-hidden bg-white shadow-sm transition-all duration-300"
                >
                  <button
                    onClick={() => setOpenFaq(isSelected ? null : index)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left font-bold text-slate-800 hover:text-slate-900 focus:outline-none transition-colors"
                  >
                    <span className="font-serif-display text-base leading-snug">{faq.q}</span>
                    <span className="w-8 h-8 rounded-full bg-rose-50/50 flex items-center justify-center text-rose-500 shrink-0">
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
      </section>

      {/* ─── Newsletter ─── */}
      <section className="py-24 bg-gradient-to-r from-rose-100/50 via-pink-50/30 to-purple-100/40">
        <div className="max-w-4xl mx-auto text-center px-6">
          <div className="w-14 h-14 bg-rose-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Mail size={24} className="text-rose-500" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif-display font-black text-slate-950 leading-tight">
            Join Our Flower Family
          </h2>
          <p className="text-gray-500 text-sm mt-3 font-light max-w-md mx-auto">
            Subscribe for exclusive discounts, floral tips, and advance access to our limited holiday collections.
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
                  className="flex-1 border border-gray-200 bg-white rounded-full px-6 py-4 text-sm text-[#0D1F0F] placeholder-gray-400 outline-none focus:border-rose-400 focus:ring-1 focus:ring-rose-400/20 transition-all duration-300"
                />
                <button
                  onClick={handleSubscribe}
                  className="bg-[#0D1F0F] hover:bg-[#1a3320] text-white px-8 py-4 rounded-full font-bold text-xs tracking-widest uppercase hover:-translate-y-0.5 transition-all duration-300"
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
              className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center text-rose-500 shadow-sm hover:-translate-y-1 transition duration-300"
            >
              <FaInstagram size={16} />
            </a>
            <a
              href={FACEBOOK_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center text-rose-500 shadow-sm hover:-translate-y-1 transition duration-300"
            >
              <FaFacebookF size={15} />
            </a>
          </div>
        </div>
      </section>

      {/* ─── WhatsApp Floating Button ─── */}
      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25d366] flex items-center justify-center shadow-xl shadow-emerald-400/30 hover:bg-[#20ba59] transition-colors"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={26} color="white" fill="white" />
      </motion.a>
    </div>
  );
};

export default Home;