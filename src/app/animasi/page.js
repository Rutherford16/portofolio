'use client'

import { useState } from "react"
import Modal from "../components/modal"
import Blackadders from "./material/blackadders"
import Marlboro from "./material/marlboro"
import Bankaltimtara from "./material/bankaltimtara"
import Honda from "./material/honda"

export default function Animasi() {
    const [dialog, setDialog] = useState(false);
    const [NamaAnimasi, setNamaAnimasi] = useState('Marlboro');

    const openDialog = (E) => {
        setNamaAnimasi(E);
        setDialog(true);
    };
    const closeDialog = () => {
        setDialog(false);
    };

    return (
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 p-3">
            <button onClick={(e) => openDialog(e.target.value)} className="bg-tertiary hover:opacity-70 p-3 rounded" value='Blackadders'>Blackadders</button>
            <button onClick={(e) => openDialog(e.target.value)} className="bg-tertiary hover:opacity-70 p-3 rounded" value='Marlboro'>Marlboro</button>
            <button onClick={(e) => openDialog(e.target.value)} className="bg-tertiary hover:opacity-70 p-3 rounded" value='Bankaltimtara'>Bankaltimtara</button>
            <button onClick={(e) => openDialog(e.target.value)} className="bg-tertiary hover:opacity-70 p-3 rounded" value='Honda'>Honda</button>
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
        </div>
    )
}