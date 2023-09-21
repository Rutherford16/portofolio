import '../globals.css';

export default function RootLayout({ children }) {
    return (
        <html>
            <body className='w-full h-screen'>
                {children}
            </body>
        </html>
    )
}