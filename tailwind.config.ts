import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },

      fontFamily: {
        sans: ["DMSans", "sans-serif"],
        lilita: ['"Lilita One"', "sans-serif"],
        openSans: ['"Open Sans"', "sans-serif"],
      },

      backgroundImage: {
        "gradient-light": "linear-gradient(to bottom, #9ca3af , #FFFFFF)",
        "gradient-background": "linear-gradient(to bottom, #172554, #3AB0E1)",
        "gradient-background-dark":
          "linear-gradient(to bottom, #9ca3af , #000000)",
        blueDark: "#172554",
      },

      color: {
        grayButton: "#9ca3af",
        golden: "#f1c263d1 ",
        blueDark: "#172554",
      },

      screens: {
        xs: "375px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        xxl: "1536px",
      },
    },
  },
  plugins: [],
};
export default config;
