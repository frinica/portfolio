import { ref, watch } from "vue"

export type Theme = "moody" | "whimsy"

// Whimsy mode is hidden for now — it's not launch-ready and was blocking
// shipping the redesign. All the theme code stays in place; flipping this
// back to true (and the matching flag in index.html's pre-paint script) is
// the only thing needed to bring it back.
export const WHIMSY_ENABLED = false

const STORAGE_KEY = "portfolio-theme"
const THEME_COLOR: Record<Theme, string> = {
  moody: "#212124",
  whimsy: "#fcfaff",
}

function readStored(): Theme {
  if (!WHIMSY_ENABLED) return "moody"
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
  if (t === "whimsy" && !WHIMSY_ENABLED) return
  theme.value = t
}

export function toggleTheme() {
  if (!WHIMSY_ENABLED) return
  theme.value = theme.value === "moody" ? "whimsy" : "moody"
}
