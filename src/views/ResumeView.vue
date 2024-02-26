<script setup>
import { onMounted, onUnmounted } from 'vue';
import { useAboutStore } from '@/stores/about';
import ResumeAbout from '@/components/ResumeAbout.vue';
import ResumeContacts from '@/components/ResumeContacts.vue';
import ResumeSkills from '@/components/ResumeSkills.vue';
import ResumeLanguages from '@/components/ResumeLanguages.vue';
import ResumeExperience from '@/components/ResumeExperience.vue';
import ResumeEducation from '@/components/ResumeEducation.vue';
import ResumeProjects from '@/components/ResumeProjects.vue';

const aboutStore = useAboutStore();

onMounted(() => {
  if (aboutStore.about.name !== '' && aboutStore.about.position !== '') {
    document.title = `${aboutStore.about.name} — ${aboutStore.about.position}`;
  }
});

onUnmounted(() => {
  document.title = 'Resume Builder';
});
</script>
<template>
  <section class="resume">
    <div class="resume__column">
      <ResumeAbout />
      <ResumeContacts />
      <ResumeSkills />
      <ResumeLanguages />
    </div>

    <div class="resume__column">
      <ResumeExperience />
      <ResumeProjects />
      <ResumeEducation />
    </div>
  </section>
</template>
