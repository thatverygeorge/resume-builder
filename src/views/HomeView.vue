<script setup>
import { useTabsStore } from '@/stores/tabs';
import TheTabs from '@/components/TheTabs.vue';

const tabsStore = useTabsStore();
</script>

<template>
  <TheTabs />

  <component :is="tabsStore.tabs[tabsStore.currentTab]"></component>
</template>
