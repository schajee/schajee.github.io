<template>
  <article class="container">
    <div class="row align-items-center">
      <div class="col-md-8 align-self-center">
        <h1 class="display-1">
          <strong class="text-danger">shaji</strong
          ><span class="text-muted">ahmed</span>
        </h1>
      </div>
      <div class="col-md-4 align-self-center">
        <dl class="row mb-0">
          <dt class="col-2 col-md-4 col-lg-3 col-xl-2">Phone:</dt>
          <dd class="col-10 col-md-8 col-lg-9 col-xl-10">+92 (307) 4353378</dd>
          <dt class="col-2 col-md-4 col-lg-3 col-xl-2">Email:</dt>
          <dd class="col-10 col-md-8 col-lg-9 col-xl-10">schajee@gmail.com</dd>
        </dl>
      </div>
    </div>

    <h2 class="border-bottom my-4">Profile</h2>
    <p>
      In a career spanning almost 15 years, I have had multiple opportunities to
      develop comprehensive understanding of the needs and requirements of
      technology for various sectors and industries. I have been fortunate
      enough to have worked on innovative projects alongside some of the
      industry stalwarts, allowing me to improve upon my skills and grow as a
      person and as a professional. I like to describe myself as a person who
      provides innovative solutions to complex problems, and someone who brings
      alternative thought-processes to the table.
    </p>

    <h2 class="border-bottom my-4">Expertise</h2>
    <ul class="columns">
      <li v-for="(item, i) in resume.expertise" :key="`e1${i}`">{{ item }}</li>
    </ul>

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
              <a :href="item.url" target="_blank">{{ item.organization }}</a>
            </td>
            <td>{{ item.sector }}</td>
          </tr>
        </tbody>
      </table>
    </div>

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
              <a :href="item.url" target="_blank">{{ item.university }}</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

  </article>
</template>

<script>
import data from '@/data.json'
export default {
  name: "Short",
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