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

        // Brand spectrum — a single 3-stop ramp (teal -> cyan -> violet),
        // fixed across both themes. Meant primarily for gradients; each
        // stop also has a light/dark tint for when a solid tone is needed.
        // Tints are derived from DEFAULT with a consistent formula (light =
        // +35% toward white per channel, dark = ×0.7 per channel) — keep
        // new stops consistent with it.
        teal: { light: "#59b6a9", DEFAULT: "#008f7a", dark: "#006455" },
        cyan: { light: "#59b5bb", DEFAULT: "#008d97", dark: "#00636a" },
        violet: { light: "#ae7ea7", DEFAULT: "#823878", dark: "#5b2754" },
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
    // class="bg-cyan whimsy:bg-gradient-to-r whimsy:from-teal whimsy:to-violet"
    plugin(({ addVariant }) => {
      addVariant("whimsy", '[data-theme="whimsy"] &')
    }),
  ],
}
