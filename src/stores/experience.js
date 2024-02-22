import { ref, watchEffect } from "vue";
import { defineStore } from "pinia";
import { nanoid } from "nanoid";

export const useExperienceStore = defineStore("experience", () => {
  const experience = ref(
    new Map(JSON.parse(localStorage.getItem("experience")))
  );

  function addExperience() {
    const id = nanoid();

    experience.value.set(id, {
      id,
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      description: "",
      techStack: "",
      stillWorkingHere: false,
    });
  }

  function deleteExperience(id) {
    experience.value.delete(id);
  }

  watchEffect(() => {
    localStorage.setItem(
      "experience",
      JSON.stringify(Array.from(experience.value))
    );
  });

  return { experience, addExperience, deleteExperience };
});
