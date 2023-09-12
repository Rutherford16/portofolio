'use client'

import Link from "next/link";
import { useState, useEffect } from "react";
import { marked } from "marked";
import DOMPurify from "dompurify";
import posts from "@/app/json/posts.json";

// export async function generateStaticParams() {
//     return [{ id: '1' }, { id: '2' }, { id: '3' }, { id: '4' }]
// }

export async function generateStaticParams() {
    return posts.posts.map((p, key) => ({
        id: key.toString(),
    }))
}

export default function Post({ params }) {
    const post = posts.posts[params.id] || {};
    console.log(post);

    return (
        <>
            {Object.keys(post).length != 0 ? (
                <div className="w-full border rounded p-4">
                    <div className="flex flex-row justify-end sticky top-0 bg-background p-2 mb-2">
                        <Link href='/' className="border rounded p-2 hover:underline hover:opacity-90">Kembali</Link>
                    </div>
                    <h1 className="text-2xl text-center font-bold">{post.judul}</h1>
                    <h5 className="text-xs text-center">Dibuat pada : {post.tanggal}</h5>
                    <hr />
                    <article className="indent-8 text-justify w-full max-w-none prose mt-4 prose-blockquote:text-primary prose-strong:text-primary prose-headings:text-primary prose-code:text-red-400 prose-a:no-underline prose-a:text-blue-700 hover:prose-a:opacity-80" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(marked.parse(post.isi)) }} />
                </div>
            ) : (
                <div className="w-full p-5">
                    <h1 className="text-xl text-center">Post yang anda tuju tidak dapat ditemukan.</h1>
                    <Link href='/' className="text-blue-600 text-xl text-center inline-block w-full hover:underline hover:opacity-90">Kembali ke Beranda</Link>
                </div>
            )}
        </>
    )
}