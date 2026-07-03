import { useState, useMemo } from "react";
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
import flower13 from "../assets/s13.png";
import flower14 from "../assets/s14.png";
import flower15 from "../assets/s15.png";
import flower16 from "../assets/s16.png";
import flower17 from "../assets/s17.png";
import flower18 from "../assets/s18.png";
import flower19 from "../assets/s19.png";
import FloatingDecoration from "../components/FloatingDecoration";
import BokehLights from "../components/BokehLights";
import flower20 from "../assets/s20.png";
import flower21 from "../assets/s21.png";
import flower22 from "../assets/s22.png";
import flower23 from "../assets/s23.png";
import flower24 from "../assets/s24.png";
import flower25 from "../assets/s25.png";
import flower26 from "../assets/s26.png";
import flower27 from "../assets/s27.png";
import flower28 from "../assets/s28.png";
import flower29 from "../assets/s29.png";
import flower30 from "../assets/s30.png";
import flower31 from "../assets/s31.png";
import flower32 from "../assets/s32.png";
import flower33 from "../assets/s33.png";
import flower34 from "../assets/s34.png";
import flower35 from "../assets/s35.png";
import flower36 from "../assets/s36.png";
import flower37 from "../assets/s37.png";
import flower38 from "../assets/s38.png";
import flower39 from "../assets/s39.png";
import flower40 from "../assets/s40.png";
import flower41 from "../assets/s41.png";
import flower42 from "../assets/s42.png";
import flower43 from "../assets/s43.png";
import flower44 from "../assets/s44.png";
import flower45 from "../assets/s45.png";
import flower46 from "../assets/s46.png";
import flower47 from "../assets/s47.png";
import flower48 from "../assets/s48.png";
import flower49 from "../assets/s49.png";
import flower50 from "../assets/s50.png";
import flower51 from "../assets/s51.png";
import flower52 from "../assets/s52.png";
import flower53 from "../assets/s53.png";
import flower54 from "../assets/s54.png";
import flower55 from "../assets/s55.png";
import flower56 from "../assets/s56.png";
import flower57 from "../assets/s57.png";
import flower58 from "../assets/s58.png";
import flower59 from "../assets/s59.png";
import flower60 from "../assets/s60.png";
import flower61 from "../assets/s61.png";
import flower62 from "../assets/s62.png";
import flower63 from "../assets/s63.png";
import flower64 from "../assets/s64.png";
import flower65 from "../assets/s65.png";
import flower66 from "../assets/s66.png";
import flower67 from "../assets/s67.png";
import flower68 from "../assets/s68.png";
import flower69 from "../assets/s69.png";
import flower70 from "../assets/s70.png";
import flower71 from "../assets/s71.png";
import flower72 from "../assets/s72.png";
import flower73 from "../assets/s73.png";
import flower74 from "../assets/s74.png";
import flower75 from "../assets/s75.png";
import flower76 from "../assets/s76.png";
import flower77 from "../assets/s77.png";
import flower78 from "../assets/s78.png";
import flower79 from "../assets/s79.png";
import flower80 from "../assets/s80.png";
import flower81 from "../assets/s81.png";
import flower82 from "../assets/s82.png";
import flower83 from "../assets/s83.png";
import flower84 from "../assets/s84.png";
import flower85 from "../assets/s85.png";

