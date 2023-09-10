'use client'

import Link from "next/link"
import { useState, useEffect } from "react";

export default function Post({ params }) {
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
                setPost(data.posts[params.id] || {});
                console.log(data.posts[params.id]);
            });
    };

    useEffect(() => {
        getPost();
    }, []);

    return (
        <>
            {Object.keys(post).length != 0 ? (
                <div className="first:mt-0 mt-4 w-full border rounded p-4 hover:shadow-xl">
                    <Link href='/' className="border rounded p-2 hover:underline hover:opacity-90">Kembali</Link>
                    <h1 className="text-2xl text-center">{post.judul}</h1>
                    <h5 className="text-xs text-center">Dibuat pada : {post.tanggal}</h5>
                    <hr />
                    <p className="indent-8 text-justify my-5 mx-3">
                        {post.isi}
                        <img src="/images/gambar1.png" alt="Contoh gambar" />
                    </p>
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