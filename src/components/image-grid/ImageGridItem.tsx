'use client'

import Link from "next/link";
import {useRouter} from "next/navigation";

type Props = {
    href: string,
    title: string,
    color: string
}

export default function ImageGridItem(props: Props) {
    const router = useRouter()

    return (
        <div
            className={`w-full h-32 cursor-pointer transition-fast hover:backdrop-blur-lg overflow-hidden p-12 flex justify-center place-content-center border-2 border-neutral-500/50 rounded-2xl`}
            onClick={() => {
                router.push(props.href)
            }}
            onMouseEnter={e => {
                e.currentTarget.style.borderColor = `${props.color}50`
                e.currentTarget.style.backgroundColor = props.color
            }}
            onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgb(115 115 115 / 0.5)'
                e.currentTarget.style.backgroundColor = "inherit"
            }}
        >
            <p className={`text-center overflow-hidden overflow-ellipsis tracking-[.25em]`}>{props.title}</p>
        </div>
    )
}