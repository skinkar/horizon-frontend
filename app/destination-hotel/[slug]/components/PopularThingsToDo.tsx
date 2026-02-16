"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, Clock } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

interface Activity {
  id: string;
  image: string;
  title: string;
  duration: string;
  distance: string;
  from: string;
}

interface PopularThingsProps {
  activities: Activity[];
}

export default function PopularThingsToDo({ activities }: PopularThingsProps) {
  return (
    <section className="w-full py-16 relative overflow-hidden">

      {/* SAME CONTAINER AS OTHER SECTIONS */}
      <div className="lg:w-[1281px] 2xl:w-[1481px] 2xl:ml-[400px] mx-auto xl:ml-[159px] px-4">

        {/* TITLE */}
        <h2 className="text-[26px] md:text-[42px] leading-[120%] md:leading-[100%] tracking-[-0.02em] md:tracking-[-0.04em] font-gilroy-semibold text-[#16242A] mb-6 md:mb-10">
          Popular Things To Do in this area
        </h2>

        {/* LEFT ARROW */}
        <div className="absolute -ml-4 top-[55%] z-10">
          <div className="swiper-button-prev-activity bg-[#FF6A00] w-10 h-10 rounded-full flex items-center justify-center text-white shadow-md cursor-pointer">
            <ChevronLeft size={18} />
          </div>
        </div>

        <Swiper
          modules={[Navigation]}
          spaceBetween={24}
          slidesPerView={1.1}
          navigation={{
            prevEl: ".swiper-button-prev-activity",
          }}
          breakpoints={{
            640: { slidesPerView: 1.4 },
            768: { slidesPerView: 1.8 },
            1024: { slidesPerView: 2.2 },
            1280: { slidesPerView: 2.6 },
            1440: { slidesPerView: 3.2 },
          }}
        >
          {activities.map((activity) => (
            <SwiperSlide key={activity.id}>
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-3">

                {/* IMAGE (MATCHED HEIGHT) */}
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-[204px] object-cover rounded-lg"
                />

                {/* CONTENT */}
                <div className="p-2 pt-4">

                  <h3 className="text-[18px] font-semibold text-[#16242A]">
                    {activity.title}
                  </h3>

                  {/* Duration */}
                  <div className="flex items-center gap-2 text-sm text-gray-500 mt-2">
                    <Clock size={16} />
                    {activity.duration}
                  </div>

                  {/* Distance */}
                  <div className="mt-6">
                    <p className="text-sm font-medium text-[#16242A]">
                      {activity.distance}
                    </p>

                    <p className="text-sm text-gray-500">
                      From {activity.from}
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
