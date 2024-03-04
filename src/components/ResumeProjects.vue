<script setup>
import { useProjectsStore } from '@/stores/projects';

const projectsStore = useProjectsStore();
</script>

<template>
  <section v-if="projectsStore.projects.size > 0" aria-labelledby="projects-heading">
    <h3 id="projects-heading">Projects</h3>
    <ul>
      <li v-for="project in projectsStore.projects.values()" :key="project.id">
        <article>
          <h4 v-if="project.name">
            {{ project.name }}
          </h4>
          <p v-if="project.description">
            {{ project.description }}
          </p>
          <p v-if="project.techStack">Tech stack: {{ project.techStack }}</p>
          <div v-if="project.demoLink || project.sourceCodeLink">
            <a
              v-if="project.demoLink"
              :href="project.demoLink"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span aria-hidden="true">Demo</span>
              <span class="visually-hidden">
                {{ `Demo of the ${project.name} project. Opens in a new tab.` }}
              </span>
            </a>
            <span v-if="project.demoLink && project.sourceCodeLink" aria-hidden="true"> | </span>
            <a
              v-if="project.sourceCodeLink"
              :href="project.sourceCodeLink"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span aria-hidden="true">Source</span>
              <span class="visually-hidden">
                {{ `Source code of the ${project.name} project. Opens in a new tab.` }}
              </span>
            </a>
          </div>
        </article>
      </li>
    </ul>
  </section>
</template>

<style scoped>
a {
  text-transform: uppercase;
}
</style>
