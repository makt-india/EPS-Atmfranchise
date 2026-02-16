import { blogPosts } from "@/resources/blog/data";

export default function sitemap() {
  const baseUrl = "https://epsatmfranchise.com";

  const now = new Date().toISOString();
  const staticDate = "2026-01-01"; // change when static pages are edited

  /* =========================
     1️⃣ HOMEPAGE
  ========================= */
  const homeRoute = [
    {
      url: `${baseUrl}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];

  /* =========================
     2️⃣ CORE PAGES
  ========================= */
  const corePages = [
    "/about-us",
    "/atm-franchise",
    "/cost-requirements",
    "/apply-now",
    "/resources/blog",
    "/resources/faqs",
    "/privacy-policy",
    "/terms-and-conditions",
    "/disclaimer",
  ];

  const coreRoutes = corePages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: staticDate,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  /* =========================
     3️⃣ BLOG PAGES (DYNAMIC)
  ========================= */
  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/resources/blog/${post.slug}`,
    lastModified: post.updatedAt || staticDate,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  /* =========================
     4️⃣ LOCATION PAGES
  ========================= */
  const locationSlugs = [
    "uttar-pradesh",
    "bihar",
    "west-bengal",
    "maharashtra",
    "tamil-nadu",
    "kerala",
    "karnataka",
    "gujarat",
  ];

  const locationRoutes = locationSlugs.map((slug) => ({
    url: `${baseUrl}/atm-franchise-in-${slug}`,
    lastModified: staticDate,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  /* =========================
     RETURN ALL ROUTES
  ========================= */
  return [
    ...homeRoute,
    ...coreRoutes,
    ...blogRoutes,
    ...locationRoutes,
  ];
}
