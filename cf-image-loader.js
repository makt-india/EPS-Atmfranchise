export default function cloudflareLoader({ src, width, quality }) {
  const params = [`width=${width}`, `format=auto`];
  if (quality) {
    params.push(`quality=${quality}`);
  }
  const paramsString = params.join(',');
  
  // If we are developing locally, DO NOT use Cloudflare's image proxy
  // But we MUST include the width in the URL to satisfy Next.js loader constraints
  const isLocal = process.env.NODE_ENV === 'development' || (typeof window !== 'undefined' && window.location.hostname === 'localhost');
  if (isLocal) {
    return `${src}?w=${width}&q=${quality || 75}`;
  }

  return `/cdn-cgi/image/${paramsString}${src}`;
}
