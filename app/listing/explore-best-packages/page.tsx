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
import { VerticalPackageCard } from "../../home/components/VerticalPackageCard";

export default function ExploreBestPackages() {
    return (
        <div className="min-h-screen px-8 pt-24">
            <Header />
            <div className="max-w-7xl mx-auto py-6 grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6">
                {/* LEFT FILTERS */}
                <aside className="hidden lg:block">
                    <Filters />
                </aside>

                {/* RIGHT CONTENT */}
                <section>
                    <SearchBar />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-4">
                        <VerticalPackageCard
                            image="/home/card1.png"
                            title="Romantic Getaway to Kerala"
                            location="Kerala"
                            price="25,999"
                            oldPrice="30,999"
                            duration="4N/5D"
                        />
                        <VerticalPackageCard
                            image="/home/card1.png"
                            title="Romantic Getaway to Kerala"
                            location="Kerala"
                            price="25,999"
                            oldPrice="30,999"
                            duration="4N/5D"
                        />
                        <VerticalPackageCard
                            image="/home/card1.png"
                            title="Romantic Getaway to Kerala"
                            location="Kerala"
                            price="25,999"
                            oldPrice="30,999"
                            duration="4N/5D"
                        />

                        <VerticalPackageCard
                            image="/home/card1.png"
                            title="Romantic Getaway to Kerala"
                            location="Kerala"
                            price="25,999"
                            oldPrice="30,999"
                            duration="4N/5D"
                        />

                        <VerticalPackageCard
                            image="/home/card1.png"
                            title="Romantic Getaway to Kerala"
                            location="Kerala"
                            price="25,999"
                            oldPrice="30,999"
                            duration="4N/5D"
                        />

                        <VerticalPackageCard
                            image="/home/card1.png"
                            title="Romantic Getaway to Kerala"
                            location="Kerala"
                            price="25,999"
                            oldPrice="30,999"
                            duration="4N/5D"
                        />

                        <VerticalPackageCard
                            image="/home/card1.png"
                            title="Romantic Getaway to Kerala"
                            location="Kerala"
                            price="25,999"
                            oldPrice="30,999"
                            duration="4N/5D"
                        />

                        <VerticalPackageCard
                            image="/home/card1.png"
                            title="Romantic Getaway to Kerala"
                            location="Kerala"
                            price="25,999"
                            oldPrice="30,999"
                            duration="4N/5D"
                        />
                    </div>
                </section>
            </div>
        </div>
    );
}

function Header() {
    return (
        <div className="mb-4">
            <h1 className="text-4xl font-gilroy-semibold">Explore Best Packages</h1>
            <p className="text-sm font-gilroy-medium text-gray-500 mt-2">
                Embark on a Mesmerizing Journey to explore the Top Destinations
            </p>
        </div>
    );
}

function SearchBar() {
    return (
        <div className="flex flex-col md:flex-row gap-3">
            <div className="flex items-center gap-2 flex-1 border rounded-lg px-3 py-2 bg-white">
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

            {/* FILTER BY */}
            <div>
                <div className="flex justify-between items-center mb-3">
                    <h4 className="font-gilroy-semibold text-lg">Filter By</h4>
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

                <div className="flex justify-between text-xs font-gilroy-medium mb-2">
                    <span>₹ 0</span>
                    <span>₹ 28,000+</span>
                </div>

                <div className="relative h-2 rounded">
                    <div className="absolute left-2 right-2 top-1/2 -translate-y-1/2 h-1 bg-[#0f4c5c] rounded" />
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
        <div className="flex items-center justify-between py-2 cursor-pointer">
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

