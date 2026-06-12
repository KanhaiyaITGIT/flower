// import React, { useState } from "react";
// import Header from "../components/Header";
// import Footer from "../components/Footer";
// import image1 from "../assets/s1.png";
// import image2 from "../assets/s2.png";
// import image3 from "../assets/s3.png";
// import image4 from "../assets/s4.png";
// import image5 from "../assets/s5.png";
// import image6 from "../assets/s6.png";
// import image7 from "../assets/s7.png";
// import image8 from "../assets/s8.png";
// import image9 from "../assets/s9.png";
// import image10 from "../assets/s10.png";
// import image11 from "../assets/s11.png";
// import image12 from "../assets/s12.png";
// import image13 from "../assets/s13.png";

// import {
//   MessageCircle,
//   ShoppingBag,
//   Compass,
//   Flame,
//   Scissors,
//   Mail,
//   CheckCircle2,
//   Tag,
//   ArrowRight,
// } from "lucide-react";

// const Hero = () => {
//   const cards = [
//     { image: image1, label: "Floral Arrangements", height: "h-48" },
//     { image: image2, label: "Premium Bouquets", height: "h-56" },
//     { image: image3, label: "Fresh Blooms", height: "h-52" },
//     { image: image4, label: "Sunflower Special", height: "h-52" },
//   ];

//   const categories = [
//     {
//       name: "Floral Arrangements",
//       desc: "Elegant designs crafted to impress.",
//       image: image6,
//       accent: "#fce7f3",
//       tag: "Bestseller",
//     },
//     {
//       name: "Bouquets",
//       desc: "Hand-tied blooms, perfect for every occasion.",
//       image: image7,
//       accent: "#dcfce7",
//       tag: "Popular",
//     },
//     {
//       name: "Fresh Flower Subscription",
//       desc: "Your weekly dose of farm-fresh happiness.",
//       image: image8,
//       accent: "#dbeafe",
//       tag: "New",
//     },
//     {
//       name: "Forever Flowers",
//       desc: "Cherished flowers that last, just like your special moments.",
//       image: image9,
//       accent: "#ede9fe",
//       tag: null,
//     },
//     {
//       name: "Lucky Bamboo",
//       desc: "A little green gift of luck and good vibes.",
//       image: image10,
//       accent: "#d1fae5",
//       tag: null,
//     },
//     {
//       name: "Decor",
//       desc: "Thoughtful floral accents to brighten any space.",
//       image: image11,
//       accent: "#fef3c7",
//       tag: null,
//     },
//     {
//       name: "By Stem",
//       desc: "Pick and choose single stems, just the way you like.",
//       image: image12,
//       accent: "#fce7f3",
//       tag: null,
//     },
//     {
//       name: "Candles & More",
//       desc: "Meaningful, mindful gifts for loved ones.",
//       image: image13,
//       accent: "#fef9c3",
//       tag: "Gift",
//     },
//   ];

//   const [email, setEmail] = useState("");
//   const [subscribed, setSubscribed] = useState(false);

//   const handleSubscribe = () => {
//     if (email.includes("@")) {
//       setSubscribed(true);
//       setEmail("");
//     }
//   };

//   return (
//     <>
    

//       {/* ─── Hero Section ─── */}
//       <section className="bg-gradient-to-br from-amber-50 via-pink-50 to-blue-50 py-16 px-6 relative overflow-hidden">
//         <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-rose-200/20 pointer-events-none" />
//         <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-green-200/20 pointer-events-none" />

//         <div className="max-w-6xl mx-auto text-center relative">
//           <div className="inline-flex items-center gap-1.5 bg-rose-50 border border-rose-200 text-rose-600 rounded-full px-4 py-1 text-xs font-bold tracking-widest uppercase mb-6">
//             <Tag size={12} />
//             Same Day Delivery Available
//           </div>

//           <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight text-gray-900 mb-4">
//             Delivering Happiness
//             <br />
//             <span className="text-rose-500 italic">With Fresh Flowers</span>
//           </h1>

//           <p className="text-gray-500 text-base md:text-lg mb-10 max-w-md mx-auto leading-relaxed">
//             Handcrafted bouquets &amp; arrangements for every occasion — from
//             everyday joy to grand celebrations.
//           </p>

