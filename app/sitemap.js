// Configure NEXT_PUBLIC_SITE_URL when the production domain is known.
/** @returns {import('next').MetadataRoute.Sitemap} */
export default function sitemap() {
  const base = process.env.NEXT_PUBLIC_SITE_URL;
  return base ? [
    { url: base, lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: `${base.replace(/\/$/, '')}/leetcode`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base.replace(/\/$/, '')}/connect`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
  ] : [];
}
