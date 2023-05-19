'use client'

import Link from "next/link";
import HyperLink from "@/components/HyperLink";
import {useEffect, useRef, useState} from "react";

export default function Navbar() {
    const [isOpen, setOpen] = useState(false);
    const mobileNavRef = useRef<any>(null);
    const hamburgerRef = useRef<any>(null);

    const toggleOpen = () => {
        setOpen(lastVal => !lastVal);
    }

    useEffect(() => {
        const handle = (event: MouseEvent) => {
            if (mobileNavRef.current && (!mobileNavRef.current.contains(event.target) && !hamburgerRef.current.contains(event.target)))
                setOpen(false);
        }

        document.addEventListener('mousedown', handle);
        return () => {
            document.removeEventListener('mousedown', handle);
        }
    }, [mobileNavRef, hamburgerRef]);

    return (
        <nav className='absolute z-50 w-full'>
            <div
                ref={hamburgerRef}
                className='z-[51] invisible tablet:visible transition-fast absolute top-5 left-5 flex flex-col gap-[.15rem] w-6 h-12 cursor-pointer'
                onClick={toggleOpen}>
                <div
                    className={'rounded-full h-[.25rem] transition-fast ' + (isOpen ? 'bg-primary' : 'bg-white dark:bg-neutral-900')}></div>
                <div
                    className={'rounded-full h-[.25rem] transition-fast ' + (isOpen ? 'bg-primary' : 'bg-white dark:bg-neutral-900')}></div>
                <div
                    className={'rounded-full h-[.25rem] transition-fast ' + (isOpen ? 'bg-primary' : 'bg-white dark:bg-neutral-900')}></div>
            </div>

            <div
                ref={mobileNavRef}
                className={`w-full text-center bg-opacity-50 bg-black backdrop-blur-md h-fit flex tablet:flex-col justify-between py-5 px-12 ${isOpen ? '' : 'tablet:hidden'}`}
            >
                <Link href='/' className='tracking-[.5em] text-primary drop-shadow-glow-primary-md'>ajani</Link>
                <div className='flex tablet:flex-col gap-12'>
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
        </nav>

    )
}