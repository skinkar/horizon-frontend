"use client";

import { useState } from "react";
import { giftCards, giftTransactions } from "../data/giftCards";
import GiftHero from "./GiftHero";
import GiftCardGrid from "./GiftCardGrid";
import GiftHistory from "./GiftHistory";
import GiftCardModal from "./GiftCardModal";
import { GiftCard } from "../types";
import GiftSendModal from "./GiftSendModal";

export default function GiftCardClient() {
  const [selectedCard, setSelectedCard] = useState<GiftCard | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <GiftHero />

      <GiftCardGrid
        cards={giftCards}
        onSelect={(card) => setSelectedCard(card)}
      />

      <GiftHistory transactions={giftTransactions} />

      {selectedCard && (
        <GiftSendModal
          selectedCard={selectedCard}
          onClose={() => setSelectedCard(null)}
        />
      )}
    </div>
  );
}
