import { Badge } from "@/components/ui/badge";
import { BlogPost } from "@/lib/data/blog-posts";
import { CalendarIcon } from "lucide-react";
import React from "react";

interface PostHeaderProps {
  post: BlogPost;
}

export default function PostHeader({ post }: PostHeaderProps) {
  return (
    <section className="bg-primary/5 py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Badge variant="secondary">{post.category}</Badge>

        <h1 className="mt-4 text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
          {post.title}
        </h1>

        <div className="mt-6 flex items-center space-x-4">
          <div className="flex items-center">
            <div className="mr-3 size-10 rounded-full bg-gray-200"></div>
            <div>
              <div className="text-sm font-medium text-gray-900">
                {post.author.name}
              </div>
              <div className="text-xs text-gray-500">{post.author.role}</div>
            </div>
          </div>

          <div className="flex items-center text-sm text-gray-500">
            <CalendarIcon className="mr-1 size-4" />
            {post.date}
          </div>
        </div>

        <p className="mt-6 text-xl text-gray-600">{post.excerpt}</p>

        <div className="mt-8 h-64 w-full rounded-lg bg-gray-200">
          {/* This would be replaced with an actual image in a production environment */}
          <div className="flex size-full items-center justify-center text-gray-500">
            Featured Image: {post.title}
          </div>
        </div>
      </div>
    </section>
  );
}
