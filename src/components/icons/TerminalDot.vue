<script setup lang="ts">
// Exact shape exported from Figma (imgEllipse / imgEllipse1 / imgEllipse2)
withDefaults(
  defineProps<{
    color: string
    size?: number
  }>(),
  { size: 8 }
)
</script>

<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 8 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="4" cy="4" r="4" :fill="color" />
  </svg>
</template>
