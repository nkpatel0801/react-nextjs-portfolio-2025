/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  safelist: [
    // Add all possible color combinations we're using dynamically
    "bg-indigo-100",
    "bg-indigo-900/30",
    "text-indigo-400",
    "bg-rose-100",
    "bg-rose-900/30",
    "text-rose-400",
    "bg-amber-100",
    "bg-amber-900/30",
    "text-amber-400",
    "text-[#333]",
    "text-[#0077B5]",
    "text-[#0077B5]/80",
    "text-[#EA4335]",
    "text-[#EA4335]/80",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};