import { blogPosts } from "@/lib/data/blog-posts";
import { notFound } from "next/navigation";
import React from "react";

import PostBody from "../../components/blog/post-body";
import CTA from "../../components/blog/post-cta";
import PostHeader from "../../components/blog/post-header";
import Footer from "../../components/layout/footer";
import Navbar from "../../components/layout/navbar";

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="grow">
        <PostHeader post={post} />
        <PostBody content={post.content} />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
