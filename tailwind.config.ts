import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0B3C6D",
        accent: "#E07A24",
        surface: "#F4F7FB",
        slateInk: "#1A2632"
      },
      boxShadow: {
        card: "0 12px 30px rgba(11, 60, 109, 0.08)"
      },
      borderRadius: {
        xl2: "1.25rem"
      }
    }
  },
  plugins: []
};

export default config;
