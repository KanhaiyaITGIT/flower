import React from "react";
import Hero from "./pages/Hero";
import CategoryPage from "./pages/CategoryPage";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import OccasionsPage from "./pages/OccasionsPage";
import DecorPage from "./pages/DecorPage";
import AboutUs from "./pages/AboutUs";
import Gallery from "./pages/Gallery";
import CartPage from "./pages/CartPage";
import PetalFall from "./components/PetalFall";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <PetalFall />
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/category" element={<CategoryPage />} />
        <Route path="/occasions" element={<OccasionsPage />} />
        <Route path="/decor" element={<DecorPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
