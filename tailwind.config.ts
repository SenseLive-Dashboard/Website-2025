import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        teal: {
          50: "#f0fdfa",
          100: "#ccfbf1",
          200: "#99f6e4",
          300: "#5eead4",
          400: "#2dd4bf",
          500: "#14b8a6",
          600: "#0d9488",
          700: "#0f766e",
          800: "#115e59",
          900: "#134e4a",
          950: "#042f2e",
        },
        senselive: {
          light: "#5ec2be",
          DEFAULT: "#2A6461",
          medium: "#419995",
          dark: "#267c7a",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "fade-in": {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        "fade-up": {
          from: { opacity: 0, transform: "translateY(20px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        "fade-down": {
          from: { opacity: 0, transform: "translateY(-20px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        "fade-left": {
          from: { opacity: 0, transform: "translateX(20px)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
        "fade-right": {
          from: { opacity: 0, transform: "translateX(-20px)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
        "slide-in-right": {
          from: { transform: "translateX(100%)" },
          to: { transform: "translateX(0)" },
        },
        "slide-in-left": {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(0)" },
        },
        "slide-in-bottom": {
          from: { transform: "translateY(100%)" },
          to: { transform: "translateY(0)" },
        },
        "slide-in-top": {
          from: { transform: "translateY(-100%)" },
          to: { transform: "translateY(0)" },
        },
        "scale-in": {
          from: { opacity: 0, transform: "scale(0.95)" },
          to: { opacity: 1, transform: "scale(1)" },
        },
        "scale-out": {
          from: { opacity: 1, transform: "scale(1)" },
          to: { opacity: 0, transform: "scale(0.95)" },
        },
        "rotate-360": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.8 },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "blur-in": {
          from: { filter: "blur(8px)", opacity: 0 },
          to: { filter: "blur(0)", opacity: 1 },
        },
        "slide-horizontal": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        wave: {
          "0%": { transform: "translateY(0)" },
          "25%": { transform: "translateY(-5px)" },
          "50%": { transform: "translateY(0)" },
          "75%": { transform: "translateY(5px)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
        "fade-up": "fade-up 0.5s ease-out",
        "fade-down": "fade-down 0.5s ease-out",
        "fade-left": "fade-left 0.5s ease-out",
        "fade-right": "fade-right 0.5s ease-out",
        "slide-in-right": "slide-in-right 0.5s ease-out",
        "slide-in-left": "slide-in-left 0.5s ease-out",
        "slide-in-bottom": "slide-in-bottom 0.5s ease-out",
        "slide-in-top": "slide-in-top 0.5s ease-out",
        "scale-in": "scale-in 0.3s ease-out",
        "scale-out": "scale-out 0.3s ease-out",
        "rotate-360": "rotate-360 1s linear infinite",
        "pulse-slow": "pulse-slow 3s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        "blur-in": "blur-in 0.5s ease-out",
        "slide-horizontal": "slide-horizontal 20s linear infinite",
        wave: "wave 3s ease-in-out infinite",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-senselive": "linear-gradient(248deg, #5ec2be 0%, #419995 50%, #267c7a 100%)",
        "gradient-senselive-hover": "linear-gradient(248deg, #5ec2be 0%, #419995 70%, #267c7a 100%)",
        "gradient-premium": "linear-gradient(135deg, #2A6461 0%, #1a4a47 50%, #0f3230 100%)",
        "gradient-premium-light": "linear-gradient(135deg, #3a8a85 0%, #2A6461 50%, #1a4a47 100%)",
        "gradient-premium-dark": "linear-gradient(135deg, #1a4a47 0%, #0f3230 50%, #042f2e 100%)",
        "gradient-premium-hover": "linear-gradient(135deg, #3a8a85 0%, #2A6461 100%)",
        "gradient-glass": "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)",
        "gradient-glass-dark": "linear-gradient(135deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.1) 100%)",
        "gradient-apple-blue": "linear-gradient(135deg, #0061ff 0%, #60efff 100%)",
        "gradient-apple-purple": "linear-gradient(135deg, #7b5dfa 0%, #a892fe 100%)",
        "gradient-apple-pink": "linear-gradient(135deg, #ff2d55 0%, #ffac8e 100%)",
        "gradient-apple-orange": "linear-gradient(135deg, #ff9500 0%, #ffcc00 100%)",
        "gradient-apple-green": "linear-gradient(135deg, #34c759 0%, #a8e063 100%)",
      },
      boxShadow: {
        premium: "0 10px 30px -5px rgba(42, 100, 97, 0.2)",
        "premium-hover": "0 20px 40px -5px rgba(42, 100, 97, 0.3)",
        glass: "0 8px 32px 0 rgba(31, 38, 135, 0.15)",
        "glass-dark": "0 8px 32px 0 rgba(0, 0, 0, 0.3)",
        "card-hover": "0 22px 40px rgba(0, 0, 0, 0.1)",
        "card-hover-dark": "0 22px 40px rgba(0, 0, 0, 0.3)",
        subtle: "0 2px 10px rgba(0, 0, 0, 0.05)",
        "subtle-dark": "0 2px 10px rgba(0, 0, 0, 0.2)",
        "inner-glow": "inset 0 0 20px rgba(42, 100, 97, 0.2)",
        "inner-glow-dark": "inset 0 0 20px rgba(42, 100, 97, 0.4)",
        "3d": "0 10px 30px -15px rgba(0, 0, 0, 0.3)",
        "3d-hover": "0 20px 40px -15px rgba(0, 0, 0, 0.4)",
      },
      backdropFilter: {
        none: "none",
        blur: "blur(20px)",
      },
      transitionProperty: {
        height: "height",
        spacing: "margin, padding",
        width: "width",
        transform: "transform",
        filter: "filter",
        "backdrop-filter": "backdrop-filter",
      },
      transitionDuration: {
        "0": "0ms",
        "2000": "2000ms",
      },
      transitionTimingFunction: {
        bounce: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
        "in-out-expo": "cubic-bezier(0.87, 0, 0.13, 1)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config

