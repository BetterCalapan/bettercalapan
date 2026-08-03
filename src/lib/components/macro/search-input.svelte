<script lang="ts">
	import { goto } from '$app/navigation';
	import SearchResults from '$lib/components/macro/search-results.svelte';
	import Search from '@lucide/svelte/icons/search';

	let { term, showResults } = $props();

	let searchTerm = $derived(term);
	let submittedSearchTerm: string | null = $state(null);
	let timer: ReturnType<typeof setTimeout> | undefined;
	const DURATION = 500;

	function handlerSearch() {
		if (timer) clearTimeout(timer);

		timer = setTimeout(() => {
			if (searchTerm == '') {
				submittedSearchTerm = null;
				return;
			}
			submittedSearchTerm = searchTerm.trim();
			showResults = true;
		}, DURATION);
	}
	function handlerSubmit(e: SubmitEvent) {
		e.preventDefault();
		// showSearchInput = !showSearchInput;
		goto(`/search?term=${searchTerm.split(' ').join('+')}`);
		showResults = false;
		// inputValue = '';
	}
</script>

<form class="search-input" onsubmit={handlerSubmit}>
	<input
		type="text"
		name="search"
		id="search"
		autocomplete="off"
		spellcheck="false"
		bind:value={searchTerm}
		oninput={handlerSearch}
	/>
	<button type="submit" class="search-button" aria-label="Search button">
		<div class="icon">
			<Search />
		</div>
	</button>
</form>
{#if submittedSearchTerm && showResults}
	<SearchResults term={submittedSearchTerm} />
{/if}

<style>
	.search-input {
		display: grid;
		grid-template-columns: 1fr 3.25rem;

		input {
			padding: 0 1.25rem;
			background-color: var(--neutral-3);
			border: none;
			border-radius: 2rem 0 0 2rem;
			font-size: 1.125rem;
		}
		.search-button {
			display: grid;
			place-items: center;
			aspect-ratio: 1 / 1;
			background-color: var(--neutral-1);
			border: none;
			border-radius: 0 2rem 2rem 0;
			transition: background-color 0.3s ease;

			&:hover {
				background-color: var(--neutral-2);
			}

			.icon {
				aspect-ratio: 1 / 1;
				width: 18px;
			}
		}
	}
</style>
