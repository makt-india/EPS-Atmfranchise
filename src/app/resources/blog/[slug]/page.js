import { blogPosts } from "../data";
import BlogPostContent from "./BlogPostContent";

// --- FIX: Generate static paths for "output: export" ---
// This runs only at build time on the server
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// This is now a Server Component
export default async function BlogPost({ params }) {
  const { slug } = await params; // Await params for Next.js 15+ compatibility
  const post = blogPosts.find((p) => p.slug === slug);

  return <BlogPostContent post={post} />;
}