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
      d="M2 2L14 14M14 2L2 14"
      :stroke="color"
      stroke-width="1.6"
      stroke-linecap="round"
    />
  </svg>
</template>
