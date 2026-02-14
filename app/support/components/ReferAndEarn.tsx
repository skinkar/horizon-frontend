"use client";

import React from "react";
import { LineReveal } from "@/app/utils/animation";
import SupportAccordion from "./SupportAccordion";
import SupportSectionAccordion from "./SupportSectionAccordion";

const ReferAndEarn = () => {
    const faqs = [
        { title: "How Do I Join Phoenix Fly Rewards?", content: "Share your unique referral link with friends!" },
        { title: "Can I Earn Points On All Types Of Bookings?", content: "You earn points when your referred friend completes their first booking." },
        { title: "Can I Combine Points With Promotional Discounts?", content: "Yes, referral rewards are stackable." },
        { title: "How Do I Join Phoenix Fly Rewards?", content: "Share your unique referral link with friends!" },
        { title: "How Can I Avail Of The Early Check-In / Late Check-Out Benefit?", content: "Refer 5 friends to unlock this benefit." },
        { title: "How Do I Join Phoenix Fly Rewards?", content: "Share your unique referral link with friends!" },
        { title: "How Do I Join Phoenix Fly Rewards?", content: "Share your unique referral link with friends!" },
        { title: "How Do I Join Phoenix Fly Rewards?", content: "Share your unique referral link with friends!" },
    ];

    const terms = [
        { title: "Terms & Conditions", content: "Referrals only count for new users who haven't registered before." },
    ];

    return (
        <div className="flex-1 max-w-2xl">
            <h2 className="text-4xl font-gilroy-semibold text-[#16242A] mb-4">
                Refer & Earn Rewards
            </h2>

            <div className="text-base font-gilroy-medium text-[#16242A] leading-relaxed mb-8">
                <LineReveal text="Earn rewards every time you refer a friend! Track your progress, share your link or code, and enjoy the benefits together." />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button className="bg-[#16242A] text-white px-8 py-4 rounded-xl font-gilroy-semibold text-sm hover:opacity-90 transition-all flex-1">
                    Discover How It Works
                </button>
                <button className="bg-[#16242A] text-white px-8 py-4 rounded-xl font-gilroy-semibold text-sm hover:opacity-90 transition-all flex-1">
                    View Your Rewards / Share Now
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

export default ReferAndEarn;
