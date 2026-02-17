"use client";

import { useState, useMemo } from "react";
import { giftTransactions } from "../data/giftCards";
import { GiftTransaction } from "../type";

const ITEMS_PER_PAGE = 4; // Set 1 to test pagination visually

export default function GiftHistory() {
  const [activeTab, setActiveTab] = useState<"sent" | "received">("sent");
  const [page, setPage] = useState(1);

  const filteredGifts = useMemo(() => {
    return giftTransactions.filter((gift) => gift.type === activeTab);
  }, [activeTab]);

  const totalPages = Math.ceil(filteredGifts.length / ITEMS_PER_PAGE);

  const paginatedGifts = filteredGifts.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE,
  );

  return (
    <section className="bg-[#F3F4F6] py-20 min-h-screen">
      <div className="max-w-[1184px] mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-6 md:mb-10">
          <h2
            className="
    text-[26px] md:text-[42px]
    leading-[120%] md:leading-[100%]
    tracking-[-0.02em]
    font-gilroy-semibold
    text-[#16242A]
  "
          >
            Your Gift Card History
          </h2>

          <p
            className="
    text-[14px] md:text-[18px]
    leading-[22px] md:leading-[30px]
    font-gilroy-medium
    text-[#667085]
    mt-1 md:mt-2
  "
          >
            Easily track the gift cards you've sent and received
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8 md:mb-12">
          <div
            className="
    inline-flex
    bg-[#E5E7EB]
    rounded-full
    p-[6px]
    shadow-sm
  "
          >
            {(["sent", "received"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  setPage(1);
                }}
                className={`
          px-5 md:px-8
          h-[44px] md:h-[52px]
          rounded-full
          text-[13px] md:text-[16px]
          tracking-[-0.02em]
          font-gilroy-semibold
          transition-all duration-300
          ${
            activeTab === tab
              ? "bg-white text-[#FF6A00] shadow-md"
              : "text-[#475467]"
          }
        `}
              >
                {tab === "sent" ? "Sent Gift Cards" : "Received Gift Cards"}
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className="space-y-6">
          {paginatedGifts.map((gift) => (
            <GiftHistoryCard key={gift.id} gift={gift} />
          ))}
        </div>

        {/* Pagination Always Visible */}
        <div className="flex justify-center mt-12">
          <div className="flex items-center gap-2">
            {/* LEFT ARROW */}
            <button
              onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
              disabled={page === 1}
              className={`w-9 h-9 rounded-md flex items-center justify-center ${
                page === 1
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              ‹
            </button>

            {/* PAGE NUMBERS */}
            {Array.from({ length: totalPages || 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setPage(index + 1)}
                className={`w-9 h-9 rounded-md text-sm ${
                  page === index + 1
                    ? "bg-[#FF6A00] text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {index + 1}
              </button>
            ))}

            {/* RIGHT ARROW */}
            <button
              onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={page === totalPages}
              className={`w-9 h-9 rounded-md flex items-center justify-center ${
                page === totalPages
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function GiftHistoryCard({ gift }: { gift: GiftTransaction }) {
  return (
    <div
      className="
      w-full 
      bg-white 
      rounded-[20px] 
      p-4 md:p-6 
      flex 
      flex-col md:flex-row 
      gap-6 
      shadow-[0_4px_20px_rgba(0,0,0,0.05)]
    "
    >
      {/* IMAGE */}
      <div
        className="
        relative 
        w-full md:w-[380px] 
        h-[220px] md:h-[250px] 
        rounded-[16px] 
        overflow-hidden
        shrink-0
      "
      >
        <img
          src={gift.image}
          alt={gift.title}
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div
          className="
          absolute inset-0
          bg-[linear-gradient(360deg,_#000000_0%,_rgba(0,0,0,0)_88.6%)]
        "
        />

        <div className="absolute bottom-4 left-4 text-white">
          <p className="text-[16px] md:text-[18px] font-medium">
            ₹ {gift.amount.toLocaleString()}
          </p>

          <p className="text-[18px] md:text-[20px] font-semibold">
            {gift.title.split(" Gift")[0]}
          </p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="flex-1 relative">
        <h3 className="text-[20px] md:text-[24px] font-semibold text-[#16242A] mb-3">
          {gift.title}
        </h3>

        <div className="flex flex-col md:flex-row md:gap-10 text-[14px] text-[#667085] mb-6 gap-2">
          <div>
            <span className="text-[#98A2B3]">
              {gift.type === "sent" ? "Sent On:" : "Received On:"}
            </span>{" "}
            {gift.sentOn}
          </div>
          <div>
            <span className="text-[#98A2B3]">Redeemed On:</span>{" "}
            {gift.redeemedOn}
          </div>
        </div>

        {/* INFO GRID */}
        <div
          className="
          grid 
          grid-cols-1 md:grid-cols-3 
          gap-4 md:gap-10 
          mb-6 
          text-[14px]
        "
        >
          <Info label="Receiver Name" value={gift.receiver} />
          <Info label="Receiver Email" value={gift.email} />
          <Info label="Receiver Phone" value={gift.phone} />
        </div>

        {/* MESSAGE */}
        <div className="mb-6 md:mb-0">
          <p className="text-[#98A2B3] text-[14px] mb-1">Message</p>
          <p className="text-[#667085] text-[14px] line-clamp-2">
            {gift.message}
          </p>
        </div>

        {/* BUTTON */}
        <div className="mt-4 md:absolute md:bottom-0 md:right-0">
          <button
            className="
            w-full md:w-auto
            bg-[#FF6A00] 
            text-white 
            px-5 
            py-2 
            rounded-lg 
            text-sm 
            hover:bg-orange-600 
            transition
          "
          >
            View Transaction Details
          </button>
        </div>
      </div>
    </div>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[#98A2B3] mb-1">{label}</p>
      <p className="text-[#16242A]">{value}</p>
    </div>
  );
}
