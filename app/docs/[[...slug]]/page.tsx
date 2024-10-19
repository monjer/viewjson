import React from "react";
import { getDocsForSlug } from "@/utils/markdown";

export default async function DocPage({ params }: { params: { slug: string[] } }) {
  // const { slug = [] } = params;
  // const docPath = slug.join("/");
  // const docInfo = await getDocsForSlug(docPath);
  // console.log(docInfo)
  return <div>Page</div>;
}

// export async function generateStaticParams() {
//   const posts = await fetch('https://.../posts').then((res) => res.json())

//   return posts.map((post) => ({
//     slug: post.slug,
//   }))
// }