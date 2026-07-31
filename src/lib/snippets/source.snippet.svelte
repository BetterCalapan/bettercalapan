<script module lang="ts">
	import Info from '$lib/icons/info.svelte';

	export { source };
</script>

{#snippet source(description: string, linkLabel: string, linkURL: string)}
	<div class="source">
		<div class="icon">
			<Info />
		</div>
		<p>
			{description}
			<a class="source-link" href={linkURL} target="_blank" rel="external noopener noreferrer">
				{linkLabel}
			</a>.
		</p>
	</div>
{/snippet}

<style>
	/* NOTE: styles of exported snippets are stripped in build, a workaround is doing :global() */
	/* REF: https://github.com/sveltejs/svelte/issues/16404 */
	:global(.source) {
		display: grid;
		grid-template-columns: 18px 1fr;
		align-items: start;
		gap: 0.75rem;

		:global(.icon) {
			margin-top: 0.25rem;
		}

		:global(.source-link) {
			text-decoration: underline;

			:global(&:hover) {
				text-decoration: none;
			}
		}
	}
</style>
