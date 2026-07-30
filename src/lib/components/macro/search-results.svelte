<script lang="ts">
	import { resolve } from '$app/paths';
	import { getResults } from '$lib/search/search';
	import ArrowRight from '$lib/icons/arrow-right.svelte';

	type Props = {
		term: string;
	};
	let { term }: Props = $props();

	let results = $derived(getResults(term));
</script>

<div class="results">
	{#if results.length == 0}
		<p>No result found. Check spelling or try different keywords.</p>
	{:else}
		{#each results as result (result.item.url)}
			<a class="result" href={resolve(result.item.url)}>
				<ArrowRight />
				{result.item.title}</a
			>
		{/each}
	{/if}
</div>

<style>
	.results {
		padding: 1rem 1.25rem;
		background-color: var(--neutral-3);
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		border-radius: 2rem;

		.result {
			width: max-content;
			display: flex;
			align-items: center;
			gap: 0.5rem;
			border-bottom: 1px dotted var(--fg);
			transition: font-weight 0.3s ease;

			&:hover {
				border-bottom-style: solid;
				font-weight: 600;
			}
		}
	}
</style>
