import '../globals.css';

export default function RootLayout({ children }) {
    return (
        <section className='w-full h-screen'>
            {children}
        </section>
    )
}