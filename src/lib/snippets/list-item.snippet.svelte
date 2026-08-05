<script module lang="ts">
	import type { RouteId } from '$app/types';
	import { resolve } from '$app/paths';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';

	export { listItem };
</script>

{#snippet listItem(name: string, url: RouteId | string)}
	{@const external = url.startsWith('http')}

	<li class="item">
		<a
			class="link"
			href={external ? url : resolve(url as RouteId)}
			target={external ? '_blank' : undefined}
			rel={external ? 'noopener noreferrer' : undefined}
		>
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
			align-items: start;
			gap: 0.5rem;

			:global(.icon) {
				margin-top: 0.125rem;
				width: 20px;
			}
		}
	}

	@media (min-width: 600px) {
		:global(.item) {
			width: max-content;
		}
	}
</style>
