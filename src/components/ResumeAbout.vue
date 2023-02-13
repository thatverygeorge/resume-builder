<script setup>
import { useAboutStore } from "@/stores/about";

const aboutStore = useAboutStore();
</script>

<template>
  <section
    v-if="aboutStore.about.name && aboutStore.about.position"
    class="whoami resume__whoami"
    aria-labelledby="resume-heading"
  >
    <h2 class="heading heading--2xl whoami__heading" id="resume-heading">
      {{ aboutStore.about.name }}
      <br />
      {{ aboutStore.about.position }}
      <template v-if="aboutStore.about.techStack">
        <br />
        ({{ aboutStore.about.techStack }})
      </template>
    </h2>
  </section>

  <section
    v-if="aboutStore.about.description"
    class="about resume__about"
    aria-labelledby="about-heading"
  >
    <h2 class="heading heading--xl about__heading" id="about-heading">About</h2>
    <p class="about__text">
      {{ aboutStore.about.description }}
    </p>
  </section>
</template>
