import { ref, watchEffect } from 'vue';
import { defineStore } from 'pinia';
import { nanoid } from 'nanoid';

export const useSkillsStore = defineStore('skills', () => {
  const skills = ref(new Map(JSON.parse(localStorage.getItem('skills'))));

  function addSkill() {
    const id = nanoid();

    skills.value.set(id, {
      id,
      label: '',
    });
  }

  function deleteSkill(id) {
    skills.value.delete(id);
  }

  watchEffect(() => {
    localStorage.setItem('skills', JSON.stringify(Array.from(skills.value)));
  });

  return { skills, addSkill, deleteSkill };
});
