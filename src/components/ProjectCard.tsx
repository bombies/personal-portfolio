"use client";

import {StaticImageData} from "next/image";
import GenericImage from "@/components/GenericImage";
import {Button, Spacer} from "@nextui-org/react";
import Link from "next/link";
import linkIcon from "/public/link.svg";

type Props = {
    title: string,
    description: string,
    thumbnail: string,
    href: string,
    demo?: string
    stack?: StaticImageData[]
}

export default function ProjectCard({title, description, thumbnail, stack, href, demo}: Props) {
    const techStackElements = stack?.map((tool, i) => (
        <GenericImage
            key={`${title.toLowerCase()}#stack#${i}`}
            src={tool}
            width={1.35}
        />
    ))

    return (
        <div className="flex phone:flex-col gap-4 w-[40rem] tablet:w-full">
            <div className="w-1/2 phone:w-full phone:h-56">
                <GenericImage
                    src={thumbnail}
                    className="w-full h-full"
                    imageClassName={`rounded-2xl`}
                    style={{
                        objectFit: 'cover'
                    }}
                />
            </div>
            <div className="w-1/2 phone:w-full pl-6">
                <h3 className="font-bold text-3xl">{title}</h3>
                <p>{description}</p>
                <Spacer y={3}/>
                <div
                    className='grid grid-cols-3 gap-y-2 bg-secondary/20 p-3 rounded-2xl place-items-center border-1 border-primary/20'>
                    {techStackElements}
                </div>
                <Spacer y={6}/>
                <div className="flex gap-4">
                    {
                        demo &&
                        <Link href={demo}>
                            <Button
                                startContent={<GenericImage src={linkIcon} width={1}/>}
                                color="primary"
                                variant="shadow"
                                className="!w-fit"
                            >Live Demo</Button>
                        </Link>
                    }
                    <Link href={href}>
                        <Button color="secondary" variant="flat">Learn More</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}