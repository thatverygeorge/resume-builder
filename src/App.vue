<script setup>
import { RouterView } from 'vue-router';
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';
import { useAboutStore } from '@/stores/about';

const aboutStore = useAboutStore();
aboutStore.setCurrentAccentColor();

function print() {
  window.print();
}
</script>

<template>
  <TheHeader />

  <main class="main container">
    <button
      v-if="$route.name !== 'home'"
      class="button button--primary main__button main__button--go-back"
      type="button"
      @click="$router.back"
    >
      go back
    </button>

    <button
      v-if="$route.name === 'home'"
      class="button button--primary main__button main__button--build-resume"
      type="button"
      @click="$router.push({ name: 'resume' })"
    >
      build resume
    </button>

    <button
      v-if="$route.name === 'resume'"
      class="button button--primary main__button main__button--print"
      type="button"
      @click="print"
    >
      print
    </button>

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
