<script setup lang="ts">
import { theme, setTheme } from "../composables/theme"
import MoonIcon from "./icons/MoonIcon.vue"
import SparkleIcon from "./icons/SparkleIcon.vue"
</script>

<template>
  <div
    class="flex items-center gap-1 rounded-full border border-paper/15 font-mono text-[10px] font-bold uppercase"
    role="radiogroup"
    aria-label="Site theme"
  >
    <button
      type="button"
      role="radio"
      :aria-checked="theme === 'moody'"
      class="flex items-center gap-1.5 whitespace-nowrap rounded-full px-2.5 py-1 transition-colors duration-300 sm:px-3"
      :class="theme === 'moody' ? 'bg-paper text-ink' : 'text-paper hover:text-teal'"
      @click="setTheme('moody')"
    >
      <MoonIcon :size="11" color="currentColor" />
      <span class="hidden lg:inline">I feel </span>moody
    </button>
    <button
      type="button"
      role="radio"
      :aria-checked="theme === 'light'"
      class="flex items-center gap-1.5 whitespace-nowrap rounded-full px-2.5 py-1 transition-colors duration-300 sm:px-3"
      :class="
        theme === 'light'
          ? 'bg-gradient-to-r from-teal via-violet to-cyan text-white'
          : 'text-paper hover:text-teal'
      "
      @click="setTheme('light')"
    >
      <SparkleIcon :size="11" color="currentColor" />
      <span class="hidden lg:inline">I feel </span>radiant
    </button>
  </div>
</template>
