"use client";

import {
    Timer,
    Heart,
    Plane,
    Hotel,
    Activity,
    Car,
} from "lucide-react";

interface VerticalPackageCardProps {
    image: string;
    title: string;
    location: string;
    price: string;
    oldPrice?: string;
    timer?: string;
    duration: string; // e.g. "6N/7D"
}

export function VerticalPackageCard({
    image,
    title,
    location,
    price,
    oldPrice,
    timer,
    duration,
}: VerticalPackageCardProps) {
    return (
        <div className="relative h-[420px] rounded-3xl overflow-hidden group text-white">
            {/* Image */}
            <img
                src={image}
                alt={title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

            {/* Wishlist */}
            <button className="absolute top-4 right-4 z-10 bg-white/20 backdrop-blur-md p-6 rounded-xl">
                <Heart className="w-6 h-6 text-white" />
            </button>



            {/* Timer */}
            {timer && (
                <div className="absolute top-14 right-4 flex items-center gap-1 bg-orange-500 text-white text-xs px-3 py-1.5 rounded-lg z-10">
                    <Timer className="h-4 w-4" />
                    {timer}
                </div>
            )}

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-5 z-10 space-y-3">

                {/* Duration */}
                <div className=" z-10 bg-black/60 backdrop-blur-md text-xs px-3 py-1.5 rounded-full w-fit">
                    {duration}
                </div>

                {/* Title */}
                <div>
                    <h3 className="text-lg font-gilroy-semibold leading-snug">
                        {title}
                    </h3>
                    <p className="text-sm text-gray-200">{location}</p>
                </div>

                {/* Icons row */}
                <div className="flex gap-1 justify-between">
                    <Icon label="2 Flights" icon={<Plane className="text-primary-orange" size={14} />} />
                    <Icon label="11 Hotels" icon={<Hotel className="text-primary-orange" size={14} />} />
                    <Icon label="5 Activities" icon={<Activity className="text-primary-orange" size={14} />} />
                    <Icon label="4 Transfers" icon={<Car className="text-primary-orange" size={14} />} />
                </div>

                {/* Price + CTA */}
                <div className="flex items-end justify-between pt-2">
                    <div>
                        <p className="text-3xl font-gilroy-bold">
                            <span className="text-orange-400">₹</span> {price}
                        </p>
                        <p className="text-sm opacity-90">Per Person</p>
                        <p className="text-xs opacity-70">Includes taxes</p>
                    </div>

                    <button className="bg-orange-500 hover:bg-orange-600 transition px-6 py-3 rounded-xl text-sm font-gilroy-medium">
                        Book Now
                    </button>
                </div>
            </div>
        </div>
    );
}

/* Small helper */
function Icon({
    icon,
    label,
}: {
    icon: React.ReactNode;
    label: string;
}) {
    return (
        <span className="flex flex-col items-center gap-1 text-white bg-black/40 backdrop-blur rounded-xl w-full py-3 text-xs">
            {icon}
            {label}
        </span>
    );
}
