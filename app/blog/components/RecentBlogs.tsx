"use client";

import { useState } from "react";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatedText, LineReveal } from "@/app/utils/animation";

const BLOG_POSTS = [
    {
        id: 1,
        title: "Chasing Sunsets In Santorini",
        description: "Master the art of smart packing with tips for stress-free travel and local secrets of the Aegean islands.",
        image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&q=80&w=800",
        date: "1 Day ago",
        author: "Tarun Singh",
        authorImage: "https://i.pravatar.cc/40?img=1"
    },
    {
        id: 2,
        title: "Mysteries of the Northern Lights",
        description: "Explore the best spots in Iceland and Norway to witness the magical celestial dance of the Aurora Borealis.",
        image: "https://images.unsplash.com/photo-1531366930477-4f211836371c?auto=format&fit=crop&q=80&w=800",
        date: "2 Days ago",
        author: "Elena Rossi",
        authorImage: "https://i.pravatar.cc/40?img=2"
    },
    {
        id: 3,
        title: "Bali’s Hidden Waterfalls",
        description: "Escape the crowds and discover the secret turquoise pools tucked away in the lush jungles of Ubud.",
        image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=800",
        date: "3 Days ago",
        author: "Made Wijaya",
        authorImage: "https://i.pravatar.cc/40?img=3"
    },
    {
        id: 4,
        title: "The Ultimate Guide to Tokyo",
        description: "From Shinjuku skyscrapers to ancient shrines in Asakusa, experience the best of modern and traditional Japan.",
        image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&q=80&w=800",
        date: "4 Days ago",
        author: "Yuki Tanaka",
        authorImage: "https://i.pravatar.cc/40?img=4"
    },
    {
        id: 5,
        title: "Safari Adventures in Kenya",
        description: "Witness the Great Migration and the majestic Big Five on an unforgettable journey through the Maasai Mara.",
        image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=800",
        date: "5 Days ago",
        author: "Samuel Okoro",
        authorImage: "https://i.pravatar.cc/40?img=5"
    },
    {
        id: 6,
        title: "Alpine Bliss in Switzerland",
        description: "A complete guide to exploring Interlaken, Lauterbrunnen, and the breathtaking Jungfrau region.",
        image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&q=80&w=800",
        date: "1 Week ago",
        author: "Marc Müller",
        authorImage: "https://i.pravatar.cc/40?img=6"
    },
    {
        id: 7,
        title: "Cultural Wonders of Morocco",
        description: "Lose yourself in the vibrant souks of Marrakech and the winding blue alleys of Chefchaouen.",
        image: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?auto=format&fit=crop&q=80&w=800",
        date: "1 Week ago",
        author: "Amina Al-Fassi",
        authorImage: "https://i.pravatar.cc/40?img=7"
    },
    {
        id: 8,
        title: "Exploring the Great Barrier Reef",
        description: "Dive into a world of colorful corals and exotic marine life in Australia’s most iconic natural wonder.",
        image: "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?auto=format&fit=crop&q=80&w=800",
        date: "2 Weeks ago",
        author: "Chris Hemsworth",
        authorImage: "https://i.pravatar.cc/40?img=8"
    },
    {
        id: 9,
        title: "Machu Picchu: Lost City of Incas",
        description: "Everything you need to know about trekking the Inca Trail and arriving at the legendary citadel.",
        image: "https://images.unsplash.com/photo-1587590227264-0ac64ce63ce8?auto=format&fit=crop&q=80&w=800",
        date: "2 Weeks ago",
        author: "Rosa Gutierrez",
        authorImage: "https://i.pravatar.cc/40?img=9"
    },
    {
        id: 10,
        title: "Island Hopping in Croatia",
        description: "Sail across the Adriatic Sea from Hvar to Vis, discovering hidden coves and ancient walled towns.",
        image: "https://images.unsplash.com/photo-1555990548-0d5ae17e651a?auto=format&fit=crop&q=80&w=800",
        date: "3 Weeks ago",
        author: "Ivan Horvat",
        authorImage: "https://i.pravatar.cc/40?img=10"
    },
    {
        id: 11,
        title: "Street Food Tour in Bangkok",
        description: "A spicy adventure through the night markets of Thailand, featuring the best Pad Thai and Mango Sticky Rice.",
        image: "https://images.unsplash.com/photo-1552334405-4929565998d5?auto=format&fit=crop&q=80&w=800",
        date: "1 Month ago",
        author: "Somchai Saetang",
        authorImage: "https://i.pravatar.cc/40?img=11"
    },
    {
        id: 12,
        title: "Autumn in New York City",
        description: "Experience the magic of Central Park’s changing leaves and the crisp air of the Big Apple.",
        image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&q=80&w=800",
        date: "1 Month ago",
        author: "Sarah Jones",
        authorImage: "https://i.pravatar.cc/40?img=12"
    },
    {
        id: 13,
        title: "The Dolomites: Hiker's Paradise",
        description: "Breathtaking peaks and emerald lakes await in Italy’s most spectacular mountain range.",
        image: "https://images.unsplash.com/photo-1533587851505-d119e13fa0d7?auto=format&fit=crop&q=80&w=800",
        date: "1 Month ago",
        author: "Luca Bianchi",
        authorImage: "https://i.pravatar.cc/40?img=13"
    },
    {
        id: 14,
        title: "Golden Temples of Kyoto",
        description: "A serene journey through Kinkaku-ji and the bamboo groves of Arashiyama in Japan’s cultural heart.",
        image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=800",
        date: "2 Months ago",
        author: "Hanako Sato",
        authorImage: "https://i.pravatar.cc/40?img=14"
    },
    {
        id: 15,
        title: "Desert Nights in Dubai",
        description: "From luxury dunes dinner to skydiving over the Palm Jumeirah – Dubai’s ultimate thrill list.",
        image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800",
        date: "2 Months ago",
        author: "Zaid Al-Maktoum",
        authorImage: "https://i.pravatar.cc/40?img=15"
    }
];

