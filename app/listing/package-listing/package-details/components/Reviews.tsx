"use client";

import React from "react";
import { Star, Search, ChevronDown, ThumbsUp, ThumbsDown, CheckCircle } from "lucide-react";

const ratingDistribution = [
    { label: "5 (Excellent)", count: 78, color: "#FF6A00" },
    { label: "4 (Very Good)", count: 20, color: "#FF6A00" },
    { label: "3 (Good)", count: 16, color: "#FF6A00" },
    { label: "2 (Fair)", count: 4, color: "#FF6A00" },
];

const tags = [
    "Wonderful experience",
    "Beautiful location",
    "Excellent food",
    "Best for family travel",
    "Awesome Dinner",
    "Amazing Cleanliness",
    "Efficient Staff",
    "Value for money",
    "Great amenities",
    "Couple friendly",
];

const Reviews = () => {
    return (
        <div id="reviews" className="w-full pb-20">
            <div className="flex justify-between items-start mb-2">
                <div>
                    <h2 className="text-4xl font-gilroy-bold text-[#16242A]">User Rating & Reviews</h2>
                    <p className="text-sm font-gilroy-medium text-gray-500 mt-2">
                        Discover The Collective Wisdom Of The Crowd Through User Ratings And Reviews
                    </p>
                </div>
                <button className="bg-[#FF6A00] text-white px-8 py-3 rounded-xl font-gilroy-bold text-base hover:bg-[#e65f00] transition-colors shadow-lg shadow-orange-500/20">
                    Write A Review
                </button>
            </div>

            {/* Ratings Summary */}
            <div className="flex flex-col md:flex-row items-center gap-12 mt-10 mb-12">
                <div className="flex items-center gap-4">
                    <span className="text-7xl font-gilroy-bold text-[#FF6A00]">5.0</span>
                    <div>
                        <h3 className="text-3xl font-gilroy-bold text-[#16242A]">Excellent</h3>
                        <p className="text-sm font-gilroy-medium text-gray-500">128 Verified Reviews</p>
                    </div>
                </div>

                <div className="flex-1 w-full max-w-2xl space-y-3">
                    {ratingDistribution.map((item) => (
                        <div key={item.label} className="flex items-center gap-4">
                            <span className="text-xs font-gilroy-medium text-[#16242A] w-24">
                                {item.label}
                            </span>
                            <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-[#FF6A00]"
                                    style={{ width: `${(item.count / 128) * 100}%` }}
                                />
                            </div>
                            <span className="text-xs font-gilroy-medium text-[#16242A] w-4 text-right">
                                {item.count}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Filters */}
            <div className="flex flex-col gap-6 mb-8">
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1 relative">
                        <input
                            type="text"
                            placeholder="Search By Destination, Hotel or Package"
                            defaultValue="Manali"
                            className="w-full bg-white border border-gray-100 rounded-xl px-12 py-4 text-sm font-gilroy-medium text-[#16242A] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FF6A00]/20"
                        />
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    </div>
                    <div className="w-full md:w-64 relative">
                        <button className="w-full bg-white border border-gray-100 rounded-xl px-4 py-4 text-sm font-gilroy-medium text-[#16242A] shadow-sm flex justify-between items-center">
                            <div className="text-left">
                                <span className="text-[10px] text-gray-400 block leading-none mb-1">Sort By</span>
                                <span>Most Rated</span>
                            </div>
                            <ChevronDown size={18} className="text-gray-400" />
                        </button>
                    </div>
                </div>

                <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <button
                            key={tag}
                            className="bg-white border border-gray-100 px-4 py-2.5 rounded-lg text-xs font-gilroy-semibold text-[#16242A] shadow-sm hover:border-[#FF6A00]/30 transition-colors"
                        >
                            {tag}
                        </button>
                    ))}
                </div>
            </div>

            {/* Review List */}
            <div className="space-y-6">
                <ReviewCard />
            </div>
        </div>
    );
};

const ReviewCard = () => {
    return (
        <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-50">
            <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#FF6A00] text-white px-2 py-0.5 rounded flex items-center gap-1">
                    <span className="text-sm font-gilroy-bold">5</span>
                    <Star size={12} fill="white" />
                </div>
                <h4 className="text-2xl font-gilroy-bold text-[#16242A]">Excellent</h4>
            </div>

            <p className="text-lg font-gilroy-semibold text-[#16242A] mb-4">
                Staycation At Novotel | Goa | Nature Travel
            </p>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-gilroy-medium text-[#16242A] mb-6">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                        <img src="https://i.pravatar.cc/150?u=tarun" alt="Tarun Singh" />
                    </div>
                    <span>Tarun Singh</span>
                </div>
                <span className="text-gray-400">•</span>
                <span className="text-gray-500">Jul 08, 2023</span>
                <span className="text-gray-400">•</span>
                <div className="flex items-center gap-1.5 text-[#FF6A00]">
                    <CheckCircle size={16} fill="currentColor" className="text-white" />
                    <span className="font-gilroy-semibold">Verified Traveler</span>
                </div>
                <span className="text-gray-400">•</span>
                <span className="text-gray-500">Category: Family</span>
                <span className="text-gray-400">•</span>
                <span className="text-gray-500">2-Night Stay</span>
            </div>

            <p className="text-sm font-gilroy-medium text-gray-600 leading-relaxed mb-6">
                This Was My Third Stay At Novotel And I Am Not At All Disappointed. I Just Loved Every Bit Of My Stay At This Hotel Such A Wonderful Property And Humble Staff They Have Especially The Restaurant And Chef Himself.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-8">
                {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="aspect-square rounded-xl overflow-hidden relative group cursor-pointer">
                        <img
                            src={`https://images.unsplash.com/photo-${1500000000000 + i}?auto=format&fit=crop&q=80&w=300`}
                            alt="Review"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            onError={(e) => {
                                e.currentTarget.src = "https://images.unsplash.com/photo-1548574505-12737bc4181f?auto=format&fit=crop&q=80&w=300";
                            }}
                        />
                        {i === 5 && (
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                <div className="text-white text-center">
                                    <span className="text-xl font-gilroy-bold">5+</span>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div className="flex items-center gap-4">
                <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-50 border border-gray-100 text-sm font-gilroy-semibold text-gray-700 hover:bg-gray-100 transition-colors">
                    <ThumbsUp size={16} />
                    <span>15</span>
                </button>
                <div className="w-1 h-1 bg-gray-300 rounded-full" />
                <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-50 border border-gray-100 text-sm font-gilroy-semibold text-gray-700 hover:bg-gray-100 transition-colors">
                    <ThumbsDown size={16} />
                    <span>2</span>
                </button>
            </div>
        </div>
    );
};

export default Reviews;
