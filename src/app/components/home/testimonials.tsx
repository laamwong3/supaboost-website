"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { testimonials } from "@/lib/data/testimonials";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import React, { useState } from "react";

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-500">
            Hear from Australians who have transformed their superannuation
            strategy with Supaboost.
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <Card className="border-0 shadow-lg">
            <CardHeader className="pb-0">
              <div className="flex justify-center">
                <Quote className="size-12 text-primary/30" />
              </div>
            </CardHeader>
            <CardContent className="px-6 pb-8 pt-6 text-center md:px-12">
              <p className="text-lg italic text-gray-700 md:text-xl">
                &quot;{testimonials[currentTestimonial].testimonial}&quot;
              </p>
            </CardContent>
            <CardFooter className="flex flex-col items-center border-t pb-8 pt-6">
              <div className="text-center">
                <h3 className="font-medium text-gray-900">
                  {testimonials[currentTestimonial].name}
                </h3>
                <p className="text-sm text-gray-500">
                  {testimonials[currentTestimonial].role}
                  {testimonials[currentTestimonial].company &&
                    `, ${testimonials[currentTestimonial].company}`}
                </p>
              </div>

              <div className="mt-6 flex space-x-4">
                <Button
                  size="icon"
                  variant="outline"
                  onClick={prevTestimonial}
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="size-5" />
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  onClick={nextTestimonial}
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="size-5" />
                </Button>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
