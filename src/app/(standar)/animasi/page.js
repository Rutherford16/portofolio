'use client'

import { useEffect, useRef, useState } from "react"
import Modal from "../components/modal"
import Blackadders from "./material/blackadders"
import Marlboro from "./material/marlboro"
import Bankaltimtara from "./material/bankaltimtara"
import Honda from "./material/honda"
import Link from "next/link"
import anime from "animejs"

export default function Animasi() {
    const [dialog, setDialog] = useState(false);
    const [NamaAnimasi, setNamaAnimasi] = useState('Marlboro');

    const animationRef = useRef(null);

    const openDialog = (E) => {
        setNamaAnimasi(E);
        setDialog(true);
    };

    const closeDialog = () => {
        setDialog(false);
    };

    const animasi = () => {
        animationRef.current =
            anime({
                targets: '.lines path',
                strokeDashoffset: [anime.setDashoffset, 0],
                easing: 'easeInOutSine',
                duration: 1500,
                delay: function (el, i) { return i * 250 },
                direction: 'alternate',
                loop: true
            });
    }

    useEffect(() => {
        animasi();
    }, []);

    return (
        <>
            <div className="w-full flex flex-col justify-center mb-4">
                <div className="flex justify-center pr-60 text-xs">Powered by</div>
                <Link href='https://animejs.com/' className="w-auto h-16 text-purple-500">
                    <svg viewBox="0 0 280 100" className="w-full h-full">
                        <g fill="none" fillRule="evenodd" stroke="currentColor" strokeWidth="1" className="lines">
                            <path className="el" d="M58 80V50.12C57.7 41.6 51.14 35 43 35a15 15 0 0 0 0 30h7.5v15H43a30 30 0 1 1 0-60c16.42 0 29.5 13.23 30 29.89V80H58z" />
                            <path className="el" d="M73 80V20H58v60h15z" />
                            <path className="el" d="M58 80V49.77C58.5 33.23 71.58 20 88 20a30 30 0 0 1 30 30v30h-15V50a15 15 0 0 0-15-15c-8.14 0-14.7 6.6-15 15.12V80H58zm75 0V20h-15v60h15z" />
                            <path className="el" d="M118 80V49.77C118.5 33.23 131.58 20 148 20a30 30 0 0 1 30 30v30h-15V50a15 15 0 0 0-15-15c-8.14 0-14.7 6.6-15 15.12V80h-15zm-7.5-60a7.5 7.5 0 1 1-7.48 8v-1c.25-3.9 3.5-7 7.48-7z" />
                            <path className="el" d="M133 65a15 15 0 0 1-15-15v-7.5h-15V50a30 30 0 0 0 30 30V65zm30 15V49.77C163.5 33.23 176.58 20 193 20a30 30 0 0 1 30 30v30h-15V50a15 15 0 0 0-15-15c-8.14 0-14.7 6.6-15 15.12V80h-15z" />
                            <path className="el" d="M238 65a15 15 0 0 1 0-30c8.1 0 14.63 6.53 15 15h-15v15h30V49.89C267.5 33.23 254.42 20 238 20a30 30 0 0 0 0 60V65z" />
                            <path className="el" d="M260.48 65a7.5 7.5 0 1 1-7.48 8v-1c.26-3.9 3.5-7 7.48-7z" />
                        </g>
                    </svg>
                </Link>
            </div>
            <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 p-3">
                <button onClick={(e) => openDialog(e.target.value)} className="bg-tertiary hover:opacity-70 p-3 rounded" value='Blackadders'>Blackadders</button>
                <button onClick={(e) => openDialog(e.target.value)} className="bg-tertiary hover:opacity-70 p-3 rounded" value='Marlboro'>Marlboro</button>
                <button onClick={(e) => openDialog(e.target.value)} className="bg-tertiary hover:opacity-70 p-3 rounded" value='Bankaltimtara'>Bankaltimtara</button>
                <button onClick={(e) => openDialog(e.target.value)} className="bg-tertiary hover:opacity-70 p-3 rounded" value='Honda'>Honda</button>
            </div>
            <Modal show={dialog} onClose={closeDialog}>
                <div className='text-white text-xl m-3 p-2 bg-secondary rounded flex'>
                    <h1 className='grow'>{NamaAnimasi}</h1>
                    <div className=''>
                        <button className='bg-tertiary hover:opacity-70 px-2 rounded' onClick={closeDialog}>X</button>
                    </div>
                </div>
                <div className='flex justify-center m-5'>
                    {NamaAnimasi === 'Blackadders' && (<Blackadders />)}
                    {NamaAnimasi === 'Marlboro' && (<Marlboro />)}
                    {NamaAnimasi === 'Bankaltimtara' && (<Bankaltimtara />)}
                    {NamaAnimasi === 'Honda' && (<Honda />)}
                </div>
            </Modal >
        </>
    )
}