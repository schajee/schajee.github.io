<script setup lang="ts">
const experience = [
  {
    "period": "October 2023 till date",
    "organization": "Tech for Change, United States",
    "introduction": "Tech for Change is a civic innovation non-profit made up of a passionate community of technologists and talented professionals, driven by a strong belief in civic innovation and social impact that can move Pakistan forward in measurable and meaningful ways.",
    "contributions": [
      "Organizational restructuring and strategic planning for the 'Code for Pakistan' project.",
      "Developing standard operating procedures and policies for the all organizational functions.",
      "Client relationship management and business development, including proposal writing and project management.",
      "Leading community activities with volunteers and partners, including hackathons, workshops, and training sessions."
    ]
  },
  {
    "period": "Dec 2018 - till date",
    "organization": "AlphaX Decision Sciences, United States",
    "introduction": "AlphaX provides a suite of software and data management solutions for upstream oil and gas customers including independent and national oil companies and oilfield service companies.",
    "contributions": [
      "Lead the development of proprietary oil field analytics and planning software.",
      "Contributed towards the development of AI models for predicting oil well production in shale oil reserves in North America.",
      "Developed multiple small-scale software solutions for clients in US and KSA."
    ]
  },
  {
    "period": "July 2017 - Nov 2018",
    "organization": "Apollo Telecom, Pakistan",
    "introduction": "Apollo Telecom is Pakistan's premiere telecommunication services provider focusing on customer experience and integration. Apollo has been providing cutting edge IT solutions to over 150 customers for over 23 years.",
    "contributions": [
      "Provided project management, client coordination, and technical expertise for multiple local telecommunication clients (Ufone, Telenor, NTC) and for various government agencies (DGI&P, PITC).",
      "Lead a team of developers, quality and network engineers in the development and testing of products and delivery of projects.",
      "Participated in the development of operational and financial management systems, polices and standard operating procedures, and IT support."
    ]
  },
  {
    "period": "July 2016 - June 2017",
    "organization": "AAN Associates, Pakistan",
    "introduction": "AAN Associates is a development and communications consulting firm with offices in Pakistan and Norway, and specialises in facilitating and enabling development partners to explore innovative, sustainable and contextually relevant solutions to development challenges.",
    "contributions": [
      "Provided project management, client coordination, and technical expertise for 2 international and 1 regional consulting assignments of varying scope and size.",
      "Contributed to development of effective operational and financial management systems, polices and standard operating procedures, IT support and corporate branding and identity."
    ]
  },
  {
    "period": "Nov 2010 - Sep 2015",
    "organization": "Dech Enterprise (Pvt) Ltd, Pakistan",
    "introduction": "Dech was a consulting firm specialising in evaluation, research, and strategy extending services to a broad variety of clients in the non-profit, commercial and public sectors.",
    "contributions": [
      "Provided project management, client coordination, and technical expertise for 20 consulting projects of varying scope, size in a broad array of sectors (details given in the Projects & Consulting section below).",
      "Led and participated in the development of expressions of interest, project proposals, work plans, and budgets for dozens of consulting projects for international development agencies.",
      "Contributed to the development of an effective financial management system, and constantly improved upon the core operations policies and procedures and operational support functions including HR, project management and administration.",
      "Developed software, conducted data analysis, and wrote reports for multiple large scale research and evaluation projects."
    ]
  },
  {
    "period": "Aug 2009 - Mar 2010",
    "organization": "ePROTEA & FINEXUS Group, Malaysia",
    "introduction": "eProtea-Finexus is a Malaysian-based enterprise banking software solutions provider, which develops and markets its own intellectual property (IP) banking solutions for the banking industry locally and internationally.",
    "contributions": [
      "Led the office automation team in achieving paper-free work environment in the head office. Majority of the work revolved around requirement analysis and establishment of policies and procedures governing the employee habits in participating and documenting their work.",
      "As part of the project, developed and deployed a VoIP Softphone for internal office communications using Linux and Asterix as the backend communication server."
    ]
  },
  {
    "period": "May 2009 - July 2009",
    "organization": "Al-Madinah International University, Malaysia",
    "introduction": "Al-Madinah International University is a hybrid virtual-campus based university providing distance-learning and contemporary education to Muslims through modern yet suitable educational tools.",
    "contributions": [
      "Established the integrated Electronic Education Portals for Students, Faculty and Staff linked to the existing Learning Management System (LMS). The work involved a detailed analysis of the system requirements in the newly established offices for the procurement and development of software and hardware necessary for deployment.",
      "Setup the MEDIU website which was integrated with the above portals and the LMS"
    ]
  },
  {
    "period": "Mar 2001 - Jun 2005",
    "organization": "National Database and Registration Authority, Pakistan",
    "introduction": "NADRA is an attached department under the Ministry of Interior, Government of Pakistan and an independent corporate body with requisite autonomy to operate independently and facilitate good governance. NADRA provides solutions for identification, e-governance and secure documents that deliver multi-pronged goals of mitigating identity theft.",
    "contributions": [
      "Part of the team of developers and engineers that created and deployed the Machine Readable Passports and the Automated Border Control Systems",
      "Part of the team of engineers that developed and deployed the Vehicle Identification and Tracking System as well as the Electronic Road Pricing system for use on the motorways",
      "Part of the team of developers and designers that developed prototypes and deployed the National Identity Cards for Overseas Pakistanis, and Pakistan Origin Cards",
      "Part of team of developers that implemented Enterprise Resource Planning and Business Process Management using customized software in the overall workflow of the organization"
    ]
  }
]
</script>
<template>
  <section class="my-8 md:my-12 xl:my-16"
           id="experience">
           <SectionTitle title="Experience" icon="briefcase" />
    <div class="grid grid-cols-1 md:grid-cols-2 gap-1">
      <UCard v-for="item in experience"
             :ui="{ divide: 'divide-none', background: 'bg-gray-100 dark:bg-gray-900', body: { base: 'text-sm print:text-xs', padding: 'p2' }, header: { padding: 'pb-0' }, ring: 'ring-0', shadow: 'shadow-none', }">
        <template #header>
          <div class="flex">
            <h2 class="font-semibold flex-1">{{ item.organization }}</h2>
            <UBadge color="white">{{ item.period }}</UBadge>
          </div>
        </template>
        <p class="mb-4">{{ item.introduction }}</p>
        <ul class="list-disc ps-4">
          <li v-for="contribution in item.contributions">{{ contribution }}</li>
        </ul>
      </UCard>
    </div>
  </section>
</template>