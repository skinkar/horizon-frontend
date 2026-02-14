"use client";

import { StateDataType } from "../stateData";

export default function StateAbout({
  stateData,
}: {
  stateData: StateDataType;
}) {
  return (
    <section className="relative min-h-screen text-white overflow-hidden">
      
      {/* GRADIENT BACKGROUND - matches hero bottom and fades to darker color */}
      <div
        className="absolute inset-0 "
        style={{
          background: `linear-gradient(
            to bottom,
            ${stateData.theme.gradientFrom} 0%,
            ${stateData.theme.gradientFrom} 15%,
            ${stateData.theme.gradientTo} 80%
          )`,
        }}
      />

      {/* ABOUT ILLUSTRATION OVERLAY */}
      <div
        className="absolute inset-0 bg-center bg-no-repeat mt-20"
        style={{
          backgroundImage: `url(${stateData.theme.aboutBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center bottom",
          opacity: 0.15,
        }}
      />

      {/* CONTENT */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            {stateData.about.title}
          </h2>

          <p
            className="text-xl md:text-2xl font-semibold mb-12"
            style={{ color: stateData.theme.aboutColors.subtitle }}
          >
            {stateData.about.subtitle}
          </p>

          <div
            className="
  space-y-5
  text-[18px]
  leading-[28px]
  tracking-[-0.04em]
  text-center
  font-gilroy-medium
  max-w-3xl
  mx-auto
  "
            style={{ color: stateData.theme.aboutColors.description }}
          >
            {stateData.about.description
              .split("\n\n")
              .map((paragraph, index) => (
                <p key={index}>{paragraph.trim()}</p>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
