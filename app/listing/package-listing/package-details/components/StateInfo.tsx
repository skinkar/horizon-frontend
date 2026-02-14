'use client'
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface StateData {
    id: string;
    name: string;
    description: string;
}

const statesData: StateData[] = [
    {
        id: "hp",
        name: "Himachal Pradesh",
        description: "Himachal Pradesh, located in the northern part of India, is a state surrounded by majestic mountains, lush valleys, gurgling streams, and crystal-clear lakes. It is often referred to as 'The Land of Gods' due to its rich cultural heritage and numerous temples. The state offers a diverse range of activities for travelers, from trekking and paragliding to exploring quaint hill stations and ancient monasteries. With its breathtaking landscapes and pleasant climate, Himachal Pradesh is a popular destination for nature lovers and adventure seekers alike. Whether you're seeking solitude in the mountains or looking for an adrenaline-pumping experience, Himachal Pradesh has something to offer everyone."
    },
    {
        id: "goa",
        name: "Goa",
        description: "Goa is famous for its beautiful beaches, Portuguese colonial architecture, and vibrant nightlife. Located on the west coast of India, it attracts millions of domestic and international tourists annually. Beyond the beaches, Goa offers spice plantations, historic churches (a UNESCO World Heritage site), and a unique fusion of Indian and Portuguese cultures. The state is also known for its delicious seafood and lively festivals."
    },
    {
        id: "kerala",
        name: "Kerala",
        description: "Kerala, known as 'God's Own Country', is a serene state on India's tropical Malabar Coast. It is famous for its palm-lined beaches, backwaters, network of canals, and the mountains of the Western Ghats. The state is renowned for its Ayurvedic treatments and various art forms like Kathakali and Mohiniyattam. Kerala is also home to Eravikulam National Park and Periyar National Park, known as elephant and tiger sanctuaries."
    },
    {
        id: "mp",
        name: "Madhya Pradesh",
        description: "Madhya Pradesh, located in central India, is often called the 'Heart of India'. It is known for its rich history and heritage, featuring landmarks from various eras. Khajuraho's Hindu and Jain temples, famous for their erotic sculptures, and the monumental Sanchi Stupa are UNESCO World Heritage sites. The state also boasts several national parks, including Kanha and Bandhavgarh, which are key habitats for the Royal Bengal Tiger."
    },
];

const StateInfo = () => {
    const [activeTab, setActiveTab] = useState(statesData[0].id);
    const [isExpanded, setIsExpanded] = useState(false);

    const activeState = statesData.find(s => s.id === activeTab) || statesData[0];

    return (
        <div className="my-12 bg-white rounded-3xl border border-gray-100 shadow-sm p-8 max-w-6xl mx-auto">
            {/* TABS SLIDER */}
            <div className="relative flex items-center mb-8">
                <button className="p-2 text-gray-400 hover:text-gray-900 transition-colors">
                    <ChevronLeft size={20} />
                </button>
                <div className="flex-1 flex gap-4 overflow-x-auto no-scrollbar px-2">
                    {statesData.map((state) => (
                        <button
                            key={state.id}
                            onClick={() => {
                                setActiveTab(state.id);
                                setIsExpanded(false);
                            }}
                            className={`px-8 py-4 rounded-lg border font-gilroy-semibold text-base transition-all whitespace-nowrap ${activeTab === state.id
                                ? "border-[#FF6A00] text-[#FF6A00] bg-white"
                                : "border-gray-100 text-[#16242A] bg-white hover:border-gray-200"
                                }`}
                        >
                            {state.name}
                        </button>
                    ))}
                </div>
                <button className="p-2 text-gray-400 hover:text-gray-900 transition-colors">
                    <ChevronRight size={20} />
                </button>
            </div>

            {/* CONTENT */}
            <div>
                <h3 className="text-xl font-gilroy-semibold text-[#16242A] mb-3">About {activeState.name}</h3>
                <hr className="border-black mb-8" />

                <div className="relative">
                    <p className={`text-sm font-gilroy-medium text-gray-500 leading-relaxed text-center ${!isExpanded ? "line-clamp-2" : ""}`}>
                        {activeState.description}
                    </p>

                    <div className="flex justify-center mt-6">
                        <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="text-sm font-gilroy-bold text-[#FF6A00] hover:underline transition-all"
                        >
                            {isExpanded ? "Read Less" : "Read More"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StateInfo;
