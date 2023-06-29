import React from "react";

interface Props extends React.PropsWithChildren {
    heading: string;
}

export default function FooterGroup(props: Props) {
    return (
        <div className='flex flex-col gap-4'>
            <h3 className='font-semibold !text-primary text-lg phone:text-center'>{props.heading}</h3>
            <div className='flex flex-col gap-4 phone:text-center'>
                {props.children}
            </div>
        </div>
    )
}