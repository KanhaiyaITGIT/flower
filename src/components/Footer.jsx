import { useState, useEffect } from "react";
import { Flower2, ArrowUpToLine } from "lucide-react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import {
  BUSINESS_NAME_MAIN,
  BUSINESS_NAME_SUB,
  CONTACT_PHONE_1,
  CONTACT_PHONE_2,
  WHATSAPP_LINK,
  INSTAGRAM_LINK,
  FACEBOOK_LINK,
} from "../constants";
import { motion, AnimatePresence } from "framer-motion";

const infoLinks = [
  { name: "About Us", path: "/about" },
  { name: "Gallery", path: "/gallery" },
  { name: "Occasions", path: "/occasions" },
  { name: "Decor", path: "/decor" },
];

const policyLinks = [
  { name: "Terms & Conditions", path: "#" },
  { name: "Privacy Policy", path: "#" },
];

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setShowBackToTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-b from-[#14301F] to-[#0D1F0F] text-[#FBF6EF] font-inter border-t border-white/5 relative overflow-hidden">
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-[#C9A15A]/30 to-transparent" />
      {/* Main Content */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
          {/* Brand Column */}
          <div className="flex flex-col gap-6">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center gold-glow">
                <Flower2 size={18} className="text-[#C9A15A]" />
              </div>
              <h2 className="font-serif-display font-black text-lg md:text-xl text-[#FBF6EF] tracking-tight">
                {BUSINESS_NAME_MAIN} <span className="gold-gradient">{BUSINESS_NAME_SUB}</span>
              </h2>
            </Link>
            
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs font-light">
              Bringing fresh premium blooms, bespoke flower arrangements, and exquisite venue styling to Gurgaon and Delhi NCR. Same-day delivery available.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-3.5">
              {[
                { href: FACEBOOK_LINK, icon: FaFacebook, label: "Facebook" },
                { href: INSTAGRAM_LINK, icon: FaInstagram, label: "Instagram" },
              ].map(({ href, icon: Icon, label }) => (
                <motion.a
                  key={label}
                  whileHover={{ y: -3, scale: 1.1 }}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 hover:bg-[#C9A15A] border border-white/10 hover:border-[#C9A15A] hover:text-[#14301F] flex items-center justify-center text-lg transition-all duration-300"
                  aria-label={label}
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-xs font-bold tracking-widest uppercase text-[#C9A15A] mb-6">
              Information
            </h3>
            <ul className="flex flex-col gap-3 font-light text-sm">
              {infoLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className={`text-gray-400 hover:text-[#C9A15A] transition-all duration-200 block py-1 hover:translate-x-1 ${
                      location.pathname === item.path ? "text-[#C9A15A]" : ""
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies Column */}
          <div>
            <h3 className="text-xs font-bold tracking-widest uppercase text-[#C9A15A] mb-6">
              Policies
            </h3>
            <ul className="flex flex-col gap-3 font-light text-sm">
              {policyLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-gray-400 hover:text-[#C9A15A] transition-all duration-200 block py-1 hover:translate-x-1"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-xs font-bold tracking-widest uppercase text-[#C9A15A] mb-6">
              Contact Us
            </h3>
            <div className="flex flex-col gap-4 font-light text-sm">
              <motion.a
                whileHover={{ x: 4 }}
                href={`tel:${CONTACT_PHONE_1}`}
                className="text-gray-400 hover:text-[#C9A15A] flex items-center gap-3 transition-all duration-200 py-1"
              >
                <span className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-base">📞</span> {CONTACT_PHONE_1}
              </motion.a>
              <motion.a
                whileHover={{ x: 4 }}
                href={`tel:${CONTACT_PHONE_2}`}
                className="text-gray-400 hover:text-[#C9A15A] flex items-center gap-3 transition-all duration-200 py-1"
              >
                <span className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-base">📞</span> {CONTACT_PHONE_2}
              </motion.a>
              <motion.a
                whileHover={{ x: 4 }}
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#C9A15A] flex items-center gap-3 transition-all duration-200 py-1"
              >
                <span className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-base text-emerald-400">
                  <FaWhatsapp />
                </span>
                WhatsApp Support
              </motion.a>
            </div>

            {/* Same Day Delivery Badge */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="mt-6 bg-gradient-to-br from-white/5 to-white/[0.02] border border-[#C9A15A]/20 rounded-xl p-4 max-w-[220px] gold-glow"
            >
              <p className="text-[10px] text-[#C9A15A] font-bold tracking-widest uppercase flex items-center gap-2">
                <span>🚚</span> Same-Day Delivery
              </p>
              <p className="text-xs text-gray-400 mt-1 font-light leading-snug">
                Gurgaon & NCR wide delivery available for orders placed before 4:00 PM.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5 py-8 px-6 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-[#C9A15A]/20 to-transparent" />
        <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center">
          <p className="text-xs text-gray-500 font-light">
            © {new Date().getFullYear()} {BUSINESS_NAME_MAIN} {BUSINESS_NAME_SUB}. All Rights Reserved.
          </p>
          <p className="text-xs text-gray-500 font-light flex items-center gap-1.5 justify-center">
            Crafted with <span className="text-rose-400 animate-pulse">♥</span> in India
          </p>
        </div>
      </div>

      {/* Back to Top */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="fixed bottom-24 right-6 z-50 w-12 h-12 rounded-full bg-[#14301F] border border-[#C9A15A]/30 flex items-center justify-center shadow-xl shadow-black/20 hover:border-[#C9A15A]/60 transition-all duration-300"
            aria-label="Back to top"
          >
            <ArrowUpToLine size={18} className="text-[#C9A15A]" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
