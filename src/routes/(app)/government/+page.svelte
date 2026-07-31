<script>
	import { resolve } from '$app/paths';
	import { government } from '$lib/data/government.data';
	import ArrowRight from '$lib/icons/arrow-right.svelte';
	import { info } from '$lib/snippets/info.snippet.svelte';
</script>

<div class="wrapper">
	{@render info(government.heading, government.description)}
	<ul class="government-list">
		{#each government.data as gov (gov.name)}
			<li class="government-item">
				<a href={resolve(gov.url)} class="link">
					<ArrowRight />
					{gov.name}</a
				>
			</li>
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

			.government-item {
				width: max-content;
				border-bottom: 1px dotted var(--fg);
				transition: font-weight 0.3s ease;

				&:hover {
					border-bottom: 1px solid;
					font-weight: 600;
				}

				.link {
					display: flex;
					align-items: center;
					gap: 0.5rem;
				}
			}
		}
	}
</style>
