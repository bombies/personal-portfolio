'use client';

import {StaticImageData} from "next/image";
import GenericImage from "@/components/GenericImage";
import {MouseEventHandler} from "react";
import {ToastDataProps} from "@/components/ToastComponent";
import {sendToast} from "@/utils/client-utils";

type Props = {
    icon: string | StaticImageData
    size?: number
    onClick?: MouseEventHandler<HTMLDivElement>
    toast?: ToastDataProps
    className?: string
}

export default function IconButton(props: Props) {
    return (
        <GenericImage
            className={`transition-faster hover:scale-105 ${props.className || ''}`}
            src={props.icon}
            width={props.size ?? 1.25}
            onClick={(e) => {
                e.preventDefault();
                if (props.onClick)
                    props.onClick(e);
                if (props.toast)
                    sendToast(props.toast)
            }}
        />
    )
}