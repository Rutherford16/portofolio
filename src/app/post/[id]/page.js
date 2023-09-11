'use client'

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { marked } from "marked";
import DOMPurify from "dompurify";

export function generateStaticParams() {
    return ['1', '2', '3']
}

// Return a list of `params` to populate the [slug] dynamic segment
// export async function generateStaticParams() {
//     const posts = await fetch('http://localhost:3000/post').then((res) => res.json())

//     return posts.map((post) => ({
//         id: post.id,
//     }))
// }

export default function Post({ params }) {
    const { id } = params
    const [post, setPost] = useState({})
    const getPost = () => {
        fetch('/json/posts.json'
            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then(function (response) {
                console.log(response);
                return response.json();
            })
            .then(function (data) {
                console.log(data);
                setPost(data.posts[id] || {});
                console.log(id);
                console.log(data.posts[id]);
            });
    };

    useEffect(() => {
        getPost();
    }, []);

    return (
        <>
            {Object.keys(post).length != 0 ? (
                <div className="w-full border rounded p-4">
                    <div className="flex flex-row justify-end">
                        <Link href='/' className="border rounded p-2 hover:underline hover:opacity-90">Kembali</Link>
                    </div>
                    <h1 className="text-2xl text-center">{post.judul}</h1>
                    <h5 className="text-xs text-center">Dibuat pada : {post.tanggal}</h5>
                    <hr />
                    <div className="my-5 mx-3">
                        <div className="indent-8 text-justify reset-tailwind" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(marked.parse(post.isi)) }} />
                        {/* <img src="/images/gambar1.png" alt="Contoh gambar" /> */}
                        <Image src="/images/posts/gambar1.png" alt="Contoh gambar" className="w-auto h-auto" width={828} height={828} />
                    </div>
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