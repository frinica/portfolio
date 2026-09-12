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
      d="M8 0C8 4.5 4.5 8 0 8C4.5 8 8 11.5 8 16C8 11.5 11.5 8 16 8C11.5 8 8 4.5 8 0Z"
      :fill="color"
    />
  </svg>
</template>
