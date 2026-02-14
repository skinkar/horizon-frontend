"use client"

import { useState, useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"

import "swiper/css"

const places = [
  { name: "Maharashtra", img: "/destination-wedding/circle1.png" },
  { name: "Goa", img: "/destination-wedding/circle2.png" },
  { name: "Rajasthan", img: "/destination-wedding/circle3.png" },
  { name: "Himachal Pradesh", img: "/destination-wedding/circle4.png" },
  { name: "Uttarakhand", img: "/destination-wedding/circle5.png" },
  { name: "New Delhi", img: "/destination-wedding/circle6.png" },
  { name: "Uttar Pradesh", img: "/destination-wedding/circle7.png" },
  { name: "Kerala", img: "/destination-wedding/circle8.png" },
  { name: "Karnataka", img: "/destination-wedding/circle9.png" },
]

export default function DreamPlaces() {

  const [activeIndex, setActiveIndex] = useState(0)
  const swiperRef = useRef<any>(null)

  const TOTAL_DOTS = 4

  return (
    <section className="relative py-24 bg-white overflow-hidden">

      {/* ===== Background Decoration ===== */}
      <img
        src="/destination-wedding/flower.svg"
        className="absolute left-0 bottom-0 w-[420px] opacity-[0.06] pointer-events-none"
      />

      <img
        src="/destination-wedding/flower.svg"
        className="absolute right-0 top-0 w-[420px] opacity-[0.06] scale-x-[-1] pointer-events-none"
      />

      <div className="relative z-10 max-w-[1320px] mx-auto px-6">

        {/* ===== Heading ===== */}
        <h2 className="text-center font-gilroy-bold text-[#9B2C5D] text-3xl md:text-5xl mb-4">
          Dreaming Of A Perfect Place?
        </h2>

        <p className="text-center text-[#475467] mb-16 max-w-[720px] mx-auto">
          Explore Magical Wedding Venues Across India’s Most-Loved Destinations
        </p>

        {/* ===== Desktop Grid ===== */}
        <div className="hidden md:grid grid-cols-5 gap-y-12 gap-x-10 justify-items-center">

          {places.map((p, i) => (
            <CircleCard key={i} place={p} />
          ))}

          {/* View More Card */}
          <ViewMoreCard />

        </div>

        {/* ===== Mobile Slider ===== */}
        <div className="md:hidden">

          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1.6}
            centeredSlides={false}

            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}

            navigation={{
              nextEl: ".dream-next",
              prevEl: ".dream-prev",
            }}
          >
            {[...places, { name: "More Places", img: "/destination-wedding/more.png", more: true }].map((p:any, i) => (
              <SwiperSlide key={i}>
                {p.more ? <ViewMoreCard mobile /> : <CircleCard place={p} mobile />}
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Controls */}
          <div className="flex justify-center items-center gap-8 mt-10">

            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="dream-prev text-[26px] text-[#667085]"
            >
              ←
            </button>

            <div className="flex gap-3">
              {[...Array(TOTAL_DOTS)].map((_, i) => (
                <div
                  key={i}
                  className={`w-[6px] h-[6px] rounded-full transition ${
                    i === activeIndex % TOTAL_DOTS
                      ? "bg-[#F97316] scale-125"
                      : "bg-[#D0D5DD]"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="dream-next text-[26px] text-[#667085]"
            >
              →
            </button>

          </div>

        </div>

      </div>
    </section>
  )
}

function CircleCard({ place, mobile = false }: any) {
  return (
    <div className="text-center group cursor-pointer">

      <div className={`
        relative overflow-hidden rounded-full
        ${mobile ? "w-[150px] h-[150px]" : "w-[180px] h-[180px]"}
      `}>
        <img
          src={place.img}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
        />
      </div>

      <p className="mt-4 font-gilroy-semibold text-[#9B2C5D] text-sm md:text-base">
        {place.name}
      </p>

    </div>
  )
}

function ViewMoreCard({ mobile = false }: any) {
  return (
    <div className="text-center group cursor-pointer">
 <img
  src="/destination-wedding/dream-flower.svg"
  className="
    absolute
    left-[-290]
    top-0
    w-[420px]
    opacity-100
    z-10
  "
/>



      <div
        className={`
          relative overflow-hidden rounded-full
          ${mobile ? "w-[150px] h-[150px]" : "w-[180px] h-[180px]"}
        `}
      >

        {/* Background Image (Like Figma) */}
        <img
          src="/destination-wedding/view more.png"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/45" />

        {/* Button Center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <button className="
            bg-[#9B2C5D]
            text-white
            px-5 py-2
            rounded-lg
            text-sm
            shadow-lg
            hover:bg-[#7c224b]
            transition
          ">
            View More
          </button>
        </div>

      </div>

      {/* Label */}
      <p className="mt-4 font-gilroy-semibold text-[#9B2C5D] text-sm md:text-base">
        More Places
      </p>

    </div>
  )
}
