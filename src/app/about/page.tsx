import React from "react";

import About from "../components/about/about";
import CTA from "../components/about/cta";
import Gallery from "../components/about/gallery";
import Header from "../components/about/header";
import Team from "../components/about/team";
import Testimonials from "../components/about/testimonials";
import Footer from "../components/layout/footer";
import Navbar from "../components/layout/navbar";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="grow">
        <Header />
        <About />
        <Team />
        <Gallery />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
