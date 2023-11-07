import Image from "next/image";
import {Card, CardBody} from "@nextui-org/card";

export default function NotFound() {
    return (
        <>
            <div
                className='h-screen flex flex-col justify-center items-center'
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
                            base: "w-fit dark:bg-neutral-900/50 bg-neutral-400/40 p-12 backdrop-blur-md",
                        }}
                    >
                        <CardBody>
                            <h1 className='text-center text-5xl phone:text-3xl font-bold mb-2 text-white'>nothing&apos;s here</h1>
                            <h3 className='text-center text-2xl phone:text-2xl font-medium text-white'>¯\_(ツ)_/¯</h3>
                            <h3 className='text-center text-lg  phone:text-sm tracking-widest text-neutral-300'>sorry, I could&apos;t find what you were looking for...</h3>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </>
    )
}