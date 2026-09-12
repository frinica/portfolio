import { ref } from "vue"

/**
 * Currently active section id, shared across NavBar and SectionDivider.
 * Empty string means "none" — e.g. still on the Hero, above every tracked
 * section — so no nav item should show as active.
 */
export const activeSectionId = ref("")

let ids: string[] = []
let initialized = false
let ticking = false

// How far from the top of the viewport counts as "active" — roughly the
// sticky nav's height plus a little breathing room.
const ACTIVE_LINE_OFFSET = 96

function updateActiveSection() {
  // No fallback to ids[0] here — if nothing has scrolled past the active
  // line yet (e.g. still on the Hero), current stays "" and every nav item
  // correctly shows as inactive instead of the first one being stuck "on".
  let current = ""
  for (const id of ids) {
    const el = document.getElementById(id)
    if (!el) continue
    if (el.getBoundingClientRect().top - ACTIVE_LINE_OFFSET <= 0) {
      current = id
    }
  }
  activeSectionId.value = current
}

function onScrollOrResize() {
  if (ticking) return
  ticking = true
  requestAnimationFrame(() => {
    updateActiveSection()
    ticking = false
  })
}

/**
 * Sets up (once) a scroll listener that tracks which section's top edge is
 * currently closest to (but above) the active line near the top of the
 * viewport, and updates `activeSectionId` accordingly. Safe to call from
 * multiple components — only the first call with a given id set takes
 * effect.
 */
export function initActiveSectionObserver(sectionIds: string[]) {
  if (initialized) return
  initialized = true
  ids = sectionIds

  window.addEventListener("scroll", onScrollOrResize, { passive: true })
  window.addEventListener("resize", onScrollOrResize, { passive: true })
  updateActiveSection()
}
