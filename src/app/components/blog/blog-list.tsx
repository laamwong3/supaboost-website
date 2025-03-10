"use client";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { BlogPost } from "@/lib/data/blog-posts";
import { CalendarIcon, Search } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface BlogListProps {
  posts: BlogPost[];
}

export default function BlogList({ posts }: BlogListProps) {
  // State for filters and search
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>(posts);
  const [isLoading, setIsLoading] = useState(false);

  // Get unique categories
  const categories = Array.from(new Set(posts.map((post) => post.category)));

  // Filter posts whenever filters change
  useEffect(() => {
    setIsLoading(true);

    // Simulate a small delay to show loading state (would be network request in real app)
    const timer = setTimeout(() => {
      const filtered = posts.filter((post) => {
        // Filter by category
        const matchesCategory = selectedCategory
          ? post.category === selectedCategory
          : true;

        // Filter by search query
        const matchesSearch = searchQuery
          ? post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
          : true;

        return matchesCategory && matchesSearch;
      });

      setFilteredPosts(filtered);
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [selectedCategory, searchQuery, posts]);

  // Handle search input
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // Clear all filters
  const clearFilters = () => {
    setSelectedCategory(null);
    setSearchQuery("");
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 space-y-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <h2 className="text-2xl font-bold text-gray-900">All Articles</h2>

            {/* Search input */}
            <div className="relative w-full max-w-md">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <Search className="size-4 text-gray-400" aria-hidden="true" />
              </div>
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={handleSearch}
                className="pl-10"
                aria-label="Search articles"
              />
            </div>
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap gap-2">
            <Badge
              variant={selectedCategory === null ? "default" : "outline"}
              className="cursor-pointer"
              onClick={() => setSelectedCategory(null)}
            >
              All
            </Badge>
            {categories.map((category) => (
              <Badge
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>

          {/* Active filters */}
          {(selectedCategory || searchQuery) && (
            <div className="flex items-center text-sm">
              <span className="mr-2 text-gray-500">Active filters:</span>
              {selectedCategory && (
                <Badge variant="secondary" className="mr-2">
                  {selectedCategory}
                  <button
                    className="ml-1 text-gray-500 hover:text-gray-700"
                    onClick={() => setSelectedCategory(null)}
                    aria-label={`Remove ${selectedCategory} filter`}
                  >
                    &times;
                  </button>
                </Badge>
              )}
              {searchQuery && (
                <Badge variant="secondary" className="mr-2">
                  Search: {searchQuery}
                  <button
                    className="ml-1 text-gray-500 hover:text-gray-700"
                    onClick={() => setSearchQuery("")}
                    aria-label="Clear search"
                  >
                    &times;
                  </button>
                </Badge>
              )}
              <button
                className="text-sm text-primary hover:underline"
                onClick={clearFilters}
              >
                Clear all
              </button>
            </div>
          )}
        </div>

        {/* Loading state */}
        {isLoading ? (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="relative h-40 rounded-t-lg bg-gray-200"></div>
                <div className="space-y-3 rounded-b-lg border border-gray-200 p-6">
                  <div className="h-4 w-1/2 rounded bg-gray-200"></div>
                  <div className="h-6 w-3/4 rounded bg-gray-200"></div>
                  <div className="h-4 w-full rounded bg-gray-200"></div>
                  <div className="h-4 w-5/6 rounded bg-gray-200"></div>
                  <div className="flex justify-between pt-2">
                    <div className="h-5 w-1/3 rounded bg-gray-200"></div>
                    <div className="h-5 w-1/4 rounded bg-gray-200"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <>
            {/* No results message */}
            {filteredPosts.length === 0 ? (
              <div className="py-12 text-center">
                <h3 className="mb-2 text-lg font-medium text-gray-900">
                  No articles found
                </h3>
                <p className="text-gray-500">
                  Try adjusting your search or filter to find what you&apos;re
                  looking for.
                </p>
                <button
                  className="mt-4 text-primary hover:underline"
                  onClick={clearFilters}
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {filteredPosts.map((post) => (
                  <Card
                    key={post.id}
                    className="flex h-full flex-col overflow-hidden"
                  >
                    <div className="relative h-40 bg-gray-200">
                      {/* This would be replaced with an actual image in production */}
                      <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                        Image: {post.title}
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col">
                      <CardHeader>
                        <div className="mb-2 flex items-center justify-between">
                          <Badge variant="secondary">{post.category}</Badge>
                          <div className="flex items-center text-sm text-gray-500">
                            <CalendarIcon
                              className="mr-1 size-4"
                              aria-hidden="true"
                            />
                            <time dateTime={post.date}>{post.date}</time>
                          </div>
                        </div>
                        <CardTitle className="text-lg">
                          <Link
                            href={`/blog/${post.slug}`}
                            className="transition-colors hover:text-primary"
                          >
                            {post.title}
                          </Link>
                        </CardTitle>
                        <CardDescription className="line-clamp-2 text-sm text-gray-600">
                          {post.excerpt}
                        </CardDescription>
                      </CardHeader>
                      <CardFooter className="mt-auto flex items-center justify-between pt-0">
                        <div className="flex items-center">
                          <div className="mr-2 size-6 rounded-full bg-gray-200"></div>
                          <span className="text-xs font-medium">
                            {post.author.name}
                          </span>
                        </div>
                        <Link
                          href={`/blog/${post.slug}`}
                          className="text-sm font-medium text-primary hover:underline"
                          aria-label={`Read more about ${post.title}`}
                        >
                          Read more
                        </Link>
                      </CardFooter>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </>
        )}

        {/* Pagination placeholder - would be implemented with real data */}
        {filteredPosts.length > 0 && (
          <div className="mt-12 flex justify-center">
            <nav
              className="inline-flex -space-x-px rounded-md shadow-sm"
              aria-label="Pagination"
            >
              <a
                href="#"
                className="inline-flex items-center rounded-l-md border border-gray-300 bg-white p-2 text-sm font-medium text-gray-500 hover:bg-gray-50"
                aria-label="Previous page"
              >
                <svg
                  className="size-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="inline-flex items-center border border-gray-300 bg-primary px-4 py-2 text-sm font-medium text-white"
                aria-current="page"
              >
                1
              </a>
              <a
                href="#"
                className="inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                2
              </a>
              <a
                href="#"
                className="inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                3
              </a>
              <a
                href="#"
                className="inline-flex items-center rounded-r-md border border-gray-300 bg-white p-2 text-sm font-medium text-gray-500 hover:bg-gray-50"
                aria-label="Next page"
              >
                <svg
                  className="size-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </nav>
          </div>
        )}
      </div>
    </section>
  );
}
