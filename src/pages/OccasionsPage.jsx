import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Import your actual images
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
import image13 from "../assets/s13.png";

import {
  ArrowRight,
  Heart,
  Sparkles,
  Gift,
  Star,
  MessageCircle,
  Phone,
  Clock,
  ChevronRight,
  ShoppingBag,
} from "lucide-react";

// ─── Occasions Data ───
const occasions = [
  {
    id: 1,
    name: "Wedding",
    tagline: "Where two hearts bloom as one",
    desc: "Bridal bouquets, ceremony décor & reception centrepieces crafted to make your day unforgettable.",
    image: image1,
    gradient: "from-rose-900/80 via-rose-800/50 to-transparent",
    accent: "#fda4af",
    accentBg: "bg-rose-50",
    accentText: "text-rose-600",
    accentBorder: "border-rose-200",
    products: "48 arrangements",
    size: "large", // tall card
    emoji: "💍",
  },
  {
    id: 2,
    name: "Birthday",
    tagline: "Make their day petal-perfect",
    desc: "Vibrant, joyful bouquets that arrive fresh with a smile — same-day delivery available.",
    image: image2,
    gradient: "from-amber-900/80 via-amber-700/50 to-transparent",
    accent: "#fbbf24",
    accentBg: "bg-amber-50",
    accentText: "text-amber-600",
    accentBorder: "border-amber-200",
    products: "34 bouquets",
    size: "medium",
    emoji: "🎂",
  },
  {
    id: 3,
    name: "Anniversary",
    tagline: "Love, in full bloom",
    desc: "From classic red roses to rare preserved arrangements — celebrate another year of love.",
    image: image3,
    gradient: "from-pink-900/80 via-pink-800/50 to-transparent",
    accent: "#f472b6",
    accentBg: "bg-pink-50",
    accentText: "text-pink-600",
    accentBorder: "border-pink-200",
    products: "29 arrangements",
    size: "medium",
    emoji: "❤️",
  },
  {
    id: 4,
    name: "Congratulations",
    tagline: "They did it — celebrate big",
    desc: "Promotion, graduation, new home — every milestone deserves a burst of fresh blooms.",
    image: image4,
    gradient: "from-emerald-900/80 via-emerald-700/50 to-transparent",
    accent: "#34d399",
    accentBg: "bg-emerald-50",
    accentText: "text-emerald-600",
    accentBorder: "border-emerald-200",
    products: "22 bouquets",
    size: "small",
    emoji: "🎉",
  },
  {
    id: 5,
    name: "Sympathy",
    tagline: "Words fall short; flowers carry them",
    desc: "Thoughtful, dignified arrangements to offer comfort when it matters most.",
    image: image5,
    gradient: "from-slate-900/80 via-slate-700/50 to-transparent",
    accent: "#94a3b8",
    accentBg: "bg-slate-50",
    accentText: "text-slate-600",
    accentBorder: "border-slate-200",
    products: "18 arrangements",
    size: "small",
    emoji: "🕊️",
  },
  {
    id: 6,
    name: "Just Because",
    tagline: "No reason needed",
    desc: "The most romantic gesture? Flowers for no occasion at all. Surprise someone today.",
    image: image6,
    gradient: "from-purple-900/80 via-purple-700/50 to-transparent",
    accent: "#c084fc",
    accentBg: "bg-purple-50",
    accentText: "text-purple-600",
    accentBorder: "border-purple-200",
    products: "41 bouquets",
    size: "large",
    emoji: "✨",
  },
  {
    id: 7,
    name: "Corporate Gifting",
    tagline: "Impress every client, every time",
    desc: "Branded floral gifts, bulk orders & office arrangements — delivered across Delhi NCR.",
    image: image7,
    gradient: "from-blue-900/80 via-blue-700/50 to-transparent",
    accent: "#60a5fa",
    accentBg: "bg-blue-50",
    accentText: "text-blue-600",
    accentBorder: "border-blue-200",
    products: "16 collections",
    size: "medium",
    emoji: "🏢",
  },
  {
    id: 8,
    name: "New Baby",
    tagline: "Hello, little bloom",
    desc: "Soft, delicate arrangements to welcome the newest little petal into the world.",
    image: image8,
    gradient: "from-sky-900/80 via-sky-700/50 to-transparent",
    accent: "#7dd3fc",
    accentBg: "bg-sky-50",
    accentText: "text-sky-600",
    accentBorder: "border-sky-200",
    products: "14 bouquets",
    size: "small",
    emoji: "👶",
  },
  {
    id: 9,
    name: "Get Well Soon",
    tagline: "Brighten their recovery",
    desc: "Cheerful, uplifting bouquets to bring colour and warmth to any hospital room or home.",
    image: image9,
    gradient: "from-yellow-900/80 via-yellow-700/50 to-transparent",
    accent: "#fde047",
    accentBg: "bg-yellow-50",
    accentText: "text-yellow-600",
    accentBorder: "border-yellow-200",
    products: "19 arrangements",
    size: "small",
    emoji: "🌻",
  },
];

