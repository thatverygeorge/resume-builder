<script setup>
import { useExperienceStore } from "@/stores/experience";

const experienceStore = useExperienceStore();
</script>

<template>
  <section
    v-if="Array.from(experienceStore.experience).length > 0"
    class="experience resume__experience"
    aria-labelledby="experience-heading"
  >
    <h2 class="heading heading--xl experience__heading" id="experience-heading">
      Experience
    </h2>
    <ul class="experience__list" role="list">
      <li
        v-for="experience in experienceStore.experience.values()"
        :key="experience.id"
        class="experience__item"
      >
        <article class="experience-card experience__card">
          <h3 class="heading heading--l experience-card__heading">
            {{ experience.company }},
            <br />
            {{ experience.position }}
          </h3>
          <span class="card-dates experience-card__dates">
            <time
              :datetime="experience.startDate.split('-').slice(0, 2).join('-')"
            >
              {{ experience.startDate.split("-").reverse().slice(1).join("/") }}
            </time>
            -
            <time v-if="experience.stillWorkingHere">present</time>
            <time
              v-else
              :datetime="experience.endDate.split('-').slice(0, 2).join('-')"
            >
              {{ experience.endDate.split("-").reverse().slice(1).join("/") }}
            </time>
          </span>
          <p v-if="experience.description" class="experience-card__achievement">
            {{ experience.description }}
          </p>
        </article>
      </li>
    </ul>
  </section>
</template>
