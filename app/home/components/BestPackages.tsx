"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import { ArrowRight, Heart, Timer } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CenteredCTA } from "@/app/common/atom/btn"

const tabs = [
    "Deals",
    "Hotels",
    "Packages",
    "Cruise",
    "Cabs",
    "Activities",
    "Community Trips",
    "Trekking",
]

const cards = [
    {
        type: "Hotel",
        title: "Lemon Tree Hotel",
        location: "New Delhi",
        price: "5,999",
        oldPrice: "12,999",
        image: "/home/card1.png",
        timer: "Ends in 11h : 32m : 45s",
    },
    {
        type: "Package",
        title: "Shimla, Kullu & Manali",
        location: "Manali",
        price: "10,999",
        oldPrice: "12,999",
        image: "/home/card2.png",
        timer: "Ends in 11h : 32m : 45s",
        meta: "6N/7D",
    },
    {
        type: "Cruise",
        title: "Cordelia Cruise",
        location: "Chennai – Chennai",
        price: "10,999",
        oldPrice: "12,999",
        image: "/home/card3.png",
        timer: "Ends in 11h : 32m",
        meta: "6N/7D",
    },
    {
        type: "Cruise",
        title: "Cordelia Cruise",
        location: "Chennai – Chennai",
        price: "10,999",
        oldPrice: "12,999",
        image: "/home/card1.png",
        timer: "Ends in 11h : 32m",
        meta: "6N/7D",
    },
]

export default function BestPackages() {
    return (
        <section className="w-full py-12 md:py-16">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <h2 className="text-3xl lg:text-4xl font-gilroy-semibold text-center mb-3 title-heading">
                    Explore Best Packages
                </h2>
                <p className="text-sm md:text-base font-gilroy-medium text-center mb-8 sub-title">
                    Embark on a mesmerizing journey to explore the top destinations
                </p>

                <div className="flex flex-wrap justify-center items-center mb-8 gap-3 md:gap-8 text-xs md:text-sm font-gilroy-medium pb-2 md:pb-0">
                    <div className="bg-primary-orange text-white w-auto min-w-max md:w-[120px] px-6 md:px-0 h-[48px] md:h-[56px] rounded-lg flex justify-center items-center whitespace-nowrap">
                        All
                    </div>
                    <div className="bg-white text-black w-auto min-w-max md:w-[120px] px-6 md:px-0 h-[48px] md:h-[56px] rounded-lg flex justify-center items-center whitespace-nowrap">
                        Popular
                    </div>
                    <div className="bg-white text-black w-auto min-w-max md:w-[120px] px-6 md:px-0 h-[48px] md:h-[56px] rounded-lg flex justify-center items-center whitespace-nowrap">
                        Trending
                    </div>
                    <div className="bg-white text-black w-auto min-w-max md:w-[120px] px-6 md:px-0 h-[48px] md:h-[56px] rounded-lg flex justify-center items-center whitespace-nowrap">
                        Featured
                    </div>
                    <div className="bg-white text-black w-auto min-w-max md:w-[120px] px-6 md:px-0 h-[48px] md:h-[56px] rounded-lg flex justify-center items-center whitespace-nowrap">
                        Top Visited
                    </div>
                </div>

                {/* Tabs */}
                <div className="bg-none p-0 md:p-4 shadow-none border-none max-w-6xl w-full mx-auto">

                    {/* Carousel */}
                    <div className="relative">
                        <Swiper
                            modules={[Navigation]}
                            spaceBetween={16}
                            navigation={{
                                nextEl: ".deals-next",
                            }}
                            breakpoints={{
                                0: { slidesPerView: 1 },
                                640: { slidesPerView: 1.5 },
                                768: { slidesPerView: 2 },
                                1024: { slidesPerView: 3 },
                            }}
                            className="overflow-visible md:overflow-hidden!"
                        >
                            {cards.map((card, idx) => (
                                <SwiperSlide key={idx}>
                                    <div className="relative h-[360px] md:h-[420px] rounded-2xl overflow-hidden">
                                        <img
                                            src={card.image}
                                            alt={card.title}
                                            className="absolute inset-0 w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                                        {/* Timer */}
                                        <button className="absolute top-4 right-4 z-10 bg-white/20 backdrop-blur-md p-4 md:p-6 rounded-xl">
                                            <Heart className="w-6 h-6 text-white" />
                                        </button>


                                        {/* Content */}
                                        <div className="absolute bottom-0 p-4 md:p-5 text-white w-full font-gilroy-medium">
                                            <span className="text-xs bg-black/50 px-3 py-1 rounded-full inline-block mb-2">
                                                {card.type}
                                                {card.meta && <span className="ml-2">{card.meta}</span>}
                                            </span>
                                            <h3 className="text-lg md:text-xl font-semibold line-clamp-1">{card.title}</h3>
                                            <p className="text-xs md:text-sm opacity-80 mb-3 truncate">
                                                {card.location}
                                            </p>

                                            <div className="flex items-end gap-2">
                                                <span className="text-xl md:text-2xl font-semibold text-white font-gilroy-semibold">
                                                    <span className="text-orange-400">₹</span> {card.price}
                                                </span>
                                                <span className="text-xs md:text-sm line-through opacity-60">
                                                    {card.oldPrice}
                                                </span>
                                                <span className="text-xs md:text-sm">Per Person</span>
                                            </div>
                                            <p className="text-[10px] md:text-xs opacity-70 mt-1">Includes taxes</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* Arrow */}
                        <button className="deals-next absolute md:right-[-20px] right-[-10px] top-1/2 -translate-y-1/2  md:w-12 md:h-12 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center shadow-lg z-10">
                            <ArrowRight className="text-white w-4 h-4 md:w-6 md:h-6" />
                        </button>
                    </div>
                    <CenteredCTA label="Explore More" />
                </div>
            </div>
        </section>
    )
}
