import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function CTA() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl bg-primary shadow-xl">
          <div className="px-6 py-12 sm:px-12 sm:py-16 lg:flex lg:items-center lg:justify-between">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to optimize your superannuation?
              </h2>
              <p className="mt-4 max-w-3xl text-lg text-primary-foreground/80">
                Book a consultation with our team of expert advisors and take
                the first step toward a more secure retirement.
              </p>
            </div>
            <div className="mt-8 flex lg:mt-0 lg:shrink-0">
              <div className="inline-flex rounded-md shadow">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/services">Explore Our Services</Link>
                </Button>
              </div>
              <div className="ml-3 inline-flex rounded-md shadow">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white bg-transparent text-white hover:bg-white/10"
                  asChild
                >
                  <Link href="#contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
