export default function HeroDestination() {
  return (
    <section className="relative  flex min-h-screen items-center px-4 md:px-8 overflow-hidden">

      {/* ===== Background Images ===== */}

      {/* Desktop Image */}
      <img
        src="/destination-wedding/destination-hero-bg.png"
        alt="Destination Wedding"
        className="
          absolute inset-0
          w-full h-full
          object-cover
          hidden md:block
        "
      />

      {/* Mobile Image — YOU WILL REPLACE THIS */}
      <img
        src="/destination-wedding/destination-hero-mob-bg.png"
        alt="Destination Wedding Mobile"
        className="
          absolute inset-0
          w-full h-full
          object-cover
          block md:hidden
        "
      />

      {/* ===== Overlay ===== */}
      <div className="absolute inset-0 bg-black/20" />

      {/* ===== Bottom Gradient ===== */}
      <div className="
        absolute bottom-0 left-0 right-0
        h-[25vh] md:h-[35vh]
        bg-gradient-to-t
        from-white
        via-white/80
        to-transparent
      " />

      {/* ===== Content ===== */}
      <div className="relative z-20 mx-auto w-full max-w-7xl text-center">

        {/* ===== Heading ===== */}
        <h1
          className="
            font-gilroy-bold
            uppercase
            text-white
            tracking-[-0.02em]
            leading-[1]

            whitespace-normal
            lg:whitespace-nowrap
          "
          style={{
            fontSize: "clamp(42px, 8vw, 120px)"
          }}
        >
          DESTINATION WEDDING
        </h1>

        {/* ===== Subtitle ===== */}
        <p className="
          mt-6
          font-gilroy-semibold
          text-white/95
          mx-auto
          max-w-[982px]
          text-[16px]
          sm:text-[18px]
          md:text-[22px]
          lg:text-[26px]
          xl:text-[28px]
        ">
          Cherish Your Love Amidst Breathtaking Backdrops At Dream Wedding Destinations
        </p>

      </div>
    </section>
  )
}
