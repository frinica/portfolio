<script setup lang="ts">
import SectionDivider from "./SectionDivider.vue"

// Each column gets a 2-stop slice cycling through the 3-color brand
// spectrum (teal -> cyan -> violet -> back to teal), so the three
// categories still read as distinct while only using the three brand
// colors. `ring` draws a thin gradient border, and `accentBorder` sets a
// solid outline color for the diamond badge/card accent border.
const stackColumns = [
  {
    title: "Core Languages",
    tags: ["TypeScript", "JavaScript (ES6+)", "PHP", "HTML5", "CSS3"],
    ring: "from-teal to-cyan",
    accentBorder: "border-teal",
    titleColor: "text-teal",
  },
  {
    title: "Frameworks & Libraries",
    tags: ["Vue.js", "Nuxt.js", "Next.js", "Laravel", "Pinia", "Tailwind CSS"],
    ring: "from-cyan to-violet",
    accentBorder: "border-cyan",
    titleColor: "text-cyan",
  },
  {
    title: "Tools & Platforms",
    tags: ["Git & GitHub", "Docker", "Auth0", "Firebase", "PostgreSQL"],
    ring: "from-violet to-teal",
    accentBorder: "border-violet",
    titleColor: "text-violet",
  },
]
</script>

<template>
  <section
    id="skills"
    class="flex w-full flex-col gap-6 px-5 py-10 md:px-16 md:py-20"
  >
    <div v-reveal class="mx-auto flex w-full max-w-5xl flex-col gap-6">
      <SectionDivider label="Technical Stack" section-id="skills" />

      <div class="grid w-full grid-cols-1 gap-4 md:grid-cols-3">
        <div
          v-for="column in stackColumns"
          :key="column.title"
          class="relative flex flex-col gap-4 rounded-xl border p-5 drop-shadow-[0px_4px_8px_rgba(2,22,125,0.02)]"
          :class="column.accentBorder"
        >
          <div
            aria-hidden="true"
            class="absolute -top-3 left-1/2 h-6 w-6 -translate-x-1/2 rotate-45 rounded-md border-2 bg-ink"
            :class="column.accentBorder"
          />
          <p
            class="font-mono text-[13px] font-bold uppercase"
            :class="column.titleColor"
          >
            {{ column.title }}
          </p>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="(tag, i) in column.tags"
              :key="tag"
              v-reveal="i * 60"
              class="inline-block"
            >
              <span
                class="block rounded-md bg-gradient-to-r p-[1px] transition-transform duration-300 hover:-translate-y-0.5"
                :class="column.ring"
              >
                <span
                  class="block rounded-[5px] bg-ink px-3 py-1.5 font-mono text-[11px] font-bold text-paper"
                >
                  {{ tag }}
                </span>
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
