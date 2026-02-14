"use client";

import {
  MapPin,
  IndianRupee,
  Layers,
  Route,
  ArrowRight,
  MessageCircle,
} from "lucide-react";

export default function CustomizeCTA() {
  return (
    <section className="relative w-full bg-white py-24 overflow-hidden">
      {/* ===== BACKGROUND DECORATION LAYER ===== */}
{/* ===== BACKGROUND DECORATION LAYER ===== */}
<div className="absolute inset-0 z-0 pointer-events-none">

  <img
    src="/destination-wedding/top-side-flower.png"
    className="
      absolute
      left-1/2
      -translate-x-1/2

      /* MOBILE → bottom */
      top-[40]
      w-[340px]
      opacity-[0.10]

      /* DESKTOP → top */
      md:top-[-40px]
      md:bottom-auto
      md:w-[360px]
      lg:w-[480px]
    "
  />

</div>


      {/* ===== REAL CONTENT LAYER ===== */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 ">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-[40px] md:text-[48px] font-gilroy-bold text-[#9B2C5D] mb-4">
            Customize Your Booking
          </h2>
          <p className="text-[#475467] text-[16px] max-w-[700px] mx-auto">
            Customize every aspect of your journey to fit your budget, schedule,
            and group dynamics.
          </p>
        </div>

        {/* Main Card */}
       {/* Main Card */}
<div
  className="
    w-full
    max-w-[1200px]
    mx-auto
    bg-white
    border border-[#E4E7EC]
    rounded-[20px]
    overflow-hidden

    md:h-[622px]
    md:grid md:grid-cols-2

    flex flex-col
  "
>
  {/* LEFT PANEL */}
  <div
    className="
      px-8 py-12
      md:px-16 md:py-14
      bg-gradient-to-br from-[#FFD9BD] to-[#B3E5F1]
      flex flex-col justify-center
      text-center md:text-left
    "
  >
    <h3 className="text-[28px] md:text-[42px] leading-[1.2] font-gilroy-semibold text-[#101828] mb-6 md:mb-8">
      Let Our Experts <br />
      Tailor A{" "}
      <span className="text-[#F97316]">Customized Package</span> <br />
      That Caters To <br />
      Your Preferences
    </h3>

    <button className="flex items-center justify-center md:justify-start gap-2 text-[#101828] font-medium">
      Make Your Custom Itinerary Now!
      <ArrowRight size={18} />
    </button>
  </div>

  {/* RIGHT PANEL */}
  <div
    className="
      px-8 py-12
      md:px-16 md:py-14
      flex flex-col justify-between
      bg-white
    "
  >
    {/* Features */}
    <div className="grid grid-cols-2 gap-y-10 gap-x-6 md:gap-y-14 md:gap-x-12">

      <Feature
        icon={<Layers size={26} strokeWidth={1.8} />}
        title="100% Customized Trips"
        desc="Tailor-made travel experiences just for you."
      />

      <Feature
        icon={<Route size={26} strokeWidth={1.8} />}
        title="Multi-City Adventures"
        desc="Visit multiple destinations in one seamless trip."
      />

      <Feature
        icon={<MapPin size={26} strokeWidth={1.8} />}
        title="Instant & Flexible Planning"
        desc="Pick your own dates that fits your schedule."
      />

      <Feature
        icon={<IndianRupee size={26} strokeWidth={1.8} />}
        title="Budget-Friendly Trips"
        desc="Smart recommendations that match your budget."
      />
    </div>

    {/* Buttons */}
    <div className="flex flex-col md:flex-row gap-4 md:gap-6 mt-12">
      <button className="w-full md:w-auto bg-[#101828] hover:bg-black text-white py-4 px-10 rounded-lg font-medium transition">
        Plan My Wedding
      </button>

      <button className="w-full md:w-auto bg-[#22C55E] hover:bg-[#16A34A] text-white py-4 px-10 rounded-lg flex items-center justify-center gap-2 font-medium transition">
        Whatsapp Us
        <MessageCircle size={18} />
      </button>
    </div>
  </div>
</div>

      </div>
    </section>
  );
}

/* Feature Component */
function Feature({ icon, title, desc }) {
  return (
    <div className="text-center">
      <div className="text-[#F97316] mb-4 flex justify-center">{icon}</div>

      <h4 className="font-gilroy-semibold text-[#101828] mb-2">{title}</h4>

      <p className="text-sm text-[#475467] leading-relaxed max-w-[220px] mx-auto">
        {desc}
      </p>
    </div>
  );
}
