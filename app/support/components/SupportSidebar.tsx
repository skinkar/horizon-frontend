"use client";

import React from "react";

const categories = [
    "Contact Us",
    "Travel Documents",
    "Social Media Support",
    "Phoenix Fly Advantage",
    "Phoenix Fly Rewards",
    "Tag & Earn Rewards",
    "Refer & Earn Rewards",
    "Change & Cancel",
    "Refund Policy & Timelines",
    "Stay Secure",
    "Terms & Conditions",
    "Privacy Policy",
    "Payments",
];

const SupportSidebar = ({ activeCategory, setActiveCategory }: { activeCategory: string, setActiveCategory: (category: string) => void }) => {
    return (
        <aside className="w-full md:w-80 flex flex-col gap-1">
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`w-full text-left px-6 py-4 rounded-lg font-gilroy-semibold text-sm transition-all ${category === activeCategory
                        ? "bg-[#FFEAD8] text-primary-orange"
                        : "bg-white text-gray-800 hover:bg-gray-50 border border-gray-100"
                        }`}
                >
                    {category}
                </button>
            ))}
        </aside>
    );
};

export default SupportSidebar;
