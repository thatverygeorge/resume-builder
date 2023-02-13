<script setup>
import { useSkillsStore } from "@/stores/skills";

const skillsStore = useSkillsStore();
</script>

<template>
  <section
    v-if="Array.from(skillsStore.skills).length > 0"
    class="skills resume__skills"
    aria-labelledby="skills-heading"
  >
    <h2 class="heading heading--xl skills__heading" id="skills-heading">
      Skills
    </h2>
    <ul class="skills__list" role="list">
      <li
        v-for="skill in skillsStore.skills.values()"
        :key="skill.id"
        class="skills__item"
      >
        {{ skill.label }}
      </li>
    </ul>
  </section>
</template>
