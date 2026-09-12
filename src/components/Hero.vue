<script setup lang="ts">
import ArrowIcon from "./icons/ArrowIcon.vue"
import ExternalLinkIcon from "./icons/ExternalLinkIcon.vue"

const socials = [
  { label: "GitHub", href: "https://github.com/frinica", external: true },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/frida-nicander/",
    external: true,
  },
]
</script>

<template>
  <section
    class="relative flex min-h-[85vh] w-full flex-col justify-center overflow-hidden px-5 py-16 md:min-h-[90vh] md:px-16"
  >
    <!-- moody only — whimsy's color comes from the single page-wide gradient
         in App.vue, so these soft blobs would just muddy it further. -->
    <div class="pointer-events-none absolute inset-0 -z-10 whimsy:hidden" aria-hidden="true">
      <div class="absolute -left-24 -top-24 h-[420px] w-[420px] rounded-full bg-cyan/20 blur-[130px]" />
      <div class="absolute -right-20 top-1/3 h-[380px] w-[380px] rounded-full bg-violet/15 blur-[130px]" />
    </div>

    <div v-reveal class="mx-auto flex w-full max-w-5xl flex-col gap-6">
      <div class="flex flex-col items-start gap-4">
        <div class="rounded-full py-1.5 whimsy:border whimsy:border-cyan/20 whimsy:px-3 whimsy:shadow-[0px_2px_4px_0px_#282828]">
          <p class="font-mono text-[11px] font-bold uppercase text-teal whimsy:text-ink">
            Welcome to my portfolio
          </p>
        </div>
        <h1 class="w-full font-display text-[32px] font-extrabold leading-[1.2] md:text-[44px]">
          <span>{{ "Hi, I'm " }}</span><span class="bg-gradient-to-r from-teal to-violet bg-clip-text text-transparent whimsy:bg-none whimsy:bg-clip-border whimsy:text-paper">Frida</span><span>.</span><br />
          I build reliable fullstack applications and write clean, scalable code.
        </h1>
        <p class="w-full text-[15px] leading-relaxed text-paper md:max-w-2xl md:text-base">
          A fullstack developer with a deep passion for coding and a relentless drive to
          solve problems. I approach every challenge with a positive attitude, clear
          communication, and a determination to see it through.
        </p>
      </div>

      <div class="flex w-full flex-col gap-3 sm:flex-row sm:w-auto">
        <a
          href="#projects"
          class="btn-animated flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-teal via-violet to-cyan px-6 py-3.5 font-mono text-[13px] font-bold uppercase text-white shadow-[0px_4px_6px_rgba(2,22,125,0.06)] hover:shadow-lg hover:shadow-cyan/35 sm:w-auto whimsy:from-violet whimsy:to-teal whimsy:shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25),0px_4px_6px_0px_rgba(2,22,125,0.06)] whimsy:hover:shadow-teal/35"
        >
          Explore Projects
          <ArrowIcon :size="12" color="white" />
        </a>
        <a
          href="#contact"
          class="btn-animated flex w-full rounded-lg bg-gradient-to-r from-teal via-violet to-cyan p-[1.5px] hover:shadow-lg hover:shadow-cyan/35 sm:w-auto whimsy:bg-none whimsy:hover:shadow-teal/35"
        >
          <span
            class="flex w-full items-center justify-center gap-2 rounded-[6.5px] bg-ink px-6 py-3.5 font-mono text-[13px] font-bold uppercase text-white whimsy:bg-[rgba(0,143,122,0.38)] whimsy:text-[#fff9f2] whimsy:shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
          >
            Connect
            <ArrowIcon :size="12" color="white" />
          </span>
        </a>
      </div>

      <div class="flex w-full flex-wrap items-center gap-4">
        <p class="font-mono text-xs font-bold text-paper">FIND ME:</p>
        <a
          v-for="social in socials"
          :key="social.label"
          :href="social.href"
          :target="social.external ? '_blank' : undefined"
          rel="noreferrer"
          class="flex items-center gap-1 font-mono text-[13px] font-bold text-paper hover:text-teal whimsy:hover:text-paper"
        >
          <ExternalLinkIcon :size="12" color="currentColor" />
          <span class="underline decoration-from-font underline-offset-2">{{
            social.label
          }}</span>
        </a>
      </div>
    </div>
  </section>
</template>
