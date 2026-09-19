<script setup lang="ts">
import { ref } from "vue"
import SectionDivider from "./SectionDivider.vue"
import ArrowIcon from "./icons/ArrowIcon.vue"
import ProjectModal from "./ProjectModal.vue"
import { projects, type ProjectDetail } from "../data/projects"

const selectedProject = ref<ProjectDetail | null>(null)

const openProject = (project: ProjectDetail) => {
  selectedProject.value = project
}

// Each card gets its own 2-stop slice of the brand spectrum for its
// gradient ring, instead of every card sharing the same accent.
const cardAccents = [
  { ring: "from-teal to-cyan", shadow: "hover:shadow-cyan/25" },
  { ring: "from-cyan to-violet", shadow: "hover:shadow-violet/25" },
]
</script>

<template>
  <section
    id="projects"
    class="flex w-full flex-col gap-6 px-5 py-10 md:px-16 md:py-20"
  >
    <div v-reveal class="mx-auto flex w-full max-w-5xl flex-col gap-6">
      <SectionDivider label="Projects" section-id="projects" />

      <div class="flex flex-col gap-2">
        <h2 class="font-display text-2xl font-bold md:text-[28px]">
          Projects I've Helped Build
        </h2>
        <p class="text-sm text-paper md:text-base">
          A look at the platforms I've contributed to professionally, plus where to
          find more.
        </p>
      </div>

      <div class="grid w-full grid-cols-1 gap-5 md:grid-cols-2">
        <div v-for="(project, i) in projects" :key="project.slug" v-reveal="i * 120">
          <div
            class="group h-full rounded-xl bg-gradient-to-br p-[1.5px] shadow-[0px_4px_16px_0px_rgba(2,22,125,0.02)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            :class="[cardAccents[i].ring, cardAccents[i].shadow]"
          >
            <article class="flex h-full flex-col overflow-hidden rounded-[10px] bg-ink">
              <div class="h-40 w-full overflow-hidden">
                <img
                  :src="project.cardImage"
                  :alt="`Screenshot from the ${project.title} project`"
                  class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div class="flex flex-col gap-3 px-4 pb-5 pt-4">
                <div class="flex flex-wrap gap-1.5 font-mono text-[10px] font-bold text-paper">
                  <span v-for="tag in project.cardTags" :key="tag">{{ tag }}</span>
                </div>
                <div class="flex flex-col gap-1.5">
                  <h3 class="font-display text-xl font-bold">{{ project.title }}</h3>
                  <p class="text-[13px] leading-relaxed text-paper">
                    {{ project.cardDescription }}
                  </p>
                </div>
                <button
                  type="button"
                  class="group/link flex items-center gap-1.5 pt-1 font-mono text-xs font-bold text-paper hover:text-teal"
                  @click="openProject(project)"
                >
                  VIEW DETAILS
                  <ArrowIcon :size="10" color="currentColor" class="transition-transform duration-300 group-hover/link:translate-x-1" />
                </button>
              </div>
            </article>
          </div>
        </div>

        <div v-reveal="240" class="md:col-span-2">
          <article
            class="flex flex-col justify-center gap-3 rounded-xl border border-dashed border-haze p-6 text-center transition-colors duration-300 hover:border-violet"
          >
            <h3 class="font-display text-xl font-bold">More on GitHub</h3>
            <p class="text-[13px] leading-relaxed text-paper">
              Smaller experiments, freelance work, and open-source contributions live
              here.
            </p>
            <a
              href="https://github.com/frinica"
              target="_blank"
              rel="noreferrer"
              class="group/link mx-auto flex items-center gap-1.5 pt-1 font-mono text-xs font-bold text-paper hover:text-teal"
            >
              VIEW GITHUB PROFILE
              <ArrowIcon :size="10" color="currentColor" class="transition-transform duration-300 group-hover/link:translate-x-1" />
            </a>
          </article>
        </div>
      </div>
    </div>

    <ProjectModal :project="selectedProject" @close="selectedProject = null" />
  </section>
</template>
