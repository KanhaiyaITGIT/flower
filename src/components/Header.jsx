import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Flower2, ShoppingCart, Menu, X } from "lucide-react";
import { useSelector } from "react-redux";
import { selectCartCount } from "../redux/cartSlice";

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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    // 950px se upar = desktop/laptop = drawer band karo
    const onResize = () => { if (window.innerWidth >= 1280) setIsOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Inter:wght@500;600;700&display=swap');

        .hdr-announce {
          background: #0D1F0F;
          color: #C8A882;
          font-family: 'Inter', sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          text-align: center;
          padding: 9px 16px;
        }

        .hdr-bar {
          max-width: 1440px;
          margin: 0 auto;
          height: 70px;
          padding: 0 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        @media (min-width: 950px) {
          .hdr-bar { height: 82px; padding: 0 48px; }
        }

        /* Logo */
        .hdr-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          flex-shrink: 0;
          transition: transform 0.2s;
        }
        .hdr-logo:hover { transform: scale(1.03); }

        .hdr-logo-icon {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #0D1F0F;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 16px rgba(13,31,15,0.25);
          flex-shrink: 0;
        }

        .hdr-logo-text {
          font-family: 'Playfair Display', serif;
          font-weight: 900;
          font-size: clamp(1rem, 3vw, 1.45rem);
          color: #0D1F0F;
          margin: 0;
          line-height: 1;
          letter-spacing: -0.01em;
        }
        .hdr-logo-text span { color: #e11d48; }

        /* Desktop nav — sirf 950px+ pe dikhega */
        .hdr-nav {
          display: none;
          align-items: center;
          gap: 2px;
        }
        @media (min-width: 950px) { .hdr-nav { display: flex; } }

        .hdr-nav-link {
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: #374151;
          text-decoration: none;
          padding: 8px 14px;
          border-radius: 8px;
          transition: color 0.2s, background 0.2s;
        }
        .hdr-nav-link:hover { color: #0D1F0F; background: #f3f4f6; }

        /* Right actions */
        .hdr-actions { display: flex; align-items: center; gap: 8px; }

        /* Cart button */
        .hdr-cart {
          position: relative;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 14px;
          border-radius: 12px;
          background: #0D1F0F;
          color: #F7F0E8;
          font-family: 'Inter', sans-serif;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          border: none;
          cursor: pointer;
          box-shadow: 0 4px 16px rgba(13,31,15,0.2);
          transition: transform 0.2s, box-shadow 0.2s, background 0.2s;
        }
        .hdr-cart:hover {
          background: #1a3320;
          transform: translateY(-1px);
          box-shadow: 0 8px 24px rgba(13,31,15,0.3);
        }
        @media (min-width: 950px) { .hdr-cart { padding: 10px 22px; } }

        /* Cart label — desktop pe dikhega */
        .hdr-cart-label { display: none; }
        @media (min-width: 950px) { .hdr-cart-label { display: inline; } }

        .hdr-cart-badge {
          position: absolute;
          top: -7px; right: -7px;
          background: #e11d48;
          color: #fff;
          font-family: 'Inter', sans-serif;
          font-size: 9px; font-weight: 800;
          width: 19px; height: 19px;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          border: 2px solid #fff;
          animation: badgePop 0.25s cubic-bezier(0.34,1.56,0.64,1);
        }
        @keyframes badgePop { from { transform: scale(0); } to { transform: scale(1); } }

        /* Hamburger — desktop pe chhupega */
        .hdr-hamburger {
          display: flex;
          padding: 9px;
          background: #f3f4f6;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          color: #0D1F0F;
          transition: background 0.2s;
        }
        .hdr-hamburger:hover { background: #e5e7eb; }
        @media (min-width: 950px) { .hdr-hamburger { display: none; } }

        /* Drawer */
        .hdr-drawer {
          position: fixed;
          top: 0; right: 0; bottom: 0;
          width: min(320px, 88vw);
          z-index: 70;
          background: #fff;
          box-shadow: -8px 0 40px rgba(0,0,0,0.12);
          display: flex;
          flex-direction: column;
          will-change: transform;
          overflow-y: auto;
          transition: transform 0.3s cubic-bezier(0.32,0,0.67,0);
        }

        .hdr-drawer-link {
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: #1f2937;
          text-decoration: none;
          padding: 15px 0;
          border-bottom: 1px solid #f3f4f6;
          display: block;
          transition: color 0.2s, padding-left 0.2s;
        }
        .hdr-drawer-link:last-child { border-bottom: none; }
        .hdr-drawer-link:hover { color: #e11d48; padding-left: 8px; }
      `}</style>

      <nav style={{
        position: "sticky", top: 0, zIndex: 50,
        background: scrolled ? "rgba(255,255,255,0.97)" : "#fff",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        boxShadow: scrolled ? "0 2px 24px rgba(0,0,0,0.08)" : "none",
        borderBottom: scrolled ? "none" : "1px solid #f3f4f6",
        transition: "box-shadow 0.3s, background 0.3s",
      }}>

        {/* Announcement bar */}
        <div className="hdr-announce">
          🌸 Same Day Delivery Available — Call or WhatsApp Us Now
        </div>

        <div className="hdr-bar">

          {/* Logo */}
          <Link to="/" className="hdr-logo">
            <div className="hdr-logo-icon">
              <Flower2 size={20} color="#C8A882" />
            </div>
            <h1 className="hdr-logo-text">
              Shivam <span>Florist</span>
            </h1>
          </Link>

          {/* Desktop nav links — 950px+ only */}
          <div className="hdr-nav">
            {navLinks.map((link) => (
              <Link key={link.name} to={link.path} className="hdr-nav-link">
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right: Cart + Hamburger */}
          <div className="hdr-actions">
            <button className="hdr-cart" onClick={() => navigate("/cart")} aria-label="Cart">
              <ShoppingCart size={16} />
              <span className="hdr-cart-label">Cart</span>
              {cartCount > 0 && (
                <span className="hdr-cart-badge" key={cartCount}>
                  {cartCount > 99 ? "99+" : cartCount}
                </span>
              )}
            </button>

            {/* Hamburger — tablet + mobile + small laptop */}
            <button className="hdr-hamburger" onClick={() => setIsOpen(true)} aria-label="Open menu">
              <Menu size={22} />
            </button>
          </div>
        </div>
      </nav>

      {/* Backdrop */}
      <div
        onClick={() => setIsOpen(false)}
        style={{
          position: "fixed", inset: 0, zIndex: 60,
          background: "rgba(0,0,0,0.4)",
          backdropFilter: "blur(3px)",
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? "auto" : "none",
          transition: "opacity 0.3s",
        }}
      />

      {/* Drawer — tablet + mobile */}
      <div
        className="hdr-drawer"
        style={{ transform: isOpen ? "translateX(0)" : "translateX(100%)" }}
        aria-hidden={!isOpen}
      >
        {/* Drawer header */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "20px 24px 16px",
          background: "#0D1F0F",
          borderBottom: "2px solid rgba(200,168,130,0.3)",
        }}>
          <span style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 900, color: "#F7F0E8", fontSize: "20px",
          }}>
            Shivam <span style={{ color: "#C8A882" }}>Florist</span>
          </span>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            style={{
              background: "rgba(255,255,255,0.1)", border: "none",
              borderRadius: "8px", padding: "8px", cursor: "pointer",
              color: "#F7F0E8", display: "flex",
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Nav links */}
        <nav style={{ padding: "8px 24px", flex: 1 }}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="hdr-drawer-link"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          {/* Cart link */}
          <Link
            to="/cart"
            className="hdr-drawer-link"
            onClick={() => setIsOpen(false)}
            style={{ color: "#e11d48", display: "flex", alignItems: "center", gap: "10px" }}
          >
            <ShoppingCart size={16} />
            Cart
            {cartCount > 0 && (
              <span style={{
                background: "#e11d48", color: "#fff", borderRadius: "999px",
                fontSize: "11px", padding: "2px 8px", fontWeight: 700,
              }}>
                {cartCount}
              </span>
            )}
          </Link>
        </nav>

        {/* Drawer footer */}
        <div style={{
          padding: "16px 24px",
          borderTop: "1px solid #f3f4f6",
          textAlign: "center",
          fontSize: "11px",
          color: "#9ca3af",
          fontFamily: "'Inter', sans-serif",
        }}>
          © {new Date().getFullYear()} Shivam Florist
        </div>
      </div>
    </>
  );
}