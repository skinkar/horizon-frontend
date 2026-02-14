import { ThumbsDown, ThumbsUp } from "lucide-react";
import React from "react";

export interface Review {
    rating: number;
    title: string;
    subtitle: string;
    author: string;
    date: string;
    verified: boolean;
    category: string;
    stay: string;
    description: string;
    images: string[];
    likes: number;
    dislikes: number;
}

const ReviewCard: React.FC<{ review: Review }> = ({ review }) => {
    return (
        <div className="bg-white rounded-2xl p-6 border border-gray-100 font-gilroy-medium">
            {/* Header */}
            <div className="flex items-center gap-3 mb-2">
                <span className="bg-orange-500 text-white text-sm font-gilroy-bold px-3 py-1 rounded-md">
                    {review.rating} ★
                </span>
                <h3 className="text-xl font-gilroy-semibold">{review.title}</h3>
            </div>

            <p className=" font-gilroy-semibold mb-3">{review.subtitle}</p>

            {/* Meta */}
            <div className="flex flex-wrap items-center text-base  gap-2 mb-4">
                <span className="font-gilroy-semibold ">{review.author}</span>
                <span>•</span>
                <span>{review.date}</span>
                {review.verified && (
                    <>
                        <span>•</span>
                        <span className="flex items-center gap-1 font-gilroy-semibold">
                            <img src="/icons/solar_verified-check-bold.svg" alt="" />
                            Verified Traveler</span>
                    </>
                )}
                <span>•</span>
                <span>Category: {review.category}</span>
                <span>•</span>
                <span>{review.stay}</span>
            </div>

            {/* Description */}
            <p className="leading-relaxed mb-6">
                {review.description}
            </p>

            {/* Images */}
            <div className="flex gap-3 mb-5">
                {review.images.slice(0, 4).map((img, i) => (
                    <img
                        key={i}
                        src={img}
                        alt="review"
                        className="w-24 h-24 rounded-lg object-cover"
                    />
                ))}

                {review.images.length > 4 && (
                    <div className="w-24 h-24 rounded-lg bg-black/80 flex items-center justify-center text-white font-gilroy-bold">
                        5+
                    </div>
                )}
            </div>

            {/* Actions */}
            <div className="flex gap-4">
                <button className="gap-1 border rounded-lg px-2 py-2 text-sm text-black hover:bg-gray-50 flex justify-center items-center">
                    <span className="font-gilroy-semibold text-white"><ThumbsUp fill="#A3A3A3" size={20} /></span> <span>{review.likes}</span>
                </button>
                <button className="gap-1 border rounded-lg px-2 py-2 text-sm text-black hover:bg-gray-50 flex justify-center items-center">
                    <span className="font-gilroy-semibold text-white"><ThumbsDown fill="#A3A3A3" size={20} /></span> <span>{review.dislikes}</span>
                </button>
            </div>
        </div>
    );
};

export default ReviewCard;
