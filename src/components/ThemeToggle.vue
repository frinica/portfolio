<script setup lang="ts">
import { theme, setTheme } from "../composables/theme"
import MoonIcon from "./icons/MoonIcon.vue"
import SparkleIcon from "./icons/SparkleIcon.vue"
</script>

<template>
  <div
    class="flex items-center gap-1 rounded-full border border-paper/15 p-1 font-mono text-[10px] font-bold uppercase whimsy:p-0"
    role="radiogroup"
    aria-label="Site theme"
  >
    <button
      type="button"
      role="radio"
      :aria-checked="theme === 'moody'"
      class="flex items-center gap-1.5 rounded-full px-2.5 py-1 transition-colors duration-300 sm:px-3"
      :class="theme === 'moody' ? 'bg-paper text-ink' : 'text-paper hover:text-teal whimsy:hover:text-paper'"
      @click="setTheme('moody')"
    >
      <MoonIcon :size="11" color="currentColor" />
      <span class="hidden sm:inline">I feel </span>moody
    </button>
    <button
      type="button"
      role="radio"
      :aria-checked="theme === 'whimsy'"
      class="flex items-center gap-1.5 rounded-full px-2.5 py-1 transition-colors duration-300 sm:px-3"
      :class="
        theme === 'whimsy'
          ? 'bg-gradient-to-r from-teal via-violet to-cyan text-white whimsy:drop-shadow-[0px_4px_2px_rgba(0,0,0,0.25)]'
          : 'text-paper hover:text-teal whimsy:hover:text-paper'
      "
      @click="setTheme('whimsy')"
    >
      <SparkleIcon :size="11" color="currentColor" />
      <span class="hidden sm:inline">I feel </span>whimsical
    </button>
  </div>
</template>
