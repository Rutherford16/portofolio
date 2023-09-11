'use client'

import { useState, useEffect } from "react"
import Card from "./components/card"

export default function Beranda() {
  const [posts, setPosts] = useState({})
  const getData = () => {
    fetch('/json/posts.json'
      , {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    )
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        setPosts(data.posts);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {Array.isArray(posts) && posts.map((post, key) =>
        <Card key={key} judul={post.judul} dibuatKapan={post.tanggal} href={'/post/' + key}>
          {post.slug}
        </Card>
      )}
    </>
  )
}
