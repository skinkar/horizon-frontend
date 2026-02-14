export default function About() {
  return (
    <section className="relative py-16 md:py-28 bg-white overflow-hidden">

      {/* ===== Left Floral Decoration  ===== */}
      <img
        src="/destination-wedding/about-flower-left.png"
        alt="flower"
        className="
          absolute
          bottom-0
          -left-10 md:-left-16 lg:-left-24
          w-40 md:w-60 lg:w-72
          opacity-60
          pointer-events-none
          select-none
        "
      />

      {/* ===== Right Floral Decoration  ===== */}
      <img
        src="/destination-wedding/about-flower-right.png"
        alt="flower"
        className="
          absolute
          top-20
          -right-10 md:-right-16 lg:right-0
          w-40 md:w-60 lg:w-72
          opacity-70
          pointer-events-none
          select-none
        "
      />

      {/* ===== Content ===== */}
      <div className="
        relative z-10
        mx-auto
        px-6
        text-center

        max-w-[650px]
        md:max-w-[760px]
        lg:max-w-[900px]
        xl:max-w-[1000px]
      ">

        {/* Heading */}
        <h2 className="
          font-gilroy-bold
          text-[#9B2C5D]
          mb-8 md:mb-10

          text-3xl
          sm:text-4xl
          md:text-[42px]
          lg:text-[48px]
        ">
          About Destination Wedding
        </h2>

        {/* Paragraphs */}
        <div className="
          space-y-6 md:space-y-7
          text-[#16242A]

          text-[15px]
          md:text-[16.5px]
          lg:text-[17px]

          leading-[1.8]
        ">

          <p>
            Step into a world of luxury and romance with Phoenix Fly. At Phoenix Fly,
            we specialize in creating your dream destination wedding, infusing each
            element from the heartfelt ceremony to the vibrant reception and every
            moment in between with your unique style and preferences.
          </p>

          <p>
            Our focus on personalization ensures a celebration that truly feels like
            you. Whether you envision an elegant banquet hall, a serene and beautiful
            garden, or a stunning rooftop terrace, we carefully tailor the setting to
            your vision. From intimate moments to grand gestures, your destination
            wedding with us promises an extraordinary fusion of luxurious stays and
            stunning places, creating memories that you will cherish forever.
          </p>

          <p>
            Our goal is to create weddings that go beyond imagination, where luxury
            and love converge in stunning destinations, forming an ambiance that truly
            reflects your dreams. Enter a world where lavish accommodations seamlessly
            merge with spacious venues, forming the backdrop for an exceptional
            celebration.
          </p>

          <p>
            Our comprehensive experience includes a range of activities before and
            after the wedding, like mehndi ceremonies, relaxing spa treatments, and
            local tours, to give you a complete experience. Our flexible wedding
            packages are designed to align with your specific vision and budget. Our
            dedicated efforts ensure everything is tailored to your satisfaction.
          </p>

          <p>
            We are committed to crafting an unforgettable day, understanding the
            significance of each detail. From the excitement of pre wedding moments to
            the careful planning that brings your dream to life. We ensure that your
            journey towards your happily ever after is marked by joy and elegance.
          </p>

        </div>

      </div>
    </section>
  )
}
