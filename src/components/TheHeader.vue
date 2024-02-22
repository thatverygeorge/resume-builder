<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <header class="header">
    <div class="container header__container">
      <h1 class="header__heading">
        <RouterLink :to="{ name: 'home' }">Resume Builder</RouterLink>
      </h1>

      <span class="header__made-by">
        made by
        <a href="https://github.com/thatverygeorge" target="_blank" rel="noopener noreferrer">
          @thatverygeorge
        </a>
      </span>
    </div>
  </header>
</template>

<style scoped>
.header {
  background-color: var(--green);
}

.header__container {
  min-height: 17rem;
  padding-top: 4rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.header__heading {
  margin: 0;
  font-size: 4rem;
  text-shadow: 2px 2px 0 var(--black);
  color: var(--white);
}

.header__heading a {
  color: inherit;
}

.header__made-by {
  font-size: 1.5rem;
  color: var(--white);
  text-shadow: 2px 2px 0 var(--black);
}

.header__made-by a {
  color: inherit;
}

@media (width < 960px) {
  .header__heading {
    font-size: 3rem;
  }
}
</style>
