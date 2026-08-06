<script>
	import { services } from "$lib/data/services.data";
	import { info } from "$lib/snippets/info.snippet.svelte";
	import { listItem } from "$lib/snippets/list-item.snippet.svelte";
</script>

<div class="wrapper">
	{@render info("Services", "See all the services offered in Calapan, divided into categories.")}
	<ul class="services-list">
		{#each services.data as service (service.name)}
			{@render listItem(service.name, service.url)}
		{/each}
	</ul>
</div>

<style>
	.wrapper {
		display: flex;
		flex-direction: column;

		.services-list {
			margin-top: 2rem;
			display: flex;
			flex-direction: column;
			gap: 0.5rem;
		}
	}
</style>
