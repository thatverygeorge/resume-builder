<script setup>
import { useEducationStore } from '@/stores/education';

const educationStore = useEducationStore();
</script>

<template>
  <section v-if="educationStore.education.size > 0" aria-labelledby="education-heading">
    <h3>Education</h3>
    <ul>
      <li v-for="education in educationStore.education.values()" :key="education.id">
        <article>
          <h4 v-if="education.academy || education.course">
            <span v-if="education.academy">
              {{ education.academy }},
              <br />
            </span>
            {{ education.course }}
          </h4>
          <p v-if="education.startDate || education.endDate">
            <time :datetime="education.startDate.split('-').slice(0, 2).join('-')">
              {{ education.startDate.split('-').reverse().slice(1).join('/') }}
            </time>
            <span> - </span>
            <span v-if="education.stillStudyingHere">present</span>
            <time v-else :datetime="education.endDate.split('-').slice(0, 2).join('-')">
              {{ education.endDate.split('-').reverse().slice(1).join('/') }}
            </time>
          </p>
          <p v-if="education.description">
            {{ education.description }}
          </p>
        </article>
      </li>
    </ul>
  </section>
</template>
