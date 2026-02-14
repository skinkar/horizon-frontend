"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface SupportSectionAccordionProps {
    title: string;
    children: React.ReactNode;
}

const SupportSectionAccordion = ({ title, children }: SupportSectionAccordionProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-gray-100 rounded-lg bg-white overflow-hidden transition-all mb-4">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-4 text-left"
            >
                <span className="text-lg font-gilroy-semibold text-primary-orange">
                    {title}
                </span>
                <ChevronDown
                    className={`h-6 w-6 text-gray-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                        }`}
                />
            </button>
            <div
                className={`transition-all duration-500 ease-in-out ${isOpen ? "max-h-[1000px] opacity-100 pb-8" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="px-8 border-t border-gray-50 pt-6">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default SupportSectionAccordion;
