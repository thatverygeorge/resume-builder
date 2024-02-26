<script setup>
import { useExperienceStore } from '@/stores/experience';
import { useTabsStore } from '@/stores/tabs';

const experienceStore = useExperienceStore();
const tabsStore = useTabsStore();
</script>

<template>
  <section
    role="tabpanel"
    :id="`tabpanel-${tabsStore.currentTab}`"
    :aria-labelledby="`tab-${tabsStore.currentTab}`"
  >
    <ul v-if="experienceStore.experience.size > 0" class="list">
      <li v-for="experience in experienceStore.experience.values()" :key="experience.id">
        <div class="input-container">
          <label :for="`company-${experience.id}`">company</label>
          <input :id="`company-${experience.id}`" v-model="experience.company" type="text" />
        </div>

        <div class="input-container">
          <label :for="`position-${experience.id}`">position</label>
          <input :id="`position-${experience.id}`" v-model="experience.position" type="text" />
        </div>

        <div class="input-container">
          <label :for="`start-date-${experience.id}`">start date</label>
          <input :id="`start-date-${experience.id}`" v-model="experience.startDate" type="date" />
        </div>

        <div v-if="!experience.stillWorkingHere" class="input-container">
          <label :for="`end-date-${experience.id}`">end date</label>
          <input :id="`end-date-${experience.id}`" v-model="experience.endDate" type="date" />
        </div>

        <div class="input-container input-container--still-here">
          <input
            :id="`still-working-${experience.id}`"
            v-model="experience.stillWorkingHere"
            type="checkbox"
          />
          <label :for="`still-working-${experience.id}`"> still working here? </label>
        </div>

        <div class="input-container">
          <label :for="`description-${experience.id}`">description</label>
          <textarea
            :id="`description-${experience.id}`"
            v-model="experience.description"
          ></textarea>
        </div>

        <div class="input-container">
          <label :for="`techStack-${experience.id}`">tech stack</label>
          <input :id="`techStack-${experience.id}`" v-model="experience.techStack" type="text" />
        </div>

        <button
          class="button button--delete"
          type="button"
          @click="experienceStore.deleteExperience(experience.id)"
        >
          <span aria-hidden="true">delete</span>
          <span class="visually-hidden"> delete experience at: {{ experience.company }} </span>
        </button>
      </li>
    </ul>

    <button
      class="button button--primary button--add"
      type="button"
      @click="experienceStore.addExperience"
    >
      add experience
    </button>
  </section>
</template>
