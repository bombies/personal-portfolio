import React from "react";

interface Props extends React.PropsWithChildren {
    id?: string,
    background?: string
    title?: string
    subTitle?: string
    description?: string,
    screenHeight?: boolean
}

export default function ContentSection(props: Props) {
    return (
        <div
            id={props.id}
            className={`w-full p-12 ${props.screenHeight ? 'h-screen' : ''}`}
            style={{
                background: `${props.background ? `url(${props.background})` : ""}`
            }}
        >
            <div className='mb-6'>
                {props.title && <h1 className='font-bold text-5xl text-primary drop-shadow-glow-primary-md'>{props.title}</h1>}
                {props.subTitle && <h1 className='font-semibold text-neutral-400 text-3xl tracking-widest'>{props.subTitle}</h1>}
            </div>
            <div className='p-3'>
                {props.description && <p className='tracking-widest max-w-2xl'>{props.description}</p>}
                {props.children}
            </div>
        </div>
    )
}