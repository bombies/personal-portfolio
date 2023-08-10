"use client"

import React, {Dispatch, SetStateAction, useContext, useEffect, useState} from "react";
import clsx from "clsx";
import {useAppDispatch, useAppSelector} from "@/utils/redux/redux-store";
import {selectDarkModeState, setDarkMode} from "@/utils/redux/slices/dark-mode-slice";

const DarkModeContext = React.createContext<[boolean, Dispatch<SetStateAction<boolean>>] | undefined>(undefined)

type Props = {} & React.PropsWithChildren

export default function DarkModeProvider({children}: Props) {
    const dispatch = useAppDispatch();
    const initialDarkModeState = useAppSelector(selectDarkModeState);
    const [darkMode, setDarkModeState] = useState(initialDarkModeState);

    useEffect(() => {
        dispatch(setDarkMode(darkMode))
    }, [darkMode, dispatch]);

    return (
        <DarkModeContext.Provider value={[darkMode, setDarkModeState]}>
            <div className={clsx(
                darkMode && "dark",
                "dark:!bg-black dark:text-white"
            )}>
                {children}
            </div>
        </DarkModeContext.Provider>
    )
}

export function useDarkMode() {
    const context = useContext(DarkModeContext)
    if (!context)
        throw new Error("useDarkMode must be used within a DarkModeProvider!");
    return context;
}