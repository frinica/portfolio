<script setup lang="ts">
import { computed } from "vue"
import { activeSectionId } from "../composables/activeSection"

const props = defineProps<{
  label: string
  sectionId: string
}>()

const isActive = computed(() => activeSectionId.value === props.sectionId)
</script>

<template>
  <div class="flex w-full items-center gap-3 py-4">
    <div class="h-px flex-1 bg-frost/60 whimsy:bg-paper" />
    <p
      class="ml-2 font-mono text-xs font-bold uppercase transition-colors duration-500"
      :class="isActive ? 'text-sky' : 'text-teal'"
    >
      {{ label }}
    </p>
    <div class="h-px w-[60px] bg-frost/60 whimsy:bg-paper" />
  </div>
</template>
