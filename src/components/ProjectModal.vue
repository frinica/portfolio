<script setup lang="ts">
import { nextTick, onBeforeUnmount, ref, watch } from "vue"
import type { ProjectDetail } from "../data/projects"
import CloseIcon from "./icons/CloseIcon.vue"

const props = defineProps<{ project: ProjectDetail | null }>()
const emit = defineEmits<{ close: [] }>()

const dialogRef = ref<HTMLElement | null>(null)
const closeButtonRef = ref<HTMLButtonElement | null>(null)
let previouslyFocused: HTMLElement | null = null

const close = () => emit("close")

const onKeydown = (e: KeyboardEvent) => {
  if (e.key === "Escape") {
    close()
    return
  }
  if (e.key !== "Tab" || !dialogRef.value) return

  // Simple focus trap: keep Tab cycling within the dialog.
  const focusable = dialogRef.value.querySelectorAll<HTMLElement>(
    'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
  )
  if (focusable.length === 0) return
  const first = focusable[0]
  const last = focusable[focusable.length - 1]

  if (e.shiftKey && document.activeElement === first) {
    e.preventDefault()
    last.focus()
  } else if (!e.shiftKey && document.activeElement === last) {
    e.preventDefault()
    first.focus()
  }
}

watch(
  () => props.project,
  async (project) => {
    if (project) {
      previouslyFocused = document.activeElement as HTMLElement | null
      document.body.style.overflow = "hidden"
      window.addEventListener("keydown", onKeydown)
      await nextTick()
      closeButtonRef.value?.focus()
    } else {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", onKeydown)
      previouslyFocused?.focus()
    }
  }
)

onBeforeUnmount(() => {
  document.body.style.overflow = ""
  window.removeEventListener("keydown", onKeydown)
})
</script>

<template>
  <Teleport to="body">
    <Transition name="modal-fade">
      <div
        v-if="project"
        class="fixed inset-0 z-[100] flex items-center justify-center bg-ink/80 p-4 backdrop-blur-sm md:p-8"
        @mousedown.self="close"
      >
        <div
          ref="dialogRef"
          role="dialog"
          aria-modal="true"
          :aria-labelledby="`${project.slug}-modal-title`"
          class="flex max-h-[85vh] w-full max-w-2xl flex-col overflow-hidden rounded-xl border border-haze bg-ink shadow-[0_20px_60px_rgba(0,0,0,0.5)] whimsy:border-[3px] whimsy:border-violet whimsy:ring-[3px] whimsy:ring-ink"
        >
          <header class="flex items-start justify-between gap-4 border-b border-haze/30 px-6 py-5">
            <div class="flex flex-col gap-2">
              <h2
                :id="`${project.slug}-modal-title`"
                class="font-display text-2xl font-bold text-paper"
              >
                {{ project.title }}
              </h2>
              <div class="flex flex-wrap gap-1.5 font-mono text-[10px] font-bold text-muted">
                <span v-for="tag in project.cardTags" :key="tag">{{ tag }}</span>
              </div>
            </div>
            <button
              ref="closeButtonRef"
              type="button"
              aria-label="Close"
              class="shrink-0 rounded-md p-1.5 text-paper transition-colors hover:bg-paper/10 hover:text-violet"
              @click="close"
            >
              <CloseIcon :size="18" />
            </button>
          </header>

          <div class="flex flex-col gap-8 overflow-y-auto px-6 py-6">
            <section class="flex flex-col gap-2">
              <p class="font-mono text-xs font-bold uppercase text-teal">Overview</p>
              <p class="text-[14px] leading-relaxed text-paper">{{ project.overview }}</p>
            </section>

            <section class="flex flex-col gap-3">
              <p class="font-mono text-xs font-bold uppercase text-teal">Tech Stack</p>
              <div class="flex flex-col gap-2.5">
                <div
                  v-for="entry in project.stack"
                  :key="entry.label"
                  class="flex items-baseline justify-between gap-4 border-b border-haze/20 pb-2 text-[13px]"
                >
                  <span class="font-mono text-[11px] text-muted">{{ entry.label }}</span>
                  <span class="text-right font-bold text-paper">{{ entry.value }}</span>
                </div>
              </div>
            </section>

            <section class="flex flex-col gap-5">
              <p class="font-mono text-xs font-bold uppercase text-teal">Highlights</p>
              <div class="flex flex-col gap-6">
                <div v-for="highlight in project.highlights" :key="highlight.title" class="flex flex-col gap-2.5">
                  <h3 class="font-display text-base font-bold text-paper">{{ highlight.title }}</h3>
                  <p class="text-[13px] leading-relaxed text-paper">{{ highlight.description }}</p>
                  <div class="grid grid-cols-2 gap-2 sm:grid-cols-3">
                    <img
                      v-for="src in highlight.images"
                      :key="src"
                      :src="src"
                      :alt="highlight.title"
                      class="aspect-video w-full rounded-lg border border-haze/30 object-cover"
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>

          <footer class="border-t border-haze/30 px-6 py-4">
            <a
              href="https://github.com/frinica"
              target="_blank"
              rel="noreferrer"
              class="font-mono text-xs font-bold text-paper hover:text-sky"
            >
              VIEW MORE ON GITHUB →
            </a>
          </footer>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.25s ease;
}
.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active > div,
.modal-fade-leave-active > div {
  transition: transform 0.25s ease, opacity 0.25s ease;
}
.modal-fade-enter-from > div,
.modal-fade-leave-to > div {
  transform: translateY(12px) scale(0.98);
  opacity: 0;
}

@media (prefers-reduced-motion: reduce) {
  .modal-fade-enter-active,
  .modal-fade-leave-active,
  .modal-fade-enter-active > div,
  .modal-fade-leave-active > div {
    transition: none;
  }
}
</style>
