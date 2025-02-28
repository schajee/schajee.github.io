<script setup lang="ts">
const columns = [
  { key: 'period', label: 'Period' },
  { key: 'designation', label: 'Designation' },
  { key: 'organization', label: 'Organization' },
  { key: 'sector', label: 'Sector' },
]
const employment = [
  {
    "period": "2022 till date",
    "designation": "Chief Executive Officer",
    "organization": "Code for Pakistan, PK",
    "sector": "Development"
  },
  {
    "period": "2018 till date",
    "designation": "Principal Engineer",
    "organization": "AlphaX Decision Sciences, US",
    "sector": "Energy"
  },
  {
    "period": "2017 - 2018",
    "designation": "Manager Technology and Development",
    "organization": "Apollo Telecom, PK",
    "sector": "Telecom"
  },
  {
    "period": "2016 - 2017",
    "designation": "Manager Knowledge and Systems",
    "organization": "AAN Associates, PK",
    "sector": "Development"
  },
  {
    "period": "2010 - 2015",
    "designation": "Managing Consultant",
    "organization": "Dech Enterprise, PK",
    "sector": "Development"
  },
  {
    "period": "2009 - 2010",
    "designation": "Consultant",
    "organization": "ePROTEA Sdn Bhd, MY",
    "sector": "Finance"
  },
  {
    "period": "2009 - 2010",
    "designation": "Consultant",
    "organization": "Al-Madinah International University, MY",
    "sector": "Education"
  },
  {
    "period": "2001 - 2005",
    "designation": "System Design Engineer",
    "organization": "National Database and Registration Authority, PK",
    "sector": "Government"
  }
]
</script>
<template>
  <section id="employment" class="my-8 md:my-12 xl:my-16">
           <SectionTitle title="Employment" icon="building-office" />
    <UCard
           :ui="{ divide: 'divide-none', background: 'bg-gray-100 dark:bg-gray-900', body: { padding: '' }, header: { padding: 'pb-0' }, ring: 'ring-0', shadow: 'shadow-none', }">
      <UTable :rows="employment"
              :ui="{ td: { base: 'whitespace-normal', padding: 'py-2' } }" />
    </UCard>
  </section>
</template>