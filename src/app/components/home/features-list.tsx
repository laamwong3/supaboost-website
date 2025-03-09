import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import Link from "next/link";
import React from "react";

const benefits = [
  {
    title: "Expert Advice",
    description:
      "Our team consists of certified financial advisors specializing in Australian superannuation law and investment.",
  },
  {
    title: "Personalized Plans",
    description:
      "Every client receives a customized strategy tailored to their specific financial situation and retirement goals.",
  },
  {
    title: "Australian Market Focus",
    description:
      "We understand the nuances of the Australian superannuation system and how to navigate it effectively.",
  },
];

export default function FeaturesList() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Why Choose Supaboost?
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                At Supaboost, we&apos;re committed to helping Australians take
                control of their superannuation and secure their financial
                future.
              </p>
            </div>

            <ul className="space-y-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex">
                  <div className="shrink-0">
                    <CheckCircle className="size-6 text-primary" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-gray-900">
                      {benefit.title}
                    </h3>
                    <p className="mt-2 text-base text-gray-500">
                      {benefit.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <div>
              <Button size="lg" asChild>
                <Link href="/about">Learn More About Our Approach</Link>
              </Button>
            </div>
          </div>

          <div className="relative h-64 min-h-[400px] overflow-hidden rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 lg:h-full">
            {/* This would be replaced with an actual image in a production environment */}
            <div className="absolute inset-0 flex items-center justify-center text-lg font-semibold text-primary/30">
              Image Placeholder
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
