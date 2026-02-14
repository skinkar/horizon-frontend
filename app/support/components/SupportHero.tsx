"use client";

import React from "react";
import { Search } from "lucide-react";

const SupportHero = () => {
    return (
        <section className="relative w-full px-4 md:px-8 pt-20 md:pt-24">
            <div className="max-w-6xl mx-auto relative rounded-[2rem] overflow-hidden h-[300px] md:h-[450px]">
                {/* Background Image */}
                <img
                    src="/support-hero.png"
                    alt="Support Hero Background"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Overlay for better text readability */}
                <div className="absolute inset-0 bg-black/10" />

                {/* Support Text */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-white text-6xl md:text-[110px] font-gilroy-bold uppercase tracking-wider opacity-90">
                        Support
                    </h1>
                </div>
            </div>

            {/* Floating Search Bar */}
            <div className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 w-full max-w-xl px-4 z-10">
                <div className="relative group">
                    <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                        <Search className="h-5 w-5 text-gray-400 group-focus-within:text-primary-orange transition-colors" />
                    </div>
                    <input
                        type="text"
                        placeholder="Search in Support"
                        className="w-full h-14 pl-12 pr-4 rounded-full bg-white shadow-lg border-none focus:ring-2 focus:ring-primary-orange/50 outline-none font-gilroy-medium text-gray-700 transition-all"
                    />
                </div>
            </div>
        </section>
    );
};

export default SupportHero;
