<script setup>
import { useSkillsStore } from '@/stores/skills';
import { useTabsStore } from '@/stores/tabs';
import TheButton from '@/components/TheButton.vue';

const skillsStore = useSkillsStore();
const tabsStore = useTabsStore();
</script>

<template>
  <section
    role="tabpanel"
    :id="`tabpanel-${tabsStore.currentTab}`"
    :aria-labelledby="`tab-${tabsStore.currentTab}`"
  >
    <ul v-if="skillsStore.skills.size > 0" class="list list--two-column">
      <li v-for="skill in skillsStore.skills.values()" :key="skill.id">
        <div class="input-container">
          <label :for="`label-${skill.id}`">skill</label>
          <input :id="`label-${skill.id}`" v-model="skill.label" type="text" />
        </div>

        <TheButton class="button--delete" @click="skillsStore.deleteSkill(skill.id)">
          <span aria-hidden="true">delete</span>
          <span class="visually-hidden">delete skill: {{ skill.label }}</span>
        </TheButton>
      </li>
    </ul>

    <TheButton class="button--add" v-btn-primary @click="skillsStore.addSkill">
      add skill
    </TheButton>
  </section>
</template>
