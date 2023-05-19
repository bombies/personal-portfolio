type Props = {
    type?: 'ordered' | 'unordered',
    heading: string,
    items: string[]
}

export default function List(props: Props) {
    const listItems = props.items.map((item, index) => <li key={`${item}:${index}`}><span className='text-white'>{item}</span></li>)

    return (
        <div>
            <h4 className='text-xl font-medium'>{props.heading}</h4>
            {
                !props.type || props.type === 'unordered' ?
                    <ul className='space-y-2 list-disc list-inside text-primary'>
                        {listItems}
                    </ul>
                    :
                    <ol className='space-y-2 list-decimal list-inside text-primary'>
                        {listItems}
                    </ol>
            }
        </div>
    )
}