"use client";

import React from "react";
import { LineReveal } from "@/app/utils/animation";

const PrivacyPolicy = () => {
    const points = [
        "This is random words for the privacy policy content, you can replace this with the original content for this later anytime.",
        "We understand that you may have special requests such as dietary preferences or accommodation requirements. Please provide us with these details during the booking process, and we will make every effort to accommodate your needs.",
        "For international travel, please ensure that your passport is valid for the required duration specified by the destination country. It is your responsibility to comply with the minimum passport validity requirements.",
        "In unforeseen circumstances beyond our control, such as natural disasters, we may need to make changes to the itinerary. We will communicate any changes to you promptly and work to provide suitable alternatives.",
        "We are committed to keeping you informed about any travel advisories or safety concerns that may arise before or during your trip.",
        "If a cancellation or change is made, the booking becomes non-transferable and can only be used by the original person who made the booking.",
        "Full Payment of the trip cost must be completed before the trip begins. Pending Payments may eventually lead to the cancellation of the trip.",
        "Our Price Match Policy does not apply to reservations made within 72 hours of the check-in date."
    ];

    return (
        <div className="flex-1 max-w-2xl">
            <h2 className="text-4xl font-gilroy-semibold text-[#16242A] mb-8">
                Privacy Policy
            </h2>

            <div className="space-y-6 text-base font-gilroy-medium text-[#16242A] leading-relaxed">
                {points.map((point, index) => (
                    <div key={index} className="flex gap-4">
                        <div className="mt-2.5 w-1 h-1 rounded-full bg-black/80 shrink-0" />
                        <div>
                            <LineReveal text={point} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PrivacyPolicy;
