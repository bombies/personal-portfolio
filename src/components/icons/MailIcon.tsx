import * as React from "react"
import clsx from "clsx";

export interface IconProps {
    className?: string,
    fill?: string,
    width?: number,
    height?: number,
}

type Props = IconProps

const MailIcon = ({className, fill, width, height}: IconProps) => (
    <svg
        className={clsx("self-center", className)}
        xmlns="http://www.w3.org/2000/svg"
        width={width ?? 24}
        height={height ?? width ?? 24}
        fill="none"
        viewBox="0 0 24 24"
    >
        <path d="M0 0h24v24H0z"/>
        <path
            fill={clsx(fill ?? "currentColor")}
            fillRule="evenodd"
            d="M5.968 4h12.064c.439 0 .817 0 1.13.021.33.023.66.072.986.207a3 3 0 0 1 1.624 1.624c.135.326.184.656.207.986.021.313.021.691.021 1.13v8.064c0 .439 0 .817-.021 1.13-.023.33-.072.66-.207.986a3 3 0 0 1-1.624 1.624 3.073 3.073 0 0 1-.986.207c-.313.021-.691.021-1.13.021H5.968c-.439 0-.817 0-1.13-.021a3.072 3.072 0 0 1-.986-.207 3 3 0 0 1-1.624-1.624 3.07 3.07 0 0 1-.207-.986C2 16.85 2 16.471 2 16.032V7.968c0-.439 0-.817.021-1.13.023-.33.072-.66.207-.986a3 3 0 0 1 1.624-1.624 3.07 3.07 0 0 1 .986-.207C5.15 4 5.529 4 5.968 4Zm-1.65 2.278a1 1 0 0 1 1.41-.094l5.614 4.911a1 1 0 0 0 1.316 0l5.614-4.911a1 1 0 1 1 1.317 1.505L13.976 12.6a3 3 0 0 1-3.952 0L4.412 7.69a1 1 0 0 1-.095-1.411Z"
            clipRule="evenodd"
        />
    </svg>
)
export default MailIcon
