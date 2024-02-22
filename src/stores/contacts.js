import { ref, watchEffect } from "vue";
import { defineStore } from "pinia";
import { nanoid } from "nanoid";

export const useContactsStore = defineStore("contacts", () => {
  const contacts = ref(new Map(JSON.parse(localStorage.getItem("contacts"))));

  function addContact() {
    const id = nanoid();

    contacts.value.set(id, {
      id,
      label: "",
      value: "",
      url: "",
    });
  }

  function deleteContact(id) {
    contacts.value.delete(id);
  }

  watchEffect(() => {
    localStorage.setItem(
      "contacts",
      JSON.stringify(Array.from(contacts.value))
    );
  });

  return { contacts, addContact, deleteContact };
});
