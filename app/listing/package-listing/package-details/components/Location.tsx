"use client";

import React, { useState } from "react";
import { MapPin, Users } from "lucide-react";

const locations = [
    {
        id: "shimla",
        name: "Shimla",
        activity: {
            city: "Kullu",
            details: "Kullu, India, India",
        },
        meetingPoint: {
            city: "Kullu",
            details: "Kullu, India, India",
        },
    },
    {
        id: "kullu",
        name: "Kullu",
        activity: {
            city: "Kullu",
            details: "Kullu, India, India",
        },
        meetingPoint: {
            city: "Kullu",
            details: "Kullu, India, India",
        },
    },
    {
        id: "manali",
        name: "Manali",
        activity: {
            city: "Kullu",
            details: "Kullu, India, India",
        },
        meetingPoint: {
            city: "Kullu",
            details: "Kullu, India, India",
        },
    },
];

const Location = () => {
    const [selectedId, setSelectedId] = useState("manali");

    const selectedLoc = locations.find((l) => l.id === selectedId) || locations[0];

    return (
        <div className="w-full">
            <hr className="border-gray-300 mb-8" />

            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
                <h2 className="text-4xl font-gilroy-bold text-[#16242A]">Location</h2>
                <div className="flex gap-4">
                    {locations.map((loc) => (
                        <button
                            key={loc.id}
                            onClick={() => setSelectedId(loc.id)}
                            className={`px-12 py-2.5 rounded-full text-base font-gilroy-medium transition-all ${selectedId === loc.id
                                ? "bg-[#FFDAB9] text-[#FF6A00] border border-[#FF6A00]"
                                : "bg-transparent text-[#FF6A00] border border-[#FFDAB9] hover:bg-orange-50"
                                }`}
                        >
                            {loc.name}
                        </button>
                    ))}
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-12 items-start mb-12">
                <div className="w-full lg:w-1/3 flex flex-col gap-10 mt-4">
                    <div className="flex items-start gap-4">
                        <MapPin size={20} className="text-[#16242A] mt-1 shrink-0" />
                        <div>
                            <h4 className="text-base font-gilroy-semibold text-[#16242A] mb-1">Activity location</h4>
                            <p className="text-sm font-gilroy-medium text-[#16242A] mb-0.5">{selectedLoc.activity.city}</p>
                            <p className="text-sm font-gilroy-medium text-[#16242A]">{selectedLoc.activity.details}</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <Users size={20} className="text-[#16242A] mt-1 shrink-0" />
                        <div>
                            <h4 className="text-base font-gilroy-semibold text-[#16242A] mb-1">Meeting/Redemption Point</h4>
                            <p className="text-sm font-gilroy-medium text-[#16242A] mb-0.5">{selectedLoc.meetingPoint.city}</p>
                            <p className="text-sm font-gilroy-medium text-[#16242A]">{selectedLoc.meetingPoint.details}</p>
                        </div>
                    </div>
                </div>

                <div className="w-full lg:w-2/3">
                    <div className="relative rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                        <div className="h-[320px] bg-gray-100">
                            <img
                                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1200"
                                alt="India Map"
                                className="w-full h-full object-cover grayscale-20 opacity-90"
                            />
                        </div>
                        <button className="w-full bg-[#006071] text-white py-5 text-xl font-gilroy-semibold hover:bg-[#004e5c] transition-colors tracking-wide">
                            View in Map
                        </button>
                    </div>
                </div>
            </div>

            <hr className="border-gray-300 mb-12" />
        </div>
    );
};

export default Location;
