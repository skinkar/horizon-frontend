"use client";

import React from "react";
import { LineReveal } from "@/app/utils/animation";
import SupportAccordion from "./SupportAccordion";
import SupportSectionAccordion from "./SupportSectionAccordion";
import { ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";

const RewardsContent = () => {
    const faqs = [
        { title: "How Do I Join Phoenix Fly Rewards?", content: "You can join Phoenix Fly Rewards by signing up on our website. Once you create an account, you'll be automatically enrolled into our rewards program." },
    ];

    const terms = [
        { title: "Terms & Conditions Info", content: "Phoenix Fly Rewards points are non-transferable and have no cash value. Points expire after 12 months of inactivity." },
    ];

    return (
        <div className="flex-1 max-w-3xl">
            <div className="bg-white border border-gray-100 rounded-[2rem] p-8">
                <h2 className="text-4xl font-gilroy-semibold text-[#16242A] mb-10">
                    Phoenix Fly Rewards
                </h2>

                <div className="relative mb-12">
                    {/* Navigation Arrows */}
                    <button className="absolute -left-6 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-black transition-colors hidden md:block">
                        <ChevronLeft size={24} />
                    </button>
                    <button className="absolute -right-6 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-black transition-colors hidden md:block">
                        <ChevronRight size={24} />
                    </button>

                    <div className="flex flex-col md:flex-row gap-10 items-stretch">
                        <div className="w-full md:w-1/2 bg-linear-to-br from-[#00A3FF] to-[#0057FF] rounded-2xl p-6 text-white flex flex-col justify-between relative overflow-hidden shadow-lg min-h-[240px]">
                            <div className="relative z-10">
                                <h4 className="text-xl font-gilroy-bold">Phoenix Fly</h4>
                            </div>
                            <div className="relative z-10">
                                <p className="text-xs font-gilroy-medium opacity-80 mb-1">Explorer</p>
                                <p className="text-xl font-gilroy-semibold">Tarun Singh</p>
                            </div>
                            {/* Card Background Patterns */}
                            <div className="absolute right-0 top-0 w-full h-full opacity-20 pointer-events-none">
                                <div className="absolute right-4 top-4 border-2 border-white rounded-full w-8 h-8 flex items-center justify-center">
                                    <span className="text-[8px]">✈</span>
                                </div>
                                <div className="absolute right-12 top-12 border border-white rounded-md w-6 h-6 rotate-12" />
                            </div>
                            <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-white/10 rounded-full" />
                        </div>

                        <div className="w-full md:w-1/2 flex flex-col justify-between py-1">
                            <div>
                                <h4 className="text-xl font-gilroy-semibold text-primary-orange mb-4">Explorer</h4>
                                <ul className="space-y-4">
                                    <li className="flex items-center gap-3 text-sm font-gilroy-medium text-[#16242A]">
                                        <CheckCircle2 size={24} className="text-primary-orange shrink-0" />
                                        <span>Earn 1% points on total booking amount.</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-sm font-gilroy-medium text-[#16242A]">
                                        <CheckCircle2 size={24} className="text-primary-orange shrink-0" />
                                        <span>500 points on first booking completion.</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-sm font-gilroy-medium text-[#16242A]">
                                        <CheckCircle2 size={24} className="text-primary-orange shrink-0" />
                                        <span>Daily Login Bonus: 10 points per day.</span>
                                    </li>
                                </ul>
                                <button className="mt-5 text-base font-gilroy-semibold text-[#16242A] underline hover:text-primary-orange transition-colors">
                                    Know More
                                </button>
                            </div>
                            <div className="flex gap-2 pt-4">
                                <div className="w-2.5 h-2.5 rounded-full bg-primary-orange" />
                                <div className="w-2.5 h-2.5 rounded-full bg-gray-200" />
                                <div className="w-2.5 h-2.5 rounded-full bg-gray-200" />
                                <div className="w-2.5 h-2.5 rounded-full bg-gray-200" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-14">
                    <button className="bg-[#1C2C34] text-white px-10 py-4 rounded-xl font-gilroy-semibold text-sm hover:bg-black transition-all shadow-md">
                        View My Rewards & Status
                    </button>
                </div>

                <div className="space-y-4">
                    <SupportSectionAccordion title="FAQs">
                        <SupportAccordion title="" items={faqs} variant="chevron" />
                    </SupportSectionAccordion>

                    <SupportSectionAccordion title="Terms & Conditions">
                        <div className="text-base font-gilroy-medium text-[#16242A] leading-relaxed">
                            {terms[0].content}
                        </div>
                    </SupportSectionAccordion>
                </div>
            </div>
        </div>
    );
};

export default RewardsContent;
