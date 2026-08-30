<script setup lang="ts">
import SectionDivider from "./SectionDivider.vue"

// TODO(Frida): placeholder copy — swap in your real certifications/courses.
const certifications = [
  { title: "Certification name", issuer: "Issuing platform" },
  { title: "Certification name", issuer: "Issuing platform" },
  { title: "Certification name", issuer: "Issuing platform" },
]
</script>

<template>
  <section
    id="education"
    class="flex w-full flex-col gap-6 px-5 py-10 md:px-16 md:py-20"
  >
    <div v-reveal class="mx-auto flex w-full max-w-5xl flex-col gap-6">
      <SectionDivider label="Education & Credentials" section-id="education" />

      <div class="flex flex-col gap-2">
        <h2 class="font-display text-2xl font-bold md:text-[28px]">
          Structured Foundations
        </h2>
        <p class="text-sm text-paper md:text-base">
          A fullstack program that built the foundation for everything since.
        </p>
      </div>

      <div class="flex flex-col gap-6 md:flex-row">
        <div
          class="relative flex flex-1 flex-col gap-2.5 overflow-hidden rounded-xl border border-haze bg-ink pl-7 pr-5 py-5 drop-shadow-[0px_4px_8px_rgba(2,22,125,0.02)] transition-transform duration-300 hover:-translate-y-1 whimsy:border-[3px] whimsy:border-teal whimsy:pl-8 whimsy:ring-[3px] whimsy:ring-ink"
        >
          <span class="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-teal to-blue whimsy:w-3" />
          <p class="font-display text-[15px] font-bold text-paper">
            Chas Academy &mdash; Fullstack Web Developer
          </p>
          <p class="text-[13px] leading-relaxed text-muted">
            Completed the Fullstack Web Developer program at Chas Academy, gaining a
            solid foundation in front-end and back-end development. Worked on
            practical projects covering JavaScript, PHP, and HTML/CSS &mdash; with a
            focus not just on coding, but teamwork, problem-solving, and building
            user-friendly applications.
          </p>
        </div>

        <div
          class="relative flex flex-1 flex-col gap-4 overflow-hidden rounded-xl border border-haze bg-ink pl-7 pr-5 py-5 drop-shadow-[0px_4px_8px_rgba(2,22,125,0.02)] transition-transform duration-300 hover:-translate-y-1 whimsy:border-[3px] whimsy:border-violet whimsy:pl-8 whimsy:ring-[3px] whimsy:ring-ink"
        >
          <span class="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-indigo to-violet whimsy:w-3" />
          <p class="font-mono text-[13px] font-bold uppercase text-teal">
            Certifications & Courses
          </p>
          <div class="flex flex-col gap-4">
            <div
              v-for="(cert, i) in certifications"
              :key="i"
              class="flex flex-col gap-1 border-b border-haze/40 pb-3 last:border-b-0 last:pb-0"
            >
              <p class="font-display text-sm font-bold text-paper">{{ cert.title }}</p>
              <p class="font-mono text-[10px] text-muted">{{ cert.issuer }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
