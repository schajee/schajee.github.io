<template>
    <section>
        <h2 class="border-bottom my-4">Skills</h2>
    <dl class="row">
      <template v-for="(skill, i) in resume.skills">
        <dt class="col-12 col-sm-2 col-lg-1" :key="`sdt${i}`">
          {{ skill.name }}:
        </dt>
        <dd class="col-12 col-sm-10 col-lg-11" :key="`sdd${i}`">
          {{ skill.items.join(", ") }}
        </dd>
      </template>
    </dl>
</section>
</template>
<script>
export default {
  props: { resume: { type: Object, required: true } },
};
</script>