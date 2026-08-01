<script module lang="ts">
	export { info };
</script>

{#snippet info(name: string, description: string)}
	<div class="brief-info">
		<h1 class="heading">{name}</h1>
		<p class="description">{description}</p>
	</div>
{/snippet}

<style>
	/* NOTE: styles of exported snippets are stripped in build, a workaround is doing :global() */
	/* REF: https://github.com/sveltejs/svelte/issues/16404 */
	:global(.brief-info .heading) {
		margin-left: -2px;
		margin-bottom: 0.5rem;
		font-size: 2rem;
		line-height: 1.25;
	}
	:global(.brief-info .description) {
		max-width: 40rem;
	}

	@media (min-width: 900px) {
		:global(.brief-info .heading) {
			font-size: 3rem;
		}
	}
</style>
