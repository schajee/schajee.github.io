<script setup lang="ts">
const skills = {
  Languages: [
    "Python",
    "JavaScript",
    "PHP",
    "C#",
    "SQL",
    "HTML/CSS",
  ],
  Frameworks: [
    "Django",
    "FastAPI",
    "Laravel",
    "Node.js",
    "Vue.js / NUXT",
    "jQuery",
    "Drupal",
    "WordPress",
    "HTMX",
    "Strapi",
  ],
  Libraries: [
    'Pandas',
    'Numpy',
    'Scikit-learn',
  ],
  Databases: [
    "Microsoft SQL Server",
    "MySQL",
    "PostgreSQL",
    "SQLite",
    "Redis",
    "Supabase"
  ],
  Packages: [
    "Visual Studio",
    "MS Office",
    "Adobe",
    "SPSS",
    "Anaconda"
  ],
  Platforms: [
    "Digital Ocean",
    "Firebase",
    "AWS",
    "Azure",
    "Google Cloud",
  ],
  Tools: [
    'Docker',
    'Git',
    'Pip',
    'Vite',
    'Composer',
    'Webpack'
  ],
  IDEs: [
    'Visual Studio Code',
    'Sublime Text',
    'Visual Studio',
    'SQL Server Management Studio',
    'MySQL Workbench',
    'Postman',
  ]
}
</script>
<template>
  <section id="skills" class="my-8 md:my-12 xl:my-16 print:break-before-page">
    <SectionTitle title="Skills" icon="bug-ant" />
    <UCard
           :ui="{ divide: 'divide-none', body: { padding: 'sm:p-4' }, background: 'bg-gray-100 dark:bg-gray-900', ring: 'ring-0', shadow: 'shadow-none', }">
    <div class="grid grid-cols-12">
      <template v-for="items, tech in skills">
        <div class="col-span-2 font-semibold text-sm"> {{ tech }}: </div>
        <div class="col-span-10">
          <template v-for="item in items">
            <UBadge color="gray" class="whitespace-nowrap m-1">{{ item }}</UBadge>
          </template>
        </div>
      </template>
    </div>
    </UCard>
  </section>
</template>