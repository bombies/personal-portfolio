'use client'

import Link from "next/link";
import HyperLink from "@/components/HyperLink";
import {useEffect, useRef, useState} from "react";
import {CSSTransition} from "react-transition-group";
import ContactButton from "@/components/nav/ContactButton";

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

    const nav = (
        <div
            ref={mobileNavRef}
            className={`
                w-[95%] tablet:w-full
                text-center bg-black/70
                tablet:rounded-t-none
                rounded-2xl border-[1px] border-white/20
                mx-auto backdrop-blur-md h-fit flex
                tablet:flex-col justify-between
                py-8 px-12 text-white
                `}
        >
            <Link href='/' className='font-black text-xl tracking-[.125em] tablet:mb-6 self-center'>Ajani</Link>
            <div className='flex tablet:flex-col gap-12'>
                <HyperLink href='/#projects' label='projects' className="font-light text-xl tracking-wide self-center !no-underline"/>
                <HyperLink href='/#skills' label='skills' className="font-light text-xl tracking-wide self-center !no-underline"/>
                <p
                    className='hover:text-primary transition-faster cursor-pointer tracking-wide font-light text-xl self-center'
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
                <ContactButton />
            </div>
        </div>
    )

    return (
        <nav className='sticky top-2 tablet:top-0 z-50 w-full'>
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
            <div className='invisible tablet:visible absolute w-full h-full'>
                <CSSTransition
                    in={isOpen}
                    unmountOnExit
                    timeout={350}
                    classNames='navbar'
                >
                        {nav}
                </CSSTransition>
            </div>
            <div className='tablet:hidden w-full h-full absolute'>
                {nav}
            </div>
        </nav>
    )
}