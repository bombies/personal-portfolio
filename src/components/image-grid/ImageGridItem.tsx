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
            className={`w-full h-32 cursor-pointer transition-fast hover:brightness-150 hover:backdrop-blur-lg overflow-hidden p-12 flex justify-center place-content-center border-2 border-neutral-500/50 rounded-xl`}
            onClick={() => {
                router.push(props.href)
            }}
            onMouseEnter={e => {
                e.currentTarget.style.borderColor = props.color
            }}
            onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgb(115 115 115 / 0.5)'
            }}
        >
            <p className={`text-center overflow-hidden overflow-ellipsis tracking-[.25em]`}>{props.title}</p>
        </div>
    )
}