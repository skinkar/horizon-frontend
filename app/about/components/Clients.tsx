import { AnimatedText, LineReveal } from "@/app/utils/animation";
import Marquee from "react-fast-marquee";

const RecognitionByGovernment = () => {
  return (
    <section className="w-full bg-[#F2F4F6] py-20">
      <div className="mx-auto">
        <div className="text-center max-w-5xl mx-auto">
          <h2 className="mb-4 text-3xl font-gilroy-semibold text-text md:text-4xl">
            Recognition By Government
          </h2>
          <div className="mx-auto text-sm font-gilroy-medium leading-relaxed text-text">
            <LineReveal text="Phoenix Fly, a certified tour operator and ATOAI member, has quickly\nearned trust in the travel industry, winning multiple awards—including\nthe TripAdvisor Travelers’ Choice 2023 and MSME Best Enterprise for\nthree years—while being recognized by Startup India and featured in\nANI and Business Standard." />
          </div>
        </div>


        <Marquee speed={100} className="mt-12">
          <img src="/about/logos/summit.svg" alt="Summit Hotels" className="ml-8 md:ml-20" />
          <img src="/about/logos/taj.svg" alt="Taj" className="ml-8 md:ml-20" />
          <img src="/about/logos/startup-india.svg" alt="Startup India" className="ml-8 md:ml-20" />
          <img src="/about/logos/marriott.svg" alt="Marriott Bonvoy" className="ml-8 md:ml-20" />
        </Marquee>


        <div className="mb-20 mt-12 flex flex-col items-center justify-between gap-6 rounded-xl bg-white px-4 py-4 md:flex-row max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="flex -space-x-3">
              <img src="/about/img/avatar.svg" className="h-10 w-10 rounded-full border-2 border-white" />
              <img src="/about/img/avatar.svg" className="h-10 w-10 rounded-full border-2 border-white" />
              <img src="/about/img/avatar.svg" className="h-10 w-10 rounded-full border-2 border-white" />
              <img src="/about/img/avatar.svg" className="h-10 w-10 rounded-full border-2 border-white" />
            </div>

            <div className="text-center md:text-left">
              <h3 className="text-[20px] font-gilroy-semibold text-text">
                1.2K+ Reviews
              </h3>
              <div className="text-sm font-gilroy-medium text-slate-500">
                <LineReveal text="Hear What Our Travelers Are Saying" />
              </div>
            </div>
          </div>

          <button className="rounded-lg bg-[#FF6A00] px-6 py-3 text-sm font-gilroy-semibold text-white hover:bg-[#e96f21] w-full md:w-fit">
            Check Reviews
          </button>
        </div>

        <div className="grid gap-12 text-sm text-slate-700 md:grid-cols-3 max-w-5xl mx-auto">

          <div className="flex flex-col items-center md:items-start">
            <h4 className="mb-2 font-gilroy-semibold text-text text-[20px]">
              Contact Us
            </h4>
            <div className="mb-2 flex items-center gap-2 text-base font-gilroy-medium text-text">
              <LineReveal text="📧 phoenixflytravel@gmail.com" />
            </div>
            <div className="flex items-center gap-2 text-base font-gilroy-medium text-text">
              <LineReveal text="📞 +91-8861524428" />
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h4 className="mb-2 font-gilroy-semibold text-[#16242A] text-[20px]">
              Address
            </h4>
            <div className="leading-relaxed text-base font-gilroy-medium text-text">
              <LineReveal text="📍 3rd floor, above united medicals,\nramdev galli, belagavi – 590010" />
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h4 className="mb-4 font-gilroy-semibold text-[#16242A] text-[20px]">
              We Accept
            </h4>
            <div className="flex items-center gap-4">
              <img src="/about/logos/american_express.svg" className="h-6" alt="Amex" />
              <img src="/about/logos/mastercard.svg" className="h-6" alt="Mastercard" />
              <img src="/about/logos/visa.svg" className="h-6" alt="Visa" />
              <img src="/about/logos/paypal.svg" className="h-6" alt="Paypal" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default RecognitionByGovernment;
