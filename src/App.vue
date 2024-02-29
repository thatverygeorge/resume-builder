<script setup>
import { RouterView } from 'vue-router';
import { useAboutStore } from '@/stores/about';
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';
import TheButton from '@/components/TheButton.vue';

const aboutStore = useAboutStore();
aboutStore.setCurrentAccentColor();

function print() {
  window.print();
}
</script>

<template>
  <TheHeader />

  <main class="main container">
    <TheButton
      v-if="$route.name !== 'home'"
      class="main__button main__button--go-back"
      v-btn-primary
      @click="$router.back"
    >
      go back
    </TheButton>

    <TheButton
      v-if="$route.name === 'home'"
      class="main__button main__button--build-resume"
      v-btn-primary
      @click="$router.push({ name: 'resume' })"
    >
      build resume
    </TheButton>

    <TheButton
      v-if="$route.name === 'resume'"
      class="main__button main__button--print"
      v-btn-primary
      @click="print"
    >
      print
    </TheButton>

    <RouterView />
  </main>

  <TheFooter />
</template>

<style scoped>
.main {
  padding-top: 4rem;
  padding-bottom: 4rem;
  height: 100%;
  display: grid;
  align-content: start;
  gap: 2rem;
  position: relative;
}

.main__button {
  position: absolute;
  transform: translateY(-50%);
}

.main__button--go-back {
  left: 1rem;
}

.main__button--build-resume,
.main__button--print {
  right: 1rem;
}
</style>
