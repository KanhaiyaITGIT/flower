import React, { useState } from "react";
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
import image11 from "../assets/s11.png";
import image12 from "../assets/s12.png";
import image13 from "../assets/s13.png";
import image14 from "../assets/s14.png";
import image15 from "../assets/s15.png";
import image16 from "../assets/s16.png";
// import image17 from "../assets/s17.png";
import image18 from "../assets/s18.png";
import image19 from "../assets/s19.png";
import image20 from "../assets/s20.png";
import image21 from "../assets/s21.png";
import image22 from "../assets/s22.png";
import image23 from "../assets/s23.png";
import image24 from "../assets/s24.png";
import image25 from "../assets/s25.png";
import image26 from "../assets/s26.png";




import {
  ShoppingBag,
  Heart,
  Star,
  SlidersHorizontal,
  ChevronDown,
  X,
  Leaf,
  Truck,
  Sparkles,
  Filter,
  Search,
} from "lucide-react";

// ─── Product Data ───
const allProducts = [
  {
    id: 1,
    name: "Romantic Rosebloom Bouquet",
    price: 849,
    originalPrice: 1099,
    rating: 4.9,
    reviews: 128,
    image: image1,
    category: "Bouquets",
    tag: "Bestseller",
    tagColor: "rose",
    isNew: false,
    isFavorite: false,
    desc: "Deep red roses with baby's breath",
  },
  {
    id: 2,
    name: "Sunshine Sunflower Bunch",
    price: 599,
    originalPrice: null,
    rating: 4.8,
    reviews: 94,
    image: image2,
    category: "Bouquets",
    tag: "Popular",
    tagColor: "amber",
    isNew: false,
    isFavorite: false,
    desc: "Fresh farm sunflowers, 12 stems",
  },
  {
    id: 3,
    name: "Pastel Dream Arrangement",
    price: 1199,
    originalPrice: 1499,
    rating: 4.7,
    reviews: 61,
    image: image3,
    category: "Floral Arrangements",
    tag: "Sale",
    tagColor: "green",
    isNew: false,
    isFavorite: false,
    desc: "Mixed pastel blooms in a glass vase",
  },
  {
    id: 4,
    name: "Forever Dried Rose Box",
    price: 1799,
    originalPrice: null,
    rating: 5.0,
    reviews: 43,
    image: image4,
    category: "Forever Flowers",
    tag: "New",
    tagColor: "purple",
    isNew: true,
    isFavorite: false,
    desc: "Preserved roses, lasts 2+ years",
  },
  {
    id: 5,
    name: "Weekly Bloom Subscription",
    price: 499,
    originalPrice: null,
    rating: 4.9,
    reviews: 210,
    image: image5,
    category: "Subscriptions",
    tag: "Subscribe",
    tagColor: "blue",
    isNew: false,
    isFavorite: false,
    desc: "Fresh seasonal flowers every week",
  },
  {
    id: 6,
    name: "Luxury White Orchid Vase",
    price: 2199,
    originalPrice: 2599,
    rating: 4.8,
    reviews: 35,
    image: image6,
    category: "Floral Arrangements",
    tag: "Sale",
    tagColor: "green",
    isNew: false,
    isFavorite: false,
    desc: "Elegant white orchids in ceramic pot",
  },
  {
    id: 7,
    name: "Garden Party Mixed Stems",
    price: 349,
    originalPrice: null,
    rating: 4.6,
    reviews: 78,
    image: image7,
    category: "By Stem",
    tag: null,
    tagColor: null,
    isNew: false,
    isFavorite: false,
    desc: "Choose from 20+ fresh varieties",
  },
  {
    id: 8,
    name: "Lucky Bamboo Twist",
    price: 699,
    originalPrice: null,
    rating: 4.7,
    reviews: 52,
    image: image8,
    category: "Lucky Bamboo",
    tag: null,
    tagColor: null,
    isNew: true,
    isFavorite: false,
    desc: "Twisted lucky bamboo in pebble vase",
  },
  {
    id: 9,
    name: "Bloom & Glow Candle Set",
    price: 999,
    originalPrice: 1299,
    rating: 4.9,
    reviews: 89,
    image: image9,
    category: "Candles & More",
    tag: "Gift",
    tagColor: "amber",
    isNew: false,
    isFavorite: false,
    desc: "Rose & jasmine scented candle trio",
  },
  {
    id: 10,
    name: "Tropical Paradise Bouquet",
    price: 1099,
    originalPrice: null,
    rating: 4.8,
    reviews: 47,
    image: image10,
    category: "Bouquets",
    tag: "New",
    tagColor: "purple",
    isNew: true,
    isFavorite: false,
    desc: "Exotic birds of paradise & heliconias",
  },
  {
    id: 11,
    name: "Floral Wreath Decor",
    price: 1599,
    originalPrice: 1899,
    rating: 4.6,
    reviews: 29,
    image: image11,
    category: "Decor",
    tag: "Sale",
    tagColor: "green",
    isNew: false,
    isFavorite: false,
    desc: "Dried floral wreath for doors & walls",
  },
  {
    id: 12,
    name: "Rose Petal Gift Box",
    price: 2499,
    originalPrice: null,
    rating: 5.0,
    reviews: 66,
    image: image12,
    category: "Forever Flowers",
    tag: "Bestseller",
    tagColor: "rose",
    isNew: false,
    isFavorite: false,
    desc: "100 preserved roses in a luxury box",
  },
    {
    id: 13,
    name: "Blushing Pink Peony Bunch",
    price: 1299,
    originalPrice: 1599,
    rating: 4.9,
    reviews: 112,
    image: image14,
    category: "Bouquets",
    tag: "Bestseller",
    tagColor: "rose",
    isNew: false,
    isFavorite: false,
    desc: "Soft pink peonies with eucalyptus sprigs",
  },
  {
    id: 14,
    name: "Lavender Love Posy",
    price: 749,
    originalPrice: null,
    rating: 4.8,
    reviews: 87,
    image: image15,
    category: "Bouquets",
    tag: "Popular",
    tagColor: "purple",
    isNew: false,
    isFavorite: false,
    desc: "Fresh lavender stems tied with ribbon",
  },
  {
    id: 15,
    name: "Golden Lily Centrepiece",
    price: 1849,
    originalPrice: 2199,
    rating: 4.7,
    reviews: 54,
    image: image16,
    category: "Floral Arrangements",
    tag: "Sale",
    tagColor: "green",
    isNew: false,
    isFavorite: false,
    desc: "Golden oriental lilies in a tall glass vase",
  },
  {
    id: 16,
    name: "Eternal Bloom Shadow Box",
    price: 2799,
    originalPrice: null,
    rating: 5.0,
    reviews: 38,
    image: image16,
    category: "Forever Flowers",
    tag: "New",
    tagColor: "purple",
    isNew: true,
    isFavorite: false,
    desc: "Preserved mixed blooms in a display frame",
  },
  {
    id: 18,
    name: "Bi-Weekly Seasonal Box",
    price: 899,
    originalPrice: 1099,
    rating: 4.9,
    reviews: 175,
    image: image18,
    category: "Subscriptions",
    tag: "Subscribe",
    tagColor: "blue",
    isNew: false,
    isFavorite: false,
    desc: "Curated seasonal stems delivered fortnightly",
  },
  {
    id: 19,
    name: "Blush Hydrangea Dome",
    price: 1649,
    originalPrice: null,
    rating: 4.8,
    reviews: 63,
    image: image19,
    category: "Floral Arrangements",
    tag: "Popular",
    tagColor: "rose",
    isNew: false,
    isFavorite: false,
    desc: "Full blush hydrangeas in a round arrangement",
  },
  {
    id:20,
    name: "Single Stem Roses — 12 pcs",
    price: 299,
    originalPrice: null,
    rating: 4.6,
    reviews: 143,
    image: image20,
    category: "By Stem",
    tag: null,
    tagColor: null,
    isNew: false,
    isFavorite: false,
    desc: "Farm-fresh roses, choose your colour",
  },
  {
    id: 21,
    name: "Spiral Lucky Bamboo Tower",
    price: 899,
    originalPrice: 1099,
    rating: 4.7,
    reviews: 41,
    image: image21,
    category: "Lucky Bamboo",
    tag: "Sale",
    tagColor: "green",
    isNew: false,
    isFavorite: false,
    desc: "Seven-layer spiral bamboo, prosperity gift",
  },
  {
    id: 22,
    name: "Rose & Oud Diffuser Set",
    price: 1299,
    originalPrice: null,
    rating: 4.9,
    reviews: 96,
    image: image22,
    category: "Candles & More",
    tag: "Gift",
    tagColor: "amber",
    isNew: true,
    isFavorite: false,
    desc: "Reed diffuser with rose & oud blend",
  },
  {
    id: 23,
    name: "Bird of Paradise Stems",
    price: 799,
    originalPrice: null,
    rating: 4.8,
    reviews: 58,
    image: image23,
    category: "By Stem",
    tag: "New",
    tagColor: "purple",
    isNew: true,
    isFavorite: false,
    desc: "Statement tropical stems, sold individually",
  },
  {
    id: 24,
    name: "Dried Pampas Table Ring",
    price: 1399,
    originalPrice: 1699,
    rating: 4.6,
    reviews: 34,
    image: image24,
    category: "Decor",
    tag: "Sale",
    tagColor: "green",
    isNew: false,
    isFavorite: false,
    desc: "Natural pampas & dried bloom table centrepiece",
  },
  {
    id: 25,
    name: "100 Red Roses Luxury Box",
    price: 3299,
    originalPrice: 3799,
    rating: 5.0,
    reviews: 81,
    image: image25,
    category: "Forever Flowers",
    tag: "Bestseller",
    tagColor: "rose",
    isNew: false,
    isFavorite: false,
    desc: "Premium preserved red roses in a velvet box",
  },
  {
    id: 26,
    name: "100 Red Roses Luxury Box",
    price: 4299,
    originalPrice: 3799,
    rating: 5.0,
    reviews: 81,
    image: image26,
    category: "Forever Flowers",
    tag: "Bestseller",
    tagColor: "rose",
    isNew: false,
    isFavorite: false,
    desc: "Premium preserved red roses in a velvet box",
  }

 
];

