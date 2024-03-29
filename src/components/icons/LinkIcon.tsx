import * as React from "react"
import {IconProps} from "@/components/icons/MailIcon";
import clsx from "clsx";

const LinkIcon = ({width, height, className, fill}: IconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className={clsx("self-center", className)}
        width={width ?? 24}
        height={height ?? width ?? 24}
        viewBox="0 0 20 20"
    >
        <title>{"link_round [#ffffff]"}</title>
        <path
            fill={clsx(fill ?? "currentColor")}
            fillRule="evenodd"
            d="M18.239 1.761a6.014 6.014 0 0 0-8.505 0l-2.568 2.57 1.417 1.416 2.569-2.568a4.008 4.008 0 0 1 5.67 0 4.015 4.015 0 0 1 0 5.67l-2.57 2.568 1.418 1.418 2.569-2.57a6.014 6.014 0 0 0 0-8.504Zm-9.39 15.06a3.98 3.98 0 0 1-2.835 1.174 3.98 3.98 0 0 1-2.835-1.174 4.012 4.012 0 0 1 0-5.67l2.57-2.568L4.33 7.165 1.761 9.734a6.015 6.015 0 0 0 8.506 8.505l2.568-2.569-1.418-1.418-2.569 2.569ZM12.262 6.32l1.417 1.417-5.958 5.959-1.417-1.418 5.958-5.958Z"
        />
    </svg>
)
export default LinkIcon
