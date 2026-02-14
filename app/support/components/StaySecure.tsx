"use client";

import React from "react";
import SupportAccordion from "./SupportAccordion";
import { User, ShieldAlert } from "lucide-react";

const StaySecure = () => {
    const securityItems = [
        {
            title: "Your Personal Safety Companion : Dedicated Support For Female Solo & Female Group Travellers",
            content: "We provide specialized assistance for female travelers, including verified stays, 24/7 emergency contact, and local safety guides to ensure a secure and enjoyable journey."
        },
        {
            title: "Phone Call And Email Scams",
            content: "Always verify the sender's email address and avoid sharing sensitive financial information over the phone unless you have initiated the contact through our official channels."
        }
    ];

    return (
        <div className="flex-1 max-w-2xl">
            <h2 className="text-4xl font-gilroy-semibold text-[#16242A] mb-8">
                Stay Secure
            </h2>

            <div className="space-y-4">
                {/* Custom Accordion override to include icons if needed, but for now standard accordion is fine */}
                <SupportAccordion
                    title=""
                    items={securityItems}
                />
            </div>
        </div>
    );
};

export default StaySecure;
