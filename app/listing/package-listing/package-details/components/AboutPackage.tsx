'use client'
import React from "react";
import {
    Check,
    X,
    ShieldCheck,
    Users,
    Sparkles,
    Backpack,
    Shirt,
    Smartphone,
    Waves
} from "lucide-react";

const AboutPackage = () => {
    return (
        <div className="py-12 border-t border-gray-200">
            <h2 className="text-3xl font-gilroy-semibold text-[#16242A] mb-12">About this Package</h2>

            {/* SERVICES INCLUDED/NOT INCLUDED */}
            <div className="mb-16">
                <h3 className="text-base font-gilroy-bold text-[#16242A] mb-8">Services Included/Not Included</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                    <div className="space-y-4">
                        <InclusionItem text="Private AC car/van for airport transfers, sightseeing, and excursions as per the programme." isIncluded />
                        <InclusionItem text="Government taxes" isIncluded />
                        <InclusionItem text="Bottled drinking water in the car" isIncluded />
                        <InclusionItem text="Monument entrances and activity charges mentioned in the itinerary" isIncluded />
                    </div>
                    <div className="space-y-4">
                        <InclusionItem text="Any flight ticket" isIncluded={false} />
                        <InclusionItem text="Meals other than mentioned in inclusions" isIncluded={false} />
                        <InclusionItem text="Service charge and optional activities" isIncluded={false} />
                        <InclusionItem text="Expenses of personal nature like liquor, laundry, tips, etc" isIncluded={false} />
                        <InclusionItem text="Anything not mentioned in the inclusions" isIncluded={false} />
                    </div>
                </div>
            </div>

            {/* KNOW BEFORE YOU BOOK */}
            <div className="mb-16">
                <h3 className="text-base font-gilroy-bold text-[#16242A] mb-6">Know before you book</h3>
                <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-sm font-gilroy-medium text-gray-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 flex-shrink-0" />
                        Public transport options are available nearby
                    </li>
                    <li className="flex items-start gap-2 text-sm font-gilroy-medium text-gray-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 flex-shrink-0" />
                        Suitable for all physical fitness levels
                    </li>
                </ul>
            </div>

            {/* CLEANING AND SAFETY */}
            <div className="mb-16">
                <h3 className="text-base font-gilroy-bold text-[#16242A] mb-8">Cleaning and Safety Practices</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <Sparkles size={20} className="text-[#16242A]" />
                            <h4 className="text-sm font-gilroy-bold text-[#16242A]">Enhanced cleanliness measures</h4>
                        </div>
                        <ul className="space-y-3 ml-7">
                            <li className="text-xs font-gilroy-medium text-gray-500 list-disc">Vehicles and venues cleaned with disinfectants</li>
                            <li className="text-xs font-gilroy-medium text-gray-500 list-disc">Gear and equipment sanitised between use</li>
                        </ul>
                    </div>
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <Users size={20} className="text-[#16242A]" />
                            <h4 className="text-sm font-gilroy-bold text-[#16242A]">Social distancing</h4>
                        </div>
                        <ul className="space-y-3 ml-7">
                            <li className="text-xs font-gilroy-medium text-gray-500 list-disc">Contactless payment for service charge and add-ons</li>
                        </ul>
                    </div>
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <ShieldCheck size={20} className="text-[#16242A]" />
                            <h4 className="text-sm font-gilroy-bold text-[#16242A]">Safety measures</h4>
                        </div>
                        <ul className="space-y-3 ml-7">
                            <li className="text-xs font-gilroy-medium text-gray-500 list-disc">Temperature checks given to staff</li>
                            <li className="text-xs font-gilroy-medium text-gray-500 list-disc">Masks provided</li>
                            <li className="text-xs font-gilroy-medium text-gray-500 list-disc">Hand sanitiser provided</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* WHAT TO CARRY */}
            <div className="flex justify-between">
                <h3 className="text-3xl font-gilroy-semibold text-[#16242A]">What to Carry</h3>
                <div className="space-y-12">
                    {/* Comfortable Clothing */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <Shirt size={20} className="text-[#16242A]" />
                            <h4 className="text-sm font-gilroy-bold text-[#16242A]">Comfortable Clothing</h4>
                        </div>
                        <ul className="space-y-3 ml-7">
                            <li className="text-xs font-gilroy-medium text-gray-500 list-disc leading-relaxed">Lightweight and breathable clothing suitable for layering.</li>
                            <li className="text-xs font-gilroy-medium text-gray-500 list-disc leading-relaxed">Long-sleeved shirts and pants to protect against sun exposure and insects.</li>
                            <li className="text-xs font-gilroy-medium text-gray-500 list-disc leading-relaxed">Warm layers for cooler temperatures, especially during evenings or at higher altitudes.</li>
                            <li className="text-xs font-gilroy-medium text-gray-500 list-disc leading-relaxed">Sturdy and comfortable walking shoes or hiking boots.</li>
                            <li className="text-xs font-gilroy-medium text-gray-500 list-disc leading-relaxed">Extra socks for longer treks or changing weather conditions.</li>
                        </ul>
                    </div>

                    {/* Essential Gears */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <Backpack size={20} className="text-[#16242A]" />
                            <h4 className="text-sm font-gilroy-bold text-[#16242A]">Essential Gears</h4>
                        </div>
                        <ul className="space-y-3 ml-7">
                            <li className="text-xs font-gilroy-medium text-gray-500 list-disc leading-relaxed">Hat, sunglasses, and sunscreen with high SPF for sun protection.</li>
                            <li className="text-xs font-gilroy-medium text-gray-500 list-disc leading-relaxed">Insect or mosquito spray/protection to keep insects or mosquitoes away.</li>
                            <li className="text-xs font-gilroy-medium text-gray-500 list-disc leading-relaxed">Rain jacket or poncho in case of unexpected showers.</li>
                            <li className="text-xs font-gilroy-medium text-gray-500 list-disc leading-relaxed">Daypack or backpack for carrying essentials.</li>
                            <li className="text-xs font-gilroy-medium text-gray-500 list-disc leading-relaxed">Headlamp or LED flashlight with extra batteries for nighttime visibility.</li>
                        </ul>
                    </div>

                    {/* Hydration & Snacks */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <Waves size={20} className="text-[#16242A]" />
                            <h4 className="text-sm font-gilroy-bold text-[#16242A]">Hydration & Snacks</h4>
                        </div>
                        <ul className="space-y-3 ml-7">
                            <li className="text-xs font-gilroy-medium text-gray-500 list-disc leading-relaxed">Drinking water bottle or hydration bladder to stay hydrated.</li>
                            <li className="text-xs font-gilroy-medium text-gray-500 list-disc leading-relaxed">Snacks or energy bars for quick nourishment during hikes or long walks.</li>
                        </ul>
                    </div>

                    {/* Photography & Electronics */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <Smartphone size={20} className="text-[#16242A]" />
                            <h4 className="text-sm font-gilroy-bold text-[#16242A]">Photography & Electronics</h4>
                        </div>
                        <ul className="space-y-3 ml-7">
                            <li className="text-xs font-gilroy-medium text-gray-500 list-disc leading-relaxed">Camera or smartphone for capturing beautiful moments.</li>
                            <li className="text-xs font-gilroy-medium text-gray-500 list-disc leading-relaxed">Extra batteries or power bank for electronic devices.</li>
                        </ul>
                    </div>

                    {/* Personal Care & Safety */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <ShieldCheck size={20} className="text-[#16242A]" />
                            <h4 className="text-sm font-gilroy-bold text-[#16242A]">Personal Care & Safety</h4>
                        </div>
                        <ul className="space-y-3 ml-7">
                            <li className="text-xs font-gilroy-medium text-gray-500 list-disc leading-relaxed">Basic first aid kit with band-aids, antiseptic ointment, pain relievers, and any necessary prescription medications.</li>
                            <li className="text-xs font-gilroy-medium text-gray-500 list-disc leading-relaxed">Hand sanitiser or wet wipes for hygiene purposes.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

function InclusionItem({ text, isIncluded }: { text: string; isIncluded: boolean }) {
    return (
        <div className="flex items-start gap-3">
            {isIncluded ? (
                <Check size={16} className="text-gray-900 mt-0.5" />
            ) : (
                <X size={16} className="text-gray-900 mt-0.5" />
            )}
            <span className="text-sm font-gilroy-medium text-gray-600 leading-relaxed">{text}</span>
        </div>
    );
}

export default AboutPackage;
