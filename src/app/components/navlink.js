import Link from "next/link";
import { usePathname } from 'next/navigation';


export default function NavLink({ children, href }) {
    const router = usePathname();

    return (
        <>
            <div className={'-skew-x-12 w-fit ' + (router === href ? 'bg-primary' : 'border')}>
                {router === href ? (
                    <span className={'p-2 block skew-x-12 cursor-default ' + (router === href ? 'text-background' : '')}>{children}</span>
                    ) : (
                    <Link href={href} className={'p-2 block skew-x-12 ' + (router === href ? 'text-background' : '')}>{children}</Link>
                )}
            </div>
        </>
    )
}