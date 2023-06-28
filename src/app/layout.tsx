import './styles/globals.scss'
import './styles/embla.scss'
import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/footer/Footer";
import {SFProDisplay} from "@/app/fonts/fonts";
import {NextUIProvider} from "@nextui-org/react";
import Providers from "@/components/Providers";

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
        <body className={`${SFProDisplay.className}`}>
        <Providers>
            <Navbar/>
            {children}
            <Footer />
        </Providers>
        </body>
        </html>
    )
}
