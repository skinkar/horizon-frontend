"use client";

export default function CraftedGrid() {
  return (
    <section className="relative py-24 bg-white overflow-visible">
       {/* RIGHT FLOWER */}
         <img
        src="/destination-wedding/crafted-flower.svg"
        className="
    absolute right-[90] top-[-40px]
    w-[420px]        /* mobile */
    md:w-[480px]     /* tablet */
    lg:w-[1500px]     /* desktop */
    opacity-100
    pointer-events-none
  "
      />



<div
  className="
    relative
    z-10
    w-full
    mx-auto
    px-6
    md:px-10
    lg:px-16
    max-w-[1100px]
    md:max-w-[1200px]
    lg:max-w-[1300px]
    xl:max-w-[1400px]
    2xl:max-w-[1500px]
  "
>


        {/* HEADING */}
        <h2 className="text-center font-gilroy-bold text-[#9B2C5D] text-3xl md:text-5xl mb-4">
          Crafted For Your Dreams
        </h2>

        <p className="text-center text-[#475467] mb-16 max-w-[720px] mx-auto">
          Best Selling And Trending Wedding Themes That Define Elegance And
          Celebration
        </p>

        {/* ===== DESKTOP MOSAIC GRID ===== */}
        <div className="hidden md:grid grid-cols-12 gap-6">
          {/* LEFT COLUMN (6 cols) */}
          <div className="col-span-6 grid grid-cols-2 gap-6">
            {/* Top Wide */}
            <GridImage
              src="/destination-wedding/grid1.png"
              className="col-span-2 h-[260px]"
            />

            {/* Four small images */}
            <GridImage
              src="/destination-wedding/grid2.png"
              className="h-[190px]"
            />
            <GridImage
              src="/destination-wedding/grid3.png"
              className="h-[190px]"
            />
            <GridImage
              src="/destination-wedding/grid4.png"
              className="h-[190px]"
            />
            <GridImage
              src="/destination-wedding/grid5.png"
              className="h-[190px]"
            />
          </div>

          {/* MIDDLE TALL IMAGE (3 cols) */}
          <GridImage
            src="/destination-wedding/grid7.png"
            className="col-span-3 h-[700px]"
          />

          {/* RIGHT COLUMN (3 cols) */}
          <div className="col-span-3 flex flex-col gap-6">
            {/* Right Top */}
            <GridImage
              src="/destination-wedding/grid6.png"
              className="h-[340px]"
            />

            {/* Right Bottom */}
            <GridImage
              src="/destination-wedding/grid8.png"
              className="h-[340px]"
            />
          </div>
        </div>

        {/* ===== MOBILE STACK ===== */}

        <div className="md:hidden flex flex-col gap-5">
          {/* Top Wide */}
          <GridImage
            src="/destination-wedding/grid1.png"
            className="h-[220px]"
          />

          {/* Two Side */}
          <div className="grid grid-cols-2 gap-5">
            <GridImage
              src="/destination-wedding/grid2.png"
              className="h-[160px]"
            />
            <GridImage
              src="/destination-wedding/grid3.png"
              className="h-[160px]"
            />
          </div>

          {/* Two Side */}
          <div className="grid grid-cols-2 gap-5">
            <GridImage
              src="/destination-wedding/grid4.png"
              className="h-[160px]"
            />
            <GridImage
              src="/destination-wedding/grid5.png"
              className="h-[160px]"
            />
          </div>

          {/* Bottom Section (Tall Left + Two Right) */}
          <div className="grid grid-cols-2 gap-5">
            {/* Tall Left */}
            <GridImage
              src="/destination-wedding/grid7.png"
              className="h-[380px]"
            />

            {/* Right Column */}
            <div className="flex flex-col gap-5">
              <GridImage
                src="/destination-wedding/grid6.png"
                className="h-[180px]"
              />
              <GridImage
                src="/destination-wedding/grid8.png"
                className="h-[180px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
type GridImageProps = {
  src: string
  className?: string
}

function GridImage({ src, className = "" }: GridImageProps) {
  return (
    <div
      className={`
        relative
        rounded-[26px]
        overflow-hidden
        group
        ${className}
      `}
    >
      <img
        src={src}
        alt=""
        className="
          w-full h-full
          object-cover
          transition duration-700
          group-hover:scale-105
        "
      />
    </div>
  );
}
