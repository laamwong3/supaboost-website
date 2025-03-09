import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BarChart3, Landmark, TrendingUp } from "lucide-react";
import React from "react";

const features = [
  {
    title: "Personalized Superannuation Advice",
    description:
      "Receive tailored advice for your unique financial situation and retirement goals.",
    icon: Landmark,
  },
  {
    title: "Investment Strategy Consultation",
    description:
      "Get expert guidance on investment options within your superannuation fund.",
    icon: TrendingUp,
  },
  {
    title: "Retirement Planning",
    description:
      "Plan for your ideal retirement with strategic superannuation management.",
    icon: BarChart3,
  },
];

export default function Features() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-500">
            Comprehensive superannuation services designed to optimize your
            retirement savings and investment strategy.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border border-gray-200 shadow-sm transition-shadow hover:shadow-md"
            >
              <CardHeader>
                <div className="mb-4 flex size-12 items-center justify-center rounded-full bg-primary-foreground">
                  <feature.icon className="size-6 text-primary" />
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
