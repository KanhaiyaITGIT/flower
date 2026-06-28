import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ShoppingBag, ArrowRight, Truck, ShieldCheck, Gift, Flower2,
  Star, Quote, Heart, Cake, PartyPopper, Mail, Clock, Percent,
  Leaf, Plus, Minus, MessageCircle, CheckCircle2, ChevronDown,
} from "lucide-react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
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
import image11 from "../assets/s12.png";
import image12 from "../assets/s13.png";
import image13 from "../assets/s14.png";
import image26 from "../assets/s26.png";
import image27 from "../assets/s27.png";

const Home = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [wishlist, setWishlist] = useState({});
  const [openFaq, setOpenFaq] = useState(0);
  const [timeLeft, setTimeLeft] = useState({ hours: 5, minutes: 42, seconds: 18 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev;
        if (seconds > 0) { seconds -= 1; }
        else if (minutes > 0) { minutes -= 1; seconds = 59; }
        else if (hours > 0) { hours -= 1; minutes = 59; seconds = 59; }
        else { hours = 5; minutes = 42; seconds = 18; }
        return { hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSubscribe = () => {
    if (email.includes("@")) { setSubscribed(true); setEmail(""); }
  };

  const toggleWishlist = (id) => {
    setWishlist((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const pad = (n) => String(n).padStart(2, "0");

  const categories = [
    { title: "Bouquets", image: image1, products: "120+ Products" },
    { title: "Floral Arrangements", image: image2, products: "80+ Products" },
    { title: "Premium Flowers", image: image3, products: "150+ Products" },
    { title: "Subscriptions", image: image4, products: "30+ Products" },
  ];

  const bestSellers = [
    { id: 1, title: "Pink Rhapsody Bouquet", image: image5, price: "₹1,599", originalPrice: "₹1,999", rating: 4.8, badge: "Bestseller" },
    { id: 2, title: "Lily Blush Symphony", image: image6, price: "₹2,099", originalPrice: "₹2,499", rating: 4.9, badge: "New" },
    { id: 3, title: "Red Velvet Bouquet", image: image7, price: "₹1,349", originalPrice: null, rating: 4.7, badge: null },
    { id: 4, title: "Wildflower Melody", image: image8, price: "₹1,999", originalPrice: "₹2,399", rating: 4.6, badge: "Limited" },
  ];

  const steps = [
    { title: "Browse & Choose", desc: "Explore our curated collection of bouquets, arrangements and gifts for every occasion.", icon: ShoppingBag },
    { title: "We Craft & Pack", desc: "Our florists hand-arrange your order with fresh, farm-sourced blooms and secure packaging.", icon: Flower2 },
    { title: "Same-Day Delivery", desc: "Sit back and relax while we deliver your order fresh and on time, right to their door.", icon: Truck },
  ];

  const whyChooseUs = [
    { title: "Fast Delivery", desc: "Same day flower delivery available.", icon: Truck, bg: "bg-rose-50", iconColor: "text-rose-500" },
    { title: "Fresh Flowers", desc: "Handpicked premium blooms, sourced daily.", icon: Flower2, bg: "bg-emerald-50", iconColor: "text-emerald-600" },
    { title: "Secure Payment", desc: "Safe and encrypted checkout.", icon: ShieldCheck, bg: "bg-blue-50", iconColor: "text-blue-600" },
    { title: "Perfect Gifts", desc: "Crafted with love and care.", icon: Gift, bg: "bg-amber-50", iconColor: "text-amber-600" },
  ];

  const occasions = [
    { title: "Devotional", desc: "Make their day extra special", icon: Cake, image: image9 },
    { title: "Celebration", desc: "Celebrate your love story", icon: Heart, image: image10 },
    { title: "Decor", desc: "Mark every milestone in style", icon: PartyPopper, image: image11 },
    { title: "Thank You", desc: "Show your gratitude with blooms", icon: Gift, image: image12 },
  ];

  const testimonials = [
    { name: "Rashmi Pathak", role: "Verified Buyer", review: "Beautiful flowers delivered right on time. The quality and packaging were amazing, exactly like the pictures.", rating: 5, initials: "RP", color: "bg-rose-400" },
    { name: "Anand Upadhyay", role: "Verified Buyer", review: "Fresh flowers with a premium presentation. The bouquet stayed fresh for over a week — highly recommended.", rating: 5, initials: "AU", color: "bg-purple-400" },
    { name: "Aanchal Kalra", role: "Verified Buyer", review: "Excellent service from order to doorstep. Ordered for our anniversary and my husband absolutely loved it.", rating: 5, initials: "AK", color: "bg-amber-400" },
  ];

  const faqs = [
    { q: "How fast can I get same-day delivery?", a: "Place your order before 4 PM and we'll deliver fresh flowers to your doorstep the same day, across Gurgaon." },
    { q: "Are the flowers fresh when they arrive?", a: "Every arrangement is hand-crafted on the day of delivery using flowers sourced from local farms that morning." },
    { q: "Can I customize my bouquet or add a gift?", a: "Yes! You can choose your favourite blooms, colours and wrapping, and add chocolates, cakes or candles at checkout." },
    { q: "What happens if I'm not happy with my order?", a: "Reach out within 24 hours of delivery and we'll arrange a replacement or refund — no questions asked." },
  ];

  const galleryImages = [image2, image3, image4, image9, image11, image13];

  return (
    <>
      {/* ─── Hero Section ─── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
        <div className="absolute top-0 left-0 w-72 h-72 bg-rose-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-200/30 rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-1/2 w-64 h-64 bg-amber-200/20 rounded-full blur-3xl" />

        <div className="max-w-[85%] mx-auto px-6 py-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* LEFT */}
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-white shadow-md px-4 py-2 rounded-full text-sm font-semibold text-rose-500">
                <Leaf size={14} />
                Handpicked Fresh, Every Morning
              </div>

              <h1 className="mt-8 text-5xl lg:text-7xl font-bold leading-tight text-slate-900 font-serif">
                Delivering
                <span className="block text-rose-500 italic">Happiness</span>
                With Fresh Flowers
              </h1>

              <p className="mt-6 text-lg text-gray-600 max-w-xl leading-relaxed">
                Handcrafted bouquets, luxury floral arrangements and meaningful gifts designed to make every moment unforgettable.
              </p>

              {/* ✅ FIX: import statement hata diya, sirf Link component use kiya */}
              <div className="flex flex-wrap gap-4 mt-10">
                <button className="inline-flex items-center gap-2 bg-rose-500 hover:bg-rose-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:scale-105 transition">
                  <ShoppingBag size={18} />
                  Shop Collection
                </button>

                <Link
                  to="/occasions"
                  className="inline-flex items-center gap-2 bg-white border border-gray-200 px-8 py-4 rounded-full font-semibold hover:shadow-md transition"
                >
                  <Flower2 size={18} className="text-rose-500" />
                  Explore Occasions
                </Link>
              </div>

              {/* Trust Row */}
              <div className="flex flex-wrap gap-8 mt-12">
                <div>
                  <h3 className="text-3xl font-bold text-slate-900">10K+</h3>
                  <p className="text-gray-500">Happy Customers</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-slate-900">500+</h3>
                  <p className="text-gray-500">Floral Designs</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-slate-900">4.9★</h3>
                  <p className="text-gray-500">Customer Rating</p>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="relative">
              <div className="relative">
                <img src={image26} alt="flowers" className="rounded-[40px] shadow-2xl w-full object-cover" />
                <div className="absolute bottom-6 left-6 bg-white px-5 py-4 rounded-3xl shadow-xl">
                  <p className="font-bold text-lg">10,000+</p>
                  <p className="text-gray-500 text-sm">Happy Customers</p>
                </div>
              </div>
              <img src={image2} alt="" className="hidden lg:block absolute -left-12 top-20 w-28 h-28 rounded-3xl object-cover shadow-xl border-4 border-white" />
              <img src={image3} alt="" className="hidden lg:block absolute -right-10 bottom-20 w-24 h-24 rounded-3xl object-cover shadow-xl border-4 border-white" />
            </div>
          </div>

          <div className="hidden lg:flex flex-col items-center gap-1 text-slate-400 mt-10">
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ChevronDown size={18} className="animate-bounce" />
          </div>
        </div>
      </section>

      {/* ─── Shop By Category ─── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold font-serif">Shop By Category</h2>
            <p className="text-gray-500 mt-4">Find the perfect arrangement for every moment</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {categories.map((item, index) => (
              <div key={index} className="group rounded-3xl overflow-hidden bg-white shadow-lg hover:-translate-y-2 transition-all duration-300">
                <div className="h-64 overflow-hidden relative">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
                  <button className="absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 bg-white text-rose-500 font-semibold px-5 py-2.5 rounded-full text-sm flex items-center gap-2 shadow-lg whitespace-nowrap">
                    Shop Now <ArrowRight size={14} />
                  </button>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <p className="text-gray-500 text-sm">{item.products}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Best Sellers ─── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center mb-12 flex-wrap gap-4">
            <div>
              <h2 className="text-4xl font-bold font-serif">Best Sellers</h2>
              <p className="text-gray-500 mt-2">Our most loved flower arrangements</p>
            </div>
            <button className="text-rose-500 font-semibold flex items-center gap-2">
              View All <ArrowRight size={18} />
            </button>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {bestSellers.map((item) => (
              <div key={item.id} className="bg-white rounded-3xl overflow-hidden shadow-lg hover:-translate-y-2 transition-all duration-300">
                <div className="overflow-hidden h-72 relative">
                  {item.badge && (
                    <div className="absolute top-4 left-4 z-10 bg-rose-500 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide">
                      {item.badge}
                    </div>
                  )}
                  <button onClick={() => toggleWishlist(item.id)} aria-label="Save to wishlist" className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 backdrop-blur flex items-center justify-center shadow-md hover:scale-110 transition">
                    <Heart size={18} className={wishlist[item.id] ? "fill-rose-500 text-rose-500" : "text-gray-400"} />
                  </button>
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover hover:scale-110 transition duration-500" />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <div className="flex items-center gap-1 mt-1.5">
                    <Star size={14} className="fill-amber-400 text-amber-400" />
                    <span className="text-sm font-semibold text-gray-700">{item.rating}</span>
                    <span className="text-sm text-gray-400">(120+)</span>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <p className="text-rose-500 font-bold text-lg">{item.price}</p>
                    {item.originalPrice && <p className="text-gray-400 text-sm line-through">{item.originalPrice}</p>}
                  </div>
                  <button className="mt-4 w-full bg-rose-500 text-white py-3 rounded-xl font-medium hover:bg-rose-600 transition">
                    Quick View
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Deal of the Day ─── */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-10 right-10 w-72 h-72 bg-rose-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img src={image27} alt="Deal of the day" className="rounded-[20px] w-full h-[550px] object-cover shadow-2xl" />
              <div className="absolute -top-6 -left-6 bg-rose-500 text-white rounded-2xl px-6 py-4 shadow-xl -rotate-6">
                <p className="text-xs uppercase tracking-widest font-semibold flex items-center gap-1">
                  <Percent size={12} /> Today Only
                </p>
                <p className="text-3xl font-bold mt-1">40% OFF</p>
              </div>
            </div>
            <div className="text-white">
              <span className="inline-flex items-center gap-2 bg-white/10 text-rose-300 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full border border-white/10">
                <Clock size={14} /> Deal of the Day
              </span>
              <h2 className="text-4xl md:text-5xl font-bold font-serif mt-6">Sunset Rose Grand Bouquet</h2>
              <p className="text-white/60 mt-4 leading-relaxed max-w-md">
                A breathtaking arrangement of 50 premium roses in warm sunset hues, finished with eucalyptus and a hand-tied silk ribbon.
              </p>
              <div className="flex items-center gap-4 mt-6">
                <span className="text-3xl font-bold text-rose-400">₹2,499</span>
                <span className="text-lg text-white/40 line-through">₹4,199</span>
              </div>
              <div className="flex gap-3 mt-8">
                {[{ label: "Hours", value: timeLeft.hours }, { label: "Minutes", value: timeLeft.minutes }, { label: "Seconds", value: timeLeft.seconds }].map((t) => (
                  <div key={t.label} className="bg-white/10 border border-white/10 rounded-2xl px-5 py-4 text-center min-w-[80px]">
                    <p className="text-3xl font-bold text-white tabular-nums">{pad(t.value)}</p>
                    <p className="text-xs text-white/50 uppercase tracking-wider mt-1">{t.label}</p>
                  </div>
                ))}
              </div>
              <button className="mt-10 inline-flex items-center gap-2 bg-rose-500 hover:bg-rose-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg shadow-rose-500/30 hover:scale-105 transition">
                Grab This Deal <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── How It Works ─── */}
      <section className="py-24 bg-gradient-to-br from-rose-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-serif">How It Works</h2>
            <p className="text-gray-500 mt-4">From our garden to your doorstep, in three simple steps</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative bg-white rounded-3xl p-8 pt-12 shadow-lg text-center">
                  <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-5xl font-bold text-rose-100 font-serif">{pad(index + 1)}</span>
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-rose-50 flex items-center justify-center mb-5">
                    <Icon size={28} className="text-rose-500" />
                  </div>
                  <h3 className="font-bold text-lg">{step.title}</h3>
                  <p className="text-gray-500 text-sm mt-2 leading-relaxed">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Why Choose Us ─── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-serif">Why Choose Us</h2>
            <p className="text-gray-500 mt-4">Delivering smiles with every bouquet</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className={`${item.bg} p-8 rounded-3xl text-center hover:-translate-y-1.5 transition-all duration-300`}>
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-white flex items-center justify-center shadow-sm">
                    <Icon size={32} className={item.iconColor} />
                  </div>
                  <h3 className="font-bold mt-5">{item.title}</h3>
                  <p className="text-gray-500 text-sm mt-2">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Perfect For Every Occasion ─── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold font-serif">Perfect For Every Occasion</h2>
            <p className="text-gray-500 mt-4">Flowers for all of life's beautiful moments</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {occasions.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="group relative h-80 rounded-3xl overflow-hidden cursor-pointer shadow-lg">
                  <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                  <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur flex items-center justify-center mb-4">
                      <Icon size={22} />
                    </div>
                    <h3 className="text-xl font-bold font-serif">{item.title}</h3>
                    <p className="text-white/70 text-sm mt-1">{item.desc}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      Shop Collection <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Testimonials ─── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold font-serif">What Our Customers Say</h2>
          </div>
          <div className="flex justify-center mb-14">
            <div className="flex items-center gap-4 bg-rose-50 rounded-2xl px-8 py-5">
              <span className="text-4xl font-bold text-slate-900 font-serif">4.9</span>
              <div>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-amber-400 text-amber-400" />)}
                </div>
                <p className="text-sm text-gray-500 mt-1">Based on 2,400+ verified reviews</p>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((item, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-lg">
                <Quote size={40} className="text-rose-400" />
                <div className="flex mt-4 gap-0.5">
                  {[...Array(item.rating)].map((_, i) => <Star key={i} size={16} className="fill-amber-400 text-amber-400" />)}
                </div>
                <p className="text-gray-600 mt-5 leading-relaxed">{item.review}</p>
                <div className="flex items-center gap-3 mt-6">
                  <div className={`w-11 h-11 rounded-full ${item.color} flex items-center justify-center text-white font-bold`}>
                    {item.initials}
                  </div>
                  <div>
                    <h4 className="font-bold">{item.name}</h4>
                    <p className="text-gray-400 text-xs">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Instagram Gallery ─── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-serif">Follow Our Floral Journey</h2>
            <p className="text-rose-500 font-semibold mt-3 inline-flex items-center gap-2">
              <FaInstagram size={18} />
              <a href="https://www.instagram.com/shiv.amflowers?igsh=MWVocXd2d3BrN3ptdA==" target="_blank" rel="noopener noreferrer">@ShivamFlorist</a>
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {galleryImages.map((img, index) => (
              <div key={index} className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer">
                <img src={img} alt="" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                <div className="absolute inset-0 bg-rose-500/0 group-hover:bg-rose-500/40 transition flex items-center justify-center">
                  <FaInstagram size={24} className="text-white opacity-0 group-hover:opacity-100 transition" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-serif">Frequently Asked Questions</h2>
            <p className="text-gray-500 mt-4">Everything you need to know before you order</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-2xl overflow-hidden bg-white">
                <button onClick={() => setOpenFaq(openFaq === index ? null : index)} className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left">
                  <span className="font-semibold text-slate-900">{faq.q}</span>
                  {openFaq === index
                    ? <Minus size={18} className="text-rose-500 flex-shrink-0" />
                    : <Plus size={18} className="text-rose-500 flex-shrink-0" />}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-5 text-gray-500 leading-relaxed">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Newsletter ─── */}
      <section className="py-24 bg-gradient-to-r from-rose-100 via-pink-50 to-purple-100">
        <div className="max-w-4xl mx-auto text-center px-6">
          <Mail size={50} className="mx-auto text-rose-500" />
          <h2 className="text-4xl font-bold font-serif mt-6">Join Our Flower Family</h2>
          <p className="text-gray-600 mt-4">Subscribe for exclusive offers, flower care tips and early access to seasonal collections</p>
          {subscribed ? (
            <div className="mt-10 max-w-xl mx-auto bg-emerald-50 border border-emerald-200 rounded-full px-8 py-5 text-emerald-700 font-semibold flex items-center justify-center gap-2">
              <CheckCircle2 size={20} /> Welcome to the family! Check your inbox soon.
            </div>
          ) : (
            <div className="flex flex-wrap gap-4 mt-10 max-w-xl mx-auto justify-center">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSubscribe()}
                placeholder="Enter your email"
                className="flex-1 min-w-[220px] border border-gray-200 bg-white rounded-full px-6 py-4 outline-none focus:border-rose-400 transition"
              />
              <button onClick={handleSubscribe} className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-4 rounded-full font-semibold transition">
                Subscribe
              </button>
            </div>
          )}
          <div className="flex items-center justify-center gap-4 mt-10">
            <a href="https://www.instagram.com/shiv.amflowers?igsh=MWVocXd2d3BrN3ptdA==" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-11 h-11 rounded-full bg-white flex items-center justify-center text-rose-500 shadow-sm hover:-translate-y-1 transition">
              <FaInstagram size={18} />
            </a>
            <a href="https://www.facebook.com/share/1EHkduyD3K/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-11 h-11 rounded-full bg-white flex items-center justify-center text-rose-500 shadow-sm hover:-translate-y-1 transition">
              <FaFacebookF size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* ─── WhatsApp Floating Button ─── */}
      <a
        href="https://wa.me/919540849659"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-xl shadow-green-300 hover:scale-110 transition-transform duration-200"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={26} color="white" fill="white" />
      </a>
    </>
  );
};

export default Home;