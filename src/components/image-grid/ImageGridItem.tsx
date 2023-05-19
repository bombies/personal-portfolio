'use client'

import Link from "next/link";
import localFont from "next/font/local";

// const sfMono = localFont({
//     src: [
//         {
//             path: './fonts/sf-mono/SFMonoRegular.otf',
//             weight: '400',
//             style: 'normal'
//         }
//     ],
//     variable: '--font-sf-mono',
// })

type Props = {
    href: string,
    title: string,
    color: string
}

export default function ImageGridItem(props: Props) {
    return (
        <Link href={props.href}>
            <div
                className={`w-full h-32 transition-fast hover:brightness-150 hover:backdrop-blur-lg overflow-hidden p-12 flex justify-center place-content-center border-2 border-neutral-500/50 rounded-xl`}
                onMouseEnter={e => {
                    e.currentTarget.style.borderColor = props.color
                }}
                onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgb(115 115 115 / 0.5)'
                }}
            >
                <p className={`max-w-sm overflow-hidden overflow-ellipsis tracking-[.25em]`}>{props.title}</p>
            </div>
        </Link>
    )
}