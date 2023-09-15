'use client'

import { useEffect, useState } from "react";
import { marked } from "marked";
import DOMPurify from "dompurify";
import Link from "next/link";

export default function TextEditor() {
    const [text, setText] = useState('');
    const [muncul, setMuncul] = useState(false);
    const [kopi, setKopi] = useState('Copy');

    const formatJSON = (t) => {
        console.log(t)
        t ? setText('    ' + text.replace(/\n/g, '\\n')) : setText(text.replace(/ /g, '').replace(/\\n/g, '\n'))
        t ? setMuncul(t) : setMuncul(t);
    }

    const copy = () => {
        navigator.clipboard.writeText(text.replace(/ /g, '')).then(function() {
            setKopi('Copied')
            console.log(text.replace(/ /g, '') + ' Berhasil disalin');
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
                        <textarea name="" id="editor" className='w-full text-black h-96 rounded-sm p-3' onChange={(e) => setText(e.target.value)} autoFocus></textarea>
                        <h3 className='text-center text-2xl mt-4'>Preview</h3>
                        <div className="flex justify-end mb-1">
                            {muncul && <button className="mr-4 px-2 bg-secondary rounded hover:opacity-80" onClick={copy}>{kopi}</button>}
                            <input type="checkbox" name="forJSON" id="forJSON" onChange={(e) => formatJSON(e.target.checked)} />
                            <label htmlFor="forJSON" className="mr-4">Versi JSON</label>
                        </div>
                        <div id='preview' className='border max-w-none  rounded-sm pl-2 prose prose-blockquote:text-primary prose-blockquote:bg-secondary prose-blockquote:p-1 prose-blockquote:pr-4 prose-strong:text-primary prose-headings:text-primary prose-code:text-red-400 prose-a:no-underline prose-a:text-blue-700 hover:prose-a:opacity-80' dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(marked.parse(text)) }}></div>
                    </div>
                </div>
            </div>
        </>
    )
}