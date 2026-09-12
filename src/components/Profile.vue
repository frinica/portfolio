<script setup lang="ts">
import SectionDivider from "./SectionDivider.vue"

const stats = [
  { label: "Current Focus", value: "Vue, TypeScript, Nuxt" },
  { label: "Approach", value: "Clear communication, user focus" },
  { label: "Also Into", value: "Books, games & animals \u{1F408}" },
  { label: "Motivation", value: "Solving problems that matter" },
]
</script>

<template>
  <section
    id="profile"
    class="flex w-full flex-col gap-6 px-5 py-10 md:px-16 md:py-20"
  >
    <div v-reveal class="mx-auto flex w-full max-w-5xl flex-col gap-6">
      <SectionDivider label="Profile" section-id="profile" />

      <div class="flex flex-col gap-8 md:flex-row md:gap-10">
        <div class="flex flex-1 flex-col gap-4">
          <h2 class="font-display text-2xl font-bold leading-snug md:text-[28px]">
            Driven by Curiosity, Grounded in Clear Communication
          </h2>
          <p class="text-[15px] leading-relaxed text-paper">
            I love diving into code, solving problems, and continuously learning new
            things. I approach every challenge with a positive attitude and a
            determination to see it through, even when a problem turns out to be
            trickier than it looked.
          </p>
          <p class="text-[15px] leading-relaxed text-paper">
            Beyond technical skills, I care about clear communication and truly
            understanding what users need &mdash; collaborating effectively and
            delivering solutions that matter. I also have a growing interest in
            design, which guides me toward building things that are both functional
            and genuinely pleasant to use.
          </p>
        </div>

        <div class="relative flex-1">
          <div
            aria-hidden="true"
            class="absolute -top-[2px] -left-[2px] -right-[6px] -bottom-[6px] rounded-xl bg-gradient-to-br from-teal to-violet opacity-80 blur-sm whimsy:hidden md:-top-[3px] md:-left-[3px] md:-right-[18px] md:-bottom-[18px]"
          />
          <div
            class="relative flex h-full flex-col gap-5 rounded-xl bg-ink p-6 drop-shadow-[0px_4px_8px_rgba(2,22,125,0.02)] whimsy:border-[3px] whimsy:border-sky whimsy:bg-ink whimsy:ring-[3px] whimsy:ring-ink"
          >
            <p class="font-mono text-[13px] font-bold uppercase text-teal">
              Profile Overview
            </p>
            <div class="flex flex-col gap-3.5">
              <div
                v-for="stat in stats"
                :key="stat.label"
                class="flex items-center justify-between gap-4 border-b border-paper pb-2.5"
              >
                <p class="font-mono text-[11px] text-paper">{{ stat.label }}</p>
                <p class="text-right text-[13px] font-bold text-paper">{{ stat.value }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
