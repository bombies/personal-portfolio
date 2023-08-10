import './styles/globals.scss'
import './styles/embla.scss'
import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/footer/Footer";
import {SFProDisplay} from "@/app/fonts/fonts";
import {NextUIProvider} from "@nextui-org/react";
import Providers from "@/components/providers/Providers";
import clsx from "clsx";

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
        <body className={clsx(SFProDisplay.className, "dark:bg-[#121212] dark:text-[#d5d5d5]")}>
        <Providers>
            <Navbar/>
            {children}
            <Footer />
        </Providers>
        </body>
        </html>
    )
}
