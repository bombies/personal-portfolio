import './styles/globals.scss'
import './styles/embla.scss'
import {Inter} from 'next/font/google'
import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/footer/Footer";

const inter = Inter({subsets: ['latin']})

export const metadata = {
    title: 'Ajani Green - Full Stack Developer',
    description: 'A Full Stack React Developer.',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={`${inter.className}`}>
        <Navbar/>
        {children}
        <Footer />
        </body>
        </html>
    )
}
