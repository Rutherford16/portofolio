'use client'

import Link from "next/link";
import { usePathname } from 'next/navigation';


export default function NavLink({ children, href }) {
    const router = '/' + (Number.isInteger(parseInt(usePathname().split('/')[1])) ? '' : usePathname().split('/')[1]);
    const newhref = '/' +  href.split('/')[1];

    return (
        <div className={'-skew-x-12 w-fit transition-all ' + (router === newhref ? 'bg-primary -translate-y-1 font-bold mx-1' : 'border hover:bg-secondary hover:-translate-y-1')}>
            {router === newhref ? (
                <span className={'p-2 block skew-x-12 cursor-default ' + (router === newhref ? 'text-background' : '')}>{children}</span>
            ) : (
                <Link href={href} className={'p-2 block skew-x-12 ' + (router === newhref ? 'text-background' : '')}>{children}</Link>
            )}
        </div>
    )
}