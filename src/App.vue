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
  <div
    class="flex min-h-screen w-full flex-col bg-ink text-paper whimsy:bg-[linear-gradient(90deg,#008f7a_0%,#008d97_20%,#0088b2_40%,#007ec3_60%,#4e6fc3_80%,#8b5ab0_100%)] whimsy:bg-center whimsy:bg-no-repeat whimsy:bg-[length:100%_100%] md:whimsy:bg-[length:min(1400px,100%)_100%]"
  >
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
