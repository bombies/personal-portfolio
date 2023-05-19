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

const sfMono = localFont({
    src: [
        {
            path: './../fonts/sf-mono/SFMonoRegular.otf',
            weight: '400',
            style: 'normal'
        }
    ],
    variable: '--font-sf-mono',
})

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
                className='py-32 h-[40rem] align-middle bg-gradient-conic from-neutral-950 to-red-950'
            >
                <div className='pl-24 phone:pl-6'>
                    <div className='h-fit w-fit mb-12'>
                        <Link href='/'>
                            <div className='flex gap-4 my-auto hover:scale-[103%] transition-fast'>
                                <GenericImage src={backIcon} width={1.5}/>
                                <p className='text-sm text-primary relative self-center'>go
                                    home</p>
                            </div>
                        </Link>
                    </div>
                    <div className='transition-fast hover:scale-[101%]'>
                        <IconButton
                            icon={props.icon || projectIcon}
                            size={4}
                            className='animate-bounce-slow'
                            onClick={() => {
                                router.push(props.website)
                            }}/>
                    </div>
                    <h1 className={`text-5xl max-w-4xl phone:max-w-lg phone:text-lg text-left ${sfMono.variable} font-mono mb-3 mt-3`}>{props.title}</h1>
                    <p className={`text-lg phone:text-sm text-left ${sfMono.variable} font-mono max-w-xl phone:max-w-xs mb-6`}>{props.subTitle}</p>
                    <div className='flex gap-4'>
                        <Button type={ButtonType.CTA} label='visit' href={props.website} icon={linkIcon} width={6}
                                height={3}/>
                        {props.secondaryWebsite &&
                            <Button type={ButtonType.CTA} label='also visit' href={props.secondaryWebsite}
                                    icon={linkIcon} width={7} height={3}/>}
                    </div>
                </div>
            </div>
            {
                props.images.length &&
                <Carousel images={props.images}/>
            }
            {props.children}
        </div>

    )
}