<script setup>
import { useExperienceStore } from '@/stores/experience';
import { useTabsStore } from '@/stores/tabs';
import ResumeExperience from '@/components/ResumeExperience.vue';

const experienceStore = useExperienceStore();
const tabsStore = useTabsStore();
</script>

<template>
  <section
    class="experience"
    role="tabpanel"
    :id="`tabpanel-${tabsStore.currentTab}`"
    :aria-labelledby="`tab-${tabsStore.currentTab}`"
  >
    <div class="experience__builder">
      <ul v-if="experienceStore.experience.size > 0" class="list">
        <li v-for="experience in experienceStore.experience.values()" :key="experience.id">
          <div class="input-container experience__input-container">
            <label :for="`company-${experience.id}`">company</label>
            <input :id="`company-${experience.id}`" v-model="experience.company" type="text" />
          </div>

          <div class="input-container experience__input-container">
            <label :for="`position-${experience.id}`">position</label>
            <input :id="`position-${experience.id}`" v-model="experience.position" type="text" />
          </div>

          <div class="input-container experience__input-container">
            <label :for="`start-date-${experience.id}`">start date</label>
            <input :id="`start-date-${experience.id}`" v-model="experience.startDate" type="date" />
          </div>

          <div
            v-if="!experience.stillWorkingHere"
            class="input-container experience__input-container"
          >
            <label :for="`end-date-${experience.id}`">end date</label>
            <input :id="`end-date-${experience.id}`" v-model="experience.endDate" type="date" />
          </div>

          <div class="input-container input-container--still-here experience__input-container">
            <input
              :id="`still-working-${experience.id}`"
              v-model="experience.stillWorkingHere"
              type="checkbox"
            />
            <label :for="`still-working-${experience.id}`"> still working here? </label>
          </div>

          <div class="input-container experience__input-container">
            <label :for="`description-${experience.id}`">description</label>
            <textarea
              :id="`description-${experience.id}`"
              v-model="experience.description"
            ></textarea>
          </div>

          <div class="input-container experience__input-container">
            <label :for="`techStack-${experience.id}`">tech stack</label>
            <input :id="`techStack-${experience.id}`" v-model="experience.techStack" type="text" />
          </div>

          <button
            class="button button--delete experience__button experience__button--delete"
            type="button"
            @click="experienceStore.deleteExperience(experience.id)"
          >
            <span aria-hidden="true">delete</span>
            <span class="visually-hidden"> delete experience at: {{ experience.company }} </span>
          </button>
        </li>
      </ul>

      <button
        class="button button--primary experience__button experience__button--add"
        type="button"
        @click="experienceStore.addExperience"
      >
        add experience
      </button>
    </div>

    <section class="experience__preview resume" aria-labelledby="preview-heading">
      <h2 id="preview-heading">Preview</h2>
      <ResumeExperience />
    </section>
  </section>
</template>

<style scoped>
.experience {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  align-items: start;
}

.experience__builder {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.experience__preview {
  background-color: var(--gray);
  padding: 2rem;
  border-radius: 5px;
  grid-template-columns: 1fr;
  position: sticky;
  top: 2rem;
}
.experience__preview h2 {
  text-align: start;
  border-bottom: 2px solid var(--black);
}

@media (width < 960px) {
  .experience {
    grid-template-columns: 1fr;
  }

  .experience__preview {
    order: 0;
    position: initial;
  }

  .experience__builder {
    order: 1;
  }
}
</style>
