'use client'

import Link from "next/link";
import HyperLink from "@/components/HyperLink";

export default function Navbar() {
    return (
        <div className='absolute z-50 w-full bg-opacity-50 bg-black backdrop-blur-md h-16 flex justify-between py-5 px-12'>
            <Link href='/'>
                <p className='tracking-[.5em] text-primary drop-shadow-glow-primary-md'>ajani</p>
            </Link>
            <div className='flex gap-12'>
                <HyperLink href='/#projects' label='projects' />
                <HyperLink href='/#skills' label='skills' />
                <p
                    className='hover:text-primary transition-faster tracking-[.25em] cursor-pointer'
                    onClick={e => {
                        const resumeUrl = 'files/Ajani Green Resume.pdf'
                        const aTag = document.createElement("a")
                        aTag.href = resumeUrl
                        aTag.setAttribute('download', 'Ajani Green Resume.pdf')
                        document.body.appendChild(aTag)
                        aTag.click()
                        aTag.remove()
                    }}
                >resume</p>
            </div>
        </div>
    )
}