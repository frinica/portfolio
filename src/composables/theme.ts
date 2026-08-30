import { ref, watch } from "vue"

export type Theme = "moody" | "whimsy"

const STORAGE_KEY = "portfolio-theme"
const THEME_COLOR: Record<Theme, string> = {
  moody: "#212124",
  whimsy: "#fcfaff",
}

function readStored(): Theme {
  try {
    return localStorage.getItem(STORAGE_KEY) === "whimsy" ? "whimsy" : "moody"
  } catch {
    return "moody"
  }
}

export const theme = ref<Theme>(readStored())

function applyTheme(t: Theme) {
  if (typeof document === "undefined") return
  if (t === "whimsy") {
    document.documentElement.dataset.theme = "whimsy"
  } else {
    delete document.documentElement.dataset.theme
  }
  document.querySelector('meta[name="theme-color"]')?.setAttribute("content", THEME_COLOR[t])
}

// Apply immediately (module load, before mount) — index.html's inline
// script already set the attribute for "whimsy" pre-paint, this just keeps
// the reactive ref and the DOM in sync from here on.
applyTheme(theme.value)

watch(theme, (t) => {
  applyTheme(t)
  try {
    localStorage.setItem(STORAGE_KEY, t)
  } catch {
    // Private browsing / storage disabled — theme just won't persist.
  }
})

export function setTheme(t: Theme) {
  theme.value = t
}

export function toggleTheme() {
  theme.value = theme.value === "moody" ? "whimsy" : "moody"
}
