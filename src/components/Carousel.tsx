import {EmblaOptionsType} from "embla-carousel";
import {Fragment, useState} from "react";
import {AnimatePresence, motion, wrap} from "framer-motion";

const variants = {
    enter: (direction: number) => {
        return {
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        };
    },
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1
    },
    exit: (direction: number) => {
        return {
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        };
    }
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
};

type Props = {
    images: string[]
    options?: EmblaOptionsType
}

export default function Carousel({images, options}: Props) {
    const [[page, direction], setPage] = useState([0, 0]);
    const imageIndex = wrap(0, images.length, page);

    const paginate = (newDirection: number) => {
        setPage([page + newDirection, newDirection]);
    };

    return (
        <div className="w-3/4 h-screen relative flex justify-center items-center mx-auto overflow-hidden">
            <AnimatePresence initial={false} custom={direction}>
                <motion.img
                    className="absolute max-w-3/4 max-h-[50rem] phone:max-h-[100vh]"
                    key={page}
                    src={images[imageIndex]}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: {type: "spring", stiffness: 300, damping: 30},
                        opacity: {duration: 0.2}
                    }}
                    drag="x"
                    dragConstraints={{left: 0, right: 0}}
                    dragElastic={1}
                    onDragEnd={(e, {offset, velocity}) => {
                        const swipe = swipePower(offset.x, velocity.x);

                        if (swipe < -swipeConfidenceThreshold) {
                            paginate(1);
                        } else if (swipe > swipeConfidenceThreshold) {
                            paginate(-1);
                        }
                    }}
                />
            </AnimatePresence>
            <div className="next" onClick={() => paginate(1)}>
                {"‣"}
            </div>
            <div className="prev" onClick={() => paginate(-1)}>
                {"‣"}
            </div>
        </div>
    )
}