const RecentBlogs = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 6;
    const totalPages = Math.ceil(BLOG_POSTS.length / postsPerPage);

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = BLOG_POSTS.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
    const nextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

    return (
        <section className="pb-20 px-4 md:px-8 font-gilroy-medium">
            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <div className="flex flex-col md:flex-row items-center md:justify-between gap-3 md:gap-6 mb-12">
                    <h2 className="text-lg md:text-2xl lg:text-3xl tracking-[-0.02em] font-gilroy-semibold text-text">
                        <LineReveal text="Recent Blogs" />
                    </h2>

                    {/* Search */}
                    <div className="relative w-full md:w-[360px]">
                        <input
                            type="text"
                            placeholder="Search by destinations, travel tips etc"
                            className="w-full rounded-full bg-white px-12 py-3 text-sm text-gray-700 placeholder:text-gray-400 shadow-none outline-none"
                        />
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                            <Search size={16} />
                        </span>
                    </div>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {currentPosts.map((post) => (
                        <div
                            key={post.id}
                            className="bg-white rounded-2xl p-4 transition-all hover:shadow-xl group cursor-pointer"
                        >
                            {/* Image */}
                            <div className="rounded-xl overflow-hidden mb-4 aspect-16/10">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            {/* Meta */}
                            <div className="flex items-center justify-between text-xs text-text mb-3">
                                <span className="text-slate-500">{post.date}</span>
                                <div className="flex items-center gap-2">
                                    <img
                                        src={post.authorImage}
                                        alt={post.author}
                                        className="w-6 h-6 rounded-full ring-2 ring-orange-50"
                                    />
                                    <span className="font-gilroy-semibold">{post.author}</span>
                                </div>
                            </div>

                            {/* Title */}
                            <h3 className="font-gilroy-semibold text-text mb-2 text-lg line-clamp-1 group-hover:text-orange-500 transition-colors">
                                <AnimatedText text={post.title} />
                            </h3>

                            {/* Description */}
                            <div className="text-sm text-slate-500 mb-4 leading-relaxed line-clamp-2">
                                <LineReveal text={post.description} />
                            </div>

                            {/* CTA */}
                            <button className="text-sm text-orange-500 font-gilroy-semibold flex items-center gap-1 group/btn">
                                Read More
                                <ChevronRight size={14} className="transition-transform group-hover/btn:translate-x-1" />
                            </button>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-center items-center gap-2 mt-16">
                    <button
                        onClick={prevPage}
                        disabled={currentPage === 1}
                        className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${currentPage === 1
                            ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                            : "bg-white text-gray-700 hover:bg-orange-50 hover:text-orange-500 shadow-sm"
                            }`}
                    >
                        <ChevronLeft size={18} />
                    </button>

                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                        <button
                            key={n}
                            onClick={() => paginate(n)}
                            className={`w-10 h-10 rounded-xl text-sm font-gilroy-semibold transition-all ${currentPage === n
                                ? "bg-orange-500 text-white shadow-lg shadow-orange-200 scale-110"
                                : "bg-white text-gray-700 hover:bg-orange-50 hover:text-orange-500 shadow-sm"
                                }`}
                        >
                            {n}
                        </button>
                    ))}

                    <button
                        onClick={nextPage}
                        disabled={currentPage === totalPages}
                        className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${currentPage === totalPages
                            ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                            : "bg-white text-gray-700 hover:bg-orange-50 hover:text-orange-500 shadow-sm"
                            }`}
                    >
                        <ChevronRight size={18} />
                    </button>
                </div>

            </div>
        </section>
    );
};

export default RecentBlogs;
