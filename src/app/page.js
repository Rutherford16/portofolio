'use client'

import { useState, useEffect } from "react"
import data from "@/app/json/posts.json"
import Card from "./components/card"

export default function Beranda() {
  const posts = data.posts || {};

  // const [posts, setPosts] = useState({})
  // const getData = () => {
  //   fetch('/json/posts.json'
  //     , {
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Accept': 'application/json'
  //       }
  //     }
  //   )
  //     .then(function (response) {
  //       console.log(response);
  //       return response.json();
  //     })
  //     .then(function (data) {
  //       console.log(data);
  //       setPosts(data.posts);
  //     });
  // };

  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <>
      {Array.isArray(posts) && posts.map((post, key) =>
        <Card key={key} judul={post.judul} dibuatKapan={post.tanggal} href={'/posts/post/' + key}>
          {post.slug}
        </Card>
      )}
    </>
  )
}
