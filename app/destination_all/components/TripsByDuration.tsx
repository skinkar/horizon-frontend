"use client";
import { LineReveal } from "@/app/utils/animation";

const timeTrips = [
    {
        label: "2–4",
        sub: "DAYS",
        img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    },
    {
        label: "5–9",
        sub: "DAYS",
        img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    },
    {
        label: "10–14",
        sub: "DAYS",
        img: "https://images.unsplash.com/photo-1500048993959-d23a436266cf",
    },
    {
        label: "15–20",
        sub: "DAYS",
        img: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
    },
];

export default function TripsByDuration() {
    return (
        <section className="px-4 md:px-8 pt-20">
            <div className="max-w-6xl mx-auto">
                {/* Gradient Card */}
                <div className="relative rounded-3xl overflow-hidden px-6 py-14 md:px-16 bg-linear-to-r from-[#FFD9BD] to-[#B3E5F1]">

                    <img
                        src="/blog/china.png"
                        alt=""
                        className="absolute bottom-0 left-0"
                    />

                    <img
                        src="/blog/summer-landscape.png"
                        alt=""
                        className="absolute bottom-0 right-0"
                    />

                    {/* Decorative background (optional, subtle) */}
                    <div className="absolute inset-0 opacity-20 pointer-events-none">
                        <div className="absolute left-6 bottom-6 w-40 h-40 bg-[url('/patterns/temple.svg')] bg-contain bg-no-repeat" />
                        <div className="absolute right-10 top-10 w-32 h-32 bg-[url('/patterns/palm.svg')] bg-contain bg-no-repeat" />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 text-center mb-10">
                        <h2 className="text-xl md:text-2xl font-gilroy-semibold text-gray-900 mb-2">
                            <LineReveal text="Trips Tailored to Your Time" />
                        </h2>
                        <p className="text-sm text-black max-w-xl mx-auto font-gilroy-medium">
                            <LineReveal text="From quick getaways to long escapes — we’ve got you covered." />
                        </p>
                    </div>

                    {/* Circles */}
                    <div className="relative z-10 flex flex-wrap justify-center gap-6 md:gap-10">
                        {timeTrips.map((item, i) => (
                            <div
                                key={i}
                                className="relative w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden flex items-center justify-center text-white"
                            >
                                {/* Image */}
                                <img
                                    src={item.img}
                                    alt={item.label}
                                    className="absolute inset-0 w-full h-full object-cover"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black/45" />

                                {/* Text */}
                                <div className="relative text-center leading-tight">
                                    <p className="text-lg md:text-2xl font-gilroy-semibold">
                                        {item.label}
                                    </p>
                                    <p className="text-[10px] md:text-sm tracking-wide text-gray-200">
                                        {item.sub}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
