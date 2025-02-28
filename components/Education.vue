<script setup lang="ts">
const education = [
  {
    "period": "2005 - 2009",
    "major": "Multimedia (Film and Animation)",
    "university": "Multimedia University, MY",
  },
  {
    "period": "1997 - 1999",
    "major": "Computer Science",
    "university": "National University of Computing and Emerging Sciences, PK",
  }
]
</script>
<template>
  <section id="education" class="my-8 md:my-12 xl:my-16">
    <SectionTitle title="Education" icon="book-open" />
    <UCard
           :ui="{ divide: 'divide-none', background: 'bg-gray-100 dark:bg-gray-900', body: { padding: '' }, header: { padding: 'pb-0' }, ring: 'ring-0', shadow: 'shadow-none', }">
      <UTable :rows="education" :ui="{ td: { base: 'whitespace-normal', padding: 'py-2' } }" />
    </UCard>
  </section>
</template>