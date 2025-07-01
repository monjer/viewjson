import React from "react";
import { getDocsForSlug, getDocTocs } from "@/utils/markdown";
import DocToc from "@/slots/DocToc";
import docRoutes from "@/config/docSidebar";

interface PageProps {
  params: { slug: string[] };
}
function CodeStyle(props) {
  return <div className="prose-code:font-code prose-pre:border prose-pre:border-gray-500 prose=pre:whitespace-break-spaces	 dark:prose-pre:border-gray-700">{props.children}</div>;
}

export default async function DocPage({ params }) {
  const { slug = [] } = await params;
  const docPath = slug.join("/");
  const docInfo = await getDocsForSlug(docPath);
  const tocs = await getDocTocs(docPath);
  return (
    <>
      <article className="prose prose-zinc grow-1 px-2 py-4 text-sm max-w-[100%] dark:prose-invert overflow-auto"><CodeStyle>{docInfo?.content}</CodeStyle></article>
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