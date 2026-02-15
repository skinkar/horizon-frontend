"use client";

import { ChevronLeft, Clock } from "lucide-react";

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

export default function PopularThingsToDo({
  activities,
}: PopularThingsProps) {
  return (
    <section className="max-w-[1120px] mx-auto px-4 py-16 relative">

      {/* SECTION TITLE */}
      <h2 className="text-[32px] font-semibold text-[#16242A] mb-10">
        Popular Things To Do in this area
      </h2>

      {/* LEFT FLOATING ARROW */}
      <button className="absolute -left-6 top-[120px] bg-[#FF6A00] text-white w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:scale-105 transition">
        <ChevronLeft size={18} />
      </button>

      {/* CARDS */}
      <div className="grid md:grid-cols-3 gap-8">

        {activities.map((activity) => (
          <div
            key={activity.id}
            className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100"
          >
            {/* IMAGE */}
            <img
              src={activity.image}
              alt={activity.title}
              className="w-full h-[190px] object-cover"
            />

            {/* CONTENT */}
            <div className="p-5">

              <h3 className="text-[18px] font-semibold text-[#16242A]">
                {activity.title}
              </h3>

              {/* Duration */}
              <div className="flex items-center gap-2 text-sm text-gray-600 mt-2">
                <Clock size={16} />
                {activity.duration}
              </div>

              {/* Distance */}
              <div className="mt-6 text-sm text-gray-700">
                <p className="font-medium">{activity.distance}</p>
                <p className="text-gray-500">
                  From {activity.from}
                </p>
              </div>

            </div>
          </div>
        ))}

      </div>
    </section>
  );
}
