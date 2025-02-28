<script setup>
const props = defineProps(['title', 'icon'])
</script>
<template>
	<h1 class="text-2xl mb-4"><UIcon :name="`i-heroicons:${props.icon}`" class="me-1 " />{{ props.title }}</h1>
</template>
