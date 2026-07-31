<script lang="ts">
	import { NavigationMenu } from 'bits-ui';
	import { resolve } from '$app/paths';
	import { legislatives } from '$lib/data/data';
	import { government } from '$lib/data/government.data';
	import { services } from '$lib/data/services.data';
	import ChevronDown from '$lib/icons/chevron-down.svelte';
	import { navItem } from '$lib/snippets/nav-item.snippet.svelte';
</script>

<NavigationMenu.Root class="page-section-root">
	<NavigationMenu.List class="page-section-list">
		<NavigationMenu.Item class="page-section-item">
			<NavigationMenu.Trigger class="page-section-trigger">
				<a href={resolve('/services')} onclick={(e) => e.stopPropagation()}>
					Services <ChevronDown /></a
				>
			</NavigationMenu.Trigger>
			<NavigationMenu.Content class="page-section-content">
				<ul>
					{#each services.data as service (service.name)}
						{@render navItem({
							name: service.name,
							url: service.url
						})}
					{/each}
				</ul>
			</NavigationMenu.Content>
		</NavigationMenu.Item>

		<NavigationMenu.Item class="page-section-item">
			<NavigationMenu.Trigger class="page-section-trigger">
				<a href={resolve('/government')} onclick={(e) => e.stopPropagation()}>
					Government <ChevronDown /></a
				>
			</NavigationMenu.Trigger>
			<NavigationMenu.Content class="page-section-content">
				<ul>
					{#each government.data as gov (gov.name)}
						{@render navItem({
							name: gov.name,
							url: gov.url
						})}
					{/each}
				</ul>
			</NavigationMenu.Content>
		</NavigationMenu.Item>

		<NavigationMenu.Item class="page-section-item">
			<NavigationMenu.Trigger class="page-section-trigger">
				<a href={resolve('/legislative')} onclick={(e) => e.stopPropagation()}>
					Legislative <ChevronDown /></a
				>
			</NavigationMenu.Trigger>
			<NavigationMenu.Content class="page-section-content">
				<ul>
					{#each legislatives as legislative (legislative.name)}
						{@render navItem({
							name: legislative.name,
							url: legislative.url
						})}
					{/each}
				</ul>
			</NavigationMenu.Content>
		</NavigationMenu.Item>

		<NavigationMenu.Item>
			<NavigationMenu.Link class="page-section-link" href="/statistics"
				>Statistics</NavigationMenu.Link
			>
		</NavigationMenu.Item>

		<NavigationMenu.Item>
			<NavigationMenu.Link class="page-section-link" href="/transparency"
				>Transparency</NavigationMenu.Link
			>
		</NavigationMenu.Item>

		<NavigationMenu.Item>
			<NavigationMenu.Link class="page-section-link" href="/contact">Contact</NavigationMenu.Link>
		</NavigationMenu.Item>
	</NavigationMenu.List>
</NavigationMenu.Root>

<style>
	:global(.page-section-root) {
		display: none;
	}

	@media (min-width: 900px) {
		:global(.page-section-root) {
			display: block;
			position: relative;
		}
		:global(.page-section-list) {
			display: flex;
			gap: 2rem;
		}
		:global(.page-section-item) {
			position: relative;
		}
		:global(.page-section-trigger),
		:global(.page-section-link) {
			background: none;
			border: none;
			font-weight: 600;
		}
		:global(.page-section-trigger a) {
			display: inline-flex;
			align-items: center;
			gap: 0.75rem;
		}
		:global(.page-section-trigger a:hover),
		:global(.page-section-link:hover) {
			text-decoration: underline;
		}
		:global(.page-section-content) {
			padding: 1.25rem 1.5rem;
			width: max-content;
			position: absolute;
			top: calc(100% + 8px);
			left: 0;
			background-color: var(--neutral-3);
			border-radius: 2rem;
			transform-origin: top left;
			animation-duration: 160ms;
			animation-timing-function: ease-out;
			animation-fill-mode: both;
			box-shadow: rgba(149, 157, 165, 0.1) 0px 8px 24px;
		}

		:global(.page-section-content[data-state='open']) {
			animation-name: content-in;
		}

		:global(.page-section-content[data-state='closed']) {
			animation-name: content-out;
			animation-duration: 120ms;
			animation-timing-function: ease-in;
		}

		:global(.page-section-content ul) {
			display: flex;
			flex-direction: column;
			gap: 0.5rem;
		}

		:global(.page-section-content ul li:hover) {
			text-decoration: underline;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		:global(.page-section-content) {
			animation: none;
		}
	}
</style>
