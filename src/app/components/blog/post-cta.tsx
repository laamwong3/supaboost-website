import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React from "react";

export default function PostCTA() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-lg bg-white p-8 shadow-md md:p-12">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900">
              Want more insights on superannuation?
            </h2>
            <p className="mt-3 text-lg text-gray-600">
              Subscribe to our newsletter for the latest updates and expert
              advice.
            </p>
          </div>

          <div className="mx-auto max-w-md">
            <form className="flex flex-col gap-3 sm:flex-row">
              <Input
                type="email"
                placeholder="Enter your email"
                className="grow"
                required
              />
              <Button type="submit">Subscribe</Button>
            </form>

            <div className="mt-8 text-center">
              <p className="mb-4 text-gray-600">
                Need personalized superannuation advice?
              </p>
              <Button variant="outline" asChild>
                <Link href="/services#contact">Book a Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
