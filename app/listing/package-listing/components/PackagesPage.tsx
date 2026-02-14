import { Button } from "@/components/ui/button";
import {
    MapPin,
    Search,
    SlidersHorizontal,
    Heart,
    Plane,
    Hotel,
    Car,
    Activity,
    Square,
} from "lucide-react";
import Link from "next/link";

export default function PackagesPage() {
    return (
        <div className="min-h-screen px-8">
            <div className="max-w-6xl mx-auto py-6 grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6">
                {/* LEFT FILTERS */}
                <aside className="hidden lg:block">
                    <Filters />
                </aside>

                {/* RIGHT CONTENT */}
                <section>
                    <Header />
                    <SearchBar />
                    <div className="space-y-4 mt-4">
                        <PackageCard />
                        <PackageCard early />
                        <AdBanner />
                        <PackageCard />
                        <PackageCard />
                    </div>
                </section>
            </div>
        </div>
    );
}

function Header() {
    return (
        <div className="mb-4">
            <h1 className="text-4xl font-gilroy-bold">34 Packages Found</h1>
            <p className="text-sm font-gilroy-medium text-gray-500">
                Choose from various package options which are fully customizable
            </p>
        </div>
    );
}

function SearchBar() {
    return (
        <div className="flex flex-col md:flex-row gap-3 bg-white p-4 rounded-xl">
            <div className="flex items-center gap-2 flex-1 border rounded-lg px-3 py-2">
                <Search size={18} className="text-gray-400" />
                <input
                    placeholder="Search By Property Name e.g. Manali"
                    className="outline-none text-sm w-full font-gilroy-medium"
                />
            </div>

            <button className="flex items-center gap-2 border rounded-lg px-4 py-2 text-sm font-gilroy-medium">
                <SlidersHorizontal size={16} />
                Sort: Price Low to High
            </button>
        </div>
    );
}


function Filters() {
    return (
        <div className="space-y-5 sticky top-4 text-sm">
            {/* MAP */}
            <div className="h-36 rounded-lg overflow-hidden bg-gray-200 flex items-end">
                <button className="w-full bg-[#2b6f82] text-white py-2 text-sm font-gilroy-medium">
                    View in Map
                </button>
            </div>

            {/* OFFER APPLIED */}
            <div>
                <h4 className="font-gilroy-semibold mb-2">Offer Applied</h4>
                <div className="bg-orange-50 text-orange-600 text-xs font-gilroy-medium px-3 py-3 rounded">
                    Eligible for Group Booking Benefits
                </div>
            </div>

            <Divider />

            {/* FILTER BY */}
            <div>
                <div className="flex justify-between items-center mb-3">
                    <h4 className="font-gilroy-semibold">Filter By</h4>
                    <button className="text-xs font-gilroy-medium text-gray-500">Clear All</button>
                </div>

                <FilterItem label="Early Bird Offers" count={2} />
                <FilterItem label="Popular" count={2} />
                <FilterItem label="Trending" count={2} />
                <FilterItem label="Featured" count={2} />
                <FilterItem label="Top Visited" count={2} />
            </div>

            <Divider />

            {/* PRICE RANGE */}
            <div>
                <h4 className="font-gilroy-semibold mb-3">Price Range</h4>

                <div className="flex justify-between text-xs font-gilroy-medium text-gray-600 mb-2">
                    <span>₹ 0</span>
                    <span>₹ 28,000+</span>
                </div>

                <div className="relative h-2 bg-gray-300 rounded">
                    <div className="absolute left-2 right-2 top-0 h-2 bg-[#2b6f82] rounded" />
                    <div className="absolute -left-1 top-[-6px] h-5 w-5 bg-[#0f4c5c] rounded-full" />
                    <div className="absolute -right-1 top-[-6px] h-5 w-5 bg-[#0f4c5c] rounded-full" />
                </div>
            </div>

            <Divider />

            {/* PACKAGE THEME */}
            <div>
                <h4 className="font-gilroy-semibold mb-3">Package Theme</h4>

                <FilterItem label="All Packages" count={2} />
                <FilterItem label="Solo" count={2} />
                <FilterItem label="Romantic" count={2} />
                <FilterItem label="Nature" count={2} />
                <FilterItem label="Group" count={2} />
                <FilterItem label="Destination Wedding" count={2} />
                <FilterItem label="Offbeat" count={2} />

                <button className="text-xs text-gray-500 mt-2">See more</button>
            </div>

            <Divider />

            {/* DURATION */}
            <div>
                <h4 className="font-gilroy-semibold mb-3">Duration</h4>

                <FilterItem label="2N/3D" count={2} />
                <FilterItem label="3N/4D" count={2} />
                <FilterItem label="4N/5D" count={2} />
                <FilterItem label="5N/6D" count={2} />
                <FilterItem label="6N/7D" count={2} />

                <button className="text-xs text-gray-500 mt-2">See more</button>
            </div>
        </div>
    );
}

