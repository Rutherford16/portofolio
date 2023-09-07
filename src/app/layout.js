import './globals.css';
import Image from 'next/image';
import NavLink from './components/navlink';

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
        <title>Rutherford16</title>
      </head>
      <body>
        <main className="flex flex-row w-screen h-screen bg-background text-primary font-firaMono border-primary">
          <section id='sidebar' className='p-3 w-1/4'>
            {/* <Image src="/images/foto-profil.jpg" alt='Foto Profil' width={144} height={144} className='m-auto rounded mt-2' /> */}
            <h1 className='mx-auto mt-3 w-fit text-2xl'>Rutherford16</h1>
          </section>
          <div className='flex flex-col w-full'>
            <section id='navbar' className='w-full flex flex-row ml-1'>
              <NavLink href='/'>Index</NavLink>
              <NavLink href='/animasi'>Animasi</NavLink>
              <div className='border -skew-x-12 w-full'></div>
            </section>
            <section id='body' className='border-x h-full p-3'>
              {children}
            </section>
          </div>
          <section className='flex flex-col w-1/4'>

          </section>
        </main>
      </body>
    </html>
  )
}
