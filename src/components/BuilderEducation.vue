<script setup>
import { useEducationStore } from "@/stores/education";
import { useTabsStore } from "@/stores/tabs";

const educationStore = useEducationStore();
const tabsStore = useTabsStore();
</script>

<template>
  <section
    class="education"
    role="tabpanel"
    :id="`tabpanel-${tabsStore.currentTab}`"
    :aria-labelledby="`tab-${tabsStore.currentTab}`"
  >
    <ul v-if="Array.from(educationStore.education).length > 0" class="list">
      <li
        v-for="education in educationStore.education.values()"
        :key="education.id"
      >
        <div class="input-container education__input-container">
          <label :for="`academy-${education.id}`">academy</label>
          <input
            :id="`academy-${education.id}`"
            v-model="education.academy"
            type="text"
          />
        </div>

        <div class="input-container education__input-container">
          <label :for="`course-${education.id}`">course</label>
          <input
            :id="`course-${education.id}`"
            v-model="education.course"
            type="text"
          />
        </div>

        <div class="input-container education__input-container">
          <label :for="`start-date-${education.id}`">start date</label>
          <input
            :id="`start-date-${education.id}`"
            v-model="education.startDate"
            type="date"
          />
        </div>

        <div
          v-if="!education.stillStudyingHere"
          class="input-container education__input-container"
        >
          <label :for="`end-date-${education.id}`">end date</label>
          <input
            :id="`end-date-${education.id}`"
            v-model="education.endDate"
            type="date"
          />
        </div>

        <div
          class="input-container input-container--still-here education__input-container"
        >
          <input
            :id="`still-studying-${education.id}`"
            v-model="education.stillStudyingHere"
            type="checkbox"
          />
          <label :for="`still-studying-${education.id}`">
            still studying here?
          </label>
        </div>

        <div class="input-container education__input-container">
          <label :for="`description-${education.id}`">description</label>
          <textarea
            :id="`description-${education.id}`"
            v-model="education.description"
          ></textarea>
        </div>

        <button
          class="button button--delete education__button education__button--delete"
          type="button"
          @click="educationStore.deleteEducation(education.id)"
        >
          <span aria-hidden="true">delete</span>
          <span class="visually-hidden">
            delete education at: {{ education.academy }}
          </span>
        </button>
      </li>
    </ul>

    <button
      class="button button--primary education__button education__button--add"
      type="button"
      @click="educationStore.addEducation"
    >
      add education
    </button>
  </section>
</template>
