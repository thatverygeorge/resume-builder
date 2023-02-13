<script setup>
import { useContactsStore } from "@/stores/contacts";
import { useTabsStore } from "@/stores/tabs";

const contactsStore = useContactsStore();
const tabsStore = useTabsStore();
</script>

<template>
  <section
    class="contacts"
    role="tabpanel"
    :id="`tabpanel-${tabsStore.currentTab}`"
    :aria-labelledby="`tab-${tabsStore.currentTab}`"
  >
    <ul
      v-if="Array.from(contactsStore.contacts).length > 0"
      class="list list--two-column"
    >
      <li v-for="contact in contactsStore.contacts.values()" :key="contact.id">
        <div class="input-container contacts__input-container">
          <label :for="`label-${contact.id}`">label</label>
          <input
            :id="`label-${contact.id}`"
            v-model="contact.label"
            type="text"
          />
        </div>

        <div class="input-container contacts__input-container">
          <label :for="`value-${contact.id}`">value</label>
          <input
            :id="`value-${contact.id}`"
            v-model="contact.value"
            type="text"
          />
        </div>

        <div class="input-container contacts__input-container">
          <label :for="`link-${contact.id}`">link</label>
          <input :id="`link-${contact.id}`" v-model="contact.href" type="url" />
        </div>

        <button
          class="button button--delete contacts__button contacts__button--delete"
          type="button"
          @click="contactsStore.deleteContact(contact.id)"
        >
          <span aria-hidden="true">delete</span>
          <span class="visually-hidden">
            delete contact: {{ contact.label }}
          </span>
        </button>
      </li>
    </ul>

    <button
      class="button button--primary contacts__button contacts__button--add"
      type="button"
      @click="contactsStore.addContact"
    >
      add contact
    </button>
  </section>
</template>
