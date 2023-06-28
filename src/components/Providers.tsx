"use client";

import React from "react";
import {NextUIProvider} from "@nextui-org/react";

export default function Providers({children}: React.PropsWithChildren) {
    return (
        <NextUIProvider>
            {children}
        </NextUIProvider>
    )
}