<template>
  <section>
    <h2 class="border-bottom my-4">Projects</h2>
    <div v-for="item in resume.projects" :key="`p${item.id}`">
      <dl class="row mb-0 mt-3">
        <dt class="col-8 col-sm-10">{{ item.organization }}</dt>
        <dd class="col-4 col-sm-2 text-end fw-bold">{{ item.period }}</dd>
      </dl>
      <h6>{{ item.project }}</h6>
      <p>{{ item.description }}</p>
    </div>
  </section>
</template>
<script>
export default {
  props: { resume: { type: Object, required: true } },
};
</script>