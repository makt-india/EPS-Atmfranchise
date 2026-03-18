import { blogPosts } from "../../data";
import Blog from "../../page";
import { notFound } from "next/navigation";

const POSTS_PER_PAGE = 9;

/* --------------------------
   Generate Static Params
---------------------------*/
export async function generateStaticParams() {
  // 🔥 Remove undefined or malformed posts
  const validPosts = blogPosts.filter(
    (post) => post && post.slug
  );

  const totalPages = Math.ceil(
    validPosts.length / POSTS_PER_PAGE
  );

  // If only 1 page exists, no pagination routes needed
  if (totalPages <= 1) return [];

  return Array.from({ length: totalPages - 1 }).map(
    (_, i) => ({
      page: String(i + 2),
    })
  );
}

/* --------------------------
   Pagination Page Component
---------------------------*/
export default async function BlogPagination({
  params,
}) {
  // ✅ Required in Next 15
  const resolvedParams = await params;

  const page = Number(resolvedParams.page);

  // 🔥 Remove bad entries before sorting
  const validPosts = blogPosts.filter(
    (post) => post && post.slug
  );

  const sorted = [...validPosts].sort(
    (a, b) =>
      new Date(b.date).getTime() -
      new Date(a.date).getTime()
  );

  const totalPages = Math.ceil(
    sorted.length / POSTS_PER_PAGE
  );

  // 🔥 Validate page number
  if (
    !page ||
    isNaN(page) ||
    page < 2 ||
    page > totalPages
  ) {
    notFound();
  }

  const start = (page - 1) * POSTS_PER_PAGE;
  const end = start + POSTS_PER_PAGE;

  const paginatedPosts = sorted.slice(start, end);

  // 🔥 Extra safety check
  if (!paginatedPosts.length) {
    notFound();
  }

  return (
    <Blog
      posts={paginatedPosts}
      currentPage={page}
      totalPages={totalPages}
    />
  );
}