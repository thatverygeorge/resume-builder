<script setup>
import { useProjectsStore } from '@/stores/projects';
import { useTabsStore } from '@/stores/tabs';
import ResumeProjects from '@/components/ResumeProjects.vue';

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
    <div class="projects__builder">
      <ul v-if="projectsStore.projects.size > 0" class="list">
        <li v-for="project in projectsStore.projects.values()" :key="project.id">
          <div class="input-container projects__input-container">
            <label :for="`name-${project.id}`">name</label>
            <input :id="`name-${project.id}`" v-model="project.name" type="text" />
          </div>

          <div class="input-container projects__input-container">
            <label :for="`description-${project.id}`">description</label>
            <textarea :id="`description-${project.id}`" v-model="project.description"></textarea>
          </div>

          <div class="input-container projects__input-container">
            <label :for="`tech-stack-${project.id}`">tech stack</label>
            <input :id="`tech-stack-${project.id}`" v-model="project.techStack" type="text" />
          </div>

          <div class="input-container projects__input-container">
            <label :for="`demoLink-${project.id}`">demo link</label>
            <input :id="`demoLink-${project.id}`" v-model="project.demoLink" type="url" />
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
            <span class="visually-hidden"> delete project: {{ project.name }} </span>
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
    </div>

    <section class="projects__preview resume" aria-labelledby="preview-heading">
      <h2 id="preview-heading">Preview</h2>
      <ResumeProjects />
    </section>
  </section>
</template>

<style scoped>
.projects {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  align-items: start;
}

.projects__builder {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.projects__preview {
  background-color: var(--gray);
  padding: 2rem;
  border-radius: 5px;
  grid-template-columns: 1fr;
  position: sticky;
  top: 2rem;
}
.projects__preview h2 {
  text-align: start;
  border-bottom: 2px solid var(--black);
}

@media (width < 960px) {
  .projects {
    grid-template-columns: 1fr;
  }

  .projects__preview {
    order: 0;
    position: initial;
  }

  .projects__builder {
    order: 1;
  }
}
</style>
