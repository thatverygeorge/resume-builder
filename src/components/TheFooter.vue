<template>
  <footer class="footer">
    <div class="container footer__container">
      <h2 class="footer__heading">
        made by
        <a href="https://github.com/thatverygeorge" target="_blank" rel="noopener noreferrer">
          @thatverygeorge
        </a>
      </h2>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: var(--green);
}

.footer__container {
  min-height: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
}

.footer__heading {
  text-align: end;
  font-size: 2rem;
  color: var(--white);
}

.footer__heading a {
  color: inherit;
}
</style>
