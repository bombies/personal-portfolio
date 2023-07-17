'use client'

import localFont from "next/font/local";
import GenericImage from "@/components/GenericImage";
import Link from "next/link";
import projectIcon from '@/../public/project-white.svg'
import backIcon from '@/../public/back.svg'
import linkIcon from '@/../public/link.svg'
import React from "react";
import IconButton from "@/components/button/IconButton";
import {useRouter} from "next/navigation";
import Carousel from "@/components/Carousel";
import Button from "@/components/button/Button";
import {ButtonType} from "@/components/button/ButtonType";
import {Spacer} from "@nextui-org/react";


interface Props extends React.PropsWithChildren {
    icon?: string
    website: string
    secondaryWebsite?: string
    title: string
    subTitle: string
    images: string[]
}

export default function ProjectLayout(props: Props) {
    const router = useRouter()

    return (
        <div>
            <div
                className='py-20 min-h-screen align-middle'
                style={{
                    backgroundImage: 'url(static/mesh-567.png)'
                }}
            >
                <div className='p-24 phone:p-6 flex justify-center'>
                    <div>
                        <div className='h-fit w-fit mb-12'>
                            <Link href='/'>
                                <div
                                    className='bg-black/40 hover:bg-black/70 backdrop-blur-md p-4 border-1 border-white/20 rounded-2xl flex gap-4 my-auto hover:scale-[103%] transition-fast'>
                                    <GenericImage className='self-center' src={backIcon} width={1.5}/>
                                    <p className='text-lg text-primary relative self-center'>Go Home</p>
                                </div>
                            </Link>
                        </div>
                        <div className="flex phone:flex-col gap-4">
                            <div className='transition-fast hover:scale-[101%]'>
                                <IconButton
                                    icon={props.icon || projectIcon}
                                    size={8}
                                    className='animate-bounce-slow'
                                    onClick={() => {
                                        router.push(props.website)
                                    }}/>
                            </div>
                            <div>
                                <h1 className={`text-4xl  max-w-lg phone:text-3xl text-left font-black mb-3 tracking-wide text-white capitalize`}>{props.title}</h1>
                                <p className={`text-xl phone:text-lg text-left max-w-xl tracking-wide phone:max-w-xs mb-6 text-white`}>{props.subTitle}</p>
                                <div className='flex phone:flex-col gap-4'>
                                    <Button
                                        type={ButtonType.CTA}
                                        label='Visit'
                                        href={props.website}
                                        icon={linkIcon}
                                        width={9}
                                        height={3}
                                    />
                                    {props.secondaryWebsite &&
                                        <Button
                                            type={ButtonType.CTA}
                                            label='Also Visit'
                                            href={props.secondaryWebsite}
                                            icon={linkIcon}
                                            width={9}
                                            height={3}
                                        />
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {
                props.images.length &&
                <Carousel images={props.images}/>
            }
            {props.children}
            <Spacer y={16} />
        </div>

    )
}