"use client";

import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";

const blogs = [
  {
    title: "11 Beautiful Wedding Venues In France",
    desc: "Soak in the charm of whitewashed streets & unforgettable luxury experiences.",
    img: "/destination-wedding/blog1.png",
    date: "1 day ago",
    author: "Roshan",
    avatar: "/destination-wedding/avatar.jpg",
  },
  {
    title: "11 Beautiful Wedding Venues In France",
    desc: "Master the art of smart planning with tips for stress-free destination weddings.",
    img: "/destination-wedding/blog2.png",
    date: "3 days ago",
    author: "Roshan",
    avatar: "/destination-wedding/avatar.jpg",
  },
  {
    title: "11 Beautiful Wedding Venues In France",
    desc: "A perfect weekend mix of riverside calm and royal destination celebrations.",
    img: "/destination-wedding/blog3.png",
    date: "09 May 2025",
    author: "Roshan",
    avatar: "/destination-wedding/avatar.jpg",
  },
];

export default function BlogIdeas() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<any>(null);
  const TOTAL_DOTS = 4;

  return (
    <section className="relative py-28 bg-white overflow-hidden">
      {/* ===== Floral BG ===== */}
      <img
        src="/destination-wedding/flower-right.svg"
        className="
    absolute right-0 top-[-50px]
    w-[120px]        /* mobile */
    md:w-[180px]     /* tablet */
    lg:w-[220px]     /* desktop */
    opacity-50
    pointer-events-none
  "
      />

      <div className="relative z-10 max-w-[1320px] mx-auto px-6">
        {/* Heading */}
        <h2 className="text-center font-gilroy-bold text-[#9B2C5D] text-3xl md:text-5xl mb-4">
          Ideas That Inspire, Advice You Can Trust
        </h2>

        <p className="text-center text-[#475467] mb-16 max-w-[720px] mx-auto">
          Handpicked Ideas, Venues & Expert Advice For Your Dream Destination
          Wedding.
        </p>

        {/* ===== Desktop Grid ===== */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {blogs.map((blog, i) => (
            <BlogCard key={i} blog={blog} />
          ))}
        </div>

        {/* ===== Mobile Slider ===== */}
        <div className="md:hidden">
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1.1}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          >
            {blogs.map((blog, i) => (
              <SwiperSlide key={i}>
                <BlogCard blog={blog} mobile />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Controls */}
          <div className="flex justify-center items-center gap-8 mt-10">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="text-[26px] text-[#667085]"
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
              className="text-[26px] text-[#667085]"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function BlogCard({ blog, mobile = false }: any) {
  return (
    <div className="bg-[#FBEFF4] rounded-[24px] p-4">
      {/* Image */}
      <div className="rounded-[18px] overflow-hidden">
        <img
          src={blog.img}
          className={`w-full object-cover ${mobile ? "h-[220px]" : "h-[240px]"}`}
        />
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Meta Row */}
        <div className="flex justify-between items-center text-sm text-[#667085] mb-3">
          <span>{blog.date}</span>

          <div className="flex items-center gap-2">
            <img
              src={blog.avatar}
              className="w-7 h-7 rounded-full object-cover"
            />
            <span>{blog.author}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="font-gilroy-semibold text-[18px] text-[#16242A] mb-2">
          {blog.title}
        </h3>

        {/* Desc */}
        <p className="text-sm text-[#667085] mb-4 line-clamp-2">{blog.desc}</p>

        {/* Read More */}
        <button className="text-[#9B2C5D] font-medium text-sm">
          Read More
        </button>
      </div>
    </div>
  );
}
