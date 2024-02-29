<script setup></script>

<template>
  <button class="button" type="button">
    <slot></slot>
  </button>
</template>

<style scoped>
.button {
  outline: none;
  cursor: pointer;
  background-color: var(--white);
  font-family: inherit;
  max-width: 25rem;
  color: var(--black);
  border: 1px solid var(--green);
  border-radius: 0.5rem;
  padding: 1rem;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  transition: all 150ms linear;
  text-transform: uppercase;
  font-weight: bold;
}

.button:focus-visible {
  color: var(--white);
  background-color: var(--black);
  border-color: var(--black);
}

.button--primary {
  padding: 2rem;
  border-width: 2px;
}

.button--primary:focus-visible {
  color: var(--black);
  background-color: var(--white);
  border-color: var(--green);
  box-shadow: 5px 5px 0 var(--green);
}

@media (hover: hover) {
  .button:hover {
    color: var(--white);
    background-color: var(--black);
    border-color: var(--black);
  }

  .button--primary:hover {
    color: var(--black);
    background-color: var(--white);
    border-color: var(--green);
    box-shadow: 5px 5px 0 var(--green);
  }
}
</style>
