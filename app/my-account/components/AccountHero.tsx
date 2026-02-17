"use client";

interface AccountHeroProps {
  user?: {
    firstName?: string;
  };
  stats?: {
    nights?: { completed: number; total: number };
    bookings?: { completed: number; total: number };
    referrals?: { completed: number; total: number };
    cruise?: { completed: number; total: number };
  };
}

export default function AccountHero({ user, stats }: AccountHeroProps) {
  // ✅ Dummy Data if no backend data
  const safeStats = {
    nights: stats?.nights ?? { completed: 6, total: 10 },
    bookings: stats?.bookings ?? { completed: 4, total: 10 },
    referrals: stats?.referrals ?? { completed: 12, total: 20 },
    cruise: stats?.cruise ?? { completed: 2, total: 10 },
  };

  return (
    <div className="relative w-[1184px] h-[372px] rounded-[20px] mt-10 overflow-hidden">
      {/* Background */}
      <img
        src="/my-account/account-hero.jpeg"
        className="absolute inset-0 w-full h-full object-cover"
        alt="Account Background"
      />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-10">
        <p className="absolute top-8 left-10 text-[#E4C46A] text-sm">
          Adventure Elite
        </p>

        <h1 className="text-[88px] leading-[100%] font-semibold bg-gradient-to-r from-[#AE8626] via-[#EFE783] to-[#D2AC47] bg-clip-text text-transparent">
          Hi, {user?.firstName ?? "Traveler"}
        </h1>

        <div className="flex gap-16 mt-10">
          <ProgressCircle
            id="nights"
            value={safeStats.nights.completed}
            total={safeStats.nights.total}
            label="Nights Completed"
          />

          <ProgressCircle
            id="bookings"
            value={safeStats.bookings.completed}
            total={safeStats.bookings.total}
            label="Bookings Completed"
          />

          <ProgressCircle
            id="referrals"
            value={safeStats.referrals.completed}
            total={safeStats.referrals.total}
            label="Referrals Completed"
          />

          <ProgressCircle
            id="cruise"
            value={safeStats.cruise.completed}
            total={safeStats.cruise.total}
            label="Cruise Voucher"
          />
        </div>
      </div>
    </div>
  );
}

function ProgressCircle({
  value,
  total,
  label,
  id,
}: {
  value: number;
  total: number;
  label: string;
  id: string;
}) {
  const percentage = (value / total) * 100;

  const radius = 32; // smaller circle
  const stroke = 6;
  const circumference = 2 * Math.PI * radius;
  const dashOffset =
    circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center w-[129px]">

      <div className="relative w-[78px] h-[78px]">

        <svg width="78" height="78" className="rotate-[-90deg]">
          {/* Background Track */}
          <circle
            cx="39"
            cy="39"
            r={radius}
            stroke="white"
            strokeOpacity="0.2"
            strokeWidth={stroke}
            fill="transparent"
          />

          {/* Progress */}
          <circle
            cx="39"
            cy="39"
            r={radius}
            stroke={`url(#gold-${id})`}
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={dashOffset}
            fill="transparent"
            style={{ transition: "stroke-dashoffset 0.8s ease" }}
          />

          {/* Gradient */}
          <defs>
            <linearGradient
              id={`gold-${id}`}
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#AE8626" />
              <stop offset="35%" stopColor="#EFE783" />
              <stop offset="70%" stopColor="#D2AC47" />
              <stop offset="100%" stopColor="#EDC967" />
            </linearGradient>
          </defs>
        </svg>

        {/* Center Text */}
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <span
            className="text-[20px] leading-none"
            style={{ fontFamily: "Gilroy-SemiBold" }}
          >
            {value}
          </span>
          <span
            className="text-[14px] text-[#FFF4F4] ml-1"
            style={{ fontFamily: "Gilroy-Medium" }}
          >
            /{total}
          </span>
        </div>
      </div>

      {/* Label */}
      <p className="text-white text-[14px] mt-4 text-center font-medium">
        {label}
      </p>

      <button className="text-xs underline text-gray-300 mt-1 hover:text-white transition">
        View Details
      </button>
    </div>
  );
}
