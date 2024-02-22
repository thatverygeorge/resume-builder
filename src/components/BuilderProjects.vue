<script setup>
import { useProjectsStore } from "@/stores/projects";
import { useTabsStore } from "@/stores/tabs";

const projectsStore = useProjectsStore();
const tabsStore = useTabsStore();
</script>

<template>
  <section
    class="projects"
    role="tabpanel"
    :id="`tabpanel-${tabsStore.currentTab}`"
    :aria-labelledby="`tab-${tabsStore.currentTab}`"
  >
    <ul v-if="projectsStore.projects.size > 0" class="list">
      <li v-for="project in projectsStore.projects.values()" :key="project.id">
        <div class="input-container projects__input-container">
          <label :for="`name-${project.id}`">name</label>
          <input
            :id="`name-${project.id}`"
            v-model="project.name"
            type="text"
          />
        </div>

        <div class="input-container projects__input-container">
          <label :for="`description-${project.id}`">description</label>
          <textarea
            :id="`description-${project.id}`"
            v-model="project.description"
          ></textarea>
        </div>

        <div class="input-container projects__input-container">
          <label :for="`tech-stack-${project.id}`">tech stack</label>
          <input
            :id="`tech-stack-${project.id}`"
            v-model="project.techStack"
            type="text"
          />
        </div>

        <div class="input-container projects__input-container">
          <label :for="`demoLink-${project.id}`">demo link</label>
          <input
            :id="`demoLink-${project.id}`"
            v-model="project.demoLink"
            type="url"
          />
        </div>

        <div class="input-container projects__input-container">
          <label :for="`sourceCodeLink-${project.id}`">source code link</label>
          <input
            :id="`sourceCodeLink-${project.id}`"
            v-model="project.sourceCodeLink"
            type="url"
          />
        </div>

        <button
          class="button button--delete projects__button projects__button--delete"
          type="button"
          @click="projectsStore.deleteProject(project.id)"
        >
          <span aria-hidden="true">delete</span>
          <span class="visually-hidden">
            delete project: {{ project.name }}
          </span>
        </button>
      </li>
    </ul>

    <button
      class="button button--primary projects__button projects__button--add"
      type="button"
      @click="projectsStore.addProject"
    >
      add project
    </button>
  </section>
</template>
