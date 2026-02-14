"use client"

import SeasonCard from "./SeasonCard"
import { StateDataType } from "../stateData"

export default function StateBestTime({
  stateData,
}: {
  stateData: StateDataType
}) {

  if (!stateData.bestTime) return null

  return (
    <section className="relative py-32 overflow-hidden">

      {/* ================= GRADIENT BASE ================= */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(
            to bottom,
            ${stateData.theme.gradientFrom},
            ${stateData.theme.gradientTo}
          )`,
        }}
      />

      {/* ================= BG ILLUSTRATION IMAGE ================= */}
      <div
        className="absolute inset-0 opacity-30 bg-bottom bg-no-repeat"
        style={{
          backgroundImage: `url(${stateData.theme.bestTimeBg})`,
          backgroundSize: "cover",
        }}
      />

      {/* ================= PATH IMAGE (IMPORTANT) ================= */}
      <img
        src={stateData.theme.bestTimePath}
        alt="decorative path"
        className="
          absolute
          left-1/2
          top-[55%]
          -translate-x-1/2
          w-[90%]
          max-w-[1400px]
          opacity-70
          pointer-events-none
        "
      />

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <div className="text-center mb-24">

          <h2 className="
            text-white
            text-[42px] md:text-[60px]
            font-gilroy-bold
            mb-4
          ">
            Best time to visit {stateData.name}
          </h2>

          <p
            className="font-gilroy-medium text-lg"
            style={{ color: stateData.theme.primary }}
          >
            Explore and enjoy {stateData.name} in different seasons
          </p>

        </div>

        {/* SEASON CARDS */}
        <div className="grid md:grid-cols-3 gap-16">
          {stateData.bestTime.map((season, i) => (
            <SeasonCard
              key={i}
              season={season}
              theme={stateData.theme}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
