"use client";

import React from "react";
import { LineReveal } from "@/app/utils/animation";

const TravelDocuments = () => {
    return (
        <div className="flex-1 max-w-2xl">
            <h2 className="text-4xl font-gilroy-semibold text-[#16242A] mb-8">
                Travel Documents
            </h2>

            <div className="space-y-10">
                <section>
                    <h3 className="text-xl font-gilroy-semibold text-primary-orange mb-2">Passports</h3>
                    <div className="text-base font-gilroy-medium text-[#16242A] leading-relaxed">
                        <LineReveal text="A valid passport with at least six months validity beyond the date of return is required for international travel to India." />
                    </div>
                </section>

                <section>
                    <h3 className="text-xl font-gilroy-semibold text-primary-orange mb-2">Domestic Travelers within India</h3>
                    <div className="text-base font-gilroy-medium text-[#16242A] leading-relaxed">
                        <LineReveal text="A valid government-issued ID proof such as Aadhaar Card, Voter ID Card, or Passport is required." />
                    </div>
                </section>

                <section>
                    <h3 className="text-xl font-gilroy-semibold text-primary-orange mb-2">Visas</h3>
                    <div className="text-base font-gilroy-medium text-[#16242A] leading-relaxed">
                        <LineReveal text="A travel visa grants international travelers the right to enter and depart a specific country for a specific period of time. It is an essential document that must be obtained before your trip to avoid any travel delays or issues." />
                    </div>
                </section>
            </div>
        </div>
    );
};

export default TravelDocuments;
