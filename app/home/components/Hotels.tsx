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

export default function Hotels() {
    return (
        <section className="w-full py-12">
            <div className="max-w-7xl mx-auto px-4 md:px-8 relative">
                <h2 className="text-3xl md:text-4xl font-gilroy-semibold text-center mb-3 title-heading">
                    Top Budget-Friendly Hotels
                </h2>
                <p className="md:text-base text-sm font-gilroy-medium sub-title text-center mb-8">
                    Explore Our Hand-Curated Selection of Budget Hotels Offering Unbeatable Value and Comfort
                </p>

                <div className="absolute inset-0 pointer-events-none sm:hidden
  bg-[radial-gradient(circle_at_center,rgba(255,140,0,0.45)_0%,rgba(255,140,0,0.25)_25%,rgba(255,140,0,0.1)_45%,transparent_65%)]" />



                {/* Tabs */}
                <div className="bg-none shadow-none border-none max-w-6xl w-full mx-auto">

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
                                    <div className="bg-white rounded-lg overflow-hidden transition-shadow">

                                        {/* Image */}
                                        <div className="relative h-[200px] p-3">
                                            <img
                                                src={card.image}
                                                alt={card.title}
                                                className="w-full h-full object-cover rounded-lg"
                                            />

                                            {/* Wishlist */}
                                            <button className="absolute top-6 right-6 bg-black/40 p-4 rounded-xl">
                                                <Heart className="h-6 w-6 text-white" />
                                            </button>
                                        </div>

                                        {/* Content */}
                                        <div className="p-3">
                                            <h3 className="text-lg font-gilroy-semibold text-gray-900">
                                                {card.title}
                                            </h3>

                                            <p className="text-sm text-gray-500 mb-3">
                                                {card.location}
                                            </p>

                                            <div className="flex items-end justify-between">
                                                {/* Price */}
                                                <div>
                                                    <div className="flex items-end gap-1">
                                                        <span className="text-orange-500 text-xl font-semibold">₹</span>
                                                        <span className="text-2xl font-gilroy-semibold text-gray-900">
                                                            {card.price}
                                                        </span>
                                                        <span className="text-sm text-gray-500 ml-1">
                                                            Per Person
                                                        </span>
                                                    </div>
                                                    <p className="text-xs text-gray-400 mt-1">
                                                        Includes taxes
                                                    </p>
                                                </div>

                                                {/* CTA */}
                                                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg text-sm font-gilroy-medium">
                                                    Book Now
                                                </Button>
                                            </div>
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
