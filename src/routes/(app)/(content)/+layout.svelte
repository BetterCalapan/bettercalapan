<script lang="ts">
	let { children } = $props();
</script>

<div class="page-content">
	{@render children()}
</div>

<style>
	:global(.article-content h1),
	:global(.article-content h2) {
		margin-bottom: 0.25rem;
		margin-top: 2rem;
		scroll-margin-top: 1rem;
	}

	:global(.article-content p),
	:global(.article-content li) {
		font-size: 1.125rem;
	}

	:global(.article-content p),
	:global(.article-content ul) {
		margin-bottom: 1rem;
	}

	:global(.article-content ul) {
		padding-left: 1.25rem;
		list-style-type: disc;
	}

	:global(.article-content a) {
		color: var(--fg);
		text-decoration: underline;
	}
	:global(.article-content a:hover) {
		text-decoration: none;
	}
</style>
