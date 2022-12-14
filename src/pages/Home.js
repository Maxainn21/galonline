import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../parts/Hero';
import Brands from '../parts/Brands';
import Service from '../parts/Service';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Brands />
      <Service />
    </>
  );
}
