'use client'

import { useEffect, useState } from "react"
import Modal from "./modal"
import Link from "next/link";

export default function Cari() {
    const [dialog, setDialog] = useState(false);
    const [data, setData] = useState({});
    const [hasil, setHasil] = useState([]);

    const openDialog = () => {
        setDialog(true);
    };

    const closeDialog = () => {
        setDialog(false);
        setHasil([]);
    };

    const cariData = (searchQuery, array, objectKey = 'judul') => {
        // Source: https://stackoverflow.com/a/65136399/22542174
        setHasil(array.filter(d => {
            let data = objectKey ? d[objectKey] : d //Incase If It's Array Of Objects.
            let dataWords = typeof data == "string" && data?.split(" ")?.map(b => b && b.toLowerCase().trim()).filter(b => b)
            let searchWords = typeof searchQuery == "string" && searchQuery?.split(" ").map(b => b && b.toLowerCase().trim()).filter(b => b)
            let matchingWords = searchWords.filter(word => dataWords.includes(word))

            return matchingWords.length
        }))
    }

    const getData = () => {
        fetch('/json/posts.json'
        // fetch('https://rutherford16.github.io/json/posts.json'
            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                setData(myJson);
                // setData(myJson.map((p) => (p.judul)));
                console.log(data)
            });
    }
    useEffect(() => {
        getData()
    }, [])

    return (
        <div className='w-3/6 flex flex-row'>
            <button className="flex flex-row w-full justify-center items-center rounded border hover:opacity-80 text-2xl" onClick={() => openDialog()}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
                </svg>
                Cari
            </button>
            <Modal show={dialog} onClose={closeDialog}>
                <div className='text-white text-xl m-3 p-2 bg-secondary rounded flex'>
                    <h1 className='grow'>Cari</h1>
                    <div className=''>
                        <button className='bg-tertiary hover:opacity-70 px-2 rounded' onClick={closeDialog}>X</button>
                    </div>
                </div>
                <div className='m-5'>
                    <input type="text" name="cari" id="cari" placeholder="Kamu cari apa?" className="w-full p-2 rounded" autoFocus onChange={(e) => cariData(e.target.value, data)} />
                    <span className="text-primary text-xs">Source Code for this Search from: <a href="https://stackoverflow.com/a/65136399/22542174" className="text-blue-500 hover:opacity-70" target="_blank">Kashan Haider</a></span>
                    <div className="w-full pt-4 text-primary">
                        <hr className="border-secondary" />
                        <div className="mt-4 flex flex-col">
                            {Array.isArray(hasil) && hasil.map((h, i) =>
                                <Link key={i} href={'/posts/post/'+h.id} className="p-1 my-1 border border-secondary underline hover:border-primary">{h.judul}</Link>
                            )}
                        </div>
                    </div>
                </div>
            </Modal >
        </div>
    )
}