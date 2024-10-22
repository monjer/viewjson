import React from "react";
import { getDocsForSlug, getDocTocs } from "@/utils/markdown";
import DocToc from "@/slots/DocToc";

export default async function DocPage({ params }: { params: { slug: string[] } }) {
  const { slug = [] } = params;
  const docPath = slug.join("/");
  const docInfo = await getDocsForSlug(docPath);
  const tocs = await getDocTocs(docPath);
  console.log(docInfo)
  return (
    <>
      <div className="prose max-w-none  dark:prose-invert">{docInfo.content}</div>
      <DocToc dataSource={tocs} />
    </>
  );
}

// export async function generateStaticParams() {
//   const posts = await fetch('https://.../posts').then((res) => res.json())

//   return posts.map((post) => ({
//     slug: post.slug,
//   }))
// }