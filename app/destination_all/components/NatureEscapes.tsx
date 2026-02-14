"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "lucide-react";
import "swiper/css";
import { LineReveal } from "@/app/utils/animation";

const natureTrips = [
    {
        title: "Switzerland",
        desc: "Snowy peaks, serene lakes, cozy chalets.",
        img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    },
    {
        title: "Kerala",
        desc: "Backwaters, spice gardens, lush hills",
        img: "https://images.unsplash.com/photo-1589308078054-832f1a5c9c4d",
    },
    {
        title: "New Zealand",
        desc: "Endless trail paths, wild coasts and pure air",
        img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    },
    {
        title: "Norway",
        desc: "Frozen beauty, deep fjords, northern lights",
        img: "https://images.unsplash.com/photo-1500048993959-d23a436266cf",
    },
    {
        title: "Norway",
        desc: "Frozen beauty, deep fjords, northern lights",
        img: "https://images.unsplash.com/photo-1500048993959-d23a436266cf",
    },
];

export default function NatureEscapes() {
    return (
        <section className="pt-20 px-4 md:px-8">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-base md:text-2xl font-gilroy-semibold">
                        <LineReveal text="Nature Lover’s Escapes" />
                    </h3>

                    <div className="flex gap-2">
                        <div className="nature-prev w-8 h-8 rounded-full border flex items-center justify-center cursor-pointer">
                            <ArrowLeft className="w-4 h-4" />
                        </div>
                        <div className="nature-next w-8 h-8 rounded-full border flex items-center justify-center cursor-pointer text-orange-500">
                            <ArrowRight className="w-4 h-4" />
                        </div>
                    </div>
                </div>

                <Swiper
                    modules={[Navigation]}
                    navigation={{
                        prevEl: ".nature-prev",
                        nextEl: ".nature-next",
                    }}
                    spaceBetween={20}
                    slidesPerView={1.2}
                    breakpoints={{
                        768: { slidesPerView: 3 },
                        1024: { slidesPerView: 3.4 },
                    }}
                >
                    {natureTrips.map((item, i) => (
                        <SwiperSlide key={i}>
                            <div className="relative h-[200px] md:h-[250px] rounded-2xl overflow-hidden text-white">
                                <img
                                    src="/slider-bg.png"
                                    className="absolute inset-0 w-full h-full object-cover"
                                    alt={item.title}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                                <div className="absolute bottom-4 left-4 right-4">
                                    <h4 className="font-gilroy-semibold">{item.title}</h4>
                                    <p className="text-sm text-gray-200">{item.desc}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
