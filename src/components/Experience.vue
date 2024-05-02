<template>
  <section>
    <h2 class="border-bottom my-4">Experience</h2>
    <div v-for="item in resume.experience" :key="`e4${item.id}`">
      <dl class="row mb-0 mt-3">
        <dt class="col-8">{{ item.organization }}</dt>
        <dd class="col text-end fw-bold">{{ item.period }}</dd>
      </dl>
      <p>{{ item.introduction }}</p>
      <ul>
        <li v-for="(con, i) in item.contributions" :key="`con${i}`">
          {{ con }}
        </li>
      </ul>
    </div>
  </section>
</template>
<script>
export default {
  props: { resume: { type: Object, required: true } },
};
</script>