<script setup lang="ts">
import { reactive, ref } from "vue"
import ArrowIcon from "./icons/ArrowIcon.vue"

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const name = ref("")
const email = ref("")
const message = ref("")
const botField = ref("") // honeypot — real users never see or fill this

type Status = "idle" | "submitting" | "success" | "error"
const status = ref<Status>("idle")

const errors = reactive<{ name?: string; email?: string; message?: string }>({})

const validate = () => {
  errors.name = name.value.trim().length < 2 ? "Enter your name." : undefined
  errors.email = EMAIL_RE.test(email.value.trim()) ? undefined : "Enter a valid email address."
  errors.message =
    message.value.trim().length < 10 ? "Say a bit more — at least 10 characters." : undefined
  return !errors.name && !errors.email && !errors.message
}

const encodeForm = (data: Record<string, string>) =>
  Object.entries(data)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join("&")

const submit = async () => {
  if (botField.value) return // honeypot tripped — silently drop
  if (!validate()) return

  status.value = "submitting"
  try {
    const response = await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encodeForm({
        "form-name": "contact",
        name: name.value,
        email: email.value,
        message: message.value,
      }),
    })
    if (!response.ok) throw new Error(`Submission failed with status ${response.status}`)

    status.value = "success"
    name.value = ""
    email.value = ""
    message.value = ""
  } catch {
    status.value = "error"
  }
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" })
}
</script>

<template>
  <footer
    id="contact"
    class="relative isolate flex w-full flex-col gap-10 overflow-hidden border-t border-muted px-5 pb-6 pt-12 md:px-16 md:pt-20"
  >
    <div class="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
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
            <span class="text-[11px] text-teal">EMAIL:</span>
            <a href="mailto:ift.nicander@gmail.com" class="text-xs text-paper transition-colors duration-300 hover:text-teal">ift.nicander@gmail.com</a>
          </div>
        </div>
      </div>

      <form
        name="contact"
        class="flex flex-1 flex-col gap-4 rounded-xl border border-muted p-5 shadow-[0px_4px_16px_0px_rgba(2,22,125,0.02)]"
        novalidate
        @submit.prevent="submit"
      >
        <!-- Honeypot: hidden from real users, bots tend to fill every field -->
        <div class="hidden" aria-hidden="true">
          <label>
            Leave this field blank
            <input v-model="botField" type="text" name="bot-field" tabindex="-1" autocomplete="off" />
          </label>
        </div>

        <div class="flex flex-col gap-1.5">
          <label for="contact-name" class="font-mono text-[10px] font-bold text-teal">NAME</label>
          <input
            id="contact-name"
            v-model="name"
            type="text"
            placeholder="Enter name..."
            :aria-invalid="!!errors.name"
            aria-describedby="contact-name-error"
            class="h-10 rounded-md border border-muted bg-transparent px-3 text-[13px] text-paper placeholder:text-muted"
          />
          <p v-if="errors.name" id="contact-name-error" class="font-mono text-[11px] text-red-400">
            {{ errors.name }}
          </p>
        </div>

        <div class="flex flex-col gap-1.5">
          <label for="contact-email" class="font-mono text-[10px] font-bold text-teal">EMAIL ADDRESS</label>
          <input
            id="contact-email"
            v-model="email"
            type="email"
            placeholder="Enter email..."
            :aria-invalid="!!errors.email"
            aria-describedby="contact-email-error"
            class="h-10 rounded-md border border-muted bg-transparent px-3 text-[13px] text-paper placeholder:text-muted"
          />
          <p v-if="errors.email" id="contact-email-error" class="font-mono text-[11px] text-red-400">
            {{ errors.email }}
          </p>
        </div>

        <div class="flex flex-col gap-1.5">
          <label for="contact-message" class="font-mono text-[10px] font-bold text-teal">MESSAGE</label>
          <textarea
            id="contact-message"
            v-model="message"
            rows="3"
            placeholder="Describe project scope..."
            :aria-invalid="!!errors.message"
            aria-describedby="contact-message-error"
            class="rounded-md border border-muted bg-transparent px-3 py-2.5 text-[13px] text-paper placeholder:text-muted"
          />
          <p v-if="errors.message" id="contact-message-error" class="font-mono text-[11px] text-red-400">
            {{ errors.message }}
          </p>
        </div>

        <button
          type="submit"
          :disabled="status === 'submitting'"
          class="btn-animated flex items-center justify-center gap-2 rounded-md bg-gradient-to-r from-teal via-violet to-cyan py-3 font-mono text-xs font-bold uppercase text-white hover:shadow-lg hover:shadow-cyan/35 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {{ status === "submitting" ? "Sending..." : "Send Message" }}
          <ArrowIcon v-if="status !== 'submitting'" :size="12" color="white" />
        </button>

        <p v-if="status === 'success'" role="status" class="font-mono text-[11px] text-teal">
          Thanks — your message is on its way. I'll get back to you soon.
        </p>
        <p v-else-if="status === 'error'" role="alert" class="font-mono text-[11px] text-red-400">
          Something went wrong sending that. Try again, or email me directly.
        </p>
      </form>
    </div>

    <div
      class="mx-auto flex w-full max-w-5xl flex-col items-center gap-4 border-t border-dashed border-muted pt-6 text-center text-[10px]"
    >
      <p class="font-mono text-paper">© 2026 FRIDA NICANDER. BUILT WITH VUE & TAILWIND.</p>
      <button
        type="button"
        class="font-mono font-bold text-paper transition-colors duration-300 hover:text-teal"
        @click="scrollToTop"
      >
        BACK TO TOP ↑
      </button>
    </div>
  </footer>
</template>
