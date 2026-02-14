"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import { Activity, ArrowRight, Car, Hotel, Plane, Timer } from "lucide-react"
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
        timer: "Early Bird Offer",
    },
    {
        type: "Package",
        title: "Shimla, Kullu & Manali",
        location: "Manali",
        price: "10,999",
        oldPrice: "12,999",
        image: "/home/card2.png",
        timer: "Early Bird Offer",
        meta: "6N/7D",
    },
    {
        type: "Cruise",
        title: "Cordelia Cruise",
        location: "Chennai – Chennai",
        price: "10,999",
        oldPrice: "12,999",
        image: "/home/card3.png",
        timer: "Early Bird Offer",
        meta: "6N/7D",
    },
    {
        type: "Cruise",
        title: "Cordelia Cruise",
        location: "Chennai – Chennai",
        price: "10,999",
        oldPrice: "12,999",
        image: "/home/card1.png",
        timer: "Early Bird Offer",
        meta: "6N/7D",
    },
]

export default function EarlyBirdOffers() {
    return (
        <section className="w-full py-12">
            <div className="max-w-7xl mx-auto md:px-8 px-4">
                <h2 className="text-3xl md:text-4xl font-gilroy-semibold text-center mb-3 title-heading">
                    Explore Our Early Bird Offers
                </h2>
                <p className="text-sm md:text-base font-gilroy-medium text-center mb-8 sub-title">
                    Grab our early bird offer deals and enjoy your vacation with multiple benefits
                </p>

                {/* Tabs */}
                <div className="bg-none p- shadow-none border-none max-w-6xl w-full mx-auto">

                    {/* Carousel */}
                    <div className="relative">
                        <Swiper
                            modules={[Navigation]}
                            spaceBetween={16}
                            slidesPerView={3}
                            navigation={{
                                nextEl: ".deals-next",
                            }}
                            breakpoints={{
                                0: { slidesPerView: 1 },
                                768: { slidesPerView: 2 },
                                1024: { slidesPerView: 3 },
                            }}
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
                                        <div className="absolute top-4 right-4 flex items-center gap-1 bg-orange-500 text-white text-xs px-4 py-2 rounded-lg">
                                            <span><Timer className="h-[1em] w-[1em]" /></span>{card.timer}
                                        </div>

                                        {/* Content */}
                                        <div className="absolute bottom-0 p-5 text-white w-full font-gilroy-medium">
                                            <span className="text-xs bg-black/50 px-3 py-1 rounded-full inline-block mb-2">
                                                {card.type}
                                                {card.meta && <span className="ml-2">{card.meta}</span>}
                                            </span>
                                            <h3 className="text-lg md:text-xl font-semibold">{card.title}</h3>
                                            <p className="text-sm text-peach mb-3">
                                                {card.location}
                                            </p>

                                            {/* Icons row */}
                                            <div className="flex gap-1 justify-between mb-2">
                                                <Icon label="2 Flights" icon={<Plane className="text-primary-orange" size={14} />} />
                                                <Icon label="11 Hotels" icon={<Hotel className="text-primary-orange" size={14} />} />
                                                <Icon label="5 Activities" icon={<Activity className="text-primary-orange" size={14} />} />
                                                <Icon label="4 Transfers" icon={<Car className="text-primary-orange" size={14} />} />
                                            </div>

                                            <div className="flex items-end gap-2">
                                                <span className="text-2xl font-semibold text-white font-gilroy-semibold">
                                                    <span className="text-primary-orange">₹</span> {card.price}
                                                </span>
                                                <span className="text-sm text-peach">
                                                    <span className="line-through">{card.oldPrice}</span> Per Person
                                                </span>
                                            </div>
                                            <p className="text-xs text-peach mt-1">Includes taxes</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* Arrow */}
                        <button className="deals-next absolute md:right-[-20px] right-[-10px] top-1/2 -translate-y-1/2  md:w-12 md:h-12 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center shadow-lg z-10">
                            <ArrowRight className="text-white w-4 h-4 md:w-6 md:h-6" />
                        </button>
                    </div>
                    <CenteredCTA label="Explore More" />
                </div>
            </div>
        </section>
    )
}

function Icon({
    icon,
    label,
}: {
    icon: React.ReactNode;
    label: string;
}) {
    return (
        <span className="flex flex-col items-center gap-1 text-white bg-black/40 backdrop-blur rounded-xl w-full py-3 text-xs">
            {icon}
            {label}
        </span>
    );
}
