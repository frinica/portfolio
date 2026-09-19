import type { Directive } from "vue"

/**
 * v-reveal: fades an element in from below the first time it scrolls
 * into view. Respects prefers-reduced-motion (handled in CSS).
 *
 * Pass a number as the directive value to stagger a list of items, e.g.
 * `v-reveal="i * 60"` — it's applied as a transition-delay in ms.
 */
let observer: IntersectionObserver | undefined

function getObserver() {
  if (!observer) {
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible")
            observer?.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    )
  }
  return observer
}

export const reveal: Directive<HTMLElement, number | undefined> = {
  mounted(el, binding) {
    el.classList.add("reveal")
    if (typeof binding.value === "number") {
      el.style.transitionDelay = `${binding.value}ms`
    }
    getObserver().observe(el)
  },
  unmounted(el) {
    observer?.unobserve(el)
  },
}
