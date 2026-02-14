import React from "react";
import Link from "next/link";
import { ArrowLeft, Heart, Share2, Star, Check, Clock, Smartphone, Zap, CreditCard, Users, FileText, ShieldCheck, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Itinerary from "./components/Itinerary";
import HotelAvailability from "./components/HotelAvailability";
import AboutPackage from "./components/AboutPackage";
import StateInfo from "./components/StateInfo";
import Policies from "./components/Policies";
import Location from "./components/Location";
import Reviews from "./components/Reviews";

const PackageDetails = () => {
    return (
        <div className="min-h-screen bg-[#F2F4F6] py-12 pt-20">
            <div className="max-w-6xl mx-auto px-6 py-4">
                {/* TOP NAVIGATION */}
                <div className="flex justify-between items-center mb-6">
                    <Link
                        href="/listing/package-listing"
                        className="flex items-center gap-2 text-base font-gilroy-medium text-[#16242A] hover:opacity-80 transition-opacity"
                    >
                        <ArrowLeft size={18} />
                        See all Packages
                    </Link>
                    <span className="font-gilroy-medium text-[#16242A]">
                        Package ID: #PKG1231
                    </span>
                </div>

                {/* IMAGE GALLERY */}
                <ImageGallery />

                {/* STICKY TABS */}
                <NavigationTabs />

                <div className="mt-8 gap-8">
                    <div>
                        {/* TITLE & BADGE */}
                        <div className="flex justify-between items-start mb-6 ">
                            <div>
                                <div className="flex items-center gap-3 mb-2">
                                    <h1 className="text-3xl font-gilroy-bold text-[#16242A]">
                                        Kullu, Manali & Shimla by Flight
                                    </h1>
                                    <span className="bg-[#FFF0E6] text-[#FF6A00] text-xs font-gilroy-semibold px-3 py-1 rounded-full border border-[#FF6A00]/20">
                                        Romantic Travel
                                    </span>
                                </div>
                            </div>
                            <button className="p-2.5 rounded-xl bg-white shadow-sm hover:bg-gray-50 transition-colors border border-gray-100">
                                <Heart size={20} className="text-gray-400" />
                            </button>
                        </div>

                        {/* FEATURES GRID */}
                        <div className="mb-8">
                            <h3 className="text-base font-gilroy-bold mb-4">Features</h3>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-2">
                                <FeatureItem icon={<Check size={16} />} text="Free Cancellation Available" />
                                <FeatureItem icon={<Clock size={16} />} text="4D" />
                                <FeatureItem icon={<Smartphone size={16} />} text="Mobile voucher" />
                                <FeatureItem icon={<Zap size={16} />} text="Instant confirmation" />
                                <FeatureItem icon={<CreditCard size={16} />} text="Payment Methods" />
                                <FeatureItem icon={<Users size={16} />} text="4 People" />
                                <FeatureItem icon={<FileText size={16} />} text="Visa" />
                                <FeatureItem icon={<ShieldCheck size={16} />} text="Visa & Insurance" />
                            </div>
                        </div>

                        <hr className="border-black mb-8" />

                        {/* OVERVIEW */}
                        <div className="mb-12">
                            <h3 className="text-xl font-gilroy-bold mb-3">Overview</h3>
                            <p className="text-sm font-gilroy-medium text-gray-600 leading-relaxed">
                                Get your trip off to a great start with a stay at this property, which offers free Wi-Fi in all rooms. Strategically situated in Pahar Ganj, allowing you access and proximity to local attractions and sights. Don't leave before paying a visit to the famous Qutub Minar and proximity to local attractions and sights. Don't leave before paying a visit to the famous Qutub Minar.
                            </p>
                        </div>
                        <PackageHighlights />
                        {/* PACKAGE HIGHLIGHTS */}
                        <Itinerary />
                        <HotelAvailability />
                        <AboutPackage />
                        <StateInfo />
                        <Policies />
                        <Location />
                        <Reviews />
                    </div>
                </div>
            </div>
        </div>
    );
};

function ImageGallery() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-3 h-[450px] mb-6">
            <div className="md:col-span-2 md:row-span-2 rounded-2xl overflow-hidden relative">
                <img
                    src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&q=80&w=1000"
                    alt="Main"
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="rounded-2xl overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1548574505-12737bc4181f?auto=format&fit=crop&q=80&w=500"
                    alt="Sub 1"
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="rounded-2xl overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1596395819057-e37f55a85199?auto=format&fit=crop&q=80&w=500"
                    alt="Sub 2"
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="rounded-2xl overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1591129841117-3adfd313e34f?auto=format&fit=crop&q=80&w=500"
                    alt="Sub 3"
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="rounded-2xl overflow-hidden relative">
                <img
                    src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=500"
                    alt="Sub 4"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center cursor-pointer">
                    <div className="text-white text-center">
                        <div className="flex items-center gap-1">
                            <Share2 size={16} />
                            <span className="text-lg font-gilroy-bold">45+</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function NavigationTabs() {
    const tabs = [
        "Overview",
        "Package Highlights",
        "Itinerary",
        "Hotel Availability",
        "About This Package",
        "Location",
        "Policies",
        "Reviews",
    ];

    return (
        <div className="sticky top-0 z-10 bg-white border-b border-gray-100 -mx-4 px-4 overflow-x-auto no-scrollbar">
            <div className="max-w-6xl mx-auto flex gap-8 py-4">
                {tabs.map((tab, index) => (
                    <button
                        key={tab}
                        className={`whitespace-nowrap text-sm font-gilroy-semibold transition-all relative ${index === 0 ? "text-[#FF6A00]" : "text-gray-500 hover:text-gray-900"
                            }`}
                    >
                        {tab}
                        {index === 0 && (
                            <div className="absolute -bottom-[17px] left-0 right-0 h-0.5 bg-[#FF6A00]" />
                        )}
                    </button>
                ))}
            </div>
        </div>
    );
}

function FeatureItem({ icon, text }: { icon: React.ReactNode; text: string }) {
    return (
        <div className="flex items-center gap-2 text-[#16242A]">
            <div className="text-gray-600">{icon}</div>
            <span className="text-xs font-gilroy-medium">{text}</span>
        </div>
    );
}

function PackageHighlights() {
    return (
        <div className="mb-12">
            <h3 className="text-3xl font-gilroy-bold mb-8">Package Highlights</h3>
            <div className="relative group">
                <div className="flex gap-4 overflow-x-auto no-scrollbar pb-4">
                    <HighlightCard
                        image="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&q=80&w=400"
                        title="Paragliding at Solang Valley"
                    />
                    <HighlightCard
                        image="https://images.unsplash.com/photo-1548574505-12737bc4181f?auto=format&fit=crop&q=80&w=400"
                        title="Candle-light dinner under the stars"
                    />
                    <HighlightCard
                        image="https://images.unsplash.com/photo-1596395819057-e37f55a85199?auto=format&fit=crop&q=80&w=400"
                        title="Visit to Hadimba Temple"
                    />
                </div>

                {/* Navigation Buttons */}
                <button className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <ChevronLeft size={24} />
                </button>
                <button className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#FF6A00] flex items-center justify-center text-white shadow-lg shadow-orange-500/30 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ChevronRight size={24} />
                </button>
            </div>
        </div>
    );
}

function HighlightCard({ image, title }: { image: string; title: string }) {
    return (
        <div className="min-w-[300px] h-[200px] rounded-2xl overflow-hidden relative group/card cursor-pointer">
            <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-5">
                <p className="text-white font-gilroy-semibold text-sm line-clamp-1">{title}</p>
            </div>
        </div>
    );
}

export default PackageDetails;