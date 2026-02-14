"use client";

import React from "react";
import { LineReveal } from "@/app/utils/animation";

const ChargeRow = ({ label, value }: { label: string; value: string }) => (
    <div className="flex items-center justify-between gap-8 mb-2">
        <span className="text-base font-gilroy-medium text-[#16242A] w-32">{label}</span>
        <div className="flex-1 bg-[#D7F7FF] py-4 px-8 rounded-lg text-center text-base font-gilroy-semibold text-[#16242A]">
            {value}
        </div>
    </div>
);

const ChangeAndCancel = () => {
    return (
        <div className="flex-1 max-w-2xl">
            <h2 className="text-4xl font-gilroy-semibold text-[#16242A] mb-8">
                Change & Cancel
            </h2>

            <div className="bg-white border border-gray-100 rounded-[2rem] p-10 mb-12">
                <h3 className="text-center text-base font-gilroy-medium text-[#16242A] mb-8">Cancellation Charges</h3>
                <ChargeRow label="Before 30 days" value="0%-5% of Total Amount" />
                <ChargeRow label="30-15 days" value="0%-50% of Total Amount" />
                <ChargeRow label="14-0 days" value="50%-100% of Total Amount" />

                <div className="relative flex justify-center my-10">
                    <div className="relative inline-flex items-center justify-center px-32 py-4 rounded-full">
                        {/* Gradient background */}
                        <div className="absolute inset-0 rounded-full bg-linear-to-r from-transparent via-[#FFD6B5] to-transparent" />

                        {/* Text */}
                        <span className="relative text-primary-orange font-gilroy-semibold text-base">
                            And
                        </span>
                    </div>
                </div>

                <h3 className="text-center text-base font-gilroy-medium text-[#16242A] mb-8">Date Change Charges</h3>
                <ChargeRow label="Before 30 days" value="0%-5% of Total Amount" />
                <ChargeRow label="30-15 days" value="0%-50% of Total Amount" />
                <ChargeRow label="14-0 days" value="50%-100% of Total Amount" />

                <p className="mt-10 text-sm font-gilroy-medium text-[#16242A] leading-snug">
                    <span className="font-gilroy-semibold text-primary-orange">Note: </span> Please note that some bookings may/may not allow changes or cancellations. To avoid penalties, cancel as soon as possible if needed.
                </p>
            </div>

            <div className="space-y-4 text-base font-gilroy-medium text-[#16242A] leading-relaxed">
                <div className="flex gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0" />
                    <LineReveal text="Some changes and cancellations are free of charge, while for others you may need to pay a fee." />
                </div>
                <div className="flex gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0" />
                    <LineReveal text="Our policy applies to all the bookings you've made with us." />
                </div>
                <div className="flex gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0" />
                    <LineReveal text="Some bookings are non-refundable. If you cancel a non-refundable booking, you will not receive a refund." />
                </div>
                <div className="flex gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0" />
                    <LineReveal text="Changes to your booking may result in additional fees or penalty, which will be communicated to you prior to making the changes." />
                </div>
                <div className="flex gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0" />
                    <LineReveal text="Changes to your booking are subject to availability and cannot be guaranteed." />
                </div>
                <div className="flex gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0" />
                    <LineReveal text="If you do not show up for your booking without prior notice, you will be considered a no-show." />
                </div>

                <div className="pt-8">
                    <span className="font-gilroy-semibold">Still need help?</span>
                    <br />
                    If you need assistance, <button className="text-primary-orange font-gilroy-semibold hover:underline">please contact us.</button>
                </div>
            </div>
        </div>
    );
};

export default ChangeAndCancel;
