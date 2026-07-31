<script>
	import { resolve } from '$app/paths';
	import { services } from '$lib/data/services.data';
	import ArrowRight from '$lib/icons/arrow-right.svelte';
	import { info } from '$lib/snippets/info.snippet.svelte';
</script>

<div class="wrapper">
	{@render info('Services', 'See all the services offered in Calapan, divided into categories.')}
	<ul class="services-list">
		{#each services.data as service (service.name)}
			<li class="service-item">
				<a href={resolve(service.url)} class="link">
					<ArrowRight />
					{service.name}</a
				>
			</li>
		{/each}
	</ul>
</div>

<style>
	.wrapper {
		display: flex;
		flex-direction: column;

		.services-list {
			margin-top: 2rem;
			display: flex;
			flex-direction: column;
			gap: 0.5rem;

			.service-item {
				width: max-content;
				border-bottom: 1px dotted var(--fg);
				transition: font-weight 0.3s ease;

				&:hover {
					border-bottom: 1px solid;
					font-weight: 600;
				}

				.link {
					display: flex;
					align-items: center;
					gap: 0.5rem;
				}
			}
		}
	}
</style>
