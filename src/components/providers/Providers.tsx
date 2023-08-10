"use client";

import React from "react";
import {NextUIProvider} from "@nextui-org/react";
import ReduxProvider from "@/components/providers/ReduxProvider";
import {ThemeProvider} from "next-themes";

export default function Providers({children}: React.PropsWithChildren) {
    return (
        <ReduxProvider>
                <NextUIProvider>
                    <ThemeProvider attribute="class" defaultTheme="light">
                        {children}
                    </ThemeProvider>
                </NextUIProvider>
        </ReduxProvider>
    )
}