function FilterItem({
    label,
    count,
}: {
    label: string;
    count: number;
}) {
    return (
        <div className="flex items-center justify-between py-1 cursor-pointer">
            <div className="flex items-center gap-2">
                <Square size={16} />
                <span className="font-gilroy-medium">{label}</span>
            </div>
            <span className="text-xs font-gilroy-medium text-gray-600">{count}</span>
        </div>
    );
}

function Divider() {
    return <div className="border-t border-gray-300" />;
}


function PackageCard({ early }: { early?: boolean }) {
    return (
        <div className="bg-white rounded-xl p-4 flex flex-col md:flex-row gap-4">
            {/* Image */}
            <div className="relative md:w-56 h-40 rounded-lg overflow-hidden bg-gray-200">
                {early && (
                    <span className="absolute top-2 left-2 bg-orange-500 text-white text-xs px-2 py-1 rounded">
                        Early Bird
                    </span>
                )}
                <span className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    6N / 7D
                </span>
            </div>

            {/* Content */}
            <div className="flex-1">
                <div className="flex justify-between">
                    <h3 className="font-gilroy-semibold">
                        Amazing Holiday in Kullu, Manali & Shimla
                    </h3>
                    <Heart size={18} />
                </div>

                <p className="text-xs font-gilroy-medium text-gray-500 mt-1">
                    1N Shimla | 3N Manali | 2N Kullu
                </p>

                <div className="flex gap-4 text-xs font-gilroy-medium text-gray-600 mt-3">
                    <IconText icon={<Plane size={14} />} text="2 Flights" />
                    <IconText icon={<Hotel size={14} />} text="11 Hotels" />
                    <IconText icon={<Activity size={14} />} text="5 Activities" />
                    <IconText icon={<Car size={14} />} text="4 Transfers" />
                </div>
            </div>

            {/* Price */}
            <div className="md:text-right flex md:flex-col justify-between md:justify-end">
                <div>
                    <p className="text-orange-500 text-lg font-gilroy-bold">₹ 22,999</p>
                    <p className="text-xs font-gilroy-medium text-gray-500">Per Person</p>
                </div>
                <Link href="/listing/package-listing/package-details" className="mt-2 bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-gilroy-medium">
                    Book Now
                </Link>
            </div>
        </div>
    );
}

function IconText({ icon, text }: { icon: React.ReactNode; text: string }) {
    return (
        <span className="flex items-center gap-1">
            {icon}
            {text}
        </span>
    );
}

function AdBanner() {
    return (
        <div className="bg-gradient-to-r from-orange-100 to-green-100 rounded-xl p-4 flex items-center justify-between">
            <p className="text-sm font-gilroy-medium">
                Get flat <strong>10% OFF</strong> on your bookings!
            </p>
            <button className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-gilroy-medium">
                Sign In
            </button>
        </div>
    );
}
