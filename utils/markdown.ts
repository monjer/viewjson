import { compileMDX } from 'next-mdx-remote/rsc'
import path from 'path'
import fsp from 'fs/promises'
import remarkGfm from "remark-gfm";
import rehypePrism from "rehype-prism-plus";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import rehypeCodeTitles from "rehype-code-titles";

const DOC_PATH = path.join(process.cwd(), "/contents/docs");

async function isFileExists(filePath: string) {
  try {
    await fsp.access(filePath);
    return true;
  } catch (err) {
    return false
  }
}

// can be used for other pages like blogs, Guides etc
async function parseMdx<Frontmatter>(rawMdx: string) {
  return await compileMDX<Frontmatter>({
    source: rawMdx,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        rehypePlugins: [
          rehypeCodeTitles,
          rehypePrism,
          rehypeSlug,
          rehypeAutolinkHeadings,
        ],
        remarkPlugins: [remarkGfm],
      },
    },
  });
}

async function getDocsContentPath(slug: string) {
  const exist = await isFileExists(path.join(DOC_PATH, `${slug}.mdx`));
  if (exist) {
    return path.join(DOC_PATH, `${slug}.mdx`)
  } else {
    return path.join(DOC_PATH, `${slug}/index.mdx`);
  }
}

function sluggify(text: string) {
  const slug = text.toLowerCase().replace(/\s+/g, "-").replace(/\./g, '');
  return slug;
  // return slug.replace(/[^a-z0-9-]/g, "");
}

export async function getDocTocs(slug: string) {
  const markdownContent = await getDocContent(slug);
  const headingsRegex = /^(#{2,4})\s(.+)$/gm;
  let match;
  const extractedHeadings = [];
  while ((match = headingsRegex.exec(markdownContent)) !== null) {
    const headingLevel = match[1].length;
    const headingText = match[2].trim();
    const slug = sluggify(headingText);
    extractedHeadings.push({
      level: headingLevel,
      title: headingText,
      href: `#${slug.toLowerCase()}`,
    });
  }
  return extractedHeadings;
}

export type BaseMdxFrontmatter = {
  title: string;
  description: string;
};

async function getDocContent(slug: string) {
  const contentPath = await getDocsContentPath(slug);
  const markdownContent = await fsp.readFile(contentPath, "utf-8");
  return markdownContent
}
export async function getDocsForSlug(slug: string) {
  try {
    const markdownContent = await getDocContent(slug);
    return await parseMdx<BaseMdxFrontmatter>(markdownContent);
  } catch (err) {
    console.log(err);
  }
}