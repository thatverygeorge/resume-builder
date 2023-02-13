<script setup>
import { useProjectsStore } from "@/stores/projects";

const projectsStore = useProjectsStore();
</script>

<template>
  <section
    v-if="Array.from(projectsStore.projects).length > 0"
    class="projects resume__projects"
    aria-labelledby="projects-heading"
  >
    <h2 class="heading heading--xl projects__heading" id="projects-heading">
      Projects
    </h2>
    <ul class="projects__list" role="list">
      <li
        v-for="project in projectsStore.projects.values()"
        :key="project.id"
        class="projects__item"
      >
        <article class="project-card projects__card">
          <h3 class="heading heading--l project-card__heading">
            {{ project.name }}
          </h3>
          <p v-if="project.description" class="project-card__description">
            {{ project.description }}
          </p>
          <p class="project-card__tech-stack">
            Tech stack: {{ project.techStack }}
          </p>
          <div>
            <a
              v-if="project.demoLink"
              class="link project-card__link"
              :href="project.demoLink"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span aria-hidden="true">Demo</span>
              <span class="visually-hidden">
                {{ `Demo of the ${project.name} project. Opens in a new tab.` }}
              </span>
            </a>
            <span v-if="project.demoLink" aria-hidden="true"> | </span>
            <a
              class="link project-card__link"
              :href="project.sourceCodeLink"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span aria-hidden="true">Source</span>
              <span class="visually-hidden">
                {{
                  `Source code of the ${project.name} project. Opens in a new tab.`
                }}
              </span>
            </a>
          </div>
        </article>
      </li>
    </ul>
  </section>
</template>
