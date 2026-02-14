"use client";

import React from "react";
import { LineReveal } from "@/app/utils/animation";

const SocialMediaSupport = () => {
    return (
        <div className="flex-1 max-w-2xl">
            <h2 className="text-4xl font-gilroy-semibold text-[#16242A] mb-4">
                Social Media Support
            </h2>

            <div className="text-base font-gilroy-medium text-[#16242A] mb-8 leading-relaxed">
                <LineReveal text="Reach out to us through social media channels." />
            </div>

            <div className="flex gap-1 mb-8">
                <a href="#" className="p-2 border border-gray-100 rounded-full hover:bg-gray-50 transition-colors">
                    <img src="/icons/ic_baseline-facebook.svg" alt="Facebook" className="" />
                </a>
                <a href="#" className="p-2 border border-gray-100 rounded-full hover:bg-gray-50 transition-colors">
                    <img src="/icons/fe_instagram.svg" alt="Instagram" className="" />
                </a>
                <a href="#" className="p-2 border border-gray-100 rounded-full hover:bg-gray-50 transition-colors">
                    <img src="/icons/ant-design_whats-app-outlined.svg" alt="WhatsApp" className="" />
                </a>
                <a href="#" className="p-2 border border-gray-100 rounded-full hover:bg-gray-50 transition-colors">
                    <img src="/icons/mdi_twitter.svg" alt="Twitter" className="" />
                </a>
                <a href="#" className="p-2 border border-gray-100 rounded-full hover:bg-gray-50 transition-colors">
                    <img src="/icons/ri_youtube-fill.svg" alt="YouTube" className="" />
                </a>
            </div>

            <div className="text-base font-gilroy-medium text-[#16242A] leading-relaxed">
                <LineReveal text="Our social media accounts are monitored and we aim to respond to direct messages within 5-10 minutes." />
            </div>
        </div>
    );
};

export default SocialMediaSupport;
