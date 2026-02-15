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
    <section className="relative max-w-[1281px] w-full mx-auto px-4 md:px-0 py-10 md:py-16">
      
      {/* SECTION TITLE */}
      <h2 className="text-[24px] md:text-[36px] font-semibold text-[#16242A] mb-6 md:mb-12">
        Other Popular Hotels in this area
      </h2>

      {/* LEFT FLOATING ARROW (Desktop Only) */}
      <button className="hidden md:flex absolute left-[-21px] top-[270px] w-[42px] h-[42px] bg-[#FF6A00] text-white rounded-full items-center justify-center shadow-md">
        <ChevronLeft size={18} />
      </button>

      {/* HOTEL CARDS WRAPPER */}
      <div className="
        flex gap-4 
        overflow-x-auto md:overflow-visible
        snap-x snap-mandatory
        pb-2
      ">
        {hotels.map((hotel) => (
          <div
            key={hotel.id}
            className="
              min-w-[85%] sm:min-w-[70%] 
              md:min-w-0 md:w-[430px]
              h-auto
              bg-white rounded-xl overflow-hidden 
              border border-[#E7EEF1] shadow-sm 
              flex flex-col snap-start
            "
          >
            {/* IMAGE */}
            <div className="h-[180px] md:h-[210px] w-full">
              <img
                src={hotel.image}
                alt={hotel.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* CONTENT */}
            <div className="flex-1 flex flex-col justify-between p-4 md:p-[20px]">
              
              <div>
                <h3 className="text-[18px] md:text-[20px] font-semibold text-[#16242A]">
                  {hotel.name}
                </h3>

                <p className="text-[13px] md:text-[14px] text-[#4B6B74] mt-1">
                  {hotel.location}
                </p>
              </div>

              {/* PRICE SECTION */}
              <div className="flex justify-between items-end mt-4 md:mt-6">
                
                {/* LEFT PRICE */}
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[18px] md:text-[21px] font-semibold text-[#FF6A00] leading-none">
                      ₹
                    </span>

                    <span className="text-[22px] md:text-[28px] font-semibold text-[#16242A]">
                      {hotel.price.toLocaleString()}
                    </span>
                  </div>

                  <p className="text-[12px] md:text-[13px] text-[#6B7E86] mt-1">
                    Includes taxes and fees
                  </p>
                </div>

                {/* RIGHT SIDE */}
                <div className="text-right">
                  <p className="text-[13px] md:text-[14px] text-[#004849] font-medium">
                    ₹ {hotel.bookingFees} Fees
                  </p>

                  <button
                    className="
                      mt-2 md:mt-3
                      px-4 md:w-[111px]
                      h-[42px] md:h-[48px]
                      bg-[#FF6A00] 
                      text-white text-[13px] md:text-[14px]
                      rounded-md
                      flex items-center justify-center
                    "
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
