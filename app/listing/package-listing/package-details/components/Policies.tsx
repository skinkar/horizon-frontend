'use client'
import React, { useState } from "react";

const Policies = () => {
    const [isCancellationExpanded, setIsCancellationExpanded] = useState(false);
    const [isRefundExpanded, setIsRefundExpanded] = useState(false);

    return (
        <div className="py-12 border-t border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-12">
                <h2 className="text-3xl font-gilroy-semibold text-[#16242A]">Policies</h2>

                <div className="space-y-6">
                    {/* CANCELLATION & DATE CHANGE */}
                    <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
                        <div className="p-8">
                            <h3 className="text-xl font-gilroy-semibold text-[#16242A] mb-4">Cancellation & Date Change Policy</h3>
                            <hr className="border-gray-100 mb-8" />

                            <div className="space-y-4">
                                <p className="text-center text-xs font-gilroy-semibold text-gray-400 mb-6">Cancellation Charges</p>

                                <div className="flex items-center justify-between gap-4">
                                    <span className="text-sm font-gilroy-medium text-[#16242A] w-32">Before 30 days</span>
                                    <div className="flex-1 bg-[#EBF9FF] py-3 px-6 rounded-xl text-center">
                                        <span className="text-sm font-gilroy-bold text-[#16242A]">0%-5% of Total Amount</span>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between gap-4">
                                    <span className="text-sm font-gilroy-medium text-[#16242A] w-32">30-15 days</span>
                                    <div className="flex-1 bg-[#EBF9FF] py-3 px-6 rounded-xl text-center">
                                        <span className="text-sm font-gilroy-bold text-[#16242A]">0%-50% of Total Amount</span>
                                    </div>
                                </div>

                                {isCancellationExpanded && (
                                    <>
                                        <div className="flex items-center justify-between gap-4">
                                            <span className="text-sm font-gilroy-medium text-[#16242A] w-32">14-0 days</span>
                                            <div className="flex-1 bg-[#EBF9FF] py-3 px-6 rounded-xl text-center">
                                                <span className="text-sm font-gilroy-bold text-[#16242A]">50%-100% of Total Amount</span>
                                            </div>
                                        </div>

                                        {/* AND SEPARATOR */}
                                        <div className="relative py-8 flex items-center justify-center">
                                            <div className="absolute inset-0 flex items-center">
                                                <div className="w-full h-px bg-gradient-to-r from-transparent via-[#FF6A00]/20 to-transparent" />
                                            </div>
                                            <div className="relative px-6 py-1 bg-gradient-to-r from-[#FFF0E6] to-[#FFE5D3] rounded-full">
                                                <span className="text-xs font-gilroy-bold text-[#FF6A00]">And</span>
                                            </div>
                                        </div>

                                        <p className="text-center text-xs font-gilroy-semibold text-gray-400 mb-6">Date Change Charges</p>

                                        <div className="space-y-4">
                                            <div className="flex items-center justify-between gap-4">
                                                <span className="text-sm font-gilroy-medium text-[#16242A] w-32">Before 30 days</span>
                                                <div className="flex-1 bg-[#EBF9FF] py-3 px-6 rounded-xl text-center">
                                                    <span className="text-sm font-gilroy-bold text-[#16242A]">0%-5% of Total Amount</span>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between gap-4">
                                                <span className="text-sm font-gilroy-medium text-[#16242A] w-32">30-15 days</span>
                                                <div className="flex-1 bg-[#EBF9FF] py-3 px-6 rounded-xl text-center">
                                                    <span className="text-sm font-gilroy-bold text-[#16242A]">0%-50% of Total Amount</span>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between gap-4">
                                                <span className="text-sm font-gilroy-medium text-[#16242A] w-32">14-0 days</span>
                                                <div className="flex-1 bg-[#EBF9FF] py-3 px-6 rounded-xl text-center">
                                                    <span className="text-sm font-gilroy-bold text-[#16242A]">50%-100% of Total Amount</span>
                                                </div>
                                            </div>
                                        </div>

                                        <p className="mt-8 text-xs font-gilroy-medium text-gray-500 leading-relaxed">
                                            <span className="text-[#FF6A00] font-gilroy-bold">Note:</span> Please note that some bookings may/may not allow changes or cancellations. To avoid penalties, cancel as soon as possible if needed
                                        </p>
                                    </>
                                )}
                            </div>

                            <div className="flex justify-center mt-8">
                                <button
                                    onClick={() => setIsCancellationExpanded(!isCancellationExpanded)}
                                    className="text-sm font-gilroy-bold text-[#FF6A00] hover:underline"
                                >
                                    {isCancellationExpanded ? "Read Less" : "Read More"}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* REFUND POLICY */}
                    <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
                        <div className="p-8">
                            <h3 className="text-xl font-gilroy-semibold text-[#16242A] mb-8">Refund Policy</h3>

                            <ul className="space-y-6">
                                <li className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 shrink-0" />
                                    <p className="text-sm font-gilroy-medium text-gray-500 leading-relaxed">
                                        Some bookings are non-refundable. For these bookings, you will not receive a refund if you <span className="text-[#FF6A00]">change or cancel.</span>
                                    </p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 shrink-0" />
                                    <p className="text-sm font-gilroy-medium text-gray-500 leading-relaxed">
                                        Some bookings are refundable. For these bookings, you may be eligible for either a partial or full refund if you <span className="text-[#FF6A00]">change or cancel.</span>
                                    </p>
                                </li>
                            </ul>

                            <div className="flex justify-center mt-8">
                                <button
                                    onClick={() => setIsRefundExpanded(!isRefundExpanded)}
                                    className="text-sm font-gilroy-bold text-[#FF6A00] hover:underline"
                                >
                                    {isRefundExpanded ? "Read Less" : "Read More"}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* PAYMENTS POLICY */}
                    <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
                        <div className="p-8">
                            <h3 className="text-xl font-gilroy-semibold text-[#16242A] mb-4">Payments Policy</h3>
                            <hr className="border-gray-100 mb-8" />

                            <div className="space-y-4">
                                <p className="text-center text-xs font-gilroy-semibold text-gray-400 mb-6">Booking Amount To Be Paid</p>

                                {[
                                    { time: "Before 30 days", amount: "25% of Total Amount" },
                                    { time: "30-20 days", amount: "30% of Total Amount" },
                                    { time: "20-14 days", amount: "40% of Total Amount" },
                                    { time: "14-7 days", amount: "55% of Total Amount" },
                                    { time: "7-3 days", amount: "75% of Total Amount" },
                                    { time: "12-3 hrs", amount: "100% of Total Amount" },
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center justify-between gap-4">
                                        <span className="text-sm font-gilroy-medium text-[#16242A] w-32">{item.time}</span>
                                        <div className="flex-1 bg-[#EBF9FF] py-3 px-6 rounded-xl text-center">
                                            <span className="text-sm font-gilroy-bold text-[#16242A]">{item.amount}</span>
                                        </div>
                                    </div>
                                ))}

                                {/* OR SEPARATOR */}
                                <div className="relative py-8 flex items-center justify-center">
                                    <div className="absolute inset-0 flex items-center">
                                        <div className="w-full h-px bg-linear-to-r from-transparent via-[#FF6A00]/20 to-transparent" />
                                    </div>
                                    <div className="relative px-6 py-1 bg-linear-to-r from-[#FFF0E6] to-[#FFE5D3] rounded-full">
                                        <span className="text-xs font-gilroy-bold text-[#FF6A00]">Or</span>
                                    </div>
                                </div>

                                <div className="mt-4">
                                    <h4 className="text-base font-gilroy-bold text-[#16242A] mb-6">Flexible Payments</h4>
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between gap-4">
                                            <span className="text-sm font-gilroy-medium text-[#16242A] w-32">During Booking</span>
                                            <div className="flex-1 bg-[#EBF9FF] py-3 px-6 rounded-xl text-center">
                                                <span className="text-sm font-gilroy-bold text-[#16242A]">Pay 25% of Total Amount</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between gap-4">
                                            <span className="text-sm font-gilroy-medium text-[#16242A] w-32">Before 48hrs</span>
                                            <div className="flex-1 bg-[#EBF9FF] py-3 px-6 rounded-xl text-center">
                                                <span className="text-sm font-gilroy-bold text-[#16242A]">Remaining 75% of Total Amount Left</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <p className="mt-8 text-xs font-gilroy-medium text-gray-400 leading-relaxed pb-4">
                                You can settle the remaining balance ( i.e. 75% of the total amount ) at your convenience.<br />
                                However, the full amount must be paid at least 48 hours prior to travel.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Policies;
