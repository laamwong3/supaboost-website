import { testimonials } from "@/lib/data/testimonials";
import React from "react";

export default function Testimonials() {
  // For the services page, let's just show a couple of relevant testimonials
  const relevantTestimonials = testimonials.slice(0, 2);

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Client Success Stories
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-500">
            Hear from clients who have transformed their superannuation strategy
            with our services.
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 lg:grid-cols-2">
          {relevantTestimonials.map((testimonial) => (
            <div key={testimonial.id} className="rounded-lg bg-gray-50 p-8">
              <svg
                className="mb-4 size-8 text-primary/30"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
              </svg>
              <p className="italic text-gray-600">{testimonial.testimonial}</p>
              <div className="mt-6 flex items-center">
                <div className="size-10 shrink-0 rounded-full bg-gray-300"></div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">
                    {testimonial.name}
                  </p>
                  <div className="text-sm text-gray-500">
                    {testimonial.role}
                    {testimonial.company && `, ${testimonial.company}`}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
