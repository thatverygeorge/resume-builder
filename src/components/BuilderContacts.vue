<script setup>
import { useContactsStore } from '@/stores/contacts';
import { useTabsStore } from '@/stores/tabs';
import TheButton from '@/components/TheButton.vue';

const contactsStore = useContactsStore();
const tabsStore = useTabsStore();
</script>

<template>
  <section
    role="tabpanel"
    :id="`tabpanel-${tabsStore.currentTab}`"
    :aria-labelledby="`tab-${tabsStore.currentTab}`"
  >
    <ul v-if="contactsStore.contacts.size > 0" class="list list--two-column">
      <li v-for="contact in contactsStore.contacts.values()" :key="contact.id">
        <div class="input-container">
          <label :for="`label-${contact.id}`">label</label>
          <input :id="`label-${contact.id}`" v-model="contact.label" type="text" />
        </div>

        <div class="input-container">
          <label :for="`value-${contact.id}`">value</label>
          <input :id="`value-${contact.id}`" v-model="contact.value" type="text" />
        </div>

        <div class="input-container">
          <label :for="`link-${contact.id}`">link</label>
          <input :id="`link-${contact.id}`" v-model="contact.url" type="url" />
        </div>

        <TheButton class="button--delete" @click="contactsStore.deleteContact(contact.id)">
          <span aria-hidden="true">delete</span>
          <span class="visually-hidden">delete contact: {{ contact.label }}</span>
        </TheButton>

        <!-- <button
          class="button button--delete"
          type="button"
          @click="contactsStore.deleteContact(contact.id)"
        >
          <span aria-hidden="true">delete</span>
          <span class="visually-hidden">delete contact: {{ contact.label }}</span>
        </button> -->
      </li>
    </ul>

    <TheButton class="button--add" v-btn-primary @click="contactsStore.addContact">
      add contact
    </TheButton>
  </section>
</template>
