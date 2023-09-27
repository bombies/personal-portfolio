"use client";

import React, {RefObject} from "react";
import parse from 'html-react-parser'
import clsx from "clsx";

interface Props extends React.PropsWithChildren {
    id?: string,
    background?: string
    title?: string
    subTitle?: string
    description?: string,
    screenHeight?: boolean
    ref?: RefObject<HTMLDivElement>
}

export default function ContentSection(props: Props) {
    return (
        <section
            id={props.id}
            className={clsx(
                'w-full px-48 tablet:px-16 phone:px-8 pt-28 pb-0 mx-auto',
                props.screenHeight && 'h-screen'
            )}
            style={{
                background: clsx(props.background && `url(${props.background})`)
            }}
        >
            <div ref={props.ref}>
                <div className='mb-6'>
                    {props.title &&
                        <h1 className='font-bold text-5xl phone:text-3xl phone:text-center text-primary'>{props.title}</h1>}
                    {props.subTitle &&
                        <h1 className='font-semibold text-neutral-400 text-3xl phone:text-lg tracking-widest'>{props.subTitle}</h1>}
                </div>
                <article>
                    {props.description &&
                        <p className='tracking-wide font-medium max-w-2xl text-lg phone:text-lg mb-3'>{parse(props.description)}</p>}
                    {props.children}
                </article>
            </div>
        </section>
    )
}