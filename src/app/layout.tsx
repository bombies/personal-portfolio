import './globals.scss'
import {Inter} from 'next/font/google'
import Navbar from "@/components/nav/Navbar";

const inter = Inter({subsets: ['latin']})

export const metadata = {
    title: 'Ajani Green',
    description: 'A Jamaican Full Stack React Developer.',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <Navbar/>
        {children}
        </body>
        </html>
    )
}
