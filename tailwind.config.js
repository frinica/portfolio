import plugin from "tailwindcss/plugin"

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,ts}"],
  theme: {
    extend: {
      colors: {
        // Theme-reactive neutrals — see the CSS custom properties in
        // index.css for what these resolve to per theme.
        ink: "rgb(var(--c-ink) / <alpha-value>)",
        paper: "rgb(var(--c-paper) / <alpha-value>)",
        muted: "rgb(var(--c-muted) / <alpha-value>)",
        subtle: "rgb(var(--c-subtle) / <alpha-value>)",
        haze: "rgb(var(--c-haze) / <alpha-value>)",
        frost: "rgb(var(--c-frost) / <alpha-value>)",

        // Brand spectrum — a single 6-stop ramp (teal -> cyan -> sky -> blue
        // -> indigo -> violet), fixed across both themes. Meant primarily
        // for gradients; each stop also has a light/dark tint for when a
        // solid tone is needed. `sky` = the mid teal-to-blue stop, `blue` =
        // the true-blue stop.
        teal: { light: "#59b6a9", DEFAULT: "#008f7a", dark: "#006455" },
        cyan: { light: "#59b5bb", DEFAULT: "#008d97", dark: "#00636a" },
        sky: { light: "#59b2cd", DEFAULT: "#0088b2", dark: "#005f7d" },
        blue: { light: "#59abd8", DEFAULT: "#007ec3", dark: "#005889" },
        indigo: { light: "#8ca1d8", DEFAULT: "#4e6fc3", dark: "#374e89" },
        violet: { light: "#b494cc", DEFAULT: "#8b5ab0", dark: "#613f7b" },
      },
      fontFamily: {
        sans: ["Geist", "system-ui", "sans-serif"],
        display: ["Outfit", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [
    // A custom variant for the "whimsy" theme, so components can opt in to
    // extra flourishes beyond the automatic ink/paper light-mode swap, e.g.
    // class="bg-sky whimsy:bg-gradient-to-r whimsy:from-teal whimsy:to-violet"
    plugin(({ addVariant }) => {
      addVariant("whimsy", '[data-theme="whimsy"] &')
    }),
  ],
}
