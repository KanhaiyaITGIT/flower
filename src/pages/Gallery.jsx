import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart, selectCartItems } from "../redux/cartSlice";
import flower1 from "../assets/s1.png";
import flower2 from "../assets/s2.png";
import flower3 from "../assets/s3.png";
import flower4 from "../assets/s4.png";
import flower5 from "../assets/s5.png";
import flower6 from "../assets/s6.png";
import flower7 from "../assets/s7.png";
import flower8 from "../assets/s8.png";
import flower9 from "../assets/s9.png";
import flower10 from "../assets/s10.png";
import flower11 from "../assets/s11.png";
import flower12 from "../assets/s12.png";

const flowers = [
  { id: 1,  name: "Crimson Peony",    category: "Peonies",     season: "Spring",   price: 24, color: "#C8524A", bg: "#F9E8E8", image: flower1,  size: "tall"  },
  { id: 2,  name: "Midnight Rose",    category: "Roses",       season: "Summer",   price: 18, color: "#7A2040", bg: "#F5E0E8", image: flower2,  size: "short" },
  { id: 3,  name: "Golden Sunflower", category: "Wildflowers", season: "Summer",   price: 12, color: "#D4A017", bg: "#FDF5DC", image: flower3,  size: "tall"  },
  { id: 4,  name: "Lavender Dream",   category: "Wildflowers", season: "Spring",   price: 16, color: "#7B68C8", bg: "#EDE8F8", image: flower4,  size: "short" },
  { id: 5,  name: "White Orchid",     category: "Orchids",     season: "All Year", price: 32, color: "#A09080", bg: "#F5F2EE", image: flower5,  size: "tall"  },
  { id: 6,  name: "Blush Tulip",      category: "Tulips",      season: "Spring",   price: 14, color: "#E8A0A0", bg: "#FDF0F0", image: flower6,  size: "short" },
  { id: 7,  name: "Ocean Hydrangea",  category: "Wildflowers", season: "Summer",   price: 20, color: "#5080B8", bg: "#E4EEF8", image: flower7,  size: "short" },
  { id: 8,  name: "Sunset Dahlia",    category: "Dahlias",     season: "Autumn",   price: 22, color: "#D0603A", bg: "#FBE8E0", image: flower8,  size: "tall"  },
  { id: 9,  name: "Pearl Gardenia",   category: "Gardenias",   season: "Summer",   price: 28, color: "#B8A898", bg: "#F7F4F0", image: flower9,  size: "short" },
  { id: 10, name: "Purple Iris",      category: "Wildflowers", season: "Spring",   price: 15, color: "#6048A8", bg: "#EDE8F8", image: flower10, size: "tall"  },
  { id: 11, name: "Coral Poppy",      category: "Peonies",     season: "Spring",   price: 13, color: "#E07858", bg: "#FBE8E0", image: flower11, size: "short" },
  { id: 12, name: "Blush Ranunculus", category: "Roses",       season: "Spring",   price: 19, color: "#D88898", bg: "#F9E8EE", image: flower12, size: "tall"  },
];

const categories = ["All", "Roses", "Peonies", "Orchids", "Tulips", "Dahlias", "Gardenias", "Wildflowers"];