const categoryFilters = [
  "All",
  "Bouquets",
  "Floral Arrangements",
  "Forever Flowers",
  "Subscriptions",
  "By Stem",
  "Lucky Bamboo",
  "Decor",
  "Candles & More",
];

const sortOptions = [
  { value: "popular", label: "Most Popular" },
  { value: "priceLow", label: "Price: Low to High" },
  { value: "priceHigh", label: "Price: High to Low" },
  { value: "rating", label: "Top Rated" },
  { value: "newest", label: "Newest First" },
];

const tagStyles = {
  rose: "bg-rose-50 text-rose-600 border-rose-100",
  amber: "bg-amber-50 text-amber-600 border-amber-100",
  green: "bg-emerald-50 text-emerald-600 border-emerald-100",
  purple: "bg-purple-50 text-purple-600 border-purple-100",
  blue: "bg-blue-50 text-blue-600 border-blue-100",
};

const CategoryPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortBy, setSortBy] = useState("popular");
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const [favorites, setFavorites] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const [addedToCart, setAddedToCart] = useState({});

  const toggleFavorite = (id) => {
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleAddToCart = (id) => {
    setAddedToCart((prev) => ({ ...prev, [id]: true }));
    setTimeout(() => {
      setAddedToCart((prev) => ({ ...prev, [id]: false }));
    }, 1800);
  };

  const filtered = allProducts
    .filter((p) => {
      const matchCat =
        activeCategory === "All" || p.category === activeCategory;
      const matchSearch =
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.desc.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchSearch;
    })
    .sort((a, b) => {
      if (sortBy === "priceLow") return a.price - b.price;
      if (sortBy === "priceHigh") return b.price - a.price;
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "newest") return b.isNew - a.isNew;
      return b.reviews - a.reviews;
    });

  return (
    <>
      <section className="relative bg-gradient-to-br from-rose-950 via-rose-900 to-pink-900 overflow-hidden">
        {/* Decorative petals/blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-rose-400/10 -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-pink-300/10 translate-y-1/2 -translate-x-1/4 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,200,200,0.08)_0%,_transparent_60%)] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 py-16 relative">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-rose-300/70 text-xs mb-6 font-medium">
            <span>Home</span>
            <span>/</span>
            <span className="text-white">All Products</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h1 className="font-serif text-4xl md:text-6xl font-bold text-white leading-tight mb-3">
                Fresh Blooms,
                <br />
                <span className="text-rose-300 italic">Every Occasion</span>
              </h1>
              <p className="text-rose-200/70 text-sm md:text-base max-w-md leading-relaxed">
                Handcrafted with love. Delivered same-day. Browse our full
                collection of fresh & forever flowers.
              </p>
            </div>

            {/* Trust badges */}
            <div className="flex flex-col gap-2.5 shrink-0">
              {[
                { icon: Truck, text: "Free delivery above ₹999" },
                { icon: Leaf, text: "Farm-fresh, sustainably sourced" },
                { icon: Sparkles, text: "Same-day delivery available" },
              ].map(({ icon: Icon, text }, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2.5 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10"
                >
                  <Icon size={14} className="text-rose-300 shrink-0" />
                  <span className="text-white/80 text-xs font-medium whitespace-nowrap">
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Sticky Filter Bar ── */}
      <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-6">
          {/* Category Pill Filters */}
          <div className="flex gap-2 py-3 overflow-x-auto scrollbar-hide">
            {categoryFilters.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`shrink-0 rounded-full px-4 py-1.5 text-xs font-bold tracking-wide transition-all duration-200 border ${
                  activeCategory === cat
                    ? "bg-rose-500 text-white border-rose-500 shadow-md shadow-rose-200"
                    : "bg-white text-gray-500 border-gray-200 hover:border-rose-300 hover:text-rose-500"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search + Sort Row */}
          <div className="flex items-center gap-3 pb-3">
            {/* Search */}
            <div className="relative flex-1 max-w-xs">
              <Search
                size={14}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
              />
              <input
                type="text"
                placeholder="Search flowers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-full bg-gray-50 border border-gray-200 text-sm text-gray-700 placeholder-gray-400 outline-none focus:border-rose-300 focus:bg-white transition-all duration-200"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X size={13} />
                </button>
              )}
            </div>

            {/* Results count */}
            <span className="text-xs text-gray-400 font-medium hidden sm:block">
              {filtered.length} items
            </span>

            {/* Sort Dropdown */}
            <div className="relative ml-auto">
              <button
                onClick={() => setShowSortDropdown((v) => !v)}
                className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-full px-4 py-2 text-xs font-bold text-gray-700 hover:border-rose-300 transition-all duration-200"
              >
                <SlidersHorizontal size={13} />
                {sortOptions.find((s) => s.value === sortBy)?.label}
                <ChevronDown
                  size={13}
                  className={`transition-transform duration-200 ${showSortDropdown ? "rotate-180" : ""}`}
                />
              </button>

              {showSortDropdown && (
                <div className="absolute right-0 top-10 bg-white border border-gray-100 rounded-2xl shadow-xl py-2 w-48 z-50">
                  {sortOptions.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => {
                        setSortBy(opt.value);
                        setShowSortDropdown(false);
                      }}
                      className={`w-full text-left px-4 py-2.5 text-xs font-semibold transition-colors hover:bg-rose-50 hover:text-rose-600 ${
                        sortBy === opt.value
                          ? "text-rose-500 bg-rose-50/60"
                          : "text-gray-600"
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ── Products Grid ── */}
      <section className="py-12 px-6 bg-gray-50 min-h-screen">
        <div className="max-w-6xl mx-auto">
          {filtered.length === 0 ? (
            <div className="text-center py-24">
              <div className="text-6xl mb-4">🌸</div>
              <h3 className="font-serif text-2xl font-bold text-gray-700 mb-2">
                No blooms found
              </h3>
              <p className="text-gray-400 text-sm mb-6">
                Try a different category or search term
              </p>
              <button
                onClick={() => {
                  setActiveCategory("All");
                  setSearchQuery("");
                }}
                className="bg-rose-500 text-white rounded-full px-6 py-2.5 text-sm font-bold hover:bg-rose-600 transition-colors"
              >
                View All Products
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
              {filtered.map((product) => (
                <div
                  key={product.id}
                  className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer relative flex flex-col"
                >
                  {/* Image */}
                  <div className="relative overflow-hidden bg-rose-50 aspect-[4/3]">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />

                    {/* Overlays: tag + wishlist */}
                    <div className="absolute top-2.5 left-2.5 right-2.5 flex items-start justify-between">
                      {product.tag ? (
                        <span
                          className={`text-[10px] font-bold tracking-widest uppercase rounded-full px-2.5 py-1 border ${tagStyles[product.tagColor]} backdrop-blur-sm`}
                        >
                          {product.tag}
                        </span>
                      ) : (
                        <span />
                      )}

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleFavorite(product.id);
                        }}
                        className={`w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-sm shadow-sm transition-all duration-200 border ${
                          favorites[product.id]
                            ? "bg-rose-500 border-rose-500 scale-110"
                            : "bg-white/80 border-white/60 hover:bg-rose-50"
                        }`}
                      >
                        <Heart
                          size={14}
                          className={
                            favorites[product.id]
                              ? "text-white fill-white"
                              : "text-gray-400"
                          }
                        />
                      </button>
                    </div>

                    {/* Quick Add overlay on hover */}
                    <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleAddToCart(product.id);
                        }}
                        className={`w-full py-2.5 text-xs font-bold tracking-wide transition-all duration-200 flex items-center justify-center gap-1.5 ${
                          addedToCart[product.id]
                            ? "bg-green-500 text-white"
                            : "bg-gray-900 text-white hover:bg-rose-600"
                        }`}
                      >
                        {addedToCart[product.id] ? (
                          <>✓ Added to Cart</>
                        ) : (
                          <>
                            <ShoppingBag size={12} />
                            Quick Add
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-3.5 flex flex-col flex-1">
                    <p className="text-[10px] font-bold text-rose-400 tracking-widest uppercase mb-1">
                      {product.category}
                    </p>
                    <h3 className="font-serif text-sm font-bold text-gray-900 leading-snug mb-1 line-clamp-2">
                      {product.name}
                    </h3>
                    <p className="text-gray-400 text-xs mb-2.5 line-clamp-1">
                      {product.desc}
                    </p>

                    {/* Rating */}
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <Star
                            key={s}
                            size={10}
                            className={
                              s <= Math.round(product.rating)
                                ? "text-amber-400 fill-amber-400"
                                : "text-gray-200 fill-gray-200"
                            }
                          />
                        ))}
                      </div>
                      <span className="text-[10px] text-gray-400 font-medium">
                        {product.rating} ({product.reviews})
                      </span>
                    </div>

                    {/* Price + CTA */}
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex flex-col">
                        <span className="font-bold text-gray-900 text-base leading-none">
                          ₹{product.price}
                        </span>
                        {product.originalPrice && (
                          <span className="text-xs text-gray-400 line-through leading-none mt-0.5">
                            ₹{product.originalPrice}
                          </span>
                        )}
                      </div>

                      <button
                        onClick={() => handleAddToCart(product.id)}
                        className={`w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-200 ${
                          addedToCart[product.id]
                            ? "bg-green-500 border-green-500"
                            : "bg-rose-500 border-rose-500 hover:bg-rose-600 hover:scale-110 shadow-md shadow-rose-200"
                        }`}
                      >
                        <ShoppingBag
                          size={15}
                          className="text-white"
                          strokeWidth={2}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── Bottom Banner ── */}
      <section className="py-14 px-6 bg-gradient-to-r from-rose-50 via-pink-50 to-amber-50 border-t border-rose-100">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-bold tracking-widest text-rose-400 uppercase mb-3">
            Can't find what you're looking for?
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Get a Custom Arrangement
          </h2>
          <p className="text-gray-500 text-sm mb-7 max-w-sm mx-auto leading-relaxed">
            Tell us the occasion, your budget, and preferred flowers. We'll
            craft something truly unique just for you.
          </p>
          <a
            href="https://wa.me/91XXXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gray-900 text-white rounded-full px-8 py-3.5 text-sm font-bold hover:bg-rose-600 transition-colors duration-300 shadow-lg"
          >
            💬 Chat with Us on WhatsApp
          </a>
        </div>
      </section>

    
    </>
  );
};

export default CategoryPage;