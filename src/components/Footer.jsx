import { Flower2 } from "lucide-react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

const infoLinks = ["About Us", "Gallery", "Occasions", "Decor"];
const policyLinks = ["Return Policy", "Terms & Conditions", "Privacy Policy", "Contact"];

export default function Footer() {
  return (
    <footer style={{ background: "#0D1F0F", color: "#F7F0E8", fontFamily: "'Inter', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Inter:wght@400;500;600;700&display=swap');

        .ftr-link {
          color: rgba(247,240,232,0.45);
          text-decoration: none;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.03em;
          transition: color 0.2s;
          display: block;
          padding: 5px 0;
        }
        .ftr-link:hover { color: #C8A882; }

        .ftr-social {
          width: 38px; height: 38px;
          border-radius: 10px;
          border: 1px solid rgba(247,240,232,0.12);
          background: rgba(247,240,232,0.06);
          display: flex; align-items: center; justify-content: center;
          font-size: 15px; text-decoration: none;
          transition: background 0.2s, border-color 0.2s, transform 0.2s;
        }
        .ftr-social:hover {
          background: #C8A882;
          border-color: #C8A882;
          transform: translateY(-2px);
        }

        .ftr-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
        }
        @media (min-width: 540px) { .ftr-grid { grid-template-columns: 1fr 1fr; } }
        @media (min-width: 900px) { .ftr-grid { grid-template-columns: 2fr 1fr 1fr 1fr; gap: 48px; } }
      `}</style>

      {/* Main content */}
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "64px 32px 48px" }}>
        <div className="ftr-grid">

          {/* Brand column */}
          <div>
            {/* Logo — same as header */}
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
              <div style={{
                width: "42px", height: "42px", borderRadius: "50%",
                background: "rgba(200,168,130,0.15)",
                border: "1px solid rgba(200,168,130,0.3)",
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0,
              }}>
                <Flower2 size={20} color="#C8A882" />
              </div>
              <h2 style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 900,
                fontSize: "1.3rem",
                color: "#F7F0E8",
                margin: 0,
                letterSpacing: "-0.01em",
                lineHeight: 1,
              }}>
                Shivam <span style={{ color: "#C8A882" }}>Florist</span>
              </h2>
            </div>

            <p style={{
              fontSize: "13px", lineHeight: 1.8,
              color: "rgba(247,240,232,0.4)",
              maxWidth: "240px", margin: "0 0 24px",
            }}>
              Bringing fresh blooms and beautiful arrangements to your doorstep — same day delivery available.
            </p>

            {/* Social icons */}
            <div style={{ display: "flex", gap: "10px" }}>
              <a href="#" className="ftr-social" aria-label="Facebook"><FaFacebook></FaFacebook></a>
              <a href="#" className="ftr-social" aria-label="Instagram"> <FaInstagram></FaInstagram> </a>
            </div>
          </div>

          {/* Information */}
          <div>
            <h4 style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "10px", fontWeight: 700,
              letterSpacing: "0.18em", textTransform: "uppercase",
              color: "#C8A882", margin: "0 0 20px",
            }}>
              Information
            </h4>
            <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
              {infoLinks.map((item) => (
                <li key={item}>
                  <a href="#" className="ftr-link">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "10px", fontWeight: 700,
              letterSpacing: "0.18em", textTransform: "uppercase",
              color: "#C8A882", margin: "0 0 20px",
            }}>
              Policies
            </h4>
            <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
              {policyLinks.map((item) => (
                <li key={item}>
                  <a href="#" className="ftr-link">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "10px", fontWeight: 700,
              letterSpacing: "0.18em", textTransform: "uppercase",
              color: "#C8A882", margin: "0 0 20px",
            }}>
              Contact Us
            </h4>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <a href="tel:+919540849659" className="ftr-link" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ fontSize: "15px" }}>📞</span> +91 95408 49659
              </a>
              <a href="https://wa.me/919540849659" target="_blank" className="ftr-link" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ fontSize: "15px" }}> <FaWhatsapp></FaWhatsapp> </span> WhatsApp Us
              </a>
            </div>

            {/* Same day delivery badge */}
            <div style={{
              marginTop: "24px",
              padding: "12px 16px",
              borderRadius: "10px",
              background: "rgba(200,168,130,0.1)",
              border: "1px solid rgba(200,168,130,0.2)",
            }}>
              <p style={{ fontSize: "11px", color: "#C8A882", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", margin: "0 0 2px" }}>
                🚚 Fast Delivery
              </p>
              
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{
        borderTop: "1px solid rgba(247,240,232,0.08)",
        padding: "18px 32px",
      }}>
        <div style={{
          maxWidth: "1280px", margin: "0 auto",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          flexWrap: "wrap", gap: "8px",
        }}>
          <p style={{ fontSize: "11px", color: "rgba(247,240,232,0.25)", margin: 0 }}>
            © {new Date().getFullYear()} Shivam Florist. All Rights Reserved.
          </p>
          <p style={{ fontSize: "11px", color: "rgba(247,240,232,0.25)", margin: 0 }}>
            Made with 🌸 in India
          </p>
        </div>
      </div>
    </footer>
  );
}