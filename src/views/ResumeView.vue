<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useAboutStore } from "@/stores/about";
import ResumeAbout from "@/components/ResumeAbout.vue";
import ResumeContacts from "@/components/ResumeContacts.vue";
import ResumeSkills from "@/components/ResumeSkills.vue";
import ResumeLanguages from "@/components/ResumeLanguages.vue";
import ResumeExperience from "@/components/ResumeExperience.vue";
import ResumeEducation from "@/components/ResumeEducation.vue";
import ResumeProjects from "@/components/ResumeProjects.vue";

const resumeSection = ref(null);

const aboutStore = useAboutStore();

onMounted(() => {
  if (aboutStore.about.name !== "" && aboutStore.about.position !== "") {
    document.title = `${aboutStore.about.name} — ${aboutStore.about.position}`;
  }

  resumeSection.value.style.setProperty(
    "--accentColor",
    aboutStore.about.accentColor
  );
});

onUnmounted(() => {
  document.title = "Resume Builder";
});
</script>
<template>
  <section class="resume" ref="resumeSection">
    <div class="column resume__column">
      <ResumeAbout />
      <ResumeContacts />
      <ResumeSkills />
      <ResumeLanguages />
    </div>

    <div class="column resume__column">
      <ResumeExperience />
      <ResumeProjects />
      <ResumeEducation />
    </div>
  </section>
</template>

<style>
.resume {
  --h2-text-color: var(--black);
  --h3-text-color: var(--black);
  --h3-border-color: var(--accentColor);
  --h4-text-color: var(--black);

  --text-color: var(--black);

  --link-text-color: var(--black);
  --link-outline-color: var(--black);
  --link-shadow-color: var(--accentColor);

  --link-text-color-hover: var(--black);

  --dates-color: var(--gray);

  font-stretch: 85%;
  display: grid;
  grid-template-columns: 440px 1fr;
  gap: 2rem;
  align-content: start;
}

.resume div {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 2rem;
}

.resume section,
.resume article {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 1rem;
}

.resume ul {
  list-style: disc;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-left: 2rem;
}

.resume li {
  display: list-item;
  font-size: 1.5rem;
}

.resume h2 {
  font-size: 2.25rem;
  text-align: center;
  color: var(--h4-text-color);
}

.resume h3 {
  font-size: 2rem;
  color: var(--h4-text-color);
  padding-bottom: 1rem;
  border-bottom: 0.5rem solid var(--h3-border-color);
}

.resume h4 {
  font-size: 1.75rem;
  color: var(--h4-text-color);
}

.resume p {
  margin: 0;
  font-size: 1.5rem;
}

.resume p:has(time) {
  color: var(--dates-color);
}

.resume a {
  display: inline-block;
  color: var(--link-text-color);
  text-shadow: 2px 2px 0 var(--link-shadow-color);
  text-decoration: none;
  border-radius: 4px;
}

.resume a:focus-visible {
  color: var(--link-text-color-hover);
  text-shadow: none;
  outline: 2px solid var(--link-outline-color);
  outline-offset: 4px;
}

@media (hover: hover) {
  a:hover {
    color: var(--link-text-color-hover);
    text-shadow: none;
    text-decoration: underline;
  }
}

@media (max-width: 960px) {
  .resume {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 560px) {
  .resume .skills__list {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
