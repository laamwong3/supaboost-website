"use client";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Fund Comparison", href: "/comparison" },
  { name: "Advice", href: "/advice" },
  { name: "Calculator", href: "/calculator" }, // Added calculator to nav
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold">SuperBoost</span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:items-center md:space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {item.name}
              </Link>
            ))}
            <Button>Get Started</Button>
          </nav>

          {/* Mobile menu toggle */}
          <div className="flex md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </Container>

      {/* Mobile navigation */}
      <div
        className={cn(
          "fixed inset-x-0 top-16 z-50 border-b bg-background md:hidden",
          isMenuOpen ? "block" : "hidden",
        )}
      >
        <Container className="py-4">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button>Get Started</Button>
          </nav>
        </Container>
      </div>
    </header>
  );
}
