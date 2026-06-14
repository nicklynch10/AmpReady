import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPostBySlug, getRelatedPosts } from "@/lib/blog-data";
import BlogPostContent from "./BlogPostContent";

// Generate static paths for all blog posts
export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate metadata for each blog post
export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.tags,
    authors: [{ name: post.author }],
    alternates: {
      canonical: `https://ampready.com/blog/${post.slug}/`,
    },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: `https://ampready.com/blog/${post.slug}/`,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(params.slug);

  return <BlogPostContent post={post} relatedPosts={relatedPosts} />;
}
