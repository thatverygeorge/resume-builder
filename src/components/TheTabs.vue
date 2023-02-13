<script setup>
import { useTabsStore } from "@/stores/tabs";

const tabsStore = useTabsStore();

function onKeydown({ key }) {
  const currentButton = document.activeElement;
  const nextButton =
    key === "ArrowRight"
      ? currentButton.nextElementSibling
      : currentButton.previousElementSibling;

  if (nextButton) {
    nextButton.focus();
  } else {
    key === "ArrowRight"
      ? currentButton.parentElement.firstElementChild.focus()
      : currentButton.parentElement.lastElementChild.focus();
  }
}
</script>

<template>
  <section
    class="tabs"
    role="tablist"
    aria-label="tabs"
    @keydown.left="onKeydown"
    @keydown.right="onKeydown"
  >
    <button
      v-for="(_, tab) in tabsStore.tabs"
      :key="tab"
      class="button button--primary tabs__button"
      :class="{ 'tabs__button--active': tabsStore.currentTab === tab }"
      @click="tabsStore.changeTab(tab)"
      role="tab"
      :id="`tab-${tab}`"
      :aria-selected="tabsStore.currentTab === tab"
      :aria-controls="`tabpanel-${tab}`"
      :tabindex="tabsStore.currentTab === tab ? 0 : -1"
    >
      {{ tab }}
    </button>
  </section>
</template>

<style scoped>
.tabs {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}
.tabs__button--active {
  outline: none;
  color: var(--white);
  background-color: var(--black);
  border-color: var(--black);
}

.tabs__button--active:focus-visible {
  color: var(--white);
  background-color: var(--black);
  border-color: var(--black);
  box-shadow: 5px 5px 0 var(--green);
}

@media (hover: hover) {
  .tabs__button--active:hover {
    color: var(--white);
    background-color: var(--black);
    border-color: var(--black);
    box-shadow: 5px 5px 0 var(--green);
  }
}

@media (max-width: 560px) {
  .tabs {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-content: start;
    gap: 1rem;
  }
}
</style>
