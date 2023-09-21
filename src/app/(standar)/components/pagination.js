import Link from "next/link";

export default function Pagination({ data, active }) {
    return (
        <div className="flex flex-row justify-center pr-3 mt-3">
            {data.map((ini) =>
                active == ini ? (
                    <span key={ini} className="p-1 m-0.5 bg-tertiary scale-110 rounded-sm">{ini}</span>
                ) : (
                    <Link key={ini} href={ini == 1 ? ('/') : ('/' + ini)} className="p-1 m-0.5 hover:opacity-70 hover:bg-secondary">{ini}</Link>
                )
            )}
        </div>
    )
}