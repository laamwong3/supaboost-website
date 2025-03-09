import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 px-4 py-24 sm:px-6 md:max-w-2xl lg:max-w-3xl lg:px-8 lg:py-32 xl:max-w-4xl">
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Expert Superannuation</span>
              <span className="block text-primary">Advice for Australians</span>
            </h1>
            <p className="mt-6 max-w-3xl text-lg text-gray-500">
              Supaboost provides personalized superannuation advice to help
              Australians maximize their retirement funds. Our expert advisors
              guide you through every step of your super journey.
            </p>
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row md:justify-start">
              <Button size="lg" asChild>
                <Link href="/services">Explore Our Services</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute inset-y-0 right-0 hidden w-1/2 bg-gray-50 lg:block"
        aria-hidden="true"
      ></div>
    </section>
  );
}
