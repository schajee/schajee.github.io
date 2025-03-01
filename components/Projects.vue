<script setup lang="ts">
const projects = [
  {
    "period": "May 2019 - Oct 2019",
    "organization": "Aramco Services Company (ASC), United States",
    "project": "Directional Drilling Tendencies",
    "description": "As Lead Engineer, developed a custom software implementation of predicting drill head locations up to 100ft ahead of the bit, using sensor data and machine learning models."
  },
  {
    "period": "Aug 2017 - Nov 2018",
    "organization": "Pak Telecom Mobile Limited (Ufone), Pakistan",
    "project": "Bespoke Software Development",
    "description": "As Team Lead, lead the presales and software design and development for multiple projects for Ufone, including development and integration of their web chat module, integration of FWBL and Unilever in their IPCC infrastructure, Smart Kissan project for LMKT, and transition from a customized CMS solution to MS Dynamics."
  },
  {
    "period": "Dec 2017 - Nov 2018",
    "organization": "Bank Alfalah, Power IT Company (WAPDA), DGI&P",
    "project": "IPCC related development and deployments",
    "description": "As Team Lead, lead the presales and software development for multiple on-site IPCC deployments for various government agencies and private banks. These projects included customization of in-house software to cater to customers' demands, developing customized reports, tools, and related interfaces, and designing and developing interactive voice response systems. "
  },
  {
    "period": "Dec 2016 - Jun 2017",
    "organization": "UNICEF, Jordan",
    "project": "Evaluation of The Ma'An Campaign “Together towards a Safe School Environment”",
    "description": "As Data Analyst designed tabulation plan and conducted analysis of annual survey data available for the last four years. The Ma'An campaign is designed to make schools safer for children by changing social norms around violence against children, educating teachers about their rights and responsibilities, and fostering accountability amongst care-givers. Available data spans from 2012-2016 and covers over 3,500 schools."
  },
  {
    "period": "Nov 2016 - Mar 2017",
    "organization": "UNICEF, Jordan",
    "project": "Rapid Assessment of the “Makani Integrated Programme” Jordan",
    "description": "As Research Analyst main responsibilities included collecting, collating, and organising secondary and primary research and data, analysis of focus group discussion and key informant interview notes and transcripts, analysis of interim progress reports, and other programme activities. UNICEF Jordan's Makani Integrated Programme, is an initiative that aims to provide a comprehensive package of services to vulnerable children and youth including psychosocial support, life skills and learning support in a safe and nourishing environment."
  },
  {
    "period": "Dec 2016 - Apr 2017",
    "organization": "Ecorys, United Kingdom",
    "project": "Baseline surveys of targeted groups concerning delivery of government services in Rule of Law (RoL) related departments",
    "description": "As Project Coordinator and Research Manager main responsibilities included client and team coordination, developing and designing tabulation plans and survey instruments, supervision of survey field teams, development of survey and training manuals, as well as quality assurance. The purpose of these surveys was to establish baseline against a number of indicators included in the Punjab Rule of Law Roadmap and understand existing situation/practices."
  },
  {
    "period": "Feb 2016 - Jun 2016",
    "organization": "Riphah International University, Pakistan",
    "project": "Development of Business Intelligence dashboards for Project Management Unit ",
    "description": "As Consultant designed and developed an electronic Business Intelligence (BI) dashboard for the development projects being carried out by the university. The dashboard intends to provide concise and meaningful analysis on data collected from the Project Management and Finance units. "
  },
  {
    "period": "Oct 2015 - Mar 2016",
    "organization": "Fori Mazdoori (Pvt) Ltd, Pakistan",
    "project": "Technology infrastructure development for Fori Mazdoori",
    "description": "As Consultant lead the technical research and development of the product for both national and international markets (skillbazaar.co), upgraded the existing online platform for Fori Mazdoori and provided API level interfaces for connectivity with mobile and other planned applications. "
  },
  {
    "period": "Feb 2015 - May 2015",
    "organization": "Department for International Development (DFID), United Kingdom",
    "project": "Impact assessment of rural livelihood interventions supported by DFID in areas of Sindh and Balochistan affected by 2012 floods",
    "description": "As Research and Data Management Specialist main responsibilities included developing an understanding of the assignment through detailed discussions with DFID, FAO and Concern, development of the analytical framework and work plans, identification of key questions and indicators, overseeing the data collection and cleaning process, data analysis, and report preparation. The project was a follow-up to the baseline study and covered a little over 2,000 respondents. The study included both qualitative and quantitative aspects and provided statistical benchmarks on the performances of each of the 25 interventions given to the flood-affected in three districts of Sindh and Balochistan."
  },
  {
    "period": "Dec 2013 - Aug 2014",
    "organization": "Department for International Development (DFID), United Kingdom",
    "project": "Developing a baseline study of rural livelihoods in areas affected by 2012 floods",
    "description": "As Data Management Specialist main responsibilities included detailed discussions with DFID, FAO and Concern, analysis of proposed logical frameworks and work plans, identification of key questions and indicators, analysis of the proposed beneficiary data and structures, development of sampling frame, and preparing the methodology for the baseline."
  },
  {
    "period": "Apr 2013 - Oct 2014",
    "organization": "Asian Development Bank (ADB)",
    "project": "TeleTaleem project - Design, management, and research (DMR) consulting package",
    "description": "As Research Manager main responsibilities included designing, developing and conducting research for the DMR consulting package, providing statistical foundation to the medium and long-term strategic plans for TeleTaleem."
  },
  {
    "period": "Jun 2012 - Mar 2013",
    "organization": "TeleTaleem (Pvt) Ltd, Pakistan",
    "project": "Ilm (meaning ‘education') on Wheels, under the Ilm Ideas Programme managed by DAI Europe and funded by UKaid / DFID",
    "description": "As Data Management Specialist main responsibilities included development of tools required for M&E, designing and conducting the baseline assessment and impact assessments, conducting data analysis of the impact, and contribute to the end of project evaluation report."
  },
  {
    "period": "May 2012 - Sep 2012",
    "organization": "UN High Commissioner for Refugees (UNHCR), Pakistan",
    "project": "Technical support for response to the Afghan Population Profiling, Verification and Response project",
    "description": "As Project Manager main responsibilities include planning and executing all project activities, ensuring development and maintenance of the software needed for extraction and reporting of project data and conducting workshops and trainings for the stakeholders. Key activities included training & data needs assessments of UNHCR, Govt. of Pakistan and Govt. of Afghanistan, development of software / analytical reports and training of representatives of the same organisations in application of the data and reports in policy and programme implementation."
  },
  {
    "period": "Apr 2012 - Jul 2012",
    "organization": "Rural Support Programmes Network (RSPN), Pakistan",
    "project": "Mid-Term Evaluation of the Pakistan Domestic Biogas Programme (PDBP)",
    "description": "As Data Management Expert and Analyst main responsibilities included a comprehensive and exhaustive review of all background material, progress reports, training manuals, biogas user surveys and RSPN and EKN summary reports on the PDBP. Carried out a detailed analysis of the sector development strategy, work plans, marketing materials / campaigns and prepared the final report. The objective of the assignment was to assess the progress of the PDBP and to provide recommendations for the improvement of the implementation of the Programme for the remaining project period as well as for the design of a possible follow-up phase."
  },
  {
    "period": "Jan 2011 - Jan 2012",
    "organization": "UN High Commissioner for Refugees (UNHCR), Pakistan",
    "project": "Afghan Population Profiling, Verification & Response (Roll-out phase)",
    "description": "As Technology Solutions Expert main responsibilities included the development of survey instruments, data analysis and project management tools, and oversight of technical aspects of the project, planning, human resource management, coordination, financial management and reporting of the technical component. Along with all software development, responsibilities included designing of databases, networking setups and troubleshooting, support for the developed software, documentation, analysis and reporting on the findings of the survey. The project included community mapping, household listing, data collection from 120,000 households - almost a million people - through an integrated software also developed by the technical team of EBDM, qualitative community assessments of over 500 communities, data validation, process monitoring, data analysis, reporting and master training of almost 1,000 field staff. Performed a key technical role in the preparation and acquisition of the US$ 10 Million project."
  },
  {
    "period": "Dec 2010 - Jan 2011",
    "organization": "UN High Commissioner for Refugees (UNHCR), Pakistan",
    "project": "Profile of the internally displaced persons from the floods of 2010 in Pakistan",
    "description": "As Analyst main responsibilities included cleaning, collating and analysing WATAN/ATM card data collected and digitized by NADRA and preparing the final analytical report for UNHCR and GoP. WATAN cards were issued to more than 1 million individuals across Pakistan in the aftermath of the 2010 floods. The process was facilitated by NADRA through rapid registration of all flood-affected persons."
  },
  {
    "period": "Oct 2010 - Dec 2010",
    "organization": "Royal Norwegian Embassy (RNE), Pakistan",
    "project": "Mid-term external review of the Chitral Integrated Area Development Programme",
    "description": "As Analyst main responsibilities included compilation and subsequent analysis of (a) the physical project data, (b) the internal M&E records and (c) the budget versus disaggregated expenditures classified by result area, and analysis and preparation of the final report. The Chitral Integrated Area Development Programme was a five-year (2009-2013) development programme funded jointly by the Norwegian and Dutch governments for a total contribution of NOK 100 million. The objective of the MTR was to assess the progress of the CIADP and to provide recommendations for the improvement of the implementation of the programme."
  },
  {
    "period": "Aug 2010 - Dec 2010",
    "organization": "UN High Commissioner for Refugees (UNHCR), Pakistan",
    "project": "Afghan Population Profiling, Verification & Response project (Pilot phase) + Research Study on Economic Activities of Afghan Refugees in Pakistan",
    "description": "As Technology Solutions Expert main responsibilities included development of survey instruments, data analysis and project management tools, and oversight of technical aspects of the project, planning, human resource management, coordination, financial management and reporting of the technical component. The projects were based on a software-assisted sample survey of 15,000 households. Key activities included household listing, data collection, qualitative research, M&E, trainings of over 120 field staff, community assessments, quantitative analysis, key informant interviews, data validation and analytical reporting."
  },
  {
    "period": "Aug 2009 - Mar 2010",
    "organization": "ePROTEA-FINEXUS Group, Malaysia",
    "project": "Office automation of corporate headquarters",
    "description": "As an independent consultant brought in to streamline the communication framework used within the multiple offices of the organization, responsibilities included analysis of the existing practices, proposal of the new architecture and implementation of the solution using tried and tested technologies and methodologies without disrupting the existing business workflows."
  },
  {
    "period": "May 2009 - Jul 2009",
    "organization": "Al-Madinah International University, Malaysia",
    "project": "Establishment of Student and Faculty Portals and website integrated with the Online Learning Management System",
    "description": "As an independent consultant brought in to help establish the newly setup virtual university, responsibilities included setting up of Student, Faculty and Staff portals integrated with a proprietary Learning Management System. Along with the portals, the main website for the university was also setup using open-source CMS which was also integrated with the LMS."
  },
  {
    "period": "Jan 2005 - Jun 2005",
    "organization": "National Database and Registration Authority (NADRA), Pakistan",
    "project": "Automated Border Control System",
    "description": "As the System Design Engineer on the project, responsibilities included overall system design, research and analysis of existing technologies, project management, identification and procurement of technologies required for the implementation, identification of possible local manufacturers for the fabrication of the system and ensuring that the prototype is ready for production. The project was envisaged as a tool for law-enforcement agencies in eradicating illegal immigration and human trafficking. The Automated Border Control System is fully automated immigration control system linked with the central passport server. It authenticates e-Passport, identity and other travel documents by performing on spot facial recognition and fingerprint identification. It also keeps records of automated data verification, passenger travel history, flight information, destination, port-of-origin, and nationality."
  },
  {
    "period": "Jan 2004 - Dec 2004",
    "organization": "National Database and Registration Authority (NADRA), Pakistan",
    "project": "Machine Readable Passports",
    "description": "As the System Design Engineer on the Machine Readable Passport project, responsibilities included research and analysis of available solutions, identification of all printing equipment, passport booklet design, design of the MRP data page, system architecture and design, overseeing the development of the software used for data entry and printing of passport booklets. The Multi-Biometric e-Passport solution uses overt and covert security features supported by sophisticated technology and business logic. The centralized and decentralized e-Passport solutions incorporate RFID chips, ghost images, and LaTeX screen printing."
  },
  {
    "period": "Aug 2003 - Dec 2003",
    "organization": "National Database and Registration Authority (NADRA), Pakistan",
    "project": "Vehicle Identification and Tracking System, and Electronic Road Pricing",
    "description": "As the Design Engineer of the VITS and ERP projects, responsibilities included research and analysis of available technologies, procurement of hardware necessary for implementing the desired solution, research and development on the technologies used in the project, providing development support to the engineers and developers implementing the project. The system uses Radio Frequency Identification Device (RFID) technology to identify vehicles approaching ‘manned' & ‘unmanned' check-posts at entry/exit points with real-time monitoring at the central control room. RFID passive contact-less chips are placed on vehicle's windshield that contain vehicle's details, linked with the owner's details."
  },
  {
    "period": "Mar 2003 - Jul 2003",
    "organization": "National Database and Registration Authority (NADRA), Pakistan",
    "project": "Enterprise Resource Planning and Business Process Management",
    "description": "As the Process Design Engineer of the ERP/BPM project, responsibilities included leading the team of developers and managers in identifying and streamlining the daily business practices, designing better and more efficient business processes, developing software to eliminate the dependencies on documents and setting up reporting and analysis services for the management to view the overall functioning of the organization."
  }
]
</script>
<template>
  <section id="projects" class="my-8 md:my-12 xl:my-16">
    <SectionTitle title="Projects"
                  icon="document-check" />
    <div class="grid grid-cols-1 md:grid-cols-2 gap-1">
      <UCard v-for="item in projects"
             :ui="{ divide: 'divide-none', background: 'bg-gray-100 dark:bg-gray-900', body: { base: 'text-sm print:text-xs' }, header: { padding: 'pb-0' }, ring: 'ring-0', shadow: 'shadow-none', }">
        <template #header>
          <h2 class="font-semibold col-span-8">{{ item.project }}</h2>
          <div class="flex gap-1 mt-2 text-sm">
            <span class="flex-1">{{ item.organization }}</span>
            <UBadge color="white">{{ item.period }}</UBadge>
          </div>
        </template>
        <p>{{ item.description }}</p>
      </UCard>
    </div>
  </section>
</template>