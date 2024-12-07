import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://viewjson.com',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    }, {
      url: 'https://viewjson.com/convert/json-to-xml',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
    }, {
      url: 'https://viewjson.com/convert/json-to-yaml',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
    }, {
      url: 'https://viewjson.com/convert/json-to-cvs',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
    }, {
      url: 'https://viewjson.com/convert/json-to-base64',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
    }, {
      url: 'https://viewjson.com/convert/json-to-html',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
    }, {
      url: 'https://viewjson.com/diff',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
    }, {
      url: 'https://viewjson.com/validate',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
  ];
}