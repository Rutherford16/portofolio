'use client'

import './globals.css';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import NavLink from './components/navlink';
import anime from 'animejs';

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);

  const animationRef = useRef(null);

  const gantiTampilan = () => {
    animationRef.current =
      anime({
        targets: '#bukanLoading',
        opacity: [0, 1],
        duration: 2000,
      })
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
          delay: (el, i) => 70 * (i + 1)
        }, '-=2300')
        .add({
          targets: '#loading',
          // opacity: [1, 0],
          // translateY: 700,
          duration: 2000,
          complete: function (anim) {
            setLoading(!anim.completed);
          }
        }, '-=1100');
  }

  useEffect(() => {
    animasi();
  }, []);

  return (
    <html lang="en">
      <head>
        <title>Rutherford16</title>
      </head>
      <body>
        <main className="w-screen h-screen bg-background text-primary font-firaMono border-primary">
          {loading ? (
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
          ) : (
            <div id='bukanLoading' className='flex sm:flex-row flex-col w-full h-full'>
              {gantiTampilan()}
              <section id='sidebar' className='sm:w-2/5 border-b'>
                <div className='h-fit flex flex-row p-3 border-b border-secondary'>
                  <Image src="/images/foto-profil.jpg" alt='Foto Profil' width={114} height={144} className=' rounded-full' />
                  <div className='flex flex-col py-8 px-5'>
                    <h1 className='text-2xl'>Rutherford16</h1>
                    <h3 className='text-xs'>Junior Web Developer</h3>
                  </div>
                </div>
              </section>
              <section id='body' className='sm:border-l w-full h-full p-5'>
                {children}
              </section>
              <nav id='navbar' className='fixed bottom-0 w-full flex flex-row justify-center bg-background shadow-xl border-t'>
                <NavLink href='/'>Index</NavLink>
                <NavLink href='/animasi'>Animasi</NavLink>
              </nav>
            </div>
          )}
        </main>
      </body>
    </html>
  )
}
