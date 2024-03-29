import FooterGroup from "@/components/footer/FooterGroup";
import HyperLink from "@/components/HyperLink";

export default function Footer() {
    return (
        <div className='bg-primary/30 w-full backdrop-blur-md flex phone:flex-col phone:place-items-center justify-between gap-4 p-12 phone:py-4 phone:px-6 tablet:p-10'>
            <p className='text-black tracking-wide text-xl font-black dark:text-white  phone:text-center'><span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Ajani G.</span></p>
            <div>
                <FooterGroup heading='contact' >
                    <HyperLink href='https://www.linkedin.com/in/ajani-green-83b469225/' label='linkedin' />
                    <HyperLink href='https://github.com/bombies' label='github' />
                </FooterGroup>
            </div>
        </div>
    )
}