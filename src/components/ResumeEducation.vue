<script setup>
import { useEducationStore } from "@/stores/education";

const educationStore = useEducationStore();
</script>

<template>
  <section
    v-if="Array.from(educationStore.education).length > 0"
    class="education resume__education"
    aria-labelledby="education-heading"
  >
    <h2 class="heading heading--xl education__heading" id="education-heading">
      Education
    </h2>
    <ul class="education__list" role="list">
      <li
        v-for="education in educationStore.education.values()"
        :key="education.id"
        class="education__item"
      >
        <article class="education-card education__card">
          <h3 class="heading heading--l education-card__heading">
            {{ education.academy }},
            <br />
            {{ education.course }}
          </h3>
          <span class="card-dates education-card__dates">
            <time
              :datetime="education.startDate.split('-').slice(0, 2).join('-')"
            >
              {{ education.startDate.split("-").reverse().slice(1).join("/") }}
            </time>
            -
            <time v-if="education.stillStudyingHere">present</time>
            <time
              v-else
              :datetime="education.endDate.split('-').slice(0, 2).join('-')"
            >
              {{ education.endDate.split("-").reverse().slice(1).join("/") }}
            </time>
          </span>
          <p v-if="education.description" class="education-card__achievement">
            {{ education.description }}
          </p>
        </article>
      </li>
    </ul>
  </section>
</template>
