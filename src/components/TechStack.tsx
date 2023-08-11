"use client";

import {StaticImageData} from "next/image";
import GenericImage from "@/components/GenericImage";
import {Tooltip} from "@nextui-org/react";

type StackItem = {
    label: string,
    icon: StaticImageData
}

type Props = {
    items: StackItem[]
}

export default function TechStack({items}: Props) {
    const componentItems = items.map((item, index) => <TechStackItem key={`${item.label}:${index}`} item={item}/>)

    return (
        <div className="grid grid-cols-8 tablet:grid-cols-6 phone:grid-cols-4 gap-4">
            {componentItems}
        </div>
    )
}

function TechStackItem({item}: { item: StackItem }) {
    return (
        <Tooltip content={item.label} delay={100} closeDelay={100}>
            <div className='p-3 w-fit bg-white dark:bg-neutral-800 hover:bg-primary/20 drop-shadow rounded-full transition-fast'>
                <GenericImage src={item.icon} width={2}/>
            </div>
        </Tooltip>
    )
}