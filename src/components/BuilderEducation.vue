<script setup>
import { useEducationStore } from '@/stores/education';
import { useTabsStore } from '@/stores/tabs';
import ResumeEducation from '@/components/ResumeEducation.vue';

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
    <div class="education__builder">
      <ul v-if="educationStore.education.size > 0" class="list">
        <li v-for="education in educationStore.education.values()" :key="education.id">
          <div class="input-container education__input-container">
            <label :for="`academy-${education.id}`">academy</label>
            <input :id="`academy-${education.id}`" v-model="education.academy" type="text" />
          </div>

          <div class="input-container education__input-container">
            <label :for="`course-${education.id}`">course</label>
            <input :id="`course-${education.id}`" v-model="education.course" type="text" />
          </div>

          <div class="input-container education__input-container">
            <label :for="`start-date-${education.id}`">start date</label>
            <input :id="`start-date-${education.id}`" v-model="education.startDate" type="date" />
          </div>

          <div
            v-if="!education.stillStudyingHere"
            class="input-container education__input-container"
          >
            <label :for="`end-date-${education.id}`">end date</label>
            <input :id="`end-date-${education.id}`" v-model="education.endDate" type="date" />
          </div>

          <div class="input-container input-container--still-here education__input-container">
            <input
              :id="`still-studying-${education.id}`"
              v-model="education.stillStudyingHere"
              type="checkbox"
            />
            <label :for="`still-studying-${education.id}`"> still studying here? </label>
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
            <span class="visually-hidden"> delete education at: {{ education.academy }} </span>
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
    </div>

    <section class="education__preview resume" aria-labelledby="preview-heading">
      <h2 id="preview-heading">Preview</h2>
      <ResumeEducation />
    </section>
  </section>
</template>

<style scoped>
.education {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  align-items: start;
}

.education__builder {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.education__preview {
  background-color: var(--gray);
  padding: 2rem;
  border-radius: 5px;
  grid-template-columns: 1fr;
  position: sticky;
  top: 2rem;
}
.education__preview h2 {
  text-align: start;
  border-bottom: 2px solid var(--black);
}

@media (width < 960px) {
  .education {
    grid-template-columns: 1fr;
  }

  .education__preview {
    order: 0;
    position: initial;
  }

  .education__builder {
    order: 1;
  }
}
</style>
