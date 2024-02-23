import { ref, watchEffect } from 'vue';
import { defineStore } from 'pinia';

const INITIAL_STATE = {
  name: '',
  position: '',
  techStack: '',
  description: '',
  accentColor: '#fee715',
};

export const useAboutStore = defineStore('about', () => {
  const about = ref(JSON.parse(localStorage.getItem('about')) || INITIAL_STATE);

  watchEffect(() => {
    localStorage.setItem('about', JSON.stringify(about.value));
  });

  watchEffect(() => {
    document.documentElement.style.setProperty('--accentColor', about.value.accentColor);
  });

  return { about };
});
