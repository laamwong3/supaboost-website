import React from "react";

export default function Header() {
  return (
    <section className="relative bg-primary py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Our Services
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-xl text-primary-foreground/80">
            Comprehensive superannuation and retirement planning services
            tailored to your unique financial situation and goals.
          </p>
        </div>
      </div>
    </section>
  );
}
