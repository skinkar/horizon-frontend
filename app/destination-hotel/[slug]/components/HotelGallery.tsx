"use client"

import { ArrowLeft, Image as ImageIcon } from "lucide-react"

interface Props {
  images: string[]
}

export default function HotelGallery({ images }: Props) {
  if (!images || images.length < 5) return null

  return (
    <div className="w-full flex justify-center mt-6 px-4 lg:px-0">

      {/* Container */}
      <div className="w-full max-w-[1120px]">

        {/* See All Properties */}
        <button className="flex items-center gap-2 text-[14px] md:text-[15px] text-gray-800 mb-4 hover:opacity-80 transition">
          <ArrowLeft size={18} strokeWidth={2} />
          See all Properties
        </button>

        {/* ================= DESKTOP LAYOUT ================= */}
        <div className="hidden lg:flex gap-4 h-[342px]">

          {/* LEFT BIG IMAGE */}
          <div className="w-[488px] h-[342px] rounded-[6px] overflow-hidden">
            <img
              src={images[0]}
              alt="hotel-main"
              className="w-full h-full object-cover"
            />
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col gap-4">

            <div className="flex gap-4">
              <GallerySmallImage src={images[1]} />
              <GallerySmallImage src={images[2]} />
            </div>

            <div className="flex gap-4">
              <GallerySmallImage src={images[3]} />

              <div className="relative w-[306px] h-[166px] rounded-[6px] overflow-hidden">
                <img
                  src={images[4]}
                  alt="hotel-extra"
                  className="w-full h-full object-cover"
                />

                <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-sm text-white px-3 py-1.5 rounded-md flex items-center gap-2 text-sm">
                  <ImageIcon size={16} />
                  45+
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ================= TABLET LAYOUT ================= */}
        <div className="hidden md:grid lg:hidden grid-cols-2 gap-4">
          {images.slice(0, 4).map((img, i) => (
            <div key={i} className="aspect-[4/3] rounded-md overflow-hidden">
              <img
                src={img}
                alt="hotel"
                className="w-full h-full object-cover"
              />
            </div>
          ))}

          <div className="relative aspect-[4/3] rounded-md overflow-hidden">
            <img
              src={images[4]}
              alt="hotel-extra"
              className="w-full h-full object-cover"
            />

            <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-sm text-white px-3 py-1.5 rounded-md flex items-center gap-2 text-sm">
              <ImageIcon size={16} />
              45+
            </div>
          </div>
        </div>

        {/* ================= MOBILE LAYOUT ================= */}
        <div className="grid md:hidden gap-3">
          
          {/* Main image */}
          <div className="aspect-[16/10] rounded-md overflow-hidden">
            <img
              src={images[0]}
              alt="hotel-main"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Horizontal scroll thumbnails */}
          <div className="flex gap-3 overflow-x-auto no-scrollbar">
            {images.slice(1, 5).map((img, i) => (
              <div
                key={i}
                className="min-w-[140px] h-[100px] rounded-md overflow-hidden flex-shrink-0 relative"
              >
                <img
                  src={img}
                  alt="hotel"
                  className="w-full h-full object-cover"
                />

                {i === 3 && (
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs flex items-center gap-1">
                    <ImageIcon size={14} />
                    45+
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

function GallerySmallImage({ src }: { src: string }) {
  return (
    <div className="w-[306px] h-[166px] rounded-[6px] overflow-hidden">
      <img
        src={src}
        alt="hotel"
        className="w-full h-full object-cover"
      />
    </div>
  )
}
