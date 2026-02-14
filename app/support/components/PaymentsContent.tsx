"use client";

import React from "react";
import { LineReveal } from "@/app/utils/animation";

const PaymentRow = ({ label, value }: { label: string; value: string }) => (
    <div className="flex items-center justify-between gap-8 mb-2">
        <span className="text-base font-gilroy-medium text-[#16242A] w-32">{label}</span>
        <div className="flex-1 bg-[#D7F7FF] py-4 px-8 rounded-lg text-center text-base font-gilroy-semibold text-[#16242A]">
            {value}
        </div>
    </div>
);

const PaymentsContent = () => {
    return (
        <div className="flex-1 max-w-2xl">
            <h2 className="text-4xl font-gilroy-semibold text-[#16242A] mb-8">
                Payments
            </h2>

            <div className="bg-white border border-gray-100 rounded-[2rem] p-10 mb-12">
                <h3 className="text-center text-base font-gilroy-medium text-[#16242A] mb-8">Booking Amount To Be Paid</h3>
                <PaymentRow label="Before 30 days" value="25% of Total Amount" />
                <PaymentRow label="30-20 days" value="30% of Total Amount" />
                <PaymentRow label="20-14 days" value="40% of Total Amount" />
                <PaymentRow label="14-7 days" value="55% of Total Amount" />
                <PaymentRow label="7-3 days" value="75% of Total Amount" />
                <PaymentRow label="12-3 hrs" value="100% of Total Amount" />

                <div className="relative flex justify-center my-10">
                    <div className="relative inline-flex items-center justify-center px-32 py-4 rounded-full">
                        {/* Gradient background */}
                        <div className="absolute inset-0 rounded-full bg-linear-to-r from-transparent via-[#FFD6B5] to-transparent" />

                        {/* Text */}
                        <span className="relative text-primary-orange font-gilroy-semibold text-base">
                            Or
                        </span>
                    </div>
                </div>

                <h3 className="text-center text-base font-gilroy-medium text-[#16242A] mb-8">Flexible Payments</h3>
                <PaymentRow label="During Booking" value="Pay 25% of Total Amount" />
                <PaymentRow label="Before 48hrs" value="Remaining 75% of Total Amount Left" />

                <p className="mt-10 text-sm font-gilroy-medium text-[#16242A] leading-snug">
                    <span className="font-gilroy-semibold text-primary-orange">Note: </span>
                    You can settle the remaining balance ( i.e. 75% of the total amount ) at your convenience. However, the full amount must be paid at least <span className="font-gilroy-semibold">48 hours</span> prior to travel.
                </p>
            </div>

            <div className="space-y-4 text-base font-gilroy-medium text-[#16242A] leading-relaxed">
                <div className="flex gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0" />
                    <LineReveal text="You can choose to pay the full amount upfront or opt for our flexible payment plans." />
                </div>
                <div className="flex gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0" />
                    <LineReveal text="Payments are processed securely through our verified payment partners." />
                </div>
                <div className="flex gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0" />
                    <LineReveal text="Multiple payment options including credit/debit cards, UPI, and net banking are available." />
                </div>
                <div className="flex gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0" />
                    <LineReveal text="GST and other applicable taxes are included in the total booking amount unless specified otherwise." />
                </div>

                <div className="pt-8">
                    <span className="font-gilroy-semibold">Still need help?</span>
                    <br />
                    If you need assistance,{" "}
                    <button className="text-primary-orange font-gilroy-semibold hover:underline">
                        please contact us.
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PaymentsContent;
