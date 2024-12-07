import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: ['https://viewjson.online/sitemap.xml', 'https://viewjson.online/docs/sitemap.xml'],
  };
}