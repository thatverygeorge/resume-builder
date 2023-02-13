import { ref, watch } from "vue";
import { defineStore } from "pinia";
import { nanoid } from "nanoid";

export const useLanguagesStore = defineStore("languages", () => {
  const languages = ref(new Map(JSON.parse(localStorage.getItem("languages"))));

  function addLanguage() {
    const id = nanoid();

    languages.value.set(id, {
      id,
      label: "",
      value: "",
    });
  }

  function deleteLanguage(id) {
    languages.value.delete(id);
  }

  watch(languages.value, () => {
    localStorage.setItem(
      "languages",
      JSON.stringify(Array.from(languages.value))
    );
  });

  return { languages, addLanguage, deleteLanguage };
});
