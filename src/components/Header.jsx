import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Flower2,
  Search,
  User,
  ShoppingCart,
  Menu,
  X,
} from "lucide-react";

const navLinks = [

  { name: "Home", path: "/" },
  { name: "Categories", path: "/category" },
  { name: "Occasions", path: "/occasions" },
  { name: "Decor", path: "/decor" },
  { name: "About Us", path: "/about" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // Close sidebar on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setIsOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      <style>{`
        /* Announcement bar: truncate on tiny screens, allow wrapping on medium */
        .announcement-bar {
          font-size: 11px;
          letter-spacing: 0.06em;
          padding: 8px 12px;
          line-height: 1.5;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        @media (min-width: 480px) {
          .announcement-bar {
            white-space: normal;
            overflow: visible;
            text-overflow: unset;
          }
        }

        /* Nav height: slightly shorter on small phones */
        .nav-inner {
          height: 64px;
          padding: 0 16px;
        }
        @media (min-width: 480px) {
          .nav-inner { padding: 0 24px; }
        }
        @media (min-width: 768px) {
          .nav-inner { height: 80px; padding: 0 32px; }
        }

        /* Logo text: always visible but smaller on tiny screens */
        .logo-text {
          font-size: clamp(1rem, 4vw, 1.25rem);
        }

        /* Right actions: tighter gaps on small screens */
        .right-actions {
          display: flex;
          align-items: center;
          gap: 4px;
        }
        @media (min-width: 400px) {
          .right-actions { gap: 6px; }
        }
        @media (min-width: 640px) {
          .right-actions { gap: 8px; }
        }

        /* Icon buttons: slightly smaller tap target on very small screens */
        .icon-btn {
          padding: 7px;
          color: #4b5563;
          background: none;
          border: none;
          cursor: pointer;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: color 0.2s, background 0.15s;
        }
        .icon-btn:hover { color: #f43f5e; background: #fff1f2; }

        /* Cart button */
        .cart-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          border-radius: 9999px;
          background: linear-gradient(to right, #fb7185, #e11d48);
          color: #fff;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          border: none;
          cursor: pointer;
          box-shadow: 0 4px 14px rgba(244,63,94,0.3);
          transition: transform 0.2s, box-shadow 0.2s;
          padding: 9px 11px;
        }
        .cart-btn:hover { transform: translateY(-1px); box-shadow: 0 8px 20px rgba(244,63,94,0.35); }
        @media (min-width: 768px) {
          .cart-btn { padding: 10px 20px; }
        }
        .cart-label { display: none; }
        @media (min-width: 768px) {
          .cart-label { display: inline; }
        }

        /* Underline nav link animation */
        .nav-link {
          position: relative;
          font-size: 14px;
          font-weight: 600;
          color: #374151;
          text-decoration: none;
          transition: color 0.2s;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          left: 0; bottom: -4px;
          height: 2px; width: 0;
          background: #f43f5e;
          transition: width 0.25s ease;
        }
        .nav-link:hover { color: #f43f5e; }
        .nav-link:hover::after { width: 100%; }

        /* Sidebar mobile link */
        .sidebar-link {
          font-size: 16px;
          font-weight: 600;
          color: #1f2937;
          text-decoration: none;
          padding: 10px 0;
          border-bottom: 1px solid #f3f4f6;
          display: block;
          transition: color 0.2s, padding-left 0.2s;
        }
        .sidebar-link:last-child { border-bottom: none; }
        .sidebar-link:hover { color: #f43f5e; padding-left: 6px; }
      `}</style>

      <nav
        style={{
          position: "sticky", top: 0, zIndex: 50,
          transition: "box-shadow 0.3s, background 0.3s",
          background: scrolled ? "rgba(255,255,255,0.96)" : "#fff",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
          boxShadow: scrolled ? "0 2px 24px rgba(0,0,0,0.09)" : "none",
          borderBottom: scrolled ? "none" : "1px solid #f3f4f6",
        }}
      >
        {/* Announcement bar */}
        <div
          className="announcement-bar"
          style={{
            background: "linear-gradient(to right, #0f172a, #1e3a8a, #0f172a)",
            color: "#fff",
            textAlign: "center",
          }}
        >
          FOR SAME DAY DELIVERY, PLEASE CALL / WHATSAPP US →
        </div>

        {/* Main bar */}
        <div
          className="nav-inner"
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <Link
            to="/"
            style={{
              display: "flex", alignItems: "center", gap: "10px",
              textDecoration: "none", flexShrink: 0,
              transition: "transform 0.2s",
            }}
            onMouseEnter={e => e.currentTarget.style.transform = "scale(1.04)"}
            onMouseLeave={e => e.currentTarget.style.transform = ""}
          >
            <div style={{
              width: "38px", height: "38px", borderRadius: "50%", flexShrink: 0,
              background: "linear-gradient(135deg, #fb7185, #e11d48)",
              display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: "0 4px 12px rgba(244,63,94,0.3)",
            }}>
              <Flower2 size={18} color="#fff" />
            </div>
            <h1 className="logo-text" style={{
              fontFamily: "Georgia, serif",
              fontWeight: 700, color: "#f43f5e",
              margin: 0, lineHeight: 1,
            }}>
              flowers
            </h1>
          </Link>

          {/* Desktop nav links */}
          <div style={{ display: "flex", alignItems: "center", gap: "2rem" }} className="hidden md:flex">
            {navLinks.map((link) => (
              <Link key={link.name} to={link.path} className="nav-link">
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right actions */}
          <div className="right-actions">
            <button className="icon-btn" aria-label="Search">
              <Search size={20} />
            </button>

            {/* User icon: hide on very small screens to save space */}
            <button className="icon-btn" aria-label="Account" style={{ display: "flex" }}
              onMouseEnter={e => e.currentTarget.style.cssText += ";color:#f43f5e;background:#fff1f2;"}
              onMouseLeave={e => { e.currentTarget.style.color = "#4b5563"; e.currentTarget.style.background = ""; }}
            >
              <User size={20} />
            </button>

            <button className="cart-btn" aria-label="Cart">
              <ShoppingCart size={16} />
              <span className="cart-label">CART</span>
            </button>

            {/* Hamburger — mobile only */}
            <button
              onClick={() => setIsOpen(true)}
              className="icon-btn"
              aria-label="Open menu"
              style={{ display: "flex" }}
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </nav>

      {/* Desktop hides hamburger via CSS */}
      <style>{`
        @media (min-width: 768px) {
          button[aria-label="Open menu"] { display: none !important; }
          div.hidden.md\\:flex { display: flex !important; }
        }
        @media (max-width: 767px) {
          div.hidden.md\\:flex { display: none !important; }
          button[aria-label="Account"] { display: none; }
        }
        @media (max-width: 360px) {
          button[aria-label="Search"] { display: none; }
        }
      `}</style>

      {/* ── Mobile Sidebar ── */}
      {/* Backdrop */}
      <div
        onClick={() => setIsOpen(false)}
        style={{
          position: "fixed", inset: 0, zIndex: 60,
          background: "rgba(0,0,0,0.45)",
          backdropFilter: "blur(3px)",
          WebkitBackdropFilter: "blur(3px)",
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? "auto" : "none",
          transition: "opacity 0.3s ease",
        }}
      />

      {/* Drawer */}
      <div
        style={{
          position: "fixed", top: 0, right: 0, bottom: 0,
          width: "min(300px, 85vw)",
          zIndex: 70,
          background: "#fff",
          boxShadow: "-8px 0 40px rgba(0,0,0,0.15)",
          display: "flex", flexDirection: "column",
          transform: isOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.32s cubic-bezier(0.32,0,0.67,0)",
          willChange: "transform",
          overflowY: "auto",
        }}
        aria-hidden={!isOpen}
      >
        {/* Drawer header */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "20px 20px 16px",
          borderBottom: "1px solid #f3f4f6",
        }}>
          <span style={{ fontFamily: "Georgia, serif", fontWeight: 700, color: "#f43f5e", fontSize: "18px" }}>
            Menu
          </span>
          <button
            onClick={() => setIsOpen(false)}
            className="icon-btn"
            aria-label="Close menu"
            style={{ padding: "8px" }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Nav links */}
        <nav style={{ padding: "12px 20px", flex: 1 }}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="sidebar-link"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Drawer footer */}
        <div style={{
          padding: "16px 20px",
          borderTop: "1px solid #f3f4f6",
          textAlign: "center",
          fontSize: "12px", color: "#9ca3af",
        }}>
          © {new Date().getFullYear()} Bring My Flowers
        </div>
      </div>
    </>
  );
}