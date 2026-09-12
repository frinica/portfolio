<script setup lang="ts">
withDefaults(defineProps<{ size?: number; color?: string }>(), {
  size: 16,
  color: "currentColor",
})
</script>

<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2 4H14M2 8H14M2 12H14"
      :stroke="color"
      stroke-width="1.6"
      stroke-linecap="round"
    />
  </svg>
</template>
