<script setup>
import { RouterView } from 'vue-router';
import TheHeader from './components/TheHeader.vue';

function print() {
  window.print();
}
</script>

<template>
  <TheHeader />

  <main class="main">
    <div class="container main__container">
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
    </div>
  </main>
</template>

<style scoped>
.main__container {
  padding-top: 5rem;
  padding-bottom: 4rem;
  display: grid;
  grid-template-columns: 1fr;
  align-content: start;
  gap: 3rem;
  position: relative;
}

.main__button--go-back,
.main__button--build-resume,
.main__button--print {
  position: absolute;
  transform: translateY(-50%);
}

.main__button--go-back {
  left: 2rem;
}

.main__button--build-resume,
.main__button--print {
  right: 2rem;
}
</style>
