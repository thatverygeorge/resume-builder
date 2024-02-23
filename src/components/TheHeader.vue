<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <header class="header">
    <div class="container header__container">
      <h1 class="header__heading">
        <RouterLink :to="{ name: 'home' }">Resume Builder</RouterLink>
      </h1>
    </div>
  </header>
</template>

<style scoped>
.header {
  background-color: var(--green);
}

.header__container {
  min-height: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
}

.header__heading {
  text-align: center;
  font-size: 3rem;
  color: var(--white);
}

.header__heading a {
  color: inherit;
}
</style>
