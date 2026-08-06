<script>
	import { government } from "$lib/data/government.data";
	import { info } from "$lib/snippets/info.snippet.svelte";
	import { listItem } from "$lib/snippets/list-item.snippet.svelte";
</script>

<div class="wrapper">
	{@render info(government.heading, government.description)}
	<ul class="government-list">
		{#each government.data as gov (gov.name)}
			{@render listItem(gov.name, gov.url)}
		{/each}
	</ul>
</div>

<style>
	.wrapper {
		display: flex;
		flex-direction: column;

		.government-list {
			margin-top: 2rem;
			display: flex;
			flex-direction: column;
			gap: 0.5rem;
		}
	}
</style>
