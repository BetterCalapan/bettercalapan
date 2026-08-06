<script lang="ts">
	import { resolveRoute } from "$lib/utils/paths";
	import { getResults } from "$lib/search/search";
	import ArrowRight from "@lucide/svelte/icons/arrow-right";

	type Props = {
		term: string;
	};
	let { term }: Props = $props();

	let results = $derived(getResults(term));
</script>

<div class="wrapper">
	<div class="results">
		{#if results.length == 0}
			<p>No result found. Check spelling or try different keywords.</p>
		{:else}
			{#each results.slice(0, 5) as result (result.item.url)}
				<a class="result" href={resolveRoute(result.item.url)}>
					<div class="icon">
						<ArrowRight />
					</div>
					{result.item.title}</a
				>
			{/each}
		{/if}
	</div>
</div>

<style>
	.wrapper {
		.results {
			width: 100%;
			padding: 1rem 1.25rem;
			background-color: var(--neutral-3);
			display: flex;
			flex-direction: column;
			gap: 0.5rem;
			border-radius: 2rem;

			.result {
				width: max-content;
				max-width: 18rem;
				display: grid;
				grid-template-columns: 20px 1fr;
				gap: 0.5rem;
				border-bottom: 1px solid var(--neutral-3);

				&:hover {
					border-bottom: 1px solid var(--fg);
				}

				.icon {
					margin-top: 0.125rem;
				}
			}
		}
	}
</style>
