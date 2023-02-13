<script setup>
import { useContactsStore } from "@/stores/contacts";

const contactsStore = useContactsStore();
</script>

<template>
  <section
    v-if="Array.from(contactsStore.contacts).length > 0"
    class="contacts resume__contacts"
    aria-labelledby="contacts-heading"
  >
    <h2 class="heading heading--xl contacts__heading" id="contacts-heading">
      Contacts
    </h2>
    <ul class="contacts__list" role="list">
      <li
        v-for="contact in contactsStore.contacts.values()"
        :key="contact.id"
        class="contacts__item"
      >
        <span>{{ contact.label }}: </span>
        <a
          v-if="contact.href"
          :href="contact.href"
          class="link contacts__link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>{{ contact.value }}</span>
        </a>
        <span v-else>{{ contact.value }}</span>
      </li>
    </ul>
  </section>
</template>
