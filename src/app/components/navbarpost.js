'use client'

import Link from "next/link";
import { useEffect, useRef } from "react";

export default function NavBarPost() {
    const stickyRef = useRef(null);
    const buttonScrollRef = useRef(null);
    const scrollKeatas = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([e]) => buttonScrollRef.current && buttonScrollRef.current.classList.toggle('opacity-100', e.intersectionRatio < 1),
            { threshold: [1] }
        );
        observer.observe(stickyRef.current);
        return () => observer.disconnect();
    }, [stickyRef])

    return (
        <div ref={stickyRef} className="flex flex-row justify-between sticky p-2 mb-2 rounded-b backdrop-blur-md" style={{ top: "-1px" }}>
            <div className="w-16" />
            <button ref={buttonScrollRef} onClick={scrollKeatas} className="hover:opacity-80 opacity-0 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 15.707a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414 0zm0-6a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 5.414 5.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                </svg>
            </button>
            <Link href='/' className="border rounded p-2 hover:underline hover:opacity-90">Kembali</Link>
        </div>
    )
}