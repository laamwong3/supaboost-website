import { Button } from "@/components/ui/button";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <section
      id="main-content"
      className="relative overflow-hidden bg-white pt-16 md:pt-20 lg:pt-24"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 px-4 py-12 sm:px-6 md:py-20 lg:px-8 lg:py-28">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="flex flex-col">
              <h1
                id="hero-heading"
                className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl"
              >
                <span className="block">Expert Superannuation</span>
                <span className="block text-primary">
                  Advice for Australians
                </span>
              </h1>
              <p className="mt-6 max-w-3xl text-lg text-gray-500">
                Supaboost provides personalized superannuation advice to help
                Australians maximize their retirement funds. Our expert advisors
                guide you through every step of your super journey.
              </p>

              {/* Feature highlights with improved accessibility */}
              <div className="mt-8 space-y-4">
                {[
                  "Personalized strategies for your financial goals",
                  "Expert advisors with deep market knowledge",
                  "Focused exclusively on Australian superannuation",
                ].map((feature, i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Check size={14} aria-hidden="true" />
                    </div>
                    <p className="text-sm text-gray-600">{feature}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Button size="lg" asChild>
                  <Link href="/services" className="group">
                    Explore Our Services
                    <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/about">Learn More About Us</Link>
                </Button>
              </div>
            </div>

            <div className="relative h-64 sm:h-80 lg:h-full">
              <OptimizedImage
                src="/images/financial-planning.jpg"
                alt="Financial planning services showing advisor with client"
                width={600}
                height={450}
                priority
                className="rounded-lg shadow-lg"
                aspectRatio="video"
                fallbackSrc="/images/placeholder-financial.jpg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative background elements */}
      <div
        className="absolute -right-24 -top-24 hidden size-96 rounded-full bg-primary/5 lg:block"
        aria-hidden="true"
      ></div>
      <div
        className="absolute -bottom-12 -left-12 hidden size-64 rounded-full bg-primary/5 lg:block"
        aria-hidden="true"
      ></div>
    </section>
  );
}
