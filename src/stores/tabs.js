import { ref, shallowRef, watchEffect } from 'vue';
import { defineStore } from 'pinia';
import BuilderAbout from '@/components/BuilderAbout.vue';
import BuilderContacts from '@/components/BuilderContacts.vue';
import BuilderSkills from '@/components/BuilderSkills.vue';
import BuilderLanguages from '@/components/BuilderLanguages.vue';
import BuilderExperience from '@/components/BuilderExperience.vue';
import BuilderEducation from '@/components/BuilderEducation.vue';
import BuilderProjects from '@/components/BuilderProjects.vue';

import ResumeAbout from '@/components/ResumeAbout.vue';
import ResumeContacts from '@/components/ResumeContacts.vue';
import ResumeSkills from '@/components/ResumeSkills.vue';
import ResumeLanguages from '@/components/ResumeLanguages.vue';
import ResumeExperience from '@/components/ResumeExperience.vue';
import ResumeProjects from '@/components/ResumeProjects.vue';
import ResumeEducation from '@/components/ResumeEducation.vue';

const TABS = {
  about: [BuilderAbout, ResumeAbout],
  contacts: [BuilderContacts, ResumeContacts],
  skills: [BuilderSkills, ResumeSkills],
  languages: [BuilderLanguages, ResumeLanguages],
  experience: [BuilderExperience, ResumeExperience],
  projects: [BuilderProjects, ResumeProjects],
  education: [BuilderEducation, ResumeEducation],
};

const DEFAULT_TAB = 'about';

export const useTabsStore = defineStore('tabs', () => {
  const tabs = shallowRef(TABS);
  const currentTab = ref(localStorage.getItem('lastOpenTab') || DEFAULT_TAB);

  function changeTab(newTab) {
    currentTab.value = newTab;
  }

  watchEffect(() => {
    localStorage.setItem('lastOpenTab', currentTab.value);
  });

  return { tabs, currentTab, changeTab };
});
