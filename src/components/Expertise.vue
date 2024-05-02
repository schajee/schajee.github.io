<template>
  <section>
    <h2 class="border-bottom my-4">Expertise</h2>
    <ul class="columns">
      <li v-for="(item, i) in resume.expertise" :key="`e1${i}`">{{ item }}</li>
    </ul>
  </section>
</template>
<script>
export default {
  props: { resume: { type: Object, required: true } },
};
</script>