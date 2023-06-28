import Link from "next/link";
import clsx from "clsx";

type Props = {
    className?: string,
    href: string,
    label: string,
    spacing?: string,
}

export default function HyperLink(props: Props) {
    return (
        <Link
            href={props.href}
            className={clsx(
                props.className,
                'hover:text-primary transition-faster underline'
            )}
            style={{
                letterSpacing: props.spacing || 'inherit'
            }}
        >{props.label}</Link>
    )
}