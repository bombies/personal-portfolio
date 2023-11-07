import * as React from "react"
import {IconProps} from "@/components/icons/MailIcon";
import clsx from "clsx";

const CompassIcon = ({width, height, className, fill}: IconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        className={clsx("self-center", className)}
        width={width ?? 24}
        height={height ?? width ?? 24}
        viewBox="0 0 64 64"
    >
        <g fill={clsx(fill ?? "currentColor")}>
            <circle cx={32} cy={32} r={4}/>
            <path
                d="M32 0C14.328 0 0 14.328 0 32s14.328 32 32 32 32-14.328 32-32S49.672 0 32 0zm8 40-22 6 6-22 22-6-6 22z"/>
        </g>
    </svg>
)
export default CompassIcon
