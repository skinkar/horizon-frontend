export interface SeasonType {
  title: string;
  months: string;
  description: string;
  image: string;
  mobileImage?: string;
}

export interface StateTheme {
  primary: string;

  gradientFrom: string;
  gradientTo: string;

  aboutBg: string;
  heroOverlay: string;

  // ⭐ BEST TIME SECTION DESIGN
  bestTimeBg: string;
  bestTimePath: string;
  seasonTextColor: string;

  aboutColors: {
    subtitle: string;
    description: string;
  };
}

export interface StateDataType {
  name: string;
  heroImage: string;
  theme: StateTheme;

  about: {
    title: string;
    subtitle: string;
    description: string;
  };

  bestTime?: SeasonType[];
}

export const STATE_DATA: Record<string, StateDataType> = {
  // ================= GOA =================
  goa: {
    name: "Goa",

    heroImage: "/states/goa/goa.png",

    theme: {
      primary: "#D25700",

      gradientFrom: "#3BA5C3",
      gradientTo: "#003A48",

      aboutBg: "/states/goa/about-bg-goa.png",
      heroOverlay: "rgba(0,0,0,0.25)",

      bestTimeBg: "/states/goa/time-goa-bg.png",
      bestTimePath: "/states/common/seasons/path.png",

      seasonTextColor: "#16242A",

      aboutColors: {
        subtitle: "#16242A",
        description: "#16242A",
      },
    },

    about: {
      title: "About Goa",
      subtitle: "The Land of Beaches",
      description: `Located on the western coast of India, Goa is famous for beaches and nightlife.

Goa beaches are among the most beautiful in the world.

Goa has rich culture, temples, churches and forts.

Goa cuisine is famous for seafood.`,
    },

    bestTime: [
      {
        title: "Winters",
        months: "Oct – Feb",
        description: "Perfect for beaches and water sports.",
        image: "/states/common/seasons/winter.png",
      },
      {
        title: "Summers",
        months: "Mar – Jun",
        description: "Good for sightseeing and festivals.",
        image: "/states/common/seasons/summer.png",
      },
      {
        title: "Monsoon",
        months: "Jul – Sep",
        description: "Best for greenery and peaceful travel.",
        image: "/states/common/seasons/monsoon.png",
      },
    ],
  },

  // ================= HIMACHAL =================
  himachal: {
    name: "Himachal Pradesh",

    heroImage: "/states/himachal/hp.png",

    theme: {
      primary: "#DAA21B",

      gradientFrom: "#326BAE",
      gradientTo: "#1E3A8A",

      aboutBg: "/states/himachal/about-bg-himachal.png",
      heroOverlay: "rgba(0,0,0,0.25)",

      bestTimeBg: "/states/himachal/time-himachal-bg.png",
      bestTimePath: "/states/common/seasons/path.png",

      seasonTextColor: "#FFFFFF",

      aboutColors: {
        subtitle: "#DAA21B",
        description: "#FFFFFF",
      },
    },

    about: {
      title: "About Himachal Pradesh",
      subtitle: "A place of Surreal Mountains",
      description: `Himachal is surrounded by mountains, valleys and lakes.

Offers adventure sports like skiing and paragliding.

Famous for wildlife, temples and tourism.`,
    },

    bestTime: [
      {
        title: "Winters",
        months: "Oct – Feb",
        description: "Best for snowfall and winter sports.",
        image: "/states/common/seasons/winter.png",
      },
      {
        title: "Summers",
        months: "Mar – Jun",
        description: "Perfect for trekking and sightseeing.",
        image: "/states/common/seasons/summer.png",
      },
      {
        title: "Monsoon",
        months: "Jul – Sep",
        description: "Green landscapes and fresh weather.",
        image: "/states/common/seasons/monsoon.png",
      },
    ],
  },
};
