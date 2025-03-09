"use client";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BlogPost } from "@/lib/data/blog-posts";
import { CalendarIcon } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

interface BlogListProps {
  posts: BlogPost[];
}

export default function BlogList({ posts }: BlogListProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Get unique categories
  const categories = Array.from(new Set(posts.map((post) => post.category)));

  // Filter posts by selected category
  const filteredPosts = selectedCategory
    ? posts.filter((post) => post.category === selectedCategory)
    : posts;

  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between">
          <h2 className="text-2xl font-bold text-gray-900">All Articles</h2>

          <div className="mt-4 flex flex-wrap gap-2 md:mt-0">
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
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden">
              <div className="relative h-40 bg-gray-200">
                {/* This would be replaced with an actual image in a production environment */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  Image: {post.title}
                </div>
              </div>
              <CardHeader>
                <div className="mb-2 flex items-center justify-between">
                  <Badge variant="secondary">{post.category}</Badge>
                  <div className="flex items-center text-sm text-gray-500">
                    <CalendarIcon className="mr-1 size-4" />
                    {post.date}
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
              <CardFooter className="flex items-center justify-between pt-0">
                <div className="flex items-center">
                  <div className="mr-2 size-6 rounded-full bg-gray-200"></div>
                  <span className="text-xs font-medium">
                    {post.author.name}
                  </span>
                </div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-sm font-medium text-primary hover:underline"
                >
                  Read more
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
