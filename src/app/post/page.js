import Link from "next/link"

export default function Post() {
    return (
        <>
            <div className="first:mt-0 mt-4 w-full border rounded p-4 hover:shadow-xl">
                    <Link href='/' className="hover:underline hover:opacity-90">Kembali</Link>
                <h1 className="text-2xl text-center">Ini Judul</h1>
                <h5 className="text-xs text-center">Dibuat pada : 7/6/1998</h5>
                <hr />
                <p className="indent-8 text-justify my-5 mx-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, amet dolorum. Reprehenderit deleniti pariatur debitis, sit aspernatur itaque. Quo et perspiciatis obcaecati dolore adipisci voluptas laboriosam eaque a nam accusantium!
                    Maxime optio libero obcaecati voluptas eaque veritatis consequuntur officiis ratione numquam labore veniam magni, aspernatur quasi itaque nisi quibusdam? Quo, suscipit. Laudantium sequi enim voluptatibus, animi impedit nostrum! Delectus, nisi!
                    Sit vitae praesentium ea fugiat! Molestias fugit, delectus animi perspiciatis natus aliquid quia placeat, quos, quae doloremque saepe id rem. Id accusamus ex dicta. Quisquam voluptas doloribus temporibus reiciendis illum?
                    <img src="/images/gambar1.png" alt="Contoh gambar" />
                    Minus suscipit aspernatur eveniet officiis corporis iusto nihil modi quaerat minima optio! Assumenda blanditiis aliquid animi voluptatibus error aut. Fugit provident molestiae dolorem natus rerum nesciunt in nostrum doloribus laudantium?
                    Incidunt quisquam ipsum quidem ipsa adipisci illo eius hic dolorem consequatur ducimus aut earum officiis optio tenetur debitis ea perspiciatis facere rem, dolore vel vero! Asperiores officiis optio vitae nulla!
                    Dignissimos itaque quod veritatis maxime iure odit earum delectus cupiditate fuga sunt voluptate velit architecto, voluptatem reiciendis inventore corrupti nisi! Ullam quo autem, iusto obcaecati similique sequi iure quam deleniti!
                    Iure architecto commodi pariatur, non quos doloribus quasi eius ipsa, voluptas esse quia. Similique laboriosam quidem cumque ut quis iusto? Sint excepturi et dicta voluptate delectus non mollitia, accusantium nobis?
                </p>
            </div>
        </>
    )
}