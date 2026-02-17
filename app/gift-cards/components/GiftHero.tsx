export default function GiftHero() {
  return (
    <section className="pt-[60px] md:pt-[74px] pb-12 md:pb-20">

      {/* HERO CONTAINER */}
      <div className="
        max-w-[1184px] 
        h-[260px] md:h-[372px] 
        mx-auto 
        rounded-[16px] md:rounded-[20px] 
        overflow-hidden 
        relative
        mx-4 md:mx-auto
      ">

        {/* Background Image */}
        <img
          src="/gift/giftcard-hero.jpg"
          alt="Gift Cards"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(19.35deg,rgba(0,0,0,0.34)_12.99%,rgba(0,0,0,0)_103.32%)]" />

        {/* Content */}
        <div className="
          absolute inset-0 
          flex flex-col 
          items-center 
          justify-center 
          text-center 
          text-white 
          px-4 md:px-6
        ">

          {/* Heading */}
          <h1 className="
            font-gilroy-semibold 
            uppercase 
            text-[36px] sm:text-[48px] md:text-[88px] 
            leading-[100%]
          ">
            Gift Cards
          </h1>

          {/* Subheading */}
          <p className="
            mt-3 md:mt-4 
            font-gilroy-semibold 
            text-[14px] sm:text-[18px] md:text-[24px] 
            leading-[120%]
            max-w-[90%] md:max-w-none
          ">
            Surprise your loved ones with unforgettable experiences.
          </p>

        </div>
      </div>

      {/* Bottom Description */}
      <div className="max-w-[1184px] mx-auto mt-8 md:mt-12 px-5 md:px-6">
        <p className="
          text-center 
          text-[#16242A] 
          font-gilroy-medium 
          text-[14px] sm:text-[16px] md:text-[18px] 
          leading-[22px] md:leading-[30px]
        ">
          Perfect for birthdays, anniversaries, weddings, or just because—our travel gift cards offer complete flexibility. 
          Recipients can use them to book domestic or international trips, hotels, or experiences at their convenience. 
          No expiry, no pressure—just pure travel joy.
        </p>
      </div>

    </section>
  );
}
