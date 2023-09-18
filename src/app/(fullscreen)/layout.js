import '../globals.css';

export default function RootLayout({children}){
    return(
        <html>
            <body className='w-screen h-screen'>
                {children}
            </body>
        </html>
    )
}