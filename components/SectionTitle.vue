<script setup>
const props = defineProps(['title', 'icon'])
</script>
<template>
	<h1 class="text-2xl mb-4">{{ props.title }}</h1>
</template>
