<script setup>
import { useAboutStore } from '@/stores/about';

const aboutStore = useAboutStore();
</script>

<template>
  <section
    v-if="aboutStore.about.name || aboutStore.about.position || aboutStore.about.techStack"
    aria-labelledby="resume-heading"
  >
    <h2 id="resume-heading">
      <span v-if="aboutStore.about.name">
        {{ aboutStore.about.name }}
        <br />
      </span>
      <span v-if="aboutStore.about.position">
        {{ aboutStore.about.position }}
        <br />
      </span>
      <span v-if="aboutStore.about.techStack">[{{ aboutStore.about.techStack }}]</span>
    </h2>
  </section>

  <section v-if="aboutStore.about.description" aria-labelledby="about-heading">
    <h3 id="about-heading">About</h3>
    <p>{{ aboutStore.about.description }}</p>
  </section>
</template>
