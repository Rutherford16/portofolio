'use client'

import './globals.css';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import NavLink from './components/navlink';
import anime from 'animejs';

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [durasi, setDurasi] = useState('0.2%');

  const animationRef = useRef(null);
  const audioRef = useRef(null);

  function handleClick() {
    const nextIsPlaying = !isPlaying;
    setIsPlaying(nextIsPlaying);

    if (nextIsPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }

  const animasi = () => {
    const textWrapper = document.querySelector('.letters');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<tspan class='letter'>$&</tspan>");
    animationRef.current =
      anime.timeline({
        delay: 250,
        easing: 'easeInOutExpo'
      })
        .add({
          targets: '.leftWing',
          points: '45,95 15,20 35,40',
          duration: 4000
        })
        .add({
          targets: '.rightWing',
          points: '390,35 10,5 40,35',
          duration: 3000
        }, '-=3700')
        .add({
          targets: '.text',
          translateX: 30,
          duration: 4000
        }, '-=4000')
        .add({
          targets: '.letter',
          scale: [0.3, 1],
          opacity: [0, 1],
          translateY: 0,
          duration: 500,
          delay: (el, i) => 70 * (i + 1),
        }, '-=2300')
        .add({
          duration: 200,
          complete: function (anim) {
            setLoading(!anim.completed);
          }
        });
  }

  useEffect(() => {
    let interval = null;

    if (loading) animasi();
    if (isPlaying) {
      interval = setInterval(() => {
        setDurasi(
          ((Math.floor(audioRef.current.currentTime)) / (Math.floor(audioRef.current.duration) / 100)) + '%'
        );
      }, 10);
    } else {
      clearInterval(interval);
    }
  }, [loading, isPlaying]);

  return (
    <html lang="en">
      <head>
        <title>Rutherford16</title>
      </head>
      <body>
        {loading ? (
          <main className="w-screen h-screen bg-background text-primary font-firaMono border-primary">
            <div id='loading' className="lg:w-2/4 w-3/4 h-full m-auto">
              <svg className="text-white w-full h-full text-5xl font-hemiHead" viewBox="0 0 400 100">
                <g fill="currentColor">
                  <polygon points="10,95 50,5 50,35" className="leftWing" />
                  <text x="30" y="90" className="text">
                    B<tspan className="letters">lackadders</tspan>
                  </text>
                  <polygon points="100,95 55,5 55,35" className="rightWing" />
                </g>
              </svg>
            </div>
          </main>
        ) : (
          <main className="max-w-screen min-h-screen bg-background text-primary font-firaMono border-primary">
            <div id='bukanLoading' className='flex lg:flex-row flex-col w-full h-full'>
              <section id='sidebar' className='lg:w-2/5 w-full lg:border-b-0 border-b'>
                <div className='h-fit flex flex-row justify-center p-5 border-b border-secondary'>
                  <Image src="/images/foto-profil.jpg" alt='Foto Profil' width={114} height={114} className=' rounded-full' />
                  <div className='flex flex-col py-8 px-5'>
                    <h1 className='text-2xl'>Rutherford16</h1>
                    <h3 className='text-xs'>Junior Web Developer</h3>
                  </div>
                </div>
                <div className='p-4'>
                  <p className='indent-8 text-justify'>
                    Selamat datang di blog saya yang sederhana ini, silahkan menikmati tulisan saya yang random ini sambil mendengarkan lagu kesukaan saya.
                  </p>
                  <audio loop ref={audioRef} onPlay={() => setIsPlaying(true)} onPause={() => setIsPlaying(false)} className='m-auto mt-4'>
                    {/* <source src="/lagu/12 - The Little Things Give You Away.mp3" type="audio/mpeg" /> */}
                    <source src="/lagu/A Little Piece of Heaven.mp3" type="audio/mpeg" />
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
              <div className={'h-1 bg-red-500 fixed bottom-[43px]'} style={{ width: durasi }} />
              <nav id='navbar' className='fixed bottom-0 w-full flex flex-row justify-center bg-background shadow-xl border-t'>
                <NavLink href='/'>Beranda</NavLink>
                <NavLink href='/animasi'>Animasi</NavLink>
                <button onClick={handleClick} className='fixed right-0 bottom-0 mr-2 hover:opacity-80'>
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
