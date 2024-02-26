<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <header>
    <div class="container">
      <h1>
        <RouterLink :to="{ name: 'home' }">Resume Builder</RouterLink>
      </h1>
    </div>
  </header>
</template>

<style scoped>
header {
  background-color: var(--green);
}

header .container {
  min-height: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
}

header h1 {
  text-align: center;
  font-size: 3rem;
  color: var(--white);
}

header a {
  color: inherit;
}
</style>
