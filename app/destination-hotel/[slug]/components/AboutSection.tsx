"use client";

interface AboutSectionProps {
  hotel: {
    about: {
      title: string;
      subTitle: string;
      description: string;
      perks: string[];
      roomFeatures: string;
      moreAmenities: string[];
      languages: string[];
    };
    safety: {
      cleanliness: string;
      socialDistancing: string;
      safetyMeasures: string[];
    };
    policies: {
      checkIn: string[];
      checkOut: string[];
      instructions: string[];
      accessMethods: string;
      pets: string;
      children: string[];
      paymentTypes: string[];
    };
  };
}

export default function AboutSection({ hotel }: AboutSectionProps) {
  const { about, safety, policies } = hotel;

  return (
    <section className="max-w-[1122px] mx-auto px-4 md:px-6 lg:px-0 py-10 md:py-16">

      {/* ================= ABOUT PROPERTY ================= */}
      <div className="flex flex-col md:grid md:grid-cols-[260px_1fr] gap-6 md:gap-12">

        <h2 className="text-[20px] md:text-[28px] font-semibold text-[#16242A]">
          About the property
        </h2>

        <div className="space-y-6 text-[14px] md:text-[15px] text-gray-700 leading-relaxed">

          <div>
            <h3 className="text-[15px] md:text-[18px] font-semibold text-[#16242A]">
              {about.subTitle}
            </h3>
            <p className="mt-2 md:mt-3">{about.description}</p>
          </div>

          <Divider />

          <div>
            <h4 className="font-semibold text-[#16242A] mb-2">
              You’ll also find perks such as:
            </h4>
            <ul className="list-disc pl-5 space-y-1">
              {about.perks.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <Divider />

          <div>
            <h4 className="font-semibold text-[#16242A] mb-2">
              Room Features
            </h4>
            <p>{about.roomFeatures}</p>
          </div>

          <Divider />

          <div>
            <h4 className="font-semibold text-[#16242A] mb-2">
              More amenities include:
            </h4>
            <ul className="list-disc pl-5 space-y-1">
              {about.moreAmenities.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <Divider />

          <div>
            <h4 className="font-semibold text-[#16242A] mb-1">
              Languages
            </h4>
            <p>{about.languages.join(", ")}</p>
          </div>
        </div>
      </div>

      {/* ================= CLEANING & SAFETY ================= */}
      <div className="flex flex-col md:grid md:grid-cols-[260px_1fr] gap-6 md:gap-12 mt-12 md:mt-20">

        <h2 className="text-[18px] md:text-[22px] font-semibold text-[#16242A]">
          Cleaning and Safety Practices
        </h2>

        <div className="space-y-6 text-[14px] md:text-[15px] text-gray-700">

          <div>
            <h4 className="font-semibold text-[#16242A]">
              Enhanced cleanliness measures
            </h4>
            <p className="mt-1">{safety.cleanliness}</p>
          </div>

          <Divider />

          <div>
            <h4 className="font-semibold text-[#16242A]">
              Social distancing
            </h4>
            <p className="mt-1">{safety.socialDistancing}</p>
          </div>

          <Divider />

          <div>
            <h4 className="font-semibold text-[#16242A]">
              Safety Measures
            </h4>
            <ul className="list-disc pl-5 space-y-1 mt-1">
              {safety.safetyMeasures.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ================= POLICIES ================= */}
      <div className="flex flex-col md:grid md:grid-cols-[260px_1fr] gap-6 md:gap-12 mt-14 md:mt-24 border-t border-gray-200 pt-8 md:pt-16">

        <h2 className="text-[18px] md:text-[22px] font-semibold text-[#16242A]">
          Policies
        </h2>

        <div className="space-y-8 md:space-y-14 text-[14px] text-gray-700 leading-relaxed">

          {/* CHECK IN / OUT */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-20">
            <div>
              <h4 className="text-[15px] font-semibold text-[#16242A] mb-3">
                Check In
              </h4>
              <ul className="space-y-2">
                {policies.checkIn.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[15px] font-semibold text-[#16242A] mb-3">
                Check Out
              </h4>
              <ul className="space-y-2">
                {policies.checkOut.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <Divider />

          {/* SPECIAL INSTRUCTIONS */}
          <div>
            <h4 className="text-[15px] font-semibold text-[#16242A] mb-2">
              Special check-in instructions
            </h4>
            {policies.instructions.map((item, i) => (
              <p key={i} className="mb-2">{item}</p>
            ))}
          </div>

          <Divider />

          <InfoBlock title="Access methods" text={policies.accessMethods} />
          <InfoBlock title="Pets" text={policies.pets} />

          <Divider />

          <div>
            <h4 className="text-[15px] font-semibold text-[#16242A] mb-3">
              Children and extra beds
            </h4>
            <ul className="space-y-2">
              {policies.children.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <Divider />

          {/* PAYMENT TYPES */}
          <div>
            <h4 className="text-[15px] font-semibold text-[#16242A] mb-3">
              Payment types at the property
            </h4>

            <div className="flex items-center gap-4 flex-wrap">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/f/fa/American_Express_logo_%282018%29.svg"
                alt="American Express"
                className="h-8 md:h-14 object-contain"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
                alt="Visa"
                className="h-6 md:h-8 object-contain"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
                alt="Mastercard"
                className="h-6 md:h-8 object-contain"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ---------------- HELPERS ---------------- */

function Divider() {
  return <div className="md:hidden border-t border-gray-200" />;
}

function InfoBlock({ title, text }: { title: string; text: string }) {
  return (
    <div>
      <h4 className="text-[15px] font-semibold text-[#16242A] mb-1">
        {title}
      </h4>
      <p>{text}</p>
    </div>
  );
}
