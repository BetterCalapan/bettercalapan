<script lang="ts">
	import type { RouteId } from '$app/types';
	import { resolve } from '$app/paths';
	import favicon from '$lib/assets/favicon.svg';
	import Menu from '$lib/icons/menu.svelte';

	type PageSection = {
		name: string;
		url: RouteId;
	};

	const pageSections: PageSection[] = [
		{
			name: 'services',
			url: '/services'
		},
		{
			name: 'government',
			url: '/government'
		},
		{
			name: 'statistics',
			url: '/statistics'
		},
		{
			name: 'legislative',
			url: '/legislative'
		},
		{
			name: 'transparency',
			url: '/transparency'
		},
		{
			name: 'contact',
			url: '/contact'
		}
	];
</script>

<header>
	<div class="wrapper">
		<img src={favicon} alt="BetterCalapan logo" width="32" height="32" />
		<button class="menu-btn" aria-label="Menu button">
			<Menu />
		</button>
		<ul class="page-section-list">
			{#each pageSections as pageSection (pageSection.name)}
				<li class="page-section">
					<a class="link" href={resolve(pageSection.url)}
						>{pageSection.name[0].toUpperCase() + pageSection.name.slice(1)}</a
					>
				</li>
			{/each}
		</ul>
	</div>
</header>

<style>
	header {
		padding: 1rem;
		background-color: var(--bg);
		display: grid;
		place-items: center;

		.wrapper {
			width: 100%;
			max-width: 80rem;
			display: flex;
			align-items: center;
			justify-content: space-between;

			.menu-btn {
				padding: 0;
				aspect-ratio: 1 / 1;
				width: 2rem;
				border: none;
				background: none;
			}

			.page-section-list {
				display: none;

				.page-section {
					.link {
						color: var(--fg);
						font-size: 1.125rem;
						font-weight: 600;

						&:hover {
							text-decoration: underline;
						}
					}
				}
			}
		}
	}

	@media (min-width: 900px) {
		header {
			.menu-btn {
				display: none;
			}
			.wrapper {
				.page-section-list {
					display: flex;
					gap: 2rem;
				}
			}
		}
	}
</style>
