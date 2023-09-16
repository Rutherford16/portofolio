'use client'

import { useEffect, useState } from "react";
import { marked } from "marked";
import DOMPurify from "dompurify";
import Link from "next/link";

export default function TextEditor() {
    const [text, setText] = useState('');
    const [json, setJson] = useState('');
    const [original, setOriginal] = useState('');
    const [muncul, setMuncul] = useState(false);
    const [kopi, setKopi] = useState('Copy');

    const simpanText = (e) => {
        setText(marked.parse(e))
        setJson(e.replace(/\n/g, '\\n').replace(/\s/g, '\\s'))
        setOriginal(marked.parse(e))
        // setOriginal(e.replace(/\\s/g, ' ').replace(/\\n/g, '\n'))
    }

    const formatJSON = (t) => {
        console.log(t)
        t ? setText(marked.parse('    ' + json)) : setText(original)
        t && setKopi('Copy')
        t ? setMuncul(t) : setMuncul(t);
    }

    const copy = () => {
        navigator.clipboard.writeText(json).then(function() {
            setKopi('Copied')
            console.log(json + ' Berhasil disalin');
          }, function(err) {
            console.error('Gagal: ', err);
          });
    }

    return (
        <>
            <div className="py-8 max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="border text-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div className="flex flex-row justify-end pr-2 pt-2">
                        <Link href='/' className="border rounded p-2 hover:underline hover:opacity-90">Kembali</Link>
                    </div>
                    <div className='flex flex-col p-4'>
                        <h3 className='text-center text-2xl'>Editor</h3>
                        <textarea name="" id="editor" className='w-full text-black h-96 rounded-sm p-3' onChange={(e) => simpanText(e.target.value)} autoFocus></textarea>
                        <h3 className='text-center text-2xl mt-4'>Preview</h3>
                        <div className="flex justify-end mb-1">
                            {muncul && <button className="mr-4 px-2 bg-secondary rounded hover:opacity-80" onClick={copy}>{kopi}</button>}
                            <input type="checkbox" name="forJSON" id="forJSON" onChange={(e) => formatJSON(e.target.checked)} />
                            <label htmlFor="forJSON" className="mr-4">Versi JSON</label>
                        </div>
                        <div id='preview' className='border max-w-screen-lg rounded-sm prose prose-blockquote:text-primary prose-blockquote:bg-secondary prose-blockquote:p-1 prose-blockquote:pr-4 prose-strong:text-primary prose-headings:text-primary prose-code:text-red-400 prose-pre:w-full prose-a:no-underline prose-a:text-blue-700 hover:prose-a:opacity-80' dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(text) }}></div>
                    </div>
                </div>
            </div>
        </>
    )
}