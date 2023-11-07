'use client'

import projectIcon from '@/../public/project-white.svg'
import React from "react";
import IconButton from "@/components/button/IconButton";
import {useRouter} from "next/navigation";
import Carousel from "@/components/Carousel";
import {Button, Link, Spacer} from "@nextui-org/react";
import {Card, CardBody} from "@nextui-org/card";
import BackIcon from "@/components/icons/BackIcon";
import Image from "next/image";


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
                className='min-h-[90vh] w-full flex justify-center items-center'
            >
                <div className="absolute w-full h-full">
                    <Image
                        priority
                        src={"/static/blur.png"}
                        alt=""
                        fill
                        objectFit='cover'
                    />
                </div>
                <div className="z-10">
                    <Card
                        classNames={{
                            base: " dark:bg-neutral-900/50 bg-neutral-300/40 p-12 phone:px-6 backdrop-blur-md",
                        }}
                    >
                        <CardBody>
                            <div className='h-fit w-fit mb-12'>
                                <Link href='/'>
                                    <div
                                        className='bg-neutral-100 text-primary dark:bg-black/20 hover:dark:bg-black/70 backdrop-blur-md p-4 border-1 border-primary/70 dark:border-white/20 rounded-2xl flex gap-4 my-auto hover:scale-[103%] transition-fast'>
                                        <BackIcon/>
                                        <p className='text-lg relative self-center'>Go Home</p>
                                    </div>
                                </Link>
                            </div>
                            <div className="flex phone:flex-col gap-4">
                                <div className='transition-fast hover:scale-[101%]'>
                                    <IconButton
                                        icon={props.icon || projectIcon}
                                        size={5}
                                        className='animate-bounce-slow'
                                        onClick={() => {
                                            router.push(props.website)
                                        }}/>
                                </div>
                                <div>
                                    <h1 className={`text-5xl  max-w-lg phone:text-3xl text-left font-black mb-3 tracking-wide capitalize text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-rose-600 drop-shadow-md`}>{props.title}</h1>
                                    <p className={`text-xl phone:text-lg text-left max-w-xl tracking-wide phone:max-w-xs mb-6 text-white`}>{props.subTitle}</p>
                                    <div className='flex phone:flex-col gap-4'>
                                        <Button
                                            size="lg"
                                            as={Link}
                                            isExternal
                                            showAnchorIcon
                                            color="primary"
                                            href={props.website}
                                        >Visit</Button>
                                        {props.secondaryWebsite &&
                                            <Button
                                                size="lg"
                                                as={Link}
                                                isExternal
                                                color="secondary"
                                                href={props.secondaryWebsite}
                                            >
                                                Also Visit
                                            </Button>
                                        }
                                    </div>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </div>
            </div>
            {
                props.images.length &&
                <Carousel images={props.images}/>
            }
            {props.children}
            <Spacer y={16}/>
        </div>

    )
}