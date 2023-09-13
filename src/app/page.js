'use client'

import data from "@/app/json/posts.json"
import Card from "./components/card"
import Link from "next/link";

export default function Beranda() {
  // const posts = getSortedPostsData || {};
  const posts = data || {};

  return (
    <>
      <div className="flex flex-row justify-end h-fit w-full">
        <Link href='/texteditor' className="p-2 border rounded hover:opacity-90">Text Editor</Link>
      </div>
      {Array.isArray(posts) && posts.map((post, key) =>
        <Card key={key} judul={post.judul} dibuatKapan={post.tanggal} href={'/posts/post/' + key}>
          {post.slug}
        </Card>
      )}
    </>
  )
}
