import { additionalServices } from "@/lib/data/services";
import { BarChart, BookOpen, CreditCard } from "lucide-react";
import React from "react";

// Map icon strings to actual components
const getIcon = (iconName: string) => {
  switch (iconName) {
    case "shield":
      return <CreditCard className="size-6 text-primary" />;
    case "chart-bar":
      return <BarChart className="size-6 text-primary" />;
    case "academic-cap":
      return <BookOpen className="size-6 text-primary" />;
    default:
      return <CreditCard className="size-6 text-primary" />;
  }
};

export default function FeaturesList() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Additional Services
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-500">
            Beyond our core superannuation advisory, we offer these
            complementary services to enhance your financial strategy.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {additionalServices.map((service) => (
            <div key={service.id} className="rounded-lg bg-white p-6 shadow-sm">
              <div className="mb-4 flex size-12 items-center justify-center rounded-full bg-primary/10">
                {getIcon(service.icon)}
              </div>
              <h3 className="text-lg font-medium text-gray-900">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
