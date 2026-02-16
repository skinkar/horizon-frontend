"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

interface Hotel {
  id: string;
  image: string;
  name: string;
  location: string;
  price: number;
  bookingFees: number;
}

interface Props {
  hotels: Hotel[];
}

export default function PopularHotels({ hotels }: Props) {
  return (
    <section className="w-full  py-16 relative overflow-hidden">
      {/* RIGHT-ALIGNED CONTAINER */}
<div className=" lg:w-[1281px] 2xl:w-[1481px]  2xl:ml-[400px]   mx-auto xl:ml-[159px] px-4 ">        {/* TITLE */}
        <h2
          className="
  text-[26px] 
  md:text-[42px]
  leading-[120%] 
  md:leading-[100%]
  tracking-[-0.02em] 
  md:tracking-[-0.04em]
  font-gilroy-semibold
  text-[#16242A]
  mb-6 md:mb-10
"
        >
          Other Popular Hotels in this area
        </h2>

        {/* Custom Arrows */}
        <div className="absolute -ml-4 top-[55%] z-10">
          <div className="swiper-button-prev-custom bg-[#FF6A00] w-10 h-10 rounded-full flex items-center justify-center text-white shadow-md cursor-pointer">
            <ChevronLeft size={18} />
          </div>
        </div>

        <div className="absolute right-[40px] top-[55%] z-10"></div>
        <Swiper
          modules={[Navigation]}
          spaceBetween={24}
          slidesPerView={1.1}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          breakpoints={{
            640: {
              slidesPerView: 1.4,
            },
            768: {
              slidesPerView: 1.8,
            },
            1024: {
              slidesPerView: 2.2,
            },
            1280: {
              slidesPerView: 2.6,
            },
            1440: {
              slidesPerView: 3.2, // 👈 desktop perfect half cut
            },
          }}
        >
          {hotels.map((hotel) => (
            <SwiperSlide key={hotel.id}>
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-3">
                {/* IMAGE (Exact Figma Feel) */}
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-full h-[204px] object-cover rounded-lg"
                />

                {/* CONTENT */}
                <div className="p-2 pt-4">
                  <h3 className="text-[18px] font-semibold text-[#16242A]">
                    {hotel.name}
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">{hotel.location}</p>

                  <div className="flex justify-between items-end mt-6">
                    <div>
                      <div className="text-[22px] font-semibold text-[#16242A]">
                        ₹ {hotel.price.toLocaleString()}
                      </div>

                      <p className="text-xs text-gray-500 mt-1">
                        Includes taxes and fees
                      </p>
                    </div>

                    <div className="text-right">
                      <p className="text-sm text-[#FF6A00] mb-2">
                        ₹ {hotel.bookingFees} Booking Fees
                      </p>

                      <button className="bg-[#FF6A00] hover:bg-orange-600 text-white px-5 py-2 rounded-lg text-sm font-medium transition">
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
