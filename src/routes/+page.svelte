<script lang="ts">
	export let data = {};
	console.log(data);
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>
<template>
	<div class="flex flex-wrap gap-5 justify-center bg-background px-12 py-12">
		{#each data.recipes as { meta, filePath }, i}
			<div>{meta.title} {filePath}</div>
		{/each}
	</div>
</template>

<style>
</style>
