import { blogPosts } from "../data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    return { title: "Not Found" };
  }

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `/resources/blog/${post.slug}/`,
    },
  };
}

export default async function BlogPost({ params }) {
  const resolvedParams = await params;

  const post = blogPosts.find(
    (p) => p.slug === resolvedParams.slug
  );

  if (!post) return notFound();

  return (
    <main className="bg-gray-50 min-h-screen pb-24">
      <section className="bg-[#1d134c] text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <Link
            href="/resources/blog/"
            className="inline-flex items-center gap-2 text-blue-200 hover:text-white mb-8 text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to All Articles
          </Link>

          <span className="inline-block px-3 py-1 bg-yellow-400 text-[#1d134c] text-xs font-bold rounded-full uppercase mb-6">
            {post.category}
          </span>

          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-blue-100/80 text-sm">
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {post.date}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
            <span>
              By <span className="text-white font-semibold">
                EPS Editorial Team
              </span>
            </span>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 -mt-10 relative z-20">
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12">
          <article
            className="prose prose-lg max-w-none prose-headings:text-[#1d134c] prose-a:text-blue-600 prose-strong:text-[#1d134c]"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="mt-16 border-t pt-10">
            <div className="flex items-center justify-between flex-wrap gap-6">
              <div className="flex items-center gap-3 text-gray-600 text-sm">
                <Share2 className="w-4 h-4" />
                Share this article
              </div>

              <Link
                href="/resources/blog/"
                className="text-sm font-semibold text-[#1d134c] hover:underline"
              >
                ← More Articles
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
