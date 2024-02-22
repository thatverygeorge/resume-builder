<script setup>
import { useAboutStore } from "@/stores/about";

const aboutStore = useAboutStore();
</script>

<template>
  <section
    v-if="aboutStore.about.name && aboutStore.about.position"
    aria-labelledby="resume-heading"
  >
    <h2 id="resume-heading">
      {{ aboutStore.about.name }}
      <br />
      {{ aboutStore.about.position }}
      <br />
      [{{ aboutStore.about.techStack }}]
    </h2>
  </section>

  <section v-if="aboutStore.about.description" aria-labelledby="about-heading">
    <h2 id="about-heading">About</h2>
    <p>{{ aboutStore.about.description }}</p>
  </section>
</template>
