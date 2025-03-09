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
import React from "react";

interface FeaturedPostsProps {
  posts: BlogPost[];
}

export default function FeaturedPosts({ posts }: FeaturedPostsProps) {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-8 text-2xl font-bold text-gray-900">
          Featured Articles
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {posts.map((post) => (
            <Card key={post.id} className="overflow-hidden">
              <div className="relative h-56 bg-gray-200">
                {/* This would be replaced with an actual image in a production environment */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  Featured Image: {post.title}
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
                <CardTitle className="text-xl">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="transition-colors hover:text-primary"
                  >
                    {post.title}
                  </Link>
                </CardTitle>
                <CardDescription className="line-clamp-2 text-gray-600">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>
              <CardFooter className="flex items-center justify-between pt-0">
                <div className="flex items-center">
                  <div className="mr-2 size-8 rounded-full bg-gray-200"></div>
                  <span className="text-sm font-medium">
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
