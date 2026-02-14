import { Search } from "lucide-react";

const BlogCategoriesWisePage = () => {
    const blogs = Array.from({ length: 9 });

    return (
        <section className="bg-gray-50 py-20 px-4 md:px-8 md:pt-24 font-gilroy-medium">
            <div className="max-w-7xl mx-auto">

                {/* Page Header */}
                <div className="text-center mb-12">
                    <h1 className="text-2xl md:text-3xl font-gilroy-semibold text-gray-900 mb-4">
                        Travel Tips & Advice
                    </h1>

                    {/* Search */}
                    <div className="relative max-w-md mx-auto">
                        <input
                            type="text"
                            placeholder="Search by travel tips, guides etc"
                            className="w-full rounded-full bg-white px-12 py-3 text-sm text-gray-700 placeholder:text-gray-400 shadow-none outline-none"
                        />
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                            <Search size={16} />
                        </span>
                    </div>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
                    {blogs.map((_, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-2xl p-4 shadow-none transition"
                        >
                            {/* Image */}
                            <div className="rounded-xl overflow-hidden mb-4">
                                <img
                                    src={
                                        i % 3 === 0
                                            ? "/blog/image1.png"
                                            : i % 3 === 1
                                                ? "/blog/image2.png"
                                                : "/blog/image3.png"
                                    }
                                    alt="blog"
                                    className="w-full h-[200px] object-cover"
                                />
                            </div>

                            {/* Meta */}
                            <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                                <span>09 May 2025</span>
                                <div className="flex items-center gap-2">
                                    <img
                                        src="/blog/image4.png"
                                        alt="author"
                                        className="w-6 h-6 rounded-full"
                                    />
                                    <span>Tarun Singh</span>
                                </div>
                            </div>

                            {/* Title */}
                            <h3 className="font-gilroy-semibold text-gray-900 mb-1">
                                Chasing Sunsets In Santorini
                            </h3>

                            {/* Description */}
                            <p className="text-xs text-gray-600 mb-3 leading-relaxed">
                                Master the art of smart packing with tips for stress-free and
                                seamless travel experiences across destinations...
                            </p>

                            {/* CTA */}
                            <button className="text-sm text-orange-500 font-gilroy-semibold hover:underline">
                                Read More
                            </button>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-center items-center gap-2 mt-14">
                    <button className="w-9 h-9 rounded-lg bg-gray-200 flex items-center justify-center">
                        ‹
                    </button>

                    {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                        <button
                            key={n}
                            className={`w-9 h-9 rounded-lg text-sm ${n === 1
                                ? "bg-orange-500 text-white"
                                : "bg-gray-200 text-gray-700"
                                }`}
                        >
                            {n}
                        </button>
                    ))}

                    <button className="w-9 h-9 rounded-lg bg-gray-200 flex items-center justify-center">
                        ›
                    </button>
                </div>

            </div>
        </section>
    );
};

export default BlogCategoriesWisePage;
