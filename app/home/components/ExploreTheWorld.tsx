'use client'
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import DestinationPopup from "./DestinationPopup";

const indiaRegions = [
    {
        title: "North India",
        subtitle: "Explore The Best Of",
        description:
            "Embark on an enchanting Himalayan odyssey of cultures and majestic landscapes in North India.",
        image: "/home/north_india.png",
    },
    {
        title: "South India",
        subtitle: "Explore The Best Of",
        description:
            "Discover temples, beaches, and lush greenery across South India.",
        image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9",
    },
    {
        title: "West India",
        subtitle: "Explore The Best Of",
        description:
            "Experience deserts, forts, and vibrant cities of West India.",
        image: "https://images.unsplash.com/photo-1518684079-3c830dcef090",
    },
    {
        title: "East India",
        subtitle: "Explore The Best Of",
        description:
            "Explore rivers, hills, and cultural heritage of East India.",
        image: "https://images.unsplash.com/photo-1548013146-72479768bada",
    },
];

const internationalRegions = [
    {
        title: "Europe",
        subtitle: "Explore The Best Of",
        description:
            "Timeless cities, history, and scenic countryside across Europe.",
        image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
    },
    {
        title: "Asia",
        subtitle: "Explore The Best Of",
        description:
            "A blend of modern cities, traditions, and landscapes.",
        image: "https://images.unsplash.com/photo-1548013146-72479768bada",
    },
    {
        title: "Africa",
        subtitle: "Explore The Best Of",
        description:
            "Wildlife safaris and breathtaking natural wonders.",
        image: "https://images.unsplash.com/photo-1516426122078-c23e76319801",
    },
    {
        title: "More",
        subtitle: "Explore",
        description:
            "Explore More Destinations",
        image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
    },
];


const ExploreTheWorld: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const [tab, setTab] = useState<"india" | "international">("india");
    const regions = tab === "india" ? indiaRegions : internationalRegions;
    const [showPopup, setShowPopup] = useState(false);


    /** Auto cycle */
    useEffect(() => {
        startAutoCycle();
        return stopAutoCycle;
    }, []);

    const startAutoCycle = () => {
        stopAutoCycle();
        intervalRef.current = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % regions.length);
        }, 3000);
    };

    const stopAutoCycle = () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
    };

    /** Animate on index change */
    useEffect(() => {
        let mm = gsap.matchMedia();

        // Desktop
        mm.add("(min-width: 768px)", () => {
            gsap.to(".region-card", {
                gridColumn: "span 1",
                gridRow: "span 1",
                duration: 0.6,
                ease: "power3.inOut",
            });

            gsap.to(`.region-${activeIndex}`, {
                gridColumn: "span 2",
                duration: 0.6,
                ease: "power3.inOut",
            });
        });

        // Mobile
        mm.add("(max-width: 767px)", () => {
            gsap.to(".region-card", {
                gridRow: "span 1",
                gridColumn: "span 1",
                duration: 0.6,
                ease: "power3.inOut",
            });

            gsap.to(`.region-${activeIndex}`, {
                gridRow: "span 2",
                duration: 0.6,
                ease: "power3.inOut",
            });
        });

        return () => mm.revert();
    }, [activeIndex]);

    return (
        <section className="max-w-7xl mx-auto px-4 md:px-8 py-12">
            {/* Header */}
            <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-gilroy-semibold text-gray-900 mb-3">
                    Explore The World
                </h2>
                <p className="text-gray-600 max-w-xl mx-auto font-gilroy-medium text-sm md:text-base">
                    Browse top domestic and international travel experiences tailored
                    for every kind of traveler.
                </p>
            </div>

            {/* Toggle */}
            <div className="my-6 flex justify-center">
                <div className="bg-gray-200 rounded-full p-1 flex">
                    <button
                        onClick={() => {
                            setTab("india");
                            setActiveIndex(0);
                        }}
                        className={`px-8 py-2 rounded-full text-sm font-gilroy-semibold transition ${tab === "india"
                            ? "bg-white text-primary-orange"
                            : "text-gray-600"
                            }`}
                    >
                        India
                    </button>

                    <button
                        onClick={() => {
                            setTab("international");
                            setActiveIndex(0);
                        }}
                        className={`px-8 py-2 rounded-full text-sm font-gilroy-semibold transition ${tab === "international"
                            ? "bg-white text-primary-orange"
                            : "text-gray-600"
                            }`}
                    >
                        International
                    </button>
                </div>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 grid-rows-5 md:grid-cols-5 md:grid-rows-1 gap-4 md:gap-2 h-[800px] md:h-[420px]">
                {regions.map((region, index) => (
                    <div
                        key={region.title}
                        className={`region-card region-${index} relative rounded-sm md:rounded-lg overflow-hidden cursor-pointer w-full h-full`}
                        onMouseEnter={() => {
                            if (window.innerWidth >= 768) {
                                stopAutoCycle();
                                setActiveIndex(index);
                            }
                        }}
                        onMouseLeave={() => {
                            if (window.innerWidth >= 768) {
                                startAutoCycle();
                            }
                        }}
                        onClick={() => {
                            if (window.innerWidth < 768) {
                                setActiveIndex(index);
                                stopAutoCycle(); // optionally stop auto cycle on mobile click
                            }
                            if (tab === "international" && region.title === "More") {
                                setShowPopup(true);
                            }
                        }}
                    >
                        <img
                            src={region.image}
                            alt={region.title}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                        {/* Content */}
                        <div
                            className={`relative z-10 h-full flex flex-col justify-end items-start ${index === activeIndex ? "p-4 md:p-6" : "p-4 md:p-0 md:pl-6"
                                }`}
                        >
                            {index === activeIndex && region.subtitle && (
                                <span className="text-white/80 text-sm mb-1 font-gilroy-medium">
                                    {region.subtitle}
                                </span>
                            )}

                            <h3
                                className={`text-white transition-all duration-500 font-gilroy-semibold ${index === activeIndex
                                    ? "text-3xl"
                                    : "text-3xl md:rotate-[-90deg] md:origin-left"
                                    }`}
                            >
                                {region.title}
                            </h3>

                            {index === activeIndex && region.description && (
                                <p className="text-white/90 text-sm max-w-md mt-2 font-gilroy-medium">
                                    {region.description}
                                </p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            <DestinationPopup
                isOpen={showPopup}
                onClose={() => setShowPopup(false)}
            />

        </section >
    );
};

export default ExploreTheWorld;
