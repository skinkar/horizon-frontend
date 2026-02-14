"use client";
import { useState } from "react";
import { LineReveal } from "../utils/animation";

const faqs = [
    {
        q: "How Do I Join Phoenix Fly Rewards?",
        a: "You can join Phoenix Fly Rewards by signing up on our website or app. Membership is free and lets you earn points on every booking.",
    },
    {
        q: "Can I Earn Points On All Types Of Bookings?",
        a: "Yes, points can be earned on flights, hotels, and holiday packages unless otherwise stated.",
    },
    {
        q: "Q3: Can I Combine Points With Promotional Discounts?",
        a: "Yes, reward points can be combined with most promotional discounts unless specified.",
    },
    {
        q: "Can I Purchase A Status Instead Of Earning It Through Bookings?",
        a: "Currently, status levels must be earned through eligible bookings only.",
    },
    {
        q: "Can I Redeem My Points Fully For A Booking?",
        a: "You can redeem points partially or fully depending on availability and booking type.",
    },
];

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <section className="py-12">
            <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
                <h2 className="text-3xl md:text-4xl font-gilroy-semibold text-[#16242A] mb-3">
                    <LineReveal text="Frequently Asked Questions" />
                </h2>
                <p className="text-sm md:text-base font-gilroy-medium mb-14">
                    <LineReveal text="Have any questions? Find all your answers in the frequently asked questions." />
                </p>

                <div className="space-y-4 text-left">
                    {faqs.map((item, index) => {
                        const isOpen = activeIndex === index;

                        return (
                            <div
                                key={index}
                                className="bg-white rounded-lg shadow-none transition-all"
                            >
                                <button
                                    onClick={() =>
                                        setActiveIndex(isOpen ? null : index)
                                    }
                                    className="w-full flex justify-between items-center px-6 py-5 text-left"
                                >
                                    <span className="font-gilroy-semibold text-base text-[#16242A]">
                                        {item.q}
                                    </span>
                                    <span
                                        className={`text-2xl transition-transform ${isOpen ? "rotate-45" : ""
                                            }`}
                                    >
                                        +
                                    </span>
                                </button>

                                {isOpen && (
                                    <div className="px-6 pb-5 text-gray-600 text-sm font-gilroy-medium leading-relaxed">
                                        {item.a}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
