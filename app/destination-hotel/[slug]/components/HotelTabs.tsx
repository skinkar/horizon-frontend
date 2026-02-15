"use client";

import { useState, useEffect } from "react";

const tabs = [
  "Overview",
  "Rooms",
  "Amenities",
  "About The Property",
  "Policies",
  "Reviews",
  "Nearby",
];

export default function HotelTabs() {
  const [active, setActive] = useState("Overview");
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 420);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Spacer when sticky */}
      {sticky && <div className="h-[70px]" />}

      {/* ================= TOP STICKY BAR ================= */}
      <div
        className={`w-full transition-all duration-300 ${
          sticky
            ? "fixed top-0 left-0 right-0 z-50 bg-white shadow-md"
            : "relative mt-6"
        }`}
      >
        <div className="max-w-[1120px] mx-auto px-4 lg:px-0 flex items-center justify-between gap-4">
          {/* Tabs */}
          <div
            className="
              flex-1
              bg-white
              rounded-[10px]
              h-[60px] md:h-[70px]
              px-4
              flex
              items-center
              gap-6
              overflow-x-auto
              no-scrollbar
            "
          >
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActive(tab)}
                className={`relative whitespace-nowrap text-[13px] md:text-sm font-medium transition ${
                  active === tab
                    ? "text-black"
                    : "text-gray-500 hover:text-black"
                }`}
              >
                {tab}

                {active === tab && (
                  <span className="absolute left-0 -bottom-2 h-[3px] w-full bg-[#FF6A00] rounded-full" />
                )}
              </button>
            ))}
          </div>

          {/* Desktop Button */}
          <button
            className="
              hidden md:flex
              w-[150px]
              h-[47px]
              bg-[#FF6A00]
              hover:bg-orange-600
              text-white
              rounded-[8px]
              font-medium
              transition
              items-center
              justify-center
              flex-shrink-0
            "
          >
            Check Availability
          </button>
        </div>
      </div>

      {/* ================= MOBILE FLOATING BUTTON ================= */}
      <div className="md:hidden fixed bottom-0 inset-x-0 bg-white px-4 py-3 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] z-50">
        <button
          className="
      w-full
      h-[50px]
      bg-[#FF6A00]
      hover:bg-orange-600
      text-white
      rounded-[10px]
      font-semibold
      transition
    "
        >
          Check Availability
        </button>
      </div>
    </>
  );
}
