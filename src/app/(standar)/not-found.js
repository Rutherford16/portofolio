import Link from 'next/link'

export default async function NotFound() {
  return (
    <div className='w-full flex justify-center'>
      <h2 className='text-xl'>Page Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/" className='p-2 border rounded'>Beranda</Link>
    </div>
  )
}