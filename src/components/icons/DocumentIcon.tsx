import * as React from "react"
import {IconProps} from "@/components/icons/MailIcon";
import clsx from "clsx";

const DocumentIcon = ({width, height, className, fill}: IconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className={clsx("self-center", className)}
        width={width ?? 24}
        height={height ?? width ?? 24}
        fill="none"
        viewBox="0 0 24 24"
    >
        <path
            fill={clsx(fill ?? "currentColor")}
            fillRule="evenodd"
            d="M5.272 3.365C5 3.9 5 4.6 5 6v12c0 1.4 0 2.1.272 2.635a2.5 2.5 0 0 0 1.093 1.092C6.9 22 7.6 22 9 22h6c1.4 0 2.1 0 2.635-.273a2.5 2.5 0 0 0 1.092-1.092C19 20.1 19 19.4 19 18V9.988c0-.734 0-1.1-.083-1.446a3 3 0 0 0-.36-.867c-.185-.303-.444-.562-.963-1.08l-3.188-3.19c-.519-.518-.778-.777-1.081-.963a3.001 3.001 0 0 0-.867-.36C12.112 2 11.745 2 11.012 2H9c-1.4 0-2.1 0-2.635.272a2.5 2.5 0 0 0-1.093 1.093zM11 9V4.82a.821.821 0 0 1 1.377-.604l4.386 4.386a.819.819 0 0 1-.58 1.398H12a1 1 0 0 1-1-1z"
            clipRule="evenodd"
        />
    </svg>
)
export default DocumentIcon
