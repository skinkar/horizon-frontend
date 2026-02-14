"use client";

import React from "react";
import { LineReveal } from "@/app/utils/animation";

const RefundPolicy = () => {
    return (
        <div className="flex-1 max-w-2xl">
            <h2 className="text-4xl font-gilroy-semibold text-[#16242A] mb-8">
                Refund Policy
            </h2>

            <div className="space-y-6 text-base font-gilroy-medium text-[#16242A] leading-relaxed">
                <div className="flex gap-4">
                    <div className="mt-2.5 w-1 h-1 rounded-full bg-black/80 shrink-0" />
                    <div>
                        Some bookings are non-refundable. For these bookings, you will not receive a refund if you{" "}
                        <span className="text-primary-orange">change or cancel.</span>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="mt-2.5 w-1 h-1 rounded-full bg-black/80 shrink-0" />
                    <div>
                        Some bookings are refundable. For these bookings, you may be eligible for either a partial or full refund if you{" "}
                        <span className="text-primary-orange">change or cancel.</span>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="mt-2.5 w-1 h-1 rounded-full bg-black/80 shrink-0" />
                    <div>
                        <LineReveal text="If your booking is eligible for a refund, we usually process the refund within 24 hours." />
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="mt-2.5 w-1 h-1 rounded-full bg-black/80 shrink-0" />
                    <div>
                        <LineReveal text="Refunds may take up to 14 business days to process." />
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="mt-2.5 w-1 h-1 rounded-full bg-black/80 shrink-0" />
                    <div>
                        <LineReveal text="Once we initiate your refund, we will email you a refund receipt with details regarding the refund amount, how, and when you'll get your refund." />
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="mt-2.5 w-1 h-1 rounded-full bg-black/80 shrink-0" />
                    <div>
                        <LineReveal text="In general, you will be refunded in the same form of payment and currency you used when booking." />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RefundPolicy;
