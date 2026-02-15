"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import {
  BedDouble,
  Maximize2,
  Waves,
  ImageIcon,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

interface Room {
  id: string;
  title: string;
  images: string[];
  size: string;
  view: string;
  bed: string;
}

interface RoomsSectionProps {
  rooms: Room[];
}

export default function RoomsSection({ rooms }: RoomsSectionProps) {
  return (
    <section className="flex justify-center overflow-hidden">
      <div className="max-w-[1115px] w-full px-4">
        {/* Heading */}
        <h2 className="text-[28px] md:text-[42px] font-semibold text-[#16242A] mb-6 md:mb-8">
          Rooms
        </h2>

        <div className="relative bg-white rounded-[10px] px-4 md:px-6 py-6 md:py-8">
          {/* Custom Arrows (Desktop Only) */}
          <button className="rooms-prev hidden md:flex absolute -left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 items-center justify-center">
            <ChevronLeft />
          </button>

          <button className="rooms-next hidden md:flex absolute -right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 items-center justify-center">
            <ChevronRight />
          </button>

          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={3}
            navigation={{
              nextEl: ".rooms-next",
              prevEl: ".rooms-prev",
            }}
            breakpoints={{
              0: { slidesPerView: 1 }, // Mobile full width
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {rooms.map((room) => (
              <SwiperSlide key={room.id}>
                <RoomCard room={room} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="border-t border-black mt-12 md:mt-16" />
      </div>
    </section>
  );
}

/* ================= ROOM CARD ================= */

function RoomCard({ room }: { room: Room }) {
  return (
    <div className="md:h-[360px] bg-white border border-[#E4E7EC] rounded-[10px] p-3 md:p-[10px]">
      {/* Image */}
      <div className="relative">
        <img
          src={room.images[0]}
          alt={room.title}
          className="w-full h-[190px] md:h-[222px] rounded-[8px] object-cover"
        />

        <div className="absolute bottom-3 md:bottom-4 right-3 md:right-4 bg-[#000000CC] backdrop-blur-[4px] text-white text-xs md:text-sm px-3 md:px-4 py-1.5 md:py-2 rounded-[5px] flex items-center gap-1">
          <ImageIcon size={14} />
          {room.images.length - 1}+
        </div>
      </div>

      <div className="mt-4">
        <h3 className="text-[16px] md:text-[20px] font-semibold text-[#16242A] mb-3 md:mb-4">
          {room.title}
        </h3>

        <div className="flex justify-between text-xs md:text-sm text-[#344054] mb-4">
          <Feature icon={<Maximize2 size={16} />} label={room.size} />
          <Feature icon={<Waves size={16} />} label={room.view} />
          <Feature icon={<BedDouble size={16} />} label={room.bed} />
        </div>

        <button className="text-[14px] md:text-[18px] font-semibold text-[#FF6A00]">
          More Details
        </button>
      </div>
    </div>
  );
}

function Feature({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2">
      {icon}
      <span>{label}</span>
    </div>
  );
}
