"use client";

import { useState } from "react";
import { Star, ThumbsUp, ThumbsDown, ChevronDown } from "lucide-react";

/* ================= TYPES ================= */

interface Review {
  id: string;
  rating: number;
  title: string;
  user: string;
  date: string;
  category: string;
  stayType: string;
  comment: string;
  images: string[];
  likes: number;
  dislikes: number;
  verified: boolean;
  reply?: {
    author: string;
    role: string;
    date: string;
    comment: string;
  };
}

interface ReviewsSectionProps {
  reviews: Review[];
  averageRating?: number;
  totalReviews?: number;
  ratingDistribution?: {
    5: number;
    4: number;
    3: number;
    2: number;
  };
}

/* ================= COMPONENT ================= */

export default function ReviewsSection({
  reviews,
  averageRating = 5.0,
  totalReviews = 128,
  ratingDistribution = {
    5: 78,
    4: 20,
    3: 16,
    2: 4,
  },
}: ReviewsSectionProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("Most Rated");
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="max-w-7xl mx-auto py-12">
      {/* HEADER */}
      <div className="flex justify-between items-start mb-8">
        <div>
          <h2 className="text-4xl font-bold mb-2">User Rating & Reviews</h2>
          <p className="text-gray-600">
            Discover The Collective Wisdom Of The Crowd Through User Ratings And Reviews
          </p>
        </div>
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition">
          Write A Review
        </button>
      </div>

      {/* RATING SUMMARY */}
      <div className="bg-gray-50 rounded-xl p-8 mb-8">
        <div className="flex items-start gap-12">
          <div>
            <div className="text-7xl font-bold text-orange-500 mb-2">
              {averageRating.toFixed(1)}
            </div>
            <div className="text-2xl font-semibold">Excellent</div>
            <div className="text-gray-600">{totalReviews} Verified Reviews</div>
          </div>

          <div className="flex-1 grid grid-cols-4 gap-6">
            {[5, 4, 3, 2].map((star) => (
              <div key={star}>
                <div className="text-sm font-medium mb-2">
                  {star} Star
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex-1 bg-gray-200 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-orange-500 h-full"
                      style={{
                        width: `${(ratingDistribution[star as 5 | 4 | 3 | 2] / totalReviews) * 100}%`,
                      }}
                    />
                  </div>
                  <span className="text-sm text-gray-500">
                    {ratingDistribution[star as 5 | 4 | 3 | 2]}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* REVIEWS */}
      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white rounded-xl p-6 shadow-sm">
            {/* Header */}
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-orange-500 text-white px-3 py-1 rounded-lg flex items-center gap-1 font-semibold">
                {review.rating}
                <Star className="w-4 h-4 fill-current" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">{review.title}</h3>
                <p className="text-gray-600 text-sm">
                  {review.category} • {review.stayType}
                </p>
              </div>
            </div>

            {/* User Info */}
            <div className="flex items-center gap-3 mb-4 text-sm text-gray-600">
              <span className="font-medium text-gray-900">
                {review.user}
              </span>
              <span>•</span>
              <span>{review.date}</span>
              {review.verified && (
                <>
                  <span>•</span>
                  <span className="text-orange-500">Verified Traveler</span>
                </>
              )}
            </div>

            {/* Comment */}
            <p className="text-gray-700 mb-4">{review.comment}</p>

            {/* Images */}
            {review.images?.length > 0 && (
              <div className="flex gap-3 mb-4">
                {review.images.map((image, idx) => (
                  <img
                    key={idx}
                    src={image}
                    alt="review"
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                ))}
              </div>
            )}

            {/* Likes */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                <ThumbsUp size={16} />
                {review.likes}
              </div>
              <div className="flex items-center gap-1">
                <ThumbsDown size={16} />
                {review.dislikes}
              </div>
            </div>

            {/* Reply */}
            {review.reply && (
              <div className="mt-6 bg-orange-50 p-4 rounded-lg">
                <div className="text-sm font-semibold text-orange-600">
                  {review.reply.author} ({review.reply.role})
                </div>
                <div className="text-xs text-gray-500 mb-2">
                  {review.reply.date}
                </div>
                <p className="text-sm text-gray-700">
                  {review.reply.comment}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-2 mt-10">
        {[1, 2, 3, 4, 5].map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`w-10 h-10 rounded-lg ${
              page === currentPage
                ? "bg-orange-500 text-white"
                : "border border-gray-300"
            }`}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
}
