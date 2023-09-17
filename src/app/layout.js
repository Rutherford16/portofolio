'use client'

import './globals.css';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import NavLink from './components/navlink';
import Blackadders from './animasi/material/blackadders';
import posts from '@/app/json/posts.json';
import Badge from './components/badge';

// export const metadata = {
//   title: 'Rutherford16',
//   description: 'Website pribadi milik Ronny Hidayat',
// }

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [durasi, setDurasi] = useState('0.4%');
  const [listLagu, setListLagu] = useState({
    lagu: [
      'Linkin Park - The Little Things Give You Away',
      'Avenged Sevenfold - A Little Piece of Heaven',
      'Linkin Park - Drawbar',
      'Avenged Sevenfold - So Far Away'
    ],
    random: null
  });

  const audioRef = useRef(null);

  function mainkan() {
    const nextIsPlaying = !isPlaying;
    setIsPlaying(nextIsPlaying);

    if (nextIsPlaying) {
      audioRef.current.play();
      console.log('Memainkan: ' + (listLagu.random + 1) + ' - ' + listLagu.lagu[listLagu.random])
      listLagu.random == 3 && console.log('Lagu ini kupersembahkan untuk Lulu Nashoha')
    } else {
      audioRef.current.pause();
    }
  }

  const selesaiKah = (iya) => {
    setLoading(iya);
    randomKan();
  }

  function random() {
    let newRandom = Math.floor(Math.random() * listLagu.lagu.length);
    if (newRandom != listLagu.random) {
      console.log('udah ' + newRandom)
      return setListLagu({ ...listLagu, random: newRandom });
    } else {
      console.log('masih sama ' + newRandom)
      return random();
    }
  }

  const randomKan = (t) => {
    random()
    setTimeout(() => {
      t && mainkan()
      t && console.log(listLagu.random + 1 + ' - ' + listLagu.lagu[listLagu.random])
    }, 1000);
  }

  useEffect(() => {
    let interval = null;

    if (!isPlaying) {
      audioRef.current != null && audioRef.current.ended && randomKan(audioRef.current.ended);
    }

    if (isPlaying) {
      interval = setInterval(() => {
        audioRef.current != null &&
          setDurasi(
            ((Math.floor(audioRef.current.currentTime)) / (Math.floor(audioRef.current.duration) / 100)) + '%'
          );
      }, 10);
    } else {
      clearInterval(interval);
    }
  }, [isPlaying, audioRef.current]);

  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="jzlNvMROC1_8KOdnf2z-b7V7r1CGKz9g8mUmHHviI2E" />
        <title>Rutherford16</title>
      </head>
      <body>
        {loading ? (
          <main className="w-screen h-screen bg-background text-primary font-firaMono border-primary">
            <div id='loading' className="lg:w-2/4 w-3/4 h-full m-auto">
              <Blackadders loading={selesaiKah} />
            </div>
          </main>
        ) : (
          <main className="max-w-screen min-h-screen bg-background text-primary font-firaMono border-primary">
            <div id='bukanLoading' className='flex lg:flex-row flex-col w-full h-full'>
              <section id='sidebar' className='lg:w-2/5 w-full flex lg:flex-col sm:flex-row flex-col lg:border-b-0 border-b'>
                <div className='h-fit sm:w-4/6 sm:p-9 lg:p-4 lg:w-full w-full flex flex-row justify-center sm:border-b-0 p-5 lg:border-b border-b border-secondary'>
                  <Image src="/images/foto-profil.jpg" alt='Foto Profil' width={24} height={24} className=' rounded-full w-2/5 h-auto' />
                  <div className='flex flex-col pt-11 px-5'>
                    <h1 className='text-2xl'>Rutherford16</h1>
                    <h3 className='text-xs'>Junior Web Developer</h3>
                    {isPlaying ? (
                      <marquee className='text-xs' scrollamount='4'>{listLagu.random + 1 + ' - ' + listLagu.lagu[listLagu.random]}</marquee>
                    ) : (
                      <span className='text-xs'>{listLagu.random + 1 + ' - ' + listLagu.lagu[listLagu.random]}</span>
                    )}
                  </div>
                </div>
                <div className='p-4 sm:w-4/6 sm:p-9 lg:p-4 lg:w-full w-full sm:border-l lg:border-none border-secondary'>
                  <p className='indent-8 text-justify'>
                    Selamat datang di blog saya yang sederhana ini. Perkenalkan nama saya Ronny Hidayat, saya hanyalah seseorang yang memiliki hobi dalam programming. Silahkan menikmati tulisan saya yang random ini sambil mendengarkan lagu kesukaan saya.
                  </p>
                  {/* <div className='pt-4'>
                    <h3 className='text-center font-bold'>Keahlian</h3>
                    <div className='grid grid-cols-3 gap-4 p-2'>
                      <Badge>HTML</Badge>
                      <Badge>CSS</Badge>
                      <Badge>JavaScript</Badge>
                      <Badge>PHP</Badge>
                      <Badge>MySQL</Badge>
                      <Badge>C/C++</Badge>
                    </div>
                  </div> */}
                  <audio ref={audioRef} onPlay={() => setIsPlaying(true)} onPause={() => setIsPlaying(false)} className='m-auto mt-4' src={'/lagu/' + listLagu.lagu[listLagu.random] + '.mp3'}>
                    Sayang sekali browsermu tidak mendukung untuk memutar lagu.
                  </audio>
                  {/* <div className='flex flex-row justify-center'>
                    <button className='bg-secondary hover:opacity-90 rounded-t-lg border p-3'>atas</button>
                  </div> */}
                </div>
              </section>
              <section id='body' className='lg:border-l w-full min-h-screen p-4 mb-10'>
                {children}
              </section>
              <div className={'h-1 bg-primary fixed bottom-0 z-10 transition-all'} style={{ width: durasi }} />
              <nav id='navbar' className='fixed bottom-0 w-full flex flex-row justify-center bg-background border-t pb-1'>
                <NavLink href='/'>Beranda</NavLink>
                {/* <NavLink href={'/posts/post/' + Math.floor(Math.random() * posts.length)}>Post</NavLink> */}
                <NavLink href='/animasi'>Animasi</NavLink>
                <NavLink href='/three'>Three.js</NavLink>
                <button onClick={mainkan} className='fixed right-0 bottom-1 mr-2 hover:opacity-80'>
                  {isPlaying ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd"></path>
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path>
                    </svg>)}
                </button>
              </nav>
            </div>
          </main>
        )}
      </body>
    </html>
  )
}
