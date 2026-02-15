"use client";

import {
  Wifi,
  Car,
  ConciergeBell,
  Utensils,
  Trees,
  Sparkles,
  BedDouble,
  Bath,
  Tv,
  Plane,
  Check,
} from "lucide-react";

interface AmenityCategory {
  title: string;
  items: string[];
}

interface AmenitiesSectionProps {
  propertyAmenities: AmenityCategory[];
  roomAmenities: AmenityCategory[];
}

const iconMap: Record<string, any> = {
  Internet: Wifi,
  "Parking & Public Transport": Car,
  "Guest services": ConciergeBell,
  "Food & Drink": Utensils,
  Outdoors: Trees,
  Spa: Sparkles,
  Bedrooms: BedDouble,
  Bathrooms: Bath,
  Entertainment: Tv,
  Transport: Plane,
  More: Check,
};

export default function AmenitiesSection({
  propertyAmenities,
  roomAmenities,
}: AmenitiesSectionProps) {
  return (
    <section className="flex justify-center mt-16 md:mt-24">
      <div className="max-w-[1122px] w-full px-4">

        {/* MAIN TITLE */}
        <div className="mb-10 md:mb-16">
          <h2 className="text-[26px] md:text-[38px] font-semibold text-[#29383E]">
            Amenities
          </h2>
        </div>

        {/* PROPERTY AMENITIES */}
        {propertyAmenities?.length > 0 && (
          <AmenityBlock
            label="Property Amenities"
            content={
              <div className="grid grid-cols-1 md:grid-cols-2 md:mx-40 gap-y-8 md:gap-x-24 md:gap-y-16">
                {propertyAmenities.map((category, index) => (
                  <Category key={index} category={category} />
                ))}
              </div>
            }
          />
        )}

        {/* ROOM AMENITIES */}
        {roomAmenities?.length > 0 && (
          <AmenityBlock
            label="Room Amenities"
            content={
              <div className="grid grid-cols-1 md:grid-cols-2 md:mx-40 gap-y-8 md:gap-x-24 md:gap-y-16">
                {roomAmenities.map((category, index) => (
                  <Category key={index} category={category} />
                ))}
              </div>
            }
          />
        )}

        {/* TRANSPORT */}
        <AmenityBlock
          label="Transport"
          content={
            <div className="grid grid-cols-1 md:grid-cols-2 md:mx-40">
              <div>
                <h4 className="text-[15px] md:text-[16px] font-semibold text-[#29383E] mb-3 md:mb-4">
                  Airport Transfers
                </h4>
                <ul className="space-y-2 text-[14px] text-[#16242A] leading-[22px]">
                  <li>9.6 km from Royal Resort</li>
                  <li>Manama Airport</li>
                  <li>(BAH-Bahrain Intl.)</li>
                </ul>
              </div>
            </div>
          }
        />

        <div className="border-t border-black mt-16 md:mt-24" />
      </div>
    </section>
  );
}

function AmenityBlock({
  label,
  content,
}: {
  label: string;
  content: React.ReactNode;
}) {
  return (
    <div className="flex flex-col md:flex-row mt-12 md:mt-20">

      {/* LEFT LABEL */}
      <div className="md:w-[220px] shrink-0 mb-6 md:mb-0">
        <p className="text-[18px] md:text-[24px] font-semibold tracking-[-0.02em] text-[#29383E] leading-none">
          {label}
        </p>
      </div>

      {/* RIGHT CONTENT */}
      <div className="flex-1">{content}</div>
    </div>
  );
}

/* CATEGORY */

function Category({ category }: { category: AmenityCategory }) {
  const IconComponent = iconMap[category.title];

  return (
    <div className="pb-6 md:pb-0 border-b md:border-none border-gray-200">

      <div className="flex items-center gap-2 mb-3 text-[16px] md:text-[18px] font-semibold text-[#16242A]">
        {IconComponent && <IconComponent size={16} strokeWidth={1.5} />}
        <span>{category.title}</span>
      </div>

      <ul className="space-y-2 md:space-y-3 text-[14px] md:text-[16px] text-[#16242A] leading-[22px] md:leading-[24px] font-medium">
        {category.items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
