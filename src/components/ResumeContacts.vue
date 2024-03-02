<script setup>
import { useContactsStore } from '@/stores/contacts';

const contactsStore = useContactsStore();
</script>

<template>
  <section
    v-if="contactsStore.contacts.size > 0"
    class="resume__contacts"
    aria-labelledby="contacts-heading"
  >
    <h3 id="contacts-heading">Contacts</h3>
    <ul>
      <li v-for="contact in contactsStore.contacts.values()" :key="contact.id">
        <span v-if="contact.label">{{ contact.label }}: </span>
        <a v-if="contact.url" :href="contact.url" target="_blank" rel="noopener noreferrer">
          {{ contact.value }}
        </a>
        <span v-else>{{ contact.value }}</span>
      </li>
    </ul>
  </section>
</template>

<style scoped>
a {
  word-break: break-all;
}
</style>
