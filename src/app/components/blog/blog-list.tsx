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
import { OptimizedImage } from "@/components/ui/optimized-image";
import { BlogPost } from "@/lib/data/blog-posts";
import { useDebounce } from "@/lib/hooks/use-debounce";
import { Calendar, Clock, Search, X } from "lucide-react";
import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";

// Create a custom hook for debouncing values
// Add this to src/lib/hooks/use-debounce.ts
// export function useDebounce<T>(value: T, delay: number): T {
//   const [debouncedValue, setDebouncedValue] = useState<T>(value);
//
//   useEffect(() => {
//     const handler = setTimeout(() => {
//       setDebouncedValue(value);
//     }, delay);
//
//     return () => {
//       clearTimeout(handler);
//     };
//   }, [value, delay]);
//
//   return debouncedValue;
// }

interface BlogListProps {
  posts: BlogPost[];
}

// Blog post card skeleton for loading state
const BlogCardSkeleton = () => (
  <div className="animate-pulse">
    <div className="relative h-40 rounded-t-lg bg-gray-200"></div>
    <div className="space-y-3 rounded-b-lg border border-gray-200 p-6">
      <div className="flex justify-between">
        <div className="h-6 w-16 rounded bg-gray-200"></div>
        <div className="h-6 w-24 rounded bg-gray-200"></div>
      </div>
      <div className="h-6 w-3/4 rounded bg-gray-200"></div>
      <div className="h-4 w-full rounded bg-gray-200"></div>
      <div className="h-4 w-5/6 rounded bg-gray-200"></div>
      <div className="flex justify-between pt-2">
        <div className="flex items-center space-x-2">
          <div className="size-8 rounded-full bg-gray-200"></div>
          <div className="h-4 w-20 rounded bg-gray-200"></div>
        </div>
        <div className="h-5 w-16 rounded bg-gray-200"></div>
      </div>
    </div>
  </div>
);

