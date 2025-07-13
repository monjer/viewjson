import { compileMDX } from 'next-mdx-remote/rsc';
import path from 'path';
import fsp from 'fs/promises';
import remarkGfm from "remark-gfm";
import rehypePrism from "rehype-prism-plus";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import rehypeCodeTitles from "rehype-code-titles";
import GithubSlugger from 'github-slugger';
import Pre from '@/components/Markdown/Pre';
import { visit } from "unist-util-visit";

const DOC_PATH = path.join(process.cwd(), "/contents/docs");

async function isFileExists(filePath: string) {
  try {
    await fsp.access(filePath);
    return true;

  } catch (err) {
    return false;
  }
}


// for copying the code
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const preProcess = () => (tree: any) => {
  visit(tree, (node) => {
    if (node?.type === "element" && node?.tagName === "pre") {
      const [codeEl] = node.children;
      if (codeEl.tagName !== "code") return;
      node.raw = codeEl.children?.[0].value;
    }
  });
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const postProcess = () => (tree: any) => {
  visit(tree, "element", (node) => {
    if (node?.type === "element" && node?.tagName === "pre") {
      node.properties["raw"] = node.raw;
    }
  });
};


// can be used for other pages like blogs, Guides etc
async function parseMdx<Frontmatter>(rawMdx: string) {
  return await compileMDX<Frontmatter>({
    source: rawMdx,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        rehypePlugins: [
          preProcess,
          rehypeCodeTitles,
          rehypePrism,
          rehypeSlug,
          rehypeAutolinkHeadings,
          postProcess,
        ],
        remarkPlugins: [remarkGfm],
      },
    },
    components: {
      pre: Pre,
    },
  });
}

async function getDocsContentPath(slug: string) {
  const exist = await isFileExists(path.join(DOC_PATH, `${slug}.mdx`));
  if (exist) {
    return path.join(DOC_PATH, `${slug}.mdx`);
  } else {
    return path.join(DOC_PATH, `${slug}/index.mdx`);
  }
}

function sluggify(text: string) {
  const slugger = new GithubSlugger();
  return slugger.slug(text);
  // const slug = text.toLowerCase().replace(/\s+/g, "-").replace(/\./g, '');
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

export interface BaseMdxFrontmatter {
  title: string;
  description: string;
}

async function getDocContent(slug: string) {
  const contentPath = await getDocsContentPath(slug);
  const markdownContent = await fsp.readFile(contentPath, "utf-8");
  return markdownContent;
}
export async function getDocsForSlug(slug: string) {
  try {
    const markdownContent = await getDocContent(slug);
    return await parseMdx<BaseMdxFrontmatter>(markdownContent);
  } catch (err) {
    console.log(err);
  }
}