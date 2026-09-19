<script setup lang="ts">
// Exact path exported from Figma (imgVector / imgVector1 / imgVector4)
withDefaults(
  defineProps<{
    size?: number
    color?: string
  }>(),
  { size: 12, color: "currentColor" }
)
</script>

<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 15 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 7H13M7 13L13 7L7 1"
      :stroke="color"
      stroke-width="2"
      stroke-linecap="round"
    />
  </svg>
</template>
