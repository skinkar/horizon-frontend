import React from "react";
import { LineReveal } from "@/app/utils/animation";

type Offer = {
    title: string;
    description: string;
    cta: string;
    image: string;
    large?: boolean;
    imageClass?: string;
};

const offers: Offer[] = [
    {
        title: "Phoenix Fly Rewards",
        description:
            "Turn every trip into a reward – earn points, unlock perks, and elevate your travel experience with Phoenix Fly Rewards.",
        cta: "Explore More",
        image: "/offers/cards.svg",
        imageClass: "h-full right-0 top-0",
        large: true,
    },
    {
        title: "Refer & Earn Rewards",
        description:
            "Refer. Earn. Repeat. Travel benefits made better with friends.",
        cta: "Refer Now",
        image: "/offers/message-received.svg",
        imageClass: "w-[220px] h-[220px] right-0 bottom-0 translate-y-[20%]",
    },
    {
        title: "Tag & Earn Rewards",
        description:
            "Show off your adventures and unlock surprise rewards.",
        cta: "Tag Us Now",
        image: "/offers/advertising.svg",
        imageClass: "w-[220px] h-[220px] right-6 top-6",
    },
    {
        title: "16th Night Reward",
        description: "Get 50% off on your 16th night!",
        cta: "Start Booking",
        image: "/offers/resting.svg",
        imageClass: "w-[220px] h-[220px] right-0 bottom-0 ",
    },
    {
        title: "Group Booking Rewards",
        description: "Up to 50% off after 10 bookings!",
        cta: "Start Booking",
        image: "/offers/offer.svg",
        imageClass: "w-[220px] h-[220px] right-0 bottom-0 translate-y-[20%]",
    },
    {
        title: "Cruise Vouchers",
        description: "Get INR 1000 cruise voucher after 10 bookings.",
        cta: "Start Booking",
        image: "/offers/message.svg",
        imageClass: "w-[220px] h-[220px] right-0 bottom-0 translate-y-[10%]",
    },
];

const AllOffers: React.FC = () => {
    return (
        <section className="py-12 px-8">
            <div className="mx-auto max-w-6xl">
                {/* Header */}
                <div className="mb-12 text-center">
                    <h2 className="text-3xl md:text-4xl font-gilroy-semibold text-gray-900">
                        <LineReveal text="All Offers" />
                    </h2>
                    <p className="mt-2 text-base font-gilroy-medium">
                        <LineReveal text="Discover the exclusive offers to make your next trip even better." />
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-6">
                    {offers.map((offer, index) => {
                        let colSpan = "lg:col-span-2";

                        if (index === 0) colSpan = "lg:col-span-6";
                        if (index === 1 || index === 2) colSpan = "lg:col-span-3";

                        return (
                            <div
                                key={index}
                                className={`relative overflow-hidden rounded-2xl bg-white px-12 py-20 flex flex-col justify-between ${colSpan}`}
                            >
                                {/* Content */}
                                <div className={index === 0 ? "max-w-md relative z-50" : "relative z-50"}>
                                    <h3 className="text-lg font-gilroy-semibold text-gray-900">
                                        <LineReveal text={offer.title} />
                                    </h3>

                                    <p className={index === 0 ? "max-w-md relative z-50 mt-2 text-sm font-gilroy-medium" : "relative z-50 max-w-2xs mt-2 text-sm font-gilroy-medium"}>
                                        <LineReveal text={offer.description} />
                                    </p>

                                    <button className="mt-6 inline-flex items-center rounded-lg bg-primary-orange px-4 py-2 text-sm font-gilroy-semibold text-white hover:opacity-90 transition">
                                        {offer.cta}
                                    </button>
                                </div>

                                <img
                                    src={offer.image}
                                    alt={offer.title}
                                    className={`object-contain absolute  ${offer.imageClass}`}
                                />

                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default AllOffers;
