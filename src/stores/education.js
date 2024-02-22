import { ref, watchEffect } from 'vue';
import { defineStore } from 'pinia';
import { nanoid } from 'nanoid';

export const useEducationStore = defineStore('education', () => {
  const education = ref(new Map(JSON.parse(localStorage.getItem('education'))));

  function addEducation() {
    const id = nanoid();

    education.value.set(id, {
      id,
      academy: '',
      course: '',
      startDate: '',
      endDate: '',
      description: '',
      stillStudyingHere: false,
    });
  }

  function deleteEducation(id) {
    education.value.delete(id);
  }

  watchEffect(() => {
    localStorage.setItem('education', JSON.stringify(Array.from(education.value)));
  });

  return { education, addEducation, deleteEducation };
});