// Toast component
function Toast({ message, visible }) {
  return (
    <div style={{
      position: "fixed", bottom: "28px", left: "50%",
      transform: `translateX(-50%) translateY(${visible ? "0" : "20px"})`,
      background: "#0D1F0F", border: "1px solid rgba(200,168,130,0.5)",
      color: "#C8A882", padding: "10px 24px", borderRadius: "999px",
      fontSize: "13px", fontFamily: "'Inter', sans-serif",
      zIndex: 999, opacity: visible ? 1 : 0,
      transition: "all 0.3s ease", pointerEvents: "none",
      boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
      display: "flex", alignItems: "center", gap: "8px",
    }}>
      🛒 Added to cart!
    </div>
  );
}

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightbox, setLightbox] = useState(null);
  const [toast, setToast] = useState(false);
  const [addedIds, setAddedIds] = useState(new Set());

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector(selectCartItems);

  const isInCart = (id) => cartItems.some((i) => i.id === id);

  const filtered = activeCategory === "All"
    ? flowers
    : flowers.filter((f) => f.category === activeCategory);

  function handleAddToCart(flower, e) {
    e?.stopPropagation();
    dispatch(addToCart({
      id: flower.id,
      name: flower.name,
      image: flower.image,
      color: flower.color,
      bg: flower.bg,
      category: flower.category,
      season: flower.season,
      price: flower.price,
    }));
    setAddedIds((prev) => new Set(prev).add(flower.id));
    setToast(true);
    setTimeout(() => setToast(false), 2200);
  }

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", background: "#0D1F0F", minHeight: "100vh", color: "#F7F0E8" }}>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Inter:wght@300;400;500&display=swap" rel="stylesheet" />

      <style>{`
        @media (max-width: 900px) { .gallery-main { columns: 2 !important; } }
        @media (max-width: 560px) { .gallery-main { columns: 1 !important; padding: 8px 16px 60px !important; } }
        .flower-card { break-inside: avoid; margin-bottom: 16px; }
        .card-inner {
          position: relative; border-radius: 14px; overflow: hidden; cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .card-inner:hover { transform: translateY(-5px); box-shadow: 0 24px 48px rgba(0,0,0,0.55); }
        .card-overlay {
          position: absolute; inset: 0; background: rgba(13,31,15,0.88);
          display: flex; flex-direction: column; justify-content: flex-end; padding: 20px;
          opacity: 0; transition: opacity 0.3s ease;
        }
        .card-inner:hover .card-overlay { opacity: 1; }
        .add-cart-btn {
          margin-top: 12px; width: 100%; padding: 10px 16px;
          border-radius: 999px; border: none; cursor: pointer;
          font-family: 'Inter', sans-serif; font-size: 12px;
          font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase;
          transition: all 0.2s ease; display: flex; align-items: center; justify-content: center; gap: 6px;
        }
        .add-cart-btn.in-cart {
          background: rgba(200,168,130,0.15);
          color: #C8A882; border: 1px solid rgba(200,168,130,0.4);
        }
        .add-cart-btn.not-in-cart {
          background: linear-gradient(to right, #fb7185, #e11d48);
          color: #fff; box-shadow: 0 4px 14px rgba(244,63,94,0.35);
        }
        .add-cart-btn.not-in-cart:hover { transform: scale(1.03); box-shadow: 0 6px 20px rgba(244,63,94,0.45); }
      `}</style>

      {/* Hero */}
      <header style={{ padding: "80px 40px 48px", textAlign: "center", borderBottom: "1px solid rgba(200,168,130,0.15)" }}>
        <p style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.25em", color: "#C8A882", textTransform: "uppercase", marginBottom: "20px" }}>
          The Bloom Archive
        </p>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.8rem, 7vw, 5.5rem)", fontWeight: 400, lineHeight: 1.05, margin: "0 0 20px", color: "#F7F0E8" }}>
          Every petal,<br /><em style={{ color: "#C8A882" }}>a story.</em>
        </h1>
        <p style={{ fontSize: "15px", fontWeight: 300, color: "rgba(247,240,232,0.5)", maxWidth: "400px", margin: "0 auto", lineHeight: 1.7 }}>
          Curated florals from field to frame — explore our seasonal collection.
        </p>
      </header>

      {/* Filters */}
      <nav style={{ padding: "28px 40px", display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center" }}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            style={{
              fontSize: "12px", fontWeight: 500, letterSpacing: "0.1em",
              textTransform: "uppercase", padding: "8px 20px", borderRadius: "100px",
              border: activeCategory === cat ? "1px solid #C8A882" : "1px solid rgba(200,168,130,0.25)",
              background: activeCategory === cat ? "#C8A882" : "transparent",
              color: activeCategory === cat ? "#0D1F0F" : "#C8A882",
              cursor: "pointer", transition: "all 0.2s ease", fontFamily: "'Inter', sans-serif",
            }}
          >
            {cat}
          </button>
        ))}
      </nav>

      {/* Masonry Grid */}
      <main className="gallery-main" style={{ padding: "8px 40px 80px", columns: "3", columnGap: "16px", maxWidth: "1200px", margin: "0 auto" }}>
        {filtered.map((flower) => {
          const inCart = isInCart(flower.id);
          return (
            <div key={flower.id} className="flower-card">
              <div
                className="card-inner"
                style={{ background: flower.bg, height: flower.size === "tall" ? "320px" : "220px" }}
                onClick={() => setLightbox(flower)}
              >
                {/* Image */}
                <img
                  src={flower.image}
                  alt={flower.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />

                {/* Hover overlay */}
                <div className="card-overlay">
                  <span style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#C8A882", marginBottom: "4px" }}>
                    {flower.category} · {flower.season}
                  </span>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.3rem", margin: "0 0 4px", color: "#F7F0E8" }}>
                    {flower.name}
                  </h3>
                  <p style={{ fontSize: "11px", color: "rgba(247,240,232,0.6)", margin: "0 0 12px" }}>
                    £{flower.price} per stem
                  </p>
                  <button
                    className={`add-cart-btn ${inCart ? "in-cart" : "not-in-cart"}`}
                    onClick={(e) => !inCart && handleAddToCart(flower, e)}
                  >
                    {inCart ? "✓ In Cart" : "🛒 Add to Cart"}
                  </button>
                </div>

                {/* Season badge */}
                <div style={{
                  position: "absolute", top: "12px", right: "12px",
                  background: "rgba(13,31,15,0.7)", borderRadius: "100px",
                  padding: "4px 12px", fontSize: "10px", letterSpacing: "0.1em",
                  textTransform: "uppercase", color: "#C8A882", backdropFilter: "blur(4px)",
                }}>
                  {flower.season}
                </div>

                {/* In-cart indicator */}
                {inCart && (
                  <div style={{
                    position: "absolute", top: "12px", left: "12px",
                    background: "linear-gradient(to right, #fb7185, #e11d48)",
                    borderRadius: "100px", padding: "4px 10px",
                    fontSize: "9px", fontWeight: 700, letterSpacing: "0.08em",
                    textTransform: "uppercase", color: "#fff",
                  }}>
                    ✓ In Cart
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </main>

      {/* Lightbox */}
      {lightbox && (
        <div
          style={{
            position: "fixed", inset: 0, background: "rgba(13,31,15,0.95)",
            display: "flex", alignItems: "center", justifyContent: "center",
            zIndex: 200, padding: "20px", backdropFilter: "blur(8px)",
          }}
          onClick={() => setLightbox(null)}
        >
          <div
            style={{
              background: "#fff", borderRadius: "20px",
              maxWidth: "440px", width: "100%", overflow: "hidden",
              position: "relative", boxShadow: "0 32px 80px rgba(0,0,0,0.5)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setLightbox(null)}
              style={{
                position: "absolute", top: "14px", right: "14px", zIndex: 10,
                background: "rgba(0,0,0,0.1)", border: "none", borderRadius: "100px",
                width: "34px", height: "34px", cursor: "pointer",
                color: "#0D1F0F", fontSize: "16px",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}
            >✕</button>

            {/* Image */}
            <img
              src={lightbox.image}
              alt={lightbox.name}
              style={{ width: "100%", height: "260px", objectFit: "cover", display: "block" }}
            />

            {/* Body */}
            <div style={{ padding: "24px 28px 28px" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8px" }}>
                <span style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: lightbox.color, fontFamily: "'Inter', sans-serif" }}>
                  {lightbox.category}
                </span>
                <span style={{ fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#9ca3af", fontFamily: "'Inter', sans-serif" }}>
                  {lightbox.season}
                </span>
              </div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.8rem", margin: "0 0 8px", color: "#0D1F0F", fontWeight: 400 }}>
                {lightbox.name}
              </h2>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", color: "#6b7280", lineHeight: 1.7, margin: "0 0 16px" }}>
                A stunning bloom from our {lightbox.season.toLowerCase()} collection. Known for its{" "}
                {lightbox.category === "Roses" ? "timeless elegance and rich fragrance" :
                 lightbox.category === "Peonies" ? "lush, ruffled petals and sweet scent" :
                 lightbox.category === "Orchids" ? "exotic form and graceful longevity" :
                 "wild beauty and naturalistic charm"}.
              </p>

              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "18px" }}>
                <div>
                  <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.6rem", color: "#0D1F0F" }}>£{lightbox.price}</span>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", color: "#9ca3af", marginLeft: "4px" }}>/stem</span>
                </div>
                {isInCart(lightbox.id) && (
                  <span style={{
                    background: "#f0fdf4", color: "#16a34a", border: "1px solid #bbf7d0",
                    padding: "4px 12px", borderRadius: "999px", fontSize: "11px",
                    fontFamily: "'Inter', sans-serif", fontWeight: 600,
                  }}>✓ In Cart</span>
                )}
              </div>

              <div style={{ display: "flex", gap: "10px" }}>
                {!isInCart(lightbox.id) ? (
                  <button
                    onClick={() => handleAddToCart(lightbox)}
                    style={{
                      flex: 1, padding: "12px", borderRadius: "999px", border: "none",
                      background: "linear-gradient(to right, #fb7185, #e11d48)",
                      color: "#fff", fontFamily: "'Inter', sans-serif",
                      fontSize: "12px", fontWeight: 700, letterSpacing: "0.1em",
                      textTransform: "uppercase", cursor: "pointer",
                      boxShadow: "0 4px 14px rgba(244,63,94,0.3)", transition: "all 0.2s",
                    }}
                    onMouseEnter={e => e.currentTarget.style.transform = "scale(1.02)"}
                    onMouseLeave={e => e.currentTarget.style.transform = ""}
                  >
                    🛒 Add to Cart
                  </button>
                ) : (
                  <button
                    onClick={() => { setLightbox(null); navigate("/cart"); }}
                    style={{
                      flex: 1, padding: "12px", borderRadius: "999px", border: "none",
                      background: "#0D1F0F", color: "#C8A882",
                      fontFamily: "'Inter', sans-serif", fontSize: "12px",
                      fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase",
                      cursor: "pointer", transition: "all 0.2s",
                    }}
                  >
                    View Cart →
                  </button>
                )}
                <button
                  style={{
                    padding: "12px 20px", borderRadius: "999px",
                    border: `1px solid ${lightbox.color}`, background: "transparent",
                    color: lightbox.color, fontFamily: "'Inter', sans-serif",
                    fontSize: "12px", fontWeight: 600, letterSpacing: "0.08em",
                    textTransform: "uppercase", cursor: "pointer",
                  }}
                >
                  {lightbox.season}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer style={{ borderTop: "1px solid rgba(200,168,130,0.15)", padding: "40px", textAlign: "center" }}>
        <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", color: "rgba(247,240,232,0.3)", fontStyle: "italic" }}>
          Grown with intention. Arranged with love.
        </p>
      </footer>

      <Toast message="Added to cart!" visible={toast} />
    </div>
  );
}
