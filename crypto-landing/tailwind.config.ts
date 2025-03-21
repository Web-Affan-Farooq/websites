import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        green:"var(--green-color)",

      },

      backgroundColor: {
        green:"var(--green-color)",
      },
      backgroundImage: {
        text:"linear-gradient(#575958, #ffffff, var(--green-color))",
        cardgray:"linear-gradient(-120deg,#191a19,#2e2e2e)"
      },

    },
  },
  plugins: [],
} satisfies Config;
