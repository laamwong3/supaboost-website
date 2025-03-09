import { services } from "@/lib/data/services";
import React from "react";

import Footer from "../components/layout/footer";
import Navbar from "../components/layout/navbar";
import CTA from "../components/services/cta";
import Feature from "../components/services/feature";
import FeaturesList from "../components/services/features-list";
import Header from "../components/services/header";
import Testimonials from "../components/services/testimonials";

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="grow">
        <Header />
        {services.map((service, index) => (
          <Feature
            key={service.id}
            service={service}
            reversed={index % 2 === 1}
          />
        ))}
        <FeaturesList />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
