"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ArrowLeftIcon, ArrowRightIcon, Plane } from "lucide-react";
import { LineReveal } from "@/app/utils/animation";

const TrendingPackages = () => {
    const trips = Array.from({ length: 6 });

    return (
        <section className="pt-20 md:pt-24 px-4 md:px-8">
            <div className="max-w-6xl mx-auto">

                {/* Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-2xl md:text-3xl font-gilroy-semibold text-gray-900 mb-2">
                        <LineReveal text="Explore All Travel Packages In One Place" />
                    </h2>
                    <p className="text- font-gilroy-medium text-sm">
                        <LineReveal text="Discover all domestic and international trips tailored for every kind of traveler." />
                    </p>
                </div>

                {/* Subheading + Nav */}
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-base md:text-2xl font-gilroy-semibold text-gray-900">
                        <LineReveal text="Trending Trips Everyone's Booking" />
                    </h3>

                    <div className="flex gap-3">
                        <div className="swiper-button-prev-custom w-6 h-6 md:w-9 md:h-9 rounded-full border flex items-center justify-center cursor-pointer">
                            <ArrowLeftIcon className="w-3 h-3 md:w-4 md:h-4" />
                        </div>
                        <div className="swiper-button-next-custom w-6 h-6 md:w-9 md:h-9 rounded-full border flex items-center justify-center cursor-pointer text-orange-500">
                            <ArrowRightIcon className="w-3 h-3 md:w-4 md:h-4" />
                        </div>
                    </div>
                </div>

                {/* Swiper */}
                <Swiper
                    modules={[Navigation]}
                    navigation={{
                        prevEl: ".swiper-button-prev-custom",
                        nextEl: ".swiper-button-next-custom",
                    }}
                    spaceBetween={16}
                    slidesPerView={1.1}
                    breakpoints={{
                        0: { slidesPerView: 1.1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3.2 },
                    }}
                >
                    {trips.map((_, i) => (
                        <SwiperSlide key={i}>
                            <div className="relative rounded-2xl overflow-hidden h-[320px] lg:h-[384px] text-white">

                                {/* Image */}
                                <img
                                    src="/bg.png"
                                    alt="trip"
                                    className="absolute inset-0 w-full h-full object-cover"
                                />

                                {/* Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                                {/* Discount */}
                                <span className="absolute top-2 right-2 flex items-center gap-1 bg-orange-500 text-xs px-3 py-2 rounded-2xl font-gilroy-medium">
                                    <span >
                                        <img
                                            src={"/iconamoon_discount-fill.svg"}
                                            className="w-4 h-4"
                                        />
                                    </span> 25% OFF
                                </span>


                                {/* Content */}
                                <div className="absolute bottom-0 p-4 w-full">

                                    {/* Duration */}
                                    <span className=" bg-black/40 text-sm px-3 py-2 rounded-lg font-gilroy-medium">
                                        6N / 7D
                                    </span>
                                    <h4 className="font-gilroy-semibold text-base md:text-lg mb-1 mt-2">
                                        Shimla, Kullu, Manali in Winters
                                    </h4>
                                    <p className="text-sm font-gilroy-medium text-peach mb-2">
                                        Himachal Pradesh
                                    </p>

                                    {/* Icons row */}
                                    <div className="flex justify-between text-[10px] gap-2 text-peach mb-2 font-gilroy-medium">
                                        <span className="flex flex-col flex-1 items-center gap-1 bg-black/40 p-2 rounded-lg"><img src="/mdi_flight.svg" className="w-4 h-4" /> 2 Flights</span>
                                        <span className="flex flex-col flex-1 items-center gap-1 bg-black/40 p-2 rounded-lg"><img src="/lucide_hotel.svg" className="w-4 h-4" /> 1 Hotel</span>
                                        <span className="flex flex-col flex-1 items-center gap-1 bg-black/40 p-2 rounded-lg"><img src="/tabler_trekking.svg" className="w-4 h-4" /> 5 Activities</span>
                                        <span className="flex flex-col flex-1 items-center gap-1 bg-black/40 p-2 rounded-lg"><img src="/mdi_cab.svg" className="w-4 h-4" /> Transfers</span>
                                    </div>

                                    {/* Price */}
                                    <div className="flex items-center gap-2 font-gilroy-medium">
                                        <span className="text-[28px] font-gilroy-semibold text-white">
                                            <span className="text-primary-orange">₹</span> 5,999
                                        </span>
                                        <span className="text-sm line-through text-peach">
                                            12,999
                                        </span>
                                        <span className="text-sm text-peach">
                                            Per Person
                                        </span>
                                    </div>

                                    <p className="text-sm text-peach font-gilroy-medium">
                                        Includes taxes
                                    </p>
                                </div>

                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>
        </section>
    );
};

export default TrendingPackages;
