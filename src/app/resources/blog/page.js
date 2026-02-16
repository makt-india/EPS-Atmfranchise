import Link from "next/link";
import { blogPosts } from "./data";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export const metadata = {
  title: "EPS ATM Blog | ATM Franchise Insights & Guides",
  description:
    "Expert insights on ATM franchise cost, profit, RBI updates, ROI analysis, and white label ATM strategies for 2026.",
};

const POSTS_PER_PAGE = 9;

export default function Blog({
  posts,
  currentPage = 1,
  totalPages,
}) {
  const sortedPosts = [...blogPosts].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  const paginatedPosts =
    posts !== undefined
      ? posts
      : sortedPosts.slice(
          (currentPage - 1) * POSTS_PER_PAGE,
          currentPage * POSTS_PER_PAGE
        );

  const total =
    totalPages !== undefined
      ? totalPages
      : Math.ceil(sortedPosts.length / POSTS_PER_PAGE);

  const featuredPosts =
    currentPage === 1 ? paginatedPosts.slice(0, 2) : [];

  const gridPosts =
    currentPage === 1 ? paginatedPosts.slice(2) : paginatedPosts;

  return (
    <main className="bg-[#f8f9fc] min-h-screen pb-28">

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1d134c] via-[#2b1f6e] to-[#140d3a] text-white py-28">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-500/20 blur-3xl rounded-full"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-500/20 blur-3xl rounded-full"></div>

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <span className="uppercase text-sm tracking-widest text-indigo-300">
            ATM Business Intelligence
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold mt-6 leading-tight">
            EPS ATM Knowledge Hub
          </h1>

          <p className="text-indigo-200 text-lg md:text-xl mt-6 max-w-3xl mx-auto">
            Strategic insights, ROI breakdowns, and deep research to help you
            dominate the ATM franchise business.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 -mt-8 relative z-10">

        {/* FEATURED */}
        {currentPage === 1 && (
          <section className="mb-24">
            <div className="flex items-end justify-between mb-10">
              <div>
                <span className="text-sm font-semibold uppercase text-indigo-100">
                  Trending Now
                </span>
                <h2 className="text-3xl font-bold text-[#1d134c] mt-2">
                  Latest Insights
                </h2>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {featuredPosts.map((post) => (
                <article
                  key={post.id}
                  className="group relative rounded-3xl overflow-hidden bg-gradient-to-br from-white to-indigo-50 shadow-xl hover:shadow-2xl transition duration-500 p-10"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-200/30 blur-2xl rounded-full"></div>

                  <span className="text-xs font-semibold uppercase tracking-wide text-indigo-600">
                    {post.category}
                  </span>

                  <h2 className="text-2xl md:text-3xl font-bold text-[#1d134c] mt-4 mb-5 leading-snug group-hover:text-indigo-600 transition">
                    <Link href={`/resources/blog/${post.slug}/`}>
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-gray-600 mb-8 text-base">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-6 text-sm text-gray-400">
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </span>
                  </div>

                  <Link
                    href={`/resources/blog/${post.slug}/`}
                    className="inline-flex items-center gap-2 mt-8 font-semibold text-indigo-600 group-hover:text-indigo-800"
                  >
                    Read Full Article <ArrowRight className="w-4 h-4" />
                  </Link>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* GRID */}
        <section>
          {currentPage === 1 && (
            <div className="mb-12">
              <span className="text-sm font-semibold uppercase text-indigo-600">
                Explore More
              </span>
              <h2 className="text-3xl font-bold text-[#1d134c] mt-2">
                Business Guides & Strategy
              </h2>
            </div>
          )}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {gridPosts.map((post) => (
              <article
                key={post.id}
                className="group bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
              >
                <span className="text-xs font-semibold uppercase text-indigo-600 mb-3">
                  {post.category}
                </span>

                <h3 className="text-lg font-bold text-[#1d134c] mb-4 leading-snug group-hover:text-indigo-600 transition">
                  <Link href={`/resources/blog/${post.slug}/`}>
                    {post.title}
                  </Link>
                </h3>

                <p className="text-gray-600 text-sm mb-6 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center gap-4 text-xs text-gray-400 mt-auto">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </span>
                </div>

                <Link
                  href={`/resources/blog/${post.slug}/`}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 group-hover:text-indigo-800"
                >
                  Read More <ArrowRight className="w-4 h-4" />
                </Link>
              </article>
            ))}
          </div>
        </section>

        {/* PAGINATION */}
        {total > 1 && (
          <div className="flex justify-center mt-24">
            <div className="flex items-center gap-3 bg-white shadow-lg rounded-full px-6 py-3 border border-gray-100">
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
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
                      pageNumber === currentPage
                        ? "bg-[#1d134c] text-white"
                        : "text-gray-600 hover:bg-gray-100"
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
