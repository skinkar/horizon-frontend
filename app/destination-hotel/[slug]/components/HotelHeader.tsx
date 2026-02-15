"use client";

import {
  Star,
  Users,
  BedDouble,
  Wifi,
  Car,
  Snowflake,
  Waves,
  Plane,
  Train,
  Utensils,
  Building2,
} from "lucide-react";

interface HotelHeaderProps {
  hotel: {
    name: string;
    starRating: number;
    address: string;
  };
}

export default function HotelHeader({ hotel }: HotelHeaderProps) {
  return (
    <div className="w-full max-w-[1122px] mx-auto px-4 lg:px-0 py-6">

      {/* TOP BORDER */}
      <div className="w-full h-[1px] bg-[#010101] mb-8 md:mb-[45px]" />

      {/* ================= HOTEL NAME + RATING ================= */}
      <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-[10px] mb-8 md:mb-[45px]">

        <h1 className="font-gilroy-semibold text-[28px] md:text-[42px] leading-[100%] tracking-[-0.04em] text-[#16242A]">
          {hotel.name}
        </h1>

        <div className="flex items-center gap-[4px] border border-[#004849] rounded-[10px] px-[14px] py-[8px] w-fit">
          <span className="text-[#004849] font-medium">
            {hotel.starRating}
          </span>
          <Star size={16} fill="#004849" stroke="#004849" strokeWidth={0} />
        </div>
      </div>

      {/* ================= ADDRESS ================= */}
      <p className="text-[#29383E] mb-8 md:mb-[45px] text-[15px] md:text-[18px] leading-[100%] tracking-[-0.04em] font-gilroy-medium">
        {hotel.address}
      </p>

      {/* ================= CONTENT SECTION ================= */}
      <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-[50px]">

        {/* ================= LEFT SIDE - AMENITIES ================= */}
        <div className="flex-1">

          <h3 className="font-gilroy-semibold text-[20px] md:text-[24px] leading-[100%] tracking-[-0.04em] text-[#16242A] mb-6 md:mb-[18px]">
            Popular Amenities
          </h3>

          {/* Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-5 lg:w-[700px]">
            <Amenity icon={<Users size={20} />} label="Upto 150" />
            <Amenity icon={<Wifi size={20} />} label="Free Wi-Fi" />
            <Amenity icon={<Plane size={20} />} label="Paid Airport Transfers" />

            <Amenity icon={<BedDouble size={20} />} label="30 Rooms" />
            <Amenity icon={<Car size={20} />} label="Free Parking" />
            <Amenity icon={<Utensils size={20} />} label="In-house Bar" />

            <Amenity icon={<Snowflake size={20} />} label="Full Air Conditioned Room" />
            <Amenity icon={<Car size={20} />} label="Paid Pickup/Drop" />
            <Amenity icon={<Waves size={20} />} label="Spa" />

            <Amenity icon={<Waves size={20} />} label="Swimming Pool" />
            <Amenity icon={<Train size={20} />} label="Paid Railway Station Transfers" />
            <Amenity icon={<Building2 size={20} />} label="Elevator/Lift" />
          </div>
        </div>

        {/* ================= RIGHT SIDE - MAP CARD ================= */}
        <div className="w-full sm:w-[400px] lg:w-[352px] rounded-[10px] overflow-hidden shadow-md bg-white flex-shrink-0">

          <img
            src="/destination-hotel/map1.png"
            alt="Map"
            className="w-full h-[180px] lg:h-[168px] object-cover"
          />

          <button
            className="
              w-full
              h-[57px]
              bg-[#006077]
              hover:bg-[#004d5c]
              text-white
              font-medium
              transition-colors
              duration-200
              rounded-b-[10px]
              flex
              items-center
              justify-center
            "
          >
            View in Map
          </button>
        </div>

      </div>

      {/* BOTTOM BORDER */}
      <div className="w-full h-[1px] bg-[#010101] mt-12 md:mt-[58px]" />
    </div>
  );
}

/* ================= Amenity Component ================= */
function Amenity({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-[10px]">
      <div className="text-black flex-shrink-0">{icon}</div>

      <span className="text-[#16242A] text-[14px] md:text-[16px] font-gilroy-medium">
        {label}
      </span>
    </div>
  );
}
