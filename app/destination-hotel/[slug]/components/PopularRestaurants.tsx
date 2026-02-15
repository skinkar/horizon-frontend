"use client";

import { ChevronLeft } from "lucide-react";

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

export default function PopularRestaurants({
  restaurants,
}: PopularRestaurantsProps) {
  return (
    <section className="max-w-[1120px] mx-auto px-4 py-16 relative">

      {/* SECTION TITLE */}
      <h2 className="text-[32px] font-semibold text-[#16242A] mb-10">
        Popular Restaurants in this area
      </h2>

      {/* LEFT FLOATING ARROW */}
      <button className="absolute -left-6 top-[120px] bg-[#FF6A00] text-white w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:scale-105 transition">
        <ChevronLeft size={18} />
      </button>

      {/* CARDS */}
      <div className="grid md:grid-cols-3 gap-8">

        {restaurants.map((restaurant) => (
          <div
            key={restaurant.id}
            className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100"
          >
            {/* IMAGE */}
            <img
              src={restaurant.image}
              alt={restaurant.name}
              className="w-full h-[190px] object-cover"
            />

            {/* CONTENT */}
            <div className="p-5">

              <h3 className="text-[18px] font-semibold text-[#16242A]">
                {restaurant.name}
              </h3>

              <p className="text-sm text-gray-500 mt-2">
                Cuisines : {restaurant.cuisines}
              </p>

              <div className="mt-6 text-sm text-gray-700">
                <p className="font-medium">{restaurant.distance}</p>
                <p className="text-gray-500">
                  From {restaurant.from}
                </p>
              </div>

            </div>
          </div>
        ))}

      </div>
    </section>
  );
}