export default function BlogList({ posts }: BlogListProps) {
  // State for filters and search
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearchQuery = useDebounce(searchQuery, 300);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>(posts);
  const [isLoading, setIsLoading] = useState(false);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  // Get unique categories
  const categories = Array.from(new Set(posts.map((post) => post.category)));

  // Create a memoized filter function to prevent unnecessary re-renders
  const filterPosts = useCallback(() => {
    setIsLoading(true);

    // Update active filters list for accessibility
    const newActiveFilters = [];
    if (selectedCategory) newActiveFilters.push(selectedCategory);
    if (debouncedSearchQuery)
      newActiveFilters.push(`Search: ${debouncedSearchQuery}`);
    setActiveFilters(newActiveFilters);

    // Simulate network delay
    const timer = setTimeout(() => {
      const filtered = posts.filter((post) => {
        // Filter by category
        const matchesCategory = selectedCategory
          ? post.category === selectedCategory
          : true;

        // Filter by search query
        const matchesSearch = debouncedSearchQuery
          ? post.title
              .toLowerCase()
              .includes(debouncedSearchQuery.toLowerCase()) ||
            post.excerpt
              .toLowerCase()
              .includes(debouncedSearchQuery.toLowerCase())
          : true;

        return matchesCategory && matchesSearch;
      });

      setFilteredPosts(filtered);
      setIsLoading(false);
    }, 500); // Simulate loading for demo purposes

    return () => clearTimeout(timer);
  }, [selectedCategory, debouncedSearchQuery, posts]);

  // Filter posts whenever filters change
  useEffect(() => {
    filterPosts();
  }, [filterPosts]);

  // Handle search input
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // Clear category filter
  const clearCategoryFilter = () => {
    setSelectedCategory(null);
  };

  // Clear search filter
  const clearSearchFilter = () => {
    setSearchQuery("");
  };

  // Clear all filters
  const clearAllFilters = () => {
    setSelectedCategory(null);
    setSearchQuery("");
  };

  // Handle category selection with keyboard support
  const handleCategoryKeyDown = (category: string, e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setSelectedCategory(category === selectedCategory ? null : category);
    }
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 space-y-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <h2 className="text-2xl font-bold text-gray-900" id="blog-heading">
              All Articles
            </h2>

            {/* Search input with accessibility enhancements */}
            <div className="relative w-full max-w-md">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <Search className="size-4 text-gray-400" aria-hidden="true" />
              </div>
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={handleSearch}
                className="px-10"
                aria-label="Search articles"
                aria-controls="blog-results"
              />
              {searchQuery && (
                <button
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600"
                  onClick={clearSearchFilter}
                  aria-label="Clear search"
                >
                  <X size={16} />
                </button>
              )}
            </div>
          </div>

          {/* Category filters with improved accessibility */}
          <div
            className="flex flex-wrap gap-2"
            role="radiogroup"
            aria-label="Filter articles by category"
          >
            <Badge
              variant={selectedCategory === null ? "default" : "outline"}
              className="cursor-pointer"
              onClick={() => setSelectedCategory(null)}
              onKeyDown={(e) => handleCategoryKeyDown("", e)}
              role="radio"
              aria-checked={selectedCategory === null}
              tabIndex={selectedCategory === null ? -1 : 0}
            >
              All
            </Badge>
            {categories.map((category) => (
              <Badge
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => setSelectedCategory(category)}
                onKeyDown={(e) => handleCategoryKeyDown(category, e)}
                role="radio"
                aria-checked={selectedCategory === category}
                tabIndex={selectedCategory === category ? -1 : 0}
              >
                {category}
              </Badge>
            ))}
          </div>

          {/* Active filters with improved accessibility */}
          {activeFilters.length > 0 && (
            <div className="flex items-center text-sm" aria-live="polite">
              <span className="mr-2 text-gray-500">Active filters:</span>
              <div className="flex flex-wrap gap-2">
                {selectedCategory && (
                  <Badge
                    variant="secondary"
                    className="flex items-center gap-1"
                  >
                    {selectedCategory}
                    <button
                      className="ml-1 flex size-4 items-center justify-center rounded-full bg-gray-200 text-gray-500 hover:bg-gray-300 hover:text-gray-700"
                      onClick={clearCategoryFilter}
                      aria-label={`Remove ${selectedCategory} filter`}
                    >
                      <X size={10} />
                    </button>
                  </Badge>
                )}
                {debouncedSearchQuery && (
                  <Badge
                    variant="secondary"
                    className="flex items-center gap-1"
                  >
                    Search: {debouncedSearchQuery}
                    <button
                      className="ml-1 flex size-4 items-center justify-center rounded-full bg-gray-200 text-gray-500 hover:bg-gray-300 hover:text-gray-700"
                      onClick={clearSearchFilter}
                      aria-label="Clear search"
                    >
                      <X size={10} />
                    </button>
                  </Badge>
                )}
              </div>
              <button
                className="ml-3 text-sm text-primary hover:underline"
                onClick={clearAllFilters}
                aria-label="Clear all filters"
              >
                Clear all
              </button>
            </div>
          )}
        </div>

        {/* Results section with aria-live region */}
        <div
          id="blog-results"
          className="min-h-[60vh]"
          aria-live="polite"
          aria-busy={isLoading}
        >
          {/* Loading state with improved skeleton UI */}
          {isLoading ? (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <BlogCardSkeleton key={i} />
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
                    onClick={clearAllFilters}
                  >
                    Clear all filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {filteredPosts.map((post) => (
                    <Card
                      key={post.id}
                      className="flex h-full flex-col overflow-hidden transition-shadow hover:shadow-md"
                    >
                      <div className="relative h-40 overflow-hidden bg-gray-200">
                        <OptimizedImage
                          src={post.imageUrl || "/images/blog-placeholder.jpg"}
                          alt={`Thumbnail for ${post.title}`}
                          width={400}
                          height={225}
                          className="size-full"
                          objectFit="cover"
                        />
                      </div>
                      <CardHeader>
                        <div className="mb-2 flex items-center justify-between">
                          <Badge variant="secondary">{post.category}</Badge>
                          <div
                            className="flex items-center text-sm text-gray-500"
                            title={`Published on ${post.date}`}
                          >
                            <Calendar
                              className="mr-1 size-4"
                              aria-hidden="true"
                            />
                            <time
                              dateTime={
                                new Date(post.date).toISOString().split("T")[0]
                              }
                            >
                              {post.date}
                            </time>
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
                          <div className="mr-2 size-8 overflow-hidden rounded-full bg-gray-200">
                            {post.author.imageUrl && (
                              <OptimizedImage
                                src={post.author.imageUrl}
                                alt={`Avatar of ${post.author.name}`}
                                width={32}
                                height={32}
                              />
                            )}
                          </div>
                          <span className="text-xs font-medium">
                            {post.author.name}
                          </span>
                        </div>
                        <Link
                          href={`/blog/${post.slug}`}
                          className="flex items-center text-sm font-medium text-primary hover:underline"
                          aria-label={`Read more about ${post.title}`}
                        >
                          Read more
                          <Clock className="ml-1 size-3.5" aria-hidden="true" />
                        </Link>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              )}
            </>
          )}
        </div>

        {/* Pagination with improved accessibility */}
        {/* Pagination with improved accessibility */}
        {filteredPosts.length > 0 && (
          <nav
            className="mt-12 flex justify-center"
            aria-label="Pagination"
            role="navigation"
          >
            <ul className="inline-flex -space-x-px rounded-md shadow-sm">
              <li>
                <a
                  href="#"
                  className="inline-flex items-center rounded-l-md border border-gray-300 bg-white p-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-2 focus:ring-primary"
                  aria-label="Previous page"
                  role="button"
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
              </li>
              <li>
                <a
                  href="#"
                  className="inline-flex items-center border border-gray-300 bg-primary px-4 py-2 text-sm font-medium text-white"
                  aria-current="page"
                  aria-label="Page 1"
                >
                  1
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-2 focus:ring-primary"
                  aria-label="Page 2"
                >
                  2
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-2 focus:ring-primary"
                  aria-label="Page 3"
                >
                  3
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-flex items-center rounded-r-md border border-gray-300 bg-white p-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-2 focus:ring-primary"
                  aria-label="Next page"
                  role="button"
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
              </li>
            </ul>
          </nav>
        )}
      </div>
    </section>
  );
}
