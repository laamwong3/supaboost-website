import { blogPosts } from "@/lib/data/blog-posts";
import React from "react";

import BlogList from "../components/blog/blog-list";
import FeaturedPosts from "../components/blog/featured-posts";
import Footer from "../components/layout/footer";
import Navbar from "../components/layout/navbar";

export default function BlogPage() {
  const featuredPosts = blogPosts.filter((post) => post.featured);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="grow">
        <div className="bg-primary py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-center text-4xl font-bold text-white">
              Supaboost Blog
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-primary-foreground/80">
              Insights and guidance on superannuation, retirement planning, and
              financial strategy for Australians.
            </p>
          </div>
        </div>
        <FeaturedPosts posts={featuredPosts} />
        <BlogList posts={blogPosts} />
      </main>
      <Footer />
    </div>
  );
}
