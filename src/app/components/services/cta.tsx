import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

export default function CTA() {
  return (
    <section id="contact" className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              Let&apos;s Discuss Your Superannuation Strategy
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Fill out the form to schedule a consultation with one of our
              expert advisors. We&apos;ll analyze your current situation and
              provide personalized recommendations.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-center">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <svg
                    className="size-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div className="ml-4 text-base text-gray-600">
                  contact@supaboost.com.au
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <svg
                    className="size-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div className="ml-4 text-base text-gray-600">
                  (02) 1234 5678
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <svg
                    className="size-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <div className="ml-4 text-base text-gray-600">
                  123 Financial District
                  <br />
                  Sydney, NSW 2000
                  <br />
                  Australia
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-white p-8 shadow-sm">
            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    First name
                  </label>
                  <Input id="first-name" name="first-name" className="mt-1" />
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Last name
                  </label>
                  <Input id="last-name" name="last-name" className="mt-1" />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <Input id="email" name="email" type="email" className="mt-1" />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone
                </label>
                <Input id="phone" name="phone" type="tel" className="mt-1" />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  How can we help you?
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1"
                />
              </div>
              <div>
                <Button type="submit" className="w-full">
                  Schedule Consultation
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