//           <div className="flex gap-4 justify-center mb-14 flex-wrap">
//             <button className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-400 to-rose-600 text-white rounded-full px-9 py-3.5 text-sm font-bold shadow-lg shadow-rose-200 hover:-translate-y-0.5 hover:shadow-xl transition-all duration-200">
//               <ShoppingBag size={16} />
//               Shop Now
//             </button>
//             <button className="inline-flex items-center gap-2 bg-transparent text-gray-900 border-2 border-gray-900 rounded-full px-9 py-3.5 text-sm font-bold hover:bg-gray-900 hover:text-white transition-all duration-200">
//               <Compass size={16} />
//               Explore Occasions
//             </button>
//           </div>

//           <div className="flex gap-4 justify-center items-end">
//             {cards.map((card, i) => (
//               <div
//                 key={i}
//                 className={`flex-1 max-w-[210px] bg-white rounded-2xl overflow-hidden shadow-md border border-rose-50 ${card.height} flex flex-col cursor-pointer hover:scale-105 hover:-translate-y-1 transition-all duration-300`}
//               >
//                 <img
//                   src={card.image}
//                   alt={card.label}
//                   className="w-full flex-1 object-cover"
//                 />
//                 <div className="text-xs font-semibold text-gray-500 text-center py-2 px-2 bg-white">
//                   {card.label}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         <a
//           href="https://wa.me/91XXXXXXXXXX"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-xl shadow-green-300 hover:scale-110 transition-transform duration-200"
//           aria-label="WhatsApp"
//         >
//           <MessageCircle size={26} color="white" fill="white" />
//         </a>
//       </section>

//       {/* ─── Categories Section ─── */}
//       <section className="py-20 px-6 bg-white">
//         <div className="max-w-6xl mx-auto">
//           {/* Header */}
//           <div className="text-center mb-14">
//             <span className="inline-block bg-rose-50 text-rose-500 text-xs font-bold tracking-widest uppercase rounded-full px-4 py-1 mb-4 border border-rose-100">
//               Browse Categories
//             </span>
//             <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-3">
//               Shop by Category
//             </h2>
//             <p className="text-gray-400 text-base max-w-sm mx-auto">
//               From everyday joys to big celebrations — we've got you covered.
//             </p>
//           </div>

//           {/* Grid */}
//           <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5">
//             {categories.map((cat, i) => (
//               <div
//                 key={i}
//                 className="group relative bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer"
//               >
//                 {/* Tag badge */}
//                 {cat.tag && (
//                   <div className="absolute top-3 left-3 z-10 bg-white/90 backdrop-blur-sm text-rose-500 text-[10px] font-bold tracking-widest uppercase rounded-full px-2.5 py-1 border border-rose-100 shadow-sm">
//                     {cat.tag}
//                   </div>
//                 )}

//                 {/* Image area */}
//                 <div
//                   className="h-48 w-full overflow-hidden relative"
//                   style={{ background: cat.accent }}
//                 >
//                   <img
//                     src={cat.image}
//                     alt={cat.name}
//                     className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
//                     style={{ transition: "transform 0.5s ease" }}
//                     onError={(e) => {
//                       e.target.style.display = "none";
//                     }}
//                   />
//                   {/* Gradient overlay for text readability */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                 </div>

//                 {/* Card Content */}
//                 <div className="px-4 py-4">
//                   <h3 className="font-serif text-base font-bold text-gray-900 mb-1 leading-snug">
//                     {cat.name}
//                   </h3>
//                   <p className="text-gray-400 text-xs leading-relaxed mb-3">
//                     {cat.desc}
//                   </p>
//                   <div className="flex items-center justify-between">
//                     <button className="text-rose-500 text-xs font-bold tracking-wide hover:text-rose-700 transition-colors flex items-center gap-1">
//                       View All
//                       <ArrowRight size={12} />
//                     </button>
//                     <div
//                       className="w-7 h-7 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-1 group-hover:translate-x-0"
//                       style={{ background: cat.accent }}
//                     >
//                       <ShoppingBag size={13} className="text-gray-700" />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ─── Newsletter Section ─── */}
//       <section className="py-20 px-6 bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900 relative overflow-hidden">
//         <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-rose-500/10 pointer-events-none" />
//         <div className="absolute -bottom-16 -left-16 w-52 h-52 rounded-full bg-white/5 pointer-events-none" />

