import React from "react";
import { LineReveal } from "@/app/utils/animation";

type Step = {
    step: string;
    title: string;
    description: string;
    icon: string;
};

const steps: Step[] = [
    {
        step: "STEP 1",
        title: "Make Bookings",
        description:
            "Book from our multiple range of packages curated for you.",
        icon: "/offers/steps/step1.svg",
    },
    {
        step: "STEP 2",
        title: "Earn Reward Points",
        description:
            "Earn rewards points on every booking you make with us.",
        icon: "/offers/steps/step2.svg",
    },
    {
        step: "STEP 3",
        title: "Redeem Rewards",
        description:
            "Redeem 100% points on your next travel booking.",
        icon: "/offers/steps/step3.svg",
    },
    {
        step: "STEP 4",
        title: "Keep Earning More!",
        description:
            "Continue to earn reward points on every booking.",
        icon: "/offers/steps/step4.svg",
    },
];

const HowItWorks: React.FC = () => {
    return (
        <section className="py-16 px-8">
            <div className="mx-auto max-w-6xl ">
                {/* Title */}
                <h2 className="mb-10 text-center text-3xl md:text-4xl font-gilroy-semibold text-gray-900">
                    <LineReveal text="How It Works" />
                </h2>

                {/* Steps */}
                <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
                    {steps.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center"
                        >
                            {/* Icon */}
                            <div className="mb-6 flex h-36 w-36 items-center justify-center rounded-full bg-[#e6f4fb]">
                                <img
                                    src={item.icon}
                                    alt={item.title}
                                    className="object-contain w-32 h-32"
                                />
                            </div>

                            {/* Step label */}
                            <span className="mb-2 text-xs font-gilroy-semibold tracking-widest text-primary-orange">
                                {item.step}
                            </span>

                            {/* Title */}
                            <h3 className=" text-lg font-gilroy-semibold text-gray-900">
                                {item.title}
                            </h3>

                            {/* Description */}
                            <p className="max-w-[240px] text-sm font-gilroy-medium leading-relaxed text-gray-500">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
