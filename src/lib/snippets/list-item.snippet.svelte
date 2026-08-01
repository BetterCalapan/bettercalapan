<script module lang="ts">
	import type { RouteId } from '$app/types';
	import { resolve } from '$app/paths';
	import ArrowRight from '$lib/icons/arrow-right.svelte';

	export { listItem };
</script>

{#snippet listItem(name: string, url: RouteId)}
	<li class="item">
		<a class="link" href={resolve(url)}>
			<div class="icon">
				<ArrowRight />
			</div>
			{name}
		</a>
	</li>
{/snippet}

<style>
	/* NOTE: styles of exported snippets are stripped in build, a workaround is doing :global() */
	/* REF: https://github.com/sveltejs/svelte/issues/16404 */
	:global(.item) {
		width: 100%;
		border-bottom: 1px dotted var(--fg);

		:global(&:hover) {
			border-bottom: 1px solid;
		}

		:global(.link) {
			display: grid;
			grid-template-columns: 18px 1fr;
			gap: 0.5rem;

			:global(.icon) {
				margin-top: 0.25rem;
			}
		}
	}

	@media (min-width: 600px) {
		:global(.item) {
			width: max-content;
		}
	}
</style>
