import { MetadataRoute } from 'next';
import docRoutes from "@/config/docSidebar";
import fs from 'fs';

const BASE_URL = 'https://viewjson.com';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

  return docRoutes.map((doc) => {
    const stat = fs.statSync(process.cwd() + '/contents/' + doc.file);
    return {
      url: `${BASE_URL}${doc.href}`,
      lastModified: new Date(stat.mtimeMs),
    };
  });
}