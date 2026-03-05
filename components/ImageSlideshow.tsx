'use client'

import Image from "next/image";
import { useEffect, useState } from "react";
import { BiChevronLeft } from "react-icons/bi";

const slideshowImages = [
    {
        src: "https://8dmjj7pdiy9r34m1.public.blob.vercel-storage.com/public-site/CoverImageActual.jpg",
        position: "object-[20%_10%]"
    },
    {
        src: "https://8dmjj7pdiy9r34m1.public.blob.vercel-storage.com/public-site/test.png",
        position: "object-[50%_65%]"
    }
]

export default function ImageSlideshow() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slideshowImages.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    const goToPreviousSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slideshowImages.length) % slideshowImages.length);
    };

    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slideshowImages.length);
    }

    return (
        <div className="relative h-[80svh] lg:pb-6">
            {slideshowImages.map((image, index) => (
                <section key={index} className={`overflow-hidden h-full ${index === currentIndex ? "block" : "hidden"}`}>
                    <Image
                        src={image.src}
                        alt={`Slide ${index + 1}`}
                        layout="fill"
                        className={`relative object-cover lg:rounded-b-xl w-full ${image.position}`}
                        priority={index === currentIndex}
                    />
                </section>
            ))}
            <button
                onClick={goToPreviousSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2"
            >
                <BiChevronLeft className="w-6 h-6"/>
            </button>
        </div>
    )
}