import flowbite from "flowbite-react/tailwind";

const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        Georama: ["georama", "sans-serif"],
        GeistMono: ["geistMono", "sans-serif"],
        GeistSans: ["geistSans", "sans-serif"],
        Playwrite: ["playwrite", "sans-serif"],
        Quintessential: ["quintessential", "sans-serif"],
      },
    },
  },
  plugins: [flowbite.plugin()],
};

export default config;