//         <div className="max-w-xl mx-auto text-center relative">
//           <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-3">
//             Join Our Flower Family
//           </h2>
//           <p className="text-white/60 text-sm md:text-base mb-9 leading-relaxed">
//             Subscribe to our newsletter for exclusive offers, flower care tips
//             and early access to seasonal collections
//           </p>

//           {subscribed ? (
//             <div className="bg-green-900/40 border border-green-600/40 rounded-2xl px-8 py-5 text-green-300 font-semibold flex items-center justify-center gap-2">
//               <CheckCircle2 size={20} />
//               Welcome to the family! Check your inbox soon.
//             </div>
//           ) : (
//             <div className="flex gap-3 max-w-md mx-auto flex-wrap justify-center">
//               <div className="flex-1 min-w-[220px] relative">
//                 <Mail
//                   size={16}
//                   className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none"
//                 />
//                 <input
//                   type="email"
//                   placeholder="Your email address"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   onKeyPress={(e) => e.key === "Enter" && handleSubscribe()}
//                   className="w-full pl-10 pr-5 py-3.5 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm outline-none focus:border-rose-400 focus:bg-white/15 transition-all duration-200"
//                 />
//               </div>
//               <button
//                 onClick={handleSubscribe}
//                 className="bg-gradient-to-r from-rose-400 to-rose-600 text-white rounded-full px-7 py-3.5 text-sm font-bold whitespace-nowrap shadow-lg shadow-rose-900/40 hover:-translate-y-0.5 hover:shadow-xl transition-all duration-200"
//               >
//                 Subscribe
//               </button>
//             </div>
//           )}
//         </div>
//       </section>

  
//     </>
//   );
// };

// export default Hero;


import React, { useState } from "react";
import {
  ShoppingBag,
  ArrowRight,
  Truck,
  ShieldCheck,
  Gift,
  Flower2,
  Star,
  Quote,
  Heart,
  Cake,
  PartyPopper,
  Mail,
} from "lucide-react";

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

