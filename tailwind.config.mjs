/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontSize: {
      xs: ["0.875rem", { lineHeight: "1.1875rem" }], // 14px font, 19px line-height
      sm: ["1rem", { lineHeight: "1.3125rem" }], // 16px font, 21px line-height
      base: ["1.125rem", { lineHeight: "1.6875rem" }], // 18px font, 27px line-height
      lg: ["1.25rem", { lineHeight: "1.875rem" }], // 20px font, 30px line-height
      xl: ["1.5rem", { lineHeight: "2.25rem" }], // 24px font, 36px line-height
      "2xl": ["1.875rem", { lineHeight: "2.5rem" }], // 30px font, 40px line-height
      "3xl": ["2.25rem", { lineHeight: "2.8125rem" }], // 36px font, 45px line-height
      "4xl": ["3rem", { lineHeight: "3.375rem" }], // 48px font, 54px line-height
      "5xl": ["3.75rem", { lineHeight: "1" }], // 60px font, tight line-height
      "6xl": ["4.5rem", { lineHeight: "1" }], // 72px font, tight line-height
      "7xl": ["6rem", { lineHeight: "1" }], // 96px font, tight line-height
      "8xl": ["8rem", { lineHeight: "1" }], // 128px font, tight line-height
      "9xl": ["10rem", { lineHeight: "1" }], // 160px font, tight line-height
    },
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
