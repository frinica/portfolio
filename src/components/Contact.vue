<script setup lang="ts">
import { ref } from "vue"
import ArrowIcon from "./icons/ArrowIcon.vue"

const CONTACT_EMAIL = "ift.nicander@gmail.com"

const name = ref("")
const email = ref("")
const message = ref("")

const submit = () => {
  const subject = encodeURIComponent(`Portfolio contact from ${name.value || "your site"}`)
  const bodyLines: string[] = []
  if (name.value) bodyLines.push(`From: ${name.value}`)
  if (email.value) bodyLines.push(`Reply to: ${email.value}`)
  if (bodyLines.length) bodyLines.push("")
  bodyLines.push(message.value)
  const body = encodeURIComponent(bodyLines.join("\n"))
  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" })
}
</script>

<template>
  <footer
    id="contact"
    class="relative flex w-full flex-col gap-10 overflow-hidden border-t border-muted px-5 pb-6 pt-12 md:px-16 md:pt-20"
  >
    <div class="pointer-events-none absolute inset-0 -z-10 whimsy:hidden" aria-hidden="true">
      <div class="absolute -bottom-24 -left-20 h-[380px] w-[380px] rounded-full bg-teal/15 blur-[130px]" />
      <div class="absolute -bottom-16 -right-24 h-[340px] w-[340px] rounded-full bg-cyan/15 blur-[130px]" />
    </div>

    <div v-reveal class="mx-auto flex w-full max-w-5xl flex-col gap-8 md:flex-row md:gap-12">
      <div class="flex flex-1 flex-col gap-4">
        <h2 class="font-display text-[28px] font-bold leading-tight">
          Let's Start a Conversation
        </h2>
        <p class="text-[15px] leading-relaxed text-paper">
          Interested in working together, or just want to say hi? Reach out below,
          or find me on LinkedIn and GitHub.
        </p>
        <div class="flex flex-col gap-2.5 pt-2 font-mono text-sm font-bold">
          <div class="flex items-center gap-2">
            <span class="text-[11px] text-teal whimsy:text-paper">EMAIL:</span>
            <a :href="`mailto:${CONTACT_EMAIL}`" class="text-xs text-paper transition-colors duration-300 hover:text-teal whimsy:hover:text-paper">{{
              CONTACT_EMAIL
            }}</a>
          </div>
        </div>
      </div>

      <form
        class="flex flex-1 flex-col gap-4 rounded-xl border border-muted p-5 shadow-[0px_4px_16px_0px_rgba(2,22,125,0.02)] whimsy:border-[2.667px] whimsy:border-paper whimsy:bg-transparent"
        @submit.prevent="submit"
      >
        <div class="flex flex-col gap-1.5">
          <label for="contact-name" class="font-mono text-[10px] font-bold text-teal whimsy:text-paper">NAME</label>
          <input
            id="contact-name"
            v-model="name"
            type="text"
            placeholder="Enter name..."
            class="h-10 rounded-md border border-muted bg-paper px-3 text-[13px] text-ink placeholder:text-subtle whimsy:border-paper whimsy:bg-transparent whimsy:text-paper whimsy:placeholder:text-ink"
          />
        </div>
        <div class="flex flex-col gap-1.5">
          <label for="contact-email" class="font-mono text-[10px] font-bold text-teal whimsy:text-paper">EMAIL ADDRESS</label>
          <input
            id="contact-email"
            v-model="email"
            type="email"
            placeholder="Enter email..."
            class="h-10 rounded-md border border-muted bg-paper px-3 text-[13px] text-ink placeholder:text-subtle whimsy:border-paper whimsy:bg-transparent whimsy:text-paper whimsy:placeholder:text-ink"
          />
        </div>
        <div class="flex flex-col gap-1.5">
          <label for="contact-message" class="font-mono text-[10px] font-bold text-teal whimsy:text-paper">MESSAGE</label>
          <textarea
            id="contact-message"
            v-model="message"
            rows="3"
            placeholder="Describe project scope..."
            class="rounded-md border border-muted bg-paper px-3 py-2.5 text-[13px] text-ink placeholder:text-subtle whimsy:border-paper whimsy:bg-transparent whimsy:text-paper whimsy:placeholder:text-ink"
          />
        </div>
        <button
          type="submit"
          class="btn-animated flex items-center justify-center gap-2 rounded-md bg-gradient-to-r from-teal via-violet to-cyan py-3 font-mono text-xs font-bold uppercase text-white hover:shadow-lg hover:shadow-cyan/35 whimsy:from-violet whimsy:to-cyan"
        >
          Send Message
          <ArrowIcon :size="12" color="white" />
        </button>
      </form>
    </div>

    <div
      class="mx-auto flex w-full max-w-5xl flex-col items-center gap-4 border-t border-dashed border-muted pt-6 text-center text-[10px] whimsy:border-paper/50"
    >
      <p class="font-mono text-paper">© 2026 FRIDA NICANDER. BUILT WITH VUE & TAILWIND.</p>
      <button
        type="button"
        class="font-mono font-bold text-white transition-colors duration-300 hover:text-teal whimsy:text-paper whimsy:hover:text-paper"
        @click="scrollToTop"
      >
        BACK TO TOP ↑
      </button>
    </div>
  </footer>
</template>
