import * as React from "react"
import {IconProps} from "@/components/icons/MailIcon";
import clsx from "clsx";

const BackIcon = ({width, height, className, fill}: IconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className={clsx("self-center", className)}
        width={width ?? 24}
        height={height ?? width ?? 24}
        fill={clsx(fill ?? "currentColor")}
        viewBox="0 0 1024 1024"
    >
        <path d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"/>
        <path
            d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"/>
    </svg>
)
export default BackIcon