const galleryImages = [
  { id: 1, src: flower1, alt: "Shivam Florist flower decoration design 1", size: "large", accent: "#C8524A", bg: "#F9E8E8" },
  { id: 2, src: flower2, alt: "Shivam Florist flower decoration design 2", size: "small", accent: "#7A2040", bg: "#F5E0E8" },
  { id: 3, src: flower3, alt: "Shivam Florist flower decoration design 3", size: "medium", accent: "#D4A017", bg: "#FDF5DC" },
  { id: 4, src: flower4, alt: "Shivam Florist flower decoration design 4", size: "small", accent: "#7B68C8", bg: "#EDE8F8" },
  { id: 5, src: flower5, alt: "Shivam Florist flower decoration design 5", size: "large", accent: "#A09080", bg: "#F5F2EE" },
  { id: 6, src: flower6, alt: "Shivam Florist flower decoration design 6", size: "medium", accent: "#E8A0A0", bg: "#FDF0F0" },
  { id: 7, src: flower7, alt: "Shivam Florist flower decoration design 7", size: "small", accent: "#5080B8", bg: "#E4EEF8" },
  { id: 8, src: flower8, alt: "Shivam Florist flower decoration design 8", size: "large", accent: "#D0603A", bg: "#FBE8E0" },
  { id: 9, src: flower9, alt: "Shivam Florist flower decoration design 9", size: "small", accent: "#B8A898", bg: "#F7F4F0" },
  { id: 10, src: flower10, alt: "Shivam Florist flower decoration design 10", size: "medium", accent: "#6048A8", bg: "#EDE8F8" },
  { id: 11, src: flower11, alt: "Shivam Florist flower decoration design 11", size: "large", accent: "#E07858", bg: "#FBE8E0" },
  { id: 12, src: flower12, alt: "Shivam Florist flower decoration design 12", size: "small", accent: "#D88898", bg: "#F9E8EE" },
  { id: 13, src: flower13, alt: "Shivam Florist flower decoration design 13", size: "medium", accent: "#C8524A", bg: "#F9E8E8" },
  { id: 14, src: flower14, alt: "Shivam Florist flower decoration design 14", size: "small", accent: "#7A2040", bg: "#F5E0E8" },
  { id: 15, src: flower15, alt: "Shivam Florist flower decoration design 15", size: "large", accent: "#D4A017", bg: "#FDF5DC" },
  { id: 16, src: flower16, alt: "Shivam Florist flower decoration design 16", size: "medium", accent: "#7B68C8", bg: "#EDE8F8" },
  { id: 17, src: flower17, alt: "Shivam Florist flower decoration design 17", size: "small", accent: "#A09080", bg: "#F5F2EE" },
  { id: 18, src: flower18, alt: "Shivam Florist flower decoration design 18", size: "large", accent: "#E8A0A0", bg: "#FDF0F0" },
  { id: 19, src: flower19, alt: "Shivam Florist flower decoration design 19", size: "small", accent: "#5080B8", bg: "#E4EEF8" },
  { id: 20, src: flower20, alt: "Shivam Florist flower decoration design 20", size: "medium", accent: "#D0603A", bg: "#FBE8E0" },
  { id: 21, src: flower21, alt: "Shivam Florist flower decoration design 21", size: "large", accent: "#B8A898", bg: "#F7F4F0" },
  { id: 22, src: flower22, alt: "Shivam Florist flower decoration design 22", size: "small", accent: "#6048A8", bg: "#EDE8F8" },
  { id: 23, src: flower23, alt: "Shivam Florist flower decoration design 23", size: "medium", accent: "#E07858", bg: "#FBE8E0" },
  { id: 24, src: flower24, alt: "Shivam Florist flower decoration design 24", size: "small", accent: "#D88898", bg: "#F9E8EE" },
  { id: 25, src: flower25, alt: "Shivam Florist flower decoration design 25", size: "large", accent: "#C8524A", bg: "#F9E8E8" },
  { id: 26, src: flower26, alt: "Shivam Florist flower decoration design 26", size: "medium", accent: "#7A2040", bg: "#F5E0E8" },
  { id: 27, src: flower27, alt: "Shivam Florist flower decoration design 27", size: "small", accent: "#D4A017", bg: "#FDF5DC" },
  { id: 28, src: flower28, alt: "Shivam Florist flower decoration design 28", size: "large", accent: "#7B68C8", bg: "#EDE8F8" },
  { id: 29, src: flower29, alt: "Shivam Florist flower decoration design 29", size: "small", accent: "#A09080", bg: "#F5F2EE" },
  { id: 30, src: flower30, alt: "Shivam Florist flower decoration design 30", size: "medium", accent: "#E8A0A0", bg: "#FDF0F0" },
  { id: 31, src: flower31, alt: "Shivam Florist flower decoration design 31", size: "large", accent: "#5080B8", bg: "#E4EEF8" },
  { id: 32, src: flower32, alt: "Shivam Florist flower decoration design 32", size: "small", accent: "#D0603A", bg: "#FBE8E0" },
  { id: 33, src: flower33, alt: "Shivam Florist flower decoration design 33", size: "medium", accent: "#B8A898", bg: "#F7F4F0" },
  { id: 34, src: flower34, alt: "Shivam Florist flower decoration design 34", size: "small", accent: "#6048A8", bg: "#EDE8F8" },
  { id: 35, src: flower35, alt: "Shivam Florist flower decoration design 35", size: "large", accent: "#E07858", bg: "#FBE8E0" },
  { id: 36, src: flower36, alt: "Shivam Florist flower decoration design 36", size: "medium", accent: "#D88898", bg: "#F9E8EE" },
  { id: 37, src: flower37, alt: "Shivam Florist flower decoration design 37", size: "small", accent: "#C8524A", bg: "#F9E8E8" },
  { id: 38, src: flower38, alt: "Shivam Florist flower decoration design 38", size: "large", accent: "#7A2040", bg: "#F5E0E8" },
  { id: 39, src: flower39, alt: "Shivam Florist flower decoration design 39", size: "small", accent: "#D4A017", bg: "#FDF5DC" },
  { id: 40, src: flower40, alt: "Shivam Florist flower decoration design 40", size: "medium", accent: "#7B68C8", bg: "#EDE8F8" },
  { id: 41, src: flower41, alt: "Shivam Florist flower decoration design 41", size: "large", accent: "#A09080", bg: "#F5F2EE" },
  { id: 42, src: flower42, alt: "Shivam Florist flower decoration design 42", size: "small", accent: "#E8A0A0", bg: "#FDF0F0" },
  { id: 43, src: flower43, alt: "Shivam Florist flower decoration design 43", size: "medium", accent: "#5080B8", bg: "#E4EEF8" },
  { id: 44, src: flower44, alt: "Shivam Florist flower decoration design 44", size: "small", accent: "#D0603A", bg: "#FBE8E0" },
  { id: 45, src: flower45, alt: "Shivam Florist flower decoration design 45", size: "large", accent: "#B8A898", bg: "#F7F4F0" },
  { id: 46, src: flower46, alt: "Shivam Florist flower decoration design 46", size: "medium", accent: "#6048A8", bg: "#EDE8F8" },
  { id: 47, src: flower47, alt: "Shivam Florist flower decoration design 47", size: "small", accent: "#E07858", bg: "#FBE8E0" },
  { id: 48, src: flower48, alt: "Shivam Florist flower decoration design 48", size: "large", accent: "#D88898", bg: "#F9E8EE" },
  { id: 49, src: flower49, alt: "Shivam Florist flower decoration design 49", size: "small", accent: "#C8524A", bg: "#F9E8E8" },
  { id: 50, src: flower50, alt: "Shivam Florist flower decoration design 50", size: "medium", accent: "#7A2040", bg: "#F5E0E8" },
  { id: 51, src: flower51, alt: "Shivam Florist flower decoration design 51", size: "large", accent: "#D4A017", bg: "#FDF5DC" },
  { id: 52, src: flower52, alt: "Shivam Florist flower decoration design 52", size: "small", accent: "#7B68C8", bg: "#EDE8F8" },
  { id: 53, src: flower53, alt: "Shivam Florist flower decoration design 53", size: "medium", accent: "#A09080", bg: "#F5F2EE" },
  { id: 54, src: flower54, alt: "Shivam Florist flower decoration design 54", size: "small", accent: "#E8A0A0", bg: "#FDF0F0" },
  { id: 55, src: flower55, alt: "Shivam Florist flower decoration design 55", size: "large", accent: "#5080B8", bg: "#E4EEF8" },
  { id: 56, src: flower56, alt: "Shivam Florist flower decoration design 56", size: "medium", accent: "#D0603A", bg: "#FBE8E0" },
  { id: 57, src: flower57, alt: "Shivam Florist flower decoration design 57", size: "small", accent: "#B8A898", bg: "#F7F4F0" },
  { id: 58, src: flower58, alt: "Shivam Florist flower decoration design 58", size: "large", accent: "#6048A8", bg: "#EDE8F8" },
  { id: 59, src: flower59, alt: "Shivam Florist flower decoration design 59", size: "small", accent: "#E07858", bg: "#FBE8E0" },
  { id: 60, src: flower60, alt: "Shivam Florist flower decoration design 60", size: "medium", accent: "#D88898", bg: "#F9E8EE" },
  { id: 61, src: flower61, alt: "Shivam Florist flower decoration design 61", size: "large", accent: "#C8524A", bg: "#F9E8E8" },
  { id: 62, src: flower62, alt: "Shivam Florist flower decoration design 62", size: "small", accent: "#7A2040", bg: "#F5E0E8" },
  { id: 63, src: flower63, alt: "Shivam Florist flower decoration design 63", size: "medium", accent: "#D4A017", bg: "#FDF5DC" },
  { id: 64, src: flower64, alt: "Shivam Florist flower decoration design 64", size: "small", accent: "#7B68C8", bg: "#EDE8F8" },
  { id: 65, src: flower65, alt: "Shivam Florist flower decoration design 65", size: "large", accent: "#A09080", bg: "#F5F2EE" },
  { id: 66, src: flower66, alt: "Shivam Florist flower decoration design 66", size: "medium", accent: "#E8A0A0", bg: "#FDF0F0" },
  { id: 67, src: flower67, alt: "Shivam Florist flower decoration design 67", size: "small", accent: "#5080B8", bg: "#E4EEF8" },
  { id: 68, src: flower68, alt: "Shivam Florist flower decoration design 68", size: "large", accent: "#D0603A", bg: "#FBE8E0" },
  { id: 69, src: flower69, alt: "Shivam Florist flower decoration design 69", size: "small", accent: "#B8A898", bg: "#F7F4F0" },
  { id: 70, src: flower70, alt: "Shivam Florist flower decoration design 70", size: "medium", accent: "#6048A8", bg: "#EDE8F8" },
  { id: 71, src: flower71, alt: "Shivam Florist flower decoration design 71", size: "large", accent: "#E07858", bg: "#FBE8E0" },
  { id: 72, src: flower72, alt: "Shivam Florist flower decoration design 72", size: "small", accent: "#D88898", bg: "#F9E8EE" },
  { id: 73, src: flower73, alt: "Shivam Florist flower decoration design 73", size: "medium", accent: "#C8524A", bg: "#F9E8E8" },
  { id: 74, src: flower74, alt: "Shivam Florist flower decoration design 74", size: "small", accent: "#7A2040", bg: "#F5E0E8" },
  { id: 75, src: flower75, alt: "Shivam Florist flower decoration design 75", size: "large", accent: "#D4A017", bg: "#FDF5DC" },
  { id: 76, src: flower76, alt: "Shivam Florist flower decoration design 76", size: "medium", accent: "#7B68C8", bg: "#EDE8F8" },
  { id: 77, src: flower77, alt: "Shivam Florist flower decoration design 77", size: "small", accent: "#A09080", bg: "#F5F2EE" },
  { id: 78, src: flower78, alt: "Shivam Florist flower decoration design 78", size: "large", accent: "#E8A0A0", bg: "#FDF0F0" },
  { id: 79, src: flower79, alt: "Shivam Florist flower decoration design 79", size: "small", accent: "#5080B8", bg: "#E4EEF8" },
  { id: 80, src: flower80, alt: "Shivam Florist flower decoration design 80", size: "medium", accent: "#D0603A", bg: "#FBE8E0" },
  { id: 81, src: flower81, alt: "Shivam Florist flower decoration design 81", size: "large", accent: "#B8A898", bg: "#F7F4F0" },
  { id: 82, src: flower82, alt: "Shivam Florist flower decoration design 82", size: "small", accent: "#6048A8", bg: "#EDE8F8" },
  { id: 83, src: flower83, alt: "Shivam Florist flower decoration design 83", size: "medium", accent: "#E07858", bg: "#FBE8E0" },
  { id: 84, src: flower84, alt: "Shivam Florist flower decoration design 84", size: "small", accent: "#D88898", bg: "#F9E8EE" },
  { id: 85, src: flower85, alt: "Shivam Florist flower decoration design 85", size: "large", accent: "#C8524A", bg: "#F9E8E8" },
];

