import React from "react";

export default function DocPage({ params }: { params: { slug: string } }) {
  const { slug = [] } = params;

  return <div>Page</div>;
}

// export async function generateStaticParams() {
//   const posts = await fetch('https://.../posts').then((res) => res.json())

//   return posts.map((post) => ({
//     slug: post.slug,
//   }))
// }