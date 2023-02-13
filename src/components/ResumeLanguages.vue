<script setup>
import { useLanguagesStore } from "@/stores/languages";

const languagesStore = useLanguagesStore();
</script>

<template>
  <section
    v-if="Array.from(languagesStore.languages).length > 0"
    class="languages resume__languages"
    aria-labelledby="languages-heading"
  >
    <h2 class="heading heading--xl languages__heading" id="languages-heading">
      Languages
    </h2>
    <ul class="languages__list" role="list">
      <li
        v-for="language in languagesStore.languages.values()"
        :key="language.id"
        class="languages__item"
      >
        {{ language.label }}: {{ language.value }}
      </li>
    </ul>
  </section>
</template>
