<script setup>
import { useLanguagesStore } from '@/stores/languages';
import { useTabsStore } from '@/stores/tabs';
import ResumeLanguages from '@/components/ResumeLanguages.vue';

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
    <div class="languages__builder">
      <ul v-if="languagesStore.languages.size > 0" class="list list--two-column">
        <li v-for="language in languagesStore.languages.values()" :key="language.id">
          <div class="input-container languages__input-container">
            <label :for="`label-${language.id}`">language</label>
            <input :id="`label-${language.id}`" v-model="language.label" type="text" />
          </div>

          <div class="input-container languages__input-container">
            <label :for="`value-${language.id}`">level</label>
            <input :id="`value-${language.id}`" v-model="language.value" type="text" />
          </div>

          <button
            class="button button--delete languages__button languages__button--delete"
            type="button"
            @click="languagesStore.deleteLanguage(language.id)"
          >
            <span aria-hidden="true">delete</span>
            <span class="visually-hidden"> delete language: {{ language.label }} </span>
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
    </div>

    <section class="languages__preview resume" aria-labelledby="preview-heading">
      <h2 id="preview-heading">Preview</h2>
      <ResumeLanguages />
    </section>
  </section>
</template>

<style scoped>
.languages {
  display: grid;
  grid-template-columns: 1fr 440px;
  gap: 2rem;
  align-items: start;
}

.languages__builder {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.languages__preview {
  background-color: var(--gray);
  padding: 2rem;
  border-radius: 5px;
  grid-template-columns: 1fr;
  position: sticky;
  top: 2rem;
}
.languages__preview h2 {
  text-align: start;
  border-bottom: 2px solid var(--black);
}

@media (width < 960px) {
  .languages {
    grid-template-columns: 1fr;
  }

  .languages__preview {
    order: 0;
    position: initial;
  }

  .languages__builder {
    order: 1;
  }
}
</style>
