import { blogPosts } from "../../data";
import Blog from "../../page";

const POSTS_PER_PAGE = 9;

export async function generateStaticParams() {
  const sorted = [...blogPosts].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  const totalPages = Math.ceil(sorted.length / POSTS_PER_PAGE);

  return Array.from({ length: totalPages - 1 }).map((_, i) => ({
    page: String(i + 2),
  }));
}

export default async function BlogPagination({ params }) {
  const resolvedParams = await params;
  const page = Number(resolvedParams.page);

  const sorted = [...blogPosts].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  const start = (page - 1) * POSTS_PER_PAGE;
  const end = start + POSTS_PER_PAGE;

  const paginatedPosts = sorted.slice(start, end);
  const totalPages = Math.ceil(sorted.length / POSTS_PER_PAGE);

  return (
    <Blog
      posts={paginatedPosts}
      currentPage={page}
      totalPages={totalPages}
    />
  );
}
