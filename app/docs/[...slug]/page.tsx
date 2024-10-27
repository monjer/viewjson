import React from "react";
import { getDocsForSlug, getDocTocs } from "@/utils/markdown";
import DocToc from "@/slots/DocToc";

function CodeStyle(props) {
  return <div className="prose-code:font-code prose-pre:border prose-pre:border-gray-500 dark:prose-pre:border-gray-700">{props.children}</div>
}

export default async function DocPage({ params }: { params: { slug: string[] } }) {
  const { slug = [] } = params;
  const docPath = slug.join("/");
  const docInfo = await getDocsForSlug(docPath);
  const tocs = await getDocTocs(docPath);
  return (
    <>
      <div className="prose prose-zinc max-w-none p-[4rem] dark:prose-invert"><CodeStyle>{docInfo?.content}</CodeStyle></div>
      <DocToc dataSource={tocs} className="grow-0	shrink-0 hidden" />
    </>
  );
}

// export async function generateStaticParams() {
//   const posts = await fetch('https://.../posts').then((res) => res.json())

//   return posts.map((post) => ({
//     slug: post.slug,
//   }))
// }
