import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  Flower2,
  ShoppingCart,
  Menu,
  X,
  Search,
  MapPin,
  Calendar,
  Briefcase,
  User,
  ChevronDown,
  IndianRupee,
  EllipsisVertical,
  Moon,
  Sun,
} from "lucide-react";
import { useSelector } from "react-redux";
import { selectCartCount } from "../redux/cartSlice";
import { WHATSAPP_LINK, BUSINESS_NAME_MAIN, BUSINESS_NAME_SUB } from "../constants";
import { useTheme } from "../context/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Categories", path: "/category" },
  { name: "Occasions", path: "/occasions" },
  { name: "Decor", path: "/decor" },
  { name: "About", path: "/about" },
  { name: "Gallery", path: "/gallery" },
];

const megaNavLinks = [
  { name: "Birthday", path: "/category?cat=Birthday" },
  { name: "Occasions", path: "/occasions" },
  { name: "Anniversary", path: "/category?cat=Anniversary" },
  { name: "Flowers", path: "/category?cat=Bouquets" },
  { name: "Balloon & Services", path: "/category?cat=Balloon" },
  { name: "Wedding", path: "/category?cat=Wedding" },
  { name: "Reception", path: "/category?cat=Reception" },
  { name: "Haldi", path: "/category?cat=Haldi" },
  { name: "Devotional", path: "/category?cat=Devotional" },
  { name: "Candles & More", path: "/category?cat=Candles+%26+More" },
  { name: "LUXE", path: "/category" },
  { name: "Decor", path: "/decor" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [shrink, setShrink] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const cartCount = useSelector(selectCartCount);
  const navigate = useNavigate();
  const location = useLocation();
  const { dark, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      setShrink(y > 120);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setIsOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? "shadow-sm" : ""}`}>
        {/* ─── TOP HEADER ROW ─── */}
        <div className="bg-white border-b border-gray-100 transition-all duration-300"
          style={{ minHeight: shrink ? "56px" : "64px" }}
        >
          <div className="max-w-[1440px] mx-auto px-4 md:px-8">
            <div className="flex items-center justify-between transition-all duration-300"
              style={{ minHeight: shrink ? "56px" : "72px" }}
            >
              {/* Logo */}
              <Link to="/" className="flex items-center gap-2 shrink-0">
                <motion.div
                  whileHover={{ rotate: 15, scale: 1.05 }}
                  className="w-9 h-9 rounded-full bg-gradient-to-br from-[#14301F] to-[#1a3d28] flex items-center justify-center"
                >
                  <Flower2 size={18} color="#C8A882" />
                </motion.div>
                <span className="hidden sm:inline-block">
                  <h1 className="font-serif-display font-black leading-none transition-all duration-300"
                    style={{ fontSize: shrink ? "14px" : "18px" }}
                  >
                    {BUSINESS_NAME_MAIN}
                  </h1>
                  <p className="text-[#C9A15A] font-semibold tracking-widest uppercase leading-tight transition-all duration-300"
                    style={{ fontSize: shrink ? "7px" : "9px" }}
                  >
                    {BUSINESS_NAME_SUB}
                  </p>
                </span>
              </Link>

              {/* Delivery / Location Selector */}
              <div className="hidden lg:flex items-center gap-2 border-r border-gray-200 pr-5">
                <MapPin size={18} className="text-[#D6537A] shrink-0" />
                <div>
                  <div className="flex items-center gap-1">
                    <span className="text-xs">🇮🇳</span>
                    <span className="text-[11px] font-semibold text-gray-700">India</span>
                    <ChevronDown size={12} className="text-gray-400" />
                  </div>
                  <p className="text-[9px] text-gray-400 leading-tight">Location missing</p>
                </div>
              </div>

              {/* Search Bar */}
              <div className="hidden md:flex flex-1 max-w-[460px] lg:max-w-[520px]">
                <div className="relative w-full">
                  <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search flowers, cakes, plants..."
                    className="w-full h-10 pl-10 pr-4 rounded-full bg-gray-50 border border-gray-200 text-xs text-gray-700 placeholder-gray-400 outline-none focus:border-[#D6537A]/40 focus:bg-white focus:ring-1 focus:ring-[#D6537A]/10 transition-all"
                  />
                </div>
              </div>

              {/* Right Side Utility Icons */}
              <div className="flex items-center gap-1 sm:gap-3">
                <button className="hidden lg:flex flex-col items-center gap-0.5 px-2 py-1 rounded-lg hover:bg-gray-50 transition-colors group" aria-label="Reminders">
                  <Calendar size={18} className="text-gray-500 group-hover:text-[#D6537A] transition-colors" />
                  <span className="text-[9px] text-gray-400 group-hover:text-gray-600 font-medium">Reminders</span>
                </button>

                <button className="hidden lg:flex flex-col items-center gap-0.5 px-2 py-1 rounded-lg hover:bg-gray-50 transition-colors group" aria-label="Currency">
                  <IndianRupee size={18} className="text-gray-500 group-hover:text-[#D6537A] transition-colors" />
                  <span className="text-[9px] text-gray-400 group-hover:text-gray-600 font-medium">INR</span>
                </button>

                <button className="hidden lg:flex flex-col items-center gap-0.5 px-2 py-1 rounded-lg hover:bg-gray-50 transition-colors group" aria-label="Corporate Gifting" onClick={() => navigate("/decor")}>
                  <Briefcase size={18} className="text-gray-500 group-hover:text-[#D6537A] transition-colors" />
                  <span className="text-[9px] text-gray-400 group-hover:text-gray-600 font-medium">Corporate</span>
                </button>

                <button onClick={() => navigate("/cart")} className="relative flex flex-col items-center gap-0.5 px-2 py-1 rounded-lg hover:bg-gray-50 transition-colors group" aria-label="Cart">
                  <ShoppingCart size={18} className="text-gray-500 group-hover:text-[#D6537A] transition-colors" />
                  <span className="text-[9px] text-gray-400 group-hover:text-gray-600 font-medium">Cart</span>
                  <AnimatePresence>
                    {cartCount > 0 && (
                      <motion.span
                        key={cartCount}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        className="absolute -top-0.5 -right-0.5 bg-[#D6537A] text-white text-[8px] font-bold w-4 h-4 rounded-full flex items-center justify-center border border-white"
                      >
                        {cartCount > 9 ? "9+" : cartCount}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>

                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hidden lg:flex flex-col items-center gap-0.5 px-2 py-1 rounded-lg hover:bg-gray-50 transition-colors group" aria-label="Profile">
                  <User size={18} className="text-gray-500 group-hover:text-[#D6537A] transition-colors" />
                  <span className="text-[9px] text-gray-400 group-hover:text-gray-600 font-medium">Hi Guest</span>
                </a>

                <button className="hidden lg:flex flex-col items-center gap-0.5 px-2 py-1 rounded-lg hover:bg-gray-50 transition-colors group" aria-label="More">
                  <EllipsisVertical size={18} className="text-gray-500 group-hover:text-[#D6537A] transition-colors" />
                  <span className="text-[9px] text-gray-400 group-hover:text-gray-600 font-medium">More</span>
                </button>

                {/* Theme Toggle */}
                <button
                  onClick={toggle}
                  className="p-2 rounded-lg hover:bg-gray-50 transition-colors text-gray-500 hover:text-[#D6537A]"
                  aria-label="Toggle theme"
                >
                  <motion.div
                    key={dark ? 'moon' : 'sun'}
                    initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {dark ? <Sun size={18} /> : <Moon size={18} />}
                  </motion.div>
                </button>

                {/* Mobile: Cart + Hamburger */}
                <button
                  onClick={() => setIsOpen(true)}
                  className="lg:hidden p-2 text-gray-600 hover:text-[#D6537A] transition-colors"
                  aria-label="Open menu"
                >
                  <Menu size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ─── MEGA NAV ROW ─── */}
        <motion.div
          className="hidden lg:block bg-white border-b border-gray-100"
          animate={{ height: shrink ? 0 : "auto", opacity: shrink ? 0 : 1 }}
          transition={{ duration: 0.3 }}
          style={{ overflow: "hidden" }}
        >
          <div className="max-w-[1440px] mx-auto px-4 md:px-8">
            <nav className="flex items-center justify-between -ml-3 -mr-3 overflow-x-auto scrollbar-hide">
              {megaNavLinks.map((link) => {
                const isActive = location.pathname === link.path || location.search.includes(link.path.split("=")[1] || "");
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`relative px-3 py-3 text-[11px] font-semibold tracking-wide whitespace-nowrap transition-colors flex items-center gap-1 ${
                      isActive ? "text-[#D6537A]" : "text-gray-600 hover:text-[#14301F]"
                    }`}
                  >
                    {link.name}
                    <ChevronDown size={10} className="text-gray-300" />
                  </Link>
                );
              })}
            </nav>
          </div>
        </motion.div>
      </header>

      {/* ─── MOBILE DRAWER ─── */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-50 bg-[#14301F]/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-[320px] z-50 bg-white shadow-2xl flex flex-col overflow-y-auto"
            >
              <div className="flex items-center justify-between p-5 bg-gradient-to-br from-[#14301F] to-[#0D1F0F]">
                <span className="font-serif-display font-black text-lg text-[#FBF6EF]">
                  {BUSINESS_NAME_MAIN} <span className="text-[#C9A15A] font-light italic">{BUSINESS_NAME_SUB}</span>
                </span>
                <button onClick={() => setIsOpen(false)} className="p-2 bg-white/10 text-[#FBF6EF] rounded-full" aria-label="Close">
                  <X size={18} />
                </button>
              </div>

              {/* Mobile Search */}
              <div className="p-4 border-b border-gray-100">
                <div className="relative">
                  <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full h-9 pl-9 pr-3 rounded-full bg-gray-50 border border-gray-200 text-xs outline-none focus:border-[#D6537A]/40"
                  />
                </div>
              </div>

              <nav className="flex-1 py-4 px-4 flex flex-col gap-0.5">
                {megaNavLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="py-2.5 px-3 rounded-xl text-sm font-medium text-gray-700 hover:text-[#D6537A] hover:bg-rose-50 transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="border-t border-gray-100 my-3" />
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="py-2.5 px-3 rounded-xl text-sm font-medium text-gray-500 hover:text-[#14301F] hover:bg-gray-50 transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>

              <div className="p-5 border-t border-gray-100 text-center text-[10px] text-gray-400 font-semibold tracking-wider">
                © {new Date().getFullYear()} {BUSINESS_NAME_MAIN} {BUSINESS_NAME_SUB}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
