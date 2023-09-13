import Link from "next/link";
import { marked } from "marked";
import posts from "@/app/json/posts.json";
import NavBarPost from "@/app/components/navbarpost";

export async function generateStaticParams() {
    return posts.map((p) => ({
        id: p.id.toString(),
    }))
}

export default function Post({ params: { id } }) {
    const post = posts.find(p => p.id.toString() === id) || {};

    return (
        <>
            {Object.keys(post).length != 0 ? (
                <div className="w-full border rounded p-4">
                    <NavBarPost/>
                    <h1 className="text-4xl text-center font-bold mb-2">{post.judul}</h1>
                    <h5 className="text-xs text-center">Dibuat pada : {post.tanggal}</h5>
                    <hr />
                    <article className="w-full max-w-none prose mt-4 prose-blockquote:text-primary prose-blockquote:bg-secondary prose-blockquote:p-1 prose-blockquote:pr-4 prose-strong:text-primary prose-headings:text-primary prose-code:text-red-400 prose-a:no-underline prose-a:text-blue-700 hover:prose-a:opacity-80" dangerouslySetInnerHTML={{ __html: marked.parse(post.isi) }} />
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