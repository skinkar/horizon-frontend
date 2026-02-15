"use client";

import { ChevronLeft } from "lucide-react";

interface HotelCard {
  id: string;
  image: string;
  name: string;
  location: string;
  price: number;
  bookingFees: number;
}

interface PopularHotelsProps {
  hotels: HotelCard[];
}

export default function PopularHotels({ hotels }: PopularHotelsProps) {
  return (
    <section className="relative w-[1281px] mx-auto py-16">

      {/* SECTION TITLE */}
      <h2 className="text-[36px] font-semibold text-[#16242A] mb-12">
        Other Popular Hotels in this area
      </h2>

      {/* LEFT FLOATING ARROW */}
      <button className="absolute left-[-21px] top-[270px] w-[42px] h-[42px] bg-[#FF6A00] text-white rounded-full flex items-center justify-center shadow-md">
        <ChevronLeft size={18} />
      </button>

      {/* HOTEL CARDS WRAPPER */}
      <div className="flex gap-[11px]">

        {hotels.map((hotel) => (
          <div
            key={hotel.id}
            className="w-[429.96px] h-[370px] bg-white rounded-xl overflow-hidden border border-[#E7EEF1] shadow-sm flex flex-col"
          >
            {/* IMAGE */}
            <div className="h-[210px] w-full">
              <img
                src={hotel.image}
                alt={hotel.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* CONTENT */}
            <div className="flex-1 flex flex-col justify-between p-[20px]">

              <div>
                <h3 className="text-[20px] font-semibold text-[#16242A]">
                  {hotel.name}
                </h3>

                <p className="text-[14px] text-[#4B6B74] mt-1">
                  {hotel.location}
                </p>
              </div>

              {/* PRICE SECTION */}
              <div className="flex justify-between items-end mt-6">

                {/* LEFT PRICE */}
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[21px] font-semibold text-[#FF6A00] leading-none">
                      ₹
                    </span>

                    <span className="text-[28px] font-semibold text-[#16242A]">
                      {hotel.price.toLocaleString()}
                    </span>
                  </div>

                  <p className="text-[13px] text-[#6B7E86] mt-1">
                    Includes taxes and fees
                  </p>
                </div>

                {/* RIGHT SIDE */}
                <div className="text-right">

                  <p className="text-[14px] text-[#004849] font-medium">
                    ₹ {hotel.bookingFees} Booking Fees
                  </p>

                  <button
                    className="mt-3 
                    w-[111.52px] 
                    h-[48.41px] 
                    bg-[#FF6A00] 
                    text-white 
                    text-[14px] 
                    rounded-[5px] 
                    flex items-center 
                    justify-center"
                  >
                    Book Now
                  </button>

                </div>
              </div>

            </div>
          </div>
        ))}

      </div>
    </section>
  );
}
