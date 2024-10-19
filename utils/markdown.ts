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

export type BaseMdxFrontmatter = {
  title: string;
  description: string;
};

export async function getDocsForSlug(slug: string) {
  try {
    const contentPath = await getDocsContentPath(slug);
    const rawMdx = await fsp.readFile(contentPath, "utf-8");
    return await parseMdx<BaseMdxFrontmatter>(rawMdx);
  } catch (err) {
    console.log(err);
  }
}