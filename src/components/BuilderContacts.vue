<script setup>
import { useContactsStore } from '@/stores/contacts';
import { useTabsStore } from '@/stores/tabs';
import ResumeContacts from '@/components/ResumeContacts.vue';

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
    <div class="contacts__builder">
      <ul v-if="contactsStore.contacts.size > 0" class="list list--two-column">
        <li v-for="contact in contactsStore.contacts.values()" :key="contact.id">
          <div class="input-container contacts__input-container">
            <label :for="`label-${contact.id}`">label</label>
            <input :id="`label-${contact.id}`" v-model="contact.label" type="text" />
          </div>

          <div class="input-container contacts__input-container">
            <label :for="`value-${contact.id}`">value</label>
            <input :id="`value-${contact.id}`" v-model="contact.value" type="text" />
          </div>

          <div class="input-container contacts__input-container">
            <label :for="`link-${contact.id}`">link</label>
            <input :id="`link-${contact.id}`" v-model="contact.url" type="url" />
          </div>

          <button
            class="button button--delete contacts__button contacts__button--delete"
            type="button"
            @click="contactsStore.deleteContact(contact.id)"
          >
            <span aria-hidden="true">delete</span>
            <span class="visually-hidden">delete contact: {{ contact.label }}</span>
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
    </div>

    <section class="contacts__preview resume" aria-labelledby="preview-heading">
      <h2 id="preview-heading">Preview</h2>
      <ResumeContacts />
    </section>
  </section>
</template>

<style scoped>
.contacts {
  display: grid;
  grid-template-columns: 1fr 440px;
  gap: 2rem;
  align-items: start;
}

.contacts__builder {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.contacts__preview {
  background-color: var(--gray);
  padding: 2rem;
  border-radius: 5px;
  grid-template-columns: 1fr;
  position: sticky;
  top: 2rem;
}
.contacts__preview h2 {
  text-align: start;
  border-bottom: 2px solid var(--black);
}

@media (width < 960px) {
  .contacts {
    grid-template-columns: 1fr;
  }

  .contacts__preview {
    order: 0;
    position: initial;
  }

  .contacts__builder {
    order: 1;
  }
}
</style>
