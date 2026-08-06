<script lang="ts">
	import type { Link, ExternalLink } from "$lib/types/link.types";
	import { info } from "$lib/snippets/info.snippet.svelte";
	import { listItem } from "$lib/snippets/list-item.snippet.svelte";

	const prefix = "/(app)";
	const mainNavigation: Link[] = [
		{
			name: "Home",
			url: "/"
		},
		{
			name: "Services",
			url: `${prefix}/services`
		},
		{
			name: "Government",
			url: `${prefix}/government`
		},
		{
			name: "Statistics",
			url: `${prefix}/statistics`
		},
		{
			name: "Contact",
			url: `${prefix}/contact`
		}
	];

	const services: Link[] = [
		{
			name: "Certificates",
			url: `${prefix}/services/certificates`
		},
		{
			name: "Business",
			url: `${prefix}/services/business`
		}
	];

	const government: Link[] = [
		{
			name: "Officials",
			url: `${prefix}/government/officials`
		},
		{
			name: "Departments",
			url: `${prefix}/government/departments`
		},
		{
			name: "Barangays",
			url: `${prefix}/government/barangays`
		}
	];

	const externalResources: ExternalLink[] = [
		{
			name: "Official Calapan Website",
			url: "https://cityofcalapan.gov.ph"
		},
		{
			name: "Official Oriental Mindoro Website",
			url: "https://ormindoro.gov.ph"
		},
		{
			name: "Philippine Statistics Authority",
			url: "https://psa.gov.ph"
		},
		{
			name: "Freedom of Information",
			url: "https://foi.gov.ph"
		}
	];

	const others: Link[] = [
		{
			name: "Terms of Use",
			url: `${prefix}/terms-of-use`
		},
		{
			name: "Privacy Policy",
			url: `${prefix}/privacy-policy`
		},
		{
			name: "Accessibility",
			url: `${prefix}/accessibility`
		}
	];
</script>

<div class="page-wrapper">
	{@render info("Sitemap", "Navigate all pages and services of BetterCalapan.")}
	<div class="content">
		<section class="main-navigation">
			<h2>Main Navigation</h2>
			<ul class="main-navigation-list">
				{#each mainNavigation as item (item.name)}
					{@render listItem(item.name, item.url)}
				{/each}
			</ul>
		</section>
		<section class="services">
			<h2>Services</h2>
			<ul class="services-list">
				{#each services as item (item.name)}
					{@render listItem(item.name, item.url)}
				{/each}
			</ul>
		</section>
		<section class="government">
			<h2>Government</h2>
			<ul class="government-list">
				{#each government as item (item.name)}
					{@render listItem(item.name, item.url)}
				{/each}
			</ul>
		</section>
		<section class="external-resources">
			<h2>External Resources</h2>
			<ul class="external-resources-list">
				{#each externalResources as item (item.name)}
					{@render listItem(item.name, item.url)}
				{/each}
			</ul>
		</section>
		<section class="others">
			<h2>Others</h2>
			<ul class="others-list">
				{#each others as item (item.name)}
					{@render listItem(item.name, item.url)}
				{/each}
			</ul>
		</section>
	</div>
</div>

<style>
	.page-wrapper {
		display: flex;
		flex-direction: column;
		gap: 2rem;

		.content {
			display: flex;
			flex-direction: column;
			gap: 2rem;

			section {
				display: flex;
				flex-direction: column;
				gap: 0.25rem;

				ul {
					display: flex;
					flex-direction: column;
					gap: 0.5rem;
				}
			}
		}
	}

	@media (min-width: 900px) {
		.page-wrapper {
			.content {
				display: grid;
				grid-template-columns: repeat(3, 1fr);
				gap: 2rem 6rem;
			}
		}
	}
</style>
