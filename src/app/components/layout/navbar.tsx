"use client";

import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const navigationItems = [
  { name: "Home", href: "/", ariaLabel: "Go to home page" },
  { name: "About Us", href: "/about", ariaLabel: "Learn about Supaboost" },
  { name: "Services", href: "/services", ariaLabel: "View our services" },
  { name: "Blog", href: "/blog", ariaLabel: "Read our latest articles" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Handle Escape key press to close menu
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [mobileMenuOpen]);

  // Toggle body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [mobileMenuOpen]);

  // Add a class based on scroll position
  const navbarClass = scrolled
    ? "bg-background shadow-md transition-all duration-300"
    : "bg-background";

  return (
    <>
      {/* Fixed navbar */}
      <nav
        className={`fixed inset-x-0 top-0 z-50 ${navbarClass}`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-between">
            <div className="flex items-center">
              <Link
                href="/"
                className="flex shrink-0 items-center"
                aria-label="Supaboost home"
              >
                <span className="font-heading text-xl font-bold text-primary">
                  Supaboost
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
              <NavigationMenu>
                <NavigationMenuList>
                  {navigationItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <NavigationMenuItem key={item.name}>
                        <Link href={item.href} legacyBehavior passHref>
                          <NavigationMenuLink
                            className={navigationMenuTriggerStyle({
                              className: isActive
                                ? "bg-secondary text-primary"
                                : "",
                            })}
                            aria-current={isActive ? "page" : undefined}
                            aria-label={item.ariaLabel}
                          >
                            {item.name}
                          </NavigationMenuLink>
                        </Link>
                      </NavigationMenuItem>
                    );
                  })}
                </NavigationMenuList>
              </NavigationMenu>

              <ThemeToggle />

              <Button size="sm" className="ml-4">
                <Link href="#contact">Contact Us</Link>
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center space-x-2 md:hidden">
              <ThemeToggle />

              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-menu"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {mobileMenuOpen ? (
                  <X className="size-6" aria-hidden="true" />
                ) : (
                  <Menu className="size-6" aria-hidden="true" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile menu with improved transitions */}
        <div
          id="mobile-menu"
          className={`absolute inset-x-0 top-16 bg-background shadow-lg transition-all duration-300 ease-in-out md:hidden${
            mobileMenuOpen
              ? "translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-full opacity-0"
          }`}
          aria-hidden={!mobileMenuOpen}
        >
          <div className="space-y-1 px-4 py-3 sm:px-5">
            {navigationItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block rounded-md px-3 py-2 text-base font-medium ${
                    isActive
                      ? "bg-secondary text-primary"
                      : "text-foreground hover:bg-accent hover:text-accent-foreground"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                  aria-label={item.ariaLabel}
                >
                  {item.name}
                </Link>
              );
            })}
            <div className="pt-3">
              <Button size="sm" className="w-full justify-center">
                <Link href="#contact" className="w-full text-center">
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content from hiding behind fixed navbar */}
      <div className="h-16" aria-hidden="true"></div>
    </>
  );
}
