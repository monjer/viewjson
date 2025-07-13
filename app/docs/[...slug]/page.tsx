import React from "react";
import { getDocsForSlug, getDocTocs } from "@/utils/markdown";
import DocToc from "@/slots/DocToc";
import docRoutes from "@/config/docSidebar";
import Article from "@/components/Article";
interface PageProps {
  params: { slug: string[] };
}

export default async function DocPage({ params }) {
  const { slug = [] } = await params;
  const docPath = slug.join("/");
  const docInfo = await getDocsForSlug(docPath);
  const tocs = await getDocTocs(docPath);
  return (
    <>
      <Article className={'grow-1 px-2 py-4 '}>{docInfo?.content}</Article>
      <DocToc dataSource={tocs} className="grow-0	shrink-0 hidden" />
    </>
  );
}
export async function generateMetadata({ params }: PageProps) {
  const { slug = [] } = await params;
  const pathName = slug.join("/");
  const res = await getDocsForSlug(pathName);
  if (!res) return null;
  const { frontmatter } = res;
  return {
    title: frontmatter.title,
    description: frontmatter.description,
  };
}

export function generateStaticParams() {
  return docRoutes.map((item) => ({
    slug: item.href.split("/").slice(2),
  }));
}