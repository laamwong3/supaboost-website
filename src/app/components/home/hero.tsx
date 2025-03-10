import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <section id="main-content" className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 px-4 py-16 sm:px-6 md:py-24 lg:px-8 lg:py-32">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
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

              {/* Feature highlights */}
              <div className="mt-8 space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        d="M10 3L4.5 8.5L2 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-600">
                    Personalized strategies for your financial goals
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        d="M10 3L4.5 8.5L2 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-600">
                    Expert advisors with deep market knowledge
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        d="M10 3L4.5 8.5L2 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-600">
                    Focused exclusively on Australian superannuation
                  </p>
                </div>
              </div>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Button size="lg" asChild>
                  <Link href="/services">Explore Our Services</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/about">Learn More About Us</Link>
                </Button>
              </div>
            </div>

            <div className="relative h-64 sm:h-80 lg:h-full">
              {/* This would be replaced with an actual image in production */}
              <div className="relative size-full overflow-hidden rounded-lg bg-gradient-to-br from-primary/20 to-primary/5">
                <div className="absolute inset-0 flex items-center justify-center text-lg font-semibold text-primary/30">
                  Financial Planning Image
                </div>

                {/* Decorative elements */}
                <div className="absolute -bottom-6 -right-6 size-32 rounded-full bg-primary/10"></div>
                <div className="absolute -left-6 top-10 size-16 rounded-full bg-primary/5"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
