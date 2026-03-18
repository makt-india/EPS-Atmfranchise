import { blogPosts } from "../data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";

const BASE_URL = "https://epsatmfranchise.com";

/* --------------------------------
   Generate Static Params (Safe)
---------------------------------*/
export async function generateStaticParams() {
  return blogPosts
    .filter((post) => post && post.slug)
    .map((post) => ({
      slug: post.slug,
    }));
}

/* --------------------------------
   Generate Metadata (Next 15 Safe)
---------------------------------*/
export async function generateMetadata({ params }) {
  const resolvedParams = await params;

  const post = blogPosts.find(
    (p) => p && p.slug === resolvedParams.slug
  );

  if (!post) {
    return {
      title: "Article Not Found",
      robots: { index: false, follow: false },
    };
  }

  const url = `${BASE_URL}/resources/blog/${post.slug}/`;

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url,
      type: "article",
      siteName: "EPS ATM Franchise",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

/* --------------------------------
   Blog Post Page
---------------------------------*/
export default async function BlogPost({ params }) {
  const resolvedParams = await params;

  const post = blogPosts.find(
    (p) => p && p.slug === resolvedParams.slug
  );

  if (!post) return notFound();

  const articleUrl = `${BASE_URL}/resources/blog/${post.slug}/`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    author: {
      "@type": "Organization",
      name: "EPS Editorial Team",
    },
    publisher: {
      "@type": "Organization",
      name: "EPS ATM Franchise",
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/img/logo.webp`,
      },
    },
    datePublished: new Date(post.date).toISOString(),
    dateModified: new Date(post.date).toISOString(),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
  };

  return (
    <main className="bg-gray-50 min-h-screen pb-24">

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      {/* HERO */}
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
            {post.category || "Blog"}
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
              By{" "}
              <span className="text-white font-semibold">
                EPS Editorial Team
              </span>
            </span>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <div className="max-w-4xl mx-auto px-6 -mt-10 relative z-20">
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12">
          <article
            className="prose prose-lg max-w-none prose-headings:text-[#1d134c] prose-a:text-blue-600 prose-strong:text-[#1d134c]"
            dangerouslySetInnerHTML={{
              __html: post.content || "",
            }}
          />

          {/* FOOTER */}
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