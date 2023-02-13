import { ref, watch } from "vue";
import { defineStore } from "pinia";
import { nanoid } from "nanoid";

export const useProjectsStore = defineStore("projects", () => {
  const projects = ref(new Map(JSON.parse(localStorage.getItem("projects"))));

  function addProject() {
    const id = nanoid();

    projects.value.set(id, {
      id,
      name: "",
      description: "",
      techStack: "",
      demoLink: "",
      sourceCodeLink: "",
    });
  }

  function deleteProject(id) {
    projects.value.delete(id);
  }

  watch(projects.value, () => {
    localStorage.setItem(
      "projects",
      JSON.stringify(Array.from(projects.value))
    );
  });

  return { projects, addProject, deleteProject };
});
