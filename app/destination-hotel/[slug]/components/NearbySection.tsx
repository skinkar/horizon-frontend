"use client";

import { MapPin, Train, Car, Plane } from "lucide-react";

interface NearbySectionProps {
  mapImage: string;
  touristPlaces: {
    name: string;
    distance: string;
  }[];
  transportHubs: {
    name: string;
    distance: string;
    type: "metro" | "train" | "airport";
  }[];
}

export default function NearbySection({
  mapImage,
  touristPlaces,
  transportHubs,
}: NearbySectionProps) {
  return (
    <section className="max-w-[1120px] mx-auto px-4 py-16">

      {/* TITLE */}
      <h2 className="text-[32px] font-semibold text-[#16242A] mb-8">
        Nearby
      </h2>

      {/* MAP */}
      <div className="rounded-xl overflow-hidden mb-12">
        <img
          src={mapImage}
          alt="Map"
          className="w-full h-[300px] object-cover"
        />
      </div>

      {/* TWO COLUMN SECTION */}
      <div className="grid md:grid-cols-2 gap-20">

        {/* LEFT - TOURIST PLACES */}
        <div>
          <h3 className="text-[22px] font-semibold text-[#16242A] mb-6">
            Tourist Places
          </h3>

          <div className="space-y-5">
            {touristPlaces.map((place, index) => (
              <div
                key={index}
                className="flex items-center justify-between text-[#16242A]"
              >
                <div className="flex items-center gap-3">
                  <MapPin size={18} />
                  <span className="text-[16px]">{place.name}</span>
                </div>
                <span className="text-gray-500 text-[15px]">
                  {place.distance}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT - TRANSPORTATION HUBS */}
        <div>
          <h3 className="text-[22px] font-semibold text-[#16242A] mb-6">
            Transportation Hubs
          </h3>

          <div className="space-y-5">
            {transportHubs.map((hub, index) => (
              <div
                key={index}
                className="flex items-center justify-between text-[#16242A]"
              >
                <div className="flex items-center gap-3">
                  {hub.type === "metro" && <Train size={18} />}
                  {hub.type === "train" && <Car size={18} />}
                  {hub.type === "airport" && <Plane size={18} />}
                  <span className="text-[16px]">{hub.name}</span>
                </div>

                <span className="text-gray-500 text-[15px]">
                  {hub.distance}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* BOTTOM DIVIDER */}
      <div className="border-t border-[#00000033] mt-16"></div>

    </section>
  );
}
