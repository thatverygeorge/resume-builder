<script setup>
import { useProjectsStore } from '@/stores/projects';
import { useTabsStore } from '@/stores/tabs';
import TheButton from '@/components/TheButton.vue';

const projectsStore = useProjectsStore();
const tabsStore = useTabsStore();
</script>

<template>
  <section
    role="tabpanel"
    :id="`tabpanel-${tabsStore.currentTab}`"
    :aria-labelledby="`tab-${tabsStore.currentTab}`"
  >
    <ul v-if="projectsStore.projects.size > 0" class="list">
      <li v-for="project in projectsStore.projects.values()" :key="project.id">
        <div class="input-container">
          <label :for="`name-${project.id}`">name</label>
          <input :id="`name-${project.id}`" v-model="project.name" type="text" />
        </div>

        <div class="input-container">
          <label :for="`description-${project.id}`">description</label>
          <textarea :id="`description-${project.id}`" v-model="project.description"></textarea>
        </div>

        <div class="input-container">
          <label :for="`tech-stack-${project.id}`">tech stack</label>
          <input :id="`tech-stack-${project.id}`" v-model="project.techStack" type="text" />
        </div>

        <div class="input-container">
          <label :for="`demoLink-${project.id}`">demo link</label>
          <input :id="`demoLink-${project.id}`" v-model="project.demoLink" type="url" />
        </div>

        <div class="input-container">
          <label :for="`sourceCodeLink-${project.id}`">source code link</label>
          <input :id="`sourceCodeLink-${project.id}`" v-model="project.sourceCodeLink" type="url" />
        </div>

        <TheButton class="button--delete" @click="projectsStore.deleteProject(project.id)">
          <span aria-hidden="true">delete</span>
          <span class="visually-hidden">delete project: {{ project.name }}</span>
        </TheButton>
      </li>
    </ul>

    <TheButton class="button--add" v-btn-primary @click="projectsStore.addProject">
      add project
    </TheButton>
  </section>
</template>
