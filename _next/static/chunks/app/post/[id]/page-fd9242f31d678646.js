(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[246],{9560:function(e,t,n){Promise.resolve().then(n.bind(n,2817))},2817:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return x},generateStaticParams:function(){return h}});var s=n(7437),a=n(1396),l=n.n(a),r=n(6691),i=n.n(r),c=n(2265),o=n(8608),u=n(3571),d=n.n(u);function h(){return["1","2","3"]}function x(e){let{params:t}=e,{id:n}=t,[a,r]=(0,c.useState)({}),u=()=>{fetch("/json/posts.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then(function(e){return console.log(e),e.json()}).then(function(e){console.log(e),r(e.posts[n]||{}),console.log(n),console.log(e.posts[n])})};return(0,c.useEffect)(()=>{u()},[]),(0,s.jsx)(s.Fragment,{children:0!=Object.keys(a).length?(0,s.jsxs)("div",{className:"w-full border rounded p-4",children:[(0,s.jsx)("div",{className:"flex flex-row justify-end",children:(0,s.jsx)(l(),{href:"/",className:"border rounded p-2 hover:underline hover:opacity-90",children:"Kembali"})}),(0,s.jsx)("h1",{className:"text-2xl text-center",children:a.judul}),(0,s.jsxs)("h5",{className:"text-xs text-center",children:["Dibuat pada : ",a.tanggal]}),(0,s.jsx)("hr",{}),(0,s.jsxs)("div",{className:"my-5 mx-3",children:[(0,s.jsx)("div",{className:"indent-8 text-justify reset-tailwind",dangerouslySetInnerHTML:{__html:d().sanitize(o.TU.parse(a.isi))}}),(0,s.jsx)(i(),{src:"/images/posts/gambar1.png",alt:"Contoh gambar",className:"w-auto h-auto",width:828,height:828})]})]}):(0,s.jsxs)("div",{className:"w-full p-5",children:[(0,s.jsx)("h1",{className:"text-xl text-center",children:"Post yang anda tuju tidak dapat ditemukan."}),(0,s.jsx)(l(),{href:"/",className:"text-blue-600 text-xl text-center inline-block w-full hover:underline hover:opacity-90",children:"Kembali ke Beranda"})]})})}}},function(e){e.O(0,[176,691,597,971,596,744],function(){return e(e.s=9560)}),_N_E=e.O()}]);