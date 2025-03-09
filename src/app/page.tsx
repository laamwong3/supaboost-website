import React from "react";

import CTA from "./components/home/cta";
import Features from "./components/home/features";
import FeaturesList from "./components/home/features-list";
import Hero from "./components/home/hero";
import Team from "./components/home/team";
import Testimonials from "./components/home/testimonials";
import Footer from "./components/layout/footer";
import Navbar from "./components/layout/navbar";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="grow">
        <Hero />
        <Features />
        <FeaturesList />
        <Team />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
