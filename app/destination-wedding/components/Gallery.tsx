"use client";

import { useRef, useState } from "react";

export default function Gallery() {
  // ✅ Properly typed ref
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [sliderPos, setSliderPos] = useState<number>(75);

  // ✅ Typed parameter
  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    let newPos = ((clientX - rect.left) / rect.width) * 100;

    if (newPos < 5) newPos = 5;
    if (newPos > 95) newPos = 95;

    setSliderPos(newPos);
  };

  const handleMouseDown = () => {
    const move = (e: MouseEvent) => handleMove(e.clientX);

    const up = () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", up);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", up);
  };

  const handleTouchStart = () => {
    const move = (e: TouchEvent) =>
      handleMove(e.touches[0].clientX);

    const up = () => {
      window.removeEventListener("touchmove", move);
      window.removeEventListener("touchend", up);
    };

    window.addEventListener("touchmove", move);
    window.addEventListener("touchend", up);
  };

  return (
    <section className="relative py-28 bg-white overflow-hidden">
      {/* FLOWER DECOR */}
      <img
        src="/destination-wedding/about-flower-left.png"
        className="absolute left-0 top-20 w-[260px] opacity-40 hidden md:block"
      />

      <img
        src="/destination-wedding/flower.svg"
        className="absolute right-0 bottom-0 w-[420px] opacity-[0.05]"
      />

      <div className="relative z-10 max-w-[1240px] mx-auto px-6">
        {/* Heading */}
        <h2 className="text-center font-gilroy-bold text-[#9B2C5D] text-3xl md:text-5xl mb-4">
          Designed To Envision, Built To Perfection
        </h2>

        <p className="text-center text-[#16242A] mb-14 max-w-[620px] mx-auto">
          Experience How Your Vision Comes To Life – Exactly As Imagined
        </p>

        {/* IMAGE SLIDER */}
        <div
          ref={containerRef}
          className="
            relative
            rounded-[28px]
            overflow-hidden
            shadow-[0_20px_50px_rgba(0,0,0,0.12)]
            select-none
          "
        >
          {/* BASE IMAGE */}
          <img
            src="/destination-wedding/gallery-vision.png"
            className="w-full h-[320px] md:h-[540px] object-cover"
          />

          {/* OVERLAY IMAGE */}
          <div
            className="absolute top-0 left-0 h-full overflow-hidden"
            style={{ width: `${sliderPos}%` }}
          >
            <img
              src="/destination-wedding/gallery-reality.png"
              className="w-full h-[320px] md:h-[540px] object-cover"
            />
          </div>

          {/* DIVIDER LINE */}
          <div
            className="absolute top-0 bottom-0 w-[4px] bg-[#9B2C5D]"
            style={{
              left: `${sliderPos}%`,
              transform: "translateX(-50%)",
            }}
          />

          {/* DRAG BUTTON */}
          <div
            className="
              absolute
              top-1/2
              w-12 h-12
              bg-[#9B2C5D]
              rounded-full
              flex items-center justify-center
              text-white
              cursor-ew-resize
              shadow-lg
            "
            style={{
              left: `${sliderPos}%`,
              transform: "translate(-50%, -50%)",
            }}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
          >
            ↔
          </div>
        </div>

        {/* LABELS */}
        <div className="flex justify-between mt-6 text-[#9B2C5D] font-medium">
          <span>Vision</span>
          <span>Reality</span>
        </div>
      </div>
    </section>
  );
}
