<script module lang="ts">
	import Info from "@lucide/svelte/icons/info";

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
		margin-top: 2rem;
		display: grid;
		grid-template-columns: 18px 1fr;
		align-items: start;
		gap: 0.75rem;

		:global(.icon) {
			margin-top: 0.125rem;
		}

		:global(.source-link) {
			text-decoration: underline;

			:global(&:hover) {
				text-decoration: none;
			}
		}
	}
</style>
