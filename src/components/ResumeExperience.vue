<script setup>
import { useExperienceStore } from '@/stores/experience';

const experienceStore = useExperienceStore();
</script>

<template>
  <section v-if="experienceStore.experience.size > 0" aria-labelledby="experience-heading">
    <h3 id="experience-heading">Experience</h3>
    <ul>
      <li v-for="experience in experienceStore.experience.values()" :key="experience.id">
        <article>
          <h4 v-if="experience.company || experience.position">
            <span v-if="experience.company">
              {{ experience.company }},
              <br />
            </span>
            {{ experience.position }}
          </h4>
          <p v-if="experience.startDate || experience.endDate">
            <time :datetime="experience.startDate.split('-').slice(0, 2).join('-')">
              {{ experience.startDate.split('-').reverse().slice(1).join('/') }}
            </time>
            <span> - </span>
            <span v-if="experience.stillWorkingHere">present</span>
            <time v-else :datetime="experience.endDate.split('-').slice(0, 2).join('-')">
              {{ experience.endDate.split('-').reverse().slice(1).join('/') }}
            </time>
          </p>
          <p v-if="experience.description">
            {{ experience.description }}
          </p>
          <p v-if="experience.techStack">Tech stack: {{ experience.techStack }}</p>
        </article>
      </li>
    </ul>
  </section>
</template>
