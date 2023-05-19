import Link from "next/link";

type Props = {
    href: string,
    label: string
}

export default function NavbarLink(props: Props) {
    return (
        <Link
            href={props.href}
            className='tracking-[.25em] hover:text-primary transition-faster'
        >{props.label}</Link>
    )
}