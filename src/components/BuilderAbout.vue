<script setup>
import { useAboutStore } from '@/stores/about';
import { useTabsStore } from '@/stores/tabs';

const aboutStore = useAboutStore();
const tabsStore = useTabsStore();
</script>

<template>
  <section
    role="tabpanel"
    :id="`tabpanel-${tabsStore.currentTab}`"
    :aria-labelledby="`tab-${tabsStore.currentTab}`"
  >
    <div class="input-container">
      <label for="name">name</label>
      <input id="name" v-model="aboutStore.about.name" type="text" />
    </div>

    <div class="input-container">
      <label for="position">position</label>
      <input id="position" v-model="aboutStore.about.position" type="text" />
    </div>

    <div class="input-container">
      <label for="techStack">tech stack</label>
      <input id="techStack" v-model="aboutStore.about.techStack" type="text" />
    </div>

    <div class="input-container">
      <label for="description">description</label>
      <textarea id="description" v-model="aboutStore.about.description"></textarea>
    </div>

    <div class="input-container">
      <label for="accentColor">accent color</label>
      <input id="accentColor" v-model="aboutStore.about.accentColor" type="color" />
    </div>
  </section>
</template>
