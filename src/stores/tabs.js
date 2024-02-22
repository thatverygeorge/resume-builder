import { ref, shallowRef, watch } from "vue";
import { defineStore } from "pinia";
import BuilderAbout from "@/components/BuilderAbout.vue";
import BuilderContacts from "@/components/BuilderContacts.vue";
import BuilderSkills from "@/components/BuilderSkills.vue";
import BuilderLanguages from "@/components/BuilderLanguages.vue";
import BuilderExperience from "@/components/BuilderExperience.vue";
import BuilderEducation from "@/components/BuilderEducation.vue";
import BuilderProjects from "@/components/BuilderProjects.vue";

const TABS = {
  about: BuilderAbout,
  contacts: BuilderContacts,
  skills: BuilderSkills,
  languages: BuilderLanguages,
  experience: BuilderExperience,
  projects: BuilderProjects,
  education: BuilderEducation,
};

const DEFAULT_TAB = "about";

export const useTabsStore = defineStore("tabs", () => {
  const tabs = shallowRef(TABS);
  const currentTab = ref(localStorage.getItem("lastOpenTab") || DEFAULT_TAB);

  function changeTab(newTab) {
    currentTab.value = newTab;
  }

  watch(currentTab, () => {
    localStorage.setItem("lastOpenTab", currentTab.value);
  });

  return { tabs, currentTab, changeTab };
});
