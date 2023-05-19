import React from "react";

interface Props extends React.PropsWithChildren {}

export default function ImageGrid(props: Props) {
    return (
        <div className='w-full grid grid-cols-4 phone:grid-cols-1 tablet:grid-cols-2 gap-4'>
            {props.children}
        </div>
    )
}