"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { useState } from "react"
import { cn } from "@/lib/utils"
import Link from "next/link"

const indiaDestinations = [
    ["Kerala", "Goa", "Himachal Pradesh", "Gujarat", "Tamil Nadu"],
    ["Rajasthan", "Jammu & Kashmir", "Karnataka", "Madhya Pradesh", "Meghalaya"],
    ["Uttar Pradesh", "Assam", "Andhra Pradesh", "Andaman & Nicobar Islands"]
];

const internationalDestinations = [
    ["Dubai", "Thailand", "Singapore", "Malaysia", "Vietnam"],
    ["Bali", "Maldives", "Mauritius", "Europe", "Switzerland"],
    ["Japan", "Australia", "New Zealand", "USA", "UK"]
];

const allDestinations = [
    [""]
];

export default function Navbar() {
    const [activeTab, setActiveTab] = useState("India")
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    // Prevent scrolling when mobile menu is open
    // useEffect(() => {
    //     if (isMobileMenuOpen) {
    //         document.body.style.overflow = 'hidden';
    //     } else {
    //         document.body.style.overflow = 'unset';
    //     }
    //     return () => { document.body.style.overflow = 'unset'; };
    // }, [isMobileMenuOpen]);

    return (
        <header className="w-full relative z-50 px-6 md:px-8">
            <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 absolute top-0 left-0 right-0 bg-none z-50 font-gilroy">
                {/* Left */}
                <div className="flex items-center gap-10">
                    <Link href="/">
                        <img
                            src={"/about/logos/logo.svg"}
                            className="cursor-pointer"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:block">
                        <NavigationMenu>
                            <NavigationMenuList className="gap-6">
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className="bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent data-[state=open]:hover:bg-transparent data-[state=open]:focus:bg-transparent p-0 text-sm font-gilroy-semibold h-auto text-text transition-colors">
                                        Destination
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent className="p-0 rounded-2xl">
                                        <div className="w-[850px] p-8 bg-white rounded-2xl shadow-xl relative z-100">
                                            {/* Tabs */}
                                            <div className="flex gap-10 mb-4 border-b border-gray-100">
                                                {["India", "International", "All"].map((tab) => (
                                                    <button
                                                        key={tab}
                                                        onClick={() => setActiveTab(tab)}
                                                        className={cn(
                                                            "pb-4 text-sm font-gilroy-bold transition-colors relative",
                                                            activeTab === tab
                                                                ? "text-primary-orange  after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-primary-orange"
                                                                : "text-gray-400 hover:text-gray-600"
                                                        )}
                                                    >
                                                        {tab}
                                                    </button>
                                                ))}
                                            </div>

                                            {/* Content - India Grid */}
                                            {activeTab === "India" && (
                                                <div className="grid grid-cols-3 gap-x-16 gap-y-5">
                                                    {indiaDestinations.map((column, colIdx) => (
                                                        <div key={colIdx} className="flex flex-col gap-4">
                                                            {column.map((destination) => (
                                                                <Link
                                                                    key={destination}
                                                                    href={`/destination_india`}
                                                                    className="flex items-center gap-2 text-sm text-gray-800 hover:text-primary-orange transition-colors font-gilroy-semibold group/item"
                                                                >
                                                                    <ChevronRight className="w-4 h-4 text-gray-900 group-hover/item:text-primary-orange transition-colors" />
                                                                    <span>{destination}</span>
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    ))}
                                                </div>
                                            )}

                                            {/* Placeholder for other tabs */}
                                            {activeTab === "International" && (
                                                <div className="grid grid-cols-3 gap-x-16 gap-y-5">
                                                    {internationalDestinations.map((column, colIdx) => (
                                                        <div key={colIdx} className="flex flex-col gap-4">
                                                            {column.map((destination) => (
                                                                <Link
                                                                    key={destination}
                                                                    href={`/destination_all`}
                                                                    className="flex items-center gap-2 text-sm text-gray-800 hover:text-primary-orange transition-colors font-gilroy-semibold group/item"
                                                                >
                                                                    <ChevronRight className="w-4 h-4 text-gray-900 group-hover/item:text-primary-orange transition-colors" />
                                                                    <span>{destination}</span>
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    ))}
                                                </div>
                                            )}

                                            {activeTab === "All" && (
                                                <div className="grid grid-cols-3 gap-x-16 gap-y-5">
                                                    {allDestinations.map((column, colIdx) => (
                                                        <div key={colIdx} className="flex flex-col gap-4">
                                                            {column.map((destination) => (
                                                                <Link
                                                                    key={destination}
                                                                    href={`/destination_all`}
                                                                    className="flex items-center gap-2 text-sm text-gray-800 hover:text-primary-orange transition-colors font-gilroy-semibold group/item"
                                                                >
                                                                    <ChevronRight className="w-4 h-4 text-gray-900 group-hover/item:text-primary-orange transition-colors" />
                                                                    <span>{destination}</span>
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <Link href="/explore_extraordinary" className="cursor-pointer text-text hover:text-white text-sm font-gilroy-semibold transition-colors">Explore Extraordinary</Link>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <Link href="/offers" className="cursor-pointer text-text hover:text-white text-sm font-gilroy-semibold transition-colors">Offers</Link>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <Link href="/support" className="cursor-pointer text-text hover:text-white text-sm font-gilroy-semibold transition-colors">Support</Link>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <Link href="/review_ratings" className="cursor-pointer text-text hover:text-white text-sm font-gilroy-semibold transition-colors">Review & Ratings</Link>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <Link href="/about" className="cursor-pointer text-text hover:text-white text-sm font-gilroy-semibold transition-colors">About Us</Link>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <Link href="/blog" className="cursor-pointer text-text hover:text-white text-sm font-gilroy-semibold transition-colors">Blogs</Link>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>
                </div>

                {/* Right - Desktop Buttons */}
                <div className="hidden md:flex items-center gap-3 font-gilroy-semibold">
                    <Button
                        variant="secondary"
                        className=" bg-slate-700 text-white hover:bg-slate-600 rounded-full px-6 transition-all"
                    >
                        Signup
                    </Button>
                    <Button
                        variant="secondary"
                        className=" bg-slate-500 text-white hover:bg-slate-400 rounded-full px-6 transition-all"
                    >
                        Login
                    </Button>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="fixed top-4 right-4 z-50 md:hidden">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="p-2"
                    >
                        {isMobileMenuOpen ? (
                            <X className="h-6 w-6 text-black" />
                        ) : (
                            <HamburgerIcon />
                        )}
                    </button>
                </div>


                {/* Mobile Menu Overlay */}
                {isMobileMenuOpen && (
                    <div className="fixed inset-0 bg-white z-40 flex flex-col pt-8 px-6 lg:hidden overflow-y-auto">
                        <div className="flex flex-col gap-6 font-gilroy-semibold text-lg">
                            <div className="flex flex-col gap-4">
                                <h3 className="text-gray-400 text-sm font-gilroy-bold uppercase tracking-wider">Destinations</h3>
                                <div className="flex gap-4 mb-2 overflow-x-auto pb-2">
                                    {["India", "International", "All"].map((tab) => (
                                        <button
                                            key={tab}
                                            onClick={() => setActiveTab(tab)}
                                            className={cn(
                                                "px-4 py-2 rounded-full text-sm font-gilroy-semibold whitespace-nowrap transition-colors",
                                                activeTab === tab
                                                    ? "bg-primary-orange text-white"
                                                    : "bg-gray-100 text-gray-600"
                                            )}
                                        >
                                            {tab}
                                        </button>
                                    ))}
                                </div>

                                <div className="grid grid-cols-2 gap-3 mb-6">
                                    {activeTab === "India" && indiaDestinations.flat().map((dest) => (
                                        <Link
                                            key={dest}
                                            href="/destination_india"
                                            className="text-sm text-gray-700 py-1"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            {dest}
                                        </Link>
                                    ))}
                                    {activeTab === "International" && internationalDestinations.flat().map((dest) => (
                                        <Link
                                            key={dest}
                                            href="/destination_all"
                                            className="text-sm text-gray-700 py-1"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            {dest}
                                        </Link>
                                    ))}
                                    {activeTab === "All" && allDestinations.flat().map((dest) => (
                                        dest && (
                                            <Link
                                                key={dest}
                                                href="/destination_all"
                                                className="text-sm text-gray-700 py-1"
                                                onClick={() => setIsMobileMenuOpen(false)}
                                            >
                                                {dest}
                                            </Link>
                                        )
                                    ))}
                                </div>
                            </div>

                            <div className="h-px bg-gray-100 w-full" />

                            <Link href="/explore_extraordinary" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-800 text-sm">Explore Extraordinary</Link>
                            <Link href="/offers" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-800 text-sm">Offers</Link>
                            <Link href="/support" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-800 text-sm">Support</Link>
                            <Link href="/review_ratings" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-800 text-sm">Review & Ratings</Link>
                            <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-800 text-sm">About Us</Link>
                            <Link href="/blog" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-800 text-sm">Blogs</Link>

                            <div className="flex gap-2 mt-6 pb-10">
                                <Button
                                    variant="secondary"
                                    className="flex-1 bg-slate-700 text-white hover:bg-slate-600 rounded-lg py-6 text-sm"
                                >
                                    Signup
                                </Button>
                                <Button
                                    variant="secondary"
                                    className="flex-1 bg-slate-100 text-slate-700 hover:bg-slate-200 rounded-lg py-6 text-sm"
                                >
                                    Login
                                </Button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </header >
    )
}

function HamburgerIcon() {
    return (
        <div className="flex flex-col gap-1">
            <span className="block h-[3px] w-3 rounded-full bg-white" />
            <span className="block h-[3px] w-6 rounded-full bg-white" />
            <span className="block h-[3px] w-3 rounded-full bg-white ml-3" />
        </div>
    );
}

