import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Flower2, ShoppingCart, Menu, X } from "lucide-react";
import { useSelector } from "react-redux";
import { selectCartCount } from "../redux/cartSlice";
import { WHATSAPP_LINK, CONTACT_PHONE_1, BUSINESS_NAME_MAIN, BUSINESS_NAME_SUB } from "../constants";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Categories", path: "/category" },
  { name: "Occasions", path: "/occasions" },
  { name: "Decor", path: "/decor" },
  { name: "About", path: "/about" },
  { name: "Gallery", path: "/gallery" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const cartCount = useSelector(selectCartCount);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setIsOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 w-full transition-all duration-300">
        {/* Announcement Bar */}
        <div className="w-full bg-[#0D1F0F] text-[#C8A882] py-2 px-4 text-center text-xs font-semibold tracking-widest uppercase font-inter transition-all hover:text-[#dfc4a3]">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2"
          >
            🌸 Fast Delivery Gurgaon & NCR — WhatsApp / Call Us: <strong>{CONTACT_PHONE_1}</strong>
          </a>
        </div>

        {/* Main Nav Bar */}
        <nav
          className={`w-full transition-all duration-300 ${
            scrolled
              ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100/60 py-3"
              : "bg-white border-b border-gray-100 py-4"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="group flex items-center gap-3 select-none">
              <motion.div 
                whileHover={{ rotate: 18, rotateX: 10, rotateY: 10 }}
                className="w-10 h-10 rounded-full bg-[#0D1F0F] flex items-center justify-center shadow-md shadow-[#0D1F0F]/10 group-hover:shadow-lg group-hover:shadow-[#0D1F0F]/20 transition-all duration-300"
              >
                <Flower2 size={20} color="#C8A882" className="group-hover:scale-110 transition-transform duration-300" />
              </motion.div>
              <h1 className="font-serif-display font-black text-xl md:text-2xl text-[#0D1F0F] tracking-tight leading-none">
                {BUSINESS_NAME_MAIN} <span className="text-[#e11d48] font-light">{BUSINESS_NAME_SUB}</span>
              </h1>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`relative px-4 py-2 text-xs font-bold tracking-widest uppercase font-inter rounded-full transition-all duration-300 ${
                      isActive
                        ? "text-[#0D1F0F] bg-rose-50/60"
                        : "text-[#374151] hover:text-[#0D1F0F] hover:bg-gray-50"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.span
                        layoutId="activeNavTab"
                        className="absolute bottom-1 left-4 right-4 h-0.5 bg-[#0D1F0F] rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-3">
              {/* Cart Button */}
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/cart")}
                className="relative flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0D1F0F] text-[#F7F0E8] font-inter text-xs font-bold tracking-wider uppercase border border-[#0D1F0F] shadow-sm hover:bg-[#1a3320] hover:border-[#1a3320] transition-all duration-300"
                aria-label="Cart"
              >
                <ShoppingCart size={15} className="mr-0.5" />
                <span className="hidden md:inline">Cart</span>
                <AnimatePresence>
                  {cartCount > 0 && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      key={cartCount}
                      className="absolute -top-1.5 -right-1.5 bg-[#e11d48] text-white text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center border-2 border-white shadow-sm"
                    >
                      {cartCount > 99 ? "99+" : cartCount}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>

              {/* Hamburger Button */}
              <button
                onClick={() => setIsOpen(true)}
                className="lg:hidden p-2.5 bg-gray-50 border border-gray-100 text-[#0D1F0F] rounded-full hover:bg-gray-100 hover:border-gray-200 transition-all duration-200"
                aria-label="Open menu"
              >
                <Menu size={20} />
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
            />

            {/* Side Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-[320px] z-50 bg-white shadow-2xl flex flex-col overflow-y-auto"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between p-6 bg-[#0D1F0F] border-b border-[#C8A882]/20">
                <span className="font-serif-display font-black text-lg text-[#F7F0E8] tracking-tight">
                  {BUSINESS_NAME_MAIN} <span className="text-[#C8A882] font-light">{BUSINESS_NAME_SUB}</span>
                </span>
                <button
                  onClick={() => setIsOpen(false)}
                  aria-label="Close menu"
                  className="p-2 bg-white/10 hover:bg-white/20 text-[#F7F0E8] border border-white/10 rounded-full transition-all duration-200"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex-1 py-6 px-6 flex flex-col gap-1">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <Link
                      key={link.name}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`py-3 px-4 rounded-xl text-xs font-bold tracking-wider uppercase font-inter border-l-4 transition-all duration-200 ${
                        isActive
                          ? "text-[#0D1F0F] bg-rose-50/50 border-[#0D1F0F]"
                          : "text-[#374151] hover:text-[#0D1F0F] hover:bg-gray-50 border-transparent"
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}

                {/* Mobile Cart Link */}
                <Link
                  to="/cart"
                  onClick={() => setIsOpen(false)}
                  className="mt-2 py-3 px-4 rounded-xl text-xs font-bold tracking-wider uppercase font-inter border-l-4 border-transparent text-[#e11d48] bg-rose-50/20 hover:bg-rose-50/40 flex items-center justify-between"
                >
                  <span className="flex items-center gap-2.5">
                    <ShoppingCart size={15} />
                    Cart
                  </span>
                  {cartCount > 0 && (
                    <span className="bg-[#e11d48] text-white rounded-full text-[10px] px-2.5 py-0.5 font-bold">
                      {cartCount}
                    </span>
                  )}
                </Link>
              </nav>

              {/* Drawer Footer */}
              <div className="p-6 border-t border-gray-100 text-center text-[10px] text-gray-400 font-semibold tracking-wider font-inter">
                © {new Date().getFullYear()} {BUSINESS_NAME_MAIN} {BUSINESS_NAME_SUB}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}