import {EmblaOptionsType} from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import {useCallback, useEffect, useState} from "react";

type Props = {
    images: string[]
    options?: EmblaOptionsType
}

export default function Carousel(props: Props) {
    const [emblaRef, emblaApi] = useEmblaCarousel(props.options)
    const [scrollProgress, setScrollProgress] = useState(0)

    const onScroll = useCallback(() => {
        if (!emblaApi) return
        const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()))
        setScrollProgress(progress * 100)
    }, [emblaApi, setScrollProgress])

    useEffect(() => {
        if (!emblaApi) return
        onScroll()
        emblaApi.on('scroll', onScroll)
        emblaApi.on('reInit', onScroll)
    }, [emblaApi, onScroll])

    return (
        <div className="embla relative">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {props.images.map((image, index) => (
                        <div className="embla__slide" key={index}>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                className="embla__slide__img"
                                src={image}
                                alt=""
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className="embla__progress">
                <div
                    className="embla__progress__bar"
                    style={{ transform: `translate3d(${scrollProgress}%,0px,0px)` }}
                />
            </div>
        </div>
    )
}