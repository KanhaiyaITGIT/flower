import { Flower2 } from "lucide-react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  BUSINESS_NAME_MAIN,
  BUSINESS_NAME_SUB,
  CONTACT_PHONE_1,
  CONTACT_PHONE_2,
  WHATSAPP_LINK,
  INSTAGRAM_LINK,
  FACEBOOK_LINK,
} from "../constants";

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
  return (
    <footer className="bg-[#0D1F0F] text-[#F7F0E8] font-inter border-t border-white/5">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
          {/* Brand Column */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                <Flower2 size={18} className="text-[#C8A882]" />
              </div>
              <h2 className="font-serif-display font-black text-lg md:text-xl text-[#F7F0E8] tracking-tight">
                {BUSINESS_NAME_MAIN} <span className="text-[#C8A882] font-light">{BUSINESS_NAME_SUB}</span>
              </h2>
            </div>
            
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs font-light">
              Bringing fresh premium blooms, bespoke flower arrangements, and exquisite venue styling to Gurgaon and Delhi NCR. Same-day delivery available.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-3.5">
              <a
                href={FACEBOOK_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-[#C8A882] border border-white/10 hover:border-[#C8A882] hover:text-[#0D1F0F] flex items-center justify-center text-lg transition-all duration-300 hover:-translate-y-1"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a
                href={INSTAGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-[#C8A882] border border-white/10 hover:border-[#C8A882] hover:text-[#0D1F0F] flex items-center justify-center text-lg transition-all duration-300 hover:-translate-y-1"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-xs font-bold tracking-widest uppercase text-[#C8A882] mb-6">
              Information
            </h3>
            <ul className="flex flex-col gap-3 font-light text-sm">
              {infoLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-gray-400 hover:text-[#C8A882] transition-colors duration-200 block py-1"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies Column */}
          <div>
            <h3 className="text-xs font-bold tracking-widest uppercase text-[#C8A882] mb-6">
              Policies
            </h3>
            <ul className="flex flex-col gap-3 font-light text-sm">
              {policyLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-gray-400 hover:text-[#C8A882] transition-colors duration-200 block py-1"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-xs font-bold tracking-widest uppercase text-[#C8A882] mb-6">
              Contact Us
            </h3>
            <div className="flex flex-col gap-4 font-light text-sm">
              <a
                href={`tel:${CONTACT_PHONE_1}`}
                className="text-gray-400 hover:text-[#C8A882] flex items-center gap-3 transition-colors duration-200 py-1"
              >
                <span className="text-base select-none">📞</span> {CONTACT_PHONE_1}
              </a>
              <a
                href={`tel:${CONTACT_PHONE_2}`}
                className="text-gray-400 hover:text-[#C8A882] flex items-center gap-3 transition-colors duration-200 py-1"
              >
                <span className="text-base select-none">📞</span> {CONTACT_PHONE_2}
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#C8A882] flex items-center gap-3 transition-colors duration-200 py-1"
              >
                <span className="text-base text-emerald-400">
                  <FaWhatsapp />
                </span>
                WhatsApp Support
              </a>
            </div>

            {/* Same Day Delivery Badge */}
            <div className="mt-6 bg-white/5 border border-white/10 rounded-xl p-4 max-w-[220px]">
              <p className="text-[10px] text-[#C8A882] font-bold tracking-widest uppercase flex items-center gap-2">
                <span>🚚</span> Same-Day Delivery
              </p>
              <p className="text-xs text-gray-400 mt-1 font-light leading-snug">
                Gurgaon & NCR wide delivery available for orders placed before 4:00 PM.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5 py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center">
          <p className="text-xs text-gray-500 font-light">
            © {new Date().getFullYear()} {BUSINESS_NAME_MAIN} {BUSINESS_NAME_SUB}. All Rights Reserved.
          </p>
          <p className="text-xs text-gray-500 font-light flex items-center gap-1.5 justify-center">
            Made with <span className="text-rose-500 animate-pulse">🌸</span> in India
          </p>
        </div>
      </div>
    </footer>
  );
}