// ─── Recipients ───
const recipients = [
  { label: "For Her", emoji: "👩", color: "bg-rose-100 text-rose-700 border-rose-200" },
  { label: "For Him", emoji: "👨", color: "bg-blue-100 text-blue-700 border-blue-200" },
  { label: "For Parents", emoji: "👨‍👩‍👧", color: "bg-amber-100 text-amber-700 border-amber-200" },
  { label: "For Friends", emoji: "🫂", color: "bg-purple-100 text-purple-700 border-purple-200" },
  { label: "For Couples", emoji: "💑", color: "bg-pink-100 text-pink-700 border-pink-200" },
  { label: "For Boss / Colleague", emoji: "💼", color: "bg-slate-100 text-slate-700 border-slate-200" },
];

// ─── How It Works ───
const steps = [
  { icon: "🌸", title: "Pick the Occasion", desc: "Choose from our curated occasion collections or tell us your need." },
  { icon: "🎨", title: "We Craft It", desc: "Our florists hand-pick and arrange your blooms on the same day." },
  { icon: "🚗", title: "We Deliver", desc: "Fresh flowers at your door, on time — with a personal note." },
];

// ─── Featured Products (quick picks) ───
const featured = [
  { id: 1, name: "Red Rose Eternity Box", price: 2499, occasion: "Anniversary", image: image10, rating: 5.0 },
  { id: 2, name: "Sunshine Birthday Bunch", price: 699, occasion: "Birthday", image: image11, rating: 4.8 },
  { id: 3, name: "White Orchid Sympathy", price: 1299, occasion: "Sympathy", image: image12, rating: 4.9 },
  { id: 4, name: "Bridal Pastel Bouquet", price: 3499, occasion: "Wedding", image: image13, rating: 5.0 },
];

