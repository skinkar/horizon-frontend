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
    admin: string;
    date: string;
    message: string;
    likes: number;
    dislikes: number;
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

  const filterTags = [
    "Wonderful experience",
    "Beautiful location",
    "Excellent food",
    "Best for family travel",
    "Awesome Dinner",
    "Amazing Cleanliness",
    "Efficient Staff",
    "Value for money",
    "Great amenities",
    "Couple friendly",
  ];

  return (
    <div className="max-w-7xl mx-auto py-12">
      {/* ================= HEADER ================= */}
      <div className="flex justify-between items-start mb-8">
        <div>
          <h2 className="text-4xl font-bold mb-2">User Rating & Reviews</h2>
          <p className="text-gray-600">
            Discover The Collective Wisdom Of The Crowd Through User Ratings And
            Reviews
          </p>
        </div>
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition">
          Write A Review
        </button>
      </div>

      {/* ================= RATING SUMMARY ================= */}
      <div className="bg-gray-50 rounded-xl p-8 mb-8">
        <div className="flex items-start gap-12">
          {/* Large Rating */}
          <div className="flex-shrink-0">
            <div className="text-7xl font-bold text-orange-500 mb-2">
              {averageRating.toFixed(1)}
            </div>
            <div className="text-2xl font-semibold">Excellent</div>
            <div className="text-gray-600">{totalReviews} Verified Reviews</div>
          </div>

          {/* Rating Bars */}
          <div className="flex-1 grid grid-cols-4 gap-6">
            {[
              { label: "5 (Excellent)", value: ratingDistribution[5], total: 78 },
              { label: "4 (Very Good)", value: ratingDistribution[4], total: 20 },
              { label: "3 (Good)", value: ratingDistribution[3], total: 16 },
              { label: "2 (Fair)", value: ratingDistribution[2], total: 4 },
            ].map((item, index) => (
              <div key={index}>
                <div className="text-sm font-medium mb-2">{item.label}</div>
                <div className="flex items-center gap-2">
                  <div className="flex-1 bg-gray-200 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-orange-500 h-full"
                      style={{ width: `${(item.total / 78) * 100}%` }}
                    />
                  </div>
                  <span className="text-sm text-gray-500 w-6">{item.total}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= SEARCH & SORT ================= */}
      <div className="flex gap-4 mb-6">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Search By Destination, Hotel or Package"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <div className="text-sm text-gray-500 mt-1">Manali</div>
        </div>
        <div className="relative">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="appearance-none px-6 py-3 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white cursor-pointer"
          >
            <option>Most Rated</option>
            <option>Most Recent</option>
            <option>Highest Rating</option>
            <option>Lowest Rating</option>
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
          <div className="text-sm text-gray-500 mt-1 text-right">Sort By</div>
        </div>
      </div>

      {/* ================= FILTER TAGS ================= */}
      <div className="flex flex-wrap gap-3 mb-8">
        {filterTags.map((tag, index) => (
          <button
            key={index}
            className="px-4 py-2 bg-white border border-gray-200 rounded-lg hover:border-orange-500 hover:text-orange-500 transition text-sm"
          >
            {tag}
          </button>
        ))}
      </div>

      {/* ================= REVIEWS LIST ================= */}
      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white rounded-xl p-6 shadow-sm">
            {/* Review Header */}
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-orange-500 text-white px-3 py-1 rounded-lg flex items-center gap-1 font-semibold">
                {review.rating}
                <Star className="w-4 h-4 fill-current" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-1">{review.title}</h3>
                <p className="text-gray-600">
                  Staycation At Novotel | Goa | Nature Travel
                </p>
              </div>
            </div>

            {/* User Info */}
            <div className="flex items-center gap-3 mb-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center text-white font-semibold">
                  {review.user.charAt(0)}
                </div>
                <span className="font-medium text-gray-900">{review.user}</span>
              </div>
              <span>•</span>
              <span>{review.date}</span>
              <span>•</span>
              {review.verified && (
                <>
                  <div className="flex items-center gap-1 text-orange-500">
                    <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Verified Traveler</span>
                  </div>
                  <span>•</span>
                </>
              )}
              <span>Category: {review.category}</span>
              <span>•</span>
              <span>{review.stayType}</span>
            </div>

            {/* Review Comment */}
            <p className="text-gray-700 mb-4 leading-relaxed">{review.comment}</p>

            {/* Review Images */}
            {review.images && review.images.length > 0 && (
              <div className="flex gap-3 mb-4">
                {review.images.slice(0, 4).map((image, idx) => (
                  <div
                    key={idx}
                    className="w-24 h-24 rounded-lg overflow-hidden bg-gray-100"
                  >
                    <img
                      src={image}
                      alt={`Review ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
                {review.images.length > 4 && (
                  <div className="w-24 h-24 rounded-lg bg-gray-900 text-white flex items-center justify-center text-sm font-semibold">
                    5+
                  </div>
                )}
              </div>
            )}

            {/* Like/Dislike Buttons */}
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                <ThumbsUp className="w-4 h-4" />
                <span>{review.likes}</span>
              </button>
              <span className="text-gray-400">.</span>
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                <ThumbsDown className="w-4 h-4" />
                <span>{review.dislikes}</span>
              </button>
            </div>

            {/* Admin Reply */}
            {review.reply && (
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="font-semibold mb-4">Replies</h4>
                <div className="bg-orange-50 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-3 text-sm">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                      <span className="text-xs font-semibold text-orange-500">
                        PF
                      </span>
                    </div>
                    <span className="font-semibold text-orange-500">
                      {review.reply.admin} (Admin)
                    </span>
                    <span>•</span>
                    <span className="text-gray-600">{review.reply.date}</span>
                  </div>
                  <p className="text-gray-700 mb-4">{review.reply.message}</p>
                  <div className="flex items-center gap-2">
                    <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 transition">
                      <ThumbsUp className="w-4 h-4" />
                      <span>{review.reply.likes}</span>
                    </button>
                    <span className="text-gray-400">.</span>
                    <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 transition">
                      <ThumbsDown className="w-4 h-4" />
                      <span>{review.reply.dislikes}</span>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* ================= PAGINATION ================= */}
      <div className="flex justify-center items-center gap-2 mt-8">
        <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-300 hover:bg-gray-50 transition">
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`w-10 h-10 rounded-lg font-medium transition ${
              page === currentPage
                ? "bg-orange-500 text-white"
                : "border border-gray-300 hover:bg-gray-50"
            }`}
          >
            {page}
          </button>
        ))}
        <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-300 hover:bg-gray-50 transition">
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}