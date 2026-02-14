"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';
import Link from 'next/link';

const categories = [
    {
        title: "Travel Tips & Advice",
        description: "Smart hacks and guides to make your trips smoother.",
        image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "Destination Highlights",
        description: "Top sights and hidden gems from around the world to explore.",
        image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "Weekend Getaways",
        description: "Quick escapes and short-trip itineraries for busy travelers.",
        image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=800"
    }
];

import { AnimatedText, LineReveal } from '@/app/utils/animation';

const BlogCategories = () => {
    const prevRef = useRef<HTMLDivElement | null>(null);
    const nextRef = useRef<HTMLDivElement | null>(null);

    return (
        <section className="py-20 pt-24 md:pt-32 md:px-8 font-gilroy-medium">
            <div className="max-w-6xl mx-auto">

                {/* Heading */}
                <div className="text-center mx-auto md:mb-12 mb-10 px-4">
                    <h1 className="text-3xl md:text-4xl font-gilroy-semibold text-text mb-4">
                        <LineReveal text="Welcome To The Phoenix Fly Blogs" />
                    </h1>
                    <div className="text-text text-sm leading-[30px] mx-auto">
                        <LineReveal text="Uncover hidden gems, cultural secrets, and unforgettable experiences with the TripJoy Blog. From personal travel tales to expert planning guides, our stories are your passport to inspiring adventures and smart travel. Whether you're chasing bucket-list dreams or weekend escapes, there's something here for every explorer." />
                    </div>
                </div>

                <div className='flex items-center justify-between mb-6'>
                    <h2 className="text-lg md:text-2xl lg:text-3xl tracking-[-0.02em] font-gilroy-semibold  text-text px-4 md:px-0">
                        <LineReveal text="Read By Category" />
                    </h2>
                    {/* Custom Navigation Buttons */}
                    <div className="md:hidden flex items-center gap-2 z-10 mr-4 border border-gray-100 rounded-full p-1 bg-white/50 backdrop-blur-sm shadow-sm">
                        <div
                            ref={prevRef}
                            className="w-8 h-8 rounded-full flex items-center justify-center cursor-pointer hover:bg-orange-50 hover:text-orange-500 transition-colors"
                        >
                            <ChevronLeft className="w-4 h-4" />
                        </div>

                        <div
                            ref={nextRef}
                            className="w-8 h-8 rounded-full flex items-center justify-center cursor-pointer hover:bg-orange-50 hover:text-orange-500 transition-colors"
                        >
                            <ChevronRight className="w-4 h-4" />
                        </div>
                    </div>

                </div>

                {/* Mobile Swiper */}
                <div className="md:hidden pl-4 relative group">
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={20}
                        slidesPerView={1.2}
                        onBeforeInit={(swiper) => {
                            // eslint-disable-next-line @typescript-eslint/no-explicit-any
                            const navigation = swiper.params.navigation as any;
                            navigation.prevEl = prevRef.current;
                            navigation.nextEl = nextRef.current;
                        }}
                        navigation
                        className="pb-12"
                    >
                        {categories.map((category, index) => (
                            <SwiperSlide key={index}>
                                <div className="">
                                    <div className="rounded-xl overflow-hidden mb-4 aspect-4/3">
                                        <img
                                            src={category.image}
                                            alt={category.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <h3 className="text-lg font-gilroy-semibold text-gray-900 mb-1">
                                        <AnimatedText text={category.title} />
                                    </h3>
                                    <div className="text-sm text-gray-600 line-clamp-2">
                                        <LineReveal text={category.description} />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Desktop Grid */}
                <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">
                    {categories.map((category, index) => (
                        <Link href={`/blog/blog_categories`} key={index} className="group">
                            <div className="rounded-2xl overflow-hidden mb-4 aspect-4/3 relative">
                                <img
                                    src={category.image}
                                    alt={category.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
                            </div>
                            <h3 className="text-lg font-gilroy-semibold text-text mb-1 group-hover:text-orange-500 transition-colors">
                                <AnimatedText text={category.title} />
                            </h3>
                            <div className="text-sm text-text/80">
                                <LineReveal text={category.description} />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogCategories;