const OccasionsPage = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [addedToCart, setAddedToCart] = useState({});

  const handleCart = (id) => {
    setAddedToCart((p) => ({ ...p, [id]: true }));
    setTimeout(() => setAddedToCart((p) => ({ ...p, [id]: false })), 1800);
  };

  // Masonry-style layout: large cards span 2 rows, small are 1 row
  // We'll use CSS grid with defined areas for desktop
  const gridClasses = {
    large: "md:row-span-2",
    medium: "md:row-span-1",
    small: "md:row-span-1",
  };

  const recipients = [
  {
    label: "For Her",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300",
  },
  {
    label: "For Him",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300",
  },
  {
    label: "Mom",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300",
  },
  {
    label: "Dad",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300",
  },
  {
    label: "Friends",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=300",
  },
  {
    label: "Colleagues",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300",
  },
];
  return (
    <>
      <section className="relative min-h-[480px] flex items-center overflow-hidden bg-gray-950">
        {/* Layered ambient gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-rose-950 via-gray-950 to-purple-950 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_60%_40%,rgba(253,164,175,0.12),transparent)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_10%_80%,rgba(192,132,252,0.08),transparent)] pointer-events-none" />

        {/* Floating petals — pure CSS shapes */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-20 pointer-events-none"
            style={{
              width: `${40 + i * 18}px`,
              height: `${40 + i * 18}px`,
              background: i % 2 === 0 ? "#fda4af" : "#c084fc",
              top: `${10 + i * 13}%`,
              left: `${60 + (i % 3) * 10}%`,
              filter: "blur(2px)",
              animation: `float${i % 3} ${5 + i}s ease-in-out infinite`,
            }}
          />
        ))}

        <style>{`
          @keyframes float0 { 0%,100%{transform:translateY(0px) rotate(0deg)} 50%{transform:translateY(-18px) rotate(8deg)} }
          @keyframes float1 { 0%,100%{transform:translateY(0px) rotate(0deg)} 50%{transform:translateY(-12px) rotate(-6deg)} }
          @keyframes float2 { 0%,100%{transform:translateY(0px) rotate(0deg)} 50%{transform:translateY(-22px) rotate(4deg)} }
        `}</style>

        <div className="relative max-w-6xl mx-auto px-6 py-20 w-full">
          <div className="max-w-2xl">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full px-4 py-1.5 mb-6">
              <Sparkles size={12} className="text-rose-300" />
              <span className="text-white/70 text-xs font-semibold tracking-widest uppercase">
                Shop by Occasion
              </span>
            </div>

            <h1 className="font-serif text-5xl md:text-7xl font-bold text-white leading-[1.05] mb-5">
              Every moment
              <br />
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-rose-300 via-pink-300 to-purple-300">
                deserves flowers.
              </span>
            </h1>

            <p className="text-white/50 text-base md:text-lg leading-relaxed mb-8 max-w-lg">
              Whether it's a grand celebration or a quiet 'I was thinking of you'
              — we have the perfect bloom for every feeling, every person, every day.
            </p>

            <div className="flex gap-3 flex-wrap">
              <a
                href="#occasions-grid"
                className="inline-flex items-center gap-2 bg-rose-500 hover:bg-rose-400 text-white rounded-full px-7 py-3 text-sm font-bold transition-all duration-200 shadow-lg shadow-rose-900/40 hover:-translate-y-0.5"
              >
                Browse Occasions
                <ArrowRight size={15} />
              </a>
              <a
                href="https://wa.me/91XXXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-full px-7 py-3 text-sm font-bold backdrop-blur-sm transition-all duration-200"
              >
                <MessageCircle size={15} />
                Need help choosing?
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── OCCASIONS MOSAIC GRID ── */}
      <section id="occasions-grid" className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs font-bold tracking-widest text-rose-500 uppercase mb-2">
              Find Your Moment
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900">
              Shop by Occasion
            </h2>
          </div>

          {/* Masonry grid — auto rows for height control */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            style={{ gridAutoRows: "220px" }}
          >
            {occasions.map((occ) => (
              <div
                key={occ.id}
                className={`relative rounded-2xl overflow-hidden cursor-pointer group ${gridClasses[occ.size]}`}
                onMouseEnter={() => setHoveredCard(occ.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Background image */}
                <img
                  src={occ.image}
                  alt={occ.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Base gradient overlay — always visible */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${occ.gradient}`}
                />

                {/* Hover overlay — darker tint */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-5">
                  {/* Emoji badge */}
                  <span className="text-2xl mb-1 drop-shadow-sm">{occ.emoji}</span>

                  <h3 className="font-serif text-xl md:text-2xl font-bold text-white leading-tight mb-1 drop-shadow">
                    {occ.name}
                  </h3>

                  {/* Tagline — visible on hover */}
                  <p
                    className={`text-white/80 text-xs italic mb-2 leading-relaxed transition-all duration-300 ${
                      hoveredCard === occ.id
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-2"
                    }`}
                  >
                    "{occ.tagline}"
                  </p>

                  {/* Description — visible on hover, large cards only */}
                  {occ.size === "large" && (
                    <p
                      className={`text-white/70 text-xs leading-relaxed mb-3 max-w-xs transition-all duration-300 delay-75 ${
                        hoveredCard === occ.id
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-2"
                      }`}
                    >
                      {occ.desc}
                    </p>
                  )}

                  {/* Bottom row: products count + CTA */}
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border ${occ.accentBg} ${occ.accentText} ${occ.accentBorder}`}
                    >
                      {occ.products}
                    </span>

                    <button
                      className={`flex items-center gap-1.5 bg-white text-gray-900 text-xs font-bold rounded-full px-3.5 py-1.5 transition-all duration-300 shadow-md ${
                        hoveredCard === occ.id
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 translate-x-3"
                      }`}
                    >
                      Shop Now
                      <ChevronRight size={12} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-16 px-6 bg-white border-y border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs font-bold tracking-widest text-rose-500 uppercase mb-2">
              Simple & Seamless
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900">
              From us to them, in 3 steps
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 relative">
            {/* Connector line desktop */}
            <div className="hidden md:block absolute top-10 left-1/6 right-1/6 h-px bg-gradient-to-r from-transparent via-rose-200 to-transparent pointer-events-none" />

            {steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center px-6 py-4 relative">
                {/* Step circle */}
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-rose-50 to-pink-100 border-2 border-rose-100 flex items-center justify-center text-3xl mb-4 shadow-sm relative z-10">
                  {step.icon}
                </div>
                <h3 className="font-serif text-lg font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed max-w-[200px]">
                  {step.desc}
                </p>

                {/* Arrow between steps on mobile */}
                {i < steps.length - 1 && (
                  <div className="md:hidden text-rose-300 text-2xl mt-4">↓</div>
                )}
              </div>
            ))}
          </div>

          {/* Delivery promise strip */}
          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            {[
              { icon: Clock, text: "Same-day delivery by 8 PM" },
              { icon: Star, text: "4.9★ rated by 2,000+ customers" },
              { icon: Heart, text: "100% freshness guarantee" },
            ].map(({ icon: Icon, text }, i) => (
              <div
                key={i}
                className="flex items-center gap-2 bg-rose-50 border border-rose-100 rounded-full px-4 py-2"
              >
                <Icon size={13} className="text-rose-400" />
                <span className="text-xs text-rose-700 font-semibold">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SHOP BY RECIPIENT ── */}
    <section className="py-24 bg-gradient-to-b from-white to-rose-50">

  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-14">

      <span className="inline-block px-4 py-2 rounded-full bg-rose-100 text-rose-500 text-xs font-bold tracking-widest uppercase">
        Shop By Recipient
      </span>

      <h2 className="mt-5 text-4xl md:text-5xl font-bold text-slate-900">
        Who Are You Gifting?
      </h2>

      <p className="mt-4 text-gray-500 max-w-xl mx-auto">
        Find the perfect flowers for every special person in your life.
      </p>

    </div>

    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

      {recipients.map((item, index) => (

        <div
          key={index}
          className="group relative overflow-hidden rounded-3xl bg-white shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer hover:-translate-y-2"
        >

          <div className="h-52 overflow-hidden">

            <img
              src={item.image}
              alt={item.label}
              className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
            />

          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

          <div className="absolute bottom-4 left-4 right-4">

            <h3 className="text-white font-bold text-lg">
              {item.label}
            </h3>

            <div className="flex items-center gap-2 mt-2 opacity-0 group-hover:opacity-100 transition duration-300">

              <span className="text-white text-sm">
                Explore Gifts
              </span>

              <ArrowRight
                size={16}
                className="text-white"
              />

            </div>

          </div>

        </div>

      ))}

    </div>

  </div>

</section>

      {/* ── FEATURED PICKS ── */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-8 flex-wrap gap-3">
            <div>
              <p className="text-xs font-bold tracking-widest text-rose-500 uppercase mb-1">
                Hand-Picked For You
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900">
                Most-loved gifts
              </h2>
            </div>
            <button className="flex items-center gap-1.5 text-sm font-bold text-rose-500 hover:text-rose-700 transition-colors">
              View all products
              <ArrowRight size={15} />
            </button>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {featured.map((item) => (
              <div
                key={item.id}
                className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                <div className="aspect-square overflow-hidden bg-rose-50 relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Occasion label */}
                  <div className="absolute top-2.5 left-2.5 bg-white/90 backdrop-blur-sm text-[10px] font-bold text-gray-700 rounded-full px-2.5 py-1 border border-gray-200">
                    {item.occasion}
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="font-serif text-sm font-bold text-gray-900 mb-1 leading-snug line-clamp-2">
                    {item.name}
                  </h3>
                  <div className="flex items-center gap-1 mb-3">
                    <Star size={11} className="text-amber-400 fill-amber-400" />
                    <span className="text-xs text-gray-500 font-medium">{item.rating}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-gray-900 text-base">₹{item.price.toLocaleString()}</span>
                    <button
                      onClick={() => handleCart(item.id)}
                      className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 shadow-md ${
                        addedToCart[item.id]
                          ? "bg-green-500 shadow-green-200"
                          : "bg-rose-500 hover:bg-rose-600 hover:scale-110 shadow-rose-200"
                      }`}
                    >
                      <ShoppingBag size={14} className="text-white" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CUSTOM ORDER CTA ── */}
      <section className="py-20 px-6 relative overflow-hidden bg-gray-950">
        {/* Background texture */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(253,164,175,0.12),transparent)] pointer-events-none" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-rose-500/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-rose-500/20 to-transparent" />

        <div className="max-w-2xl mx-auto text-center relative">
          <div className="text-4xl mb-4">🌸</div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Can't find your
            <br />
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-rose-300 to-pink-300">
              perfect occasion?
            </span>
          </h2>
          <p className="text-white/50 text-base leading-relaxed mb-8 max-w-md mx-auto">
            Tell us exactly who you're gifting, your budget, and the feeling you
            want to send. Our florists will create something one-of-a-kind just
            for you.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white rounded-full px-7 py-3.5 text-sm font-bold transition-all duration-200 shadow-lg shadow-green-900/40 hover:-translate-y-0.5"
            >
              <MessageCircle size={16} />
              Chat on WhatsApp
            </a>
            <a
              href="tel:+91XXXXXXXXXX"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-full px-7 py-3.5 text-sm font-bold backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5"
            >
              <Phone size={16} />
              Call Us
            </a>
          </div>

          {/* Micro-copy */}
          <p className="text-white/30 text-xs mt-5 font-medium">
            We respond within 10 minutes · Available 9 AM – 9 PM
          </p>
        </div>
      </section>

      {/* WhatsApp FAB */}
      <a
        href="https://wa.me/919540849659"
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

export default OccasionsPage;