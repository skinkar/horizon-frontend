import { AnimatedText, LineReveal } from "@/app/utils/animation";

const Hero = () => {
  return (
    <section className="w-full px-6 md:px-8 py-12 pt-20 md:pt-28 bg-[#F2F4F6]">
      <div className="mx-auto max-w-6xl">
        <div className="flex justify-between flex-col items-start gap-6 md:gap-12 md:flex-row">

          <h1 className="text-4xl font-gilroy-semibold leading-tight text-text md:text-[42px] tracking-[-0.02em] w-fit">
            Redefining Travel Experiences
          </h1>

          <div className="max-w-3xl text-sm leading-[30px] text-text md:text-base font-gilroy-medium w-full">
            <LineReveal
              text="Phoenix Fly is an online travel platform that specialises in providing personalised and affordable travel packages, including luxury travel options. We understand that every traveler is unique, which is why we offer customised packages that fit your specific needs and budget, ensuring that you have a unique and memorable trip."
            />
          </div>
        </div>

        <div className="mt-10 rounded-3xl">
          <img
            src="/about/img/hero-bg.png"
            alt="Traveler standing in front of a waterfall"
            className="h-[420px] w-full rounded-[1.4rem] object-cover md:h-[420px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
