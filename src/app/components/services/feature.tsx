import { Button } from "@/components/ui/button";
import { Service } from "@/lib/data/services";
import { CheckCircle } from "lucide-react";
import Link from "next/link";
import React from "react";

interface FeatureProps {
  service: Service;
  reversed?: boolean;
}

export default function Feature({ service, reversed = false }: FeatureProps) {
  return (
    <section className={`py-24 ${reversed ? "bg-gray-50" : "bg-white"}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`grid grid-cols-1 items-center gap-12 lg:grid-cols-2 ${reversed ? "lg:flex-row-reverse" : ""}`}
        >
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              {service.title}
            </h2>
            <p className="text-lg text-gray-600">{service.description}</p>

            <ul className="space-y-4">
              {service.features.map((feature, index) => (
                <li key={index} className="flex">
                  <CheckCircle className="size-6 shrink-0 text-primary" />
                  <span className="ml-3 text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <Button asChild>
                <Link href="#contact">Book a Consultation</Link>
              </Button>
            </div>
          </div>

          <div className="relative h-64 min-h-[400px] overflow-hidden rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 lg:h-full">
            {/* This would be replaced with an actual image in a production environment */}
            <div className="absolute inset-0 flex items-center justify-center text-lg font-semibold text-primary/30">
              {service.title} Image
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
