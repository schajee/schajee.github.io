<template>
  <div class="flex flex-col min-h-screen">
    <Navbar />
    <UDivider orientation="horizontal" />
    <UContainer class="py-4 sm:py-6 lg:py-8 grow">
      <slot />
    </UContainer>
  </div>
</template>
