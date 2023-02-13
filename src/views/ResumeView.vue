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
  document.title = `${aboutStore.about.name} — ${aboutStore.about.position}`;

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
      <ResumeEducation />
      <ResumeProjects />
    </div>
  </section>
</template>

<style>
.resume {
  font-stretch: 85%;
  display: grid;
  grid-template-columns: 430px 1fr;
  gap: 3rem;
  align-content: start;
}

.resume section,
.resume ul,
.resume article {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 1rem;
}

.resume p,
.resume li {
  font-size: 1.5rem;
}

.resume ul {
  list-style: initial;
  padding-left: 40px;
}

.resume li {
  display: list-item;
}

.resume .link {
  text-decoration: underline;
  color: var(--black);
}

.resume .link:focus-visible {
  outline: 2px solid var(--accentColor);
  outline-offset: 4px;
}

.resume .link:hover {
  text-decoration: none;
}

.resume .column {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 2rem;
}

.resume .heading {
  margin: 0;
}

.resume .heading--2xl {
  font-size: 2.25rem;
  text-align: center;
}

.resume .heading--xl {
  font-size: 2rem;
  padding-bottom: 1rem;
  border-bottom: 0.5rem solid var(--accentColor);
}

.resume .heading--l {
  font-size: 1.75rem;
}

.resume .about__text,
.resume .experience-card__achievement,
.resume .education-card__achievement,
.resume .project-card__description {
  white-space: pre-wrap;
  word-break: break-word;
}

.resume .skills__list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 1.5rem;
  align-content: start;
}

.resume .card-dates {
  color: var(--gray);
}

.resume .project-card__link {
  display: inline-block;
}

@media (max-width: 960px) {
  .resume {
    grid-template-columns: 1fr;
  }
}
</style>
