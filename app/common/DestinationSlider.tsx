"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "lucide-react";
import "swiper/css";

export type DestinationItem = {
    title: string;
    desc: string;
    img: string;
};

type DestinationSliderProps = {
    title: string;
    items: DestinationItem[];
    prevClass: string;
    nextClass: string;
    cardHeight?: string; // optional customization
};

export default function DestinationSlider({
    title,
    items,
    prevClass,
    nextClass,
    cardHeight = "h-[260px]",
}: DestinationSliderProps) {
    return (
        <section className="pt-16 px-4 md:px-8">
            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-base md:text-lg font-gilroy-semibold">
                        {title}
                    </h3>

                    <div className="flex gap-2">
                        <div
                            className={`${prevClass} w-8 h-8 rounded-full border flex items-center justify-center cursor-pointer`}
                        >
                            <ArrowLeft className="w-4 h-4" />
                        </div>
                        <div
                            className={`${nextClass} w-8 h-8 rounded-full border flex items-center justify-center cursor-pointer text-orange-500`}
                        >
                            <ArrowRight className="w-4 h-4" />
                        </div>
                    </div>
                </div>

                {/* Slider */}
                <Swiper
                    modules={[Navigation]}
                    navigation={{
                        prevEl: `.${prevClass}`,
                        nextEl: `.${nextClass}`,
                    }}
                    spaceBetween={20}
                    slidesPerView={1.15}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 4 },
                    }}
                >
                    {items.map((item, i) => (
                        <SwiperSlide key={i}>
                            <div
                                className={`relative ${cardHeight} rounded-2xl overflow-hidden text-white`}
                            >
                                {/* Image */}
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="absolute inset-0 w-full h-full object-cover"
                                />

                                {/* Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                                {/* Content */}
                                <div className="absolute bottom-5 left-5 right-5">
                                    <h4 className="text-sm md:text-base font-gilroy-semibold">
                                        {item.title}
                                    </h4>
                                    <p className="text-xs md:text-sm text-gray-200 mt-1 leading-snug">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>
        </section>
    );
}
