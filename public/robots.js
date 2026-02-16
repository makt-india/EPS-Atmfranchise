export default function robots() {
  const baseUrl = "https://epsatmfranchise.com";

  return {
    rules: [
      {
        userAgent: "*",
        disallow: [
          "/api/",
          "/admin/",
          "/private/",
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
