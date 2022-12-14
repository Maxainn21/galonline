import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../parts/Hero";
import Brands from "../parts/Brands";
import Service from "../parts/Service";
import Info from "../parts/Info";
import Footer from "../parts/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Brands />
      <Service />
      <Info />
      <Footer />
    </>
  );
}
