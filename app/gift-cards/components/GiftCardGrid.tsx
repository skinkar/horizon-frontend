"use client";

import { GiftCard } from "../types";

interface Props {
  cards: GiftCard[];
  onSelect: (card: GiftCard) => void;
}

export default function GiftCardGrid({ cards, onSelect }: Props) {
  return (
    <section className="w-full py-10 md:py-16">

      {/* CONTAINER */}
      <div className="max-w-[1180px] mx-auto px-5 md:px-4">

        {/* HEADER */}
        <div className="text-center mb-8 md:mb-10">

          <h2 className="
            text-[26px] sm:text-[32px] md:text-[42px]
            leading-[110%] md:leading-[100%]
            tracking-[-0.02em]
            font-gilroy-semibold
            text-[#16242A]
          ">
            Share The Joy
          </h2>

          <p className="
            text-[14px] sm:text-[16px] md:text-[18px]
            leading-[22px] md:leading-[30px]
            font-gilroy-medium
            text-[#16242A]
            mt-2
            max-w-[90%] md:max-w-none
            mx-auto
          ">
            Choose the perfect card and send it instantly to make someone’s day special
          </p>

        </div>

        {/* GRID */}
        <div className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          gap-4 md:gap-[20px]
        ">

          {cards.map((card) => (
            <div
              key={card.id}
              onClick={() => onSelect(card)}
              className="
                relative
                w-full
                h-[200px] sm:h-[220px] md:h-[250px]
                rounded-lg md:rounded-xl
                overflow-hidden
                cursor-pointer
                group
              "
            >
              {/* IMAGE */}
              <img
                src={card.image}
                alt={card.title}
                className="
                  w-full
                  h-full
                  object-cover
                  group-hover:scale-105
                  transition
                  duration-500
                "
              />

              {/* GRADIENT OVERLAY */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(360deg, #000000 0%, rgba(0, 0, 0, 0) 77.2%)",
                }}
              />

              {/* TEXT BLOCK */}
              <div className="
                absolute
                bottom-4 md:bottom-[24px]
                left-4 md:left-[24px]
                text-white
              ">

                <h3 className="
                  text-[18px] sm:text-[20px] md:text-[24px]
                  leading-[100%]
                  font-gilroy-semibold
                ">
                  {card.title}
                </h3>

                <p className="
                  text-[13px] sm:text-[14px] md:text-[16px]
                  leading-[20px] md:leading-[30px]
                  font-gilroy-medium
                  text-[#B2B2B2]
                  mt-1
                ">
                  {card.subtitle}
                </p>

              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
