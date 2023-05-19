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
            </div>
        </div>
    )
}