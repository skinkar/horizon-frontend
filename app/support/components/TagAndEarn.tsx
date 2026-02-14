"use client";

import React from "react";
import { LineReveal } from "@/app/utils/animation";
import SupportAccordion from "./SupportAccordion";
import SupportSectionAccordion from "./SupportSectionAccordion";

const TagAndEarn = () => {
    const faqs = [
        { title: "How Do I Join Phoenix Fly Rewards?", content: "Simply tag us in your social media posts!" },
        { title: "Can I Earn Points On All Types Of Bookings?", content: "Yes, once you're verified, you earn points on all bookings." },
        { title: "Can I Combine Points With Promotional Discounts?", content: "Absolutely, points can be used alongside regular discounts." },
        { title: "How Do I Join Phoenix Fly Rewards?", content: "Simply tag us in your social media posts!" },
        { title: "How Can I Avail Of The Early Check-In / Late Check-Out Benefit?", content: "This benefit is available for our Platinum members." },
        { title: "How Do I Join Phoenix Fly Rewards?", content: "Simply tag us in your social media posts!" },
        { title: "How Do I Join Phoenix Fly Rewards?", content: "Simply tag us in your social media posts!" },
        { title: "How Do I Join Phoenix Fly Rewards?", content: "Simply tag us in your social media posts!" },
    ];

    const terms = [
        { title: "Terms & Conditions", content: "Tagging must be on publicly visible accounts." },
    ];

    return (
        <div className="flex-1 max-w-2xl">
            <h2 className="text-4xl font-gilroy-semibold text-[#16242A] mb-4">
                Tag & Earn Rewards
            </h2>

            <div className="text-base font-gilroy-medium text-[#16242A] leading-relaxed mb-8">
                <LineReveal text="Tag us in your social media posts or stories and enjoy rewards every time, from bonus points to a family dinner." />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button className="bg-[#16242A] text-white px-8 py-4 rounded-xl font-gilroy-semibold text-sm hover:opacity-90 transition-all flex-1">
                    Explain How It Works
                </button>
                <button className="bg-[#16242A] text-white px-8 py-4 rounded-xl font-gilroy-semibold text-sm hover:opacity-90 transition-all flex-1">
                    View My Points / Progress
                </button>
            </div>

            <div className="space-y-4">
                <SupportSectionAccordion title="FAQs">
                    <SupportAccordion title="" items={faqs} variant="plus-minus" isFlat={true} />
                </SupportSectionAccordion>

                <SupportSectionAccordion title="Terms & Conditions">
                    <div className="text-base font-gilroy-medium text-[#16242A] leading-relaxed">
                        {terms[0].content}
                    </div>
                </SupportSectionAccordion>
            </div>
        </div>
    );
};

export default TagAndEarn;
