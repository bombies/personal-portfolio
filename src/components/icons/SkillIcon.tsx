import * as React from "react"
import {IconProps} from "@/components/icons/MailIcon";
import clsx from "clsx";

const SkillIcon = ({width, height, className, fill}: IconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        className={clsx("self-center", className)}
        width={width ?? 24}
        height={height ?? width ?? 24}
        viewBox="0 0 100 100"
    >
        <path
            fill={clsx(fill ?? "#000")}
            d="M77.3 55.7 70 44.9V44c0-13.2-10.8-24-24-24-1.9 0-3.8.2-5.7.7C29.7 23.1 22 32.9 22 44c0 4.9 1.2 9.3 3.6 12.7 4.2 6 7 10.8 5.3 17.3-.4 1.5-.1 3 .9 4.2.9 1.2 2.2 1.8 3.7 1.8h19.7c2.3 0 4.3-1.6 4.7-3.8.1-.4.2-.8.2-1.2.2-1.2 1.2-2 2.4-2h1.4c2.2 0 4.1-1.3 4.7-3.4.6-2.3 1.4-5.6 1.5-9.6h5.2c.9 0 1.8-.8 2.2-1.6.4-.8.3-2.1-.2-2.7zM61.4 42c-.8 1.3-2.4 2-4.7 2-12.3 0-13.2 9-13.2 13.3 0 2-1.6 3.7-3.6 3.7h-.3c-1.7 0-3.1-1.2-3.5-2.9-.4-1.8-1.6-2.8-2.8-3.7-.8-.6-1.6-1.2-2-2.1-1.1-2.3-2.2-5-2.2-8.4 0-7.8 5.4-14.6 12.7-16.3 1.4-.3 2.7-.5 4.1-.5 6.8 0 12.9 4.1 15.5 10.3.1.3 1.2 2.7 0 4.6z"/>
    </svg>
)
export default SkillIcon
