'use client'

import data from "@/app/json/posts.json"
import Card from "./components/card"
import Link from "next/link";
import { useRef, useState } from "react";

export default function Beranda() {
  const posts = data || {};
  // let number = null;
  const [number, setNumber] = useState()

  function random(){
    let newRandom = Math.floor(Math.random()*3);
    if(newRandom != number) {
      console.log('dapat ' + newRandom)
      return setNumber(newRandom);
    } else {
      console.log('belum dapat ' + newRandom)
      return random();
    }
  }

  return (
    <>
      <div className="flex flex-row justify-between h-fit w-full">
        <button onClick={random} className="p-2">{number}</button>
        <Link href='/texteditor' className="p-2 border rounded hover:opacity-90">Text Editor</Link>
      </div>
      {Array.isArray(posts) && posts.map((post, key) =>
        <Card key={key} judul={post.judul} dibuatKapan={post.tanggal} href={'/posts/post/' + key}>
          {post.slug}
        </Card>
      )}
    </>
  )
}
