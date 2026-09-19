<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from "vue"
import { activeSectionId, initActiveSectionObserver } from "../composables/activeSection"
import ThemeToggle from "./ThemeToggle.vue"
import MenuIcon from "./icons/MenuIcon.vue"
import CloseIcon from "./icons/CloseIcon.vue"

const sections = [
  { id: "profile", label: "PROFILE" },
  { id: "projects", label: "PROJECTS" },
  { id: "education", label: "EDUCATION" },
  { id: "contact", label: "CONTACT" },
]

const mobileMenuOpen = ref(false)
const closeMobileMenu = () => (mobileMenuOpen.value = false)

// "skills" isn't a nav link but is tracked too, so its section title can
// change color on scroll like the others.
onMounted(() => {
  initActiveSectionObserver(["profile", "skills", "projects", "education", "contact"])
})

// Below md the links live in a dropdown behind a hamburger button; above it
// they're always visible inline. If a resize crosses that breakpoint while
// the dropdown is open, close it so it can't get stuck open under the
// desktop layout.
const desktopQuery = window.matchMedia("(min-width: 768px)")
const onBreakpointChange = (e: MediaQueryListEvent) => {
  if (e.matches) closeMobileMenu()
}
onMounted(() => desktopQuery.addEventListener("change", onBreakpointChange))
onBeforeUnmount(() => desktopQuery.removeEventListener("change", onBreakpointChange))
</script>

<template>
  <nav
    class="intro-in-nav sticky top-0 z-20 w-full border-b border-paper/10 bg-ink/80 backdrop-blur-md"
  >
    <div class="flex w-full items-center justify-between gap-2 px-5 py-4 md:grid md:grid-cols-[1fr_auto_1fr]">
      <button
        type="button"
        class="flex w-fit items-center justify-center rounded-md p-1 text-paper transition-colors hover:text-teal md:hidden"
        aria-controls="mobile-nav-menu"
        :aria-expanded="mobileMenuOpen"
        aria-label="Toggle navigation menu"
        @click="mobileMenuOpen = !mobileMenuOpen"
      >
        <MenuIcon v-if="!mobileMenuOpen" :size="18" color="currentColor" />
        <CloseIcon v-else :size="16" color="currentColor" />
      </button>
      <div aria-hidden="true" class="hidden md:block" />

      <div class="hidden items-center justify-center gap-2 md:flex">
        <a
          v-for="section in sections"
          :key="section.id"
          :href="`#${section.id}`"
          class="group relative rounded-md px-3 py-1.5 font-mono text-[11px] font-bold transition-colors"
          :class="activeSectionId === section.id ? 'text-cyan' : 'text-paper hover:text-teal'"
        >
          {{ section.label }}
          <span
            class="pointer-events-none absolute -bottom-0.5 left-1/2 h-[2px] w-[calc(100%-1.25rem)] origin-center -translate-x-1/2 rounded-full bg-cyan transition-transform duration-300 ease-out"
            :class="activeSectionId === section.id ? 'scale-x-100' : 'scale-x-0'"
          />
        </a>
      </div>

      <div class="flex justify-end">
        <ThemeToggle />
      </div>
    </div>

    <Transition name="mobile-menu">
      <div
        v-if="mobileMenuOpen"
        id="mobile-nav-menu"
        class="flex flex-col gap-1 border-t border-paper/10 px-5 py-3 md:hidden"
      >
        <a
          v-for="section in sections"
          :key="section.id"
          :href="`#${section.id}`"
          class="rounded-md px-3 py-2 font-mono text-[11px] font-bold transition-colors"
          :class="activeSectionId === section.id ? 'text-cyan' : 'text-paper hover:text-teal'"
          @click="closeMobileMenu"
        >
          {{ section.label }}
        </a>
      </div>
    </Transition>
  </nav>
</template>

<style scoped>
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}

@media (prefers-reduced-motion: reduce) {
  .mobile-menu-enter-active,
  .mobile-menu-leave-active {
    transition: none;
  }
}
</style>
