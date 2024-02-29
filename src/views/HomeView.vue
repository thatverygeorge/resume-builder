<script setup>
import { useTabsStore } from '@/stores/tabs';
import TheTabs from '@/components/TheTabs.vue';

const tabsStore = useTabsStore();
</script>

<template>
  <TheTabs />

  <div class="builder" :class="`builder--${tabsStore.currentTab}`">
    <component :is="tabsStore.tabs[tabsStore.currentTab][0]"></component>

    <div class="preview">
      <component :is="tabsStore.tabs[tabsStore.currentTab][1]"></component>
    </div>
  </div>
</template>
