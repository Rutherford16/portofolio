(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[103],{1256:function(e,a,n){Promise.resolve().then(n.bind(n,6268))},1942:function(e,a,n){"use strict";n.d(a,{Z:function(){return Blackadders}});var l=n(7437),r=n(2265),t=n(8674);function Blackadders(e){let{loading:a}=e,n=(0,r.useRef)(null),animasi=()=>{let e=document.querySelector(".letters");e.innerHTML=e.textContent.replace(/\S/g,"<tspan class='letter'>$&</tspan>"),n.current=t.Z.timeline({delay:250,easing:"easeInOutExpo"}).add({targets:".leftWing",points:"45,95 15,20 35,40",duration:4e3}).add({targets:".rightWing",points:"390,35 10,5 40,35",duration:3e3},"-=3700").add({targets:".text",translateX:30,duration:4e3},"-=4000").add({targets:".letter",scale:[.3,1],opacity:[0,1],translateY:0,duration:500,delay:(e,a)=>70*(a+1)},"-=2300").add({duration:200,complete:function(e){a&&a(!e.completed)}})};return(0,r.useEffect)(()=>{animasi()},[]),(0,l.jsx)("svg",{className:"text-white w-full h-full text-5xl font-hemiHead",viewBox:"0 0 400 100",children:(0,l.jsxs)("g",{fill:"currentColor",children:[(0,l.jsx)("polygon",{points:"10,95 50,5 50,35",className:"leftWing"}),(0,l.jsxs)("text",{x:"32",y:"90",className:"text",children:["B",(0,l.jsx)("tspan",{className:"letters",children:"lackadders"})]}),(0,l.jsx)("polygon",{points:"100,95 55,5 55,35",className:"rightWing"})]})})}},6268:function(e,a,n){"use strict";n.r(a),n.d(a,{default:function(){return RootLayout}});var l=n(7437);n(2489);var r=n(2265),t=n(6691),s=n.n(t),o=n(1396),i=n.n(o),d=n(4033);function NavLink(e){let{children:a,href:n}=e,r="/"+(Number.isInteger(parseInt((0,d.usePathname)().split("/")[1]))?"":(0,d.usePathname)().split("/")[1]),t="/"+n.split("/")[1];return(0,l.jsx)("div",{className:"-skew-x-12 w-fit transition-all "+(r===t?"bg-primary -translate-y-1 font-bold mx-1":"border hover:bg-secondary hover:-translate-y-1"),children:r===t?(0,l.jsx)("span",{className:"p-2 block skew-x-12 cursor-default "+(r===t?"text-background":""),children:a}):(0,l.jsx)(i(),{href:n,className:"p-2 block skew-x-12 "+(r===t?"text-background":""),children:a})})}var c=n(1942);function RootLayout(e){let{children:a}=e,[n,t]=(0,r.useState)(!0),[o,i]=(0,r.useState)(!1),[d,u]=(0,r.useState)("0.4%"),[m,h]=(0,r.useState)({lagu:["Linkin Park - The Little Things Give You Away","Avenged Sevenfold - A Little Piece of Heaven","Linkin Park - Drawbar","Avenged Sevenfold - So Far Away"],random:null}),f=(0,r.useRef)(null);function mainkan(){let e=!o;i(e),e?(f.current.play(),console.log("Memainkan: "+(m.random+1)+" - "+m.lagu[m.random]),3==m.random&&console.log("Lagu ini kupersembahkan untuk Lulu Nashoha")):f.current.pause()}let randomKan=e=>{!function random(){let e=Math.floor(Math.random()*m.lagu.length);return e!=m.random?(console.log("udah "+e),h({...m,random:e})):(console.log("masih sama "+e),random())}(),setTimeout(()=>{e&&mainkan(),e&&console.log(m.random+1+" - "+m.lagu[m.random])},1e3)};return(0,r.useEffect)(()=>{let e=null;!o&&null!=f.current&&f.current.ended&&randomKan(f.current.ended),o?e=setInterval(()=>{null!=f.current&&u(Math.floor(f.current.currentTime)/(Math.floor(f.current.duration)/100)+"%")},10):clearInterval(e)},[o,f.current]),(0,l.jsxs)("html",{lang:"en",children:[(0,l.jsxs)("head",{children:[(0,l.jsx)("meta",{name:"google-site-verification",content:"jzlNvMROC1_8KOdnf2z-b7V7r1CGKz9g8mUmHHviI2E"}),(0,l.jsx)("title",{children:"Rutherford16"})]}),(0,l.jsx)("body",{children:n?(0,l.jsx)("main",{className:"w-screen h-screen bg-background text-primary font-firaMono border-primary",children:(0,l.jsx)("div",{id:"loading",className:"lg:w-2/4 w-3/4 h-full m-auto",children:(0,l.jsx)(c.Z,{loading:e=>{t(e),randomKan()}})})}):(0,l.jsx)("main",{className:"max-w-screen min-h-screen bg-background text-primary font-firaMono border-primary",children:(0,l.jsxs)("div",{id:"bukanLoading",className:"flex lg:flex-row flex-col w-full h-full",children:[(0,l.jsxs)("section",{id:"sidebar",className:"lg:w-2/5 w-full flex lg:flex-col sm:flex-row flex-col lg:border-b-0 border-b",children:[(0,l.jsxs)("div",{className:"h-fit sm:w-4/6 sm:p-9 lg:p-4 lg:w-full w-full flex flex-row justify-center sm:border-b-0 p-5 lg:border-b border-b border-secondary",children:[(0,l.jsx)(s(),{src:"/images/foto-profil.jpg",alt:"Foto Profil",width:24,height:24,className:" rounded-full w-2/5 h-auto"}),(0,l.jsxs)("div",{className:"flex flex-col pt-11 px-5",children:[(0,l.jsx)("h1",{className:"text-2xl",children:"Rutherford16"}),(0,l.jsx)("h3",{className:"text-xs",children:"Hobbyist Programmer"}),o?(0,l.jsx)("marquee",{className:"text-xs",scrollamount:"4",children:m.random+1+" - "+m.lagu[m.random]}):(0,l.jsx)("span",{className:"text-xs",children:m.random+1+" - "+m.lagu[m.random]})]})]}),(0,l.jsx)("div",{className:"p-4 sm:w-4/6 sm:p-9 lg:p-4 lg:w-full w-full sm:border-l lg:border-none border-secondary",children:(0,l.jsx)("audio",{ref:f,onPlay:()=>i(!0),onPause:()=>i(!1),className:"m-auto mt-4",src:"/lagu/"+m.lagu[m.random]+".mp3",children:"Sayang sekali browsermu tidak mendukung untuk memutar lagu."})})]}),(0,l.jsx)("section",{id:"body",className:"lg:border-l w-full min-h-screen p-4 mb-10",children:a}),(0,l.jsx)("div",{className:"h-1 bg-primary fixed bottom-0 z-10 transition-all",style:{width:d}}),(0,l.jsxs)("nav",{id:"navbar",className:"fixed bottom-0 w-full flex flex-row justify-center bg-background border-t pb-1",children:[(0,l.jsx)(NavLink,{href:"/",children:"Beranda"}),(0,l.jsx)(NavLink,{href:"/animasi",children:"Animasi"}),(0,l.jsx)(NavLink,{href:"/alat",children:"Alat"}),(0,l.jsx)(NavLink,{href:"/three",children:"Three.js"}),(0,l.jsx)("button",{onClick:mainkan,className:"fixed right-0 bottom-1 mr-2 hover:opacity-80",children:o?(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-10 w-10",viewBox:"0 0 20 20",fill:"currentColor",children:(0,l.jsx)("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z",clipRule:"evenodd"})}):(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-10 w-10",viewBox:"0 0 20 20",fill:"currentColor",children:(0,l.jsx)("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z",clipRule:"evenodd"})})})]})]})})})]})}},2489:function(){}},function(e){e.O(0,[326,674,99,313,971,472,744],function(){return e(e.s=1256)}),_N_E=e.O()}]);