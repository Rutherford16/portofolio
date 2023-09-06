import Image from 'next/image'

export default function Index() {
  return (
    <main className="flex flex-row w-screen h-screen bg-background text-primary font-firaMono border-primary">
      <section id='sidebar' className='p-3 w-1/4'>
        {/* <Image src="/img/foto-profil.jpg" alt='Foto Profil' layout='fill' objectFit='contain'/> */}
        <h1>Rutherford16</h1>
      </section>
      <div className='flex flex-col w-full'>
        <section id='navbar' className='border w-full p-3'>
          <div className='border -skew-x-12 w-fit'>
            <a href='#' className='p-3 block skew-x-12'>Index</a>
          </div>
        </section>
        <section id='body' className='border-t-0 border h-full p-3'>
          <p>Welcome, lorem</p>
        </section>
      </div>
      <section className='flex flex-col w-1/4'>

      </section>
    </main>
  )
}
