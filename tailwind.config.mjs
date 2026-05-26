/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,ts}"],
  theme: {
    extend: {
      colors: {
        background: "#000000",
        "surface-lowest": "#0a0a0a",
        "surface-low": "#111111",
        surface: "#161616",
        "surface-high": "#1c1c1e",
        "surface-highest": "#2c2c2e",
        "on-surface": "#f5f5f7",
        "on-surface-muted": "#86868b",
        outline: "rgba(255, 255, 255, 0.08)",
        primary: "#2997ff",
        "primary-soft": "#63b3ff",
        secondary: "#5e5ce6",
        tertiary: "#bfc5e4"
      },
      fontFamily: {
        display: ["-apple-system", "BlinkMacSystemFont", "SF Pro Display", "SF Pro Text", "Inter", "system-ui", "sans-serif"],
        body: ["-apple-system", "BlinkMacSystemFont", "SF Pro Text", "Inter", "system-ui", "sans-serif"]
      },
      maxWidth: {
        shell: "1120px"
      },
      boxShadow: {
        bloom: "0 0 24px rgba(41, 151, 255, 0.2)",
        panel: "0 8px 40px rgba(0, 0, 0, 0.4)"
      },
      borderRadius: {
        DEFAULT: "12px",
        lg: "16px",
        xl: "20px",
        "2xl": "24px",
        full: "980px"
      }
    }
  },
  plugins: []
};
