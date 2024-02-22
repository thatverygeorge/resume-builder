<script setup>
import { useLanguagesStore } from "@/stores/languages";

const languagesStore = useLanguagesStore();
</script>

<template>
  <section
    v-if="languagesStore.languages.size > 0"
    aria-labelledby="languages-heading"
  >
    <h3 id="languages-heading">Languages</h3>
    <ul>
      <li
        v-for="language in languagesStore.languages.values()"
        :key="language.id"
      >
        {{ language.label }}: {{ language.value }}
      </li>
    </ul>
  </section>
</template>
