<script setup lang="ts">
const expertise = [
  "Systems Analysis and Design",
  "Enterprise Resource Planning",
  "(Software) Project Management",
  "Business Process Management",
  "Organisation and Strategy",
  "Research / Evaluation",
  "Data and Knowledge Management",
  "Software / Web Development",
  "Machine Learning",
  "Multimedia and Graphic Design"
]
</script>
<template>
  <section id="expertise" class="my-8 md:my-12 xl:my-16">
    <SectionTitle title="Expertise" icon="trophy" />
    <UCard
           :ui="{ divide: 'divide-none', body: { padding: 'sm:p-4' }, background: 'bg-gray-100 dark:bg-gray-900', header: { padding: 'pb-0' }, ring: 'ring-0', shadow: 'shadow-none', }">
        <UBadge color="white" class="m-1" v-for="item in expertise" :label="item" />
    </UCard>
  </section>
</template>