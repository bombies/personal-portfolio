import Link from "next/link";

type Props = {
    href: string,
    label: string,
    spacing?: string,
}

export default function HyperLink(props: Props) {
    return (
        <Link
            href={props.href}
            className='hover:text-primary transition-faster'
            style={{
                letterSpacing: props.spacing || '.25em'
            }}
        >{props.label}</Link>
    )
}