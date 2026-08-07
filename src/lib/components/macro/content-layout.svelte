<script lang="ts">
	import Breadcrumb from "$lib/components/macro/breadcrumb.svelte";
	import OnThisPage from "$lib/components/macro/on-this-page.svelte";
	import RelatedContent from "$lib/components/macro/related-content.svelte";
	import type { Snippet } from "svelte";

	type LinkItem = {
		name: string;
		url: string;
	};
	type PageSection = {
		id: string;
		name: string;
	};

	let {
		breadcrumbs = [],
		children,
		onThisPage = [],
		relatedContent = [],
		title
	}: {
		breadcrumbs?: LinkItem[];
		children: Snippet;
		onThisPage?: PageSection[];
		relatedContent?: LinkItem[];
		title: string;
	} = $props();
</script>

<Breadcrumb {breadcrumbs} currentPage={title} />

<div class="content-layout">
	<article class="article-content">
		{@render children()}
	</article>

	<aside class="content-sidebar">
		{#if onThisPage.length > 0}
			<OnThisPage {onThisPage} />
		{/if}
		{#if relatedContent.length > 0}
			<RelatedContent {relatedContent} />
		{/if}
	</aside>
</div>

<style>
	.content-sidebar {
		display: none;
	}

	@media (min-width: 900px) {
		.content-layout {
			display: grid;
			grid-template-columns: 1fr 20rem;
			gap: 8rem;
		}

		.content-sidebar {
			margin-top: 2.5rem;
			position: sticky;
			top: 2.5rem;
			display: flex;
			flex-direction: column;
			align-self: start;
			gap: 2rem;
			max-height: calc(100vh - 2rem);
			overflow-y: auto;
		}

		:global(.article-content h1) {
			font-size: 3rem;
		}
	}
</style>
