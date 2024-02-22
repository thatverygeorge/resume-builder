<script setup>
import { useSkillsStore } from "@/stores/skills";

const skillsStore = useSkillsStore();
</script>

<template>
  <section
    v-if="skillsStore.skills.size > 0"
    class="skills resume__skills"
    aria-labelledby="skills-heading"
  >
    <h3 id="skills-heading">Skills</h3>
    <ul>
      <li v-for="skill in skillsStore.skills.values()" :key="skill.id">
        {{ skill.label }}
      </li>
    </ul>
  </section>
</template>

<style scoped>
.resume__skills ul {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 2rem;
  align-content: start;
}

@media (width < 480px) {
  .resume__skills ul {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
