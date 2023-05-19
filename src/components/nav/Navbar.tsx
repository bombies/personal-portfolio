import Link from "next/link";
import NavbarLink from "@/components/nav/NavbarLink";

export default function Navbar() {
    return (
        <div className='absolute z-50 w-full bg-opacity-50 bg-black backdrop-blur-md h-16 flex justify-between py-5 px-12'>
            <p className='tracking-[.5em] text-primary drop-shadow-glow-primary-md'>ajani</p>
            <div className='flex gap-12'>
                <NavbarLink href='/#projects' label='projects' />
                <NavbarLink href='/#skills' label='skills' />
            </div>

        </div>
    )
}