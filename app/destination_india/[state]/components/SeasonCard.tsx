"use client"

import { SeasonType, StateTheme } from "../stateData"

export default function SeasonCard({
  season,
  theme,
}: {
  season: SeasonType
  theme: StateTheme
}) {
  return (
    <div className="text-center max-w-[340px] mx-auto">

      {/* IMAGE */}
      <img
        src={season.image}
        alt={season.title}
        className="mx-auto mb-8 w-[240px]"
      />

      {/* TITLE */}
      <h3
        className="text-[26px] font-gilroy-bold"
        style={{ color: theme.seasonTextColor }}
      >
        {season.title}
      </h3>

      {/* MONTHS */}
      <p
        className="text-[14px] font-gilroy-semibold mt-2"
        style={{ color: theme.primary }}
      >
        {season.months}
      </p>

      {/* DESCRIPTION — FIGMA MATCH */}
      <p
        className="mt-4 font-gilroy-medium text-[18px] leading-[28px] tracking-[-0.04em]"
        style={{ color: theme.seasonTextColor }}
      >
        {season.description}
      </p>

    </div>
  )
}
