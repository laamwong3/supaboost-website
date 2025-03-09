import React from "react";

export default function Header() {
  return (
    <section className="relative bg-primary py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center md:max-w-2xl md:text-left lg:max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            About Supaboost
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-primary-foreground/80">
            We&apos;re on a mission to help Australians make smarter decisions
            with their superannuation, ensuring a secure and prosperous
            retirement.
          </p>
        </div>
      </div>
    </section>
  );
}
