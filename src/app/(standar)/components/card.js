import Link from "next/link"

export default function Card({judul, dibuatKapan, children, href}) {
    return (
        <div className="first:mt-0 mt-4 w-full border rounded p-4 hover:shadow-secondary hover:shadow-md">
            <h1 className="text-2xl font-semibold">{judul}</h1>
            <h5 className="text-xs">Dibuat pada : {dibuatKapan}</h5>
            <hr />
            <p className="indent-8 text-justify my-3">
                {children}
            </p>
            <hr />
            <div className="flex flex-row justify-end pt-3">
                <Link href={href} className="hover:underline hover:opacity-90">Selengkapnya</Link>
            </div>
        </div>
    )
}