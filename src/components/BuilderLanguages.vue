<script setup>
import { useLanguagesStore } from "@/stores/languages";
import { useTabsStore } from "@/stores/tabs";

const languagesStore = useLanguagesStore();
const tabsStore = useTabsStore();
</script>

<template>
  <section
    class="languages"
    role="tabpanel"
    :id="`tabpanel-${tabsStore.currentTab}`"
    :aria-labelledby="`tab-${tabsStore.currentTab}`"
  >
    <ul
      v-if="Array.from(languagesStore.languages).length > 0"
      class="list list--two-column"
    >
      <li
        v-for="language in languagesStore.languages.values()"
        :key="language.id"
      >
        <div class="input-container languages__input-container">
          <label :for="`label-${language.id}`">language</label>
          <input
            :id="`label-${language.id}`"
            v-model="language.label"
            type="text"
          />
        </div>

        <div class="input-container languages__input-container">
          <label :for="`value-${language.id}`">level</label>
          <input
            :id="`value-${language.id}`"
            v-model="language.value"
            type="text"
          />
        </div>

        <button
          class="button button--delete languages__button languages__button--delete"
          type="button"
          @click="languagesStore.deleteLanguage(language.id)"
        >
          <span aria-hidden="true">delete</span>
          <span class="visually-hidden">
            delete language: {{ language.label }}
          </span>
        </button>
      </li>
    </ul>

    <button
      class="button button--primary languages__button languages__button--add"
      type="button"
      @click="languagesStore.addLanguage"
    >
      add language
    </button>
  </section>
</template>
