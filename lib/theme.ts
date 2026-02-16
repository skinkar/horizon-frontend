export type ThemeType = "default" | "wedding" | "dream";

export const themes = {
  default: {
    sectionBg: "bg-white",
    heading: "text-[#16242A]",
    accent: "text-[#FF6A00]",
    button: "bg-[#FF6A00]",
    footerBg: "bg-white",
    footerBottom: "bg-gray-100",
  },

  wedding: {
    sectionBg: "bg-white",
    heading: "text-[#9B2C5D]",
    accent: "text-[#9B2C5D]",
    button: "bg-[#9B2C5D]",
    footerBg: "bg-[#9B2C5D]",
    footerBottom: "bg-[#7c224b]",
  },

  dream: {
    sectionBg: "#006077",
    heading: "#16242A",
    accent: "#16242A",
    button: "bg-blue-600",
    footerBg: "bg-blue-900",
    footerBottom: "bg-blue-950",
  },
};
