<script setup lang="ts">
import { onMounted } from "vue"
import { activeSectionId, initActiveSectionObserver } from "../composables/activeSection"
import ThemeToggle from "./ThemeToggle.vue"

const sections = [
  { id: "profile", label: "PROFILE" },
  { id: "projects", label: "PROJECTS" },
  { id: "education", label: "EDUCATION" },
  { id: "contact", label: "CONTACT" },
]

// "skills" isn't a nav link but is tracked too, so its section title can
// change color on scroll like the others.
onMounted(() => {
  initActiveSectionObserver(["profile", "skills", "projects", "education", "contact"])
})
</script>

<template>
  <nav
    class="sticky top-0 z-20 grid w-full grid-cols-[1fr_auto_1fr] items-center gap-2 border-b border-paper/10 bg-ink/80 px-5 py-4 backdrop-blur-md whimsy:border-b-[3px] whimsy:border-paper"
  >
    <div aria-hidden="true" />

    <div class="flex items-center justify-center gap-2">
      <a
        v-for="section in sections"
        :key="section.id"
        :href="`#${section.id}`"
        class="group relative rounded-md px-3 py-1.5 font-mono text-[11px] font-bold transition-colors"
        :class="activeSectionId === section.id ? 'text-sky' : 'text-paper hover:text-sky'"
      >
        {{ section.label }}
        <span
          class="pointer-events-none absolute -bottom-0.5 left-1/2 h-[2px] w-[calc(100%-1.25rem)] origin-center -translate-x-1/2 rounded-full bg-sky transition-transform duration-300 ease-out whimsy:bg-gradient-to-r whimsy:from-teal whimsy:via-blue whimsy:to-violet"
          :class="activeSectionId === section.id ? 'scale-x-100' : 'scale-x-0'"
        />
      </a>
    </div>

    <div class="flex justify-end">
      <ThemeToggle />
    </div>
  </nav>
</template>
