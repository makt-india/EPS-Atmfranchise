import Link from "next/link";
import { blogPosts } from "./data";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const BASE_URL = "https://epsatmfranchise.com";
const POSTS_PER_PAGE = 9;

export const metadata = {
  title:
    "ATM Franchise Blog 2026 – Cost, Profit, RBI Rules & Investment Guides",
  description:
    "In-depth guides on ATM franchise cost, commission structure, monthly profit, RBI guidelines and white label ATM strategies.",
  alternates: {
    canonical: `${BASE_URL}/resources/blog/`,
  },
  robots: { index: true, follow: true },
};

export default function Blog({
  posts,
  currentPage = 1,
  totalPages,
}) {

  const sortedPosts = [...blogPosts].sort(
    (a, b) =>
      new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const calculatedTotalPages = Math.ceil(
    sortedPosts.length / POSTS_PER_PAGE
  );

  const safePage =
    currentPage < 1
      ? 1
      : currentPage > calculatedTotalPages
      ? calculatedTotalPages
      : currentPage;

  const paginatedPosts =
    posts !== undefined
      ? posts
      : sortedPosts.slice(
          (safePage - 1) * POSTS_PER_PAGE,
          safePage * POSTS_PER_PAGE
        );

  // 🔥 REMOVE ANY UNDEFINED POSTS
  const safePosts = paginatedPosts.filter(Boolean);

  const featuredPosts =
    safePage === 1 ? safePosts.slice(0, 2) : [];

  const gridPosts =
    safePage === 1 ? safePosts.slice(2) : safePosts;

  const total =
    totalPages !== undefined
      ? totalPages
      : calculatedTotalPages;

  return (
    <main className="bg-[#f8f9fc] min-h-screen pb-28">

      {/* HERO */}
      <section className="bg-gradient-to-br from-[#1d134c] via-[#2b1f6e] to-[#140d3a] text-white py-28">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold">
            EPS ATM Knowledge Hub
          </h1>
          <p className="text-indigo-200 text-lg mt-6">
            Strategic insights to dominate the ATM franchise business.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 mt-16">

        {/* FEATURED */}
        {safePage === 1 && featuredPosts.length > 0 && (
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            {featuredPosts.map((post) => (
              <article key={post.id} className="bg-white p-8 rounded-3xl shadow-xl">
                <span className="text-xs font-semibold uppercase text-indigo-600">
                  {post.category || "Blog"}
                </span>

                <h2 className="text-2xl font-bold mt-4">
                  <Link href={`/resources/blog/${post.slug}/`}>
                    {post.title}
                  </Link>
                </h2>

                <p className="text-gray-600 mt-4">
                  {post.excerpt}
                </p>
              </article>
            ))}
          </div>
        )}

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {gridPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white p-6 rounded-3xl shadow-sm border"
            >
              <span className="text-xs font-semibold uppercase text-indigo-600">
                {post.category || "Blog"}
              </span>

              <h3 className="font-bold mt-3">
                <Link href={`/resources/blog/${post.slug}/`}>
                  {post.title}
                </Link>
              </h3>

              <p className="text-gray-600 text-sm mt-3">
                {post.excerpt}
              </p>

              <div className="flex items-center gap-4 text-xs text-gray-400 mt-4">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* PAGINATION */}
        {total > 1 && (
          <div className="flex justify-center mt-20">
            <div className="flex gap-2">
              {Array.from({ length: total }).map((_, i) => {
                const pageNumber = i + 1;
                const href =
                  pageNumber === 1
                    ? "/resources/blog/"
                    : `/resources/blog/page/${pageNumber}`;

                return (
                  <Link
                    key={pageNumber}
                    href={href}
                    className={`px-4 py-2 rounded-full ${
                      pageNumber === safePage
                        ? "bg-[#1d134c] text-white"
                        : "bg-white border"
                    }`}
                  >
                    {pageNumber}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}