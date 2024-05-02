<template>
  <article class="container">
    <contact />
    <profile />
    <expertise :resume="resume" />
    <skills :resume="resume" />
    <employment :resume="resume" />
    <education :resume="resume" />
    <experience :resume="resume" />
    <projects :resume="resume" />
  </article>
</template>

<script>
import data from '@/data.json'
import Contact from '@/components/Contact.vue'
import Profile from '@/components/Profile.vue'
import Expertise from '@/components/Expertise.vue'
import Skills from '@/components/Skills.vue'
import Employment from '@/components/Employment.vue'
import Education from '@/components/Education.vue'
import Experience from '@/components/Experience.vue'
import Projects from '@/components/Projects.vue'
export default {
  components: { Contact, Profile, Expertise, Skills, Employment, Education, Experience, Projects },
  data() {
    return {
      resume: data
    };
  },
};
</script>
<style>
@media (min-width: 768px) {
  ul.columns {
    columns: 2;
    -webkit-columns: 2;
    -moz-columns: 2;
  }
}
</style>