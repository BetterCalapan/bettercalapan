<script>
	import { resolve } from "$app/paths";
	import { business } from "$lib/data/services.data";
	import { info } from "$lib/snippets/info.snippet.svelte";
	import { listItem } from "$lib/snippets/list-item.snippet.svelte";
</script>

<div class="wrapper">
	{@render info(business.heading, business.description)}
	<ul class="certificates-list">
		{#each business.data as b (b.name)}
			{@render listItem(b.name, b.url)}
		{/each}
	</ul>
	<p class="office">
		If you need any of these, head to the
		<a class="link" href={resolve("/(app)/contact")}>Calapan City Hall</a>
		and ask for what you need.
	</p>
</div>

<style>
	.wrapper {
		display: flex;
		flex-direction: column;

		.certificates-list {
			margin: 2rem 0;
			display: flex;
			flex-direction: column;
			gap: 0.5rem;
		}
		.office {
			.link {
				text-decoration: underline;

				&:hover {
					text-decoration: none;
				}
			}
		}
	}
</style>
