"use client";

import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Users, Building2, IndianRupee } from "lucide-react";

import "swiper/css";

const resorts = [
  {
    name: "Justa Ssatva Resort",
    location: "Udaipur, Rajasthan",
    img: "/destination-wedding/destination1.png",
  },
  {
    name: "jüSTa Birding Resort & Spa",
    location: "Dharamshala, Himachal Pradesh",
    img: "/destination-wedding/destination2.png",
  },
  {
    name: "jüSTa Brij Bhoomi Resort",
    location: "Nathdwara, Rajasthan",
    img: "/destination-wedding/destination3.png",
  },
  {
    name: "Royal Palace Resort",
    location: "Jaipur, Rajasthan",
    img: "/destination-wedding/destination3.png",
  },
];

export default function Destinations() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  const TOTAL_DOTS = 4;

  return (
    <section className="relative py-28 bg-white overflow-hidden">
      {/* ⭐ LEFT FLOWER — FIXED SIZE */}
      <img
        src="/destination-wedding/about-flower-left.png"
        className="
          absolute
          bottom-0
          left-0
          w-[300px]
          opacity-40
          pointer-events-none
          select-none
          hidden md:block
        "
      />

      {/* ⭐ RIGHT FLOWER — LIGHTER */}
      <img
        src="/destination-wedding/flower.svg"
        className="
          absolute
          right-0
          top-0
          w-[420px]
          opacity-[0.05]
          scale-x-[-1]
          pointer-events-none
        "
      />

      <div className="relative z-10 max-w-[1240px] mx-auto px-6">
        {/* Heading */}
        <h2 className="text-center font-gilroy-bold text-[#9B2C5D] text-3xl md:text-5xl mb-4">
          Discover Your Dream Wedding Destinations
        </h2>

        <p className="text-center text-[#16242A] mb-16">
          Find Your Perfect Wedding Spot
        </p>

        {/* ⭐ SWIPER */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={28}
          slidesPerView={1.15}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          navigation={{
            nextEl: ".dest-next",
            prevEl: ".dest-prev",
          }}
          breakpoints={{
            640: { slidesPerView: 1.35 },
            768: { slidesPerView: 2.05 },
            1024: { slidesPerView: 3.15 }, // ⭐ Figma tablet feel
            1280: { slidesPerView: 3.25 }, // ⭐ Half card visible desktop
          }}
        >
          {resorts.map((r, i) => (
            <SwiperSlide key={i}>
              <ResortCard r={r} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* ⭐ CONTROLS */}
        <div className="flex justify-center items-center gap-10 mt-14">
          {/* LEFT ARROW */}
          <button className="dest-prev text-[28px] text-[#667085] hover:text-[#9B2C5D] transition">
            ←
          </button>

          {/* DOTS */}
          <div className="flex gap-3">
            {[...Array(TOTAL_DOTS)].map((_, i) => (
              <button
                key={i}
                onClick={() => swiperRef.current?.slideTo(i)}
                className={`
                  w-[6px] h-[6px] rounded-full transition
                  ${
                    i === activeIndex
                      ? "bg-[#F97316] scale-125"
                      : "bg-[#D0D5DD]"
                  }
                `}
              />
            ))}
          </div>

          {/* RIGHT ARROW */}
          <button className="dest-next text-[28px] text-[#667085] hover:text-[#9B2C5D] transition">
            →
          </button>
        </div>

        {/* ⭐ EXPLORE BUTTON */}
        <div className="flex justify-center mt-14">
          <button
            className="
            bg-[#9B2C5D]
            text-white
            px-10 py-4
            rounded-xl
            font-medium
            hover:bg-[#7c224b]
            transition
          "
          >
            Explore More
          </button>
        </div>
      </div>
    </section>
  );
}

function ResortCard({ r }) {
  return (
    <div
      className="
      bg-[#FFF4F9]
      rounded-[24px]
      p-4
      shadow-[0_8px_24px_rgba(0,0,0,0.06)]
    "
    >
      {/* Image */}
      <img
        src={r.img}
        className="w-full h-[220px] object-cover rounded-[18px]"
      />

      {/* Content */}
      <div className="p-4">
        <h3 className="font-gilroy-semibold text-[18px] text-[#16242A]">
          {r.name}
        </h3>

        <p className="text-sm text-[#667085] mt-1">{r.location}</p>

        {/* ⭐ ICON ROW — FIGMA STYLE */}
        <div className="flex items-center gap-6 mt-4 text-sm text-[#475467]">
          <div className="flex items-center gap-2">
            <Users size={16} strokeWidth={1.5} />
            <span>Upto 150</span>
          </div>

          <div className="flex items-center gap-2">
            <Building2 size={16} strokeWidth={1.5} />
            <span>30 Rooms</span>
          </div>
        </div>

        {/* Booking Row */}
        <div className="flex justify-between items-center mt-5">
          <span className="text-[#9D255A] text-sm flex items-center gap-1">
            <IndianRupee size={18} />0 Booking Fees
          </span>

          <button
            className="
            bg-[#9B2C5D]
            text-white
            px-5 py-2
            rounded-lg
            text-sm
            hover:bg-[#7c224b]
            transition
          "
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}
