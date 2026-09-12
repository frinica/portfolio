<script setup lang="ts">
import NavBar from "./components/NavBar.vue"
import Hero from "./components/Hero.vue"
import Profile from "./components/Profile.vue"
import Skills from "./components/Skills.vue"
import Projects from "./components/Projects.vue"
import Education from "./components/Education.vue"
import Contact from "./components/Contact.vue"
</script>

<template>
  <div class="flex min-h-screen w-full flex-col bg-ink text-paper">
    <NavBar />
    <main class="flex w-full flex-col">
      <Hero />
      <Profile />
      <Skills />
      <Projects />
      <Education />
      <Contact />
    </main>
  </div>
</template>
