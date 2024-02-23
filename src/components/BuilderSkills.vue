<script setup>
import { useSkillsStore } from '@/stores/skills';
import { useTabsStore } from '@/stores/tabs';
import ResumeSkills from '@/components/ResumeSkills.vue';

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
    <div class="skills__builder">
      <ul v-if="skillsStore.skills.size > 0" class="list list--two-column">
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
    </div>

    <section class="skills__preview resume" aria-labelledby="preview-heading">
      <h2 id="preview-heading">Preview</h2>
      <ResumeSkills />
    </section>
  </section>
</template>

<style scoped>
.skills {
  display: grid;
  grid-template-columns: 1fr 440px;
  gap: 2rem;
  align-items: start;
}

.skills__builder {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.skills__preview {
  background-color: var(--gray);
  padding: 2rem;
  border-radius: 5px;
  grid-template-columns: 1fr;
  position: sticky;
  top: 2rem;
}
.skills__preview h2 {
  text-align: start;
  border-bottom: 2px solid var(--black);
}

@media (width < 960px) {
  .skills {
    grid-template-columns: 1fr;
  }

  .skills__preview {
    order: 0;
    position: initial;
  }

  .skills__builder {
    order: 1;
  }
}
</style>