const PAGE_SIZE = 12;

export default function Gallery() {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [lightbox, setLightbox] = useState(null);

  const visibleImages = useMemo(
    () => galleryImages.slice(0, visibleCount),
    [visibleCount]
  );

  const hasMore = visibleCount < galleryImages.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + PAGE_SIZE, galleryImages.length));
  };

  return (
    <div
      style={{
        fontFamily: "'Inter', sans-serif",
        background: "#0D1F0F",
        minHeight: "100vh",
        color: "#F7F0E8",
        position: "relative",
      }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Inter:wght@300;400;500&display=swap"
        rel="stylesheet"
      />

      <style>{`
        /* ── Responsive masonry grid ── */
        .gallery-main {
          columns: 4;
          column-gap: 22px;
        }
        @media (max-width: 1200px) {
          .gallery-main { columns: 3 !important; column-gap: 18px !important; }
        }
        @media (max-width: 900px) {
          .gallery-main { columns: 2 !important; column-gap: 14px !important; padding: 24px 24px 40px !important; }
        }
        @media (max-width: 560px) {
          .gallery-main { columns: 1 !important; padding: 16px 16px 32px !important; column-gap: 0 !important; }
        }
        @media (max-width: 360px) {
          .gallery-main { padding: 12px 10px 28px !important; }
        }

        .flower-card {
          break-inside: avoid;
          margin-bottom: 22px;
          opacity: 0;
          animation: fadeInUp 0.5s ease forwards;
        }
        @media (max-width: 560px) { .flower-card { margin-bottom: 16px; } }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .card-inner {
          position: relative;
          border-radius: 18px;
          overflow: hidden;
          cursor: pointer;
          transition: transform 0.35s cubic-bezier(.2,.8,.2,1), box-shadow 0.35s ease;
          box-shadow: 0 4px 16px rgba(0,0,0,0.15);
        }
        /* mixed big/medium/small card heights for a lively Pinterest-style masonry */
        .size-small { height: 220px; }
        .size-medium { height: 300px; }
        .size-large { height: 400px; }
        @media (max-width: 1200px) {
          .size-small { height: 200px; }
          .size-medium { height: 270px; }
          .size-large { height: 360px; }
        }
        @media (max-width: 900px) {
          .size-small { height: 190px; }
          .size-medium { height: 250px; }
          .size-large { height: 330px; }
        }
        @media (max-width: 560px) {
          .size-small { height: 210px; }
          .size-medium { height: 260px; }
          .size-large { height: 320px; }
        }
        .card-inner:hover {
          transform: translateY(-6px) scale(1.03);
          box-shadow: 0 8px 30px rgba(214,83,122,0.2);
        }
        .card-inner img {
          width: 100%; height: 100%; object-fit: cover; display: block;
          transition: transform 0.5s ease;
        }
        .card-inner:hover img { transform: scale(1.07); }

        /* thin colour accent strip — brings back the original "coloured card" feel */
        .card-accent-bar {
          position: absolute; top: 0; left: 0; right: 0; height: 5px; z-index: 3;
        }

        /* small coloured chip, top-left, like the old category/season badge */
        .card-chip {
          position: absolute; top: 16px; left: 14px; z-index: 3;
          padding: 5px 12px; border-radius: 18px;
          font-size: 9px; font-weight: 700; letter-spacing: 0.12em;
          text-transform: uppercase; color: #fff;
          box-shadow: 0 4px 16px rgba(0,0,0,0.1);
          backdrop-filter: blur(2px);
        }

        .card-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(13,31,15,0.88) 0%, rgba(13,31,15,0) 58%);
          display: flex; flex-direction: column; justify-content: flex-end; padding: 18px;
          opacity: 0; transition: opacity 0.3s ease;
        }
        .card-inner:hover .card-overlay { opacity: 1; }
        @media (hover: none) {
          .card-overlay { opacity: 1; background: linear-gradient(to top, rgba(13,31,15,0.78) 0%, rgba(13,31,15,0) 68%); }
        }
        .card-overlay-label {
          font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase;
          font-weight: 600;
        }

        .load-more-btn {
          padding: 14px 44px; border-radius: 18px; border: 1px solid #C8A882;
          background: transparent; color: #C8A882; cursor: pointer;
          font-family: 'Inter', sans-serif; font-size: 12px; font-weight: 600;
          letter-spacing: 0.15em; text-transform: uppercase;
          transition: all 0.25s ease;
        }
        .load-more-btn:hover {
          background: #C8A882; color: #0D1F0F;
          transform: scale(1.04);
          box-shadow: 0 8px 30px rgba(200,168,130,0.3);
        }
        @media (max-width: 480px) {
          .load-more-btn { width: 100%; padding: 14px 20px; }
        }

        .lightbox-img {
          width: 100%; height: auto; max-height: 70vh; object-fit: contain;
          display: block; background: #000;
        }
        @media (max-width: 560px) {
          .lightbox-img { max-height: 60vh; }
        }

        .gallery-hero { padding: 80px 40px 48px; }
        @media (max-width: 900px) { .gallery-hero { padding: 56px 28px 36px; } }
        @media (max-width: 560px) { .gallery-hero { padding: 40px 18px 28px; } }
      `}</style>

      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <FloatingDecoration type="leaf" side="left" top="4%" size={26} opacity={0.1} delay={0.4} duration={14} animation="sway3" color="#d1bca8" />
        <FloatingDecoration type="petal6" side="right" top="3%" size={22} opacity={0.1} delay={1.3} duration={13} animation="sway2" color="#d1bca8" />
        <FloatingDecoration type="petal5" side="left" bottom="10%" size={30} opacity={0.1} delay={0.7} duration={12} animation="sway1" color="#d1bca8" />
        <FloatingDecoration type="petal" side="right" bottom="8%" size={20} opacity={0.1} delay={2} duration={15} animation="sway2" color="#d1bca8" />
        <FloatingDecoration type="rose" side="right" top="6%" size={36} opacity={0.08} delay={0} duration={18} animation="bloom" color="#C8A882" />
        <FloatingDecoration type="lotus" side="left" top="auto" bottom="15%" size={40} opacity={0.07} delay={2} duration={16} animation="drift-bloom" color="#C8A882" />
      </div>

      {/* Bokeh Lights */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true" style={{ zIndex: 0 }}>
        <BokehLights spots={[
          { color: "from-rose-400/10 to-transparent", size: 280, top: "-6%", right: "-4%", anim: "bk-drift1", delay: 0, duration: 30 },
          { color: "from-amber-300/8 to-transparent", size: 240, bottom: "-8%", left: "8%", anim: "bk-drift4", delay: 3, duration: 32 },
          { color: "from-purple-400/6 to-transparent", size: 200, top: "35%", left: "40%", anim: "bk-float", delay: 1, duration: 28 },
        ]} />
      </div>

      {/* Hero */}
      <header className="gallery-hero" style={{ textAlign: "center", borderBottom: "1px solid rgba(200,168,130,0.15)", position: "relative", zIndex: 1 }}>
        <p
          style={{
            fontSize: "11px",
            fontWeight: 500,
            letterSpacing: "0.25em",
            color: "#C8A882",
            textTransform: "uppercase",
            marginBottom: "20px",
          }}
        >
          The Bloom Archive
        </p>
        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2.2rem, 7vw, 5.5rem)",
            fontWeight: 400,
            lineHeight: 1.05,
            margin: "0 0 20px",
            color: "#F7F0E8",
          }}
        >
          Every petal,
          <br />
          <em style={{ color: "#C8A882" }}>a story.</em>
        </h1>
        <p
          style={{
            fontSize: "clamp(13px, 2.5vw, 15px)",
            fontWeight: 300,
            color: "rgba(247,240,232,0.5)",
            maxWidth: "440px",
            margin: "0 auto",
            lineHeight: 1.7,
            padding: "0 8px",
          }}
        >
          A handpicked look at our floral decor and event styling work —
          explore the full gallery below.
        </p>
      </header>

      {/* Masonry Gallery — semantic markup for SEO */}
      <main
        className="gallery-main"
        style={{
          padding: "36px 40px 40px",
          maxWidth: "1320px",
          margin: "0 auto",
          boxSizing: "border-box",
          position: "relative",
          zIndex: 1,
        }}
        aria-label="Shivam Florist photo gallery"
      >
        {visibleImages.map((image, index) => (
          <figure
            key={image.id}
            className="flower-card"
            style={{ margin: 0, animationDelay: `${(index % PAGE_SIZE) * 0.04}s` }}
          >
            <div
              className={`card-inner size-${image.size}`}
              style={{ background: image.bg }}
              onClick={() => setLightbox(image)}
              role="button"
              tabIndex={0}
              aria-label={`View larger image: ${image.alt}`}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") setLightbox(image);
              }}
            >
              <span className="card-accent-bar" style={{ background: image.accent }} />
              <span className="card-chip" style={{ background: image.accent }}>
                Design {String(image.id).padStart(2, "0")}
              </span>

              <img
                src={image.src}
                alt={image.alt}
                loading={index < 4 ? "eager" : "lazy"}
                decoding="async"
              />

              <div className="card-overlay">
                <span className="card-overlay-label" style={{ color: image.accent }}>
                  View Full Image
                </span>
              </div>
            </div>
            <figcaption style={{ display: "none" }}>{image.alt}</figcaption>
          </figure>
        ))}
      </main>

      {/* Load More */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "14px",
          padding: "0 20px 80px",
        }}
      >
        <p
          style={{
            fontSize: "12px",
            color: "rgba(247,240,232,0.4)",
            letterSpacing: "0.05em",
          }}
        >
          Showing {visibleImages.length} of {galleryImages.length}
        </p>
        {hasMore && (
          <button className="load-more-btn" onClick={handleLoadMore}>
            Load More
          </button>
        )}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(13,31,15,0.95)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 200,
            padding: "20px",
            backdropFilter: "blur(8px)",
          }}
          onClick={() => setLightbox(null)}
        >
          <div
            style={{
              background: "#0D1F0F",
              borderRadius: "18px",
              maxWidth: "640px",
              width: "100%",
              overflow: "hidden",
              position: "relative",
              boxShadow: "0 8px 30px rgba(0,0,0,0.3)",
              border: `1px solid ${lightbox.accent}55`,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightbox(null)}
              aria-label="Close image preview"
              style={{
                position: "absolute",
                top: "14px",
                right: "14px",
                zIndex: 10,
                background: "rgba(0,0,0,0.4)",
                border: "1px solid rgba(200,168,130,0.4)",
                borderRadius: "18px",
                width: "34px",
                height: "34px",
                cursor: "pointer",
                color: "#F7F0E8",
                fontSize: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              ✕
            </button>

            <span
              style={{
                position: "absolute", top: "14px", left: "14px", zIndex: 10,
                background: lightbox.accent, color: "#fff",
                padding: "5px 14px", borderRadius: "18px",
                fontSize: "10px", fontWeight: 700, letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              Design {String(lightbox.id).padStart(2, "0")}
            </span>

            <img
              src={lightbox.src}
              alt={lightbox.alt}
              className="lightbox-img"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      )}

      {/* Footer */}
      <footer
        style={{
          borderTop: "1px solid rgba(200,168,130,0.15)",
          padding: "40px",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <p
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.1rem",
            color: "rgba(247,240,232,0.3)",
            fontStyle: "italic",
          }}
        >
          Grown with intention. Arranged with love.
        </p>
      </footer>
    </div>
  );
}