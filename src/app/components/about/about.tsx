import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function About() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="relative h-64 min-h-[400px] overflow-hidden rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 lg:h-full">
            {/* This would be replaced with an actual image in a production environment */}
            <div className="absolute inset-0 flex items-center justify-center text-lg font-semibold text-primary/30">
              Company Image Placeholder
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
            <p className="text-lg text-gray-600">
              Founded in 2015, Supaboost was born from the recognition that many
              Australians needed clearer guidance with their superannuation. Our
              founders, experienced financial advisors themselves, saw firsthand
              how complex and overwhelming the superannuation system could be.
            </p>
            <p className="text-lg text-gray-600">
              What began as a small consultancy has grown into a trusted
              advisory firm helping thousands of Australians take control of
              their retirement planning. Our commitment to personalized service
              and expert advice remains at the heart of everything we do.
            </p>

            <div className="pt-4">
              <h3 className="text-xl font-semibold text-gray-900">
                Our Values
              </h3>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start">
                  <span className="mt-1 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <span className="font-medium text-primary">1</span>
                  </span>
                  <span className="ml-3 text-gray-600">
                    <strong className="font-medium text-gray-900">
                      Integrity:
                    </strong>{" "}
                    We provide honest, transparent advice that puts our
                    clients&apos; interests first.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mt-1 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <span className="font-medium text-primary">2</span>
                  </span>
                  <span className="ml-3 text-gray-600">
                    <strong className="font-medium text-gray-900">
                      Expertise:
                    </strong>{" "}
                    We constantly expand our knowledge to provide cutting-edge
                    superannuation strategies.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mt-1 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <span className="font-medium text-primary">3</span>
                  </span>
                  <span className="ml-3 text-gray-600">
                    <strong className="font-medium text-gray-900">
                      Client Focus:
                    </strong>{" "}
                    We build lasting relationships based on understanding each
                    client&apos;s unique needs.
                  </span>
                </li>
              </ul>
            </div>

            <div className="pt-4">
              <Button asChild>
                <Link href="/services">Explore Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
