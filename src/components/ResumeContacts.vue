<script setup>
import { useContactsStore } from '@/stores/contacts';

const contactsStore = useContactsStore();
</script>

<template>
  <section
    v-if="contactsStore.contacts.size > 0"
    class="contacts resume__contacts"
    aria-labelledby="contacts-heading"
  >
    <h3 id="contacts-heading">Contacts</h3>
    <ul>
      <li v-for="contact in contactsStore.contacts.values()" :key="contact.id">
        <span>{{ contact.label }}:</span>
        <a v-if="contact.url" :href="contact.url" target="_blank" rel="noopener noreferrer">
          <span>{{ contact.value }}</span>
        </a>
        <span v-else>{{ contact.value }}</span>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.resume__contacts li {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 0.5rem;
  position: relative;
}

.resume__contacts li:before {
  content: '•';
  position: absolute;
  left: -1.5rem;
  top: 0;
}

@media (width < 480px) {
  .resume__contacts li {
    flex-direction: column;
  }

  .resume__contacts li > span:nth-of-type(2),
  .resume__contacts li > a {
    padding-left: 1rem;
  }
}
</style>
