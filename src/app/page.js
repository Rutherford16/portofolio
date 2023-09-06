import Image from 'next/image'

export default function Index() {
  return (
    <main className="flex flex-row w-screen h-screen bg-background text-primary font-firaMono border-primary">
      <section id='sidebar' className='p-3 w-1/4'>
        {/* <Image src="/img/foto-profil.jpg" alt='Foto Profil' layout='fill' objectFit='contain'/> */}
        <h1>Rutherford16</h1>
      </section>
      <div className='flex flex-col w-full'>
        <section id='navbar' className='w-full flex flex-row ml-1'>
          <div className='-skew-x-12 w-fit bg-primary'>
            <a href='#' className='p-2 block skew-x-12 text-background'>Index</a>
          </div>
          <div className='border -skew-x-12 w-fit'>
            <a href='#' className='p-2 block skew-x-12'>Animasi</a>
          </div>
          <div className='border -skew-x-12 w-full'>
          </div>
        </section>
        <section id='body' className='border h-full p-3'>
          <p>Welcome, lorem</p>
        </section>
      </div>
      <section className='flex flex-col w-1/4'>

      </section>
    </main>
  )
}
