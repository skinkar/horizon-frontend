"use client";

import { StateDataType } from "../stateData";

export default function StateHero({ data }: { data: StateDataType }) {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* BG IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${data.heroImage})` }}
      />

      {/* SUBTLE DARK OVERLAY for text readability */}
      <div className="absolute inset-0 bg-black/10" />

      {/* GRADIENT FADE TO ABOUT SECTION */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[55%]"
        style={{
          background: `linear-gradient(
            to bottom,
            transparent 0%,
            ${data.theme.gradientFrom}40 35%,
            ${data.theme.gradientFrom}99 70%,
            ${data.theme.gradientFrom} 100%
          )`,
        }}
      />

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6">
        <p className="mb-4 text-sm md:text-base text-white/90 font-medium tracking-wide uppercase">
          Explore The Beauty Of {data.name}
        </p>

        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold uppercase tracking-tight mb-8">
          {data.name}
        </h1>

        <button
          className="mt-4 px-10 py-4 rounded-xl font-semibold text-lg text-black transition-transform hover:scale-105 shadow-lg"
          style={{ background: data.theme.primary }}
        >
          Explore {data.name}
        </button>
      </div>
    </section>
  );
}