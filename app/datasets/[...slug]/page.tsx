import React from "react";
import { getDocsForSlug, getDocTocs } from "@/utils/markdown";
import DocToc from "@/slots/DocToc";
import datasetRoutes from "@/config/dataset";
import Article from "@/components/Article";
import Flex from "@/components/Flex";
interface PageProps {
  params: { slug: string[] };
}

export default async function DatasetPage({ params }) {
  const { slug = [] } = await params;
  const docPath = `datasets/${slug.join("/")}`;
  const docInfo = await getDocsForSlug(docPath);
  const tocs = await getDocTocs(docPath);
  return (
    <Flex>
      <Article className={'grow-1 px-2 py-4 '}>{docInfo?.content}</Article>
      <DocToc dataSource={tocs} className="grow-0	shrink-0 hidden" />
    </Flex>
  );
}
export async function generateMetadata({ params }: PageProps) {
  const { slug = [] } = await params;
  const docPath = `datasets/${slug.join("/")}`;
  const res = await getDocsForSlug(docPath);
  if (!res) return null;
  const { frontmatter } = res;
  return {
    title: frontmatter.title,
    description: frontmatter.description,
  };
}

export function generateStaticParams() {
  return datasetRoutes.map((item) => ({
    slug: item.href.split("/").slice(2),
  }));
}