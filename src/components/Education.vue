<template>
  <section>
    <h2 class="border-bottom my-4">Education</h2>
    <div class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Period</th>
            <th scope="col">Coursework</th>
            <th scope="col">University</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in resume.education" :key="`e3${item.id}`">
            <th scope="row">{{ item.period }}</th>
            <td>{{ item.major }}</td>
            <td>
              <a :href="item.url" target="_blank" rel="noopener">{{ item.university }}</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>
<script>
export default {
  props: { resume: { type: Object, required: true } },
};
</script>