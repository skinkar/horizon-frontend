"use client"

import { CenteredCTA } from "@/app/common/atom/btn"

const blogs = {
    featured: {
        image: "/home/flora-hon-Agqkvme-v-w-unsplash.png",
        title: "Top 10 Hidden Gems Around The World",
        desc: "Discover the world's best-kept secrets, from secluded beaches to off-the-beaten-path towns. These hidden gems are worth the journey.",
        date: "07 May 2025",
        author: "Tarun Singh",
        authorImage: "/avatars/tarun.png",
    },
    list: [
        {
            image: "/home/blog1.png",
            title: "Chasing Sunsets In Santorini",
            excerpt:
                "Master the art of smart packing with tips for stress-free and Master the art of smart packing with tips for stress-free and Master the art of smart packing with tips for stress-free...",
            date: "1 day ago",
            author: "Tarun Singh",
            authorImage: "/avatars/tarun.png",
        },
        {
            image: "/home/blog2.png",
            title: "Packing Like A Pro: Essentials Only",
            excerpt:
                "Master the art of smart packing with tips for stress-free and Master the art of smart packing with tips for stress-free and Master the art of smart packing with tips for stress-free...",
            date: "07 May 2025",
            author: "Tarun Singh",
            authorImage: "/avatars/tarun.png",
        },
    ],
}

export default function PhoenixFlyBlogs() {
    return (
        <section className="py-10 px-4 md:py-20 md:px-8">
            <div className="max-w-6xl mx-auto">
                {/* Heading */}
                <div className="text-center mb-10 md:mb-14">
                    <h2 className="md:text-4xl font-gilroy-semibold title-heading">
                        Phoenix Fly Blogs
                    </h2>
                    <p className="mt-4 text-sm md:text-base sub-title max-w-2xl mx-auto">
                        Get travel tips, destination guides, and real stories from explorers
                        around the globe
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-4">
                    {/* Featured Blog */}
                    <div className="relative rounded-3xl overflow-hidden h-[515px] lg:h-auto group cursor-pointer">
                        <img
                            src={blogs.featured.image}
                            alt={blogs.featured.title}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                        <div className="relative z-10 h-full flex flex-col justify-end p-6 md:p-8 text-white">
                            <h3 className="text-xl md:text-2xl font-gilroy-semibold mb-3">
                                {blogs.featured.title}
                            </h3>

                            <p className="text-sm opacity-90 max-w-xs mb-6 leading-relaxed sub-title text-white">
                                {blogs.featured.desc}
                            </p>

                            <div className="flex flex-wrap items-center justify-between gap-4">
                                <div className="flex items-center gap-3 text-sm">
                                    <span>{blogs.featured.date}</span>
                                    <span className="w-1 h-1 bg-white/60 rounded-full" />
                                    <div className="flex items-center gap-2">
                                        <img
                                            src={blogs.featured.authorImage}
                                            className="w-6 h-6 rounded-full"
                                            alt={blogs.featured.author}
                                        />
                                        <span>{blogs.featured.author}</span>
                                    </div>
                                </div>

                                <button className="bg-orange-500 hover:bg-orange-600 transition text-white px-5 py-2 rounded-lg text-sm font-medium">
                                    Read More
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right List */}
                    <div className="flex flex-col gap-4 md:gap-6">
                        {blogs.list.map((blog, idx) => (
                            <div
                                key={idx}
                                className="bg-white rounded-2xl p-4 flex flex-col sm:flex-row gap-5 shadow-sm hover:shadow-md transition-shadow"
                            >
                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                    className="w-full sm:w-48 md:w-56 h-48 sm:h-auto rounded-xl object-cover shrink-0"
                                />

                                <div className="flex flex-col justify-between flex-1 font-gilroy-medium">
                                    <div>
                                        <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                                            <span>{blog.date}</span>
                                            <div className="flex items-center gap-2">
                                                <img
                                                    src={blog.authorImage}
                                                    className="w-5 h-5 rounded-full"
                                                    alt={blog.author}
                                                />
                                                <span>{blog.author}</span>
                                            </div>
                                        </div>

                                        <h4 className="text-lg font-gilroy-semibold text-gray-900 mb-2 sub-title">
                                            {blog.title}
                                        </h4>

                                        <p className="text-sm text-gray-600 leading-relaxed sub-title">
                                            {blog.excerpt}
                                        </p>
                                    </div>

                                    <button className="text-primary-orange text-sm font-medium mt-3 self-start hover:text-orange-600">
                                        Read More
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* View All */}
                <CenteredCTA label="View All" />
            </div>
        </section>
    )
}
