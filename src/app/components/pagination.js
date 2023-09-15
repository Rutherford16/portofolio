import Link from "next/link";

export default function Pagination({ data }) {
    return (
        <div className="flex flex-row justify-center pr-3 mt-3">
            {data.map((ini) =>
                <Link key={ini} href={'/'+ini} className="p-1 hover:opacity-70 first:bg-tertiary">{ini}</Link>
            )}
        </div>
    )
}