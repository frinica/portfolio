<script setup lang="ts">
withDefaults(defineProps<{ size?: number; color?: string }>(), {
  size: 12,
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
      d="M14 9.79A6.5 6.5 0 1 1 6.21 2 5 5 0 0 0 14 9.79Z"
      :fill="color"
    />
  </svg>
</template>
