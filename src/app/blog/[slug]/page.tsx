import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { BlogPostLayout } from "@/components/seo/BlogPostLayout";
import { blogPostMetadata } from "@/lib/metadata";
import { BLOG_POSTS, getBlogPostBySlug } from "@/content/blog";

interface PageParams {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};
  return blogPostMetadata(post);
}

export default async function BlogPostPage({ params }: PageParams) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();
  return <BlogPostLayout post={post} />;
}
