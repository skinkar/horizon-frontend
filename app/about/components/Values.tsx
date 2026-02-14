import { AnimatedText, LineReveal } from "@/app/utils/animation";

const OurValues = () => {
  const values = [
    {
      icon: "/about/svg/values/values-svg-1.svg",
      title: "Customer – Centric",
      description:
        "Your satisfaction drives everything we do. Expect exceptional service and support at every step.",
    },
    {
      icon: "/about/svg/values/values-svg-2.svg",
      title: "Integrity",
      description:
        "We believe in honest and transparent operations, building trust with you and our partners.",
    },
    {
      icon: "/about/svg/values/values-svg-3.svg",
      title: "Innovation",
      description:
        "We’re constantly seeking fresh, creative solutions to elevate your travel experiences.",
    },
    {
      icon: "/about/svg/values/values-svg-4.svg",
      title: "Passion For Travel",
      description:
        "Our deep love for exploration fuels us to share incredible journeys with you.",
    },
  ];

  return (
    <section className="w-full bg-[#F2F4F6] px-6 md:px-8 py-12">
      <div className="mx-auto max-w-6xl">

        <div className="mb-14 text-center">
          <h2 className="mb-3 text-3xl font-gilroy-semibold text-text md:text-4xl">
            Our Values
          </h2>
          <div className="mx-auto text-sm font-gilroy-medium text-text md:text-base">
            <LineReveal text="We’re dedicated to exceptional experiences through trust, fresh thinking,\nand a genuine love for travel." />
          </div>
        </div>

        <div className="grid gap-2 md:gap-5 grid-cols-2 lg:grid-cols-4">
          {values.map((item) => (
            <div
              key={item.title}
              className="rounded-lg bg-white p-4 py-8 text-center"
            >
              <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-[#E6F6FC]">
                <img src={item.icon} alt={item.title} className="h-8 w-8" />
              </div>

              <h3 className="mb-2 text-lg font-gilroy-semibold text-text">
                {item.title}
              </h3>

              <div className="text-sm font-gilroy-medium leading-relaxed text-slate-500">
                <LineReveal text={item.description} />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OurValues;
