"use client";

import React, { useState } from "react";
import { ChevronDown, Plus, Minus } from "lucide-react";

interface AccordionItem {
    title: string;
    content: string;
}

interface SupportAccordionProps {
    title?: string;
    items: AccordionItem[];
    variant?: "plus-minus" | "chevron";
    titleColor?: string;
    isFlat?: boolean;
}

const SupportAccordion = ({ title, items, variant = "chevron", titleColor = "#16242A", isFlat = false }: SupportAccordionProps) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <div className={title ? "mt-8" : ""}>
            {title && (
                <h3 className={`text-xl font-gilroy-semibold mb-6`} style={{ color: titleColor }}>
                    {title}
                </h3>
            )}
            <div className={isFlat ? "divide-y divide-gray-100" : "space-y-4"}>
                {items.map((item, index) => (
                    <div
                        key={index}
                        className={isFlat
                            ? "bg-white overflow-hidden transition-all"
                            : "border border-gray-100 rounded-2xl bg-white overflow-hidden transition-all"
                        }
                    >
                        <button
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            className={`w-full flex items-center justify-between transition-all ${isFlat ? 'py-4' : 'p-6'} text-left`}
                        >
                            <span className={`font-gilroy-semibold text-[#16242A] ${isFlat ? 'text-sm' : 'text-base'}`}>
                                {item.title}
                            </span>
                            {variant === "chevron" ? (
                                <ChevronDown
                                    className={`h-5 w-5 text-gray-400 transition-transform ${openIndex === index ? "rotate-180" : ""
                                        }`}
                                />
                            ) : (
                                openIndex === index ? (
                                    <Minus className="h-5 w-5 text-gray-400" />
                                ) : (
                                    <Plus className="h-5 w-5 text-gray-400" />
                                )
                            )}
                        </button>
                        <div
                            className={`transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                                }`}
                        >
                            <div className={`${isFlat ? 'pb-4' : 'px-6 pb-6 pt-4'} text-base font-gilroy-medium text-[#16242A] ${!isFlat && 'border-t border-gray-50'}`}>
                                {item.content}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SupportAccordion;
