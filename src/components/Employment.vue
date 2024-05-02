<template>
  <section>
    <h2 class="border-bottom my-4">Employment</h2>
    <div class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Period</th>
            <th scope="col">Designation</th>
            <th scope="col">Organization</th>
            <th scope="col">Sector</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in resume.employment" :key="`e2${item.id}`">
            <th scope="row">{{ item.period }}</th>
            <td>{{ item.designation }}</td>
            <td>
              <a :href="item.url" target="_blank" rel="noopener">{{ item.organization }}</a>
            </td>
            <td>{{ item.sector }}</td>
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