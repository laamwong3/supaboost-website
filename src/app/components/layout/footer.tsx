"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-3">
            <h2 className="font-heading text-lg font-bold text-primary">
              Supaboost
            </h2>
            <p className="text-sm text-gray-600">
              Expert superannuation advice tailored for Australians.
            </p>

            <address className="text-sm not-italic text-gray-600">
              <p>123 Financial District</p>
              <p>Sydney, NSW 2000</p>
              <p>Australia</p>
            </address>

            <p className="text-sm text-gray-600">
              <a href="tel:+61212345678" className="hover:text-primary">
                (02) 1234 5678
              </a>
            </p>

            <div className="flex space-x-4 pt-2">
              <a
                href="#"
                className="text-gray-500 transition-colors hover:text-primary"
                aria-label="Facebook"
              >
                <Facebook size={20} aria-hidden="true" />
              </a>
              <a
                href="#"
                className="text-gray-500 transition-colors hover:text-primary"
                aria-label="Twitter"
              >
                <Twitter size={20} aria-hidden="true" />
              </a>
              <a
                href="#"
                className="text-gray-500 transition-colors hover:text-primary"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} aria-hidden="true" />
              </a>
              <a
                href="#"
                className="text-gray-500 transition-colors hover:text-primary"
                aria-label="Instagram"
              >
                <Instagram size={20} aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase text-gray-900">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-600 transition-colors hover:text-primary"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 transition-colors hover:text-primary"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-600 transition-colors hover:text-primary"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-600 transition-colors hover:text-primary"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-gray-600 transition-colors hover:text-primary"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase text-gray-900">
              Services
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services"
                  className="text-gray-600 transition-colors hover:text-primary"
                >
                  Superannuation Advice
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-600 transition-colors hover:text-primary"
                >
                  Investment Strategy
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-600 transition-colors hover:text-primary"
                >
                  Retirement Planning
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-600 transition-colors hover:text-primary"
                >
                  Portfolio Management
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase text-gray-900">
              Subscribe
            </h3>
            <p className="mb-4 text-sm text-gray-600">
              Join our newsletter for the latest updates and insights.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-2">
              <div className="flex space-x-2">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="max-w-[180px]"
                  aria-label="Email address"
                  required
                />
                <Button size="sm" type="submit">
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-gray-500">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-gray-600">
              © {currentYear} Supaboost. All rights reserved.
            </p>
            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600 md:mt-0">
              <Link
                href="/privacy-policy"
                className="transition-colors hover:text-primary"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="transition-colors hover:text-primary"
              >
                Terms of Service
              </Link>
              <Link
                href="/disclaimer"
                className="transition-colors hover:text-primary"
              >
                Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
