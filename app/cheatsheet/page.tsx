import React from "react";
import { getDocsForSlug } from "@/utils/markdown";
import Article from "@/components/Article";
import "./index.scss";


export default async function CheatSheetsPage() {
  const docPath = `cheatsheet`;
  const docInfo = await getDocsForSlug(docPath);
  return (
    <div className="cheatsheet-page">
      <Article className={'grow-0 shrink-0 text-center mt-10'}>
        <h1>JSON CheatSheet</h1>
        <p>This is a quick reference cheat sheet for leran and how to use json.</p>
      </Article>
      <Article className={'grow-1 px-2 py-2 '}>{docInfo?.content}</Article>
    </div>
  );
}
export async function generateMetadata() {
  const res = await getDocsForSlug('/cheatsheet');
  if (!res) return null;
  const { frontmatter } = res;
  return {
    title: frontmatter.title,
    description: frontmatter.description,
  };
}

export function generateStaticParams() {
  return {
    title: "json cheatsheet",
    href: "/cheatsheet",
    file: "docs/cheatsheet.mdx",
    slug: ['cheatsheet'],
  };
}
