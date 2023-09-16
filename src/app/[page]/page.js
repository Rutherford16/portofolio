import data from "@/app/json/posts.json"
import Card from "../components/card"
import Link from "next/link";
import Pagination from "../components/pagination";

export async function generateStaticParams() {
    let page = [];
    for (let i = 1; i <= Math.ceil(data.length / 5); i++) {
        page.push({page: i.toString()});
    }
    return page;
}

export default function Page({ params: { page } }) {
    const offset = (page - 1) * 5;
    const posts = data.slice(offset, offset + 5) || {};
    let link = [];
    for (let i = 1; i <= Math.ceil(data.length / 5); i++) {
        link.push(i);
    }

    return (
        <>
            <div className="sticky top-0 flex flex-row justify-between h-fit w-full backdrop-blur-md p-2">
                <div className='w-3/6 flex flex-row'>
                    <input type="text" name="cari" id="cari" className='w-5/6 p-2 text-black focus:outline-none rounded-s-md border' placeholder='Cari' />
                    <button type="submit" className='p-2 rounded-e-md border hover:bg-primary hover:text-black'>Cari</button>
                </div>
                <Link href='/texteditor' className="p-2 border rounded hover:opacity-90">Text Editor</Link>
            </div>
            {Array.isArray(posts) && posts.map((post, key) =>
                <Card key={key} judul={post.judul} dibuatKapan={post.tanggal} href={'/posts/post/' + (offset+key)}>
                    {post.slug}
                </Card>
            )}
            <Pagination data={link} active={page}></Pagination>
        </>
    )
}