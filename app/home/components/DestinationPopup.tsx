'use client'
import { FloatingPillSelect } from "@/app/common/atom/floating-pill-select";
import { Button } from "@/components/ui/button";
import { Star, LayoutGrid, Map, MapPin, IndianRupee } from "lucide-react";
import React from "react";

interface DestinationPopupProps {
    isOpen: boolean;
    onClose: () => void;
}

const DestinationPopup: React.FC<DestinationPopupProps> = ({
    isOpen,
    onClose,
}) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="relative bg-white w-full max-w-5xl rounded-xl shadow-xl border border-blue-500 z-10 p-4 px-16">
                {/* Close */}
                <div className="flex justify-end">
                    <button
                        onClick={onClose}
                        className="mb-8 text-gray-500 hover:text-black font-bold"
                    >
                        ✕
                    </button>
                </div>

                {/* Progress */}
                <div className="flex gap-2 mb-6">
                    <span className="h-1 w-full rounded bg-orange-500" />
                    {[...Array(5)].map((_, i) => (
                        <span key={i} className="h-1 w-full rounded bg-gray-300" />
                    ))}
                </div>

                {/* Title */}
                <h3 className="text-lg font-gilroy-semibold text-center mb-6">
                    Select the country you’re planning to visit
                </h3>

                {/* Select */}
                <div className="mx-auto mb-6 w-full">
                    <FloatingPillSelect
                        label="Select Country"
                        defaultValue="most-liked"
                        className="w-full !max-w-full border rounded-lg"
                    >
                        <option value="India">India</option>
                        <option value="Dubai">Dubai</option>
                    </FloatingPillSelect>
                </div>

                {/* CTA */}
                <div className="flex justify-center">
                    <Button className="bg-gray-900 text-white px-10 py-3 rounded-lg">
                        Next
                    </Button>
                </div>

                {/* Illustration */}
                {/* <div className="flex justify-center">
                    <img
                        src="/home/world_map_illustration.svg"
                        alt="World Map"
                        className="max-w-xs"
                    />
                </div> */}

                <div className="border-t pt-6 flex flex-wrap md:flex-nowrap items-center justify-between gap-6 text-sm">

                    {/* Rating */}
                    <div className="flex flex-col items-start min-w-[140px]">
                        <div className="flex items-center gap-1 font-gilroy-semibold text-base">
                            4.5
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        </div>
                        <p className="text-gray-500 font-gilroy-medium">6500+ Reviews</p>
                    </div>

                    {/* Feature Items */}
                    <div className="flex flex-1 justify-between gap-6">

                        <Feature
                            icon={<LayoutGrid size={16} />}
                            title="100% Customized Trips"
                        />

                        <Feature
                            icon={<Map size={16} />}
                            title="Instant & Flexible Planning"
                        />

                        <Feature
                            icon={<MapPin size={16} />}
                            title="Multi-City Adventures"
                        />

                        <Feature
                            icon={<IndianRupee size={16} />}
                            title="Budget-Friendly Trips"
                        />

                    </div>
                </div>

            </div>
        </div>
    );
};

export default DestinationPopup;

function Feature({
    icon,
    title,
}: {
    icon: React.ReactNode;
    title: string;
}) {
    return (
        <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-cyan-50 flex items-center justify-center text-black">
                {icon}
            </div>
            <div>
                <p className="font-gilroy-semibold text-gray-900 leading-tight">
                    {title}
                </p>
            </div>
        </div>
    );
}

