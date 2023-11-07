import * as React from "react"
import {IconProps} from "@/components/icons/MailIcon";
import clsx from "clsx";

const SvgComponent = ({width, height, className, fill}: IconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className={clsx("self-center", className)}
        width={width ?? 24}
        height={height ?? width ?? 24}
        viewBox="0 0 36 36"
    >
        <title>{"talk-bubbles-solid"}</title>
        <path
            fill={clsx(fill ?? "currentColor")}
            d="M8 19v-8H5a3 3 0 0 0-3 3v18a1 1 0 0 0 .56.89 1 1 0 0 0 1-.1L8.71 29h13.44A2.77 2.77 0 0 0 25 26.13V25H14a6 6 0 0 1-6-6Z"
            className="clr-i-solid clr-i-solid-path-1"
        />
        <path
            fill={clsx(fill ?? "currentColor")}
            d="M31 4H14a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h13.55l4.78 3.71a1 1 0 0 0 1 .11 1 1 0 0 0 .57-.9V7A3 3 0 0 0 31 4Z"
            className="clr-i-solid clr-i-solid-path-2"
        />
        <path fill="none" d="M0 0h36v36H0z"/>
    </svg>
)
export default SvgComponent
