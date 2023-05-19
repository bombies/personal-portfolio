import FooterGroup from "@/components/footer/FooterGroup";
import HyperLink from "@/components/HyperLink";

export default function Footer() {
    return (
        <div className='bg-neutral-950/50 w-full backdrop-blur-md flex justify-between gap-4 p-24 phone:py-4 phone:px-6 tablet:p-10'>
            <p className='tracking-[.5em] text-primary drop-shadow-glow-primary-md'>ajani.</p>
            <div>
                <FooterGroup heading='contact' >
                    <HyperLink href='https://www.linkedin.com/in/ajani-green-83b469225/' label='linkedin' spacing='.15em' />
                    <HyperLink href='https://github.com/bombies' label='github' spacing='.15em' />
                </FooterGroup>
            </div>
        </div>
    )
}