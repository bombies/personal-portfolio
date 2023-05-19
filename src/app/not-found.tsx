export default function NotFound() {
    return (
        <>
            <div
                className='pt-32 h-[30rem] align-middle bg-gradient-conic from-neutral-950/50 to-red-950/50'
            >
                <h1 className='text-center text-5xl phone:text-3xl font-bold mb-2'>nothing&apos;s here</h1>
                <h3 className='text-center text-2xl phone:text-2xl font-medium'>¯\_(ツ)_/¯</h3>
                <h3 className='text-center text-lg  phone:text-sm tracking-widest text-neutral-400'>sorry, I could&apos;t find what you were looking for...</h3>
            </div>
        </>
    )
}