const Home = () => {
  const [email, setEmail] = useState("");

  const categories = [
    {
      title: "Bouquets",
      image: image1,
      products: "120+ Products",
    },
    {
      title: "Floral Arrangements",
      image: image2,
      products: "80+ Products",
    },
    {
      title: "Premium Flowers",
      image: image3,
      products: "150+ Products",
    },
    {
      title: "Subscriptions",
      image: image4,
      products: "30+ Products",
    },
  ];

  const bestSellers = [
    {
      title: "Pink Rhapsody Bouquet",
      image: image5,
      price: "₹1,599",
    },
    {
      title: "Lily Blush Symphony",
      image: image6,
      price: "₹2,099",
    },
    {
      title: "Red Velvet Bouquet",
      image: image7,
      price: "₹1,349",
    },
    {
      title: "Wildflower Melody",
      image: image8,
      price: "₹1,999",
    },
  ];

  const occasions = [
    {
      title: "Birthday",
      icon: Cake,
    },
    {
      title: "Anniversary",
      icon: Heart,
    },
    {
      title: "Celebration",
      icon: PartyPopper,
    },
    {
      title: "Thank You",
      icon: Gift,
    },
  ];

  const testimonials = [
    {
      name: "Rashmi Pathak",
      review:
        "Beautiful flowers delivered on time. Amazing quality and packaging.",
    },
    {
      name: "Anand Upadhyay",
      review:
        "Fresh flowers and premium presentation. Highly recommended.",
    },
    {
      name: "Aanchal Kalra",
      review:
        "Excellent service. Ordered for anniversary and loved it.",
    },
  ];
return (
  <>
<section className="relative overflow-hidden bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">

  {/* Background Decoration */}
  <div className="absolute top-0 left-0 w-72 h-72 bg-rose-200/30 rounded-full blur-3xl" />
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-200/30 rounded-full blur-3xl" />

  <div className="max-w-[85%] mx-auto px-6 py-8">

    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* LEFT */}
      <div className="relative z-10">

        {/* <div className="inline-flex items-center gap-2 bg-white shadow-md px-4 py-2 rounded-full text-sm font-medium text-rose-500">
          🌸 Same Day Flower Delivery In Gurgaon
        </div> */}

        <h1 className="mt-8 text-5xl lg:text-7xl font-bold leading-tight text-slate-900">
          Delivering
          <span className="block text-rose-500">
            Happiness
          </span>
          With Fresh Flowers
        </h1>

        <p className="mt-6 text-lg text-gray-600 max-w-xl leading-relaxed">
          Handcrafted bouquets, luxury floral arrangements and
          meaningful gifts designed to make every moment unforgettable.
        </p>

        {/* CTA */}
        <div className="flex flex-wrap gap-4 mt-10">

          <button className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:scale-105 transition">
            Shop Collection
          </button>

          <button className="bg-white border border-gray-200 px-8 py-4 rounded-full font-semibold hover:shadow-md transition">
            Explore Occasions
          </button>

        </div>

        {/* Trust Row */}
        <div className="flex flex-wrap gap-8 mt-12">

          <div>
            <h3 className="text-3xl font-bold text-slate-900">
              10K+
            </h3>
            <p className="text-gray-500">
              Happy Customers
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-slate-900">
              500+
            </h3>
            <p className="text-gray-500">
              Floral Designs
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-slate-900">
              4.9★
            </h3>
            <p className="text-gray-500">
              Customer Rating
            </p>
          </div>

        </div>

      </div>

      {/* RIGHT */}
      <div className="relative">

        {/* Main Image */}
        <div className="relative">

          <img
            src={image1}
            alt="flowers"
            className="rounded-[40px] shadow-2xl w-full object-cover"
          />

          {/* Discount Card */}
          <div className="absolute top-6 right-6 bg-white p-5 rounded-3xl shadow-xl">

            <p className="text-xs uppercase text-gray-400">
              Special Offer
            </p>

            <h4 className="text-2xl font-bold text-rose-500">
              20% OFF
            </h4>

            <p className="text-sm text-gray-500">
              First Order
            </p>

          </div>

          {/* Customer Card */}
          <div className="absolute bottom-6 left-6 bg-white px-5 py-4 rounded-3xl shadow-xl">

            <p className="font-bold text-lg">
              10,000+
            </p>

            <p className="text-gray-500 text-sm">
              Happy Customers
            </p>

          </div>

        </div>

        {/* Floating Small Images */}
        <img
          src={image2}
          alt=""
          className="hidden lg:block absolute -left-12 top-20 w-28 h-28 rounded-3xl object-cover shadow-xl border-4 border-white"
        />

        <img
          src={image3}
          alt=""
          className="hidden lg:block absolute -right-10 bottom-20 w-24 h-24 rounded-3xl object-cover shadow-xl border-4 border-white"
        />

      </div>

    </div>

  </div>

</section>
<section className="py-24 bg-white">

  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-14">
      <h2 className="text-4xl font-bold">
        Shop By Category
      </h2>

      <p className="text-gray-500 mt-4">
        Find the perfect arrangement for every moment
      </p>
    </div>

    <div className="grid md:grid-cols-4 gap-6">

      {categories.map((item, index) => (
        <div
          key={index}
          className="group rounded-3xl overflow-hidden bg-white shadow-lg hover:-translate-y-2 transition-all"
        >
          <div className="h-64 overflow-hidden">
            <img
              src={item.image}
              alt=""
              className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
            />
          </div>

          <div className="p-5">
            <h3 className="font-bold text-lg">
              {item.title}
            </h3>

            <p className="text-gray-500 text-sm">
              {item.products}
            </p>
          </div>
        </div>
      ))}

    </div>

  </div>
</section>

<section className="py-24 bg-gray-50">

  <div className="max-w-7xl mx-auto px-6">

    <div className="flex justify-between items-center mb-12">

      <div>
        <h2 className="text-4xl font-bold">
          Best Sellers
        </h2>

        <p className="text-gray-500 mt-2">
          Our most loved flower arrangements
        </p>
      </div>

      <button className="text-rose-500 font-semibold flex items-center gap-2">
        View All
        <ArrowRight size={18} />
      </button>

    </div>

    <div className="grid md:grid-cols-4 gap-6">

      {bestSellers.map((item, index) => (

        <div
          key={index}
          className="bg-white rounded-3xl overflow-hidden shadow-lg hover:-translate-y-2 transition-all duration-300"
        >

          <div className="overflow-hidden h-72">
            <img
              src={item.image}
              alt=""
              className="w-full h-full object-cover hover:scale-110 transition duration-500"
            />
          </div>

          <div className="p-5">

            <h3 className="font-semibold text-lg">
              {item.title}
            </h3>

            <p className="text-rose-500 font-bold mt-2">
              {item.price}
            </p>

            <button className="mt-4 w-full bg-rose-500 text-white py-3 rounded-xl font-medium">
              Quick View
            </button>

          </div>

        </div>

      ))}

    </div>

  </div>

</section>

<section className="py-24 bg-white">

  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-16">

      <h2 className="text-4xl font-bold">
        Why Choose Us
      </h2>

      <p className="text-gray-500 mt-4">
        Delivering smiles with every bouquet
      </p>

    </div>

    <div className="grid md:grid-cols-4 gap-6">

      <div className="bg-rose-50 p-8 rounded-3xl text-center">

        <Truck
          size={40}
          className="mx-auto text-rose-500"
        />

        <h3 className="font-bold mt-5">
          Fast Delivery
        </h3>

        <p className="text-gray-500 text-sm mt-2">
          Same day flower delivery available.
        </p>

      </div>

      <div className="bg-rose-50 p-8 rounded-3xl text-center">

        <Flower2
          size={40}
          className="mx-auto text-rose-500"
        />

        <h3 className="font-bold mt-5">
          Fresh Flowers
        </h3>

        <p className="text-gray-500 text-sm mt-2">
          Handpicked premium blooms.
        </p>

      </div>

      <div className="bg-rose-50 p-8 rounded-3xl text-center">

        <ShieldCheck
          size={40}
          className="mx-auto text-rose-500"
        />

        <h3 className="font-bold mt-5">
          Secure Payment
        </h3>

        <p className="text-gray-500 text-sm mt-2">
          Safe and encrypted checkout.
        </p>

      </div>

      <div className="bg-rose-50 p-8 rounded-3xl text-center">

        <Gift
          size={40}
          className="mx-auto text-rose-500"
        />

        <h3 className="font-bold mt-5">
          Perfect Gifts
        </h3>

        <p className="text-gray-500 text-sm mt-2">
          Crafted with love and care.
        </p>

      </div>

    </div>

  </div>

</section>

<section className="py-24 bg-gray-50">

  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-14">

      <h2 className="text-4xl font-bold">
        What Our Customers Say
      </h2>

    </div>

    <div className="grid md:grid-cols-3 gap-8">

      {testimonials.map((item, index) => (

        <div
          key={index}
          className="bg-white rounded-3xl p-8 shadow-lg"
        >

          <Quote
            size={40}
            className="text-rose-400"
          />

          <div className="flex mt-4">

            <Star className="fill-yellow-400 text-yellow-400" />
            <Star className="fill-yellow-400 text-yellow-400" />
            <Star className="fill-yellow-400 text-yellow-400" />
            <Star className="fill-yellow-400 text-yellow-400" />
            <Star className="fill-yellow-400 text-yellow-400" />

          </div>

          <p className="text-gray-600 mt-5">
            {item.review}
          </p>

          <h4 className="font-bold mt-6">
            {item.name}
          </h4>

        </div>

      ))}

    </div>

  </div>

</section>

<section className="py-24 bg-white">

  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-14">

      <h2 className="text-4xl font-bold">
        Perfect For Every Occasion
      </h2>

      <p className="text-gray-500 mt-4">
        Flowers for all of life's beautiful moments
      </p>

    </div>

    <div className="grid md:grid-cols-4 gap-6">

      {occasions.map((item, index) => {

        const Icon = item.icon;

        return (

          <div
            key={index}
            className="border rounded-3xl p-10 text-center hover:shadow-xl transition"
          >

            <Icon
              size={50}
              className="mx-auto text-rose-500"
            />

            <h3 className="mt-5 font-bold">
              {item.title}
            </h3>

          </div>

        );
      })}

    </div>

  </div>

</section>

<section className="py-24 bg-gradient-to-r from-rose-100 via-pink-50 to-purple-100">

  <div className="max-w-4xl mx-auto text-center px-6">

    <Mail
      size={50}
      className="mx-auto text-rose-500"
    />

    <h2 className="text-4xl font-bold mt-6">
      Join Our Flower Family
    </h2>

    <p className="text-gray-600 mt-4">
      Subscribe for exclusive offers and seasonal collections
    </p>

    <div className="flex gap-4 mt-10 max-w-xl mx-auto">

      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="flex-1 border rounded-full px-6 py-4"
      />

      <button className="bg-rose-500 text-white px-8 rounded-full font-semibold">
        Subscribe
      </button>

    </div>

  </div>

</section>

    </>
  );
};

export default Home;