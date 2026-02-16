"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

interface Restaurant {
  id: string;
  image: string;
  name: string;
  cuisines: string;
  distance: string;
  from: string;
}

interface PopularRestaurantsProps {
  restaurants: Restaurant[];
}

export default function PopularRestaurants({ restaurants }: PopularRestaurantsProps) {
  return (
    <section className="w-full py-16 relative overflow-hidden">

      {/* SAME CONTAINER BEHAVIOR AS HOTELS */}
      <div className="lg:w-[1281px] 2xl:w-[1481px] 2xl:ml-[400px] mx-auto xl:ml-[159px] px-4">

        {/* TITLE (MATCHED TYPOGRAPHY) */}
        <h2 className="text-[26px] md:text-[42px] leading-[120%] md:leading-[100%] tracking-[-0.02em] md:tracking-[-0.04em] font-gilroy-semibold text-[#16242A] mb-6 md:mb-10">
          Popular Restaurants in this area
        </h2>

        {/* LEFT ARROW */}
        <div className="absolute -ml-4 top-[55%] z-10">
          <div className="swiper-button-prev-rest bg-[#FF6A00] w-10 h-10 rounded-full flex items-center justify-center text-white shadow-md cursor-pointer">
            <ChevronLeft size={18} />
          </div>
        </div>


        <Swiper
          modules={[Navigation]}
          spaceBetween={24}
          slidesPerView={1.1}
          navigation={{
            nextEl: ".swiper-button-next-rest",
            prevEl: ".swiper-button-prev-rest",
          }}
          breakpoints={{
            640: { slidesPerView: 1.4 },
            768: { slidesPerView: 1.8 },
            1024: { slidesPerView: 2.2 },
            1280: { slidesPerView: 2.6 },
            1440: { slidesPerView: 3.2 },
          }}
        >
          {restaurants.map((restaurant) => (
            <SwiperSlide key={restaurant.id}>
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-3">

                {/* IMAGE (MATCH HOTELS HEIGHT STYLE) */}
                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="w-full h-[204px] object-cover rounded-lg"
                />

                {/* CONTENT */}
                <div className="p-2 pt-4">

                  <h3 className="text-[18px] font-semibold text-[#16242A]">
                    {restaurant.name}
                  </h3>

                  <p className="text-sm text-gray-500 mt-2">
                    Cuisines : {restaurant.cuisines}
                  </p>

                  <div className="mt-6">
                    <p className="text-sm font-medium text-[#16242A]">
                      {restaurant.distance}
                    </p>

                    <p className="text-sm text-gray-500">
                      From {restaurant.from}
                    </p>
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
