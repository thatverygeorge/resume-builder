<script setup>
import { useSkillsStore } from "@/stores/skills";
import { useTabsStore } from "@/stores/tabs";

const skillsStore = useSkillsStore();
const tabsStore = useTabsStore();
</script>

<template>
  <section
    class="skills"
    role="tabpanel"
    :id="`tabpanel-${tabsStore.currentTab}`"
    :aria-labelledby="`tab-${tabsStore.currentTab}`"
  >
    <ul
      v-if="Array.from(skillsStore.skills).length > 0"
      class="list list--three-column"
    >
      <li v-for="skill in skillsStore.skills.values()" :key="skill.id">
        <div class="input-container skills__input-container">
          <label :for="`label-${skill.id}`">skill</label>
          <input :id="`label-${skill.id}`" v-model="skill.label" type="text" />
        </div>

        <button
          class="button button--delete skills__button skills__button--delete"
          type="button"
          @click="skillsStore.deleteSkill(skill.id)"
        >
          <span aria-hidden="true">delete</span>
          <span class="visually-hidden">delete skill: {{ skill.label }}</span>
        </button>
      </li>
    </ul>

    <button
      class="button button--primary skills__button skills__button--add"
      type="button"
      @click="skillsStore.addSkill"
    >
      add skill
    </button>
  </section>
</template>
