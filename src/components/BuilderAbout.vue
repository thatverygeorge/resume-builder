<script setup>
import { useAboutStore } from '@/stores/about';
import { useTabsStore } from '@/stores/tabs';
import ResumeAbout from '@/components/ResumeAbout.vue';

const aboutStore = useAboutStore();
const tabsStore = useTabsStore();
</script>

<template>
  <section
    class="about"
    role="tabpanel"
    :id="`tabpanel-${tabsStore.currentTab}`"
    :aria-labelledby="`tab-${tabsStore.currentTab}`"
  >
    <div class="about__builder">
      <div class="input-container about__input-container">
        <label for="name">name</label>
        <input id="name" v-model="aboutStore.about.name" type="text" />
      </div>

      <div class="input-container about__input-container">
        <label for="position">position</label>
        <input id="position" v-model="aboutStore.about.position" type="text" />
      </div>

      <div class="input-container about__input-container">
        <label for="techStack">tech stack</label>
        <input id="techStack" v-model="aboutStore.about.techStack" type="text" />
      </div>

      <div class="input-container about__input-container">
        <label for="description">description</label>
        <textarea id="description" v-model="aboutStore.about.description"></textarea>
      </div>

      <div class="input-container about__input-container">
        <label for="accentColor">accent color</label>
        <input id="accentColor" v-model="aboutStore.about.accentColor" type="color" />
      </div>
    </div>

    <section class="about__preview resume" aria-labelledby="preview-heading">
      <h2 id="preview-heading">Preview</h2>
      <ResumeAbout />
    </section>
  </section>
</template>

<style scoped>
.about {
  display: grid;
  grid-template-columns: 1fr 440px;
  gap: 2rem;
  align-items: start;
}

.about__builder {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.about__preview {
  background-color: var(--gray);
  padding: 2rem;
  border-radius: 5px;
  grid-template-columns: 1fr;
  position: sticky;
  top: 2rem;
}

.about__preview h2 {
  text-align: start;
  border-bottom: 2px solid var(--black);
}

@media (width < 960px) {
  .about {
    grid-template-columns: 1fr;
  }

  .about__preview {
    order: 0;
    position: initial;
    top: 0;
  }

  .about__builder {
    order: 1;
  }
}
</style>
