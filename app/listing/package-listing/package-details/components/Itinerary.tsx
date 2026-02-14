'use client'
import React, { useState } from "react";
import {
    ChevronDown,
    ChevronUp,
    Download,
    Share2,
    Car,
    MapPin,
    Utensils,
    Hotel,
    Clock,
    Compass,
    Circle
} from "lucide-react";

interface TimelineItem {
    time: string;
    endTime?: string;
    title: string;
    description?: string;
    icon: React.ReactNode;
}

interface DayData {
    day: number;
    location: string;
    highlights?: string;
    stops: number;
    transport: string;
    meals: string;
    accommodation: string;
    detailedItinerary: TimelineItem[];
}

const itineraryData: DayData[] = [
    {
        day: 1,
        location: "Delhi - Kullu",
        stops: 2,
        transport: "Transportation Included",
        meals: "Meals: Not Included",
        accommodation: "Accommodation: Overnight at hotel.",
        detailedItinerary: [
            {
                time: "01:30 PM",
                title: "Drive to Kullu",
                icon: <Car size={16} />,
            },
            {
                time: "01:30 PM",
                endTime: "02:00 PM",
                title: "Arrive At Kullu",
                description: "Discover the vibrant Kullu market, where you can shop for local crafts and souvenirs. Take a break at charming cafes, savoring delicious local cuisine amidst scenic views. End your day by unwinding around a cozy bonfire, soaking in the serene atmosphere.",
                icon: <MapPin size={16} />,
            },
            {
                time: "02:00 PM",
                endTime: "03:00 PM",
                title: "Sightseeing: Visit Manikaran Temple",
                icon: <Hotel size={16} />, // Closest to temple icon
            },
            {
                time: "02:00 PM",
                endTime: "03:00 PM",
                title: "Sightseeing: Visit sunset point at 4353m",
                icon: <Compass size={16} />,
            },
            {
                time: "03:00 PM",
                endTime: "07:00 PM",
                title: "Trek to Hampta Pass",
                description: "Discover the vibrant Kullu market, where you can shop for local crafts and souvenirs. Take a break at charming cafes, savoring delicious local cuisine amidst scenic views. End your day by unwinding around a cozy bonfire, soaking in the serene atmosphere.",
                icon: <Compass size={16} />,
            },
        ],
    },
    {
        day: 2,
        location: "Manikaran - Spiti Valley (125kms/ 3hrs approx)",
        stops: 3,
        transport: "Transportation Included",
        meals: "Breakfast Included",
        accommodation: "Accommodation: Overnight at hotel.",
        detailedItinerary: [],
    },
    {
        day: 3,
        location: "Spiti Valley - Rohtang Pass (125kms/ 3hrs approx)",
        stops: 4,
        transport: "Transportation Included",
        meals: "Breakfast Included",
        accommodation: "Accommodation: Overnight at hotel.",
        detailedItinerary: [],
    },
    {
        day: 4,
        location: "Rohtang Pass - Manali (125kms/ 3hrs approx)",
        stops: 2,
        transport: "Transportation Included",
        meals: "Breakfast Included",
        accommodation: "Accommodation: Overnight at hotel.",
        detailedItinerary: [],
    },
    {
        day: 5,
        location: "Manali - Delhi (125kms/ 10hrs approx)",
        stops: 1,
        transport: "Transportation Included",
        meals: "Breakfast Included",
        accommodation: "Home Drop-off",
        detailedItinerary: [],
    },
];

const Itinerary = () => {
    const [openDay, setOpenDay] = useState<number | null>(1);

    return (
        <div className="py-12 border-t border-black">
            <div className="flex flex-col lg:flex-row justify-between ">
                <div className="">
                    <h2 className="text-4xl font-gilroy-semibold text-[#16242A]">Itenary</h2>
                </div>

                <div className="w-2xl flex flex-col gap-3">
                    {itineraryData.map((day) => (
                        <DayAccordion
                            key={day.day}
                            data={day}
                            isOpen={openDay === day.day}
                            onToggle={() => setOpenDay(openDay === day.day ? null : day.day)}
                        />
                    ))}

                    {/* FOOTER */}
                    <div className="flex flex-wrap justify-between items-center gap-8 mt-0 pt-4">
                        <button className="flex items-center gap-2 text-[#FF6A00] font-gilroy-semibold text-base hover:opacity-80 transition-opacity">
                            <Download size={18} />
                            Download Itinerary
                        </button>
                        <button className="flex items-center gap-2 text-[#FF6A00] font-gilroy-semibold text-base hover:opacity-80 transition-opacity">
                            <Share2 size={18} />
                            Email/SMS Itinerary
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

function DayAccordion({ data, isOpen, onToggle }: { data: DayData; isOpen: boolean; onToggle: () => void }) {
    return (
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all duration-300">
            <button
                onClick={onToggle}
                className="w-full flex items-center justify-between p-6 hover:bg-gray-50/50 transition-colors"
            >
                <span className="text-lg font-gilroy-semibold text-[#16242A]">
                    Day {data.day} : {data.location}
                </span>
                {isOpen ? <ChevronUp size={20} className="text-gray-400" /> : <ChevronDown size={20} className="text-gray-400" />}
            </button>

            {isOpen && (
                <div className="px-6 pb-8 border-t border-gray-50 pt-6 animate-in fade-in slide-in-from-top-2 duration-300">
                    {/* SUMMARY TAGS */}
                    <div className="flex flex-wrap gap-3 mb-8">
                        <SummaryTag icon={<MapPin size={14} />} text={`${data.stops} Stops`} />
                        <SummaryTag icon={<Car size={14} />} text={data.transport} />
                        <SummaryTag icon={<Utensils size={14} />} text={data.meals} />
                        <SummaryTag icon={<Hotel size={14} />} text={data.accommodation} />
                    </div>

                    {/* DETAILED ITINERARY */}
                    <h3 className="text-base font-gilroy-bold text-[#16242A] mb-8">Detailed Itinerary</h3>

                    <div className="relative ml-4 space-y-0">
                        {/* TIMELINE LINE */}
                        <div className="absolute left-[15px] top-4 bottom-4 w-px bg-gray-200 border-dashed border-l" />

                        {data.detailedItinerary.map((item, index) => (
                            <TimelineItem key={index} item={item} isLast={index === data.detailedItinerary.length - 1} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

function SummaryTag({ icon, text }: { icon: React.ReactNode; text: string }) {
    return (
        <div className="flex items-center gap-2 px-4 py-2 bg-[#FFF7F0] text-[#FF6A00] rounded-full border border-[#FF6A00]/10 shrink-0">
            {icon}
            <span className="text-xs font-gilroy-semibold whitespace-nowrap">{text}</span>
        </div>
    );
}

function TimelineItem({ item, isLast }: { item: TimelineItem; isLast: boolean }) {
    return (
        <div className="relative pl-12 pb-10 last:pb-0">
            {/* ICON CIRCLE */}
            <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center z-10 border-2 border-white shadow-sm">
                {item.icon}
            </div>

            <div className="flex flex-col">
                <span className="text-[11px] font-gilroy-semibold text-gray-400 uppercase tracking-wider mb-1">
                    {item.time} {item.endTime ? `- ${item.endTime}` : ""}
                </span>
                <h4 className="text-base font-gilroy-bold text-[#16242A] mb-2">{item.title}</h4>
                {item.description && (
                    <p className="text-sm font-gilroy-medium text-gray-500 leading-relaxed max-w-2xl">
                        {item.description}
                    </p>
                )}
            </div>
        </div>
    );
}

export default Itinerary;
